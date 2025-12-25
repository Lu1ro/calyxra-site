import Image from "next/image";

export default function DashboardsPage() {
  const calendlyUrl = "https://calendly.com/calyxra-team/30min";

  return (
    <div className="bg-[#050505] text-[#ededed] min-h-screen font-sans selection:bg-blue-500/30 selection:text-white overflow-x-hidden">
      
      {/* BACKGROUND GLOWS */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[30%] h-[30%] bg-blue-900/10 blur-[120px] rounded-full"></div>
      </div>

      {/* NAVIGATION */}
      <nav className="fixed w-full z-50 bg-black/60 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-black text-xs text-white group-hover:bg-blue-500 transition-colors">C</div>
            <div className="text-lg font-black tracking-tighter uppercase leading-none">CALYXRA</div>
          </a>
          <div className="hidden md:flex gap-10 text-[11px] uppercase tracking-[0.2em] text-gray-400 font-bold">
            <a href="/" className="hover:text-blue-500 transition">Home</a>
            <a href="/dashboards" className="text-blue-500 transition">Portfolio</a>
            <a href="/#pricing" className="hover:text-blue-500 transition">Pricing</a>
          </div>
          <a href={calendlyUrl} className="bg-white text-black hover:bg-blue-600 hover:text-white px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-wider transition-all shadow-xl active:scale-95">
            Book Demo
          </a>
        </div>
      </nav>

      <main className="relative z-10 pt-44 pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* HEADER */}
          <div className="mb-24">
            <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 italic">
              Executive <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-blue-700 font-black">Deliverables.</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-xl font-medium leading-relaxed">
              Explore our premium BI dashboard assets. Each solution is built to solve specific Shopify profit leakages and scaling bottlenecks.
            </p>
          </div>

          {/* DASHBOARD GRID */}
          <div className="grid grid-cols-1 gap-32">
            
            {/* DASHBOARD 1: EXECUTIVE PROFIT */}
            <div className="group">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                  <span className="text-blue-500 font-black text-[10px] uppercase tracking-[0.3em] mb-4 block">Core Solution</span>
                  <h2 className="text-3xl font-black mb-6 text-white uppercase italic">Executive Profit & Loss</h2>
                  <p className="text-gray-400 mb-8 leading-relaxed font-medium">
                    The single source of truth for Shopify owners. Real-time contribution margin, blended ROAS, and net profit after shipping and returns.
                  </p>
                  <ul className="space-y-3 mb-10 text-sm text-gray-500 font-bold">
                    <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div> REAL-TIME P&L MODELING</li>
                    <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div> AUTOMATED COGS TRACKING</li>
                    <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div> REFUND IMPACT ANALYSIS</li>
                  </ul>
                </div>
                <div className="order-1 md:order-2 relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl group-hover:border-blue-500/30 transition-all duration-700">
                  <Image 
                    src="/dashboard-preview.png" 
                    alt="Executive Profit Dashboard" 
                    width={1200} 
                    height={675} 
                    className="w-full h-auto group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>

            {/* DASHBOARD 2: MARKETING COHORTS (Placeholder) */}
            <div className="group">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl group-hover:border-blue-500/30 transition-all duration-700 bg-white/5 aspect-video flex items-center justify-center">
                   <div className="text-gray-700 font-black text-xs uppercase tracking-widest">Dashboard Preview Rendering...</div>
                   {/* Коли доробиш, заміни div вище на <Image src="/marketing-cohorts.png" ... /> */}
                </div>
                <div>
                  <span className="text-blue-500 font-black text-[10px] uppercase tracking-[0.3em] mb-4 block">Growth Focus</span>
                  <h2 className="text-3xl font-black mb-6 text-white uppercase italic">Marketing Cohort Analytics</h2>
                  <p className="text-gray-400 mb-8 leading-relaxed font-medium">
                    Understand Customer Lifetime Value (LTV). Track how different ad channels contribute to returning customer rate and long-term profit.
                  </p>
                  <ul className="space-y-3 mb-10 text-sm text-gray-500 font-bold">
                    <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div> NEW VS RETURNING MARGIN</li>
                    <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div> LTV BY ACQUISITION CHANNEL</li>
                    <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div> RETENTION FLOW ANALYSIS</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* DASHBOARD 3: INVENTORY FORECASTING (Placeholder) */}
            <div className="group">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                  <span className="text-blue-500 font-black text-[10px] uppercase tracking-[0.3em] mb-4 block">Operational Excellence</span>
                  <h2 className="text-3xl font-black mb-6 text-white uppercase italic">Inventory & Supply Logic</h2>
                  <p className="text-gray-400 mb-8 leading-relaxed font-medium">
                    Stop stockouts and overstocking. Predictive analytics based on your current run-rate to tell you exactly when to reorder.
                  </p>
                  <ul className="space-y-3 mb-10 text-sm text-gray-500 font-bold">
                    <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div> DAYS OF STOCK REMAINING</li>
                    <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div> REORDER POINT AUTOMATION</li>
                    <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div> DEAD STOCK IDENTIFICATION</li>
                  </ul>
                </div>
                <div className="order-1 md:order-2 relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl group-hover:border-blue-500/30 transition-all duration-700 bg-white/5 aspect-video flex items-center justify-center">
                   <div className="text-gray-700 font-black text-xs uppercase tracking-widest">Dashboard Preview Rendering...</div>
                </div>
              </div>
            </div>

          </div>

          {/* FINAL CTA */}
          <div className="mt-40 p-16 rounded-[3rem] bg-white/[0.02] border border-white/5 text-center">
            <h2 className="text-3xl font-black text-white mb-6 uppercase italic">Need a Custom Logic?</h2>
            <p className="text-gray-500 mb-10 max-w-lg mx-auto font-medium">We specialize in building unique data models for complex Shopify setups. Let’s talk about your requirements.</p>
            <a href={calendlyUrl} className="inline-block bg-blue-600 text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-blue-500 transition shadow-2xl">
              Schedule Technical Call
            </a>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="py-20 bg-black border-t border-white/5 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-[9px] text-gray-700 uppercase tracking-[0.4em] font-black leading-relaxed">
              Service by FOP Kononchuk Oleksandr. Payments by Paddle.
            </div>
            <div className="flex gap-8 text-[9px] text-gray-500 uppercase tracking-[0.3em] font-black">
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