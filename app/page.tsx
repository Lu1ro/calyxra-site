'use client';

import React from 'react';
import Image from 'next/image';
import { 
  BarChart3, Database, Zap, Calendar
} from 'lucide-react';
// Імпортуємо компоненти для графіків
import { 
  ResponsiveContainer, ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Area, BarChart 
} from 'recharts';

// --- DUMMY DATA FOR CHARTS ---

// Дані для воронки (Funnel)
const funnelData = [
  { name: 'Visitors', value: 15000, rate: 100 },
  { name: 'Leads', value: 6500, rate: 43 },
  { name: 'MQL', value: 3200, rate: 49 },
  { name: 'SQL', value: 980, rate: 30 }, // Тут найбільший провал
  { name: 'Closed', value: 450, rate: 45 },
];

// Дані для сегментації доходу
const revenueData = [
  { month: 'Jan', New: 4000, Loyal: 12000, VIP: 18000 },
  { month: 'Feb', New: 3500, Loyal: 13000, VIP: 21000 },
  { month: 'Mar', New: 5000, Loyal: 14000, VIP: 24000 },
  { month: 'Apr', New: 4800, Loyal: 15500, VIP: 28000 },
  { month: 'May', New: 6000, Loyal: 16000, VIP: 32000 },
];

// Налаштування стилів для темної теми графіків
const darkTooltipStyle = {
    backgroundColor: '#171717',
    border: '1px solid #333',
    borderRadius: '8px',
    color: '#fff',
    fontSize: '12px'
};

// --- Types ---
interface Service {
  id: string;
  title: string;
  icon: React.ReactNode;
  shortDesc: string;
}

const SERVICES: Service[] = [
  {
    id: 'power-bi',
    title: 'Power BI KPI Dashboards',
    icon: <BarChart3 className="w-6 h-6 text-blue-400" />,
    shortDesc: 'Automated tracking of revenue, growth, and operations.'
  },
  {
    id: 'data-cleaning',
    title: 'Data Cleaning & Modeling',
    icon: <Database className="w-6 h-6 text-purple-400" />,
    shortDesc: 'SQL-based transformations to ensure your numbers are consistent.'
  },
  {
    id: 'automation',
    title: 'Reporting Automation',
    icon: <Zap className="w-6 h-6 text-yellow-400" />,
    shortDesc: 'Reduce manual work by connecting your SQL and Excel data directly.'
  }
];

// --- Components ---

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
    <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
      <div className="flex items-center gap-3 font-bold text-xl text-white cursor-pointer" onClick={() => window.scrollTo(0,0)}>
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
      <a href="https://calendly.com/calyxra-team/30min" target="_blank" className="px-5 py-2 bg-white text-black text-xs font-bold rounded-full hover:bg-neutral-200 transition-colors">
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
        <a href="https://calendly.com/calyxra-team/30min" target="_blank" className="px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-500 transition-all flex items-center gap-2 shadow-lg shadow-blue-600/20">
          <Calendar className="w-5 h-5" /> Book a free 30-min KPI review
        </a>
        <a href="#examples" className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold rounded-lg hover:bg-white/5 transition-colors">
          View dashboard examples
        </a>
      </div>
      <div className="flex flex-wrap justify-center gap-6 text-sm text-neutral-500">
        <span className="flex items-center gap-2">✓ Typically delivered in 1–3 weeks</span>
        <span className="flex items-center gap-2">✓ Starter packages from €750</span>
        <span className="flex items-center gap-2">✓ Direct contact with Lukian & Oleh</span>
      </div>
    </div>
  </section>
);

const Problem = () => (
  <section id="problem" className="py-24 px-6 bg-neutral-950">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Excel is slowing you down.</h2>
      <p className="text-neutral-400 text-lg leading-relaxed">
        Manual reporting creates inconsistent KPIs, slow decisions, and "multiple versions of truth." 
        We help you consolidate data and build dashboards your team can actually rely on.
      </p>
    </div>
  </section>
);

const Process = () => (
  <section id="process" className="py-24 px-6 border-y border-white/5">
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
);

