import { NextResponse } from 'next/server';
import crypto from 'crypto';

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Fondy payment callback webhook
 * Accepts POST with application/x-www-form-urlencoded or JSON body
 * Verifies HMAC SHA1 signature using FONDY_PAYMENT_KEY
 */
export async function POST(req: Request) {
  try {
    const contentType = req.headers.get('content-type') || '';
    let params: Record<string, string> = {};

    // Parse body based on content type
    if (contentType.includes('application/x-www-form-urlencoded')) {
      const text = await req.text();
      const urlParams = new URLSearchParams(text);
      urlParams.forEach((value, key) => {
        params[key] = value;
      });
    } else {
      // JSON body
      const body = await req.json();
      // Fondy may wrap data in a "response" key
      const data = body.response || body;
      for (const [key, value] of Object.entries(data)) {
        params[key] = String(value);
      }
    }

    const { order_id, order_status, amount, currency, signature } = params;

    if (!signature) {
      console.error('Fondy callback: Missing signature');
      return NextResponse.json({ error: 'Missing signature' }, { status: 400 });
    }

    // Verify HMAC SHA1 signature
    const fondyKey = process.env.FONDY_PAYMENT_KEY;
    if (!fondyKey) {
      console.error('Fondy callback: FONDY_PAYMENT_KEY not configured');
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    // Build signature string:
    // 1. Exclude 'signature' and 'response_signature_string' from params
    // 2. Sort remaining params alphabetically by key
    // 3. Filter out empty values
    // 4. Join values with '|'
    // 5. Prepend payment key + '|'
    // 6. SHA1 hash the result
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

    // Signature valid — log the payment result
    console.log('Fondy callback: Payment verified', {
      order_id,
      order_status,
      amount: amount ? (parseInt(amount) / 100).toFixed(2) : 'N/A',
      currency,
    });

    // Handle payment status
    if (order_status === 'approved') {
      console.log(`Fondy: Payment approved for order ${order_id}`);
      // TODO: Add business logic here (e.g., send confirmation emails, update database)
    } else if (order_status === 'declined') {
      console.log(`Fondy: Payment declined for order ${order_id}`);
    } else if (order_status === 'expired') {
      console.log(`Fondy: Payment expired for order ${order_id}`);
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
