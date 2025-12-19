'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  Send, Loader2, Sparkles, BarChart3, Database, Zap, X, Mail, 
  ArrowRight, CheckCircle2, TrendingUp, FileSpreadsheet, ArrowRightLeft, Calendar
} from 'lucide-react';
import { 
  ResponsiveContainer, ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart 
} from 'recharts';

// --- DATA FOR VISUALIZATIONS ---
const funnelData = [
  { name: 'Visitors', value: 15000, rate: 100 },
  { name: 'Leads', value: 6500, rate: 43 },
  { name: 'MQL', value: 3200, rate: 49 },
  { name: 'SQL', value: 980, rate: 30 },
  { name: 'Closed', value: 450, rate: 45 },
];

const revenueData = [
  { month: 'Jan', New: 4000, Loyal: 12000, VIP: 18000 },
  { month: 'Feb', New: 3500, Loyal: 13000, VIP: 21000 },
  { month: 'Mar', New: 5000, Loyal: 14000, VIP: 24000 },
  { month: 'Apr', New: 4800, Loyal: 15500, VIP: 28000 },
  { month: 'May', New: 6000, Loyal: 16000, VIP: 32000 },
];

const darkTooltipStyle = {
    backgroundColor: '#171717',
    border: '1px solid #333',
    borderRadius: '8px',
    color: '#fff',
    fontSize: '12px'
};

