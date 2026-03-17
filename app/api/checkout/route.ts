// app/api/checkout/route.ts | Stripe Checkout session creation

import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export const runtime = "nodejs";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-12-18.acacia",
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { plan, email } = body;

    if (!plan || !["audit", "monthly"].includes(plan)) {
      return NextResponse.json(
        { error: "Invalid plan. Must be 'audit' or 'monthly'" },
        { status: 400 }
      );
    }

    const priceId =
      plan === "audit"
        ? process.env.STRIPE_PRICE_AUDIT!
        : process.env.STRIPE_PRICE_MONTHLY!;

    const baseUrl = process.env.NEXTAUTH_URL || "http://localhost:3000";

    const session = await stripe.checkout.sessions.create({
      mode: plan === "audit" ? "payment" : "subscription",
      line_items: [{ price: priceId, quantity: 1 }],
      customer_email: email || undefined,
      success_url: `${baseUrl}/thank-you?plan=${plan}&session={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/#pricing`,
      metadata: { plan },
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Checkout error:", err);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
