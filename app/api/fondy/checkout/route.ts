import { NextResponse } from 'next/server';
import crypto from 'crypto';

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const PRODUCTS: Record<string, { amount: string; currency: string; order_desc: string }> = {
  audit: {
    amount: '24900',
    currency: 'USD',
    order_desc: 'Calyxra Source-of-Truth Audit',
  },
  monthly: {
    amount: '15000',
    currency: 'USD',
    order_desc: 'Calyxra Monthly Reconciliation',
  },
};

function generateSignature(params: Record<string, string>, paymentKey: string): string {
  const sorted = Object.entries(params)
    .filter(([, value]) => value !== '' && value !== undefined && value !== null)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([, value]) => value);

  const signatureString = `${paymentKey}|${sorted.join('|')}`;
  return crypto.createHash('sha1').update(signatureString).digest('hex');
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { product } = body as { product: string; email?: string };

    if (!product || !PRODUCTS[product]) {
      return NextResponse.json(
        { error: 'Invalid product. Use "audit" or "monthly".' },
        { status: 400 }
      );
    }

    const merchantId = process.env.FONDY_MERCHANT_ID?.trim();
    const paymentKey = process.env.FONDY_PAYMENT_KEY?.trim();

    if (!merchantId || !paymentKey) {
      return NextResponse.json(
        { error: 'Payment system is not configured.' },
        { status: 500 }
      );
    }

    const { amount, currency, order_desc } = PRODUCTS[product];
    const orderId = `calyxra_${Date.now()}_${Math.random().toString(36).slice(2)}`;

    const baseUrl = (process.env.NEXT_PUBLIC_BASE_URL || 'https://calyxra.com').trim().replace(/\/+$/, '');

    // All values MUST be strings for correct Fondy signature
    const requestParams: Record<string, string> = {
      merchant_id: String(merchantId),
      order_id: orderId,
      order_desc,
      amount,
      currency,
      response_url: `${baseUrl}/thank-you?plan=${product}`,
      server_callback_url: `${baseUrl}/api/fondy/callback`,
    };

    const signature = generateSignature(requestParams, paymentKey);

    const fondyResponse = await fetch('https://pay.fondy.eu/api/checkout/url/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        request: {
          ...requestParams,
          signature,
        },
      }),
    });

    const fondyData = await fondyResponse.json();

    if (fondyData.response?.checkout_url) {
      return NextResponse.json({ checkout_url: fondyData.response.checkout_url });
    }

    console.error('[Fondy] Checkout failed:', fondyData);
    return NextResponse.json(
      { error: fondyData.response?.error_message || 'Failed to create checkout session.' },
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
