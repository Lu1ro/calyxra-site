'use client';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { ArrowUpRight, Shield, Database, RefreshCw, BarChart3, TrendingUp, Users } from 'lucide-react';

export default function DashboardsPage() {
  const executiveUrl = "https://lookerstudio.google.com/reporting/388ce53d-d8d2-4b49-8a10-3708aea0ebda";
  const reconciliationUrl = "https://lookerstudio.google.com/reporting/20051360-1a44-4dd0-a0c6-e512944a2da6";
  const channelUrl = "https://lookerstudio.google.com/reporting/c85be51d-9b1b-456e-beb4-5e2739d8c68e";
  const customerUrl = "https://lookerstudio.google.com/reporting/6829a01c-0667-4afb-915e-22d0cf579727";

  const dashboardFeatures = [
    {
      icon: <TrendingUp className="w-5 h-5 text-emerald-600" />,
      title: "Executive Overview",
      desc: "Net Revenue, Margin, AOV, MER — with period-over-period comparison"
    },
    {
      icon: <Shield className="w-5 h-5 text-red-600" />,
      title: "Reconciliation Layer",
      desc: "Phantom Revenue, Over-reporting %, Claimed vs True ROAS"
    },
    {
      icon: <BarChart3 className="w-5 h-5 text-blue-500" />,
      title: "Channel Performance",
      desc: "Per-platform spend, True ROAS, CTR, CPC — reconciled against Shopify"
    },
    {
      icon: <Users className="w-5 h-5 text-violet-500" />,
      title: "Customer Analytics",
      desc: "New vs returning, repeat rate, AOV by segment, country breakdown"
    }
  ];

  return (
    <div className="min-h-screen bg-[#1C1917] text-stone-100 font-sans">
      <Navbar />

      <main className="pt-24 pb-20">
        {/* Hero */}
        <section className="px-6 pb-12 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-900/30 border border-emerald-700/30 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest">Live Dashboards</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-stone-100 mb-4 leading-tight">
              Live Analytics Dashboards
            </h1>
            <p className="text-stone-500 text-base max-w-2xl mx-auto mb-8 leading-relaxed">
              Four production dashboards running on anonymized Shopify data.
              Executive KPIs, reconciliation, channel performance, and customer analytics — all from Shopify source of truth.
            </p>

            <p className="mt-2 text-stone-600 text-xs uppercase tracking-widest font-medium">
              Anonymized dataset · Source: Shopify → BigQuery · Updated daily
            </p>
          </div>
        </section>

        {/* Demo Video */}
        <section className="px-4 md:px-8 mb-16">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-stone-800/60 border border-stone-700/40 rounded-full mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-stone-400 text-xs font-bold uppercase tracking-widest">Live Walkthrough</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-serif text-stone-100 mb-2">See it in 90 seconds</h2>
              <p className="text-stone-500 text-sm max-w-md mx-auto">Executive KPIs + Reconciliation layer — running on real anonymized Shopify data</p>
            </div>

            {/* Video with glow effect */}
            <div className="relative group">
              <div className="absolute -inset-[2px] rounded-2xl bg-gradient-to-r from-emerald-700/40 via-stone-700/20 to-emerald-700/40 opacity-60 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
              <div className="relative rounded-xl overflow-hidden border border-stone-700/60 shadow-2xl shadow-emerald-900/20">
                <video controls playsInline className="w-full block">
                  <source src="/Calyxra_looker_dashboards.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            {/* What you'll see */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="flex items-start gap-3 p-4 bg-stone-900/40 border border-stone-800/60 rounded-xl">
                <span className="text-emerald-500 mt-0.5 flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                </span>
                <div>
                  <p className="text-stone-200 text-sm font-medium mb-0.5">Executive KPIs</p>
                  <p className="text-stone-500 text-xs">Net revenue, margin, MER — from Shopify as source of truth</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-stone-900/40 border border-stone-800/60 rounded-xl">
                <span className="text-red-400 mt-0.5 flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                </span>
                <div>
                  <p className="text-stone-200 text-sm font-medium mb-0.5">Phantom Revenue</p>
                  <p className="text-stone-500 text-xs">€21,761 gap between what platforms claim and Shopify reality</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-stone-900/40 border border-stone-800/60 rounded-xl">
                <span className="text-amber-400 mt-0.5 flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                </span>
                <div>
                  <p className="text-stone-200 text-sm font-medium mb-0.5">Claimed vs True ROAS</p>
                  <p className="text-stone-500 text-xs">Meta 2.91 → 2.36 · Google 3.12 → 2.63</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════ EXECUTIVE DASHBOARD ═══════════════ */}
        <section className="px-4 md:px-8 mb-16">
          <div className="max-w-5xl mx-auto">
            {/* Section header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-900/20 border border-emerald-700/30 rounded-full mb-4">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest">Executive Layer</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-serif text-stone-100 mb-3">KPI Command Center</h2>
              <p className="text-stone-500 text-sm max-w-xl mx-auto">Revenue, margin, orders, MER — all reconciled from Shopify source-of-truth data.</p>
            </div>

            <a
              href={executiveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block relative rounded-xl overflow-hidden border border-emerald-800/50 shadow-2xl shadow-emerald-900/30 bg-[#292524] group cursor-pointer"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-end justify-center pb-8">
                <span className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-700 text-white text-sm font-bold uppercase tracking-widest rounded">
                  Open in Looker Studio <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>

              {/* Dashboard mockup */}
              <div className="p-6 md:p-10">
                {/* Header bar */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-lg font-serif text-stone-200">Executive Overview</h3>
                    <p className="text-xs text-stone-500">Source of Truth: Shopify · Anonymized Dataset</p>
                  </div>
                  <div className="px-4 py-2 border border-stone-600 rounded text-xs text-stone-400">
                    Feb 7 – Feb 12, 2026
                  </div>
                </div>

                {/* KPI Cards */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
                  {[
                    { label: 'Net Revenue', value: '€11,680', change: '+41.3%' },
                    { label: 'Margin', value: '€7,414', change: '+42.1%' },
                    { label: 'Orders', value: '107', change: '+40.8%' },
                    { label: 'AOV', value: '€111.36', change: '+4.8%' },
                    { label: 'True MER', value: '4.45', change: '+36.1%' },
                    { label: 'Refunds', value: '€977', change: '+41.7%' },
                  ].map((kpi) => (
                    <div key={kpi.label} className="bg-[#1C1917] border border-stone-700/50 rounded-lg p-3">
                      <div className="text-[10px] text-stone-500 uppercase tracking-wider mb-1">{kpi.label}</div>
                      <div className="text-lg font-bold text-stone-100">{kpi.value}</div>
                      <div className="text-xs text-emerald-400 mt-1">{kpi.change}</div>
                    </div>
                  ))}
                </div>

                {/* Charts */}
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {/* LEFT: Revenue vs Profit Trend (combo chart) */}
                  <div className="bg-[#1C1917] border border-stone-700/50 rounded-lg p-4">
                    <h4 className="text-sm text-stone-200 font-semibold mb-1">Revenue vs Profit Trend</h4>
                    <div className="flex items-center gap-4 mb-3">
                      <span className="flex items-center gap-1.5 text-[10px] text-stone-500">
                        <span className="w-4 h-[2px] bg-emerald-400 inline-block rounded"></span> Revenue
                      </span>
                      <span className="flex items-center gap-1.5 text-[10px] text-stone-500">
                        <span className="w-3 h-3 bg-emerald-600/80 rounded-sm inline-block"></span> Margin
                      </span>
                    </div>
                    <div className="flex">
                      {/* Y axis */}
                      <div className="flex flex-col justify-between text-[9px] text-stone-600 pr-2 py-0" style={{ height: '130px' }}>
                        <span>4K</span>
                        <span>2K</span>
                        <span>0</span>
                      </div>
                      {/* Chart area */}
                      <div className="flex-1 relative border-l border-b border-stone-700/40" style={{ height: '130px' }}>
                        {/* Grid lines */}
                        <div className="absolute w-full border-t border-stone-800/60" style={{ top: '0%' }}></div>
                        <div className="absolute w-full border-t border-stone-800/60" style={{ top: '50%' }}></div>
                        {/* Bars */}
                        <div className="absolute inset-0 flex items-end gap-[1px] px-[1px]">
                          {[40, 52, 48, 55, 44, 58, 50, 52, 62, 55, 40, 68, 52, 58, 44, 65, 38, 55, 52, 48, 60, 55, 40, 52, 38, 44, 55, 40, 52, 48, 58, 50, 52, 40, 55, 44, 52, 50, 58, 38, 52, 44, 65, 55, 40, 60, 52, 50, 55, 40, 52, 48, 55, 44, 58, 50, 52, 38, 44, 55].map((h, i) => (
                            <div key={i} className="flex-1" style={{ height: '100%', display: 'flex', alignItems: 'flex-end' }}>
                              <div className="bg-emerald-600/70 w-full rounded-[1px]" style={{ height: `${h}%` }}></div>
                            </div>
                          ))}
                        </div>
                        {/* Revenue line */}
                        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 600 130" preserveAspectRatio="none">
                          <polyline
                            fill="none"
                            stroke="#34d399"
                            strokeWidth="1.5"
                            vectorEffect="non-scaling-stroke"
                            points="5,88 15,78 25,82 35,68 45,76 55,60 65,72 75,68 85,52 95,62 105,74 115,42 125,58 135,52 145,66 155,48 165,60 175,56 185,50 195,62 205,54 215,46 225,64 235,56 245,70 255,58 265,52 275,62 285,56 295,66 305,72 315,78 325,56 335,62 345,74 355,80 365,58 375,50 385,60 395,68 405,56 415,62 425,48 435,56 445,70 455,52 465,58 475,64 485,56 495,72 505,66 515,58 525,70 535,62 545,56 555,68 565,62 575,74 585,66 595,70"
                          />
                        </svg>
                      </div>
                    </div>
                    {/* X axis labels */}
                    <div className="flex justify-between text-[8px] text-stone-600 mt-1 ml-8">
                      <span>15 Nov 2025</span>
                      <span>29 Dec 2025</span>
                      <span>11 Feb 2026</span>
                    </div>
                  </div>

                  {/* RIGHT: Revenue by Channel */}
                  <div className="bg-[#1C1917] border border-stone-700/50 rounded-lg p-4">
                    <h4 className="text-sm text-stone-200 font-semibold mb-1">Revenue by Channel</h4>
                    <div className="flex items-center gap-1.5 mb-3">
                      <span className="w-3 h-3 bg-emerald-600/80 rounded-sm inline-block"></span>
                      <span className="text-[10px] text-stone-500">Revenue</span>
                    </div>
                    <div className="flex">
                      {/* Y axis */}
                      <div className="flex flex-col justify-between text-[9px] text-stone-600 pr-2" style={{ height: '130px' }}>
                        <span>80K</span>
                        <span>60K</span>
                        <span>40K</span>
                        <span>20K</span>
                        <span>0</span>
                      </div>
                      {/* Bars area */}
                      <div className="flex-1 border-l border-b border-stone-700/40 relative" style={{ height: '130px' }}>
                        {/* Grid lines */}
                        <div className="absolute w-full border-t border-stone-800/60" style={{ top: '0%' }}></div>
                        <div className="absolute w-full border-t border-stone-800/60" style={{ top: '25%' }}></div>
                        <div className="absolute w-full border-t border-stone-800/60" style={{ top: '50%' }}></div>
                        <div className="absolute w-full border-t border-stone-800/60" style={{ top: '75%' }}></div>
                        {/* Bars */}
                        <div className="absolute inset-0 flex items-end justify-around px-4 gap-6">
                          {[
                            { label: 'meta', pct: 75 },
                            { label: 'google', pct: 58 },
                            { label: 'direct', pct: 40 },
                            { label: 'email', pct: 32 },
                          ].map((ch) => (
                            <div key={ch.label} className="flex-1 flex flex-col items-center justify-end h-full">
                              <div className="w-full max-w-[48px] bg-emerald-600/80 rounded-t-sm" style={{ height: `${ch.pct}%` }}></div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    {/* X axis labels */}
                    <div className="flex justify-around text-[9px] text-stone-500 mt-1.5 ml-8">
                      <span>meta</span>
                      <span>google</span>
                      <span>direct</span>
                      <span>email</span>
                    </div>
                  </div>
                </div>

                {/* Table preview */}
                <div className="bg-[#1C1917] border border-stone-700/50 rounded-lg overflow-hidden">
                  <div className="px-4 py-2 border-b border-stone-700/50">
                    <span className="text-xs text-stone-400 font-medium">Orders by Country</span>
                  </div>
                  <div className="overflow-hidden">
                    <table className="w-full text-xs">
                      <thead>
                        <tr className="border-b border-stone-700/50 text-stone-500">
                          <th className="text-left px-4 py-2 font-medium">Country</th>
                          <th className="text-right px-4 py-2 font-medium">Revenue (€)</th>
                          <th className="text-right px-4 py-2 font-medium">Orders</th>
                          <th className="text-right px-4 py-2 font-medium hidden md:table-cell">AOV (€)</th>
                          <th className="text-right px-4 py-2 font-medium hidden lg:table-cell">Margin (€)</th>
                        </tr>
                      </thead>
                      <tbody className="text-stone-300">
                        {[
                          { c: 'DE', r: '3,191', o: '25', a: '2,581', m: '2,089' },
                          { c: 'NL', r: '1,712', o: '15', a: '1,299', m: '1,053' },
                          { c: 'GB', r: '1,543', o: '18', a: '1,114', m: '910' },
                          { c: 'IE', r: '1,489', o: '13', a: '1,150', m: '974' },
                        ].map((row) => (
                          <tr key={row.c} className="border-b border-stone-800/50 hover:bg-stone-800/20">
                            <td className="px-4 py-2 font-medium">{row.c}</td>
                            <td className="text-right px-4 py-2">{row.r}</td>
                            <td className="text-right px-4 py-2">{row.o}</td>
                            <td className="text-right px-4 py-2 hidden md:table-cell">{row.a}</td>
                            <td className="text-right px-4 py-2 hidden lg:table-cell">{row.m}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </section >

        {/* ═══════════════ RECONCILIATION DASHBOARD ═══════════════ */}
        < section className="px-4 md:px-8 mb-16" >
          <div className="max-w-5xl mx-auto">
            {/* Section header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-900/20 border border-red-700/30 rounded-full mb-4">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                <span className="text-red-400 text-xs font-bold uppercase tracking-widest">Reconciliation Layer</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-serif text-stone-100 mb-3">Platform Over-Reporting Exposed</h2>
              <p className="text-stone-500 text-sm max-w-xl mx-auto">See exactly how much Meta & Google inflate your revenue numbers compared to Shopify truth.</p>
            </div>

            <a
              href={reconciliationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block relative rounded-xl overflow-hidden border border-red-800/50 shadow-2xl shadow-red-900/30 bg-[#292524] group cursor-pointer"
            >
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-end justify-center pb-8">
                <span className="inline-flex items-center gap-2 px-6 py-3 bg-red-700 text-white text-sm font-bold uppercase tracking-widest rounded">
                  Open Reconciliation Dashboard <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>

              {/* Dashboard mockup */}
              <div className="p-6 md:p-10">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-lg font-serif text-stone-200">Reconciliation Overview</h3>
                    <p className="text-xs text-stone-500">Source of Truth: Shopify vs Platform Reporting</p>
                  </div>
                  <div className="px-4 py-2 border border-stone-600 rounded text-xs text-stone-400">
                    15 Jan – 1 Feb, 2026
                  </div>
                </div>

                {/* KPI Cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                  <div className="bg-[#1C1917] border border-stone-700/50 rounded-lg p-3">
                    <div className="text-[10px] text-red-400 uppercase tracking-wider mb-1">Phantom Revenue</div>
                    <div className="text-xl font-bold text-red-400">€3,813</div>
                    <div className="text-xs text-stone-500 mt-1">↓ -8.5%</div>
                  </div>
                  <div className="bg-[#1C1917] border border-stone-700/50 rounded-lg p-3">
                    <div className="text-[10px] text-red-400 uppercase tracking-wider mb-1">Meta Δ%</div>
                    <div className="text-lg font-bold text-red-400">20.02%</div>
                    <div className="text-xs text-stone-500 mt-1">↓ -35.1%</div>
                  </div>
                  <div className="bg-[#1C1917] border border-stone-700/50 rounded-lg p-3">
                    <div className="text-[10px] text-yellow-500 uppercase tracking-wider mb-1">Google Δ%</div>
                    <div className="text-lg font-bold text-yellow-500">13.65%</div>
                    <div className="text-xs text-stone-500 mt-1">↓ -33.0%</div>
                  </div>
                  <div className="bg-[#1C1917] border border-stone-700/50 rounded-lg p-3">
                    <div className="text-[10px] text-emerald-400 uppercase tracking-wider mb-1">True MER</div>
                    <div className="text-lg font-bold text-emerald-400">3.51</div>
                    <div className="text-xs text-stone-500 mt-1">↓ -4.5%</div>
                  </div>
                </div>
                <p className="text-[10px] text-stone-600 mb-6">Revenue gap between platform claims and Shopify reality</p>

                {/* Chart + ROAS */}
                <div className="grid md:grid-cols-5 gap-4 mb-6">
                  {/* Chart area */}
                  <div className="md:col-span-3 bg-[#1C1917] border border-stone-700/50 rounded-lg p-4">
                    <h4 className="text-sm text-stone-200 font-semibold mb-1">Platform Over-Reporting % vs Shopify</h4>
                    <div className="flex items-center gap-4 mb-3">
                      <span className="flex items-center gap-1.5 text-[10px] text-stone-500">
                        <span className="w-4 h-[2px] bg-red-400 inline-block rounded"></span> Meta Δ%
                      </span>
                      <span className="flex items-center gap-1.5 text-[10px] text-stone-500">
                        <span className="w-4 h-[2px] bg-yellow-500 inline-block rounded"></span> Google Δ%
                      </span>
                    </div>
                    <div className="relative border-l border-b border-stone-700/40" style={{ height: '120px' }}>
                      <div className="absolute w-full border-t border-stone-800/60" style={{ top: '0%' }}></div>
                      <div className="absolute w-full border-t border-dashed border-stone-700/30" style={{ top: '50%' }}></div>
                      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 120" preserveAspectRatio="none">
                        <polyline fill="none" stroke="#f87171" strokeWidth="1.5" vectorEffect="non-scaling-stroke"
                          points="5,75 20,72 35,80 50,70 65,74 80,68 95,85 110,72 125,65 140,60 155,78 170,74 185,70 200,66 215,80 230,48 245,72 260,68 275,74 290,70"
                        />
                        <polyline fill="none" stroke="#eab308" strokeWidth="1.5" vectorEffect="non-scaling-stroke"
                          points="5,82 20,84 35,86 50,80 65,83 80,78 95,88 110,82 125,80 140,76 155,84 170,82 185,78 200,75 215,85 230,70 245,80 260,78 275,82 290,80"
                        />
                      </svg>
                      <div className="absolute -left-8 top-0 text-[8px] text-stone-600">100</div>
                      <div className="absolute -left-6 text-[8px] text-stone-600" style={{ top: '50%' }}>0</div>
                    </div>
                    {/* Insight */}
                    <div className="mt-3 px-3 py-2 bg-stone-800/40 border border-stone-700/30 rounded text-[10px] text-yellow-400">
                      ⚡ Meta consistently overreports by ~20%. Adjust attributed ROAS targets down by this margin.
                    </div>
                  </div>

                  {/* ROAS comparison */}
                  <div className="md:col-span-2">
                    <h4 className="text-xs text-stone-400 font-semibold mb-3 text-center">Claimed vs True ROAS</h4>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-[#1C1917] border border-stone-700/50 rounded-lg p-3 text-center">
                        <div className="text-[9px] text-red-400 uppercase tracking-wider mb-1">Meta Claimed</div>
                        <div className="text-lg font-bold text-red-400">3.21</div>
                      </div>
                      <div className="bg-[#1C1917] border border-stone-700/50 rounded-lg p-3 text-center">
                        <div className="text-[9px] text-emerald-400 uppercase tracking-wider mb-1">Meta True</div>
                        <div className="text-lg font-bold text-emerald-400">2.72</div>
                      </div>
                      <div className="bg-[#1C1917] border border-stone-700/50 rounded-lg p-3 text-center">
                        <div className="text-[9px] text-yellow-500 uppercase tracking-wider mb-1">Google Claimed</div>
                        <div className="text-lg font-bold text-yellow-500">2.49</div>
                      </div>
                      <div className="bg-[#1C1917] border border-stone-700/50 rounded-lg p-3 text-center">
                        <div className="text-[9px] text-emerald-400 uppercase tracking-wider mb-1">Google True</div>
                        <div className="text-lg font-bold text-emerald-400">2.11</div>
                      </div>
                    </div>
                    <p className="text-[9px] text-stone-600 mt-2 text-center">Platforms inflate ROAS by including view-throughs and cross-device estimates</p>
                  </div>
                </div>

                {/* Table preview */}
                <div className="bg-[#1C1917] border border-stone-700/50 rounded-lg overflow-hidden">
                  <div className="px-4 py-2 border-b border-stone-700/50">
                    <span className="text-xs text-stone-400 font-medium">Daily Reconciliation</span>
                  </div>
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="border-b border-stone-700/50 text-stone-500">
                        <th className="text-left px-4 py-2 font-medium">Day</th>
                        <th className="text-right px-4 py-2 font-medium">Shopify (€)</th>
                        <th className="text-right px-4 py-2 font-medium">Meta Rep (€)</th>
                        <th className="text-right px-4 py-2 font-medium hidden md:table-cell">Meta Δ%</th>
                        <th className="text-right px-4 py-2 font-medium hidden lg:table-cell">Google Rep (€)</th>
                        <th className="text-right px-4 py-2 font-medium hidden lg:table-cell">Phantom (€)</th>
                      </tr>
                    </thead>
                    <tbody className="text-stone-300">
                      {[
                        { d: '1 Feb', s: '1,557', m: '770', mp: '13.9', g: '88', ph: '101' },
                        { d: '31 Jan', s: '1,300', m: '812', mp: '14.6', g: '128', ph: '115' },
                        { d: '30 Jan', s: '2,197', m: '1,037', mp: '15.1', g: '1,500', ph: '655' },
                        { d: '29 Jan', s: '1,835', m: '714', mp: '60.8', g: '260', ph: '295' },
                      ].map((row) => (
                        <tr key={row.d} className="border-b border-stone-800/50 hover:bg-stone-800/20">
                          <td className="px-4 py-2 font-medium">{row.d}</td>
                          <td className="text-right px-4 py-2">{row.s}</td>
                          <td className="text-right px-4 py-2">{row.m}</td>
                          <td className="text-right px-4 py-2 hidden md:table-cell">
                            <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${parseFloat(row.mp) > 30 ? 'bg-red-900/40 text-red-400' : parseFloat(row.mp) > 15 ? 'bg-yellow-900/40 text-yellow-400' : 'bg-emerald-900/40 text-emerald-400'}`}>
                              +{row.mp}%
                            </span>
                          </td>
                          <td className="text-right px-4 py-2 hidden lg:table-cell">{row.g}</td>
                          <td className="text-right px-4 py-2 hidden lg:table-cell">{row.ph}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </a>
          </div>
        </section>

        {/* ═══════════════ CHANNEL PERFORMANCE DASHBOARD ═══════════════ */}
        <section className="px-4 md:px-8 mb-16">
          <div className="max-w-5xl mx-auto">
            {/* Section header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-900/20 border border-blue-700/30 rounded-full mb-4">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                <span className="text-blue-400 text-xs font-bold uppercase tracking-widest">Channel Layer</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-serif text-stone-100 mb-3">Channel Performance</h2>
              <p className="text-stone-500 text-sm max-w-xl mx-auto">Reconciliation at platform level — True ROAS, phantom revenue, and over-reporting per channel.</p>
            </div>

            <a
              href={channelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block relative rounded-xl overflow-hidden border border-blue-800/50 shadow-2xl shadow-blue-900/30 bg-[#292524] group cursor-pointer"
            >
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-end justify-center pb-8">
                <span className="inline-flex items-center gap-2 px-6 py-3 bg-blue-700 text-white text-sm font-bold uppercase tracking-widest rounded">
                  Open Channel Performance <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>

              {/* Dashboard mockup */}
              <div className="p-6 md:p-10">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-lg font-serif text-stone-200">Channel Performance</h3>
                    <p className="text-xs text-stone-500">Reconciliation, not attribution. Platform-level truth from Shopify.</p>
                  </div>
                  <div className="px-4 py-2 border border-stone-600 rounded text-xs text-stone-400">
                    1 Dec 2025 – 12 Feb 2026
                  </div>
                </div>

                {/* KPI Cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 mb-6">
                  {[
                    { label: 'Total Spend', value: '€34,473', color: 'text-red-400' },
                    { label: 'Phantom Revenue', value: '€18,034', color: 'text-red-400' },
                    { label: 'Cost/Purchase', value: '€40.91', color: 'text-stone-100' },
                    { label: 'Claimed ROAS', value: '3.11', color: 'text-yellow-400' },
                    { label: 'True ROAS', value: '2.50', color: 'text-emerald-400' },
                    { label: 'Avg CPC', value: '€1.29', color: 'text-stone-100' },
                    { label: 'Avg CTR', value: '3.93%', color: 'text-stone-100' },
                  ].map((kpi) => (
                    <div key={kpi.label} className="bg-[#1C1917] border border-stone-700/50 rounded-lg p-3">
                      <div className="text-[10px] text-stone-500 uppercase tracking-wider mb-1">{kpi.label}</div>
                      <div className={`text-lg font-bold ${kpi.color}`}>{kpi.value}</div>
                    </div>
                  ))}
                </div>

                {/* Over-Report + Spend Trend */}
                <div className="grid md:grid-cols-5 gap-4 mb-6">
                  {/* Over-Report Scorecards */}
                  <div className="md:col-span-2 flex flex-col gap-3">
                    <div className="bg-[#1C1917] border border-stone-700/50 rounded-lg p-4">
                      <div className="text-[10px] text-stone-500 uppercase tracking-wider mb-1">Google Over-Report %</div>
                      <div className="text-2xl font-bold text-yellow-400">21.6%</div>
                      <div className="text-xs text-stone-500 mt-1">Platform inflates revenue by this margin</div>
                    </div>
                    <div className="bg-[#1C1917] border border-stone-700/50 rounded-lg p-4">
                      <div className="text-[10px] text-stone-500 uppercase tracking-wider mb-1">Meta Over-Report %</div>
                      <div className="text-2xl font-bold text-blue-400">25.8%</div>
                      <div className="text-xs text-stone-500 mt-1">Consistently higher inflation than Google</div>
                    </div>
                  </div>

                  {/* Spend Trend */}
                  <div className="md:col-span-3 bg-[#1C1917] border border-stone-700/50 rounded-lg p-4">
                    <h4 className="text-sm text-stone-200 font-semibold mb-1">Daily Spend</h4>
                    <div className="flex items-center gap-4 mb-3">
                      <span className="flex items-center gap-1.5 text-[10px] text-stone-500">
                        <span className="w-4 h-[2px] bg-blue-400 inline-block rounded"></span> Meta
                      </span>
                      <span className="flex items-center gap-1.5 text-[10px] text-stone-500">
                        <span className="w-4 h-[2px] bg-yellow-400 inline-block rounded"></span> Google
                      </span>
                    </div>
                    <div className="relative border-l border-b border-stone-700/40" style={{ height: '120px' }}>
                      <div className="absolute w-full border-t border-stone-800/60" style={{ top: '0%' }}></div>
                      <div className="absolute w-full border-t border-dashed border-stone-700/30" style={{ top: '50%' }}></div>
                      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 120" preserveAspectRatio="none">
                        <polyline fill="none" stroke="#60a5fa" strokeWidth="1.5" vectorEffect="non-scaling-stroke"
                          points="5,50 20,45 35,55 50,42 65,48 80,40 95,52 110,38 125,45 140,42 155,50 170,44 185,48 200,40 215,46 230,42 245,50 260,44 275,48 290,42"
                        />
                        <polyline fill="none" stroke="#facc15" strokeWidth="1.5" vectorEffect="non-scaling-stroke"
                          points="5,72 20,68 35,75 50,65 65,70 80,62 95,74 110,60 125,66 140,62 155,72 170,66 185,70 200,60 215,68 230,58 245,70 260,64 275,68 290,62"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Campaign Table */}
                <div className="bg-[#1C1917] border border-stone-700/50 rounded-lg overflow-hidden">
                  <div className="px-4 py-2 border-b border-stone-700/50">
                    <span className="text-xs text-stone-400 font-medium">Campaign Breakdown</span>
                  </div>
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="border-b border-stone-700/50 text-stone-500">
                        <th className="text-left px-4 py-2 font-medium">Platform</th>
                        <th className="text-left px-4 py-2 font-medium">Campaign</th>
                        <th className="text-right px-4 py-2 font-medium">Spend</th>
                        <th className="text-right px-4 py-2 font-medium hidden md:table-cell">CTR %</th>
                        <th className="text-right px-4 py-2 font-medium hidden md:table-cell">CPC</th>
                        <th className="text-right px-4 py-2 font-medium">Claimed ROAS</th>
                      </tr>
                    </thead>
                    <tbody className="text-stone-300">
                      {[
                        { p: 'Meta', c: 'Prospecting — Broad Interest', s: '€7,288', ctr: '0.81', cpc: '€1.10', roas: '2.97' },
                        { p: 'Meta', c: 'Retargeting — Website Visitors', s: '€5,201', ctr: '1.69', cpc: '€0.59', roas: '3.02' },
                        { p: 'Google', c: 'Shopping — Feed Standard', s: '€4,900', ctr: '6.89', cpc: '€1.73', roas: '3.25' },
                        { p: 'Google', c: 'Search — Brand Terms', s: '€3,542', ctr: '7.24', cpc: '€1.88', roas: '2.90' },
                      ].map((row) => (
                        <tr key={row.c} className="border-b border-stone-800/50 hover:bg-stone-800/20">
                          <td className="px-4 py-2 font-medium">{row.p}</td>
                          <td className="px-4 py-2">{row.c}</td>
                          <td className="text-right px-4 py-2">{row.s}</td>
                          <td className="text-right px-4 py-2 hidden md:table-cell">
                            <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${parseFloat(row.ctr) < 1 ? 'bg-red-900/40 text-red-400' : parseFloat(row.ctr) < 3 ? 'bg-yellow-900/40 text-yellow-400' : 'bg-emerald-900/40 text-emerald-400'}`}>
                              {row.ctr}%
                            </span>
                          </td>
                          <td className="text-right px-4 py-2 hidden md:table-cell">{row.cpc}</td>
                          <td className="text-right px-4 py-2">{row.roas}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Insight */}
                <div className="mt-4 px-3 py-2 bg-stone-800/40 border border-stone-700/30 rounded text-[10px] text-stone-500">
                  ⚡ Reconciliation, not attribution · Phantom = reported − Shopify · True ROAS = Shopify ÷ spend
                </div>
              </div>
            </a>
          </div>
        </section>

        {/* ═══════════════ CUSTOMER ANALYTICS DASHBOARD ═══════════════ */}
        <section className="px-4 md:px-8 mb-16">
          <div className="max-w-5xl mx-auto">
            {/* Section header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-violet-900/20 border border-violet-700/30 rounded-full mb-4">
                <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse"></span>
                <span className="text-violet-400 text-xs font-bold uppercase tracking-widest">Customer Layer</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-serif text-stone-100 mb-3">Customer Analytics</h2>
              <p className="text-stone-500 text-sm max-w-xl mx-auto">New vs returning segmentation, repeat rate, AOV by segment, and geographic breakdown.</p>
            </div>

            <a
              href={customerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block relative rounded-xl overflow-hidden border border-violet-800/50 shadow-2xl shadow-violet-900/30 bg-[#292524] group cursor-pointer"
            >
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-end justify-center pb-8">
                <span className="inline-flex items-center gap-2 px-6 py-3 bg-violet-700 text-white text-sm font-bold uppercase tracking-widest rounded">
                  Open Customer Analytics <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>

              {/* Dashboard mockup */}
              <div className="p-6 md:p-10">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-lg font-serif text-stone-200">Customer Analytics</h3>
                    <p className="text-xs text-stone-500">New vs returning. Revenue by segment. Unit economics.</p>
                  </div>
                  <div className="px-4 py-2 border border-stone-600 rounded text-xs text-stone-400">
                    1 Jan – 4 Feb 2026
                  </div>
                </div>

                {/* KPI Cards */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
                  {[
                    { label: 'Total Customers', value: '1,182', color: 'text-stone-100' },
                    { label: 'New Customers', value: '774', color: 'text-emerald-400' },
                    { label: 'Returning', value: '498', color: 'text-blue-400' },
                    { label: 'Repeat Rate', value: '39.3%', color: 'text-yellow-400' },
                    { label: 'New AOV', value: '€120.09', color: 'text-emerald-400' },
                    { label: 'Returning AOV', value: '€118.89', color: 'text-blue-400' },
                  ].map((kpi) => (
                    <div key={kpi.label} className="bg-[#1C1917] border border-stone-700/50 rounded-lg p-3">
                      <div className="text-[10px] text-stone-500 uppercase tracking-wider mb-1">{kpi.label}</div>
                      <div className={`text-lg font-bold ${kpi.color}`}>{kpi.value}</div>
                    </div>
                  ))}
                </div>

                {/* Charts row */}
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {/* Revenue by Segment */}
                  <div className="bg-[#1C1917] border border-stone-700/50 rounded-lg p-4">
                    <h4 className="text-sm text-stone-200 font-semibold mb-1">Revenue by Segment</h4>
                    <div className="flex items-center gap-4 mb-3">
                      <span className="flex items-center gap-1.5 text-[10px] text-stone-500">
                        <span className="w-3 h-3 bg-emerald-500/80 rounded-sm inline-block"></span> New
                      </span>
                      <span className="flex items-center gap-1.5 text-[10px] text-stone-500">
                        <span className="w-3 h-3 bg-blue-500/80 rounded-sm inline-block"></span> Returning
                      </span>
                    </div>
                    <div className="flex">
                      <div className="flex flex-col justify-between text-[9px] text-stone-600 pr-2" style={{ height: '120px' }}>
                        <span>3K</span><span>2K</span><span>1K</span><span>0</span>
                      </div>
                      <div className="flex-1 border-l border-b border-stone-700/40 relative" style={{ height: '120px' }}>
                        <div className="absolute w-full border-t border-stone-800/60" style={{ top: '0%' }}></div>
                        <div className="absolute w-full border-t border-stone-800/60" style={{ top: '33%' }}></div>
                        <div className="absolute w-full border-t border-stone-800/60" style={{ top: '66%' }}></div>
                        <div className="absolute inset-0 flex items-end gap-[1px] px-[1px]">
                          {[65, 58, 62, 70, 55, 68, 60, 52, 72, 63, 55, 48, 60, 65, 58, 52, 70, 62, 55, 68, 50, 72, 58, 62, 65, 48, 58, 62, 55, 70, 52, 65, 58, 62].map((h, i) => (
                            <div key={i} className="flex-1 flex flex-col justify-end" style={{ height: '100%' }}>
                              <div className="bg-blue-500/70 w-full" style={{ height: `${h * 0.4}%` }}></div>
                              <div className="bg-emerald-500/70 w-full" style={{ height: `${h * 0.6}%` }}></div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* New vs Returning Trend */}
                  <div className="bg-[#1C1917] border border-stone-700/50 rounded-lg p-4">
                    <h4 className="text-sm text-stone-200 font-semibold mb-1">New vs Returning Customers</h4>
                    <div className="flex items-center gap-4 mb-3">
                      <span className="flex items-center gap-1.5 text-[10px] text-stone-500">
                        <span className="w-4 h-[2px] bg-emerald-400 inline-block rounded"></span> New
                      </span>
                      <span className="flex items-center gap-1.5 text-[10px] text-stone-500">
                        <span className="w-4 h-[2px] bg-blue-400 inline-block rounded"></span> Returning
                      </span>
                    </div>
                    <div className="relative border-l border-b border-stone-700/40" style={{ height: '120px' }}>
                      <div className="absolute w-full border-t border-stone-800/60" style={{ top: '0%' }}></div>
                      <div className="absolute w-full border-t border-dashed border-stone-700/30" style={{ top: '50%' }}></div>
                      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 120" preserveAspectRatio="none">
                        <polyline fill="none" stroke="#34d399" strokeWidth="1.5" vectorEffect="non-scaling-stroke"
                          points="5,55 15,50 25,58 35,45 45,52 55,48 65,55 75,42 85,50 95,48 105,55 115,45 125,50 135,48 145,55 155,42 165,48 175,52 185,45 195,50 205,55 215,48 225,42 235,50 245,48 255,55 265,48 275,52 285,50 295,55"
                        />
                        <polyline fill="none" stroke="#60a5fa" strokeWidth="1.5" vectorEffect="non-scaling-stroke"
                          points="5,75 15,72 25,78 35,68 45,74 55,70 65,76 75,65 85,72 95,68 105,76 115,66 125,72 135,68 145,75 155,64 165,70 175,72 185,66 195,72 205,76 215,70 225,65 235,72 245,68 255,76 265,70 275,74 285,72 295,76"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Country Table */}
                <div className="bg-[#1C1917] border border-stone-700/50 rounded-lg overflow-hidden">
                  <div className="px-4 py-2 border-b border-stone-700/50">
                    <span className="text-xs text-stone-400 font-medium">Revenue by Country</span>
                  </div>
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="border-b border-stone-700/50 text-stone-500">
                        <th className="text-left px-4 py-2 font-medium">Country</th>
                        <th className="text-right px-4 py-2 font-medium">Customers</th>
                        <th className="text-right px-4 py-2 font-medium">Revenue (€)</th>
                        <th className="text-right px-4 py-2 font-medium hidden md:table-cell">AOV (€)</th>
                        <th className="text-right px-4 py-2 font-medium">Repeat %</th>
                      </tr>
                    </thead>
                    <tbody className="text-stone-300">
                      {[
                        { c: 'DE', cu: '290', r: '39,022', a: '123.1', rp: '41.7' },
                        { c: 'NL', cu: '169', r: '21,839', a: '116.2', rp: '45.0' },
                        { c: 'GB', cu: '146', r: '17,414', a: '110.2', rp: '39.7' },
                        { c: 'BE', cu: '132', r: '16,214', a: '117.5', rp: '40.9' },
                      ].map((row) => (
                        <tr key={row.c} className="border-b border-stone-800/50 hover:bg-stone-800/20">
                          <td className="px-4 py-2 font-medium">{row.c}</td>
                          <td className="text-right px-4 py-2">{row.cu}</td>
                          <td className="text-right px-4 py-2">{row.r}</td>
                          <td className="text-right px-4 py-2 hidden md:table-cell">{row.a}</td>
                          <td className="text-right px-4 py-2">
                            <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${parseFloat(row.rp) > 42 ? 'bg-emerald-900/40 text-emerald-400' : parseFloat(row.rp) > 38 ? 'bg-yellow-900/40 text-yellow-400' : 'bg-red-900/40 text-red-400'}`}>
                              {row.rp}%
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </a>
          </div>
        </section>

        {/* Features grid */}
        < section className="px-6 mb-16" >
          <div className="max-w-5xl mx-auto">
            <h2 className="text-xl font-serif text-stone-200 text-center mb-8">What's inside</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {dashboardFeatures.map((f) => (
                <div key={f.title} className="bg-[#292524] border border-stone-700/40 rounded-lg p-5">
                  <div className="mb-3">{f.icon}</div>
                  <h3 className="text-sm font-bold text-stone-200 mb-1">{f.title}</h3>
                  <p className="text-xs text-stone-500 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section >

        {/* Trust strip */}
        < section className="px-6 mb-16" >
          <div className="max-w-3xl mx-auto flex flex-wrap items-center justify-center gap-6 text-xs text-stone-500">
            <span className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-emerald-600" />
              Verified data pipeline
            </span>
            <span className="text-stone-700">·</span>
            <span className="flex items-center gap-2">
              <Database className="w-4 h-4 text-emerald-600" />
              BigQuery warehouse
            </span>
            <span className="text-stone-700">·</span>
            <span className="flex items-center gap-2">
              <RefreshCw className="w-4 h-4 text-emerald-600" />
              Updated daily
            </span>
          </div>
        </section >

        {/* Bottom CTA */}
        < section className="px-6 text-center" >
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-serif text-stone-200 mb-3">Want this for your agency?</h2>
            <p className="text-stone-500 text-sm mb-6">Get a production-grade analytics pipeline connected to your clients' Shopify stores.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href={executiveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold uppercase tracking-widest transition-all inline-flex items-center justify-center gap-2"
              >
                Executive Dashboard <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://cal.com/calyxra/15min"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border border-stone-600 hover:border-stone-400 text-stone-300 text-xs font-bold uppercase tracking-widest transition-all"
              >
                Book 15-min Audit Call
              </a>
            </div>
          </div>
        </section >
      </main >

      <Footer />
    </div >
  );
}