import Image from "next/image";

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
      <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors duration-300">
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

      {/* NAVIGATION - ЗВ'ЯЗОК З ПОРТФОЛІО */}
      <nav className="fixed w-full z-50 bg-black/60 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-black text-xs text-white">C</div>
            <div className="text-lg font-black tracking-tighter uppercase leading-none">CALYXRA</div>
          </div>
          <div className="hidden md:flex gap-10 text-[11px] uppercase tracking-[0.2em] text-gray-400 font-bold">
            <a href="#process" className="hover:text-blue-500 transition">Process</a>
            {/* ПОСИЛАННЯ НА НОВУ СТОРІНКУ */}
            <a href="/dashboards" className="hover:text-blue-500 transition">Portfolio</a> 
            <a href="#pricing" className="hover:text-blue-500 transition">Pricing</a>
          </div>
          <a href={calendlyUrl} className="bg-white text-black hover:bg-blue-600 hover:text-white px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-wider transition-all shadow-xl active:scale-95">
            Book KPI Review
          </a>
        </div>
      </nav>

      <main className="relative z-10">
        {/* HERO SECTION */}
        <section className="pt-44 pb-32 px-6 text-center">
          <div className="max-w-5xl mx-auto">
            <div className="inline-block px-4 py-1.5 mb-8 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-[10px] font-bold uppercase tracking-[0.2em]">
              Premium Shopify Analytics Solutions
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-8 text-white leading-[0.9]">
              Stop guessing. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-blue-700">Start deciding.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-14 leading-relaxed max-w-2xl mx-auto font-medium">
              We deliver interactive Power BI dashboard assets. Know your **real margin** after ads, logistics, and returns.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a href={calendlyUrl} className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest transition-all shadow-[0_20px_40px_rgba(37,99,235,0.25)] hover:-translate-y-1">
                Start Free Audit
              </a>
              {/* КНОПКА НА ПОРТФОЛІО */}
              <a href="/dashboards" className="w-full sm:w-auto bg-white/5 border border-white/10 hover:bg-white/10 text-white px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest transition-all">
                View Portfolio
              </a>
            </div>
          </div>
        </section>

        {/* INTEGRATIONS BAR */}
        <section className="py-12 px-6 border-y border-white/5 bg-white/[0.01]">
          <div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-12 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
            <span className="text-[10px] font-black tracking-[0.3em] w-full text-center mb-4 text-gray-600 uppercase">Native Integrations</span>
            <div className="text-xl font-black italic">Shopify</div>
            <div className="text-xl font-black italic">Meta Ads</div>
            <div className="text-xl font-black italic">Google Ads</div>
            <div className="text-xl font-black italic">GA4</div>
            <div className="text-xl font-black italic">Klaviyo</div>
          </div>
        </section>

        {/* DASHBOARD PREVIEW - ТИЗЕР */}
        <section id="dashboards" className="py-32 px-6 bg-[#0a0a0a]">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-black mb-12 uppercase tracking-widest italic">Featured Deliverable</h2>
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-blue-900/10 group">
              <Image 
                src="/dashboard-preview.png" 
                alt="Shopify Profit Dashboard Preview" 
                width={1200} 
                height={675} 
                className="w-full h-auto group-hover:scale-[1.02] transition-transform duration-700"
              />
              {/* НАКЛАДКА З КНОПКОЮ */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                 <a href="/dashboards" className="bg-white text-black px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs shadow-2xl hover:scale-105 transition">
                   Explore All 4 Dashboards
                 </a>
              </div>
            </div>
          </div>
        </section>

        {/* Решта секцій (Metrics, Pricing, FAQ) залишаються без змін... */}
        
        {/* Метрики для наповнення */}
        <section id="metrics" className="py-24 px-6 max-w-7xl mx-auto bg-white/[0.01] rounded-[3rem] border border-white/5">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-white mb-4 uppercase tracking-widest italic">The KPIs we Solve</h2>
            <p className="text-gray-500 font-medium">Every digital asset we deliver tracks these mission-critical metrics.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Net Profit", desc: "Real profit after all fees" },
              { label: "Blended CAC", desc: "Customer acquisition cost" },
              { label: "LTV", desc: "Customer lifetime value" },
              { label: "MER", desc: "Marketing efficiency ratio" }
            ].map((m, i) => (
              <div key={i} className="p-10 rounded-[2rem] bg-black border border-white/5 text-center group hover:border-blue-500/50 transition duration-500">
                <div className="text-blue-500 font-black text-3xl mb-3 group-hover:scale-110 transition-transform">{m.label}</div>
                <div className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-bold">{m.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* PRICING */}
        <section id="pricing" className="py-32 px-6 border-t border-white/5">
          <div className="max-w-5xl mx-auto">
             {/* Код прайсингу як раніше... */}
             <div className="grid md:grid-cols-2 gap-8 items-stretch">
                <div className="p-10 rounded-[2.5rem] bg-black border border-white/5 flex flex-col hover:border-white/10 transition duration-500">
                  <div className="mb-10 text-5xl font-black italic">€699</div>
                  <a href={calendlyUrl} className="w-full py-5 rounded-2xl border border-white/20 text-white font-black text-xs uppercase tracking-widest text-center">Get Setup</a>
                </div>
                <div className="p-10 rounded-[2.5rem] bg-blue-600 shadow-[0_0_60px_rgba(37,99,235,0.25)] flex flex-col relative overflow-hidden">
                   <div className="mb-10 text-5xl font-black italic text-white">€2,400</div>
                   <a href={calendlyUrl} className="w-full py-5 rounded-2xl bg-black text-white font-black text-xs uppercase tracking-widest text-center">Scale Brand Now</a>
                </div>
             </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="py-20 bg-black border-t border-white/5 px-6 relative z-10 text-center md:text-left">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
           <div className="text-[9px] text-gray-700 uppercase tracking-[0.4em] font-black">
              Service by FOP Kononchuk Oleksandr. Payments by Paddle.
           </div>
           <div className="flex gap-8 text-[9px] text-gray-500 uppercase tracking-[0.3em] font-black">
              <a href="/terms" className="hover:text-blue-500 transition">Terms</a>
              <a href="/privacy" className="hover:text-blue-500 transition">Privacy</a>
              <a href="/refunds" className="hover:text-blue-500 transition">Refunds</a>
           </div>
        </div>
      </footer>
    </div>
  );
}