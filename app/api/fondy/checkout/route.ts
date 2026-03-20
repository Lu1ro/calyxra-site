import { NextResponse } from 'next/server';
import crypto from 'crypto';

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const PRODUCTS = {
  audit: {
    amount: 24900,
    currency: 'USD',
    order_desc: 'Calyxra Source-of-Truth Audit',
  },
  monthly: {
    amount: 15000,
    currency: 'USD',
    order_desc: 'Calyxra Monthly Reconciliation',
  },
} as const;

function generateSignature(params: Record<string, string | number>, paymentKey: string): string {
  const sorted = Object.entries(params)
    .filter(([, value]) => value !== '' && value !== undefined && value !== null)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([, value]) => value);

  const signatureString = `${paymentKey}|${sorted.join('|')}`;
  console.log('[Fondy] Signature string (before SHA1):', signatureString);
  return crypto.createHash('sha1').update(signatureString).digest('hex');
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { product } = body as { product: 'audit' | 'monthly'; email?: string };

    console.log('[Fondy] Checkout request received:', { product });

    if (!product || !PRODUCTS[product]) {
      return NextResponse.json(
        { error: 'Invalid product. Use "audit" or "monthly".' },
        { status: 400 }
      );
    }

    const merchantId = process.env.FONDY_MERCHANT_ID;
    const paymentKey = process.env.FONDY_PAYMENT_KEY;

    console.log('[Fondy] merchant_id:', merchantId);
    console.log('[Fondy] payment_key exists:', !!paymentKey);
    console.log('[Fondy] payment_key length:', paymentKey?.length);

    if (!merchantId || !paymentKey) {
      const missing = !merchantId ? 'FONDY_MERCHANT_ID' : 'FONDY_PAYMENT_KEY';
      console.error(`[Fondy] Missing env var: ${missing}`);
      return NextResponse.json(
        { error: `Payment system not configured: missing ${missing}` },
        { status: 500 }
      );
    }

    const { amount, currency, order_desc } = PRODUCTS[product];
    const orderId = `calyxra_${Date.now()}_${Math.random().toString(36).slice(2)}`;

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://calyxra.com';

    // merchant_id must be a string for Fondy
    const requestParams: Record<string, string | number> = {
      merchant_id: String(merchantId),
      order_id: orderId,
      order_desc,
      amount,
      currency,
      response_url: `${baseUrl}/thank-you?plan=${product}`,
      server_callback_url: `${baseUrl}/api/fondy/callback`,
    };

    const signature = generateSignature(requestParams, paymentKey);

    const fondyPayload = {
      request: {
        ...requestParams,
        signature,
      },
    };

    console.log('[Fondy] Sending to Fondy API:', JSON.stringify(fondyPayload, null, 2));

    const fondyResponse = await fetch('https://pay.fondy.eu/api/checkout/url/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(fondyPayload),
    });

    const fondyRawText = await fondyResponse.text();
    console.log('[Fondy] Response status:', fondyResponse.status);
    console.log('[Fondy] Response body:', fondyRawText);

    let fondyData;
    try {
      fondyData = JSON.parse(fondyRawText);
    } catch {
      console.error('[Fondy] Failed to parse response as JSON');
      return NextResponse.json(
        { error: `Fondy returned non-JSON response (status ${fondyResponse.status}): ${fondyRawText.slice(0, 200)}` },
        { status: 500 }
      );
    }

    if (fondyData.response?.checkout_url) {
      console.log('[Fondy] Success! Checkout URL:', fondyData.response.checkout_url);
      return NextResponse.json({ checkout_url: fondyData.response.checkout_url });
    }

    const errorCode = fondyData.response?.error_code;
    const errorMessage = fondyData.response?.error_message;
    const requestId = fondyData.response?.request_id;

    console.error('[Fondy] Checkout failed:', {
      error_code: errorCode,
      error_message: errorMessage,
      request_id: requestId,
      full_response: fondyData,
    });

    return NextResponse.json(
      {
        error: errorMessage || 'Failed to create checkout session.',
        error_code: errorCode || null,
        request_id: requestId || null,
      },
      { status: 500 }
    );
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error);
    console.error('[Fondy] Unexpected error:', message);
    return NextResponse.json(
      { error: `Internal server error: ${message}` },
      { status: 500 }
    );
  }
}
