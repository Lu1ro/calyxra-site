'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  Send, Loader2, Sparkles, BarChart3, Database, Zap, X, Mail, 
  ArrowRight, CheckCircle2, TrendingUp, FileSpreadsheet, ArrowRightLeft 
} from 'lucide-react';

// --- Types ---

interface Service {
  id: string;
  title: string;
  icon: React.ReactNode;
  shortDesc: string;
  fullDesc: string;
  features: string[];
}

interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  metric: string;
  growth: string;
  color: string;
}

// --- Data ---

const SERVICES: Service[] = [
  {
    id: 'power-bi',
    title: 'Power BI & Tableau',
    icon: <BarChart3 className="w-6 h-6 text-blue-400" />,
    shortDesc: 'Stop guessing. Interactive dashboards that show your real profit in real-time.',
    fullDesc: 'We replace static Excel reports with dynamic BI dashboards. Track KPI, sales velocity, and inventory levels automatically. No more manual copy-pasting.',
    features: ['Real-time Data Sync', 'Mobile Access', 'Automated Alerts', 'Custom Visuals']
  },
  {
    id: 'bigquery',
    title: 'Data Warehousing',
    icon: <Database className="w-6 h-6 text-purple-400" />,
    shortDesc: 'Scalable cloud infrastructure. Your data, organized and secure.',
    fullDesc: 'As you grow, Excel crashes. We migrate your data to Google BigQuery or Azure SQL, creating a single source of truth for your entire company.',
    features: ['ETL Pipelines', 'Data Cleaning', 'Security & Backup', 'High Speed Queries']
  },
  {
    id: 'automation',
    title: 'Python Automation',
    icon: <Zap className="w-6 h-6 text-yellow-400" />,
    shortDesc: 'Automate boring tasks. Scrapers, bots, and integration scripts.',
    fullDesc: 'Save hundreds of man-hours by automating repetitive tasks. We build scripts to parse competitor prices, send automated reports to Telegram, or sync different CRMs.',
    features: ['Competitor Scraping', 'Telegram Bots', 'API Integrations', 'Error Free Operations']
  }
];

const PORTFOLIO: PortfolioItem[] = [
  { id: '1', title: 'E-commerce Retention', category: 'Retail', metric: '$1.2M', growth: '+12%', color: 'from-blue-500 to-cyan-400' },
  { id: '2', title: 'SaaS Churn Predictor', category: 'Tech', metric: '2.4%', growth: '-0.8%', color: 'from-purple-500 to-pink-400' },
  { id: '3', title: 'Logistics Optimization', category: 'Supply Chain', metric: '98.5%', growth: '+4.2%', color: 'from-emerald-500 to-teal-400' }
];

// --- Sub-Components ---

// 1. Navigation
const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
    <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
      
      {/* Логотип */}
      <div className="flex items-center gap-3 font-bold text-xl tracking-tighter text-white cursor-pointer" onClick={() => window.scrollTo(0,0)}>
        <Image 
          src="/logo.png" 
          alt="Calyxra Logo" 
          width={44} 
          height={44} 
          className="w-11 h-11 object-contain"
        />
        <span>Calyxra</span>
      </div>

      <div className="hidden md:flex gap-8 text-base font-medium text-neutral-400">
        <a href="#problem-solution" className="hover:text-white transition-colors">Why Us</a>
        <a href="#services" className="hover:text-white transition-colors">Services</a>
        <a href="#ai-demo" className="hover:text-white transition-colors">AI Demo</a>
        <a href="#about" className="hover:text-white transition-colors">Team</a>
      </div>
      <a href="#contact" className="px-4 py-2 bg-white text-black text-sm font-bold rounded-full hover:bg-neutral-200 transition-colors">
        Contact Us
      </a>
    </div>
  </nav>
);

// 2. Hero Section (Sales Focused)
const HeroSales = () => (
  <section className="relative pt-32 pb-20 px-6 overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none"></div>
    
    <div className="max-w-5xl mx-auto text-center relative z-10">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-red-500/30 bg-red-500/10 backdrop-blur-sm mb-8 animate-in fade-in slide-in-from-top-4">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
        </span>
        <span className="text-xs font-bold text-red-200 uppercase tracking-wide">Stop losing money in spreadsheets</span>
      </div>
      
      <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white animate-in fade-in zoom-in-95 duration-700">
        Turn Your Messy Data <br />
        into <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Clear Profit</span>
      </h1>
      
      <p className="text-lg md:text-xl text-neutral-400 mb-10 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
        Business owners lose 20% of revenue simply because they can't see the problems fast enough. 
        We replace your chaotic Excel sheets with automated Dashboards that drive decisions.
      </p>
      
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
        <a href="#problem-solution" className="px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-neutral-200 transition-colors w-full md:w-auto shadow-[0_0_20px_rgba(255,255,255,0.3)]">
          See the Difference
        </a>
        <a href="#contact" className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold rounded-lg hover:bg-white/10 transition-colors w-full md:w-auto">
          Calculate ROI
        </a>
      </div>
    </div>
  </section>
);

