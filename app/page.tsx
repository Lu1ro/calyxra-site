'use client';

import { useState, useEffect } from 'react';

// Компонент для кроків процесу з покращеною анімацією
function ProcessStep({ number, title, description, isLast }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`flex-1 relative group transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="flex items-center mb-6">
        <div className="w-14 h-14 rounded-3xl bg-gradient-to-br from-blue-500 via-blue-600 to-blue-800 flex items-center justify-center text-white font-black z-20 shadow-[0_0_30px_rgba(37,99,235,0.4)] group-hover:shadow-[0_0_50px_rgba(37,99,235,0.7)] transition-all duration-500 border-2 border-white/20 italic relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <span className="relative z-10 text-lg">{number}</span>
        </div>
        {!isLast && (
          <div className="hidden md:block absolute top-7 left-14 w-full h-[2px] bg-gradient-to-r from-gray-800 to-transparent z-10">
            <div className="h-full bg-gradient-to-r from-blue-500 to-blue-400 w-0 group-hover:w-full transition-all duration-1000 ease-in-out shadow-[0_0_12px_#3b82f6]"></div>
          </div>
        )}
      </div>
      <h3 className="text-2xl font-black mb-4 text-white group-hover:text-blue-400 transition-colors duration-300 italic tracking-tight">
        {title}
      </h3>
      <p className="text-gray-400 text-base leading-relaxed pr-4 font-medium not-italic group-hover:text-gray-300 transition-colors">
        {description}
      </p>
      <div className="mt-6 w-12 h-1 bg-gradient-to-r from-blue-600 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  );
}

// Компонент з магнітним hover ефектом
function MagneticDashboard({ calendlyUrl }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useState(null)[0];

  const handleMouseMove = (e) => {
    if (!isHovered) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    setMousePosition({ x: x * 0.1, y: y * 0.1 });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <section id="dashboards" className="py-40 px-6 bg-gradient-to-b from-[#0a0a0a] to-[#050505] relative z-20 border-y border-white/5">
      <div className="max-w-6xl mx-auto text-center italic">
        <h2 className="text-[11px] font-black mb-16 uppercase tracking-[0.6em] text-gray-500 not-italic">Featured Deliverable</h2>
        
        <div 
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={handleMouseLeave}
          className="relative rounded-[3rem] overflow-visible cursor-pointer group"
        >
          {/* MAIN CARD */}
          <div 
            className="relative rounded-[3rem] overflow-hidden border-2 border-white/20 shadow-2xl shadow-blue-900/20 bg-[#0d0d0d] transition-all duration-300"
            style={{
              transform: `translate(${mousePosition.x}px, ${mousePosition.y}px) ${isHovered ? 'scale(1.02)' : 'scale(1)'}`,
              borderColor: isHovered ? 'rgba(59, 130, 246, 0.4)' : 'rgba(255, 255, 255, 0.2)'
            }}
          >
            <img 
              src="/dashboard-v2.png" 
              alt="Shopify Profit Dashboard Assets" 
              className="w-full h-auto transition-all duration-500"
              style={{
                filter: isHovered ? 'brightness(0.7)' : 'brightness(1)'
              }}
            />
            
            {/* OVERLAY WITH BUTTON */}
            <div 
              className="absolute inset-0 flex items-center justify-center transition-opacity duration-300"
              style={{ opacity: isHovered ? 1 : 0 }}
            >
              <a 
                href="/dashboards"
                className="bg-white text-black px-12 py-6 rounded-2xl font-black uppercase tracking-widest text-xs shadow-2xl hover:bg-blue-500 hover:text-white hover:scale-110 transition-all duration-300"
                style={{
                  transform: `translate(${mousePosition.x * -0.5}px, ${mousePosition.y * -0.5}px)`
                }}
              >
                Explore Full Portfolio
              </a>
            </div>
          </div>
          
          {/* FLOATING ELEMENTS WITH MAGNETIC EFFECT */}
          <div 
            className="absolute -top-8 -left-8 w-32 h-32 rounded-full bg-blue-500/20 blur-2xl transition-all duration-300 pointer-events-none"
            style={{
              transform: `translate(${mousePosition.x * 1.5}px, ${mousePosition.y * 1.5}px)`,
              opacity: isHovered ? 1 : 0
            }}
          />
          
          <div 
            className="absolute -bottom-8 -right-8 w-40 h-40 rounded-full bg-purple-500/20 blur-2xl transition-all duration-300 pointer-events-none"
            style={{
              transform: `translate(${mousePosition.x * -1.2}px, ${mousePosition.y * -1.2}px)`,
              opacity: isHovered ? 1 : 0
            }}
          />
          
          {/* CORNER ACCENTS WITH MAGNETIC */}
          <div 
            className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 rounded-tl-[3rem] transition-all duration-300 pointer-events-none"
            style={{
              borderColor: isHovered ? 'rgba(59, 130, 246, 0.8)' : 'rgba(59, 130, 246, 0.3)',
              transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)`
            }}
          />
          
          <div 
            className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 rounded-br-[3rem] transition-all duration-300 pointer-events-none"
            style={{
              borderColor: isHovered ? 'rgba(59, 130, 246, 0.8)' : 'rgba(59, 130, 246, 0.3)',
              transform: `translate(${mousePosition.x * -0.3}px, ${mousePosition.y * -0.3}px)`
            }}
          />
          
          {/* MAGNETIC PARTICLES */}
          {isHovered && (
            <>
              <div 
                className="absolute top-1/4 left-1/4 w-3 h-3 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50 transition-all duration-200"
                style={{
                  transform: `translate(${mousePosition.x * 2}px, ${mousePosition.y * 2}px)`
                }}
              />
              <div 
                className="absolute top-2/3 right-1/3 w-3 h-3 bg-purple-400 rounded-full shadow-lg shadow-purple-400/50 transition-all duration-200"
                style={{
                  transform: `translate(${mousePosition.x * -1.8}px, ${mousePosition.y * -1.8}px)`
                }}
              />
              <div 
                className="absolute bottom-1/4 left-2/3 w-3 h-3 bg-blue-300 rounded-full shadow-lg shadow-blue-300/50 transition-all duration-200"
                style={{
                  transform: `translate(${mousePosition.x * 1.5}px, ${mousePosition.y * 1.5}px)`
                }}
              />
            </>
          )}
        </div>
        
        <p className="mt-10 text-gray-600 text-[11px] uppercase tracking-widest not-italic italic">
          *Interactive Executive Profit & Sales Assets
        </p>
      </div>
    </section>
  );
}

