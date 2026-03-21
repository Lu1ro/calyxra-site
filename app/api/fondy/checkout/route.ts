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

    console.log('[Fondy] merchant_id:', merchantId);
    console.log('[Fondy] payment_key exists:', !!paymentKey);

    if (!merchantId || !paymentKey) {
      return NextResponse.json(
        { error: 'Payment system is not configured. Missing FONDY_MERCHANT_ID or FONDY_PAYMENT_KEY.' },
        { status: 500 }
      );
    }

    const { amount, currency, order_desc } = PRODUCTS[product];
    const orderId = `calyxra_${Date.now()}_${Math.random().toString(36).slice(2)}`;

    const params: Record<string, string> = {
      merchant_id: String(merchantId),
      order_id: orderId,
      order_desc,
      amount,
      currency,
      response_url: `https://calyxra.com/thank-you?plan=${product}`,
      server_callback_url: 'https://calyxra.com/api/fondy/callback',
    };

    // Fondy signature: sort keys alphabetically, filter empty, join VALUES with |, prepend key|
    const sorted = Object.keys(params)
      .sort()
      .filter(k => params[k] !== '' && params[k] !== null && params[k] !== undefined)
      .map(k => params[k]);

    const str = paymentKey + '|' + sorted.join('|');
    console.log('[Fondy] signature string:', str);
    const signature = crypto.createHash('sha1').update(str).digest('hex');
    console.log('[Fondy] signature:', signature);

    const fondyPayload = {
      request: {
        ...params,
        signature,
      },
    };

    console.log('[Fondy] request payload:', JSON.stringify(fondyPayload));

    const fondyResponse = await fetch('https://pay.fondy.eu/api/checkout/url/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(fondyPayload),
    });

    const fondyData = await fondyResponse.json();
    console.log('[Fondy] response:', JSON.stringify(fondyData));

    if (fondyData.response?.checkout_url) {
      return NextResponse.json({ checkout_url: fondyData.response.checkout_url });
    }

    const errorMsg = fondyData.response?.error_message || 'Failed to create checkout session.';
    const errorCode = fondyData.response?.error_code;
    console.error('[Fondy] Checkout failed:', errorMsg, 'code:', errorCode);
    return NextResponse.json(
      { error: errorMsg, error_code: errorCode },
      { status: 500 }
    );
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error);
    console.error('[Fondy] Unexpected error:', message);
    return NextResponse.json(
      { error: message },
      { status: 500 }
    );
  }
}
