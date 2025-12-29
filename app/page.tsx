'use client';

// --- ДОПОМІЖНІ КОМПОНЕНТИ ---

function Badge({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-full bg-stone-200/50 border border-stone-300 text-stone-600 text-[10px] font-bold tracking-widest uppercase">
      {text}
    </span>
  );
}

function SectionHeading({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="mb-12">
      <h2 className="text-3xl md:text-4xl font-serif font-medium text-stone-900 mb-4">{title}</h2>
      <div className="h-1 w-20 bg-emerald-700 mb-4"></div>
      <p className="text-stone-500 max-w-xl text-lg leading-relaxed">{subtitle}</p>
    </div>
  );
}

function ProcessCard({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="relative p-8 bg-white border border-stone-200 shadow-sm hover:shadow-lg hover:border-emerald-600/30 transition-all duration-300 group">
      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
        <span className="text-6xl font-serif text-emerald-100 font-bold">{number}</span>
      </div>
      <div className="text-emerald-700 text-xs font-bold tracking-widest uppercase mb-4">Step {number}</div>
      <h3 className="text-xl font-bold text-stone-900 mb-3 font-serif">{title}</h3>
      <p className="text-stone-500 leading-relaxed text-sm">{description}</p>
    </div>
  );
}

function PricingTier({ name, price, setup, features, isRecommended }: { name: string; price: string; setup: string; features: string[]; isRecommended?: boolean }) {
  return (
    <div className={`relative flex flex-col p-8 ${isRecommended ? 'bg-stone-900 text-white' : 'bg-white text-stone-900 border border-stone-200'} shadow-xl transition-transform duration-300 hover:-translate-y-1`}>
      {isRecommended && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-emerald-600 text-white px-4 py-1 text-[10px] font-bold uppercase tracking-widest shadow-md">
          Agency Standard
        </div>
      )}
      <div className="mb-8 border-b border-current pb-8 opacity-90">
        <h3 className={`text-sm font-bold tracking-widest uppercase mb-2 ${isRecommended ? 'text-emerald-400' : 'text-stone-500'}`}>{name}</h3>
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-serif font-medium">{price}</span>
          <span className="text-xs opacity-60">/mo</span>
        </div>
        <div className="mt-2 text-xs font-mono opacity-70">+ {setup} setup fee</div>
      </div>
      
      <ul className="space-y-4 mb-8 flex-grow">
        {features.map((feat, i) => (
          <li key={i} className="flex items-start gap-3 text-sm opacity-80">
            <span className={`mt-1 w-1.5 h-1.5 rounded-full ${isRecommended ? 'bg-emerald-400' : 'bg-emerald-700'}`}></span>
            {feat}
          </li>
        ))}
      </ul>

      <a href="https://calendly.com/calyxra-team/30min" className={`w-full py-4 text-xs font-bold tracking-widest uppercase text-center transition-colors ${isRecommended ? 'bg-white text-black hover:bg-emerald-50' : 'bg-stone-900 text-white hover:bg-stone-800'}`}>
        Start Implementation
      </a>
    </div>
  );
}

// --- ГОЛОВНА СТОРІНКА ---

