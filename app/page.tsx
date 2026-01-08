'use client';

import { useState } from 'react';

// --- HELPER COMPONENTS ---

function Badge({ text, variant = 'default' }: { text: string; variant?: 'default' | 'highlight' }) {
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase ${variant === 'highlight'
      ? 'bg-emerald-100 border border-emerald-300 text-emerald-700'
      : 'bg-stone-200/50 border border-stone-300 text-stone-600'
      }`}>
      {text}
    </span>
  );
}

function SectionHeading({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-serif font-medium text-stone-900 mb-4">{title}</h2>
      <div className="h-1 w-20 bg-emerald-700 mx-auto mb-4"></div>
      <p className="text-stone-500 max-w-2xl mx-auto text-lg leading-relaxed">{subtitle}</p>
    </div>
  );
}

function PricingCard({
  name,
  monthlyPrice,
  setupPrice,
  discountedSetupPrice,
  bestFor,
  features,
  goLive,
  isPopular = false
}: {
  name: string;
  monthlyPrice: string;
  setupPrice: string;
  discountedSetupPrice: string;
  bestFor: string;
  features: string[];
  goLive: string;
  isPopular?: boolean;
}) {
  return (
    <div className={`relative flex flex-col p-8 ${isPopular
      ? 'bg-stone-900 text-white ring-2 ring-emerald-500 shadow-2xl shadow-emerald-500/10'
      : 'bg-white text-stone-900 border border-stone-200'
      } shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl`}>
      {isPopular && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-emerald-600 text-white px-4 py-1 text-[10px] font-bold uppercase tracking-widest shadow-md">
          Most Popular
        </div>
      )}

      <div className="mb-6">
        <h3 className={`text-sm font-bold tracking-widest uppercase mb-2 ${isPopular ? 'text-emerald-400' : 'text-stone-500'}`}>{name}</h3>
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-serif font-medium">{monthlyPrice}</span>
          <span className="text-xs opacity-60">/month</span>
        </div>
        <div className="mt-2 text-xs font-mono">
          <span className="opacity-50 line-through">{setupPrice}</span>
          <span className={`ml-2 font-bold ${isPopular ? 'text-emerald-400' : 'text-emerald-700'}`}>{discountedSetupPrice}</span>
          <span className="opacity-70 ml-1">one-time</span>
        </div>
      </div>

      {/* Technical Fit Guarantee */}
      <div className={`text-[11px] mb-6 py-3 px-4 border-l-2 ${isPopular
        ? 'border-emerald-400 bg-white/5 text-white/80'
        : 'border-emerald-700 bg-emerald-50 text-stone-600'}`}>
        <span className="font-semibold">Technical Fit Guarantee:</span> if we can't connect your stack, you don't pay the setup fee.
      </div>

      <p className={`text-sm mb-6 pb-6 border-b ${isPopular ? 'border-white/20 text-white/70' : 'border-stone-200 text-stone-500'}`}>
        <span className="font-semibold">Best for:</span> {bestFor}
      </p>

      <ul className="space-y-4 mb-8 flex-grow">
        {features.map((feat, i) => (
          <li key={i} className="flex items-start gap-3 text-sm opacity-90">
            <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${isPopular ? 'bg-emerald-400' : 'bg-emerald-700'}`}></span>
            <span>{feat}</span>
          </li>
        ))}
      </ul>

      <div className={`text-xs font-medium mb-6 ${isPopular ? 'text-emerald-400' : 'text-emerald-700'}`}>
        Typical go-live: {goLive}
      </div>

      <a
        href="https://cal.com/calyxra/30min"
        className={`w-full py-4 text-xs font-bold tracking-widest uppercase text-center transition-all duration-300 ${isPopular
          ? 'bg-emerald-600 text-white hover:bg-emerald-500 shadow-lg shadow-emerald-600/30'
          : 'bg-stone-900 text-white hover:bg-stone-800'
          }`}
      >
        Start Implementation
      </a>
    </div>
  );
}

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

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-stone-200 last:border-b-0">
      <button
        className="w-full py-6 flex justify-between items-center text-left group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium text-stone-900 group-hover:text-emerald-700 transition-colors pr-4">{question}</span>
        <svg
          className={`w-5 h-5 text-stone-400 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-40 pb-6' : 'max-h-0'}`}>
        <p className="text-stone-500 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

function CompareModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;

  const compareData = [
    { feature: 'Stores', pilot: 'Up to 2', scale: 'Up to 5', pro: 'Up to 10' },
    { feature: 'Ad Platforms', pilot: '2 platforms', scale: 'Meta + Google + TikTok', pro: 'All platforms' },
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

// --- MAIN PAGE ---

export default function PricingPage() {
  const calendlyUrl = "https://cal.com/calyxra/30min";
  const [isCompareOpen, setIsCompareOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAFAF9] text-stone-900 font-sans selection:bg-emerald-200 selection:text-emerald-900 overflow-x-hidden">

      {/* NAVIGATION */}
      <nav className="fixed w-full z-50 bg-[#FAFAF9]/90 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="/" className="flex items-center gap-4 group cursor-pointer">
            <div className="relative">
              <img
                src="/logo.png"
                alt="Calyxra Logo"
                className="h-12 w-auto object-contain transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute -inset-2 bg-emerald-500/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="text-2xl font-serif font-bold tracking-tight text-stone-900 flex items-center">
              Calyxra<span className="text-emerald-700">.</span>
            </div>
          </a>

          <div className="hidden md:flex gap-8 text-xs font-bold text-stone-500 uppercase tracking-widest">
            <a href="/#methodology" className="hover:text-stone-900 transition-colors">Methodology</a>
            <a href="/dashboards" className="hover:text-stone-900 transition-colors">Assets</a>
            <a href="/pricing" className="text-emerald-700">Investment</a>
          </div>

          <a href={calendlyUrl} className="px-6 py-3 bg-emerald-700 text-white text-xs font-bold uppercase tracking-wide hover:bg-emerald-800 transition-all hover:shadow-lg hover:shadow-emerald-700/30 active:scale-95">
            Book Audit
          </a>
        </div>
      </nav>

      <main className="pt-32">
        {/* HERO SECTION */}
        <section className="px-6 pb-20 border-b border-stone-200">
          <div className="max-w-5xl mx-auto text-center">
            <div className="flex justify-center gap-3 mb-8">
              <Badge text="White-Label" />
              <Badge text="For Agencies" variant="highlight" />
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-medium text-stone-900 mb-6 leading-[1.1]">
              Data infrastructure that<br />
              <span className="italic text-emerald-700">scales with you.</span>
            </h1>
            <p className="text-xl text-stone-500 mb-4 max-w-2xl mx-auto leading-relaxed">
              White-label KPI dashboards + automated data pipelines for performance marketing agencies.
            </p>
            <p className="text-lg text-stone-400 max-w-xl mx-auto">
              Built for Shopify + paid media teams. Clean data, one KPI layer, zero reporting chaos.
            </p>
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
                    <span>Apps show metrics <strong>per store</strong>. Calyxra gives agencies a <strong>standard KPI layer</strong> that stays consistent across all clients.</span>
                  </li>
                  <li className="flex items-start gap-3 text-stone-600">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-emerald-700"></span>
                    <span><strong>Automated pipelines</strong> + white-label reporting you can deliver under your brand.</span>
                  </li>
                  <li className="flex items-start gap-3 text-stone-600">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-emerald-700"></span>
                    <span>Your definitions, your formulas, your naming—<strong>not locked into someone else's schema</strong>.</span>
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
              3 Slots Remaining
            </div>
            <h2 className="text-2xl md:text-3xl font-serif font-medium text-white mb-4">
              Founding Partner: <span className="text-emerald-300">50% off setup</span>
            </h2>
            <p className="text-emerald-100/80 max-w-2xl mx-auto leading-relaxed mb-6">
              We're onboarding 3 agencies this month. Same monthly pricing, 50% off the one-time setup in exchange for a short testimonial after go-live.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm font-mono text-white/90 mb-4">
              <div><span className="line-through opacity-50">€1,250</span> → <span className="text-emerald-300 font-bold">€625</span> <span className="text-white/60">Pilot</span></div>
              <div><span className="line-through opacity-50">€2,990</span> → <span className="text-emerald-300 font-bold">€1,495</span> <span className="text-white/60">Scale</span></div>
              <div><span className="line-through opacity-50">€4,990</span> → <span className="text-emerald-300 font-bold">€2,495</span> <span className="text-white/60">Pro</span></div>
            </div>
            <p className="text-[11px] text-emerald-200/50">
              Ends when 3 slots are filled. Subject to technical fit.
            </p>
          </div>
        </section>

        {/* PRICING CARDS */}
        <section className="py-24 px-6 bg-[#FAFAF9]">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Agency Pilot */}
              <PricingCard
                name="Agency Pilot"
                monthlyPrice="€790"
                setupPrice="€1,250"
                discountedSetupPrice="€625"
                bestFor="agencies onboarding their first 1–2 client stores into a standard reporting system"
                features={[
                  "Up to 2 active client stores",
                  "Shopify + up to 2 ad platforms (Meta / Google / TikTok / Microsoft)",
                  "Daily automated refresh",
                  "Standard KPI layer: MER, ROAS, CAC, AOV, cohorts, LTV, profit",
                  "Core dashboards: Executive + Marketing + Profit/P&L",
                  "Support: Email (48h)"
                ]}
                goLive="5–7 business days"
              />

              {/* Agency Scale */}
              <PricingCard
                name="Agency Scale"
                monthlyPrice="€1,990"
                setupPrice="€2,990"
                discountedSetupPrice="€1,495"
                bestFor="agencies with multiple clients who need reliability + monitoring"
                features={[
                  "Up to 5 active client stores",
                  "Shopify + Meta + Google + TikTok",
                  "Daily refresh + data health monitoring & alerts",
                  "Tracking & data QA checks (pipeline + event consistency)",
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
                bestFor="agencies scaling fast (6–10+ stores) that want a real 'ops layer'"
                features={[
                  "Up to 10 active client stores",
                  "All Scale features + advanced monitoring",
                  "Client-ready weekly snapshot reports (auto-generated)",
                  "Custom KPI layer (your naming + your definitions)",
                  "Dedicated delivery lane (faster changes, tighter SLA)",
                  "Optional: multi-brand / multi-country support"
                ]}
                goLive="10–14 business days"
              />
            </div>

            {/* Compare Plans + Enterprise */}
            <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-6">
              <button
                onClick={() => setIsCompareOpen(true)}
                className="text-stone-600 font-medium text-sm hover:text-emerald-700 transition-colors underline underline-offset-4"
              >
                Compare plans →
              </button>
              <span className="hidden sm:inline text-stone-300">|</span>
              <p className="text-stone-500">
                Need more than 10 stores? <a href={calendlyUrl} className="text-emerald-700 font-semibold hover:underline">Enterprise pricing available →</a>
              </p>
            </div>
          </div>
        </section>

        {/* WHAT YOU NEED FROM US / FROM YOU */}
        <section className="py-24 px-6 bg-white border-y border-stone-200">
          <div className="max-w-5xl mx-auto">
            <SectionHeading
              title="Ready to go live fast?"
              subtitle="Here's what we need from each other to get your dashboards running."
            />

            <div className="grid md:grid-cols-2 gap-12">
              {/* What we need from you */}
              <div className="bg-stone-50 p-8 border border-stone-200">
                <h3 className="text-lg font-serif font-medium text-stone-900 mb-6 flex items-center gap-3">
                  <svg className="w-6 h-6 text-stone-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  What we need from you
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-stone-600">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-stone-400"></span>
                    <span>Shopify collaborator access</span>
                  </li>
                  <li className="flex items-start gap-3 text-stone-600">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-stone-400"></span>
                    <span>Ad platform access (Meta/Google/TikTok)</span>
                  </li>
                  <li className="flex items-start gap-3 text-stone-600">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-stone-400"></span>
                    <span>Your KPI definitions (or we provide a standard set)</span>
                  </li>
                  <li className="flex items-start gap-3 text-stone-600">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-stone-400"></span>
                    <span>30 minutes for kickoff + 30 minutes for handoff</span>
                  </li>
                </ul>
              </div>

              {/* What you get */}
              <div className="bg-emerald-50 p-8 border border-emerald-200">
                <h3 className="text-lg font-serif font-medium text-stone-900 mb-6 flex items-center gap-3">
                  <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  What you get
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-stone-700">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-emerald-600"></span>
                    <span>Clean KPI layer + dashboards</span>
                  </li>
                  <li className="flex items-start gap-3 text-stone-700">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-emerald-600"></span>
                    <span>Daily refresh</span>
                  </li>
                  <li className="flex items-start gap-3 text-stone-700">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-emerald-600"></span>
                    <span>Documentation + KPI dictionary</span>
                  </li>
                  <li className="flex items-start gap-3 text-stone-700">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-emerald-600"></span>
                    <span>Optional monitoring & alerts (Scale/Pro)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ADD-ONS */}
        <section className="py-24 px-6 bg-[#FAFAF9]">
          <div className="max-w-4xl mx-auto">
            <SectionHeading
              title="Add-ons"
              subtitle="Expand your infrastructure with optional modules as you scale."
            />

            <div className="space-y-4">
              <AddOnCard
                name="Additional store"
                price="+€350/month each"
              />
              <AddOnCard
                name="Additional data source/integration"
                price="from €150/month"
                description="GA4, Klaviyo, CRM, etc."
              />
              <AddOnCard
                name="Extra dashboard/report pack"
                price="from €250 one-time"
              />
              <AddOnCard
                name="Weekly optimization call / analyst support"
                price="from €400/month"
              />
              <AddOnCard
                name="Server-side tracking / conversion API assistance"
                price="from €600 one-time"
              />
            </div>
          </div>
        </section>

        {/* SETUP FEE EXPLANATION */}
        <section className="py-24 px-6 bg-white border-y border-stone-200">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-3xl font-serif font-medium text-stone-900 mb-4">What the setup fee covers</h2>
                <div className="h-1 w-20 bg-emerald-700 mb-4"></div>
                <p className="text-stone-500 leading-relaxed">
                  Setup is a one-time investment in building your custom data infrastructure. Here's exactly what we deliver—so it feels fair.
                </p>
              </div>

              <div className="bg-stone-50 p-8 border border-stone-200 shadow-lg">
                <ul className="space-y-4">
                  <SetupItem text="KPI definitions + mapping (your KPI names, your formulas)" />
                  <SetupItem text="Data model + pipeline build (Shopify + ad platforms)" />
                  <SetupItem text="Historical backfill (where possible)" />
                  <SetupItem text="Dashboard build + QA (numbers match, logic verified)" />
                  <SetupItem text="Documentation + handover (so your team can use it confidently)" />
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 px-6 bg-[#FAFAF9]">
          <div className="max-w-3xl mx-auto">
            <SectionHeading
              title="Frequently Asked Questions"
              subtitle="Quick answers to common questions about working with us."
            />

            <div className="bg-white border border-stone-200 px-8">
              <FAQItem
                question="Do you run ads?"
                answer="No — we focus on data + reporting infrastructure (white-label). Your team runs campaigns."
              />
              <FAQItem
                question="Will numbers match platforms exactly?"
                answer="We standardize rules and document assumptions. If tracking is correct, your reporting becomes consistent and explainable."
              />
              <FAQItem
                question="Is BigQuery/warehouse cost included?"
                answer="Small usage is typically included; large clients may have pass-through costs (we'll tell you upfront)."
              />
              <FAQItem
                question="Can we white-label this?"
                answer="Yes — your branding, your KPI names, your client delivery."
              />
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-24 px-6 bg-stone-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-white mb-6">
              Ready to eliminate reporting chaos?
            </h2>
            <p className="text-stone-400 text-lg mb-10 max-w-xl mx-auto">
              Book a 15-minute KPI audit to see how we can systematize your agency's reporting.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
              <a
                href={calendlyUrl}
                className="px-10 py-5 bg-emerald-600 text-white font-bold text-sm tracking-widest uppercase hover:bg-emerald-500 transition-all shadow-xl shadow-emerald-600/30"
              >
                Book a 15-min KPI Audit
              </a>
              <a
                href={calendlyUrl}
                className="px-10 py-5 bg-transparent border border-white/20 text-white font-bold text-sm tracking-widest uppercase hover:bg-white/10 transition-all"
              >
                Get a Demo
              </a>
            </div>
            <a
              href="mailto:admin@calyxra.com?subject=Pricing%20Request"
              className="text-stone-500 text-sm hover:text-stone-300 transition-colors"
            >
              Prefer email? Request pricing →
            </a>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="py-16 px-6 bg-white border-t border-stone-200">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <div className="text-xl font-serif font-bold text-stone-900 mb-2">Calyxra.</div>
              <p className="text-xs text-stone-400 font-medium max-w-xs leading-relaxed">
                Premium reporting infrastructure for high-performance agencies. Built by analysts, not marketers.
              </p>
            </div>
            <div className="flex flex-wrap gap-8 text-[10px] font-bold text-stone-500 uppercase tracking-widest justify-center md:justify-end">
              <a href="/terms" className="hover:text-stone-900 transition-colors">Terms of Service</a>
              <a href="/privacy" className="hover:text-stone-900 transition-colors">Privacy Policy</a>
              <a href="/refunds" className="hover:text-stone-900 transition-colors">Refund Policy</a>
              <a href="mailto:admin@calyxra.com" className="hover:text-stone-900 transition-colors">Contact Support</a>
            </div>
          </div>
          <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-stone-100 text-center text-[10px] text-stone-300 uppercase tracking-widest">
            © 2025 Calyxra Data Systems.
          </div>
        </footer>
      </main>

      {/* Compare Plans Modal */}
      <CompareModal isOpen={isCompareOpen} onClose={() => setIsCompareOpen(false)} />
    </div>
  );
}