const Pricing = () => (
  <section id="pricing" className="py-24 px-6">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-16 text-center">Transparent engagement</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="p-8 bg-neutral-900 rounded-2xl border border-white/5">
          <h3 className="text-xl font-bold mb-2">Starter</h3>
          <div className="text-2xl font-bold mb-4">from €750</div>
          <ul className="text-sm text-neutral-400 space-y-3 mb-8">
            <li>• 1 KPI dashboard</li>
            <li>• Basic data model</li>
            <li>• Handover & Training</li>
          </ul>
        </div>
        <div className="p-8 bg-blue-900/20 rounded-2xl border border-blue-500/30 relative">
          <div className="absolute -top-3 left-6 px-3 py-1 bg-blue-600 text-[10px] font-bold uppercase rounded-full">Most Popular</div>
          <h3 className="text-xl font-bold mb-2">Growth</h3>
          <div className="text-2xl font-bold mb-4">from €2,400</div>
          <ul className="text-sm text-neutral-400 space-y-3 mb-8">
            <li>• 2-3 dashboards</li>
            <li>• Advanced modeling</li>
            <li>• Auto-refresh setup</li>
          </ul>
        </div>
        <div className="p-8 bg-neutral-900 rounded-2xl border border-white/5">
          <h3 className="text-xl font-bold mb-2">Custom</h3>
          <div className="text-2xl font-bold mb-4">Scoped</div>
          <ul className="text-sm text-neutral-400 space-y-3 mb-8">
            <li>• Multi-source integration</li>
            <li>• Full automation</li>
            <li>• Ongoing support</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      <Navbar />
      <Hero />
      
      <div className="py-10 border-y border-white/5 bg-neutral-900/20 text-center">
         <p className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-4">Tools we work with</p>
         <div className="flex flex-wrap justify-center gap-8 text-neutral-400 font-medium">
            <span>Power BI</span><span>Excel</span><span>Google Sheets</span><span>SQL</span><span>BigQuery</span><span>Python</span>
         </div>
      </div>

      <Problem />

      <section id="services" className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {SERVICES.map((s) => (
            <div key={s.id} className="p-8 bg-neutral-900 border border-white/5 rounded-2xl">
              <div className="mb-4">{s.icon}</div>
              <h3 className="font-bold mb-2">{s.title}</h3>
              <p className="text-sm text-neutral-400">{s.shortDesc}</p>
            </div>
          ))}
        </div>
      </section>

      <Process />

      {/* EXAMPLES (Real Code Visualizations) */}
      <section id="examples" className="py-24 px-6 bg-neutral-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-16 text-center">Decision-ready examples</h2>
          <div className="grid md:grid-cols-2 gap-12">
            
            {/* CHART 1: Funnel Analysis */}
            <div className="space-y-4">
              <div className="aspect-[4/3] bg-neutral-900/50 rounded-xl border border-white/10 relative overflow-hidden p-4">
                {/* Анотація */}
                <div className="absolute top-[40%] right-[15%] z-10">
                    <div className="px-3 py-1.5 bg-red-500/20 border border-red-500/50 text-red-300 text-xs font-bold rounded shadow-lg backdrop-blur-md flex items-center gap-2">
                        <ArrowRight className="w-3 h-3" /> 30% Conversion Drop!
                    </div>
                    <div className="w-0.5 h-8 bg-red-500/50 mx-auto mt-1"></div>
                </div>
                
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart data={funnelData} margin={{ top: 20, right: 20, bottom: 20, left: 0 }}>
                    <CartesianGrid stroke="#333" vertical={false} strokeDasharray="3 3" />
                    <XAxis dataKey="name" stroke="#666" tick={{fontSize: 12}} axisLine={false} tickLine={false} />
                    <YAxis yAxisId="left" stroke="#666" tick={{fontSize: 12}} axisLine={false} tickLine={false} tickFormatter={(value) => `${value/1000}k`} />
                    <YAxis yAxisId="right" orientation="right" stroke="#3b82f6" tick={{fontSize: 12}} axisLine={false} tickLine={false} tickFormatter={(value) => `${value}%`} domain={[0, 100]} hide />
                    <Tooltip contentStyle={darkTooltipStyle} cursor={{fill: 'rgba(255,255,255,0.05)'}} />
                    <Bar yAxisId="left" dataKey="value" name="Volume" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={40} fillOpacity={0.8} />
                    <Line yAxisId="right" type="monotone" dataKey="rate" name="Conversion Rate" stroke="#a855f7" strokeWidth={3} dot={{r: 4, fill: '#a855f7'}} />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>
              <p className="font-bold text-lg">Where the funnel leaks</p>
              <p className="text-sm text-neutral-500 leading-relaxed">We combine volume data (bars) with conversion rates (line) to instantly spot the biggest drop-offs in your sales process.</p>
            </div>

            {/* CHART 2: Revenue Segmentation */}
            <div className="space-y-4">
              <div className="aspect-[4/3] bg-neutral-900/50 rounded-xl border border-white/10 relative overflow-hidden p-4">
                 {/* Анотація */}
                 <div className="absolute top-[15%] left-[35%] z-10">
                    <div className="px-3 py-1.5 bg-blue-500/20 border border-blue-500/50 text-blue-300 text-xs font-bold rounded shadow-lg backdrop-blur-md">
                        VIP Segment = 60% Revenue
                    </div>
                </div>

                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={revenueData} margin={{ top: 20, right: 20, bottom: 20, left: 0 }}>
                    <CartesianGrid stroke="#333" vertical={false} strokeDasharray="3 3" />
                    <XAxis dataKey="month" stroke="#666" tick={{fontSize: 12}} axisLine={false} tickLine={false} />
                    <YAxis stroke="#666" tick={{fontSize: 12}} axisLine={false} tickLine={false} tickFormatter={(value) => `${value/1000}k`} />
                    <Tooltip contentStyle={darkTooltipStyle} cursor={{fill: 'rgba(255,255,255,0.05)'}} />
                    <Legend wrapperStyle={{fontSize: '12px', paddingTop: '10px'}} />
                    <Bar dataKey="New" stackId="a" fill="#64748b" fillOpacity={0.7} />
                    <Bar dataKey="Loyal" stackId="a" fill="#3b82f6" fillOpacity={0.8} />
                    <Bar dataKey="VIP" stackId="a" fill="#a855f7" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <p className="font-bold text-lg">Revenue Drivers</p>
              <p className="text-sm text-neutral-500 leading-relaxed">Stacked segmentation clearly shows which customer cohorts drive real growth, helping you focus your efforts on high-value segments.</p>
            </div>

          </div>
        </div>
      </section>

      <Pricing />

      <section className="py-24 px-6 bg-blue-600">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to trust your numbers?</h2>
          <p className="text-blue-100 text-lg mb-10">
            Book a free 30-minute KPI review — we’ll map what to track and the fastest path to a reliable dashboard.
          </p>
          <a href="https://calendly.com/calyxra-team/30min" target="_blank" className="px-10 py-5 bg-white text-blue-600 font-bold rounded-xl hover:shadow-2xl transition-all inline-block">
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