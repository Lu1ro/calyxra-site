'use client';

import { useState } from 'react';

// Компонент для dashboard карток
function DashboardCard({ imageSrc, title, subtitle, description, features, order = 'normal', index }) {
  const [isHovered, setIsHovered] = useState(false);
  
  const isReversed = order === 'reversed';
  
  return (
    <div className="group">
      <div className={`grid md:grid-cols-2 gap-16 items-center ${isReversed ? '' : ''}`}>
        <div 
          className={`${isReversed ? 'order-1' : 'order-2 md:order-1'} italic space-y-6`}
          style={{ transitionDelay: `${index * 100}ms` }}
        >
          <span className="text-blue-400 font-black text-[11px] uppercase tracking-[0.35em] block not-italic">
            {subtitle}
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase italic tracking-tight leading-tight">
            {title}
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed font-medium not-italic">
            {description}
          </p>
          <ul className="space-y-4 text-sm text-gray-500 font-bold not-italic">
            {features.map((feature, i) => (
              <li key={i} className="flex items-center gap-4 group/item hover:text-gray-300 transition-colors">
                <div className="w-2 h-2 bg-blue-600 rounded-full shadow-[0_0_10px_rgba(37,99,235,0.6)] group-hover/item:shadow-[0_0_15px_rgba(37,99,235,0.8)] transition-all"></div>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        
        <div 
          className={`${isReversed ? 'order-2' : 'order-1 md:order-2'} relative rounded-[2.5rem] overflow-hidden border-2 border-white/10 shadow-2xl transition-all duration-700 group-hover:border-blue-500/40 group-hover:shadow-[0_30px_80px_rgba(37,99,235,0.2)] bg-[#0a0a0a]`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img 
            src={imageSrc}
            alt={title}
            className={`w-full h-auto transition-transform duration-700 ${isHovered ? 'scale-105' : ''}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/50 to-transparent pointer-events-none"></div>
          
          {/* CORNER ACCENTS */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-blue-500/40 rounded-tl-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-blue-500/40 rounded-br-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          {/* GLOW EFFECT */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-500/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        </div>
      </div>
    </div>
  );
}

export default function DashboardsPage() {
  const calendlyUrl = "https://calendly.com/calyxra-team/30min";

  const dashboards = [
    {
      imageSrc: "/dashboard-v2.png",
      title: "Executive Sales & Margin",
      subtitle: "Core Solution",
      description: "Comprehensive visibility into your Shopify business. Monitor high-level metrics like AOV, Margin %, and Gross Profit while tracking long-term growth trends with precision.",
      features: [
        "REVENUE & GROSS PROFIT TRENDING",
        "SKU-LEVEL PROFITABILITY ANALYSIS",
        "REAL-TIME MARGIN MONITORING"
      ],
      order: "normal"
    },
    {
      imageSrc: "/marketing-v2.png",
      title: "Multi-Channel Attribution",
      subtitle: "Marketing ROI",
      description: "Analyze the true efficiency of your ad spend. Track CPA, MER, and ROAS across Meta, Google, and TikTok in one unified view to identify scaling opportunities.",
      features: [
        "CROSS-CHANNEL ROAS & MER TRACKING",
        "REAL-TIME CPA & CPC MONITORING",
        "SPEND VS REVENUE TREND ANALYSIS"
      ],
      order: "reversed"
    },
    {
      imageSrc: "/customer-v2.png",
      title: "Customer LTV & Retention",
      subtitle: "Retention Intelligence",
      description: "Stop wasting your budget on one-time buyers. Analyze the behavior of new and returning customers to scale actual profit, not just top-line revenue.",
      features: [
        "NEW VS RETURNING REVENUE SPLIT",
        "18.8% REPEAT PURCHASE RATE",
        "$96.4 AVG REVENUE PER CUSTOMER"
      ],
      order: "normal"
    }
  ];

  return (
    <div className="bg-[#050505] text-[#ededed] min-h-screen font-sans selection:bg-blue-500/30 overflow-x-hidden italic">
      
      {/* ENHANCED BACKGROUND EFFECTS */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-15%] right-[-15%] w-[50%] h-[50%] bg-blue-600/15 blur-[140px] rounded-full animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/15 blur-[140px] rounded-full animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }}></div>
        <div className="absolute top-[50%] right-[20%] w-[30%] h-[30%] bg-purple-600/10 blur-[120px] rounded-full animate-pulse" style={{ animationDuration: '12s', animationDelay: '4s' }}></div>
      </div>

      {/* ANIMATED GRID OVERLAY */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }}></div>
      </div>

      {/* NAVIGATION */}
      <nav className="fixed w-full z-50 bg-black/70 backdrop-blur-2xl border-b border-white/10 italic transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3 group cursor-pointer">
            <div className="relative w-10 h-10 overflow-hidden rounded-xl shadow-lg shadow-blue-500/30 group-hover:shadow-blue-500/50 transition-all">
              <img 
                src="/logo.png" 
                alt="Calyxra Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-xl font-black tracking-tighter uppercase leading-none italic text-white group-hover:text-blue-400 transition-colors">CALYXRA</div>
          </a>
          <div className="hidden md:flex gap-12 text-[11px] uppercase tracking-[0.25em] text-gray-400 font-bold not-italic">
            <a href="/#process" className="hover:text-blue-400 transition-all duration-300 relative group">
              Process
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="/dashboards" className="text-blue-400 relative">
              Portfolio
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400"></span>
            </a>
            <a href="/#pricing" className="hover:text-blue-400 transition-all duration-300 relative group">
              Pricing
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>
          <a href={calendlyUrl} className="bg-gradient-to-r from-white to-gray-100 text-black hover:from-blue-600 hover:to-blue-500 hover:text-white px-7 py-3 rounded-full text-[10px] font-black uppercase tracking-wider transition-all shadow-xl hover:shadow-2xl hover:shadow-blue-500/30 active:scale-95 not-italic relative overflow-hidden group">
            <span className="relative z-10">Book KPI Review</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
        </div>
      </nav>

      <main className="relative z-10 pt-48 pb-40 px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* HEADER */}
          <div className="mb-32 text-center italic">
            <div className="inline-block px-5 py-2 mb-10 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-[10px] font-bold uppercase tracking-[0.25em] not-italic backdrop-blur-sm shadow-lg shadow-blue-500/20">
              ✦ Premium Dashboard Collection ✦
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-8 text-white uppercase leading-[0.85]">
              Portfolio <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-blue-400 via-blue-500 to-blue-700 font-black italic relative">
                Assets.
                <div className="absolute -bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50 blur-sm"></div>
              </span>
            </h1>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto font-medium leading-relaxed not-italic">
              Explore our <span className="text-blue-400 font-bold">premium BI dashboard assets</span>. Each solution is built to solve specific Shopify profit leakages and scaling bottlenecks.
            </p>
          </div>

          {/* DASHBOARD GRID */}
          <div className="space-y-40">
            {dashboards.map((dashboard, index) => (
              <DashboardCard key={index} {...dashboard} index={index} />
            ))}
          </div>

          {/* FINAL CTA */}
          <div className="mt-48 p-24 rounded-[4rem] bg-gradient-to-br from-white/[0.03] via-white/[0.02] to-white/[0.01] border-2 border-white/10 text-center italic shadow-2xl hover:border-blue-500/30 transition-all duration-500 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-8 uppercase italic tracking-tight">Need Custom Logic?</h2>
              <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto font-medium not-italic leading-relaxed">
                We specialize in building unique data models for complex Shopify setups, accounting for custom shipping, taxes, and returns.
              </p>
              <a href={calendlyUrl} className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-14 py-6 rounded-2xl font-black uppercase tracking-widest text-[11px] transition-all shadow-2xl shadow-blue-600/30 hover:shadow-blue-600/50 hover:scale-105 not-italic">
                Schedule Technical Call
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="py-28 bg-black border-t border-white/10 px-6 relative z-10 text-center md:text-left italic">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-16 border-b border-white/10 pb-20 mb-16">
            <div className="text-left italic">
              <a href="/" className="text-3xl font-black uppercase tracking-tighter mb-5 text-white flex items-center gap-3 hover:text-blue-400 transition-colors">
                <div className="w-10 h-10 overflow-hidden rounded-xl shadow-lg shadow-blue-500/30">
                  <img 
                    src="/logo.png" 
                    alt="Calyxra Logo" 
                    className="w-full h-full object-cover"
                  />
                </div>
                CALYXRA
              </a>
              <p className="text-gray-600 text-[11px] uppercase tracking-[0.35em] font-bold not-italic mt-4">Premium BI Solutions for Shopify</p>
            </div>
            <div className="flex flex-col items-center md:items-end gap-5 not-italic">
              <span className="text-[11px] text-gray-600 uppercase tracking-widest font-black italic">Technical Support</span>
              <a href="mailto:admin@calyxra.com" className="text-blue-400 font-bold hover:text-white transition text-lg italic">admin@calyxra.com</a>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="text-[10px] text-gray-700 uppercase tracking-[0.45em] font-black max-w-lg leading-relaxed text-left italic">
              Payments processed by Paddle. Service provided by Sole Trader Kononchuk Oleksandr Yaroslavovych.
            </div>
            <div className="flex gap-10 text-[10px] text-gray-500 uppercase tracking-[0.35em] font-bold not-italic">
              <a href="/terms" className="hover:text-blue-400 transition">Terms</a>
              <a href="/privacy" className="hover:text-blue-400 transition">Privacy</a>
              <a href="/refunds" className="hover:text-blue-400 transition">Refunds</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}