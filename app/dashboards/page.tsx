import Image from "next/image";

export default function DashboardsPage() {
  const calendlyUrl = "https://calendly.com/calyxra-team/30min";

  return (
    <div className="bg-[#050505] text-[#ededed] min-h-screen font-sans selection:bg-blue-500/30 overflow-x-hidden italic">
      
      {/* BACKGROUND GLOWS */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none z-0 not-italic">
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[30%] h-[30%] bg-blue-900/10 blur-[120px] rounded-full"></div>
      </div>

      <main className="relative z-10 pt-44 pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* HEADER */}
          <div className="mb-24 italic">
            <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 text-white uppercase leading-[0.9]">
              Portfolio <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-blue-700 font-black italic">Assets.</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-xl font-medium leading-relaxed not-italic">
              Explore our premium BI dashboard assets. Each solution is built to solve specific Shopify profit leakages and scaling bottlenecks.
            </p>
          </div>

          {/* DASHBOARD GRID */}
          <div className="grid grid-cols-1 gap-32">
            
            {/* 1. EXECUTIVE SALES & MARGIN */}
            <div className="group">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1 italic">
                  <span className="text-blue-500 font-black text-[10px] uppercase tracking-[0.3em] mb-4 block not-italic">Core Solution</span>
                  <h2 className="text-3xl font-black mb-6 text-white uppercase italic">Executive Sales & Margin</h2>
                  <p className="text-gray-400 mb-8 leading-relaxed font-medium not-italic">Comprehensive visibility into your Shopify business. Monitor high-level metrics like AOV, Margin %, and Gross Profit while tracking long-term growth trends.</p>
                  <ul className="space-y-3 mb-10 text-sm text-gray-500 font-bold not-italic">
                    <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div> REVENUE & GROSS PROFIT TRENDING</li>
                    <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div> SKU-LEVEL PROFITABILITY ANALYSIS</li>
                    <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div> REAL-TIME MARGIN MONITORING</li>
                  </ul>
                </div>
                <div className="order-1 md:order-2 relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl transition-all duration-700 group-hover:border-blue-500/30">
                  <Image 
                    src="/dashboard-v2.png" 
                    alt="Executive Dashboard" 
                    width={1200} 
                    height={675} 
                    className="w-full h-auto transition-transform duration-700 group-hover:scale-105" 
                  />
                </div>
              </div>
            </div>

            {/* 2. MARKETING PERFORMANCE & ATTRIBUTION */}
            <div className="group">
              <div className="grid md:grid-cols-2 gap-12 items-center text-left">
                <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl transition-all duration-700 group-hover:border-blue-500/30">
                  <Image 
                    src="/marketing-v2.png" 
                    alt="Marketing Performance Dashboard" 
                    width={1200} 
                    height={675} 
                    className="w-full h-auto transition-transform duration-700 group-hover:scale-105" 
                  />
                </div>
                <div className="italic pl-0 md:pl-12">
                  <span className="text-blue-500 font-black text-[10px] uppercase tracking-[0.3em] mb-4 block not-italic">Marketing ROI</span>
                  <h2 className="text-3xl font-black mb-6 text-white uppercase italic">Multi-Channel Attribution</h2>
                  <p className="text-gray-400 mb-8 leading-relaxed font-medium not-italic">Analyze the true efficiency of your ad spend. Track CPA, MER, and ROAS across Meta, Google, and TikTok in one view to identify scaling opportunities.</p>
                  <ul className="space-y-3 mb-10 text-sm text-gray-500 font-bold not-italic">
                    <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div> CROSS-CHANNEL ROAS & MER TRACKING</li>
                    <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div> REAL-TIME CPA & CPC MONITORING</li>
                    <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div> SPEND VS REVENUE TREND ANALYSIS</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 3. CUSTOMER ANALYTICS & RETENTION */}
            <div className="group py-20 border-t border-gray-900/50">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="order-2 md:order-1 italic">
                  <span className="text-blue-500 font-black text-[10px] uppercase tracking-[0.4em] mb-6 block not-italic">Retention Intelligence</span>
                  <h2 className="text-4xl font-black mb-8 text-white tracking-tight uppercase italic text-left">Customer <span className="text-gray-500">LTV & Retention</span></h2>
                  <p className="text-lg text-gray-400 mb-10 leading-relaxed font-medium not-italic text-left">Stop wasting your budget on one-time buyers. Analyze the behavior of new and returning customers to scale actual profit, not just top-line revenue.</p>
                  <ul className="space-y-4 mb-12 text-sm text-gray-500 font-bold uppercase tracking-widest not-italic">
                    <li className="flex items-center gap-4"><div className="w-1.5 h-1.5 bg-blue-600 rounded-full shadow-[0_0_8px_rgba(37,99,235,0.6)]"></div> NEW VS RETURNING REVENUE SPLIT</li>
                    <li className="flex items-center gap-4"><div className="w-1.5 h-1.5 bg-blue-600 rounded-full shadow-[0_0_8px_rgba(37,99,235,0.6)]"></div> 18.8% REPEAT PURCHASE RATE</li>
                    <li className="flex items-center gap-4"><div className="w-1.5 h-1.5 bg-blue-600 rounded-full shadow-[0_0_8px_rgba(37,99,235,0.6)]"></div> $96.4 AVG REVENUE PER CUSTOMER</li>
                  </ul>
                </div>
                <div className="order-1 md:order-2 relative rounded-xl overflow-hidden border border-white/5 shadow-2xl transition-all duration-700 group-hover:border-blue-500/30 bg-[#0a0a0a]">
                  <Image 
                    src="/customer-v2.png" 
                    alt="Customer Analytics" 
                    width={1200} 
                    height={675} 
                    className="w-full h-auto transition-transform duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/40 to-transparent pointer-events-none"></div>
                </div>
              </div>
            </div>

          </div>

          {/* FINAL CTA */}
          <div className="mt-40 p-20 rounded-[3rem] bg-white/[0.02] border border-white/5 text-center italic shadow-2xl">
            <h2 className="text-3xl font-black text-white mb-6 uppercase italic">Need Custom Logic?</h2>
            <p className="text-gray-500 mb-10 max-w-lg mx-auto font-medium not-italic text-center">We specialize in building unique data models for complex Shopify setups, accounting for custom shipping, taxes, and returns.</p>
            <a href={calendlyUrl} className="inline-block bg-blue-600 text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-blue-500 transition shadow-2xl shadow-blue-600/20 not-italic">
              Schedule Technical Call
            </a>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="py-20 bg-black border-t border-white/5 px-6 relative z-10 text-center md:text-left italic">
        <div className="max-w-7xl mx-auto">
          <p className="text-[9px] text-gray-700 uppercase tracking-[0.4em] font-black leading-relaxed italic">
            Payments processed by Paddle. Service by Sole Trader Kononchuk Oleksandr Yaroslavovych.
          </p>
        </div>
      </footer>
    </div>
  );
}