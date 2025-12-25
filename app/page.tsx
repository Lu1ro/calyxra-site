'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  Send, Loader2, Sparkles, BarChart3, Database, Zap, X, Menu, Mail, 
  ArrowRight, CheckCircle2, TrendingUp, Calendar, Linkedin, LayoutDashboard
} from 'lucide-react';
import { 
  ResponsiveContainer, ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, BarChart 
} from 'recharts';

// --- DATA FOR CHARTS ---
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

// --- SUB-COMPONENTS ---

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3 font-bold text-2xl text-white cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <Image src="/logo.png" alt="Calyxra" width={32} height={32} />
          <span className="tracking-tighter uppercase">Calyxra</span>
        </div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-neutral-400">
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#process" className="hover:text-white transition-colors">Process</a>
          <a href="#examples" className="hover:text-white transition-colors">Examples</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
        </div>

        <a href="https://calendly.com/calyxra-team/30min" target="_blank" className="hidden md:block px-6 py-2.5 bg-blue-600 text-white text-sm font-bold rounded-full hover:bg-blue-500 transition-all">
          Book a call
        </a>

        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black border-b border-white/10 p-6 flex flex-col gap-4 text-center">
          <a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a>
          <a href="#process" onClick={() => setIsMenuOpen(false)}>Process</a>
          <a href="#examples" onClick={() => setIsMenuOpen(false)}>Examples</a>
          <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
          <a href="https://calendly.com/calyxra-team/30min" className="bg-blue-600 py-3 rounded-xl font-bold">Book Call</a>
        </div>
      )}
    </nav>
  );
};

