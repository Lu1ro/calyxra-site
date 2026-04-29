'use client';

import { useState } from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

/* ──────────────────────────────────────────────────────────────
   Design tokens used throughout this page:
   - Brand deep:   #064E3B  (primary CTAs, accent)
   - Brand hover:  #043927
   - Brand soft:   #065F46  (secondary text accent)
   - Ink:          #1C1917  (primary text)
   - Ink muted:    #44403C  (body text)
   - Ink soft:     #78716C  (secondary / captions)
   - Canvas:       #FAFAF9  (page bg)
   - Panel:        #F5F5F4  (subtle panel bg)
   - Rule:         #E7E5E4  (borders / dividers)
   ────────────────────────────────────────────────────────────── */

/* ─── Gap Calculator (math only, no API) ───────────────────── */
function GapCalculator() {
  const [metaRevenue, setMetaRevenue] = useState('');
  const [shopifyRevenue, setShopifyRevenue] = useState('');
  const [adSpend, setAdSpend] = useState('');
  const [result, setResult] = useState<null | {
    phantom: number; platformRoas: number; realRoas: number; gapPct: number;
  }>(null);

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
  const inputClass =
    "w-full px-4 py-3.5 bg-white border border-[#E7E5E4] text-[#1C1917] text-[15px] rounded-lg focus:outline-none focus:ring-4 focus:ring-[#064E3B]/10 focus:border-[#064E3B] transition-all placeholder:text-stone-400";

  return (
    <section id="calculator" className="py-28 px-6 bg-[#F5F5F4] border-y border-[#E7E5E4]">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-[11px] font-semibold text-[#064E3B] uppercase tracking-[0.18em] mb-3">Try it yourself</p>
          <h2 className="text-[34px] md:text-[44px] font-serif font-medium text-[#1C1917] leading-[1.15] mb-3">
            Estimate your phantom revenue in 30 seconds.
          </h2>
          <p className="text-[17px] text-[#78716C] max-w-lg mx-auto">
            Enter three numbers from your last 30 days. We&apos;ll show your likely gap — then the audit proves it line by line.
          </p>
        </div>

        <div className="bg-white border border-[#E7E5E4] rounded-2xl p-8 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_1px_2px_rgba(0,0,0,0.06)]">
          <div className="space-y-5">
            <div>
              <label className="block text-[13px] font-semibold text-[#1C1917] mb-2">Meta reported revenue (last 30 days)</label>
              <input className={inputClass} placeholder="$142,800" value={metaRevenue} onChange={e => setMetaRevenue(e.target.value)} />
            </div>
            <div>
              <label className="block text-[13px] font-semibold text-[#1C1917] mb-2">Shopify net revenue (last 30 days)</label>
              <input className={inputClass} placeholder="$118,340" value={shopifyRevenue} onChange={e => setShopifyRevenue(e.target.value)} />
            </div>
            <div>
              <label className="block text-[13px] font-semibold text-[#1C1917] mb-2">Monthly ad spend</label>
              <input className={inputClass} placeholder="$47,000" value={adSpend} onChange={e => setAdSpend(e.target.value)} />
            </div>
            <button
              onClick={calculate}
              className="w-full py-4 bg-[#064E3B] text-white font-semibold text-[13px] uppercase tracking-[0.14em] hover:bg-[#043927] hover:shadow-[0_8px_24px_rgba(6,78,59,0.22)] active:scale-[0.99] transition-all rounded-lg"
            >
              Calculate gap
            </button>
          </div>

          {result && (
            <div className="mt-8 pt-8 border-t border-[#E7E5E4] space-y-3">
              <div className="flex justify-between items-center py-2.5">
                <span className="text-[14px] text-[#78716C]">Phantom revenue</span>
                <span className="text-[20px] font-serif font-semibold text-red-600 tabular-nums">{fmt(result.phantom)}</span>
              </div>
              <div className="flex justify-between items-center py-2.5 border-t border-[#E7E5E4]">
                <span className="text-[14px] text-[#78716C]">Platform ROAS</span>
                <span className="text-[20px] font-serif font-semibold text-[#44403C] tabular-nums">{result.platformRoas.toFixed(2)}×</span>
              </div>
              <div className="flex justify-between items-center py-2.5 border-t border-[#E7E5E4]">
                <span className="text-[14px] text-[#78716C]">Real ROAS</span>
                <span className="text-[20px] font-serif font-semibold text-[#064E3B] tabular-nums">{result.realRoas.toFixed(2)}×</span>
              </div>
              <div className="flex justify-between items-center py-2.5 border-t border-[#E7E5E4]">
                <span className="text-[14px] text-[#78716C]">Gap</span>
                <span className="text-[20px] font-serif font-semibold text-red-600 tabular-nums">{result.gapPct.toFixed(1)}%</span>
              </div>

              <div className="mt-4 p-4 rounded-lg bg-red-50 border border-red-100">
                <p className="text-[14px] text-red-800 leading-relaxed">
                  You&apos;re likely reporting <strong>{result.gapPct.toFixed(0)}%</strong> more revenue than your bank actually received.
                  The audit shows you <em>which campaigns</em> are responsible.
                </p>
              </div>

              <a
                href="https://cal.com/calyxra/15min"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 block text-center px-6 py-4 bg-[#064E3B] text-white font-semibold text-[13px] uppercase tracking-[0.14em] hover:bg-[#043927] transition-all rounded-lg"
              >
                Book the $249 audit →
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

/* ─── Main Page ─────────────────────────────────────────────── */
export default function Home() {
  const calendlyUrl = "https://cal.com/calyxra/15min";

  const faqItems = [
    {
      q: "What exactly do I get for $249?",
      a: "A full reconciliation of one Shopify store + one ad platform (Meta or Google), covering 30 days of data. You receive a branded PDF report showing phantom revenue per campaign, refund/chargeback/discount breakdowns, true ROAS vs reported ROAS, and 3 concrete recommendations. Plus a 30-minute walkthrough call where we go through the numbers with you. Delivered within 48 hours of you sending data.",
    },
    {
      q: "What's different about the $499 Pro audit?",
      a: "Pro covers 90 days (not 30), both Meta AND Google (not one), and adds channel-overlap analysis — which matters because Meta and Google both claim credit for the same conversions. Pro also includes campaign-level variance decomposition and 5 recommendations instead of 3. The walkthrough call is extended to 45 minutes.",
    },
    {
      q: "How do you actually run the audit?",
      a: "Short answer: a human runs it, not a bot. You send us exports (CSVs from Shopify, Meta, Google — we send a checklist). We run them through our reconciliation pipeline, validate the numbers, and write the report. We're honest about this: we're a concierge service right now, not self-serve software. Self-serve is on the roadmap but not what you're paying for today.",
    },
    {
      q: "What if the gap is small?",
      a: "If your gap is under 5%, we refund the audit in full, no questions asked. This isn't a loss-leader trick — we'd rather not cash a check we didn't earn. Most brands we've seen run 12-25% gaps on Meta alone.",
    },
    {
      q: "Is my data safe?",
      a: "You only send us exports — no API access, no OAuth, no permissions to touch your store or ad accounts. Data lives on our side only while we run the audit, then we delete it and send you the report. If you want a DPA or NDA before sending data, ask and we'll sign one.",
    },
    {
      q: "How is this different from Triple Whale / Northbeam?",
      a: "Attribution platforms tell you which ad drove a conversion. We tell you which reported conversions actually landed in your bank. Different problems. Triple Whale won't show you that Meta reported $22K more than Shopify collected — that's the gap we surface.",
    },
    {
      q: "How do I pay?",
      a: "We send an invoice after the intro call. Wire, Wise, or card — whichever is easier for you. No subscription, no lock-in, no auto-renewal. One audit, one invoice.",
    },
    {
      q: "Can I do this monthly?",
      a: "Recurring reconciliation is on the roadmap for Q3 2026. Right now we&apos;re deliberately focused on one-time audits while we build the automation layer. If you want to be on the waitlist for monthly, email admin@calyxra.com.",
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
    <div className="min-h-screen bg-[#FAFAF9] text-[#1C1917] font-sans selection:bg-[#064E3B]/20 antialiased">
      <Navbar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <main className="pt-32">

        {/* ═══════════════════════════════════════════════════
            HERO
        ═══════════════════════════════════════════════════ */}
        <section className="px-6 pt-20 pb-32">
          <div className="max-w-5xl mx-auto text-center">
            {/* Micro-badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-[#E7E5E4] rounded-full text-[12px] font-medium text-[#44403C] mb-8 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#064E3B]"></span>
              Revenue reconciliation for Shopify brands
            </div>

            <h1 className="text-[44px] md:text-[64px] lg:text-[76px] font-serif font-medium text-[#1C1917] mb-8 leading-[1.04] tracking-[-0.02em]">
              Your ad platforms are<br className="hidden md:block" />
              <span className="italic text-[#064E3B]">inflating</span> your revenue.
            </h1>

            <p className="text-[19px] md:text-[21px] text-[#44403C] mb-10 max-w-2xl mx-auto leading-[1.55]">
              Meta says $100K. Shopify collected $78K. We show you exactly where the missing <span className="tabular-nums font-semibold text-[#1C1917]">$22,000</span> went — campaign by campaign — in 48 hours.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mb-8">
              <a
                href={calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-[#064E3B] text-white font-semibold text-[13px] uppercase tracking-[0.14em] hover:bg-[#043927] hover:shadow-[0_10px_30px_rgba(6,78,59,0.24)] active:scale-[0.98] transition-all rounded-lg min-w-[220px]"
              >
                Book an audit — $249
              </a>
              <a
                href="#calculator"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white border border-[#E7E5E4] text-[#1C1917] font-semibold text-[13px] uppercase tracking-[0.14em] hover:border-[#1C1917] hover:bg-white transition-all rounded-lg min-w-[220px]"
              >
                Estimate the gap →
              </a>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-[13px] text-[#78716C]">
              <span className="inline-flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-[#064E3B]" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                48-hour delivery
              </span>
              <span className="inline-flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-[#064E3B]" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                Full refund if gap &lt; 5%
              </span>
              <span className="inline-flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-[#064E3B]" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                No API access required
              </span>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════
            THE PROBLEM — 3 cards, editorial tone
        ═══════════════════════════════════════════════════ */}
        <section className="py-28 px-6 bg-white border-y border-[#E7E5E4]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <p className="text-[11px] font-semibold text-[#064E3B] uppercase tracking-[0.18em] mb-3">The problem</p>
              <h2 className="text-[34px] md:text-[44px] font-serif font-medium text-[#1C1917] leading-[1.15] mb-4">
                The numbers don&apos;t match. Here&apos;s why.
              </h2>
              <p className="text-[17px] text-[#78716C] leading-relaxed">
                Three systems reporting three different truths. Nobody reconciles them — so brands scale on numbers that aren&apos;t real.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {/* Card 1 */}
              <div className="bg-white border border-[#E7E5E4] rounded-2xl p-8 hover:border-[#D6D3D1] hover:shadow-[0_8px_24px_rgba(0,0,0,0.04)] transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center mb-5">
                  <span className="text-[15px] font-semibold text-blue-700">01</span>
                </div>
                <p className="text-[11px] font-semibold text-blue-700 uppercase tracking-[0.12em] mb-2">Meta says</p>
                <h3 className="text-[28px] font-serif font-medium text-[#1C1917] mb-3 tabular-nums">$100,000</h3>
                <p className="text-[15px] text-[#44403C] leading-[1.6]">
                  The pixel fires at checkout. Counts full order value. Never looks back to check if the order survived.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white border border-[#E7E5E4] rounded-2xl p-8 hover:border-[#D6D3D1] hover:shadow-[0_8px_24px_rgba(0,0,0,0.04)] transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-amber-50 border border-amber-100 flex items-center justify-center mb-5">
                  <span className="text-[15px] font-semibold text-amber-700">02</span>
                </div>
                <p className="text-[11px] font-semibold text-amber-700 uppercase tracking-[0.12em] mb-2">Shopify collected</p>
                <h3 className="text-[28px] font-serif font-medium text-[#1C1917] mb-3 tabular-nums">$78,000</h3>
                <p className="text-[15px] text-[#44403C] leading-[1.6]">
                  Refunds settled weeks later. Discount codes ate 20%. Chargebacks hit. The real number dropped quietly.
                </p>
              </div>

              {/* Card 3 — accent */}
              <div className="bg-[#FEF2F2] border border-red-200 rounded-2xl p-8 hover:shadow-[0_8px_24px_rgba(220,38,38,0.08)] transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-white border border-red-200 flex items-center justify-center mb-5">
                  <span className="text-[15px] font-semibold text-red-600">03</span>
                </div>
                <p className="text-[11px] font-semibold text-red-600 uppercase tracking-[0.12em] mb-2">Where&apos;s the</p>
                <h3 className="text-[28px] font-serif font-medium text-red-700 mb-3 tabular-nums">$22,000?</h3>
                <p className="text-[15px] text-red-900/80 leading-[1.6]">
                  Phantom revenue — counted by ad platforms, never deposited in your bank. Nobody tells you it exists.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════
            WHAT YOU GET — Case study / preview
        ═══════════════════════════════════════════════════ */}
        <section className="py-28 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14 max-w-2xl mx-auto">
              <p className="text-[11px] font-semibold text-[#064E3B] uppercase tracking-[0.18em] mb-3">What you receive</p>
              <h2 className="text-[34px] md:text-[44px] font-serif font-medium text-[#1C1917] leading-[1.15] mb-4">
                A report that tells you exactly where the money went.
              </h2>
              <p className="text-[17px] text-[#78716C] leading-relaxed">
                Not a dashboard to interpret. A document with answers — per campaign, per day, in plain English.
              </p>
            </div>

            {/* Dashboard preview with chrome */}
            <div className="relative mx-auto max-w-5xl">
              <div className="absolute -inset-4 bg-gradient-to-b from-[#064E3B]/5 to-transparent rounded-3xl blur-2xl -z-10"></div>
              <div className="rounded-2xl overflow-hidden border border-[#E7E5E4] shadow-[0_24px_60px_rgba(0,0,0,0.12),0_8px_24px_rgba(0,0,0,0.06)]">
                {/* Browser chrome */}
                <div className="bg-[#F5F5F4] border-b border-[#E7E5E4] px-5 py-3 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-400/80"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-400/80"></div>
                  </div>
                  <div className="flex-1 text-center">
                    <span className="text-[12px] text-[#78716C] font-mono">Calyxra — Revenue Leak Audit (sample)</span>
                  </div>
                </div>
                <Image
                  src="/dashboard-screenshot.png"
                  alt="Sample Calyxra audit — phantom revenue $50,920, true ROAS 3.56×, net revenue $180,120"
                  width={1600}
                  height={1000}
                  className="w-full h-auto block"
                  priority={false}
                />
              </div>
            </div>

            {/* Three deliverable pills */}
            <div className="mt-14 grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              <div className="text-center px-4">
                <div className="text-[42px] font-serif font-medium text-[#064E3B] tabular-nums mb-1">48h</div>
                <p className="text-[14px] text-[#78716C]">From data to PDF report</p>
              </div>
              <div className="text-center px-4 md:border-x md:border-[#E7E5E4]">
                <div className="text-[42px] font-serif font-medium text-[#064E3B] tabular-nums mb-1">15-25%</div>
                <p className="text-[14px] text-[#78716C]">Typical gap we surface on Meta</p>
              </div>
              <div className="text-center px-4">
                <div className="text-[42px] font-serif font-medium text-[#064E3B] tabular-nums mb-1">&lt;5%</div>
                <p className="text-[14px] text-[#78716C]">Gap threshold for full refund</p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════
            HOW IT WORKS — Editorial 3-step
        ═══════════════════════════════════════════════════ */}
        <section className="py-28 px-6 bg-white border-y border-[#E7E5E4]">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <p className="text-[11px] font-semibold text-[#064E3B] uppercase tracking-[0.18em] mb-3">How it works</p>
              <h2 className="text-[34px] md:text-[44px] font-serif font-medium text-[#1C1917] leading-[1.15] mb-4">
                Three steps. Forty-eight hours. No setup.
              </h2>
              <p className="text-[17px] text-[#78716C] leading-relaxed">
                You don&apos;t need to install anything, grant access, or learn a dashboard. We handle the full pipeline.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-10 md:gap-6">
              {[
                {
                  step: "01",
                  title: "Book a 15-min call",
                  body: "We confirm scope, ask which platforms you run, and send you a short checklist of CSV exports (about 5 minutes of work on your side).",
                },
                {
                  step: "02",
                  title: "You send the exports",
                  body: "Standard Shopify + Meta + Google exports. No API access. No OAuth. Data stays on our side only while we run the audit, then gets deleted.",
                },
                {
                  step: "03",
                  title: "PDF + walkthrough",
                  body: "Branded report delivered within 48 hours, followed by a 30-minute walkthrough call where we go through campaign-level findings together.",
                },
              ].map((item, i) => (
                <div key={i} className="relative">
                  <div className="flex items-baseline gap-3 mb-4">
                    <span className="text-[13px] font-mono font-semibold text-[#064E3B] tracking-widest">{item.step}</span>
                    <div className="flex-1 h-px bg-[#E7E5E4]"></div>
                  </div>
                  <h3 className="text-[22px] font-serif font-medium text-[#1C1917] mb-3 leading-[1.25]">{item.title}</h3>
                  <p className="text-[15px] text-[#44403C] leading-[1.65]">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════
            GAP CALCULATOR
        ═══════════════════════════════════════════════════ */}
        <GapCalculator />

        {/* ═══════════════════════════════════════════════════
            SAAS PRICING — THREE TIERS
        ═══════════════════════════════════════════════════ */}
        <section id="saas-pricing" className="py-28 px-6 bg-[#F5F5F4] border-y border-[#E7E5E4]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <p className="text-[11px] font-semibold text-[#064E3B] uppercase tracking-[0.18em] mb-3">SaaS plans</p>
              <h2 className="text-[34px] md:text-[44px] font-serif font-medium text-[#1C1917] leading-[1.15] mb-4">
                Simple pricing. Real numbers.
              </h2>
              <p className="text-[17px] text-[#78716C] leading-relaxed">
                No contracts. No pixels. Cancel anytime.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch">
              {/* FREE */}
              <div className="bg-white border border-[#E7E5E4] rounded-2xl p-8 hover:border-[#D6D3D1] hover:shadow-[0_8px_24px_rgba(0,0,0,0.04)] transition-all duration-300 flex flex-col">
                <div className="mb-6">
                  <p className="text-[11px] font-semibold text-[#78716C] uppercase tracking-[0.14em] mb-2">Free</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-[48px] font-serif font-medium text-[#1C1917] leading-none tabular-nums">$0</span>
                    <span className="text-[14px] text-[#78716C] ml-2">/mo</span>
                  </div>
                  <p className="text-[13px] text-[#78716C] mt-2">1 store, forever free</p>
                </div>

                <div className="h-px bg-[#E7E5E4] mb-6"></div>

                <ul className="space-y-3.5 mb-8 flex-1">
                  {[
                    'Phantom revenue detection',
                    'True ROAS (aggregate)',
                    'Gap breakdown (refunds, discounts)',
                    'Shopify + Meta connection',
                    'Revenue leak alert',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#94A3B8] flex-shrink-0 mt-[9px]"></span>
                      <span className="text-[14.5px] text-[#1C1917] leading-[1.55]">{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://app.calyxra.com/register"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3.5 bg-white border-2 border-[#064E3B] text-[#064E3B] font-semibold text-[13px] uppercase tracking-[0.14em] hover:bg-[#064E3B] hover:text-white transition-all rounded-lg text-center"
                >
                  Get Started Free →
                </a>
              </div>

              {/* PAID — MOST POPULAR */}
              <div className="relative bg-white border-2 border-[#064E3B] rounded-2xl p-8 shadow-[0_24px_60px_rgba(6,78,59,0.12)] flex flex-col">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-block bg-[#064E3B] text-white px-4 py-1 text-[10px] font-bold uppercase tracking-[0.14em] rounded-full whitespace-nowrap">
                    Most Popular
                  </span>
                </div>

                <div className="mb-6">
                  <p className="text-[11px] font-semibold text-[#064E3B] uppercase tracking-[0.14em] mb-2">Paid</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-[48px] font-serif font-medium text-[#1C1917] leading-none tabular-nums">$150</span>
                    <span className="text-[14px] text-[#78716C] ml-2">/mo</span>
                  </div>
                  <p className="text-[13px] text-[#78716C] mt-2">$120/mo billed annually</p>
                </div>

                <div className="h-px bg-[#E7E5E4] mb-6"></div>

                <ul className="space-y-3.5 mb-8 flex-1">
                  {[
                    'Everything in Free',
                    'Up to 3 stores',
                    'Per-campaign True ROAS breakdown',
                    'AI budget optimizer (pause/scale/reduce)',
                    'Google Ads connection',
                    'Revenue waterfall & trend charts',
                    'LTV-based ROAS & cohort analysis',
                    'PDF report export',
                    'Real-time alerts',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#064E3B] flex-shrink-0 mt-[9px]"></span>
                      <span className="text-[14.5px] text-[#1C1917] leading-[1.55]">{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://app.calyxra.com/register"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3.5 bg-[#064E3B] text-white font-semibold text-[13px] uppercase tracking-[0.14em] hover:bg-[#043927] hover:shadow-[0_10px_30px_rgba(6,78,59,0.24)] transition-all rounded-lg text-center"
                >
                  Start 14-Day Free Trial →
                </a>
              </div>

              {/* AGENCY */}
              <div className="bg-white border border-[#E7E5E4] rounded-2xl p-8 hover:border-[#D6D3D1] hover:shadow-[0_8px_24px_rgba(0,0,0,0.04)] transition-all duration-300 flex flex-col">
                <div className="mb-6">
                  <p className="text-[11px] font-semibold text-[#818CF8] uppercase tracking-[0.14em] mb-2">Agency</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-[48px] font-serif font-medium text-[#1C1917] leading-none tabular-nums">$399</span>
                    <span className="text-[14px] text-[#78716C] ml-2">/mo</span>
                  </div>
                  <p className="text-[13px] text-[#78716C] mt-2">$319/mo billed annually</p>
                </div>

                <div className="h-px bg-[#E7E5E4] mb-6"></div>

                <ul className="space-y-3.5 mb-8 flex-1">
                  {[
                    'Everything in Paid',
                    'Up to 50 stores',
                    'Multi-store portfolio dashboard',
                    'White-label PDF reports',
                    'Cross-store benchmarking',
                    'Aggregated portfolio KPIs',
                    'Custom branding (logo, colors)',
                    'Direct founder support (Slack)',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#818CF8] flex-shrink-0 mt-[9px]"></span>
                      <span className="text-[14.5px] text-[#1C1917] leading-[1.55]">{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="mailto:admin@calyxra.com?subject=Agency plan inquiry"
                  className="block w-full py-3.5 bg-white border-2 border-[#818CF8] text-[#818CF8] font-semibold text-[13px] uppercase tracking-[0.14em] hover:bg-[#818CF8] hover:text-white transition-all rounded-lg text-center"
                >
                  Contact Sales →
                </a>
              </div>
            </div>

            <p className="text-center text-[13px] text-[#78716C] mt-10">
              Prefer a one-time deep-dive instead of monthly software?{' '}
              <a href="#pricing" className="text-[#064E3B] font-semibold hover:underline">
                See concierge audit pricing ↓
              </a>
            </p>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════
            PRICING — TWO TIERS
        ═══════════════════════════════════════════════════ */}
        <section id="pricing" className="py-28 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <p className="text-[11px] font-semibold text-[#064E3B] uppercase tracking-[0.18em] mb-3">Pricing</p>
              <h2 className="text-[34px] md:text-[44px] font-serif font-medium text-[#1C1917] leading-[1.15] mb-4">
                Two audit tiers. One invoice. No subscriptions.
              </h2>
              <p className="text-[17px] text-[#78716C] leading-relaxed">
                Pick the depth that fits the account. Both delivered manually, both refunded if the gap is below 5%.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {/* Basic — $249 */}
              <div className="bg-white border border-[#E7E5E4] rounded-2xl p-8 md:p-10 hover:border-[#D6D3D1] hover:shadow-[0_8px_24px_rgba(0,0,0,0.04)] transition-all duration-300">
                <div className="mb-6">
                  <p className="text-[11px] font-semibold text-[#78716C] uppercase tracking-[0.14em] mb-2">Revenue Audit</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-[48px] font-serif font-medium text-[#1C1917] leading-none tabular-nums">$249</span>
                    <span className="text-[14px] text-[#78716C] ml-2">one-time</span>
                  </div>
                  <p className="text-[13px] text-[#78716C] mt-2">For brands validating one platform</p>
                </div>

                <div className="h-px bg-[#E7E5E4] mb-6"></div>

                <ul className="space-y-3.5 mb-8">
                  {[
                    "1 Shopify store × 1 ad platform (Meta or Google)",
                    "30 days of data reconciled",
                    "Campaign-level phantom revenue breakdown",
                    "Refund, chargeback & discount analysis",
                    "Branded PDF report + 3 recommendations",
                    "30-minute walkthrough call",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg className="w-4 h-4 text-[#064E3B] flex-shrink-0 mt-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-[14.5px] text-[#1C1917] leading-[1.55]">{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3.5 bg-white border-2 border-[#1C1917] text-[#1C1917] font-semibold text-[13px] uppercase tracking-[0.14em] hover:bg-[#1C1917] hover:text-white transition-all rounded-lg text-center"
                >
                  Book audit — $249
                </a>
                <p className="text-[12px] text-[#78716C] text-center mt-3">PDF delivered within 48 hours</p>
              </div>

              {/* Pro — $499 */}
              <div className="relative bg-[#0B3B2E] text-white rounded-2xl p-8 md:p-10 shadow-[0_24px_60px_rgba(6,78,59,0.25)]">
                <div className="absolute -top-3 left-8">
                  <span className="inline-block bg-white text-[#064E3B] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] rounded-full border border-[#D6D3D1]">
                    Recommended
                  </span>
                </div>

                <div className="mb-6">
                  <p className="text-[11px] font-semibold text-[#6EE7B7] uppercase tracking-[0.14em] mb-2">Pro Audit</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-[48px] font-serif font-medium text-white leading-none tabular-nums">$499</span>
                    <span className="text-[14px] text-white/60 ml-2">one-time</span>
                  </div>
                  <p className="text-[13px] text-white/60 mt-2">For agencies & scaling DTC brands</p>
                </div>

                <div className="h-px bg-white/10 mb-6"></div>

                <ul className="space-y-3.5 mb-8">
                  {[
                    "1 Shopify store × Meta AND Google",
                    "90 days of data reconciled",
                    "Channel-overlap analysis (Meta vs Google double-counting)",
                    "Campaign-level variance decomposition",
                    "Branded PDF + 5 recommendations + projected annual impact",
                    "45-minute walkthrough call",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg className="w-4 h-4 text-[#6EE7B7] flex-shrink-0 mt-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-[14.5px] text-white/95 leading-[1.55]">{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3.5 bg-white text-[#064E3B] font-semibold text-[13px] uppercase tracking-[0.14em] hover:bg-[#F5F5F4] transition-all rounded-lg text-center"
                >
                  Book pro audit — $499
                </a>
                <p className="text-[12px] text-white/60 text-center mt-3">PDF delivered within 48 hours</p>
              </div>
            </div>

            {/* Pricing footnote */}
            <div className="mt-10 text-center">
              <p className="text-[14px] text-[#78716C]">
                Gap under 5% = full refund. Agency referrals welcome at{' '}
                <a href="mailto:admin@calyxra.com?subject=Partnership" className="text-[#064E3B] font-semibold hover:underline">
                  admin@calyxra.com
                </a>
                .
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════
            WHO IT'S FOR
        ═══════════════════════════════════════════════════ */}
        <section className="py-28 px-6 bg-white border-y border-[#E7E5E4]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <p className="text-[11px] font-semibold text-[#064E3B] uppercase tracking-[0.18em] mb-3">Built for</p>
              <h2 className="text-[34px] md:text-[44px] font-serif font-medium text-[#1C1917] leading-[1.15] mb-4">
                Teams scaling on Shopify + paid ads.
              </h2>
              <p className="text-[17px] text-[#78716C] leading-relaxed">
                If you make budget decisions on ROAS numbers, you need to know those numbers are real.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {[
                {
                  title: "DTC founders & CFOs",
                  body: "Spending $20K+/month on Meta. Scaling decisions hinge on ROAS. One audit tells you if you're profitable or just optimistic.",
                },
                {
                  title: "Performance agencies",
                  body: "Managing 3+ Shopify clients. Month-end reconciliation eats hours. Show clients the real numbers before they ask.",
                },
                {
                  title: "Media buyers",
                  body: "Optimizing campaigns daily. True ROAS ≠ reported ROAS. Find which campaigns are actually profitable and which are phantom.",
                },
              ].map((item, i) => (
                <div key={i} className="bg-[#FAFAF9] border border-[#E7E5E4] rounded-2xl p-8 hover:border-[#D6D3D1] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.04)] transition-all duration-300">
                  <h3 className="text-[19px] font-serif font-medium text-[#1C1917] mb-3 leading-[1.3]">{item.title}</h3>
                  <p className="text-[15px] text-[#44403C] leading-[1.65]">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════
            FAQ
        ═══════════════════════════════════════════════════ */}
        <section className="py-28 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-[11px] font-semibold text-[#064E3B] uppercase tracking-[0.18em] mb-3">Questions</p>
              <h2 className="text-[34px] md:text-[44px] font-serif font-medium text-[#1C1917] leading-[1.15]">
                Everything you&apos;d reasonably ask.
              </h2>
            </div>

            <div className="bg-white rounded-2xl border border-[#E7E5E4] overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
              {faqItems.map((item, i) => (
                <details key={i} className="border-b border-[#E7E5E4] last:border-0 group">
                  <summary className="w-full px-7 py-5 flex items-center justify-between text-left cursor-pointer list-none [&::-webkit-details-marker]:hidden hover:bg-[#FAFAF9] transition-colors">
                    <span className="text-[15.5px] font-semibold text-[#1C1917] pr-4 leading-[1.4]">{item.q}</span>
                    <svg className="w-5 h-5 text-[#78716C] flex-shrink-0 transition-transform duration-200 group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-7 pb-6 -mt-1">
                    <p className="text-[15px] text-[#44403C] leading-[1.7]">{item.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════
            FINAL CTA — quiet, confident
        ═══════════════════════════════════════════════════ */}
        <section className="py-28 px-6 bg-[#0B3B2E] text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-[36px] md:text-[52px] font-serif font-medium leading-[1.1] mb-6 tracking-[-0.02em]">
              Stop scaling on numbers<br />
              <span className="italic text-[#6EE7B7]">that aren&apos;t real.</span>
            </h2>
            <p className="text-[18px] text-white/70 mb-10 max-w-xl mx-auto leading-relaxed">
              One audit. 48 hours. Full refund if your gap is below 5%. No subscriptions, no contracts.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
              <a
                href={calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#064E3B] font-semibold text-[13px] uppercase tracking-[0.14em] hover:bg-[#F5F5F4] transition-all rounded-lg min-w-[220px]"
              >
                Book an audit — $249
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-white/30 text-white font-semibold text-[13px] uppercase tracking-[0.14em] hover:bg-white/5 hover:border-white/60 transition-all rounded-lg min-w-[220px]"
              >
                Compare tiers →
              </a>
            </div>
            <p className="mt-8 text-[12px] text-white/40 uppercase tracking-[0.16em]">
              Built by operators · Delivered manually · No dashboards to learn
            </p>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