export default function Home() {
  const calendlyUrl = "https://calendly.com/calyxra-team/30min";

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
            <a href="#methodology" className="hover:text-stone-900 transition-colors">Methodology</a>
            <a href="/dashboards" className="hover:text-stone-900 transition-colors">Assets</a>
            <a href="#investment" className="hover:text-stone-900 transition-colors">Investment</a>
          </div>

          <a href={calendlyUrl} className="px-6 py-3 bg-emerald-700 text-white text-xs font-bold uppercase tracking-wide hover:bg-emerald-800 transition-all hover:shadow-lg hover:shadow-emerald-700/30 active:scale-95">
            Book Audit
          </a>
        </div>
      </nav>

      <main className="pt-32">
        {/* HERO SECTION */}
        <section className="px-6 pb-24 border-b border-stone-200">
          <div className="max-w-5xl mx-auto text-center">
            <div className="flex justify-center gap-3 mb-8">
              <Badge text="For Agencies" />
              <Badge text="White-Label" />
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-medium text-stone-900 mb-8 leading-[1.1]">
              The infrastructure behind <br />
              <span className="italic text-emerald-700">profitable</span> agencies.
            </h1>
            <p className="text-xl text-stone-500 mb-12 max-w-2xl mx-auto leading-relaxed">
              We replace manual spreadsheets with automated data warehouses. Deliver client-ready financial reporting under your own brand.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href={calendlyUrl} className="px-10 py-5 bg-stone-900 text-white font-bold text-sm tracking-widest uppercase hover:bg-stone-800 transition-all shadow-xl">
                Audit Your Reporting
              </a>
              <a href="/dashboards" className="px-10 py-5 bg-white border border-stone-200 text-stone-900 font-bold text-sm tracking-widest uppercase hover:bg-stone-50 transition-all">
                View Sample Reports
              </a>
            </div>

            {/* HERO VISUAL - CLICKABLE */}
            <div className="mt-20 max-w-5xl mx-auto relative group z-10">
               <a href="/dashboards" className="block relative cursor-pointer">
                  <div className="aspect-[16/9] bg-stone-100 rounded-lg overflow-hidden border border-stone-200 shadow-2xl transition-all duration-500 group-hover:shadow-[0_25px_60px_-15px_rgba(6,78,59,0.15)] group-hover:scale-[1.01] relative">
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:32px_32px] z-0"></div>
                      <img 
                        src="/asset-executive-v3.png" 
                        alt="Executive Dashboard Preview" 
                        className="relative z-10 w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-emerald-900/10 backdrop-blur-[2px]">
                          <div className="bg-white text-emerald-900 px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-2 border border-emerald-100">
                             <span>Explore Asset Library</span>
                             <span className="text-emerald-600">→</span>
                          </div>
                      </div>
                  </div>
               </a>
               <div className="absolute -inset-4 bg-gradient-to-b from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 blur-3xl -z-10 transition-opacity duration-700 pointer-events-none" />
            </div>
          </div>
        </section>

        {/* METRICS STRIP */}
        <section className="border-b border-stone-200 bg-white">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-stone-100">
            {[
              { label: "Data Accuracy", val: "100%" },
              { label: "Implementation", val: "7 Days" },
              { label: "Manual Work", val: "0 Hrs" },
              { label: "Client Trust", val: "Max" },
            ].map((stat, i) => (
              <div key={i} className="p-10 text-center">
                <div className="text-3xl font-serif font-medium text-stone-900 mb-1">{stat.val}</div>
                <div className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* VALUE PROPOSITION */}
        <section className="py-24 px-6 bg-[#FAFAF9]">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
            <div>
              <SectionHeading 
                title="Your agency is leaking time." 
                subtitle="Every hour your Account Managers spend copying numbers into Excel is an hour they aren't selling strategy. We fix the operational bottleneck."
              />
              <ul className="space-y-6">
                 {[
                    "Eliminate 'Why don't these numbers match?' emails.",
                    "Automate Gross Profit calculation (Revenue - COGS - Ads - Ship).",
                    "Standardize reporting across all 20+ clients."
                 ].map((item, i) => (
                    <li key={i} className="flex gap-4 items-start">
                       <div className="mt-1.5 w-2 h-2 bg-emerald-700"></div>
                       <p className="text-stone-700 font-medium">{item}</p>
                    </li>
                 ))}
              </ul>
            </div>
            <div className="bg-white p-8 border border-stone-200 shadow-xl rotate-1">
               <div className="border-b border-stone-100 pb-4 mb-4 flex justify-between items-center">
                  <span className="text-xs font-bold text-stone-400 uppercase">Comparison</span>
                  <span className="text-xs font-bold text-emerald-700 uppercase">Savings</span>
               </div>
               <div className="space-y-6">
                  <div>
                     <div className="flex justify-between text-sm font-medium mb-2">
                        <span>Manual Reporting</span>
                        <span className="text-red-500">40 hrs/mo</span>
                     </div>
                     <div className="w-full bg-stone-100 h-2 rounded-full overflow-hidden">
                        <div className="bg-red-400 h-full w-3/4"></div>
                     </div>
                  </div>
                  <div>
                     <div className="flex justify-between text-sm font-medium mb-2">
                        <span>Calyxra Infrastructure</span>
                        <span className="text-emerald-700">0 hrs/mo</span>
                     </div>
                     <div className="w-full bg-stone-100 h-2 rounded-full overflow-hidden">
                        <div className="bg-emerald-600 h-full w-[2%]"></div>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* PROCESS STEPS */}
        <section id="methodology" className="py-24 px-6 border-y border-stone-200 bg-white">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
               title="Deployment Methodology" 
               subtitle="We integrate as your invisible technical department. No disruption to your current workflow." 
            />
            <div className="grid md:grid-cols-3 gap-8">
              <ProcessCard 
                number="01" 
                title="Data Hygiene Audit" 
                description="We inspect your clients' Shopify and Ad Account settings. We fix UTM tracking errors and map out cost structures before writing a single line of code." 
              />
              <ProcessCard 
                number="02" 
                title="Warehouse Construction" 
                description="We spin up a Google BigQuery instance. This is the 'Source of Truth' where raw data is cleaned, currency-converted, and prepared for analysis." 
              />
              <ProcessCard 
                number="03" 
                title="White-Label Handoff" 
                description="We deploy the Power BI assets to your workspace. Your clients see a branded portal. You get the credit. We maintain the pipelines." 
              />
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section id="investment" className="py-24 px-6 bg-[#FAFAF9]">
          <div className="max-w-5xl mx-auto">
             <div className="text-center mb-16">
                <h2 className="text-3xl font-serif font-medium text-stone-900 mb-4">Partnership Investment</h2>
                <p className="text-stone-500">Transparent pricing for scalable infrastructure.</p>
             </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <PricingTier 
                name="Agency Pilot" 
                price="€900" 
                setup="€1,500" 
                features={[
                  "1 Active Client Store",
                  "Shopify + 1 Ad Platform",
                  "Daily Automated Refresh",
                  "Standard P&L Dashboard",
                  "Email Support"
                ]} 
              />
              <PricingTier 
                isRecommended={true}
                name="Agency Scale" 
                price="€1,500" 
                setup="€3,000" 
                features={[
                  "Up to 3 Active Client Stores",
                  "Shopify + Meta + Google + TikTok",
                  "Data Health Monitoring System",
                  "Priority Slack Channel",
                  "Expedited Onboarding (48h)"
                ]} 
              />
            </div>
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
              {"©"} 2025 Calyxra Data Systems.
           </div>
        </footer>
      </main>
    </div>
  );
}