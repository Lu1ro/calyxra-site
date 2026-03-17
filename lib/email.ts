// lib/email.ts | Resend email client + branded templates

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM = "Calyxra <hello@calyxra.com>";
const GREEN = "#1B6B45";

interface EmailPayload {
  to: string;
  subject: string;
  html: string;
}

export async function sendEmail({ to, subject, html }: EmailPayload) {
  return resend.emails.send({ from: FROM, to, subject, html });
}

// ── Template 1: Audit purchase notification → team ──

export function auditNotificationEmail(
  customerEmail: string,
  amountCents: number,
  sessionId: string
): EmailPayload {
  const amount = (amountCents / 100).toFixed(2);
  return {
    to: "calyxra.team@gmail.com",
    subject: `New Audit Purchase — ${customerEmail}`,
    html: `
      <div style="font-family:Inter,sans-serif;max-width:560px;margin:0 auto;padding:32px;background:#f9fafb;border-radius:12px">
        <h2 style="color:${GREEN};margin:0 0 16px">💰 New Audit Purchase</h2>
        <table style="width:100%;border-collapse:collapse;font-size:14px">
          <tr><td style="padding:8px 0;color:#6b7280">Customer</td><td style="padding:8px 0;font-weight:600">${customerEmail}</td></tr>
          <tr><td style="padding:8px 0;color:#6b7280">Amount</td><td style="padding:8px 0;font-weight:600">$${amount}</td></tr>
          <tr><td style="padding:8px 0;color:#6b7280">Session ID</td><td style="padding:8px 0;font-size:12px;font-family:monospace">${sessionId}</td></tr>
        </table>
        <hr style="border:none;border-top:1px solid #e5e7eb;margin:20px 0">
        <p style="font-size:14px;color:#374151;margin:0 0 8px"><strong>Next steps:</strong></p>
        <ol style="font-size:13px;color:#6b7280;padding-left:20px;margin:0">
          <li>Email customer to collect API credentials</li>
          <li>Run reconciliation</li>
          <li>Send branded PDF report within 48h</li>
        </ol>
      </div>
    `,
  };
}

// ── Template 2: Audit confirmation → customer ──

export function auditConfirmationEmail(customerEmail: string): EmailPayload {
  return {
    to: customerEmail,
    subject: "Your Calyxra Audit is Confirmed ✅",
    html: `
      <div style="font-family:Inter,sans-serif;max-width:560px;margin:0 auto;padding:32px;background:#f9fafb;border-radius:12px">
        <h2 style="color:${GREEN};margin:0 0 16px">Payment Received ✅</h2>
        <p style="font-size:15px;color:#374151;line-height:1.6;margin:0 0 16px">
          Thank you for your purchase! We'll email you within <strong>2 hours</strong> 
          to collect your Shopify and ad platform credentials.
        </p>
        <p style="font-size:15px;color:#374151;line-height:1.6;margin:0 0 24px">
          Your Revenue Leak Audit will be delivered within <strong>48 hours</strong> 
          as a branded PDF report with actionable recommendations.
        </p>
        <div style="background:${GREEN};border-radius:8px;padding:16px;text-align:center;margin:0 0 24px">
          <p style="color:#fff;font-size:14px;margin:0"><strong>What's included:</strong></p>
          <p style="color:#d1fae5;font-size:13px;margin:4px 0 0">
            Full reconciliation · Root cause breakdown · Campaign-level true ROAS · 
            Budget reallocation plan · 3 actionable recommendations
          </p>
        </div>
        <p style="font-size:13px;color:#9ca3af;margin:0">
          Questions? Reply to this email or contact 
          <a href="mailto:calyxra.team@gmail.com" style="color:${GREEN}">calyxra.team@gmail.com</a>
        </p>
      </div>
    `,
  };
}

// ── Template 3: Monthly welcome → customer ──

export function monthlyWelcomeEmail(
  customerEmail: string,
  tempPassword: string,
  toolUrl: string
): EmailPayload {
  return {
    to: customerEmail,
    subject: "Welcome to Calyxra — Your Login Details",
    html: `
      <div style="font-family:Inter,sans-serif;max-width:560px;margin:0 auto;padding:32px;background:#f9fafb;border-radius:12px">
        <h2 style="color:${GREEN};margin:0 0 16px">Welcome to Calyxra 🎉</h2>
        <p style="font-size:15px;color:#374151;line-height:1.6;margin:0 0 16px">
          Your monthly reconciliation plan is active. Here are your login credentials:
        </p>
        <div style="background:#fff;border:1px solid #e5e7eb;border-radius:8px;padding:20px;margin:0 0 20px">
          <table style="width:100%;font-size:14px">
            <tr><td style="padding:6px 0;color:#6b7280">Email</td><td style="padding:6px 0;font-weight:600">${customerEmail}</td></tr>
            <tr><td style="padding:6px 0;color:#6b7280">Password</td><td style="padding:6px 0;font-family:monospace;font-size:13px;background:#f3f4f6;padding:4px 8px;border-radius:4px">${tempPassword}</td></tr>
          </table>
        </div>
        <p style="font-size:13px;color:#ef4444;margin:0 0 20px">
          ⚠️ Please change your password after your first login.
        </p>
        <a href="${toolUrl}/login" style="display:block;background:${GREEN};color:#fff;text-align:center;padding:14px;border-radius:8px;text-decoration:none;font-weight:600;font-size:15px;margin:0 0 24px">
          Log In to Your Dashboard →
        </a>
        <p style="font-size:13px;color:#9ca3af;margin:0">
          Questions? Contact <a href="mailto:calyxra.team@gmail.com" style="color:${GREEN}">calyxra.team@gmail.com</a>
        </p>
      </div>
    `,
  };
}
