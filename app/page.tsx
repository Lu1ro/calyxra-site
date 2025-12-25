import Image from "next/image";

// Компонент для кроків процесу
function ProcessStep({ number, title, description, isLast }) {
  return (
    <div className="flex-1 relative group">
      <div className="flex items-center mb-6">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-black z-20 shadow-[0_0_20px_rgba(37,99,235,0.3)] group-hover:shadow-blue-500/50 transition-all duration-500 border border-white/10">
          {number}
        </div>
        {!isLast && (
          <div className="hidden md:block absolute top-6 left-12 w-full h-[1px] bg-gray-800 z-10">
            <div className="h-full bg-blue-500 w-0 group-hover:w-full transition-all duration-1000 ease-in-out shadow-[0_0_8px_#3b82f6]"></div>
          </div>
        )}
      </div>
      <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors duration-300 italic">
        {title}
      </h3>
      <p className="text-gray-400 text-sm leading-relaxed pr-4 font-medium">
        {description}
      </p>
    </div>
  );
}

export default function Home() {
  const calendlyUrl = "https://calendly.com/calyxra-team/30min";

  return (
    <div className="bg-[#050505] text-[#ededed] min-h-screen font-sans selection:bg-blue-500/30 selection:text-white overflow-x-hidden">
      
      {/* BACKGROUND EFFECTS */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-blue-900/10 blur-[120px] rounded-full"></div>
      </div>

      {/* 1. NAVIGATION */}
      <nav className="fixed w-full z-50 bg-black/60 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-black text-xs text-white">C</div>
            <div className="text-lg font-black tracking-tighter uppercase leading-none italic">CALYXRA</div>
          </div>
          <div className="hidden md:flex gap-10 text-[11px] uppercase tracking-[0.2em] text-gray-400 font-bold">
            <a href="#process" className="hover:text-blue-500 transition">Process</a>
            <a href="/dashboards" className="hover:text-blue-500 transition text-blue-400">Portfolio</a> 
            <a href="#pricing" className="hover:text-blue-500 transition">Pricing</a>
          </div>
          <a href={calendlyUrl} className="bg-white text-black hover:bg-blue-600 hover:text-white px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-wider transition-all shadow-xl active:scale-95">
            Book KPI Review
          </a>
        </div>
      </nav>

      <main className="relative z-10">
        {/* 2. HERO SECTION */}
        <section className="pt-44 pb-32 px-6 text-center italic">
          <div className="max-w-5xl mx-auto">
            <div className="inline-block px-4 py-1.5 mb-8 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-[10px] font-bold uppercase tracking-[0.2em] not-italic">
              Premium Shopify Analytics Solutions
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-8 text-white leading-[0.9]">
              Stop guessing. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-blue-700 font-black">Start deciding.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-14 leading-relaxed max-w-2xl mx-auto font-medium not-italic">
              We deliver interactive Power BI dashboard assets. Know your **real margin** after ads, logistics, and returns.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center not-italic">
              <a href={calendlyUrl} className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest transition-all shadow-[0_20px_40px_rgba(37,99,235,0.25)] hover:-translate-y-1">
                Start Free Audit
              </a>
              <a href="/dashboards" className="w-full sm:w-auto bg-white/5 border border-white/10 hover:bg-white/10 text-white px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest transition-all">
                View Portfolio
              </a>
            </div>
          </div>
        </section>

        {/* 3. INTEGRATIONS BAR */}
        <section className="py-12 px-6 border-y border-white/5 bg-white/[0.01]">
          <div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-12 opacity-30 grayscale hover:grayscale-0 transition-all duration-700 text-center">
            <span className="text-[10px] font-black tracking-[0.3em] w-full text-center mb-4 text-gray-600 uppercase">Native Integrations</span>
            <div className="text-xl font-black italic">Shopify</div>
            <div className="text-xl font-black italic">Meta Ads</div>
            <div className="text-xl font-black italic">Google Ads</div>
            <div className="text-xl font-black italic">GA4</div>
            <div className="text-xl font-black italic">Klaviyo</div>
          </div>
        </section>

        {/* 4. PROCESS STEPS */}
        <section id="process" className="py-32 px-6 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-16 md:gap-8">
            <ProcessStep 
              number="01"
              title="Data Modeling"
              description="Automated sync between Shopify and Ad platforms. No manual CSV files."
            />
            <ProcessStep 
              number="02"
              title="Profit Logic"
              description="Contribution margin calculated for every SKU, including shipping and COGS."
            />
            <ProcessStep 
              number="03"
              isLast={true}
              title="Scale Readiness"
              description="Live interactive dashboard asset for data-driven decision making."
            />
          </div>
        </section>

        {/* 5. FEATURED DASHBOARD PREVIEW */}
        <section id="dashboards" className="py-32 px-6 bg-[#0a0a0a]">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-black mb-12 uppercase tracking-widest italic text-white">Featured Deliverable</h2>
            <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl shadow-blue-900/10 group">
              <Image 
                src="/dashboard-preview.png" 
                alt="Shopify Profit Dashboard Preview" 
                width={1200} 
                height={675} 
                className="w-full h-auto group-hover:scale-[1.02] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                 <a href="/dashboards" className="bg-white text-black px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs shadow-2xl hover:scale-105 transition">
                   Explore Full Portfolio
                 </a>
              </div>
            </div>
          </div>
        </section>

        {/* 6. METRICS GRID */}
        <section id="metrics" className="py-24 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-16 italic">
            <h2 className="text-3xl font-black text-white mb-4 uppercase tracking-widest">The KPIs we Solve</h2>
            <p className="text-gray-500 font-medium not-italic">Mission-critical metrics in every dashboard asset.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Net Profit", desc: "Real money in the bank" },
              { label: "Blended CAC", desc: "Total acquisition cost" },
              { label: "LTV", desc: "Customer lifetime value" },
              { label: "MER", desc: "Marketing efficiency ratio" }
            ].map((m, i) => (
              <div key={i} className="p-10 rounded-[2rem] bg-white/[0.02] border border-white/5 text-center group hover:border-blue-500/50 transition duration-500">
                <div className="text-blue-500 font-black text-3xl mb-3 group-hover:scale-110 transition-transform italic">{m.label}</div>
                <div className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-bold">{m.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* 7. PRICING SECTION - ВИПРАВЛЕНО */}
        <section id="pricing" className="py-32 px-6 bg-white/[0.01] border-t border-white/5">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-black mb-20 text-center uppercase tracking-[0.2em] text-white italic">The Investment</h2>
            <div className="grid md:grid-cols-2 gap-8 items-stretch">
              
              {/* STARTER CARD */}
              <div className="p-12 rounded-[2.5rem] bg-black border border-white/5 flex flex-col hover:border-white/10 transition duration-500">
                <div className="mb-10">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500">Starter Asset</span>
                  <div className="text-5xl font-black mt-4 text-white italic">€699</div>
                </div>
                <div className="space-y-6 text-sm text-gray-400 mb-12 flex-grow font-medium italic">
                  <p className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span> 1 Executive Dashboard Asset</p>
                  <p className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span> Shopify Connector Setup</p>
                  <p className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span> 7-Day Digital Delivery</p>
                </div>
                <a href={calendlyUrl} className="w-full py-5 rounded-2xl border border-white/20 text-white font-black text-[10px] uppercase tracking-widest text-center hover:bg-white hover:text-black transition-all">Get Setup</a>
              </div>

              {/* GROWTH CARD */}
              <div className="p-12 rounded-[2.5rem] bg-blue-600 shadow-[0_0_80px_rgba(37,99,235,0.25)] flex flex-col relative overflow-hidden group">
                <div className="absolute top-0 right-0 bg-white text-blue-600 px-8 py-2 text-[10px] font-black uppercase tracking-widest rounded-bl-3xl shadow-2xl">Growth Focus</div>
                <div className="mb-10 relative z-10">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/70">Full Analytics Suite</span>
                  <div className="text-5xl font-black mt-4 text-white italic">€2,400</div>
                </div>
                <div className="space-y-6 text-sm text-white mb-12 flex-grow relative z-10 font-bold italic">
                  <p className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-white"></span> 3–4 Dashboard Assets</p>
                  <p className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-white"></span> Marketing & Cohort Modeling</p>
                  <p className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-white"></span> Priority Implementation</p>
                </div>
                <a href={calendlyUrl} className="w-full py-5 rounded-2xl bg-black text-white font-black text-[10px] uppercase tracking-widest text-center hover:scale-[1.02] transition-all shadow-2xl relative z-10">Scale Brand Now</a>
              </div>

            </div>
          </div>
        </section>

        {/* 8. FAQ SECTION */}
        <section className="py-32 px-6 max-w-4xl mx-auto">
          <h2 className="text-3xl font-black mb-16 text-center text-white uppercase tracking-widest italic">FAQ</h2>
          <div className="space-y-12">
            {[
              { q: "Is my data secure?", a: "Official API connections only. Your raw data flows directly to your private Power BI." },
              { q: "What is the delivery format?", a: "You receive a digital software asset (PBIX file) or a cloud-access link." },
              { q: "Do you offer refunds?", a: "Due to the custom digital nature, no refunds are available once setup begins." }
            ].map((faq, i) => (
              <div key={i} className="border-b border-white/5 pb-8">
                <h3 className="text-blue-400 font-bold mb-3 text-lg">{faq.q}</h3>
                <p className="text-gray-400 text-sm leading-relaxed font-medium">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 9. FINAL CALL TO ACTION */}
        <section className="py-32 px-6">
          <div className="max-w-5xl mx-auto p-20 rounded-[4rem] bg-gradient-to-br from-blue-600 to-blue-900 text-center relative overflow-hidden shadow-[0_40px_100px_rgba(37,99,235,0.3)] group italic">
            <h2 className="text-5xl md:text-7xl font-black text-white mb-8 relative z-10 leading-[0.9]">Ready to scale?</h2>
            <p className="text-white/70 mb-12 text-lg max-w-xl mx-auto relative z-10 font-medium not-italic">Let&apos;s build your single source of truth and fix your profit leakage.</p>
            <a href={calendlyUrl} className="relative z-10 inline-block bg-white text-blue-600 px-16 py-6 rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] hover:scale-110 transition shadow-2xl not-italic">
              Book Your Free Audit
            </a>
          </div>
        </section>
      </main>

      {/* 10. FOOTER - PADDLE COMPLIANCE */}
      <footer className="py-24 bg-black border-t border-white/5 px-6 relative z-10 text-center md:text-left">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 border-b border-white/5 pb-16 mb-12">
            <div>
              <div className="text-2xl font-black uppercase tracking-tighter mb-4 text-white italic">CALYXRA</div>
              <p className="text-gray-600 text-[10px] uppercase tracking-[0.3em] font-bold">Premium BI Solutions for Shopify</p>
            </div>
            <div className="flex flex-col items-center md:items-end gap-4">
              <span className="text-[10px] text-gray-700 uppercase tracking-widest font-black italic">Technical Support</span>
              <a href="mailto:admin@calyxra.com" className="text-blue-500 font-bold hover:text-white transition italic">admin@calyxra.com</a>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="text-[9px] text-gray-800 uppercase tracking-[0.4em] font-black max-w-lg leading-relaxed">
              Payments processed by Paddle. Service provided by Sole Trader Kononchuk Oleksandr Yaroslavovych.
            </div>
            <div className="flex gap-10 text-[9px] text-gray-500 uppercase tracking-[0.3em] font-bold">
              <a href="/terms" className="hover:text-blue-500 transition">Terms</a>
              <a href="/privacy" className="hover:text-blue-500 transition">Privacy</a>
              <a href="/refunds" className="hover:text-blue-500 transition">Refunds</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}