// Компонент метрики з анімацією
function MetricCard({ label, desc, index }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="p-12 rounded-[2.5rem] bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/10 text-center group hover:border-blue-500/50 transition-all duration-500 hover:scale-105 hover:shadow-[0_20px_60px_rgba(37,99,235,0.2)] relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className={`text-blue-400 font-black text-4xl mb-4 transition-all duration-500 italic ${isHovered ? 'scale-110 text-blue-300' : ''}`}>
        {label}
      </div>
      <div className="text-[11px] text-gray-500 uppercase tracking-[0.25em] font-bold not-italic group-hover:text-gray-400 transition-colors">
        {desc}
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  );
}

export default function Home() {
  const calendlyUrl = "https://calendly.com/calyxra-team/30min";
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#050505] text-[#ededed] min-h-screen font-sans selection:bg-blue-500/30 selection:text-white overflow-x-hidden italic">
      
      {/* ПОКРАЩЕНІ BACKGROUND EFFECTS */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-15%] left-[-15%] w-[50%] h-[50%] bg-blue-600/15 blur-[140px] rounded-full animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/15 blur-[140px] rounded-full animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }}></div>
        <div className="absolute top-[40%] left-[50%] w-[30%] h-[30%] bg-purple-600/10 blur-[120px] rounded-full animate-pulse" style={{ animationDuration: '12s', animationDelay: '4s' }}></div>
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
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative w-10 h-10 overflow-hidden rounded-xl shadow-lg shadow-blue-500/30 group-hover:shadow-blue-500/50 transition-all">
              <img 
                src="/logo.png" 
                alt="Calyxra Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-xl font-black tracking-tighter uppercase leading-none italic text-white group-hover:text-blue-400 transition-colors">CALYXRA</div>
          </div>
          <div className="hidden md:flex gap-12 text-[11px] uppercase tracking-[0.25em] text-gray-400 font-bold not-italic">
            <a href="#process" className="hover:text-blue-400 transition-all duration-300 relative group">
              Process
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="/dashboards" className="hover:text-blue-400 transition-all duration-300 relative group">
              Portfolio
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#pricing" className="hover:text-blue-400 transition-all duration-300 relative group">
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

      <main className="relative z-10">
        {/* HERO SECTION */}
        <section className="pt-48 pb-40 px-6 text-center italic relative">
          <div className="max-w-6xl mx-auto">
            <div className="inline-block px-5 py-2 mb-10 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-[10px] font-bold uppercase tracking-[0.25em] not-italic backdrop-blur-sm shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300">
              ✦ Premium Shopify Analytics Solutions ✦
            </div>
            <h1 className="text-7xl md:text-9xl font-black tracking-tight mb-10 text-white leading-[0.85] animate-fade-in">
              Stop guessing. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-blue-400 via-blue-500 to-blue-700 font-black relative">
                Start deciding.
                <div className="absolute -bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50 blur-sm"></div>
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-16 leading-relaxed max-w-3xl mx-auto font-medium not-italic">
              We deliver <span className="text-blue-400 font-bold">interactive Power BI dashboard assets</span>. Know your real margin after ads, logistics, and returns.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center not-italic">
              <a href={calendlyUrl} className="group relative w-full sm:w-auto bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-12 py-6 rounded-2xl font-black text-sm uppercase tracking-widest transition-all shadow-[0_20px_60px_rgba(37,99,235,0.3)] hover:shadow-[0_25px_70px_rgba(37,99,235,0.5)] hover:-translate-y-1 overflow-hidden">
                <span className="relative z-10">Start Free Audit</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a href="/dashboards" className="w-full sm:w-auto bg-white/5 border-2 border-white/20 hover:bg-white/10 hover:border-blue-500/50 text-white px-12 py-6 rounded-2xl font-black text-sm uppercase tracking-widest transition-all hover:shadow-[0_20px_40px_rgba(255,255,255,0.1)]">
                View Portfolio
              </a>
            </div>
          </div>
          
          {/* FLOATING PARTICLES */}
          <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-blue-400 rounded-full blur-sm animate-pulse opacity-50"></div>
          <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-blue-500 rounded-full blur-sm animate-pulse opacity-40" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-purple-400 rounded-full blur-sm animate-pulse opacity-30" style={{ animationDelay: '2s' }}></div>
        </section>

        {/* INTEGRATIONS BAR */}
        <section className="py-16 px-6 border-y border-white/10 bg-gradient-to-r from-white/[0.01] via-white/[0.02] to-white/[0.01] backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <span className="text-[11px] font-black tracking-[0.35em] block text-center mb-8 text-gray-500 uppercase not-italic">Native Integrations</span>
            <div className="flex flex-wrap justify-center items-center gap-16 grayscale hover:grayscale-0 transition-all duration-700">
              {['Shopify', 'Meta Ads', 'Google Ads', 'GA4', 'Klaviyo'].map((integration, i) => (
                <div key={i} className="text-2xl font-black italic text-gray-600 hover:text-blue-400 transition-all duration-300 hover:scale-110 cursor-default">
                  {integration}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS STEPS */}
        <section id="process" className="py-40 px-6 max-w-7xl mx-auto italic">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black text-white mb-4 uppercase tracking-tight italic">Our Process</h2>
            <p className="text-gray-500 font-medium not-italic text-lg">Three steps to data clarity</p>
          </div>
          <div className="grid md:grid-cols-3 gap-20 md:gap-12">
            <ProcessStep 
              number="01"
              title="Data Modeling"
              description="API sync and data cleansing. Full visibility across all Shopify and marketing channels with automated data pipelines."
            />
            <ProcessStep 
              number="02"
              title="Profit Logic"
              description="Custom contribution margin logic built for every SKU. Precise cost tracking including shipping, taxes, and returns."
            />
            <ProcessStep 
              number="03"
              isLast={true}
              title="Scale Readiness"
              description="Live asset transfer with full documentation. Your team gets hands-on training for immediate implementation."
            />
          </div>
        </section>

        {/* FEATURED DASHBOARD PREVIEW */}
        <MagneticDashboard calendlyUrl={calendlyUrl} />

        {/* METRICS GRID */}
        <section id="metrics" className="py-32 px-6 max-w-7xl mx-auto italic">
          <div className="text-center mb-20 italic">
            <h2 className="text-4xl font-black text-white mb-5 uppercase tracking-tight">The KPIs we Solve</h2>
            <p className="text-gray-500 font-medium not-italic text-lg">Mission-critical metrics in every dashboard asset</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Net Profit", desc: "Real money in the bank" },
              { label: "Blended CAC", desc: "Total acquisition cost" },
              { label: "LTV", desc: "Customer lifetime value" },
              { label: "MER", desc: "Marketing efficiency ratio" }
            ].map((m, i) => (
              <MetricCard key={i} {...m} index={i} />
            ))}
          </div>
        </section>

        {/* PRICING SECTION */}
        <section id="pricing" className="py-40 px-6 bg-gradient-to-b from-white/[0.01] to-transparent border-t border-white/5 italic text-left">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-5xl font-black mb-24 text-center uppercase tracking-tight text-white italic">The Investment</h2>
            <div className="grid md:grid-cols-2 gap-10 items-stretch not-italic">
              
              {/* STARTER CARD */}
              <div className="p-14 rounded-[3rem] bg-gradient-to-br from-black via-gray-900 to-black border-2 border-white/10 flex flex-col hover:border-white/20 transition-all duration-500 hover:shadow-[0_30px_60px_rgba(255,255,255,0.05)] relative overflow-hidden group italic">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl group-hover:bg-blue-500/10 transition-all duration-500"></div>
                <div className="mb-12 relative z-10">
                  <span className="text-[11px] font-black uppercase tracking-[0.35em] text-gray-500 not-italic">Starter Asset</span>
                  <div className="text-6xl font-black mt-5 text-white italic">€699</div>
                  <p className="text-blue-400 font-bold text-[11px] mt-3 uppercase not-italic">Full payment required</p>
                </div>
                <div className="space-y-5 text-sm text-gray-400 mb-14 flex-grow font-medium italic relative z-10">
                  <p className="flex items-center gap-4"><span className="w-2 h-2 rounded-full bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.6)]"></span> 1 Executive Dashboard Asset</p>
                  <p className="flex items-center gap-4"><span className="w-2 h-2 rounded-full bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.6)]"></span> Shopify Connector Setup</p>
                  <p className="flex items-center gap-4"><span className="w-2 h-2 rounded-full bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.6)]"></span> 7-Day Digital Delivery</p>
                </div>
                <a href={calendlyUrl} className="relative z-10 w-full py-6 rounded-2xl border-2 border-white/30 text-white font-black text-[11px] uppercase tracking-widest text-center hover:bg-white hover:text-black transition-all hover:scale-[1.02] italic">Get Setup</a>
              </div>

              {/* GROWTH CARD */}
              <div className="p-14 rounded-[3rem] bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 shadow-[0_0_100px_rgba(37,99,235,0.3)] flex flex-col relative overflow-hidden group italic border-2 border-blue-400/30 hover:shadow-[0_0_120px_rgba(37,99,235,0.4)] transition-all duration-500">
                <div className="absolute top-0 right-0 bg-white text-blue-600 px-10 py-3 text-[10px] font-black uppercase tracking-[0.25em] rounded-bl-[2rem] shadow-2xl not-italic z-20">50/50 Split Available</div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
                <div className="mb-12 relative z-10">
                  <span className="text-[11px] font-black uppercase tracking-[0.35em] text-white/80 not-italic">Full Analytics Suite</span>
                  <div className="text-6xl font-black mt-5 text-white italic">€2,400</div>
                  <p className="text-white/90 font-bold text-[11px] mt-3 uppercase not-italic">€1,200 Deposit / €1,200 Final</p>
                </div>
                <div className="space-y-5 text-sm text-white mb-14 flex-grow relative z-10 font-bold italic">
                  <p className="flex items-center gap-4"><span className="w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.8)]"></span> 3–4 Dashboard Assets</p>
                  <p className="flex items-center gap-4"><span className="w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.8)]"></span> Marketing & Cohort Modeling</p>
                  <p className="flex items-center gap-4"><span className="w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.8)]"></span> Priority Implementation</p>
                </div>
                <a href={calendlyUrl} className="relative z-10 w-full py-6 rounded-2xl bg-black text-white font-black text-[11px] uppercase tracking-widest text-center hover:scale-[1.02] transition-all shadow-2xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] italic">Scale Brand Now</a>
              </div>

            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-40 px-6 max-w-4xl mx-auto italic text-left">
          <h2 className="text-4xl font-black mb-20 text-center text-white uppercase tracking-tight italic">FAQ</h2>
          <div className="space-y-8">
            {[
              { q: "Payment plans available?", a: "For our Growth package (€2,400), we offer a 50/50 split: a 50% deposit to start and the remaining 50% upon final delivery." },
              { q: "Is my data secure?", a: "Official API connections only. Your raw data flows directly to your private Power BI instance. We follow enterprise-grade security protocols." },
              { q: "What is the delivery format?", a: "You receive a digital software asset (PBIX file) or a secure cloud-access link with full documentation and training materials." },
              { q: "Do you offer refunds?", a: "Due to the custom digital nature of modeling, no refunds are available once setup begins. We ensure complete satisfaction through our audit process." }
            ].map((faq, i) => (
              <div key={i} className="p-8 rounded-3xl border border-white/10 bg-white/[0.02] hover:border-blue-500/30 transition-all duration-300 hover:bg-white/[0.04]">
                <h3 className="text-blue-400 font-black mb-4 text-xl italic">{faq.q}</h3>
                <p className="text-gray-400 text-base leading-relaxed font-medium italic">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-40 px-6 italic">
          <div className="max-w-5xl mx-auto p-24 rounded-[4rem] bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-center relative overflow-hidden shadow-[0_40px_120px_rgba(37,99,235,0.4)] group italic border-2 border-blue-400/30">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
            <h2 className="text-6xl md:text-8xl font-black text-white mb-10 relative z-10 leading-[0.85] italic">Ready to scale?</h2>
            <p className="text-white/80 mb-14 text-xl max-w-2xl mx-auto relative z-10 font-medium not-italic italic leading-relaxed">Let's build your single source of truth and fix your profit leakage. Start making data-driven decisions today.</p>
            <a href={calendlyUrl} className="relative z-10 inline-block bg-white text-blue-600 px-16 py-7 rounded-2xl font-black uppercase tracking-[0.25em] text-[11px] hover:scale-110 transition-all shadow-2xl hover:shadow-[0_20px_60px_rgba(255,255,255,0.3)] not-italic italic">
              Book Your Free Audit
            </a>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="py-28 bg-black border-t border-white/10 px-6 relative z-10 text-center md:text-left italic">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-16 border-b border-white/10 pb-20 mb-16">
            <div className="text-left italic">
              <div className="text-3xl font-black uppercase tracking-tighter mb-5 text-white flex items-center gap-3">
                <div className="w-10 h-10 overflow-hidden rounded-xl shadow-lg shadow-blue-500/30">
                  <img 
                    src="/logo.png" 
                    alt="Calyxra Logo" 
                    className="w-full h-full object-cover"
                  />
                </div>
                CALYXRA
              </div>
              <p className="text-gray-600 text-[11px] uppercase tracking-[0.35em] font-bold not-italic">Premium BI Solutions for Shopify</p>
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