// 3. Comparison Section (Before & After)
const ComparisonSection = () => (
  <section id="problem-solution" className="py-24 px-6 bg-black">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Why You Need Visualization</h2>
        <p className="text-neutral-400 max-w-2xl mx-auto">
          Most businesses are stuck on the left. Market leaders are on the right. 
          Where are you?
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-center relative">
        
        {/* LEFT: THE PAIN (EXCEL) */}
        <div className="relative group p-1 rounded-2xl bg-gradient-to-br from-red-900/20 to-neutral-900/50 border border-red-900/30 opacity-70 hover:opacity-100 transition-opacity">
          <div className="absolute -top-4 left-6 px-4 py-1 bg-red-950 border border-red-800 text-red-400 text-xs font-bold uppercase rounded-full">
            The Old Way (Painful)
          </div>
          <div className="bg-neutral-950 rounded-xl p-8 h-[400px] flex flex-col justify-center overflow-hidden font-mono text-xs text-neutral-500">
            <div className="grid grid-cols-4 gap-2 mb-2 border-b border-neutral-800 pb-2 text-neutral-400">
              <div>Date</div><div>ID</div><div>Sales</div><div>Status</div>
            </div>
            {[...Array(8)].map((_, i) => (
              <div key={i} className="grid grid-cols-4 gap-2 mb-2 opacity-50">
                <div>2024-01-{10+i}</div>
                <div>#88{392+i}</div>
                <div className="text-red-900">$ Error</div>
                <div>???</div>
              </div>
            ))}
            <div className="mt-8 flex items-center justify-center gap-2 text-red-500 font-bold text-base">
              <FileSpreadsheet className="w-6 h-6" />
              <span>Manual Updates = Chaos</span>
            </div>
          </div>
        </div>

        {/* MIDDLE ICON */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden md:flex items-center justify-center w-12 h-12 bg-neutral-800 rounded-full border border-neutral-700 shadow-xl">
          <ArrowRightLeft className="w-5 h-5 text-white" />
        </div>

        {/* RIGHT: THE SOLUTION (CALYXRA) */}
        <div className="relative group p-1 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-[0_0_40px_rgba(37,99,235,0.2)]">
          <div className="absolute -top-4 right-6 px-4 py-1 bg-blue-600 text-white text-xs font-bold uppercase rounded-full shadow-lg">
            The Calyxra Way (Profitable)
          </div>
          <div className="bg-neutral-900 rounded-xl p-6 h-[400px] flex flex-col relative overflow-hidden">
             <div className="flex justify-between items-center mb-6">
                <div>
                  <div className="text-neutral-400 text-xs uppercase tracking-wider">Total Revenue</div>
                  <div className="text-3xl font-bold text-white">$124,500</div>
                </div>
                <div className="px-3 py-1 bg-green-500/20 text-green-400 rounded-lg text-sm font-bold flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" /> +15%
                </div>
             </div>
             
             <div className="flex items-end justify-between h-40 gap-2 mb-6">
                {[40, 65, 45, 80, 55, 90, 100].map((h, i) => (
                  <div key={i} style={{height: `${h}%`}} className="w-full bg-blue-500/80 rounded-t-md hover:bg-blue-400 transition-colors"></div>
                ))}
             </div>

             <div className="mt-auto p-4 bg-neutral-800/50 rounded-lg border border-white/5">
                <div className="flex items-center gap-3">
                   <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                   <span className="text-sm text-neutral-300">Live Insights: <strong>Competitor raised prices by 5%</strong></span>
                </div>
             </div>
          </div>
        </div>

      </div>
    </div>
  </section>
);

// 4. AI Assistant
const AiAssistant = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    setIsLoading(true);
    setResponse(null);
    try {
      const res = await fetch('/api/ai', {
        method: 'POST',
        body: JSON.stringify({ message: query }),
        headers: { 'Content-Type': 'application/json' }
      });
      const data = await res.json();
      setResponse(data.reply);
    } catch (err) {
      setResponse("System offline. Please check your connection.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div id="ai-demo" className="w-full max-w-4xl mx-auto my-24 px-6">
      <div className="relative rounded-2xl border border-white/10 bg-neutral-900/50 overflow-hidden shadow-2xl shadow-blue-900/20">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
        <div className="p-8 md:p-12 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
            <Sparkles className="w-3 h-3" />
            Try It Yourself
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ask Calyxra AI</h2>
          <p className="text-neutral-400 mb-8 max-w-lg mx-auto">
            Test our AI knowledge. Ask about our services, founders, or general analytics concepts.
          </p>

          <div className="max-w-xl mx-auto">
            <form onSubmit={handleSubmit} className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative flex items-center bg-black rounded-lg border border-neutral-800 focus-within:border-neutral-600 p-1">
                <input 
                  type="text" 
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="e.g., Who founded Calyxra?" 
                  className="flex-1 bg-transparent text-white px-4 py-3 outline-none placeholder-neutral-600"
                />
                <button disabled={isLoading} className="p-3 bg-neutral-800 hover:bg-neutral-700 rounded-md text-white transition-colors disabled:opacity-50">
                  {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                </button>
              </div>
            </form>

            {response && (
              <div className="mt-6 text-left animate-in fade-in slide-in-from-bottom-2">
                <div className="bg-neutral-800/50 border border-white/5 rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-2 text-blue-400 text-sm font-semibold">
                    <Sparkles className="w-4 h-4" /> Calyxra Response
                  </div>
                  <p className="text-neutral-200 leading-relaxed whitespace-pre-wrap">{response}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// 5. Service Modal
const ServiceModal = ({ service, onClose }: { service: Service; onClose: () => void }) => (
  <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200" onClick={onClose}>
    <div className="relative w-full max-w-lg bg-neutral-900 border border-white/10 rounded-2xl p-8 shadow-2xl" onClick={(e) => e.stopPropagation()}>
      <button onClick={onClose} className="absolute top-4 right-4 p-2 text-neutral-500 hover:text-white bg-neutral-800 rounded-full transition-colors">
        <X className="w-5 h-5" />
      </button>
      <div className="mb-6 inline-flex p-3 rounded-xl bg-neutral-800/50">
        {service.icon}
      </div>
      <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
      <p className="text-neutral-400 leading-relaxed mb-6">{service.fullDesc}</p>
      
      <div className="space-y-3">
        <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Key Features</h4>
        {service.features.map((feature, idx) => (
          <div key={idx} className="flex items-center gap-3 text-neutral-300">
            <CheckCircle2 className="w-4 h-4 text-green-500" />
            <span>{feature}</span>
          </div>
        ))}
      </div>
      
      <button onClick={onClose} className="w-full mt-8 py-3 bg-white text-black font-bold rounded-lg hover:bg-neutral-200 transition-colors">
        Close
      </button>
    </div>
  </div>
);

// --- MAIN PAGE ---

export default function Home() {
  const [activeService, setActiveService] = useState<Service | null>(null);

  return (
    <main className="min-h-screen bg-neutral-950 text-white selection:bg-blue-500/30">
      <Navbar />

      <HeroSales />
      <ComparisonSection />

      {/* SERVICES */}
      <section id="services" className="py-24 px-6 bg-neutral-900/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Expertise</h2>
            <p className="text-neutral-400">Comprehensive solutions for the data-driven era.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div key={service.id} className="group p-8 rounded-2xl bg-neutral-900 border border-white/5 hover:border-white/10 transition-all hover:-translate-y-1">
                <div className="mb-6 p-4 rounded-xl bg-neutral-800/50 w-fit group-hover:bg-blue-500/10 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-neutral-400 mb-6 text-sm leading-relaxed">{service.shortDesc}</p>
                <button 
                  onClick={() => setActiveService(service)}
                  className="text-sm font-bold text-white flex items-center gap-2 hover:gap-3 transition-all"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI DEMO */}
      <AiAssistant />

      {/* PORTFOLIO MOCKUPS */}
      <section id="portfolio" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
              <p className="text-neutral-400">Real results we achieved for our clients.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {PORTFOLIO.map((item) => (
              <div key={item.id} className="relative group overflow-hidden rounded-2xl bg-neutral-900 border border-white/10 aspect-[4/3]">
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.color} blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity`}></div>
                  
                  {/* Chart Mockup */}
                  <div className="flex items-end gap-2 h-32 mb-6 opacity-50 group-hover:opacity-80 transition-opacity duration-500">
                    <div className="w-1/5 bg-white/10 rounded-t h-[40%]"></div>
                    <div className="w-1/5 bg-white/20 rounded-t h-[70%]"></div>
                    <div className="w-1/5 bg-white/30 rounded-t h-[50%]"></div>
                    <div className="w-1/5 bg-gradient-to-t from-blue-500 to-cyan-400 rounded-t h-[90%]"></div>
                    <div className="w-1/5 bg-white/10 rounded-t h-[60%]"></div>
                  </div>

                  <div>
                    <div className="text-xs font-medium text-neutral-400 mb-1 uppercase tracking-wider">{item.category}</div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="text-white font-mono">{item.metric} Revenue</span>
                      <span className={`px-2 py-0.5 rounded text-xs font-bold ${item.growth.startsWith('+') ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                        {item.growth}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section id="about" className="py-24 px-6 bg-neutral-900/30 border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Meet the Founders</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Founder 1: Lukian */}
            <div className="bg-neutral-900 border border-white/5 rounded-2xl p-8 relative overflow-hidden group hover:border-white/10 transition-colors">
               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
               <div className="flex items-start gap-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-neutral-700 to-neutral-800 flex items-center justify-center text-xl font-bold text-white/30 shrink-0">
                    LK
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-1">Lukian Kononchuk</h3>
                    <p className="text-blue-400 font-medium text-sm mb-4">Co-Founder & Lead Data Architect</p>
                    <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                      Specialist in SQL optimization and high-load data pipelines. 
                      Focused on building robust backend infrastructure for analytics.
                    </p>
                    <div className="flex gap-2 flex-wrap">
                       <span className="px-2 py-1 bg-white/5 text-xs rounded text-neutral-300">SQL</span>
                       <span className="px-2 py-1 bg-white/5 text-xs rounded text-neutral-300">Python</span>
                       <span className="px-2 py-1 bg-white/5 text-xs rounded text-neutral-300">BigQuery</span>
                    </div>
                  </div>
               </div>
            </div>

            {/* Founder 2: Oleh */}
            <div className="bg-neutral-900 border border-white/5 rounded-2xl p-8 relative overflow-hidden group hover:border-white/10 transition-colors">
               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500"></div>
               <div className="flex items-start gap-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-neutral-700 to-neutral-800 flex items-center justify-center text-xl font-bold text-white/30 shrink-0">
                    OP
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-1">Oleh Poberezhnychenko</h3>
                    <p className="text-purple-400 font-medium text-sm mb-4">Co-Founder & Business Strategist</p>
                    <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                      Expert in translating business needs into data solutions.
                      Ensures that every dashboard delivers clear ROI and actionable insights.
                    </p>
                    <div className="flex gap-2 flex-wrap">
                       <span className="px-2 py-1 bg-white/5 text-xs rounded text-neutral-300">Strategy</span>
                       <span className="px-2 py-1 bg-white/5 text-xs rounded text-neutral-300">Tableau</span>
                       <span className="px-2 py-1 bg-white/5 text-xs rounded text-neutral-300">Sales</span>
                    </div>
                  </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* CONTACT FORM (With Formspree) */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-neutral-400">Ready to stop guessing and start growing?</p>
          </div>

          <form 
            action="https://formspree.io/f/xojajjya" 
            method="POST"
            className="space-y-4"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <input 
                type="text" 
                name="name"
                required
                placeholder="Name" 
                className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:border-blue-500 outline-none transition-colors" 
              />
              <input 
                type="email" 
                name="email"
                required
                placeholder="Email" 
                className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:border-blue-500 outline-none transition-colors" 
              />
            </div>
            <textarea 
              name="message"
              required
              rows={4} 
              placeholder="Tell us about your project..." 
              className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:border-blue-500 outline-none transition-colors"
            ></textarea>
            <button type="submit" className="w-full bg-white text-black font-bold py-4 rounded-lg hover:bg-neutral-200 transition-colors shadow-lg shadow-white/10">
              Send Message
            </button>
          </form>

          <div className="mt-12 flex items-center justify-center gap-2 text-neutral-500 text-sm">
            <Mail className="w-4 h-4" />
            <a href="mailto:lu1ro.sql@gmail.com" className="hover:text-white transition-colors">lu1ro.sql@gmail.com</a>
          </div>
        </div>
      </section>

      <footer className="py-8 text-center text-neutral-600 text-sm border-t border-white/5">
        <p>&copy; {new Date().getFullYear()} Calyxra. All rights reserved.</p>
      </footer>

      {/* MODALS */}
      {activeService && (
        <ServiceModal service={activeService} onClose={() => setActiveService(null)} />
      )}
    </main>
  );
}