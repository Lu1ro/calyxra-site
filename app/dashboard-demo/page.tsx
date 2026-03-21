'use client';

import { useState, useEffect } from 'react';
import { generateDemoData, DashboardState, aggregateMetrics } from '../../lib/demo-data'; // Adjust path
import { ExecutiveShell } from '../../components/dashboard/ExecutiveShell';
import { ExecutiveKpiCard } from '../../components/dashboard/ExecutiveKpiCard';
import { DecisionFeed } from '../../components/dashboard/DecisionFeed';
import { TruthContract } from '../../components/dashboard/TruthContract';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import Navbar from '../../components/Navbar';
import { ArrowRight } from 'lucide-react';

export default function DashboardDemoPage() {
    const [dashboardState, setDashboardState] = useState<DashboardState | null>(null);

    useEffect(() => {
        setDashboardState(generateDemoData());
    }, []);

    if (!dashboardState) return <div className="p-12 text-center text-stone-400 font-mono text-sm">Initializing Warehouse Connection...</div>;

    const metrics = aggregateMetrics(dashboardState.data);
    const sparkData = dashboardState.data.slice(-30);

    return (
        <div className="min-h-screen bg-[#F5F5F4]">
            <Navbar />

            <div className="pt-24 pb-20">

                <ExecutiveShell dashboardState={dashboardState}>

                    <div className="space-y-8">
                        {/* MAIN GRID */}
                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

                            {/* LEFT COLUMN: KPIs & Chart (3/4 width) */}
                            <div className="lg:col-span-3 space-y-6">

                                {/* KPI CARDS */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <ExecutiveKpiCard
                                        title="Net Profit"
                                        value={metrics.profit}
                                        change={12.4}
                                        subtext="vs last 30 days"
                                        target="Target: 20%"
                                    />
                                    <ExecutiveKpiCard
                                        title="Marketing Efficiency (MER)"
                                        value={3.42}
                                        change={-2.1}
                                        isPositiveGood={true}
                                        subtext="Revenue / Total Spend"
                                        target="Target: >3.0"
                                    />
                                    <ExecutiveKpiCard
                                        title="Est. Cash Landing"
                                        value={12150}
                                        change={5.2}
                                        subtext="3-Day Forecast"
                                        isPositiveGood={true}
                                    />
                                </div>

                                {/* PROFIT TREND CHART */}
                                <div className="bg-white p-6 rounded-lg border border-stone-200 shadow-sm h-96">
                                    <div className="flex items-center justify-between mb-6">
                                        <h3 className="text-sm font-bold text-stone-900">Profitability Trend (30 Days)</h3>
                                        <div className="flex gap-4">
                                            <span className="flex items-center gap-1.5 text-xs text-stone-600 font-medium">
                                                <div className="w-2.5 h-2.5 rounded-full bg-stone-900"></div> Net Profit
                                            </span>
                                            <span className="flex items-center gap-1.5 text-xs text-stone-400">
                                                <div className="w-2.5 h-2.5 rounded-full bg-stone-300"></div> Gross Margin
                                            </span>
                                        </div>
                                    </div>

                                    <div className="h-full w-full pb-6">
                                        <ResponsiveContainer width="100%" height="90%">
                                            <AreaChart data={sparkData}>
                                                <defs>
                                                    <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                                                        <stop offset="5%" stopColor="#1c1917" stopOpacity={0.08} />
                                                        <stop offset="95%" stopColor="#1c1917" stopOpacity={0} />
                                                    </linearGradient>
                                                </defs>
                                                <XAxis dataKey="date" hide />
                                                <YAxis hide domain={['auto', 'auto']} />
                                                <Tooltip
                                                    contentStyle={{
                                                        background: '#fff',
                                                        border: '1px solid #e7e5e4',
                                                        fontSize: '12px',
                                                        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.05)'
                                                    }}
                                                    formatter={(value?: number) => [`$${(value ?? 0).toFixed(0)}`, 'Profit']}
                                                />
                                                <Area type="monotone" dataKey="net_profit" stroke="#1c1917" strokeWidth={2} fillOpacity={1} fill="url(#colorProfit)" />
                                                <Area type="monotone" dataKey="gross_margin" stroke="#a8a29e" strokeWidth={1} strokeDasharray="4 4" fill="transparent" />
                                            </AreaChart>
                                        </ResponsiveContainer>
                                    </div>
                                </div>

                                {/* TRUTH CONTRACT (Inserted below chart) */}
                                <TruthContract />

                            </div>

                            {/* RIGHT COLUMN: Decisions & Context (1/4 width) */}
                            <div className="space-y-6">
                                <DecisionFeed insights={dashboardState.insights} />

                                <div className="bg-stone-900 text-stone-50 p-6 rounded-lg shadow-md border border-stone-800">
                                    <h4 className="text-stone-400 text-xs font-bold uppercase mb-4 tracking-wider">Month to Date</h4>
                                    <div className="space-y-4">
                                        <div>
                                            <div className="text-2xl font-serif">$142,050</div>
                                            <div className="text-xs text-stone-500 font-medium">Gross Revenue</div>
                                        </div>
                                        <div className="h-px bg-stone-800 w-full"></div>
                                        <div>
                                            <div className="text-2xl font-serif">$42,100</div>
                                            <div className="text-xs text-stone-500 font-medium">Ad Spend (All Channels)</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </ExecutiveShell>

                {/* FINAL ENTERPRISE CTA */}
                <div className="max-w-3xl mx-auto mt-20 text-center">
                    <h2 className="text-xl font-serif text-stone-900 mb-2">Trust your numbers, not your spreadsheet.</h2>
                    <p className="text-stone-500 text-sm mb-6">
                        This report was generated automatically from a unified Calyxra warehouse.
                    </p>
                    <button className="bg-stone-900 hover:bg-stone-800 text-white px-6 py-3 rounded text-sm font-bold inline-flex items-center gap-2 transition-colors">
                        Request a live warehouse audit
                        <ArrowRight className="w-4 h-4" />
                    </button>
                    <p className="mt-4 text-[10px] text-stone-400 uppercase tracking-widest font-medium">
                        Infrastructure by Calyxra
                    </p>
                </div>

            </div>
        </div>
    );
}