const Footer = () => (
  <footer className="py-20 border-t border-white/10 px-6 bg-neutral-950">
    <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 items-center text-center md:text-left">
      <div>
        <div className="text-2xl font-bold mb-4 uppercase tracking-tighter">Calyxra</div>
        <p className="text-neutral-500 text-sm">Building decision-ready dashboards for world-class founders.</p>
      </div>
      <div className="flex justify-center gap-6">
        <a href="#" className="text-neutral-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
        <a href="mailto:contact@calyxra.com" className="text-neutral-400 hover:text-white transition-colors"><Mail size={20} /></a>
      </div>
      <div className="text-neutral-500 text-sm md:text-right">
        <p>© 2025 Calyxra. All rights reserved.</p>
        <p className="mt-2 text-xs opacity-50 underline cursor-pointer">Privacy Policy</p>
      </div>
    </div>
  </footer>
);

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      <Header />

      {/* HERO */}
      <section className="relative pt-48 pb-32 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-600/10 blur-[120px] rounded-full"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8 leading-[0.9]">
            Stop guessing. <br />
            <span className="text-blue-500">Start deciding.</span>
          </h1>
          <p className="text-xl md:text-2xl text-neutral-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            We turn messy Excel sheets and SQL databases into a single source of truth — Power BI dashboards built for founders who need to trust their numbers.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="https://calendly.com/calyxra-team/30min" target="_blank" className="w-full sm:w-auto px-10 py-5 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-500 transition-all flex items-center justify-center gap-3 text-lg shadow-xl shadow-blue-600/20">
              <Calendar className="w-6 h-6" /> Book my free review call
            </a>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm font-semibold text-neutral-500 uppercase tracking-widest">
            <span className="flex items-center gap-2"><CheckCircle2 size={18} className="text-blue-500" /> Typically 1–3 weeks</span>
            <span className="flex items-center gap-2"><CheckCircle2 size={18} className="text-blue-500" /> From €750</span>
            <span className="flex items-center gap-2"><CheckCircle2 size={18} className="text-blue-500" /> Direct with Lukian & Oleh</span>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="py-12 border-y border-white/5 bg-neutral-900/20 text-center">
         <p className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-6">Tools we work with</p>
         <div className="flex flex-wrap justify-center gap-10 md:gap-16 text-neutral-400 font-bold text-lg grayscale opacity-70">
            <span>Power BI</span><span>Excel</span><span>SQL</span><span>BigQuery</span><span>Python</span>
         </div>
      </div>

      {/* PROBLEM */}
      <section id="problem" className="py-32 px-6 scroll-mt-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-1.5 bg-red-500/10 text-red-500 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-red-500/20">The Pain</div>
          <h2 className="text-4xl md:text-6xl font-bold mb-8">Excel is slowing you down.</h2>
          <p className="text-neutral-400 text-xl leading-relaxed">
            Manual reporting creates inconsistent KPIs, slow decisions, and "multiple versions of truth." We consolidate data so your team can focus on growth, not fixing formulas.
          </p>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-32 px-6 bg-neutral-950 scroll-mt-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="relative aspect-square bg-neutral-900 rounded-3xl border border-white/10 flex items-center justify-center overflow-hidden">
             {/* Placeholder for Lukian & Oleh photo */}
             <div className="text-neutral-700 text-lg italic">Founders Photo Placeholder</div>
             <div className="absolute bottom-6 left-6 right-6 p-6 bg-black/60 backdrop-blur-md rounded-2xl border border-white/10">
                <p className="font-bold text-lg">Lukian & Oleh</p>
                <p className="text-sm text-neutral-400">Data Analytics Founders @ Calyxra</p>
             </div>
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-8 italic">"We built Calyxra because we saw founders drowning in tabs."</h2>
            <p className="text-neutral-400 text-lg mb-8 leading-relaxed">
              We are a specialized team focused on one thing: turning data chaos into executive-level clarity. No corporate fluff—just direct communication and dashboards that actually drive revenue.
            </p>
            <div className="flex gap-4">
              <CheckCircle2 className="text-blue-500 shrink-0" />
              <p className="text-neutral-300">100% focused on Power BI ecosystem</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-32 px-6 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-20 text-center">Services built for scale</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <LayoutDashboard size={40} className="text-blue-400" />, title: 'Power BI Dashboards', desc: 'Automated KPI tracking for revenue, funnel performance, and operational health.' },
              { icon: <Database size={40} className="text-purple-400" />, title: 'Data Cleaning', desc: 'SQL-based modeling to ensure your numbers match across all your platforms.' },
              { icon: <Zap size={40} className="text-yellow-400" />, title: 'Reporting Automation', desc: 'Eliminate manual data entry forever by connecting your sources directly.' }
            ].map((s, i) => (
              <div key={i} className="p-10 bg-neutral-900/50 border border-white/5 rounded-3xl hover:border-blue-500/30 transition-all group">
                <div className="mb-8 group-hover:scale-110 transition-transform">{s.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
                <p className="text-neutral-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="py-32 px-6 border-y border-white/5 bg-neutral-950 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-20 text-center text-blue-500 tracking-tighter uppercase">From chaos to clarity</h2>
          <div className="grid md:grid-cols-4 gap-12">
            {[
              { n: '01', t: 'KPI review call', d: 'Mapping what to track.' },
              { n: '02', t: 'Data audit', d: 'Identifying gaps in your data.' },
              { n: '03', t: 'Prototype → Build', d: 'Developing your dashboard.' },
              { n: '04', t: 'Handover', d: 'Training & full documentation.' }
            ].map((s, i) => (
              <div key={i} className="relative">
                <div className="text-6xl font-black text-white/5 absolute -top-10 left-0 leading-none">{s.n}</div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <span className="text-blue-500 text-xs font-mono">{s.n}</span> {s.t}
                  </h3>
                  <p className="text-neutral-500 text-sm">{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXAMPLES */}
      <section id="examples" className="py-32 px-6 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-20 text-center">Decision-ready examples</h2>
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-6">
              <div className="aspect-[4/3] bg-neutral-900 rounded-3xl border border-white/10 p-6 relative group overflow-hidden">
                <div className="absolute top-8 right-8 z-10">
                    <div className="px-3 py-1.5 bg-red-500/20 border border-red-500/50 text-red-300 text-[10px] font-bold rounded-lg backdrop-blur-md flex items-center gap-2 uppercase tracking-widest">
                        <ArrowRight className="w-3 h-3" /> 30% Conversion Drop!
                    </div>
                </div>
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart data={funnelData}>
                    <CartesianGrid stroke="#333" vertical={false} strokeDasharray="3 3" />
                    <XAxis dataKey="name" stroke="#666" tick={{fontSize: 10}} axisLine={false} />
                    <YAxis stroke="#666" tick={{fontSize: 10}} axisLine={false} />
                    <Tooltip contentStyle={{backgroundColor: '#000', border: '1px solid #333'}} />
                    <Bar dataKey="value" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={40} />
                    <Line type="monotone" dataKey="rate" stroke="#a855f7" strokeWidth={3} dot={{r: 4}} />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>
              <p className="text-2xl font-bold">Funnel Performance</p>
              <p className="text-neutral-500">Spotting drop-offs across sales stages instantly to optimize marketing spend.</p>
            </div>
            <div className="space-y-6">
              <div className="aspect-[4/3] bg-neutral-900 rounded-3xl border border-white/10 p-6 relative group overflow-hidden">
                 <div className="absolute top-8 left-8 z-10">
                    <div className="px-3 py-1.5 bg-blue-500/20 border border-blue-500/50 text-blue-300 text-[10px] font-bold rounded-lg backdrop-blur-md uppercase tracking-widest">
                        VIP Segment = 60% Revenue
                    </div>
                </div>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={revenueData}>
                    <CartesianGrid stroke="#333" vertical={false} strokeDasharray="3 3" />
                    <XAxis dataKey="month" stroke="#666" tick={{fontSize: 10}} axisLine={false} />
                    <YAxis stroke="#666" tick={{fontSize: 10}} axisLine={false} />
                    <Tooltip contentStyle={{backgroundColor: '#000', border: '1px solid #333'}} />
                    <Bar dataKey="Loyal" stackId="a" fill="#3b82f6" />
                    <Bar dataKey="VIP" stackId="a" fill="#a855f7" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <p className="text-2xl font-bold">Revenue Drivers</p>
              <p className="text-neutral-500">Visualizing customer lifetime value cohorts to prioritize high-value segments.</p>
            </div>
          </div>
        </div>
      </section>

      {/* AI DEMO */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto rounded-[3rem] border border-blue-500/20 bg-gradient-to-b from-blue-600/10 to-transparent p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-10">
            <Sparkles size={120} className="text-blue-500" />
          </div>
          <Sparkles className="mx-auto mb-8 text-blue-500" size={48} />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Calyxra AI Assistant</h2>
          <p className="text-neutral-400 text-lg mb-10 max-w-lg mx-auto">
            Experience the future. Ask questions about your business data in plain English and get instant visual answers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <button className="px-10 py-5 bg-white text-black font-bold rounded-2xl hover:bg-neutral-200 transition-all">Try AI Demo</button>
             <button className="px-10 py-5 bg-transparent border border-white/10 font-bold rounded-2xl">How it works</button>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-32 px-6 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-20 text-center">Transparent engagement</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-12 bg-neutral-900/50 rounded-[2.5rem] border border-white/5 flex flex-col">
              <h3 className="text-2xl font-bold mb-2">Starter</h3>
              <div className="text-4xl font-bold mb-8 italic">from €750</div>
              <ul className="space-y-4 mb-12 flex-1 text-neutral-400">
                <li className="flex items-center gap-2 text-sm"><CheckCircle2 size={16} className="text-blue-500" /> 1 KPI dashboard</li>
                <li className="flex items-center gap-2 text-sm"><CheckCircle2 size={16} className="text-blue-500" /> Basic data model</li>
                <li className="flex items-center gap-2 text-sm"><CheckCircle2 size={16} className="text-blue-500" /> Handover & Training</li>
              </ul>
              <a href="https://calendly.com/calyxra-team/30min" className="w-full py-4 bg-white text-black text-center font-bold rounded-xl hover:bg-neutral-200">Start Project</a>
            </div>
            <div className="p-12 bg-blue-600 rounded-[2.5rem] flex flex-col relative scale-105 shadow-2xl shadow-blue-600/20">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-blue-600 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Most Popular</div>
              <h3 className="text-2xl font-bold mb-2">Growth</h3>
              <div className="text-4xl font-bold mb-8 italic text-white">from €2,400</div>
              <ul className="space-y-4 mb-12 flex-1 text-blue-100">
                <li className="flex items-center gap-2 text-sm"><CheckCircle2 size={16} /> 3-4 Dashboards</li>
                <li className="flex items-center gap-2 text-sm"><CheckCircle2 size={16} /> Advanced SQL Modeling</li>
                <li className="flex items-center gap-2 text-sm"><CheckCircle2 size={16} /> Automated Refresh</li>
              </ul>
              <a href="https://calendly.com/calyxra-team/30min" className="w-full py-4 bg-black text-white text-center font-bold rounded-xl">Scale Now</a>
            </div>
            <div className="p-12 bg-neutral-900/50 rounded-[2.5rem] border border-white/5 flex flex-col">
              <h3 className="text-2xl font-bold mb-2">Custom</h3>
              <div className="text-4xl font-bold mb-8 italic uppercase">Bespoke</div>
              <ul className="space-y-4 mb-12 flex-1 text-neutral-400">
                <li className="flex items-center gap-2 text-sm"><CheckCircle2 size={16} className="text-blue-500" /> Multi-source integration</li>
                <li className="flex items-center gap-2 text-sm"><CheckCircle2 size={16} className="text-blue-500" /> Ongoing support</li>
                <li className="flex items-center gap-2 text-sm"><CheckCircle2 size={16} className="text-blue-500" /> Custom automation</li>
              </ul>
              <a href="https://calendly.com/calyxra-team/30min" className="w-full py-4 bg-white text-black text-center font-bold rounded-xl">Contact Us</a>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-40 px-6 bg-blue-600 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10 pattern-grid-white"></div>
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter">Ready to trust your numbers?</h2>
          <a href="https://calendly.com/calyxra-team/30min" target="_blank" className="inline-flex items-center gap-4 px-12 py-6 bg-white text-blue-600 font-bold rounded-2xl hover:scale-105 transition-transform text-xl">
            Book free review call <ArrowRight />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}