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
  return crypto.createHash('sha1').update(signatureString).digest('hex');
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { product } = body as { product: 'audit' | 'monthly'; email?: string };

    if (!product || !PRODUCTS[product]) {
      return NextResponse.json(
        { error: 'Invalid product. Use "audit" or "monthly".' },
        { status: 400 }
      );
    }

    const merchantId = process.env.FONDY_MERCHANT_ID;
    const paymentKey = process.env.FONDY_PAYMENT_KEY;

    if (!merchantId || !paymentKey) {
      console.error('Fondy checkout: Missing FONDY_MERCHANT_ID or FONDY_PAYMENT_KEY');
      return NextResponse.json(
        { error: 'Payment system is not configured.' },
        { status: 500 }
      );
    }

    const { amount, currency, order_desc } = PRODUCTS[product];
    const orderId = `calyxra_${Date.now()}_${Math.random().toString(36).slice(2)}`;

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://calyxra.com';

    const requestParams: Record<string, string | number> = {
      merchant_id: merchantId,
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

    console.error('Fondy checkout error:', fondyData);
    return NextResponse.json(
      { error: fondyData.response?.error_message || 'Failed to create checkout session.' },
      { status: 500 }
    );
  } catch (error: unknown) {
    console.error('Fondy checkout error:', error);
    return NextResponse.json(
      { error: 'Internal server error.' },
      { status: 500 }
    );
  }
}
