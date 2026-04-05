'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

/* ─── Gap Calculator ───────────────────────────────────────── */
function GapCalculator({ prefill }: { prefill?: { meta: string; shopify: string; adSpend: string } | null }) {
  const [metaRevenue, setMetaRevenue] = useState('');
  const [shopifyRevenue, setShopifyRevenue] = useState('');
  const [adSpend, setAdSpend] = useState('');
  const [result, setResult] = useState<null | {
    phantom: number; platformRoas: number; realRoas: number; gapPct: number;
  }>(null);
  const [lastPrefill, setLastPrefill] = useState<typeof prefill>(null);

  // Auto-fill and calculate when prefill changes
  if (prefill && prefill !== lastPrefill) {
    setMetaRevenue(prefill.meta);
    setShopifyRevenue(prefill.shopify);
    setAdSpend(prefill.adSpend);
    setLastPrefill(prefill);
    const meta = parseFloat(prefill.meta.replace(/[^0-9.]/g, ''));
    const shopify = parseFloat(prefill.shopify.replace(/[^0-9.]/g, ''));
    const spend = parseFloat(prefill.adSpend.replace(/[^0-9.]/g, ''));
    if (meta && shopify && spend) {
      const phantom = meta - shopify;
      const platformRoas = meta / spend;
      const realRoas = shopify / spend;
      const gapPct = (phantom / meta) * 100;
      setResult({ phantom, platformRoas, realRoas, gapPct });
    }
  }

  const calculate = () => {
    const meta = parseFloat(metaRevenue.replace(/[^0-9.]/g, ''));
    const shopify = parseFloat(shopifyRevenue.replace(/[^0-9.]/g, ''));
    const spend = parseFloat(adSpend.replace(/[^0-9.]/g, ''));
    if (!meta || !shopify || !spend) return;
    const phantom = meta - shopify;
    const platformRoas = meta / spend;
    const realRoas = shopify / spend;
    const gapPct = (phantom / meta) * 100;
    setResult({ phantom, platformRoas, realRoas, gapPct });
  };

  const fmt = (n: number) => '$' + n.toLocaleString('en-US', { maximumFractionDigits: 0 });
  const inputClass = "w-full px-4 py-3 border border-stone-300 text-[#1C1917] text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-[#064E3B]/30 focus:border-[#064E3B] transition-all";

  return (
    <section className="py-20 px-6 bg-white border-y border-stone-200">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-medium text-[#1C1917] mb-3">
          Find your phantom revenue in 30 seconds
        </h2>
        <p className="text-[#78716C] mb-8">Enter your numbers — no login needed.</p>
        <div className="space-y-4 text-left">
          <div>
            <label className="block text-sm font-semibold text-[#1C1917] mb-1.5">Meta reported revenue (last 30 days)</label>
            <input className={inputClass} placeholder="$142,800" value={metaRevenue} onChange={e => setMetaRevenue(e.target.value)} />
          </div>
          <div>
            <label className="block text-sm font-semibold text-[#1C1917] mb-1.5">Shopify net revenue (last 30 days)</label>
            <input className={inputClass} placeholder="$118,340" value={shopifyRevenue} onChange={e => setShopifyRevenue(e.target.value)} />
          </div>
          <div>
            <label className="block text-sm font-semibold text-[#1C1917] mb-1.5">Monthly ad spend</label>
            <input className={inputClass} placeholder="$47,000" value={adSpend} onChange={e => setAdSpend(e.target.value)} />
          </div>
          <button onClick={calculate} className="w-full py-4 bg-[#064E3B] text-white font-bold text-sm uppercase tracking-widest hover:bg-[#043927] hover:shadow-lg hover:shadow-[#064E3B]/20 transition-all rounded-lg">
            Calculate →
          </button>
        </div>

        {result && (
          <div className="mt-8 bg-[#f8f9fa] border border-stone-200 rounded-xl p-6 text-left space-y-3">
            <div className="flex justify-between items-center py-2 border-b border-stone-200">
              <span className="text-sm text-[#78716C]">Phantom Revenue</span>
              <span className="text-lg font-bold text-red-500">{fmt(result.phantom)}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-stone-200">
              <span className="text-sm text-[#78716C]">Platform ROAS</span>
              <span className="text-lg font-bold text-[#1C1917]">{result.platformRoas.toFixed(1)}×</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-stone-200">
              <span className="text-sm text-[#78716C]">Real ROAS</span>
              <span className="text-lg font-bold text-[#064E3B]">{result.realRoas.toFixed(1)}×</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-sm text-[#78716C]">Gap</span>
              <span className="text-lg font-bold text-red-500">{result.gapPct.toFixed(1)}%</span>
            </div>
            <p className="text-sm text-red-600 font-semibold pt-2 text-center">
              You may be overpaying by {result.gapPct.toFixed(0)}%
            </p>
            <a href="https://cal.com/calyxra/15min" target="_blank" rel="noopener noreferrer"
              className="block text-center mt-4 px-6 py-3 bg-[#064E3B] text-white font-bold text-sm uppercase tracking-widest hover:bg-[#043927] transition-all rounded-lg">
              See exactly where this comes from → Get $249 Audit
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

/* ─── Free Scan — API Connection Form ───────────────────────── */
function FreeScanSection({ onSampleData }: { onSampleData: () => void }) {
  const [form, setForm] = useState({
    shopifyDomain: '', shopifyApiKey: '',
    metaAccessToken: '', metaAdAccountId: '',
    dateFrom: '', dateTo: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const set = (key: string, val: string) => setForm(f => ({ ...f, [key]: val }));

  const toolUrl = process.env.NEXT_PUBLIC_RECONCILE_URL || 'https://app.calyxra.com';

  const handleSubmit = async () => {
    if (!toolUrl) {
      setError('Scan backend is not configured. Set NEXT_PUBLIC_RECONCILE_URL to your tool URL.');
      return;
    }

    if (!form.shopifyDomain || !form.shopifyApiKey) {
      setError('Shopify domain and API key are required.');
      return;
    }
    setError('');
    setLoading(true);

    try {
      const body = {
        shopifyDomain: form.shopifyDomain.trim(),
        shopifyApiKey: form.shopifyApiKey.trim(),
        metaAccessToken: form.metaAccessToken.trim() || undefined,
        metaAdAccountId: form.metaAdAccountId.trim() || undefined,
        dateFrom: form.dateFrom || undefined,
        dateTo: form.dateTo || undefined,
      };

      const endpoint = `${toolUrl}/api/report`;

      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        const text = await res.text();
        console.error('Reconciliation API error', {
          status: res.status,
          statusText: res.statusText,
          endpoint,
        });
        try {
          const maybeJson = JSON.parse(text);
          const msg = maybeJson?.error || maybeJson?.message;
          if (msg) throw new Error(msg);
        } catch {
          // fall through to generic message
        }
        throw new Error('Reconciliation failed. Check your credentials and try again.');
      }

      const data = await res.json();
      console.log('Report:', data);

      if (toolUrl) {
        window.open(`${toolUrl}?scan=complete`, '_blank');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Try again.');
    } finally {
      setLoading(false);
    }
  };

  const inputClass = "w-full px-4 py-3 bg-stone-800 border border-stone-700 text-white text-sm font-mono focus:outline-none focus:border-[#064E3B] focus:ring-1 focus:ring-[#064E3B]/30 transition-colors rounded-lg placeholder:text-stone-600";

  return (
    <section id="calculator" className="py-20 px-6 bg-stone-900 text-white">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">Run a free scan right now</h2>
          <div className="h-1 w-20 bg-[#064E3B] mx-auto mb-4"></div>
          <p className="text-stone-400">Paste your API credentials and see your phantom revenue gap in 10 seconds. No account needed.</p>
        </div>

        {/* Security notice */}
        <div className="bg-stone-800 border-l-4 border-[#064E3B] p-4 rounded-r-lg mb-6">
          <p className="text-xs font-bold text-[#065F46] mb-1">🔒 Security &amp; Privacy Guarantee</p>
          <p className="text-xs text-stone-400">Read-only access only. Data is processed entirely in-memory and is <strong className="text-stone-300">never stored</strong> on our servers.</p>
        </div>

        <div className="space-y-5">
          {/* Shopify */}
          <div className="bg-[#064E3B]/10 border border-[#064E3B]/30 rounded-lg p-5">
            <p className="text-sm font-bold text-[#065F46] mb-4">🛒 SHOPIFY</p>
            <div className="grid gap-3">
              <div>
                <label className="block text-xs font-medium text-stone-400 mb-1.5">Store Domain</label>
                <input className={inputClass} placeholder="my-store.myshopify.com" value={form.shopifyDomain} onChange={e => set('shopifyDomain', e.target.value)} />
              </div>
              <div>
                <label className="block text-xs font-medium text-stone-400 mb-1.5">Admin API Access Token</label>
                <input className={inputClass} type="password" placeholder="shpat_..." value={form.shopifyApiKey} onChange={e => set('shopifyApiKey', e.target.value)} />
              </div>
            </div>
          </div>

          {/* Meta Ads */}
          <div className="bg-blue-950/30 border border-blue-900 rounded-lg p-5">
            <div className="flex justify-between items-center mb-4">
              <p className="text-sm font-bold text-blue-400">📘 META ADS</p>
              <span className="text-[10px] text-stone-500 font-medium">(Optional)</span>
            </div>
            <div className="grid gap-3">
              <div>
                <label className="block text-xs font-medium text-stone-400 mb-1.5">Access Token</label>
                <input className={inputClass} type="password" placeholder="EAABsbCS..." value={form.metaAccessToken} onChange={e => set('metaAccessToken', e.target.value)} />
              </div>
              <div>
                <label className="block text-xs font-medium text-stone-400 mb-1.5">Ad Account ID</label>
                <input className={inputClass} placeholder="act_123456789" value={form.metaAdAccountId} onChange={e => set('metaAdAccountId', e.target.value)} />
              </div>
            </div>
          </div>

          {/* Date Range */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-stone-400 mb-1.5">Date From</label>
              <input className={inputClass} type="date" value={form.dateFrom} onChange={e => set('dateFrom', e.target.value)} />
            </div>
            <div>
              <label className="block text-xs font-medium text-stone-400 mb-1.5">Date To</label>
              <input className={inputClass} type="date" value={form.dateTo} onChange={e => set('dateTo', e.target.value)} />
            </div>
          </div>

          {/* Google + TikTok — hidden until integrations are ready */}

          {/* Error */}
          {error && (
            <div className="bg-red-950/50 border border-red-800 rounded-lg p-3 text-center">
              <p className="text-red-400 text-sm">{error}</p>
            </div>
          )}

          {/* Buttons */}
          <div className="grid gap-3">
            <button
              onClick={() => handleSubmit()}
              disabled={loading}
              className="w-full py-4 bg-[#064E3B] text-white font-bold text-sm uppercase tracking-widest hover:bg-[#043927] hover:scale-[1.01] hover:shadow-lg hover:shadow-[#064E3B]/20 transition-all rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Fetching data…' : 'Run Free Scan →'}
            </button>
            <button
              onClick={onSampleData}
              disabled={loading}
              className="w-full py-3.5 bg-transparent text-[#065F46] font-bold text-sm uppercase tracking-widest hover:bg-stone-800 transition-all rounded-lg border border-[#064E3B]/40 disabled:opacity-50"
            >
              Try with sample data
            </button>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-stone-500 text-sm">Don&apos;t want to connect APIs yourself?</p>
          <a href="https://cal.com/calyxra/15min" target="_blank" rel="noopener noreferrer" className="text-[#065F46] font-semibold hover:underline">
            Book a Revenue Leak Audit — $249 →
          </a>
          <p className="text-stone-600 text-xs mt-1">We run it for you. Full branded report in 48 hours.</p>
        </div>
      </div>
    </section>
  );
}

/* ─── Main Page ─────────────────────────────────────────────── */
export default function Home() {
  const calendlyUrl = "https://cal.com/calyxra/15min";
  const [checkoutLoading, setCheckoutLoading] = useState<string | null>(null);
  function handleSampleData() {
    window.location.href = '/register';
  }

  async function handleCheckout(product: 'audit' | 'monthly') {
    setCheckoutLoading(product);
    try {
      const res = await fetch('/api/fondy/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ product }),
      });
      const data = await res.json();
      if (data.checkout_url) {
        window.location.href = data.checkout_url;
      } else {
        alert('Checkout error: ' + (data.error || data.message || 'Unknown error') + (data.error_code ? ' (code: ' + data.error_code + ')' : ''));
      }
    } catch (err) {
      alert('Error: ' + (err instanceof Error ? err.message : 'Network error. Check your connection.'));
    } finally {
      setCheckoutLoading(null);
    }
  }

  const faqItems = [
    {
      q: "What does Calyxra actually do?",
      a: "In simple terms: ad platforms like Meta tell you how much revenue your ads generated. But those numbers are often inflated — they don't account for refunds, chargebacks, discount codes, and other deductions. Calyxra connects to your Shopify store and your ad account, compares what was reported vs. what was actually collected, and shows you the real numbers. Think of it as a lie detector for your ad spend."
    },
    {
      q: "Who is this for?",
      a: "Calyxra is built for e-commerce brands and agencies running paid Meta ads on Shopify. If you spend $20K+ per month on ads and make decisions based on ROAS numbers, Calyxra shows you whether those numbers are actually real."
    },
    {
      q: "Do I need technical knowledge to use it?",
      a: "Not at all. You just paste two API keys (Shopify + your ad platform) and click 'Run'. No coding, no spreadsheets, no setup. The whole process takes under 2 minutes. You can also try it with sample data first to see how it works."
    },
    {
      q: "How is this different from Triple Whale?",
      a: "Triple Whale is an attribution platform — it tells you which ads drove conversions. Calyxra is a reconciliation tool — it tells you whether the revenue those ads generated actually landed in your bank. They're complementary, not competitors."
    },
    {
      q: "Can't I just check Shopify myself?",
      a: "You can. But matching Shopify orders against Meta campaign data, accounting for refunds, chargebacks, discount codes, and taxes across dozens of campaigns manually takes hours. We do it in 10 seconds."
    },
    {
      q: "Is my data safe?",
      a: "Yes. We use read-only API access — we literally cannot modify your store or ad accounts. All data is processed in-memory and never stored on our servers."
    },
    {
      q: "What do I need to connect?",
      a: "A Shopify store connection (via OAuth — just click Connect) and a Meta Ads access token. Takes 2 minutes. More ad platforms coming soon."
    },
    {
      q: "What if my gap is small?",
      a: "If your phantom revenue gap is under 5%, we refund the full $249. No questions asked."
    },
    {
      q: "How long does it take?",
      a: "The free scan runs in ~10 seconds. The full Revenue Leak Audit is delivered within 48 hours as a branded PDF report."
    },
  ];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": { "@type": "Answer", "text": item.a },
    })),
  };

  return (
    <div className="min-h-screen bg-[#FAFAF9] text-[#1C1917] font-sans selection:bg-[#064E3B]/20" style={{ lineHeight: 1.6 }}>
      <Navbar />

      {/* FAQPage JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <main className="pt-32">

        {/* ═══ HERO ═══ */}
        <section className="px-6 pt-16 pb-28 bg-[#FAFAF9]">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-medium text-[#1C1917] mb-6 leading-[1.08]">
              Your ad platforms are hiding revenue.<br />
              <span className="text-[#064E3B]">We find it.</span>
            </h1>
            <p className="text-xl text-[#78716C] mb-8 max-w-2xl mx-auto leading-relaxed">
              Meta says $100K. Shopify collected $78K. We show you where the $22K went — per campaign — in 48 hours.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
              <a href="#calculator" className="px-8 py-4 bg-[#064E3B] text-white font-bold text-sm uppercase tracking-widest hover:bg-[#043927] hover:scale-[1.03] hover:shadow-xl hover:shadow-[#064E3B]/25 transition-all rounded-lg">
                Run Free Scan →
              </a>
              <a href={calendlyUrl} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-transparent border-2 border-[#b2bec3] text-[#1C1917] font-bold text-sm uppercase tracking-widest hover:bg-stone-100 transition-all rounded-lg">
                Book a Call
              </a>
            </div>
            <p className="text-sm text-[#78716C]">
              🔒 Read-only access. Your data is never stored. If the gap is under 5% — full refund.
            </p>
          </div>
        </section>

        {/* ═══ THE PROBLEM (3 cards) ═══ */}
        <section className="py-20 px-6 bg-white border-y border-stone-200">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-[#1C1917] text-center mb-12">
              The numbers don&apos;t match. Here&apos;s why.
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-50 border border-blue-200 p-8 rounded-lg hover:-translate-y-1 hover:shadow-md transition-all duration-200">
                <div className="text-2xl mb-3">📘</div>
                <h3 className="text-xl font-serif font-bold text-[#1C1917] mb-3">Meta says $100K</h3>
                <p className="text-[#78716C] leading-relaxed">The pixel fires at checkout. Counts the full order value. Never looks back.</p>
              </div>
              <div className="bg-amber-50 border border-amber-200 p-8 rounded-lg hover:-translate-y-1 hover:shadow-md transition-all duration-200">
                <div className="text-2xl mb-3">🛒</div>
                <h3 className="text-xl font-serif font-bold text-[#1C1917] mb-3">Shopify collected $78K</h3>
                <p className="text-[#78716C] leading-relaxed">Refunds settled 3 weeks later. Discount codes ate 20%. Chargebacks hit. The real number dropped.</p>
              </div>
              <div className="bg-red-50 border-2 border-red-300 p-8 rounded-lg hover:-translate-y-1 hover:shadow-md transition-all duration-200">
                <div className="text-2xl mb-3">❓</div>
                <h3 className="text-xl font-serif font-bold text-[#1C1917] mb-3">Where&apos;s the $22K?</h3>
                <p className="text-[#78716C] leading-relaxed">It&apos;s phantom revenue — counted by ad platforms, never deposited in your bank. Most brands don&apos;t even know it exists.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ HOW IT WORKS (3 steps) ═══ */}
        <section className="py-20 px-6 bg-[#FAFAF9]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-[#1C1917] text-center mb-12">
              How it works
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center hover:-translate-y-1 transition-all duration-200">
                <div className="w-16 h-16 bg-[#064E3B]/15 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-serif font-bold text-[#064E3B]">1</span>
                </div>
                <h3 className="text-lg font-serif font-bold text-[#1C1917] mb-2">Connect <span className="text-[#78716C] text-sm font-sans">(2 minutes)</span></h3>
                <p className="text-[#78716C]">Paste your Shopify API key and Meta access token. Read-only — we can&apos;t modify anything.</p>
              </div>
              <div className="text-center hover:-translate-y-1 transition-all duration-200">
                <div className="w-16 h-16 bg-[#064E3B]/15 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-serif font-bold text-[#064E3B]">2</span>
                </div>
                <h3 className="text-lg font-serif font-bold text-[#1C1917] mb-2">Reconcile <span className="text-[#78716C] text-sm font-sans">(10 seconds)</span></h3>
                <p className="text-[#78716C]">We pull your actual Shopify revenue and compare it against what ad platforms reported. Per campaign.</p>
              </div>
              <div className="text-center hover:-translate-y-1 transition-all duration-200">
                <div className="w-16 h-16 bg-[#064E3B]/15 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-serif font-bold text-[#064E3B]">3</span>
                </div>
                <h3 className="text-lg font-serif font-bold text-[#1C1917] mb-2">Act <span className="text-[#78716C] text-sm font-sans">(your next move)</span></h3>
                <p className="text-[#78716C]">See which campaigns are truly profitable, which are phantom, and exactly where to reallocate budget.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ CASE STUDY — "See what you get" ═══ */}
        <section className="py-24 px-6 bg-white border-y border-stone-200">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-[10px] font-bold text-[#064E3B] uppercase tracking-[0.2em] mb-3">Real results</p>
              <h2 className="text-3xl md:text-4xl font-serif font-medium text-[#1C1917] mb-3">
                See what Calyxra reveals
              </h2>
              <p className="text-[#78716C] max-w-lg mx-auto">
                Here&apos;s what a typical reconciliation report looks like for a DTC brand spending $51K/mo on ads.
              </p>
            </div>

            {/* Dashboard-style preview */}
            <div className="bg-[#0f172a] rounded-2xl p-1 shadow-2xl shadow-black/20 border border-white/5">
              {/* Browser bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/70"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/70"></div>
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="bg-white/5 rounded-md px-4 py-1 text-xs text-stone-500 font-mono">app.calyxra.com/dashboard/stores/smarttel</div>
                </div>
              </div>

              <div className="p-6 md:p-8">
                {/* Store header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-white/40 text-xs font-mono uppercase tracking-wider mb-1">Smarttel</p>
                    <p className="text-white/20 text-xs font-mono">Report period: Mar 04 — Apr 03, 2026</p>
                  </div>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 rounded-md bg-white/5 text-white/50 text-xs font-medium">Demo Run</span>
                    <span className="px-3 py-1 rounded-md bg-[#064E3B] text-white text-xs font-bold">Run Reconciliation</span>
                  </div>
                </div>

                {/* KPI Cards Row */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-6">
                  {[
                    { label: 'Phantom Revenue', value: '$50,920', sub: '22% overstated', color: '#ef4444', bg: 'rgba(239,68,68,0.08)', border: 'rgba(239,68,68,0.15)' },
                    { label: 'True ROAS', value: '3.56×', sub: 'vs 4.56× reported', color: '#10b981', bg: 'rgba(16,185,129,0.08)', border: 'rgba(16,185,129,0.15)' },
                    { label: 'Net Revenue', value: '$180,120', sub: 'Shopify verified', color: '#ffffff', bg: 'rgba(255,255,255,0.04)', border: 'rgba(255,255,255,0.08)' },
                    { label: 'Gross Revenue', value: '$245,320', sub: 'Before deductions', color: '#ffffff', bg: 'rgba(255,255,255,0.04)', border: 'rgba(255,255,255,0.08)' },
                    { label: 'Total Ad Spend', value: '$50,652', sub: 'Google + Meta', color: '#ffffff', bg: 'rgba(255,255,255,0.04)', border: 'rgba(255,255,255,0.08)' },
                  ].map((kpi, i) => (
                    <div key={i} className="rounded-xl p-4" style={{ background: kpi.bg, border: `1px solid ${kpi.border}` }}>
                      <p className="text-[10px] font-bold uppercase tracking-wider mb-2" style={{ color: `${kpi.color}99` }}>{kpi.label}</p>
                      <p className="text-2xl font-bold tabular-nums" style={{ color: kpi.color }}>{kpi.value}</p>
                      <p className="text-xs mt-1" style={{ color: `${kpi.color}60` }}>{kpi.sub}</p>
                    </div>
                  ))}
                </div>

                {/* Revenue Leak Alert */}
                <div className="rounded-xl p-5 mb-6" style={{ background: 'rgba(239,68,68,0.06)', border: '1px solid rgba(239,68,68,0.12)' }}>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                    </div>
                    <div>
                      <p className="text-red-400 font-bold text-sm mb-1">Ad platforms are overstating revenue by 22%</p>
                      <p className="text-red-400/60 text-xs">$50,920 in phantom revenue this month — approximately $611K annualized</p>
                    </div>
                  </div>
                </div>

                {/* Two columns: Leak breakdown + Revenue comparison */}
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {/* Where revenue leaks */}
                  <div className="rounded-xl p-5" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                    <p className="text-white/50 text-xs font-bold uppercase tracking-wider mb-4">Where Revenue Leaks</p>
                    <div className="space-y-3">
                      {[
                        { label: 'Discounts not deducted', value: '$32,400', pct: 50, color: '#f59e0b' },
                        { label: 'Refunds not deducted', value: '$28,800', pct: 44, color: '#ef4444' },
                        { label: 'Chargebacks', value: '$4,000', pct: 6, color: '#8b5cf6' },
                      ].map((leak, i) => (
                        <div key={i}>
                          <div className="flex justify-between items-center mb-1.5">
                            <span className="text-white/70 text-sm">{leak.label}</span>
                            <span className="font-bold text-sm tabular-nums" style={{ color: leak.color }}>{leak.value}</span>
                          </div>
                          <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                            <div className="h-full rounded-full transition-all" style={{ width: `${leak.pct}%`, background: leak.color }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Reported vs Actual */}
                  <div className="rounded-xl p-5" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                    <p className="text-white/50 text-xs font-bold uppercase tracking-wider mb-4">Reported vs Actual</p>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-1.5">
                          <span className="text-white/50 text-xs">Platforms Report</span>
                          <span className="text-white/70 font-bold text-sm">$231,040</span>
                        </div>
                        <div className="h-8 rounded-lg overflow-hidden" style={{ background: 'repeating-linear-gradient(45deg, rgba(239,68,68,0.15), rgba(239,68,68,0.15) 8px, rgba(239,68,68,0.08) 8px, rgba(239,68,68,0.08) 16px)' }}>
                          <div className="h-full flex items-center justify-end pr-3">
                            <span className="text-red-400 text-[10px] font-bold">INFLATED</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1.5">
                          <span className="text-white/50 text-xs">Shopify Verified</span>
                          <span className="text-[#065F46] font-bold text-sm">$180,120</span>
                        </div>
                        <div className="h-8 rounded-lg bg-[#064E3B] overflow-hidden" style={{ width: '83%' }}>
                          <div className="h-full flex items-center justify-end pr-3">
                            <span className="text-white text-[10px] font-bold">ACTUAL ✓</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-white/5 flex justify-between">
                      <span className="text-white/40 text-sm">Annual phantom revenue</span>
                      <span className="text-red-400 font-bold text-lg">~$611K</span>
                    </div>
                  </div>
                </div>

                {/* Bottom action bar */}
                <div className="flex items-center justify-between rounded-xl p-4" style={{ background: 'rgba(0,184,148,0.06)', border: '1px solid rgba(0,184,148,0.15)' }}>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#064E3B]/15 flex items-center justify-center">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#064E3B" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                    </div>
                    <div>
                      <p className="text-white/80 text-sm font-bold">Action Engine found 6 campaign optimizations</p>
                      <p className="text-white/40 text-xs">Estimated additional revenue: +$12,600/mo</p>
                    </div>
                  </div>
                  <span className="px-4 py-2 rounded-lg bg-[#064E3B] text-white text-xs font-bold">View Actions</span>
                </div>
              </div>
            </div>

            <p className="text-center text-sm text-[#78716C] mt-8">
              Based on real platform data. Your audit will include full campaign-level breakdown + PDF report.
            </p>
          </div>
        </section>

        {/* ═══ FREE SCAN TOOL ═══ */}
        <FreeScanSection onSampleData={handleSampleData} />

        {/* ═══ PRICING (2 cards) ═══ */}
        <section id="pricing" className="py-20 px-6 bg-[#FAFAF9]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-[#1C1917] text-center mb-12">
              Pricing
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {/* Source-of-Truth Audit */}
              <div className="bg-white p-8 border border-stone-200 rounded-xl hover:-translate-y-1 hover:shadow-md transition-all duration-200">
                <p className="text-[10px] font-bold text-[#78716C] uppercase tracking-widest mb-3">Source-of-Truth Audit</p>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl font-serif font-medium text-[#1C1917]">$249</span>
                  <span className="text-sm text-[#78716C]">one-time</span>
                </div>
                <ul className="space-y-3 my-6">
                  <li className="flex items-start gap-3 text-sm text-[#1C1917]"><span className="w-1.5 h-1.5 rounded-full bg-[#064E3B] mt-2 flex-shrink-0"></span> Full Shopify + Meta reconciliation</li>
                  <li className="flex items-start gap-3 text-sm text-[#1C1917]"><span className="w-1.5 h-1.5 rounded-full bg-[#064E3B] mt-2 flex-shrink-0"></span> Exact phantom revenue breakdown</li>
                  <li className="flex items-start gap-3 text-sm text-[#1C1917]"><span className="w-1.5 h-1.5 rounded-full bg-[#064E3B] mt-2 flex-shrink-0"></span> PDF report + 3 recommendations</li>
                  <li className="flex items-start gap-3 text-sm text-[#1C1917]"><span className="w-1.5 h-1.5 rounded-full bg-[#064E3B] mt-2 flex-shrink-0"></span> 30-min walkthrough call</li>
                </ul>
                <a
                  href="https://cal.com/calyxra/15min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3 bg-[#064E3B] text-white font-bold text-sm uppercase tracking-widest hover:bg-[#043927] transition-all rounded-lg text-center"
                >
                  Book Audit Call — $249
                </a>
                <p className="text-xs text-[#78716C] text-center mt-2">15-min call &rarr; we run the audit &rarr; PDF delivered in 48h</p>
              </div>

              {/* Monthly Reconciliation */}
              <div className="bg-white p-8 border-2 border-[#064E3B] rounded-xl relative shadow-xl shadow-[#064E3B]/10 scale-[1.02] hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#064E3B]/15 transition-all duration-200">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#064E3B] text-white px-4 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full">
                  Recommended
                </div>
                <p className="text-[10px] font-bold text-[#064E3B] uppercase tracking-widest mb-3">Monthly Reconciliation</p>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-4xl font-serif font-medium text-[#1C1917]">$150</span>
                  <span className="text-sm text-[#78716C]">/month</span>
                </div>
                <span className="text-[10px] font-bold text-[#064E3B] bg-[#064E3B]/10 px-2 py-1 rounded border border-[#064E3B]/20">FIRST 5 AGENCIES ONLY</span>
                <p className="text-xs text-[#78716C] mt-1 mb-4">Early access</p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3 text-sm text-[#1C1917]"><span className="w-1.5 h-1.5 rounded-full bg-[#064E3B] mt-2 flex-shrink-0"></span> Everything in audit</li>
                  <li className="flex items-start gap-3 text-sm text-[#1C1917]"><span className="w-1.5 h-1.5 rounded-full bg-[#064E3B] mt-2 flex-shrink-0"></span> Monthly monitoring + alerts</li>
                  <li className="flex items-start gap-3 text-sm text-[#1C1917]"><span className="w-1.5 h-1.5 rounded-full bg-[#064E3B] mt-2 flex-shrink-0"></span> Action Engine recommendations</li>
                  <li className="flex items-start gap-3 text-sm text-[#1C1917]"><span className="w-1.5 h-1.5 rounded-full bg-[#064E3B] mt-2 flex-shrink-0"></span> White-label PDF for clients</li>
                </ul>
                <a
                  href="https://cal.com/calyxra/15min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3 bg-[#064E3B] text-white font-bold text-sm uppercase tracking-widest hover:bg-[#043927] transition-all rounded-lg shadow-lg text-center"
                >
                  Start Free Trial
                </a>
                <p className="text-xs text-[#78716C] text-center mt-2">No credit card needed &middot; payment setup in progress</p>
              </div>
            </div>
            <p className="text-center text-sm text-[#78716C] mt-6">
              Prefer email? Reach us at{' '}
              <a href="mailto:admin@calyxra.com?subject=I want to start with Calyxra" className="text-[#064E3B] font-semibold hover:underline">admin@calyxra.com</a>
            </p>
          </div>
        </section>

        {/* ═══ ONGOING MONITORING TEASER ═══ */}
        <section className="py-20 px-6 bg-white border-y border-stone-200">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-[#1C1917] mb-3">
              Don&apos;t just audit once. Monitor continuously.
            </h2>
            <p className="text-[#78716C] max-w-2xl mx-auto mb-12">
              After your audit, keep tracking phantom revenue automatically. Get alerts when gaps spike, monthly reconciliation reports, and always know your true ROAS.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-[#f8f9fa] p-8 rounded-xl border border-stone-200 hover:-translate-y-1 hover:shadow-md transition-all duration-200">
                <div className="text-3xl mb-4">📊</div>
                <h3 className="text-lg font-serif font-bold text-[#1C1917] mb-2">Monthly Reports</h3>
                <p className="text-[#78716C] text-sm">Automated reconciliation delivered to your inbox every month</p>
              </div>
              <div className="bg-[#f8f9fa] p-8 rounded-xl border border-stone-200 hover:-translate-y-1 hover:shadow-md transition-all duration-200">
                <div className="text-3xl mb-4">⚡</div>
                <h3 className="text-lg font-serif font-bold text-[#1C1917] mb-2">Gap Alerts</h3>
                <p className="text-[#78716C] text-sm">Get notified when phantom revenue exceeds your threshold</p>
              </div>
              <div className="bg-[#f8f9fa] p-8 rounded-xl border border-stone-200 hover:-translate-y-1 hover:shadow-md transition-all duration-200">
                <div className="text-3xl mb-4">📈</div>
                <h3 className="text-lg font-serif font-bold text-[#1C1917] mb-2">True ROAS Tracking</h3>
                <p className="text-[#78716C] text-sm">Always know your real return — not what Meta tells you</p>
              </div>
            </div>
            <a href="mailto:admin@calyxra.com?subject=Ongoing%20Monitoring" className="inline-block mt-10 px-8 py-4 bg-transparent border-2 border-[#064E3B] text-[#064E3B] font-bold text-sm uppercase tracking-widest hover:bg-[#064E3B] hover:text-white transition-all rounded-lg">
              Ask about ongoing monitoring →
            </a>
          </div>
        </section>

        {/* ═══ GAP CALCULATOR ═══ */}
        <div id="gap-calculator">
          <GapCalculator prefill={null} />
        </div>

        {/* ═══ WHO IT'S FOR (3 cards) ═══ */}
        <section className="py-20 px-6 bg-[#FAFAF9]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-[#1C1917] text-center mb-12">
              Built for brands and agencies running Shopify + paid ads
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-8 rounded-xl border border-stone-200 hover:-translate-y-1 hover:shadow-md transition-all duration-200">
                <h3 className="text-lg font-serif font-bold text-[#1C1917] mb-3">DTC Brand Owners</h3>
                <p className="text-[#78716C] leading-relaxed">Spending $20K+/month on Meta Ads? If your reported ROAS is driving scaling decisions, you need to know if those numbers are real.</p>
              </div>
              <div className="bg-white p-8 rounded-xl border border-stone-200 hover:-translate-y-1 hover:shadow-md transition-all duration-200">
                <h3 className="text-lg font-serif font-bold text-[#1C1917] mb-3">Performance Agencies</h3>
                <p className="text-[#78716C] leading-relaxed">Managing 3+ Shopify clients? Stop manually reconciling spreadsheets every month. Show clients the real numbers before they ask.</p>
              </div>
              <div className="bg-white p-8 rounded-xl border border-stone-200 hover:-translate-y-1 hover:shadow-md transition-all duration-200">
                <h3 className="text-lg font-serif font-bold text-[#1C1917] mb-3">Media Buyers</h3>
                <p className="text-[#78716C] leading-relaxed">Optimizing campaigns daily? You can&apos;t optimize what you can&apos;t measure. True ROAS ≠ reported ROAS.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ ABOUT ═══ */}
        <section className="py-20 px-6 bg-white border-y border-stone-200">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-[#1C1917] mb-6">
              Built by operators, not consultants.
            </h2>
            <p className="text-[#78716C] text-lg leading-relaxed">
              We built Calyxra because we kept seeing the same problem: agencies and brands making scaling decisions based on ad platform numbers that didn&apos;t match reality. Calyxra automates what used to take hours of spreadsheet reconciliation — and gives you the truth in seconds.
            </p>
          </div>
        </section>

        {/* ═══ FAQ (semantic HTML + JSON-LD) ═══ */}
        <section className="py-20 px-6 bg-[#FAFAF9]">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-[#1C1917] text-center mb-12">Questions</h2>
            <div className="bg-white rounded-xl shadow-sm border border-stone-200">
              <div className="px-6">
                {faqItems.map((item, i) => (
                  <details key={i} className="border-b border-stone-200 last:border-0 group">
                    <summary className="w-full py-5 flex items-center justify-between text-left cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                      <span className="font-semibold text-[#1C1917] pr-4 group-hover:text-[#064E3B] transition-colors">{item.q}</span>
                      <svg className="w-5 h-5 text-stone-400 flex-shrink-0 transition-transform duration-200 group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <p className="pb-5 text-[#78716C] leading-relaxed">{item.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══ FINAL CTA ═══ */}
        <section className="py-24 px-6 bg-[#043927] text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-serif font-medium mb-4">Your actual revenue is lower than reported.</h2>
            <h3 className="text-2xl md:text-3xl font-serif font-medium text-[#065F46] mb-10">Find out by how much.</h3>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="#calculator" className="px-8 py-5 bg-white text-[#043927] font-bold text-sm uppercase tracking-widest hover:bg-[#f0f0f0] transition-all rounded-lg shadow-xl">
                Run Free Scan →
              </a>
              <a href={calendlyUrl} target="_blank" rel="noopener noreferrer" className="px-8 py-5 bg-transparent border-2 border-white/30 text-white font-bold text-sm uppercase tracking-widest hover:bg-white/10 transition-all rounded-lg">
                Book a Call →
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
