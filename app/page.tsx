'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Badge from '../components/Badge';
import SectionHeading from '../components/SectionHeading';
import PricingCard from '../components/PricingCard';
import AuditOfferSection from '../components/AuditOfferSection';

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
    { feature: 'Stores', pilot: 'Up to 2', scale: 'Up to 5', pro: 'Up to 10' },
    { feature: 'Ad Platforms', pilot: '2 platforms', scale: 'Meta + Google + TikTok', pro: 'All platforms' },
    { feature: 'Data Sources', pilot: 'Shopify + Ads', scale: 'Shopify + Ads + GA4', pro: 'Shopify + Ads + GA4 + Custom' },
    { feature: 'Data Refresh', pilot: 'Daily', scale: 'Daily + monitoring', pro: 'Daily + advanced monitoring' },
    { feature: 'Health Monitoring', pilot: '—', scale: '✓', pro: '✓ (advanced)' },
    { feature: 'Dashboards', pilot: 'Executive + Marketing + P&L', scale: 'All core dashboards', pro: 'All + weekly snapshots' },
    { feature: 'Support', pilot: 'Email (48h)', scale: 'Slack (business hours)', pro: 'Dedicated lane' },
    { feature: 'Onboarding', pilot: '5–7 days', scale: '7–10 days (48h kickoff)', pro: '10–14 days (priority)' },
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
                <th className="text-center py-4 px-3 text-xs font-bold uppercase tracking-widest text-stone-500">Pilot</th>
                <th className="text-center py-4 px-3 text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50">Scale</th>
                <th className="text-center py-4 px-3 text-xs font-bold uppercase tracking-widest text-stone-500">Pro</th>
              </tr>
            </thead>
            <tbody>
              {compareData.map((row, i) => (
                <tr key={i} className="border-b border-stone-100 last:border-b-0">
                  <td className="py-4 px-3 text-sm font-medium text-stone-900">{row.feature}</td>
                  <td className="py-4 px-3 text-sm text-stone-600 text-center">{row.pilot}</td>
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

// --- NEW SECTIONS ADDED PER REQUEST ---

function ProofSection() {
  return (
    <section className="py-20 px-6 bg-white border-b border-stone-200">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Proof — quick wins we deliver"
          subtitle="Two lightweight proof assets to build trust fast: a before/after case study and short testimonials you can show in outreach."
        />

        <div className="grid md:grid-cols-2 gap-8">
          {/* Case study card */}
          <div className="bg-stone-50 p-6 border border-stone-200 shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Case Study: Executive Profit Diagnostic</h3>

            <div className="space-y-4 mb-4">
              <div>
                <h4 className="font-semibold text-emerald-700 mb-1">Before:</h4>
                <p className="text-stone-600 text-sm leading-relaxed">
                  Agency managed 5 Shopify brands. ROAS, revenue and profit didn't match across tools. Scaling decisions were based on inconsistent reports.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-emerald-700 mb-1">What we built:</h4>
                <ul className="text-stone-600 text-sm space-y-1 ml-4">
                  <li>• Shopify orders as source of truth</li>
                  <li>• Spend reconciliation across Meta, Google & TikTok</li>
                  <li>• Standard KPI layer (MER, CAC, Net Profit)</li>
                  <li>• Executive profit dashboard</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-emerald-700 mb-1">Outcome:</h4>
                <ul className="text-stone-600 text-sm space-y-1 ml-4">
                  <li>• leadership finally trusted numbers</li>
                  <li>• weekly reporting time reduced by ~10 hours</li>
                  <li>• scaling decisions moved from opinion → data</li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 mb-4">
              {/* Case study screenshots - replace with real images */}
              <div className="h-20 bg-white border border-stone-200 flex items-center justify-center">
                <svg className="w-6 h-6 text-stone-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              </div>
              <div className="h-20 bg-white border border-stone-200 flex items-center justify-center">
                <svg className="w-6 h-6 text-stone-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              </div>
              <div className="h-20 bg-white border border-stone-200 flex items-center justify-center">
                <svg className="w-6 h-6 text-stone-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              </div>
            </div>

            <a href="/Calyxra_Source_of_Truth_Map.pdf" target="_blank" rel="noopener noreferrer" className="inline-block px-5 py-3 bg-emerald-700 text-white rounded-sm font-medium">Download one-page case study</a>
          </div>

          {/* Testimonials */}
          <div className="flex flex-col gap-4">
            <blockquote className="bg-emerald-50 p-6 border-l-4 border-emerald-600">
              <p className="text-sm text-stone-700 leading-relaxed mb-3">
                "Before Calyxra, every client call turned into a debate about numbers. Shopify said one thing, ad platforms another, GA4 something else.
                <br /><br />
                Now we run every account from one profit layer. Fewer arguments, faster decisions, and our strategists finally trust the dashboards."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-200 rounded-full flex items-center justify-center text-emerald-700 font-bold text-sm">A</div>
                <div>
                  <cite className="text-sm text-stone-900 font-semibold not-italic">Founder, Shopify agency (6+ active stores)</cite>
                  <p className="text-xs text-stone-500">Anonymized</p>
                </div>
              </div>
            </blockquote>

            <blockquote className="bg-stone-50 p-6 border-l-4 border-stone-400">
              <p className="text-sm text-stone-700 leading-relaxed mb-3">
                "Their audit uncovered <strong>€12K in revenue mismatches</strong> across 4 client stores we didn't know existed. We were scaling brands on broken data.
                <br /><br />
                After the reconciliation layer, we rebuilt our reporting and <strong>cut weekly reporting time by 10+ hours</strong>. This paid for itself in the first month."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-stone-300 rounded-full flex items-center justify-center text-stone-700 font-bold text-sm">G</div>
                <div>
                  <cite className="text-sm text-stone-900 font-semibold not-italic">Head of Growth, DTC brand (8+ stores)</cite>
                  <p className="text-xs text-stone-500">Anonymized</p>
                </div>
              </div>
            </blockquote>

            <blockquote className="bg-emerald-50 p-6 border-l-4 border-emerald-600">
              <p className="text-sm text-stone-700 leading-relaxed mb-3">
                "Calyxra didn't give us 'another dashboard'. They gave us a standard KPI system we now roll out to every new client.
                <br /><br />
                Client onboarding is <strong>3x faster</strong>, reporting is cleaner, and our delivery feels enterprise-grade. <strong>Zero spreadsheet work.</strong>"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-200 rounded-full flex items-center justify-center text-emerald-700 font-bold text-sm">O</div>
                <div>
                  <cite className="text-sm text-stone-900 font-semibold not-italic">Agency owner (10+ client stores)</cite>
                  <p className="text-xs text-stone-500">Anonymized</p>
                </div>
              </div>
            </blockquote>

            <div className="bg-white p-4 border border-stone-200 text-center">
              <p className="text-xs text-stone-400 italic">Early deployments — names withheld under NDA.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CompareToolsSection() {
  return (
    <section className="py-20 px-6 bg-[#FAFAF9] border-b border-stone-200">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Calyxra vs Attribution Tools"
          subtitle="Quick comparison — we are not another attribution black box. We're a source of truth + reconciliation + concrete deliverables."
        />

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 border border-stone-200">
            <h4 className="font-semibold mb-3">Attribution apps</h4>
            <ul className="text-sm text-stone-600 space-y-2">
              <li>Often show platform-centered metrics (store-by-store).</li>
              <li>Tend to lock you into their schema.</li>
              <li>Limited reconciliation rules; little fleet-wide standardization.</li>
            </ul>
          </div>

          <div className="bg-white p-6 border border-stone-200">
            <h4 className="font-semibold mb-3">Calyxra approach</h4>
            <ul className="text-sm text-stone-600 space-y-2">
              <li>We use Shopify orders as source-of-truth and reconcile ad platforms + GA4 to that.</li>
              <li>Standard KPI dictionary you can own (MER, Net Profit, CAC definitions).</li>
              <li>Reconciliation rules, timezone & refund handling — documented and auditable.</li>
            </ul>
          </div>

          <div className="bg-white p-6 border border-stone-200">
            <h4 className="font-semibold mb-3">Why it matters</h4>
            <ul className="text-sm text-stone-600 space-y-2">
              <li>Fewer debates, faster decisions, less money wasted on wrong scale moves.</li>
              <li>Operational SLAs and documented onboarding — you can guarantee delivery to clients.</li>
              <li>Upgrade path: diagnostic audit → infra fix → white-label delivery.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}


// --- PAGE FUNCTION ---

export default function PricingPage() {
  const calendlyUrl = "https://cal.com/calyxra/15min";
  const [isCompareOpen, setIsCompareOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAFAF9] text-stone-900 font-sans selection:bg-emerald-200 selection:text-emerald-900">

      {/* NAVIGATION */}
      <Navbar />

      <main className="pt-32">
        {/* HERO SECTION */}
        <section className="px-6 pb-20 border-b border-stone-200 bg-[#FAFAF9] relative">
          <div className="max-w-5xl mx-auto text-center">
            <div className="flex justify-center gap-3 mb-8">
              <Badge text="White-Label" />
              <Badge text="For Agencies" variant="highlight" />
            </div>

            {/* Pain Point Hook */}
            <div className="mb-8 p-6 bg-stone-100 border border-stone-200 rounded-lg max-w-2xl mx-auto">
              <p className="text-lg md:text-xl font-medium text-stone-700 mb-2">
                "Shopify says <span className="text-emerald-700 font-bold">€50K</span>.
                GA4 says <span className="text-amber-600 font-bold">€47K</span>.
                Meta says <span className="text-blue-600 font-bold">€52K</span>."
              </p>
              <p className="text-stone-500 text-sm">Sound familiar? You're not alone.</p>
            </div>

            <h1 className="text-4xl md:text-6xl font-serif font-medium text-stone-900 mb-6 leading-[1.1]">
              Automated Client Reporting for Shopify Agencies.<br />
              <span className="italic text-emerald-700">We turn messy data into standard white-label dashboards.</span>
            </h1>
            <p className="text-xl text-stone-500 mb-4 max-w-2xl mx-auto leading-relaxed">
              We replace your manual spreadsheets with a standardized data warehouse. One source of truth for all your client stores.
            </p>
            <p className="text-lg text-stone-400 max-w-xl mx-auto mb-4">
              Fully automated. White-label safe. Deployed in 7 days.
            </p>
            <p className="text-base text-emerald-700 font-medium max-w-2xl mx-auto mb-8">
              Includes our signature "Truth Map" — instant reconciliation between Shopify, Ads, and GA4.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href={calendlyUrl} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-emerald-700 text-white font-bold text-sm uppercase tracking-widest hover:bg-emerald-800 transition-all shadow-lg">
                Book a 15-min Audit
              </a>
              <a href="/deliverables" className="px-8 py-4 bg-transparent border-2 border-stone-300 text-stone-900 font-bold text-sm uppercase tracking-widest hover:bg-stone-100 transition-all">
                View Infrastructure Outputs
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-stone-100 border border-stone-200 rounded-full text-xs font-medium text-stone-600">
                <svg className="w-3.5 h-3.5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                GDPR-ready
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-stone-100 border border-stone-200 rounded-full text-xs font-medium text-stone-600">
                <svg className="w-3.5 h-3.5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" /></svg>
                BigQuery + Looker/Power BI
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-stone-100 border border-stone-200 rounded-full text-xs font-medium text-stone-600">
                <svg className="w-3.5 h-3.5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                Data ownership
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-stone-100 border border-stone-200 rounded-full text-xs font-medium text-stone-600">
                <svg className="w-3.5 h-3.5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                7-day rollout
              </span>
            </div>
          </div>
        </section>

        {/* AUDIT OFFER SECTION - NEW */}
        <AuditOfferSection />

        {/* PROOF BLOCKS (added) */}
        <ProofSection />


        {/* CALYXRA VS ATTRIBUTION TOOLS (added) */}
        <CompareToolsSection />

        {/* PRICING SECTION */}
        <section className="py-24 px-6 bg-[#FAFAF9] border-b border-stone-200">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-medium text-stone-900 mb-4">Transparent Agency Pricing</h2>
              <div className="h-1 w-20 bg-emerald-700 mx-auto mb-4"></div>
              <p className="text-stone-500 max-w-2xl mx-auto text-lg">Predictable monthly fees. No % of ad spend. No hidden caps.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {/* Agency Pilot */}
              <PricingCard
                name="Agency Pilot"
                monthlyPrice="€990"
                setupPrice="€1,250"
                discountedSetupPrice="€625"
                bestFor="smaller agencies (1–2 stores) starting their data journey"
                features={[
                  "Up to 2 active client stores",
                  "Shopify + Meta + Google Data",
                  "Daily data refresh",
                  "Standard Support (Email)",
                  "Onboarding in 7 days"
                ]}
                goLive="5–7 business days"
              />

              {/* Agency Scale */}
              <PricingCard
                name="Agency Scale"
                monthlyPrice="€1,990"
                setupPrice="€2,990"
                discountedSetupPrice="€1,495"
                bestFor="agencies managing 3–5 client stores who need reliability + monitoring"
                features={[
                  "3–5 active client stores",
                  "Shopify + Meta + Google + TikTok + GA4",
                  "Daily refresh + data health monitoring",
                  "Priority support (Slack, business hours)",
                  "Faster onboarding (48h kickoff)"
                ]}
                goLive="7–10 business days"
                isPopular={true}
              />

              {/* Agency Pro */}
              <PricingCard
                name="Agency Pro"
                monthlyPrice="€3,490"
                setupPrice="€4,990"
                discountedSetupPrice="€2,495"
                bestFor="agencies scaling fast (6–10+ stores) with custom needs"
                features={[
                  "Up to 10 active client stores",
                  "All Scale features + advanced monitoring",
                  "GA4 + custom integrations (Klaviyo, CRM)",
                  "Custom KPI layer (your naming)",
                  "Dedicated delivery lane"
                ]}
                goLive="10–14 business days"
              />
            </div>

            <div className="mt-12 text-center">
              <a href="/pricing" className="text-stone-600 font-medium text-sm hover:text-emerald-700 transition-colors underline underline-offset-4">
                See full comparison & enterprise plans →
              </a>
            </div>
          </div>
        </section>

        {/* WHY NOT TRIPLE WHALE / SHOPIFY ANALYTICS */}
        <section className="py-16 px-6 bg-white border-b border-stone-200">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-1/3">
                <h2 className="text-xl font-serif font-medium text-stone-900 mb-2">Not another dashboard app.</h2>
                <div className="h-1 w-12 bg-emerald-700"></div>
              </div>
              <div className="md:w-2/3">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-stone-600">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-emerald-700"></span>
                    <span>Apps show metrics per store. Calyxra gives agencies a standard KPI layer that stays consistent across all clients.</span>
                  </li>
                  <li className="flex items-start gap-3 text-stone-600">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-emerald-700"></span>
                    <span>Automated pipelines + white-label reporting you can deliver under your brand.</span>
                  </li>
                  <li className="flex items-start gap-3 text-stone-600">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-emerald-700"></span>
                    <span>Your definitions, your formulas, your naming—not locked into someone else's schema.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FOUNDING PARTNER BANNER */}
        <section className="py-12 px-6 bg-gradient-to-r from-emerald-900 via-emerald-800 to-emerald-900">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full text-emerald-200 text-[10px] font-bold uppercase tracking-widest mb-4">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
              Founding Partner Program
            </div>
            <h2 className="text-2xl md:text-3xl font-serif font-medium text-white mb-4">
              Join as a Founding Partner: <span className="text-emerald-300">50% off setup</span>
            </h2>
            <p className="text-emerald-100/80 max-w-2xl mx-auto leading-relaxed mb-6">
              We're onboarding 3 founding agencies. Same monthly pricing, 50% off the one-time setup in exchange for a video testimonial after go-live.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm font-mono text-white/90 mb-4">
              <div><span className="line-through opacity-50">€1,250</span> → <span className="text-emerald-300 font-bold">€625</span> <span className="text-white/60">Pilot</span></div>
              <div><span className="line-through opacity-50">€2,990</span> → <span className="text-emerald-300 font-bold">€1,495</span> <span className="text-white/60">Scale</span></div>
              <div><span className="line-through opacity-50">€4,990</span> → <span className="text-emerald-300 font-bold">€2,495</span> <span className="text-white/60">Pro</span></div>
            </div>
            <p className="text-[11px] text-emerald-200/50 mb-6">
              Limited to 3 agencies. Must pass technical fit assessment.
            </p>
            <a href={calendlyUrl} target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 bg-white text-emerald-900 font-bold text-sm uppercase tracking-widest hover:bg-emerald-50 transition-all shadow-lg">
              Apply Now
            </a>
          </div>
        </section>

        {/* TECH STACK & INTEGRATIONS */}
        <section className="py-16 px-6 bg-white border-b border-stone-200">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-3">Built on enterprise infrastructure</p>
              <h3 className="text-xl font-serif font-medium text-stone-900">Integrations & Tech Stack</h3>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {/* Shopify - Shopping bag logo */}
              <div className="flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
                <div className="w-12 h-12 bg-stone-100 rounded-lg flex items-center justify-center">
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
                    <path d="M15.5 3.5L17 5.5L19.5 4L18 8L21 9.5L18.5 11L20 14.5L16.5 14L16 17.5L13.5 15L11 18L10 14.5L6 15.5L8 12L4.5 10L8 8.5L6.5 5L10.5 6.5L12 3L13.5 6.5L15.5 3.5Z" fill="#95BF47" />
                    <path d="M12 8C10.3431 8 9 9.34315 9 11C9 12.6569 10.3431 14 12 14C13.6569 14 15 12.6569 15 11C15 9.34315 13.6569 8 12 8Z" fill="#5E8E3E" />
                  </svg>
                </div>
                <span className="text-xs font-medium text-stone-500">Shopify</span>
              </div>

              {/* Google Ads - Official icon */}
              <div className="flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
                <div className="w-12 h-12 bg-stone-100 rounded-lg flex items-center justify-center">
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
                    <path d="M3.5 18.5L10 6.5L14 12L7.5 24L3.5 18.5Z" fill="#FBBC04" />
                    <path d="M20.5 18.5L14 6.5L10 12L16.5 24L20.5 18.5Z" fill="#4285F4" />
                    <circle cx="17" cy="18.5" r="3.5" fill="#34A853" />
                  </svg>
                </div>
                <span className="text-xs font-medium text-stone-500">Google Ads</span>
              </div>

              {/* Meta - Infinity logo */}
              <div className="flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
                <div className="w-12 h-12 bg-stone-100 rounded-lg flex items-center justify-center">
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
                    <path d="M6.5 12C6.5 9.5 8 7 10.5 7C13 7 14 9 15.5 12C17 15 18 17 20.5 17C23 17 24 14.5 24 12C24 9.5 23 7 20.5 7C18 7 17 9 15.5 12C14 15 13 17 10.5 17C8 17 6.5 14.5 6.5 12Z" fill="url(#meta-gradient)" />
                    <defs>
                      <linearGradient id="meta-gradient" x1="6.5" y1="12" x2="24" y2="12">
                        <stop stopColor="#0082FB" />
                        <stop offset="1" stopColor="#0064E0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <span className="text-xs font-medium text-stone-500">Meta Ads</span>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}