// --- COMPONENTS ---

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
    <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
      <div className="flex items-center gap-3 font-bold text-xl text-white cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
        <Image src="/logo.png" alt="Calyxra" width={40} height={40} className="w-10 h-10 object-contain" />
        <span>Calyxra</span>
      </div>
      <div className="hidden md:flex gap-6 text-sm font-medium text-neutral-400">
        <a href="#problem" className="hover:text-white transition-colors">The Problem</a>
        <a href="#services" className="hover:text-white transition-colors">Services</a>
        <a href="#process" className="hover:text-white transition-colors">Process</a>
        <a href="#examples" className="hover:text-white transition-colors">Examples</a>
        <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
      </div>
      <a href="https://calendly.com/calyxra-team/30min" target="_blank" rel="noopener noreferrer" className="px-5 py-2 bg-white text-black text-xs font-bold rounded-full hover:bg-neutral-200 transition-colors">
        Book a call
      </a>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative pt-32 pb-20 px-6">
    <div className="max-w-4xl mx-auto text-center relative z-10">
      <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white">
        Stop guessing. <br />
        <span className="text-blue-500">Start deciding.</span>
      </h1>
      <p className="text-lg md:text-xl text-neutral-400 mb-10 max-w-2xl mx-auto leading-relaxed">
        We turn messy Excel sheets and SQL databases into a single source of truth — Power BI dashboards built for founders who need to trust their numbers.
      </p>
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
        <a href="https://calendly.com/calyxra-team/30min" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-500 transition-all flex items-center gap-2 shadow-lg shadow-blue-600/20">
          <Calendar className="w-5 h-5" /> Book a free 30-min KPI review
        </a>
        <a href="#examples" className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold rounded-lg hover:bg-white/5 transition-colors">
          View dashboard examples
        </a>
      </div>
      <div className="flex flex-wrap justify-center gap-6 text-sm text-neutral-500">
        <span className="flex items-center gap-2">✓ Typically 1–3 weeks delivery</span>
        <span className="flex items-center gap-2">✓ Starter packages from €750</span>
        <span className="flex items-center gap-2">✓ Direct communication with Lukian & Oleh</span>
      </div>
    </div>
  </section>
);

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
      <div className="relative rounded-2xl border border-white/10 bg-neutral-900/50 p-8 md:p-12 text-center shadow-2xl overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
          <Sparkles className="w-3 h-3" /> Calyxra AI Demo
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ask our AI Assistant</h2>
        <p className="text-neutral-400 mb-8 max-w-lg mx-auto">
          Test our knowledge. Ask about our process, tools, or founders (Lukian & Oleh).
        </p>

        <form onSubmit={handleSubmit} className="max-w-xl mx-auto relative group">
          <div className="flex items-center bg-black rounded-lg border border-neutral-800 p-1">
            <input 
              type="text" 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="e.g., What is your delivery timeline?" 
              className="flex-1 bg-transparent text-white px-4 py-3 outline-none"
            />
            <button disabled={isLoading} className="p-3 bg-neutral-800 hover:bg-neutral-700 rounded-md text-white disabled:opacity-50">
              {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
            </button>
          </div>
        </form>

        {response && (
          <div className="mt-6 text-left bg-neutral-800/50 border border-white/5 rounded-xl p-6 animate-in fade-in slide-in-from-bottom-2">
            <p className="text-neutral-200 leading-relaxed text-sm">{response}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30 scroll-smooth">
      <Navbar />
      <Hero />
      
      {/* Tool Bar */}
      <div className="py-10 border-y border-white/5 bg-neutral-900/20 text-center">
         <p className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-4">Tools we work with</p>
         <div className="flex flex-wrap justify-center gap-8 text-neutral-400 font-medium">
            <span>Power BI</span><span>Excel</span><span>Google Sheets</span><span>SQL</span><span>BigQuery</span><span>Python</span>
         </div>
      </div>

      {/* PROBLEM SECTION */}
      <section id="problem" className="py-32 px-6 bg-neutral-950 scroll-mt-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Excel is slowing you down.</h2>
          <p className="text-neutral-400 text-lg leading-relaxed">
            Manual reporting creates inconsistent KPIs, slow decisions, and "multiple versions of truth." 
            We help you consolidate data and build dashboards your team can actually rely on.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 px-6 scroll-mt-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
            <div className="p-8 bg-neutral-900 border border-white/5 rounded-2xl">
                <BarChart3 className="w-10 h-10 text-blue-400 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Power BI Dashboards</h3>
                <p className="text-sm text-neutral-400">Automated KPI tracking for revenue and growth.</p>
            </div>
            <div className="p-8 bg-neutral-900 border border-white/5 rounded-2xl">
                <Database className="w-10 h-10 text-purple-400 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Data Cleaning</h3>
                <p className="text-sm text-neutral-400">SQL modeling to ensure your numbers are consistent.</p>
            </div>
            <div className="p-8 bg-neutral-900 border border-white/5 rounded-2xl">
                <Zap className="w-10 h-10 text-yellow-400 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Reporting Automation</h3>
                <p className="text-sm text-neutral-400">Eliminate manual data entry work forever.</p>
            </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="py-24 px-6 border-y border-white/5 scroll-mt-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-16 text-center">From chaos to clarity in 4 steps</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { n: '1', t: 'KPI review call', d: 'Mapping what to track.' },
              { n: '2', t: 'Data audit', d: 'Identifying gaps in your data.' },
              { n: '3', t: 'Prototype → Build', d: 'Developing the dashboard.' },
              { n: '4', t: 'Handover', d: 'Training & documentation.' }
            ].map((s, i) => (
              <div key={i} className="relative p-6 bg-neutral-900 rounded-xl border border-white/5">
                <span className="text-blue-500 font-bold text-lg mb-4 block">0{s.n}</span>
                <h3 className="font-bold mb-2">{s.t}</h3>
                <p className="text-sm text-neutral-500">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI ASSISTANT SECTION */}
      <AiAssistant />

      {/* EXAMPLES (Visualizations) */}
      <section id="examples" className="py-24 px-6 bg-neutral-950 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-16 text-center">Decision-ready examples</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <div className="aspect-[4/3] bg-neutral-900/50 rounded-xl border border-white/10 relative p-4">
                <div className="absolute top-[40%] right-[10%] z-10">
                    <div className="px-3 py-1.5 bg-red-500/20 border border-red-500/50 text-red-300 text-xs font-bold rounded shadow-lg backdrop-blur-md flex items-center gap-2">
                        <ArrowRight className="w-3 h-3" /> 30% Conversion Drop!
                    </div>
                </div>
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart data={funnelData}>
                    <CartesianGrid stroke="#333" vertical={false} />
                    <XAxis dataKey="name" stroke="#666" tick={{fontSize: 10}} axisLine={false} />
                    <YAxis stroke="#666" tick={{fontSize: 10}} axisLine={false} />
                    <Tooltip contentStyle={darkTooltipStyle} />
                    <Bar dataKey="value" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={40} />
                    <Line type="monotone" dataKey="rate" stroke="#a855f7" strokeWidth={2} dot={{r: 3}} />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>
              <p className="font-bold">Funnel Performance</p>
              <p className="text-sm text-neutral-500">Spotting drop-offs across sales stages instantly.</p>
            </div>
            <div className="space-y-4">
              <div className="aspect-[4/3] bg-neutral-900/50 rounded-xl border border-white/10 relative p-4">
                 <div className="absolute top-[15%] left-[35%] z-10">
                    <div className="px-3 py-1.5 bg-blue-500/20 border border-blue-500/50 text-blue-300 text-xs font-bold rounded shadow-lg backdrop-blur-md">
                        VIP Segment = 60% Revenue
                    </div>
                </div>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={revenueData}>
                    <CartesianGrid stroke="#333" vertical={false} />
                    <XAxis dataKey="month" stroke="#666" tick={{fontSize: 10}} axisLine={false} />
                    <YAxis stroke="#666" tick={{fontSize: 10}} axisLine={false} />
                    <Tooltip contentStyle={darkTooltipStyle} />
                    <Bar dataKey="Loyal" stackId="a" fill="#3b82f6" />
                    <Bar dataKey="VIP" stackId="a" fill="#a855f7" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <p className="font-bold">Revenue Drivers</p>
              <p className="text-sm text-neutral-500">Analyzing which customer segments drive your growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-24 px-6 scroll-mt-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-16 text-center">Transparent engagement</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-neutral-900 rounded-2xl border border-white/5">
              <h3 className="text-xl font-bold mb-2">Starter</h3>
              <div className="text-2xl font-bold mb-4">from €750</div>
              <ul className="text-sm text-neutral-400 space-y-3">
                <li>• 1 KPI dashboard</li>
                <li>• Basic data model</li>
                <li>• Handover & Training</li>
              </ul>
            </div>
            <div className="p-8 bg-blue-900/20 rounded-2xl border border-blue-500/30 relative">
              <div className="absolute -top-3 left-6 px-3 py-1 bg-blue-600 text-[10px] font-bold uppercase rounded-full">Most Popular</div>
              <h3 className="text-xl font-bold mb-2">Growth</h3>
              <div className="text-2xl font-bold mb-4">from €2,400</div>
              <ul className="text-sm text-neutral-400 space-y-3">
                <li>• 2-3 dashboards</li>
                <li>• Advanced modeling</li>
                <li>• Auto-refresh setup</li>
              </ul>
            </div>
            <div className="p-8 bg-neutral-900 rounded-2xl border border-white/5">
              <h3 className="text-xl font-bold mb-2">Custom</h3>
              <div className="text-2xl font-bold mb-4">Bespoke</div>
              <ul className="text-sm text-neutral-400 space-y-3">
                <li>• Multi-source integration</li>
                <li>• Full automation</li>
                <li>• Ongoing support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 px-6 bg-blue-600">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to trust your numbers?</h2>
          <p className="text-blue-100 text-lg mb-10">
            Book a free 30-minute KPI review — we’ll map what to track and the fastest path to a reliable dashboard.
          </p>
          <a href="https://calendly.com/calyxra-team/30min" target="_blank" rel="noopener noreferrer" className="px-10 py-5 bg-white text-blue-600 font-bold rounded-xl hover:shadow-2xl transition-all inline-block">
            Book my free review call
          </a>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-white/5 text-center text-neutral-600 text-sm">
        <p>&copy; {new Date().getFullYear()} Calyxra. Built for founders by founders.</p>
      </footer>
    </main>
  );
}