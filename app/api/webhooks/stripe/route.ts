// app/api/webhooks/stripe/route.ts | Stripe webhook handler

import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import crypto from "crypto";
import {
  sendEmail,
  auditNotificationEmail,
  auditConfirmationEmail,
  monthlyWelcomeEmail,
} from "../../../../lib/email";

export const runtime = "nodejs";

function getStripe() {
  return new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2024-12-18.acacia",
  });
}

export async function POST(req: NextRequest) {
  const body = await req.text();
  const sig = req.headers.get("stripe-signature");

  if (!sig) {
    return NextResponse.json({ error: "Missing signature" }, { status: 400 });
  }

  const stripe = getStripe();
  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    console.error("Webhook signature verification failed:", (err as Error).message);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;
        const plan = session.metadata?.plan;
        const email = session.customer_email;

        if (!email) {
          console.warn("Webhook: checkout.session.completed without email");
          break;
        }

        if (plan === "audit") {
          // Notify team
          const notification = auditNotificationEmail(
            email,
            session.amount_total || 0,
            session.id
          );
          await sendEmail(notification).catch((e: unknown) =>
            console.error("Failed to send audit notification:", e)
          );

          // Confirm to customer
          const confirmation = auditConfirmationEmail(email);
          await sendEmail(confirmation).catch((e: unknown) =>
            console.error("Failed to send audit confirmation:", e)
          );
        }

        if (plan === "monthly") {
          // Generate temp password
          const tempPassword = crypto.randomBytes(16).toString("hex");

          // Create account on tool (3001)
          const toolUrl = process.env.NEXT_PUBLIC_TOOL_URL || "http://localhost:3001";
          try {
            const registerRes = await fetch(`${toolUrl}/api/auth/register`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.INTERNAL_API_SECRET}`,
              },
              body: JSON.stringify({
                name: email.split("@")[0],
                email,
                password: tempPassword,
              }),
            });

            if (!registerRes.ok) {
              const errData = await registerRes.json().catch(() => ({}));
              console.error("Failed to create account on tool:", errData);
            }
          } catch (e) {
            console.error("Failed to reach tool for registration:", e);
          }

          // Send welcome email with temp credentials
          const welcome = monthlyWelcomeEmail(email, tempPassword, toolUrl);
          await sendEmail(welcome).catch((e: unknown) =>
            console.error("Failed to send welcome email:", e)
          );
        }

        break;
      }

      case "customer.subscription.deleted": {
        const subscription = event.data.object as Stripe.Subscription;
        const customerId =
          typeof subscription.customer === "string"
            ? subscription.customer
            : subscription.customer.id;

        // Fire and forget — disable account on tool
        const toolUrl = process.env.NEXT_PUBLIC_TOOL_URL || "http://localhost:3001";
        fetch(`${toolUrl}/api/agencies/disable`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.INTERNAL_API_SECRET}`,
          },
          body: JSON.stringify({ stripeCustomerId: customerId }),
        }).catch(() => {}); // fire and forget

        break;
      }
    }
  } catch (err) {
    console.error("Webhook handler error:", err);
    // Still return 200 to Stripe to prevent retries
  }

  return NextResponse.json({ received: true }, { status: 200 });
}
