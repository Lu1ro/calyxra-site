import { NextResponse } from 'next/server';
import crypto from 'crypto';
import {
  sendEmail,
  auditNotificationEmail,
  auditConfirmationEmail,
  monthlyWelcomeEmail,
} from '../../../../lib/email';

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const TOOL_URL = process.env.NEXT_PUBLIC_TOOL_URL || 'https://calyxra-tool-production.up.railway.app';

/**
 * Fondy payment callback webhook
 * Verifies HMAC SHA1 signature, sends emails, creates account for monthly plan
 */
export async function POST(req: Request) {
  try {
    const contentType = req.headers.get('content-type') || '';
    let params: Record<string, string> = {};

    if (contentType.includes('application/x-www-form-urlencoded')) {
      const text = await req.text();
      const urlParams = new URLSearchParams(text);
      urlParams.forEach((value, key) => {
        params[key] = value;
      });
    } else {
      const body = await req.json();
      const data = body.response || body;
      for (const [key, value] of Object.entries(data)) {
        params[key] = String(value);
      }
    }

    const { order_id, order_status, amount, currency, signature, sender_email } = params;

    if (!signature) {
      console.error('Fondy callback: Missing signature');
      return NextResponse.json({ error: 'Missing signature' }, { status: 400 });
    }

    // Verify signature
    const fondyKey = process.env.FONDY_PAYMENT_KEY?.trim();
    if (!fondyKey) {
      console.error('Fondy callback: FONDY_PAYMENT_KEY not configured');
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    const signatureParams = Object.entries(params)
      .filter(([key]) => key !== 'signature' && key !== 'response_signature_string')
      .filter(([, value]) => value !== '' && value !== undefined && value !== null)
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([, value]) => value);

    const signatureString = `${fondyKey}|${signatureParams.join('|')}`;
    const calculatedSignature = crypto
      .createHash('sha1')
      .update(signatureString)
      .digest('hex');

    if (calculatedSignature !== signature) {
      console.error('Fondy callback: Invalid signature', {
        order_id,
        expected: calculatedSignature,
        received: signature,
      });
      return NextResponse.json({ error: 'Invalid signature' }, { status: 403 });
    }

    // Signature valid
    const amountNum = amount ? parseInt(amount) : 0;
    const customerEmail = sender_email || params.sender_email || '';

    console.log('Fondy callback: Payment verified', {
      order_id,
      order_status,
      amount: amountNum ? (amountNum / 100).toFixed(2) : 'N/A',
      currency,
      customerEmail,
    });

    if (order_status === 'approved') {
      console.log(`Fondy: Payment APPROVED for order ${order_id}`);

      // Determine product from order_id (format: calyxra_{product}_{timestamp})
      const isMonthly = order_id?.includes('monthly');
      const isAudit = order_id?.includes('audit');

      // 1. Send notification to team
      try {
        const teamEmail = auditNotificationEmail(
          customerEmail || 'unknown',
          amountNum,
          order_id || 'N/A'
        );
        await sendEmail(teamEmail);
        console.log('Fondy: Team notification email sent');
      } catch (emailErr) {
        console.error('Fondy: Failed to send team notification:', emailErr);
      }

      // 2. Send confirmation to customer
      if (customerEmail) {
        try {
          if (isMonthly) {
            // For monthly plan: create account on SaaS platform and send credentials
            const tempPassword = crypto.randomBytes(8).toString('hex');

            // Create account on the SaaS platform
            try {
              const internalSecret = process.env.INTERNAL_API_SECRET;
              const registerRes = await fetch(`${TOOL_URL}/api/auth/register`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  ...(internalSecret ? { 'x-internal-secret': internalSecret } : {}),
                },
                body: JSON.stringify({
                  email: customerEmail,
                  password: tempPassword,
                  name: customerEmail.split('@')[0],
                  tier: 'pilot',
                }),
              });

              if (registerRes.ok) {
                console.log(`Fondy: Account created for ${customerEmail}`);
              } else {
                const errText = await registerRes.text();
                console.error(`Fondy: Account creation failed: ${errText}`);
              }
            } catch (regErr) {
              console.error('Fondy: Account creation request failed:', regErr);
            }

            // Send welcome email with credentials
            const welcomeEmail = monthlyWelcomeEmail(customerEmail, tempPassword, TOOL_URL);
            await sendEmail(welcomeEmail);
            console.log('Fondy: Welcome email sent to customer');
          } else {
            // For audit: send confirmation email
            const confirmEmail = auditConfirmationEmail(customerEmail);
            await sendEmail(confirmEmail);
            console.log('Fondy: Confirmation email sent to customer');
          }
        } catch (emailErr) {
          console.error('Fondy: Failed to send customer email:', emailErr);
        }
      }
    } else if (order_status === 'declined') {
      console.log(`Fondy: Payment DECLINED for order ${order_id}`);
    } else if (order_status === 'expired') {
      console.log(`Fondy: Payment EXPIRED for order ${order_id}`);
    } else {
      console.log(`Fondy: Unknown status "${order_status}" for order ${order_id}`);
    }

    return NextResponse.json({ status: 'ok' }, { status: 200 });
  } catch (error: unknown) {
    console.error('Fondy callback error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
