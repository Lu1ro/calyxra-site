'use client';

import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Badge from '../../components/Badge';
import SectionHeading from '../../components/SectionHeading';
import PricingCard from '../../components/PricingCard';
import FAQItem from '../../components/FAQItem';
import AuditOfferSection from '../../components/AuditOfferSection';

function AddOnCard({ name, price, description }: { name: string; price: string; description?: string }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between p-6 bg-white border border-stone-200 hover:border-emerald-300 transition-colors duration-300 gap-4">
      <div>
        <h4 className="font-medium text-stone-900">{name}</h4>
        {description && <p className="text-sm text-stone-500 mt-1">{description}</p>}
      </div>
      <div className="text-emerald-700 font-mono font-medium text-sm whitespace-nowrap">{price}</div>
    </div>
  );
}

function SetupItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3">
      <svg className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
      <span className="text-stone-700">{text}</span>
    </li>
  );
}

function CompareModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;

  const compareData = [
    { feature: 'Stores', scale: '3–5 stores', pro: '6–10+ stores' },
    { feature: 'Ad Platforms', scale: 'Meta + Google + TikTok', pro: 'All platforms + custom' },
    { feature: 'Data Sources', scale: 'Shopify + Ads + GA4', pro: 'Shopify + Ads + GA4 + Klaviyo/CRM' },
    { feature: 'Data Refresh', scale: 'Daily + monitoring', pro: 'Daily + advanced monitoring' },
    { feature: 'Health Monitoring', scale: '✓', pro: '✓ (advanced)' },
    { feature: 'Dashboards', scale: 'All core dashboards', pro: 'All + weekly snapshots' },
    { feature: 'Support', scale: 'Slack (business hours)', pro: 'Dedicated lane' },
    { feature: 'Onboarding', scale: '7–10 days (48h kickoff)', pro: '10–14 days (priority)' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-white max-w-4xl w-full max-h-[85vh] overflow-auto shadow-2xl">
        <div className="sticky top-0 bg-white border-b border-stone-200 p-6 flex justify-between items-center">
          <h3 className="text-2xl font-serif font-medium text-stone-900">Compare Plans</h3>
          <button onClick={onClose} className="text-stone-400 hover:text-stone-900 transition-colors">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="p-6 overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="border-b border-stone-200">
                <th className="text-left py-4 px-3 text-xs font-bold uppercase tracking-widest text-stone-500">Feature</th>
                <th className="text-center py-4 px-3 text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50">Scale</th>
                <th className="text-center py-4 px-3 text-xs font-bold uppercase tracking-widest text-stone-500">Pro</th>
              </tr>
            </thead>
            <tbody>
              {compareData.map((row, i) => (
                <tr key={i} className="border-b border-stone-100 last:border-b-0">
                  <td className="py-4 px-3 text-sm font-medium text-stone-900">{row.feature}</td>
                  <td className="py-4 px-3 text-sm text-stone-900 text-center bg-emerald-50/50 font-medium">{row.scale}</td>
                  <td className="py-4 px-3 text-sm text-stone-600 text-center">{row.pro}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// --- PAGE FUNCTION ---

export default function PricingPage() {
  const calendlyUrl = "https://cal.com/calyxra/15min";
  const [isCompareOpen, setIsCompareOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAFAF9] text-stone-900 font-sans selection:bg-emerald-200 selection:text-emerald-900">
      <Navbar />

      <main className="pt-32">
        {/* HERO SECTION */}
        <section className="px-6 pb-20 border-b border-stone-200">
          <div className="max-w-5xl mx-auto text-center">
            <div className="flex justify-center gap-3 mb-8">
              <Badge text="White-Label" />
              <Badge text="For Agencies" variant="highlight" />
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-medium text-stone-900 mb-6 leading-[1.1]">
              Profit-grade analytics for Shopify agencies.<br />
              <span className="italic text-emerald-700">One source of truth across all client stores.</span>
            </h1>
            <p className="text-xl text-stone-500 mb-4 max-w-2xl mx-auto leading-relaxed">
              White-label dashboards + reconciliation layer for agencies managing 3+ Shopify brands.
            </p>
            <p className="text-lg text-stone-400 max-w-xl mx-auto mb-8">
              Built for Shopify + paid media teams. Clean data, one KPI layer, zero reporting chaos.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href={calendlyUrl} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-emerald-700 text-white font-bold text-sm uppercase tracking-widest hover:bg-emerald-800 transition-all shadow-lg">
                Get Truth Map + 15-min call
              </a>
              <a href="/deliverables" className="px-8 py-4 bg-transparent border-2 border-stone-300 text-stone-900 font-bold text-sm uppercase tracking-widest hover:bg-stone-100 transition-all">
                View Infrastructure Outputs
              </a>
            </div>
          </div>
        </section>

        {/* AUDIT OFFER SECTION */}
        <AuditOfferSection />

        {/* PRICING CARDS */}
        <section className="py-24 px-6 bg-[#FAFAF9]">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-medium text-stone-900 mb-4">Simple pricing. Real numbers.</h2>
              <div className="h-1 w-20 bg-emerald-700 mx-auto mb-4"></div>
              <p className="text-stone-500 max-w-2xl mx-auto text-lg">No contracts. No % of ad spend. Cancel anytime.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {/* Revenue Leak Audit */}
              <div className="bg-white p-8 border border-stone-200 hover:border-emerald-300 transition-colors shadow-xl">
                <p className="text-[10px] font-bold text-emerald-700 uppercase tracking-widest mb-3">Revenue Leak Audit</p>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-4xl font-serif font-medium text-stone-900">$249</span>
                </div>
                <p className="text-sm text-stone-400 mb-4">one-time · delivered in 48 hours</p>
                <div className="flex gap-2 mb-6">
                  <span className="inline-flex items-center gap-1 px-2 py-1 bg-emerald-50 border border-emerald-200 rounded text-[10px] font-bold text-emerald-700">⚡ 48h delivery</span>
                  <span className="inline-flex items-center gap-1 px-2 py-1 bg-amber-50 border border-amber-200 rounded text-[10px] font-bold text-amber-700">🛡️ Refund guarantee</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <SetupItem text="Full Shopify + Meta reconciliation" />
                  <SetupItem text="Gap root cause analysis" />
                  <SetupItem text="Campaign-level recommendations" />
                  <SetupItem text="Budget reallocation plan" />
                  <SetupItem text="Branded PDF report" />
                  <SetupItem text="Projected annual impact" />
                  <SetupItem text="30-min walkthrough call" />
                </ul>
                <a href={calendlyUrl} target="_blank" rel="noopener noreferrer" className="block text-center px-6 py-4 border-2 border-emerald-700 text-emerald-700 font-bold text-sm uppercase tracking-widest hover:bg-emerald-50 transition-all">
                  Book $249 Audit →
                </a>
                <p className="text-center text-xs text-stone-400 mt-3">Gap under 5% = full refund</p>
              </div>

              {/* Monthly Reconciliation */}
              <div className="bg-white p-8 border-2 border-emerald-700 relative shadow-2xl shadow-emerald-500/10">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-700 text-white px-4 py-1 text-[10px] font-bold uppercase tracking-widest">
                  First 5 agencies only
                </div>
                <p className="text-[10px] font-bold text-emerald-700 uppercase tracking-widest mb-3">Monthly Reconciliation</p>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-4xl font-serif font-medium text-stone-900">$150</span>
                  <span className="text-stone-400 text-sm">/month</span>
                </div>
                <p className="text-sm text-stone-400 mb-6">price increases after 5 clients</p>
                <ul className="space-y-3 mb-8">
                  <SetupItem text="Everything in the audit" />
                  <SetupItem text="Monthly monitoring + alerts" />
                  <SetupItem text="Action Engine recommendations" />
                  <SetupItem text="White-label PDF for your clients" />
                  <SetupItem text="Direct founder support" />
                </ul>
                <a href={calendlyUrl} target="_blank" rel="noopener noreferrer" className="block text-center px-6 py-4 bg-emerald-700 text-white font-bold text-sm uppercase tracking-widest hover:bg-emerald-800 transition-all shadow-lg">
                  Start Free Pilot →
                </a>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-stone-500 text-sm">
                Need something custom? <a href={calendlyUrl} target="_blank" rel="noopener noreferrer" className="text-emerald-700 font-semibold hover:underline">Book a call →</a>
              </p>
            </div>
          </div>
        </section>

        {/* COMPARISON MODAL */}
        <CompareModal isOpen={isCompareOpen} onClose={() => setIsCompareOpen(false)} />

        {/* ARCHITECTURE DIAGRAM */}
        <section className="py-24 px-6 bg-white border-y border-stone-200">
          <div className="max-w-5xl mx-auto">
            <SectionHeading
              title="How It Works"
              subtitle="Clean data architecture from source to dashboard."
            />

            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7a2 2 0 00-2-2h-2M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                  </svg>
                </div>
                <h3 className="font-semibold text-stone-900 mb-2">Connect</h3>
                <p className="text-sm text-stone-500">Shopify, Meta Ads, Google Ads</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="font-semibold text-stone-900 mb-2">Reconcile</h3>
                <p className="text-sm text-stone-500">Find phantom revenue automatically</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-stone-900 mb-2">Dashboard</h3>
                <p className="text-sm text-stone-500">True ROAS, KPIs, waterfall breakdown</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-stone-900 mb-2">Report</h3>
                <p className="text-sm text-stone-500">White-label PDF for your clients</p>
              </div>
            </div>

            <div className="text-center">
              <a href="/deliverables" className="inline-block px-8 py-4 bg-stone-100 text-stone-900 font-bold text-sm uppercase tracking-widest hover:bg-stone-200 transition-all">
                View Infrastructure Outputs
              </a>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-24 px-6 bg-stone-50">
          <div className="max-w-3xl mx-auto">
            <SectionHeading
              title="Common Questions"
              subtitle="Everything you need to know about our audit and ongoing reconciliation."
            />
            <div className="bg-white p-2 rounded-2xl shadow-sm border border-stone-200">
              <div className="px-6">
                <FAQItem
                  question="What do I need to get started?"
                  answer="Just your Shopify Admin API token and Meta Ads access token. We connect read-only and never modify your data. The whole setup takes 15 minutes."
                />
                <FAQItem
                  question="How accurate is the reconciliation?"
                  answer="Our numbers match Shopify Analytics exactly. We use subtotal_price + discounts as gross revenue and subtract all verified refunds, cancelled orders, and test orders."
                />
                <FAQItem
                  question="What if I only have Shopify and no ads connected?"
                  answer="You'll still get a full revenue breakdown with refund analysis, discount tracking, and order quality metrics. Phantom revenue simply shows $0 until ads are connected."
                />
                <FAQItem
                  question="Is this white-label?"
                  answer="Fully white-label. PDF reports carry your agency's logo, colors, and branding. Your clients never see Calyxra."
                />
                <FAQItem
                  question="Can I cancel the monthly plan anytime?"
                  answer="Yes. No contracts, no lock-in. Cancel anytime. The $150/month launch price is locked in for early agencies — it goes up to $500+ after our first 5 clients."
                />
              </div>
            </div>
          </div>
        </section>

        {/* CALL TO ACTION */}
        <section className="py-24 px-6 bg-stone-900 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-serif font-medium mb-8">Stop scaling on inflated numbers.</h2>
            <p className="text-stone-400 text-lg mb-12 max-w-2xl mx-auto">
              Find your phantom revenue in 30 seconds with our free calculator, or book a full $250 audit with a 30-min walkthrough.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a href={calendlyUrl} target="_blank" rel="noopener noreferrer" className="px-8 py-5 bg-emerald-600 text-white font-bold text-sm uppercase tracking-widest hover:bg-emerald-500 transition-all shadow-xl shadow-emerald-500/20">
                Book $250 Audit
              </a>
            </div>
            <p className="mt-8 text-xs text-stone-500 uppercase tracking-widest">
              First 5 agencies get $150/month locked in
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}