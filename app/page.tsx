'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

/* ─── Free Scan — API Connection Form ───────────────────────── */
function FreeScanSection() {
  const [form, setForm] = useState({
    shopifyDomain: '', shopifyApiKey: '',
    metaAccessToken: '', metaAdAccountId: '',
    googleDeveloperToken: '', googleCustomerId: '',
    tiktokAccessToken: '', tiktokAdvertiserId: '',
    dateFrom: '', dateTo: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [report, setReport] = useState<any | null>(null);

  const set = (key: string, val: string) => setForm(f => ({ ...f, [key]: val }));

  // Base URL of the reconciliation tool backend (Next.js app with /api/report).
  // In development you can set NEXT_PUBLIC_RECONCILE_URL to "http://localhost:3000"
  // or your Railway / Vercel deployment URL.
  const toolUrl = process.env.NEXT_PUBLIC_RECONCILE_URL || '';
  // Helpful debug to ensure env is wired correctly in the browser
  console.log('FreeScan toolUrl:', toolUrl);

  const handleSubmit = async (useSample = false) => {
    if (!toolUrl) {
      setError('Scan backend is not configured. Set NEXT_PUBLIC_RECONCILE_URL to your tool URL.');
      return;
    }

    if (!useSample && (!form.shopifyDomain || !form.shopifyApiKey)) {
      setError('Shopify domain and API key are required.');
      return;
    }

    if (!useSample && form.metaAdAccountId && !form.metaAdAccountId.trim().startsWith('act_')) {
      setError('Ad Account ID must start with act_');
      return;
    }
    setError('');
    setLoading(true);

    try {
      const body = useSample
        ? { useSampleData: true }
        : {
            shopifyDomain: form.shopifyDomain.trim(),
            shopifyApiKey: form.shopifyApiKey.trim(),
            metaAccessToken: form.metaAccessToken.trim() || undefined,
            metaAdAccountId: form.metaAdAccountId.trim() || undefined,
            googleAdsDeveloperToken: form.googleDeveloperToken.trim() || undefined,
            googleAdsCustomerId: form.googleCustomerId.trim() || undefined,
            tiktokAccessToken: form.tiktokAccessToken.trim() || undefined,
            tiktokAdvertiserId: form.tiktokAdvertiserId.trim() || undefined,
            dateFrom: form.dateFrom || undefined,
            dateTo: form.dateTo || undefined,
          };

      const endpoint = `${toolUrl}/api/free-scan`;

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
          shopifyDomain: body.shopifyDomain,
          hasMeta: !!body.metaAccessToken,
          hasGoogle: !!body.googleAdsDeveloperToken,
          hasTikTok: !!body.tiktokAccessToken,
          body: text,
        });
        // Try to surface a meaningful message if backend returned JSON
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
      setReport(data.report);
      setTimeout(() => document.getElementById('scan-results')?.scrollIntoView({ behavior: 'smooth' }), 150);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleCheckout = async (plan: 'audit' | 'monthly') => {
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ plan }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      }
    } catch (err) {
      console.error('Checkout error:', err);
    }
  };

  const inputClass = "w-full px-4 py-3 bg-stone-800 border border-stone-700 text-white text-sm font-mono focus:outline-none focus:border-emerald-500 transition-colors rounded placeholder:text-stone-600";

  return (
    <section id="calculator" className="py-20 px-6 bg-stone-900 text-white">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">Run a free scan right now</h2>
          <div className="h-1 w-20 bg-emerald-500 mx-auto mb-4"></div>
          <p className="text-stone-400">Paste your API credentials and see your phantom revenue gap in 10 seconds. No account needed.</p>
        </div>

        {/* Security notice */}
        <div className="bg-stone-800 border-l-4 border-emerald-500 p-4 rounded-r-lg mb-6">
          <p className="text-xs font-bold text-emerald-400 mb-1">🔒 Security &amp; Privacy Guarantee</p>
          <p className="text-xs text-stone-400">Read-only access only. Data is processed entirely in-memory and is <strong className="text-stone-300">never stored</strong> on our servers.</p>
        </div>

        <div className="space-y-5">
          {/* Shopify */}
          <div className="bg-emerald-950/50 border border-emerald-800 rounded-lg p-5">
            <p className="text-sm font-bold text-emerald-400 mb-4">🛒 SHOPIFY</p>
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

          {/* Google + TikTok (collapsible) */}
          <details className="group">
            <summary className="cursor-pointer text-sm font-bold text-stone-500 hover:text-stone-300 transition-colors flex items-center gap-2">
              <svg className="w-4 h-4 transition-transform group-open:rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              Google Ads &amp; TikTok Ads (Optional)
            </summary>
            <div className="mt-4 space-y-4">
              {/* Google */}
              <div className="bg-pink-950/20 border border-pink-900/50 rounded-lg p-5">
                <p className="text-sm font-bold text-pink-400 mb-4">🔍 GOOGLE ADS</p>
                <div className="grid gap-3">
                  <div>
                    <label className="block text-xs font-medium text-stone-400 mb-1.5">Developer Token</label>
                    <input className={inputClass} type="password" placeholder="ABcDeF..." value={form.googleDeveloperToken} onChange={e => set('googleDeveloperToken', e.target.value)} />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-stone-400 mb-1.5">Customer ID</label>
                    <input className={inputClass} placeholder="123-456-7890" value={form.googleCustomerId} onChange={e => set('googleCustomerId', e.target.value)} />
                  </div>
                </div>
              </div>
              {/* TikTok */}
              <div className="bg-stone-800/50 border border-stone-700 rounded-lg p-5">
                <p className="text-sm font-bold text-stone-300 mb-4">📱 TIKTOK ADS</p>
                <div className="grid gap-3">
                  <div>
                    <label className="block text-xs font-medium text-stone-400 mb-1.5">Access Token</label>
                    <input className={inputClass} type="password" placeholder="ttj_..." value={form.tiktokAccessToken} onChange={e => set('tiktokAccessToken', e.target.value)} />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-stone-400 mb-1.5">Advertiser ID</label>
                    <input className={inputClass} placeholder="7012345678" value={form.tiktokAdvertiserId} onChange={e => set('tiktokAdvertiserId', e.target.value)} />
                  </div>
                </div>
              </div>
            </div>
          </details>

          {/* Date Range */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-stone-400 mb-1.5">Date From</label>
              <input className={inputClass} type="date" value={form.dateFrom} onChange={e => set('dateFrom', e.target.value)} />
            </div>
            <div>
              <label className="block text-xs font-medium text-stone-400 mb-1.5">Date To</label>
              <input className={inputClass} type="date" value={form.dateTo} onChange={e => set('dateTo', e.target.value)} />
            </div>
          </div>

          {/* Error */}
          {error && (
            <div className="bg-red-950/50 border border-red-800 rounded-lg p-3 text-center">
              <p className="text-red-400 text-sm">{error}</p>
            </div>
          )}

          {/* Buttons */}
          <div className="grid gap-3">
            <button
              onClick={() => handleSubmit(false)}
              disabled={loading}
              className="w-full py-4 bg-emerald-600 text-white font-bold text-sm uppercase tracking-widest hover:bg-emerald-500 transition-all rounded disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Fetching data…' : 'Generate Report →'}
            </button>
            <button
              onClick={() => handleSubmit(true)}
              disabled={loading}
              className="w-full py-3.5 bg-transparent text-emerald-400 font-bold text-sm uppercase tracking-widest hover:bg-stone-800 transition-all rounded border border-emerald-700 disabled:opacity-50"
            >
              Try with sample data
            </button>
          </div>
        </div>

        {/* Results */}
        {report && (
          <div id="scan-results" className="mt-10 space-y-6">
            {/* Summary */}
            <div className="bg-stone-800/80 border border-stone-700 rounded-xl p-5 md:p-6">
              <h3 className="text-lg md:text-xl font-serif mb-3">Summary for this scan</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="bg-stone-900/40 border border-stone-700 rounded-lg p-4">
                  <p className="text-[11px] uppercase tracking-widest text-stone-500 mb-1">Ad Platforms Reported</p>
                  <p className="text-xl font-mono">
                    ${report.metaReportedRevenue?.toLocaleString()}
                  </p>
                  <p className="text-xs text-stone-500 mt-1">
                    ROAS {report.reportedRoas}× on ${report.totalSpend?.toLocaleString()} spend
                  </p>
                </div>
                <div className="bg-stone-900/40 border border-emerald-700 rounded-lg p-4">
                  <p className="text-[11px] uppercase tracking-widest text-emerald-400 mb-1">Shopify Net Collected</p>
                  <p className="text-xl font-mono text-emerald-300">
                    ${report.shopifyNetRevenue?.toLocaleString()}
                  </p>
                  <p className="text-xs text-stone-400 mt-1">
                    True ROAS {report.trueRoas}× (cash actually collected)
                  </p>
                </div>
                <div className="bg-stone-900/40 border border-red-700 rounded-lg p-4">
                  <p className="text-[11px] uppercase tracking-widest text-red-400 mb-1">Phantom Revenue Gap</p>
                  <p className="text-xl font-mono text-red-300">
                    ${report.phantomRevenue?.toLocaleString()}
                  </p>
                  <p className="text-xs text-stone-400 mt-1">
                    {report.phantomPct}% of reported revenue is not in Shopify.
                  </p>
                </div>
              </div>
            </div>

            {/* Campaign list */}
            <div className="bg-stone-800/60 border border-stone-700 rounded-xl p-5 md:p-6">
              <h3 className="text-lg md:text-xl font-serif mb-3">Campaigns (headline view)</h3>
              <p className="text-xs text-stone-400 mb-4">
                High-level flags only. Full written analysis and playbook are part of the paid audit.
              </p>
              <div className="space-y-3">
                {report.campaigns?.slice(0, 6).map((c: any, idx: number) => {
                  const borderColor =
                    c.flagColor === 'red'
                      ? 'border-red-700'
                      : c.flagColor === 'amber'
                      ? 'border-amber-500'
                      : 'border-emerald-600';
                  const badgeBg =
                    c.flagColor === 'red'
                      ? 'bg-red-950 text-red-300'
                      : c.flagColor === 'amber'
                      ? 'bg-amber-950 text-amber-200'
                      : 'bg-emerald-950 text-emerald-200';
                  return (
                    <div
                      key={idx}
                      className={`flex flex-col md:flex-row md:items-center md:justify-between gap-2 rounded-lg border ${borderColor} bg-stone-900/40 px-4 py-3`}
                    >
                      <div>
                        <p className="text-sm font-medium">
                          {c.campaignName}{' '}
                          <span className="text-[11px] uppercase tracking-widest text-stone-500">
                            · {c.channel || 'Meta/Google/TikTok'}
                          </span>
                        </p>
                        <p className="text-xs text-stone-400 mt-1">
                          Spend ${c.spend?.toLocaleString()} · Reported {c.reportedRoas}× ·
                          True ≈ {c.estimatedTrueRoas}×
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className={`text-[11px] font-semibold px-3 py-1 rounded-full ${badgeBg}`}>
                          {c.flag}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Blurred teaser */}
            <div className="relative overflow-hidden rounded-xl border border-stone-700 bg-stone-900/40 p-6">
              <div style={{ filter: 'blur(4px)', pointerEvents: 'none', userSelect: 'none' }}>
                <h4 className="text-lg font-serif mb-3">Root Cause Analysis</h4>
                <p className="text-sm text-stone-400 mb-2">Primary gap driver: Discount codes account for 38% of phantom revenue...</p>
                <p className="text-sm text-stone-400 mb-4">Secondary driver: Cross-platform overlap contributing 24% of total gap...</p>
                <h4 className="text-lg font-serif mb-3">Budget Reallocation Plan</h4>
                <p className="text-sm text-stone-400 mb-2">Pause 2 unprofitable campaigns, freeing $11,452/month...</p>
                <p className="text-sm text-stone-400">Scale 1 winner → projected +$34,200 in additional revenue...</p>
                <h4 className="text-lg font-serif mt-4 mb-2">3 Actionable Recommendations</h4>
                <p className="text-sm text-stone-400">1. Restructure discount attribution model...</p>
              </div>
            </div>

            {/* CTA overlay */}
            <div className="relative overflow-hidden rounded-xl border border-emerald-700 bg-gradient-to-r from-emerald-900/90 to-stone-900/90 p-6 md:p-7">
              <div className="text-center space-y-3">
                <p className="text-xs font-mono uppercase tracking-[0.25em] text-emerald-300">
                  Unlock the full analysis
                </p>
                <p className="text-xl md:text-2xl font-serif text-white">
                  Get root cause breakdown, budget plan, and brand‑ready PDF.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center mt-4">
                  <button
                    onClick={() => handleCheckout('audit')}
                    className="px-6 py-3 bg-emerald-500 text-emerald-950 text-xs font-bold uppercase tracking-[0.25em] rounded hover:bg-emerald-400 transition-colors"
                  >
                    Book Audit — $249
                  </button>
                  <button
                    onClick={() => handleCheckout('monthly')}
                    className="px-6 py-3 bg-transparent text-emerald-300 text-xs font-bold uppercase tracking-[0.25em] rounded border border-emerald-600 hover:bg-emerald-900/50 transition-colors"
                  >
                    Monthly Plan — $150/mo
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="mt-8 text-center">
          <p className="text-stone-500 text-sm">Don&apos;t want to connect APIs yourself?</p>
          <button onClick={() => handleCheckout('audit')} className="text-emerald-400 font-semibold hover:underline">
            Book a Revenue Leak Audit — $249 →
          </button>
          <p className="text-stone-600 text-xs mt-1">We run it for you. Full branded report in 48 hours.</p>
        </div>
      </div>
    </section>
  );
}


/* ─── FAQ Item ──────────────────────────────────────────────── */
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-stone-200 last:border-0">
      <button onClick={() => setOpen(!open)} className="w-full py-5 flex items-center justify-between text-left">
        <span className="font-semibold text-stone-900 pr-4">{question}</span>
        <svg className={`w-5 h-5 text-stone-400 flex-shrink-0 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && <p className="pb-5 text-stone-600 leading-relaxed">{answer}</p>}
    </div>
  );
}

/* ─── Main Page ─────────────────────────────────────────────── */
export default function Home() {
  const calendlyUrl = "https://cal.com/calyxra/15min";

  return (
    <div className="min-h-screen bg-[#FAFAF9] text-stone-900 font-sans selection:bg-emerald-200">
      <Navbar />

      <main className="pt-32">

        {/* ═══ HERO ═══ */}
        <section className="px-6 pb-20 bg-[#FAFAF9]">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-medium text-stone-900 mb-6 leading-[1.1]">
              Your ad platforms are hiding revenue.<br />
              <span className="text-emerald-700">We find it.</span>
            </h1>
            <p className="text-xl text-stone-500 mb-8 max-w-2xl mx-auto leading-relaxed">
              Meta says $100K. Shopify collected $78K. We show you where the $22K went — per campaign — in 48 hours.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
              <a href="#calculator" className="px-8 py-4 bg-emerald-700 text-white font-bold text-sm uppercase tracking-widest hover:bg-emerald-800 transition-all shadow-lg rounded">
                Run Free Scan →
              </a>
              <a href={calendlyUrl} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-transparent border-2 border-stone-300 text-stone-900 font-bold text-sm uppercase tracking-widest hover:bg-stone-100 transition-all rounded">
                Book Revenue Leak Audit — $249
              </a>
            </div>
            <p className="text-sm text-stone-500">
              🔒 Read-only access. Your data is never stored. If the gap is under 5% — full refund.
            </p>
          </div>
        </section>

        {/* ═══ THE PROBLEM (3 cards) ═══ */}
        <section className="py-20 px-6 bg-white border-y border-stone-200">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-stone-900 text-center mb-12">
              The numbers don&apos;t match. Here&apos;s why.
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-50 border border-blue-200 p-8 rounded-lg">
                <div className="text-2xl mb-3">📘</div>
                <h3 className="text-xl font-serif font-bold text-stone-900 mb-3">Meta says $100K</h3>
                <p className="text-stone-600 leading-relaxed">The pixel fires at checkout. Counts the full order value. Never looks back.</p>
              </div>
              <div className="bg-amber-50 border border-amber-200 p-8 rounded-lg">
                <div className="text-2xl mb-3">🛒</div>
                <h3 className="text-xl font-serif font-bold text-stone-900 mb-3">Shopify collected $78K</h3>
                <p className="text-stone-600 leading-relaxed">Refunds settled 3 weeks later. Discount codes ate 20%. Chargebacks hit. The real number dropped.</p>
              </div>
              <div className="bg-red-50 border border-red-200 p-8 rounded-lg">
                <div className="text-2xl mb-3">❓</div>
                <h3 className="text-xl font-serif font-bold text-stone-900 mb-3">Where&apos;s the $22K?</h3>
                <p className="text-stone-600 leading-relaxed">It&apos;s phantom revenue — counted by ad platforms, never deposited in your bank. Most brands don&apos;t even know it exists.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ HOW IT WORKS (3 steps) ═══ */}
        <section className="py-20 px-6 bg-[#FAFAF9]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-stone-900 text-center mb-12">
              How it works
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-serif font-bold text-emerald-700">1</span>
                </div>
                <h3 className="text-lg font-serif font-bold text-stone-900 mb-2">Connect <span className="text-stone-400 text-sm font-sans">(2 minutes)</span></h3>
                <p className="text-stone-600">Paste your Shopify API key and Meta access token. Read-only — we can&apos;t modify anything.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-serif font-bold text-emerald-700">2</span>
                </div>
                <h3 className="text-lg font-serif font-bold text-stone-900 mb-2">Reconcile <span className="text-stone-400 text-sm font-sans">(10 seconds)</span></h3>
                <p className="text-stone-600">We pull your actual Shopify revenue and compare it against what ad platforms reported. Per campaign.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-serif font-bold text-emerald-700">3</span>
                </div>
                <h3 className="text-lg font-serif font-bold text-stone-900 mb-2">Act <span className="text-stone-400 text-sm font-sans">(your next move)</span></h3>
                <p className="text-stone-600">See which campaigns are truly profitable, which are phantom, and exactly where to reallocate budget.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ FREE SCAN TOOL ═══ */}
        <FreeScanSection />

        {/* ═══ WHAT YOU GET (comparison) ═══ */}
        <section className="py-20 px-6 bg-[#FAFAF9]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-stone-900 text-center mb-12">
              What&apos;s in the Revenue Leak Audit
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {/* Free Scan column */}
              <div className="bg-white p-8 border border-stone-200 rounded-lg">
                <p className="text-[10px] font-bold text-stone-500 uppercase tracking-widest mb-3">Free Scan</p>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-serif font-medium text-stone-900">$0</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3 text-sm text-stone-700"><span className="text-emerald-600 mt-0.5">✅</span> Phantom revenue total</li>
                  <li className="flex items-start gap-3 text-sm text-stone-700"><span className="text-emerald-600 mt-0.5">✅</span> Gap percentage</li>
                  <li className="flex items-start gap-3 text-sm text-stone-700"><span className="text-emerald-600 mt-0.5">✅</span> Campaign flags (red/amber/green)</li>
                  <li className="flex items-start gap-3 text-sm text-stone-700"><span className="text-emerald-600 mt-0.5">✅</span> True ROAS per campaign</li>
                  <li className="flex items-start gap-3 text-sm text-stone-700"><span className="text-emerald-600 mt-0.5">✅</span> Gap decomposition chart</li>
                  <li className="flex items-start gap-3 text-sm text-stone-500"><span className="text-stone-400 mt-0.5">✗</span> No commentary</li>
                  <li className="flex items-start gap-3 text-sm text-stone-500"><span className="text-stone-400 mt-0.5">✗</span> No recommendations</li>
                  <li className="flex items-start gap-3 text-sm text-stone-500"><span className="text-stone-400 mt-0.5">✗</span> No PDF report</li>
                </ul>
                <a href="#calculator" className="block text-center px-6 py-4 border-2 border-stone-300 text-stone-700 font-bold text-sm uppercase tracking-widest hover:bg-stone-50 transition-all rounded">
                  Run Free Scan →
                </a>
              </div>

              {/* Revenue Leak Audit column */}
              <div className="bg-white p-8 border-2 border-emerald-700 rounded-lg relative shadow-xl shadow-emerald-500/10">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-700 text-white px-4 py-1 text-[10px] font-bold uppercase tracking-widest rounded">
                  Recommended
                </div>
                <p className="text-[10px] font-bold text-emerald-700 uppercase tracking-widest mb-3">Revenue Leak Audit</p>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl font-serif font-medium text-stone-900">$249</span>
                </div>
                <div className="flex gap-2 mb-6">
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-1 rounded border border-emerald-200">⚡ 48h delivery</span>
                  <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-1 rounded border border-amber-200">🛡️ Refund guarantee</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3 text-sm text-stone-700"><span className="text-emerald-600 mt-0.5">✅</span> Everything in free scan</li>
                  <li className="flex items-start gap-3 text-sm text-stone-700"><span className="text-emerald-600 mt-0.5">✅</span> Written analysis &amp; commentary</li>
                  <li className="flex items-start gap-3 text-sm text-stone-700"><span className="text-emerald-600 mt-0.5">✅</span> Root cause breakdown</li>
                  <li className="flex items-start gap-3 text-sm text-stone-700"><span className="text-emerald-600 mt-0.5">✅</span> Campaign-level recommendations</li>
                  <li className="flex items-start gap-3 text-sm text-stone-700"><span className="text-emerald-600 mt-0.5">✅</span> Budget reallocation plan</li>
                  <li className="flex items-start gap-3 text-sm text-stone-700"><span className="text-emerald-600 mt-0.5">✅</span> Branded PDF report</li>
                  <li className="flex items-start gap-3 text-sm text-stone-700"><span className="text-emerald-600 mt-0.5">✅</span> Projected annual impact</li>
                  <li className="flex items-start gap-3 text-sm text-stone-700"><span className="text-emerald-600 mt-0.5">✅</span> 48-hour delivery</li>
                </ul>
                <p className="text-center text-xs text-stone-500 mb-4">🛡️ Gap under 5% = full refund</p>
                <a href={calendlyUrl} target="_blank" rel="noopener noreferrer" className="block text-center px-6 py-4 bg-emerald-700 text-white font-bold text-sm uppercase tracking-widest hover:bg-emerald-800 transition-all rounded shadow-lg">
                  Book Revenue Leak Audit — $249
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ WHO IT'S FOR (3 cards) ═══ */}
        <section className="py-20 px-6 bg-white border-y border-stone-200">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-stone-900 text-center mb-12">
              Built for brands and agencies running Shopify + paid ads
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-stone-50 p-8 rounded-lg border border-stone-200">
                <h3 className="text-lg font-serif font-bold text-stone-900 mb-3">DTC Brand Owners</h3>
                <p className="text-stone-600 leading-relaxed">Spending $20K+/month on Meta or Google? If your reported ROAS is driving scaling decisions, you need to know if those numbers are real.</p>
              </div>
              <div className="bg-stone-50 p-8 rounded-lg border border-stone-200">
                <h3 className="text-lg font-serif font-bold text-stone-900 mb-3">Performance Agencies</h3>
                <p className="text-stone-600 leading-relaxed">Managing 3+ Shopify clients? Stop manually reconciling spreadsheets every month. Show clients the real numbers before they ask.</p>
              </div>
              <div className="bg-stone-50 p-8 rounded-lg border border-stone-200">
                <h3 className="text-lg font-serif font-bold text-stone-900 mb-3">Media Buyers</h3>
                <p className="text-stone-600 leading-relaxed">Optimizing campaigns daily? You can&apos;t optimize what you can&apos;t measure. True ROAS ≠ reported ROAS.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ FAQ ═══ */}
        <section className="py-20 px-6 bg-[#FAFAF9]">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-stone-900 text-center mb-12">Questions</h2>
            <div className="bg-white rounded-xl shadow-sm border border-stone-200">
              <div className="px-6">
                <FAQItem
                  question="How is this different from Triple Whale?"
                  answer="Triple Whale re-attributes conversions — it changes who gets credit for a sale. We don't touch attribution. We show whether the revenue was actually collected after refunds, chargebacks, and discounts settled. Different problem. Complementary tools."
                />
                <FAQItem
                  question="Can't I just check Shopify myself?"
                  answer="You can see the total gap. But which of your 20 campaigns is lying? Which should you pause vs scale? That campaign-level breakdown is what takes 3-5 hours manually. We do it in 10 seconds."
                />
                <FAQItem
                  question="Is my data safe?"
                  answer="Yes. Read-only API access only. Data is processed in memory and never stored on our servers. We can't modify anything in your Shopify store or ad accounts."
                />
                <FAQItem
                  question="What do I need to connect?"
                  answer="Shopify Admin API token (read-only, takes 2 minutes to create) and a Meta access token. Google and TikTok are optional."
                />
                <FAQItem
                  question="What if my gap is small?"
                  answer="If the gap is under 5%, you get a full refund on the paid audit. We're that confident."
                />
                <FAQItem
                  question="How long does it take?"
                  answer="Free scan: 10 seconds. Paid audit: delivered within 48 hours."
                />
              </div>
            </div>
          </div>
        </section>

        {/* ═══ FINAL CTA ═══ */}
        <section className="py-24 px-6 bg-emerald-900 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-serif font-medium mb-4">Your actual revenue is lower than reported.</h2>
            <h3 className="text-2xl md:text-3xl font-serif font-medium text-emerald-300 mb-10">Find out by how much.</h3>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="#calculator" className="px-8 py-5 bg-white text-emerald-900 font-bold text-sm uppercase tracking-widest hover:bg-emerald-50 transition-all rounded shadow-xl">
                Run Free Scan →
              </a>
              <a href={calendlyUrl} target="_blank" rel="noopener noreferrer" className="px-8 py-5 bg-transparent border-2 border-white/30 text-white font-bold text-sm uppercase tracking-widest hover:bg-white/10 transition-all rounded">
                Book Revenue Leak Audit — $249 →
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}