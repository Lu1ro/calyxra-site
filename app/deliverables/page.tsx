'use client';

import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { TruthContract } from '../../components/dashboard/TruthContract';
import { LogoStrip } from '../../components/social/LogoStrip';
import { Testimonials } from '../../components/social/Testimonials';
import { ArrowRight, Database, BarChart3, Layout, CheckCircle2 } from 'lucide-react';

function ModuleCard({ title, subtitle, comparison, image, benefits }: {
    title: string;
    subtitle: string;
    comparison: string;
    image: string;
    benefits: string[];
}) {
    return (
        <div className="bg-white border border-stone-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            {/* Header */}
            <div className="p-6 border-b border-stone-100">
                <div className="text-[10px] font-bold uppercase tracking-widest text-emerald-700 mb-2">{subtitle}</div>
                <h3 className="text-xl font-serif font-bold text-stone-900 mb-1">{title}</h3>
                <p className="text-xs text-stone-500">{comparison}</p>
            </div>

            {/* Preview Image */}
            <div className="relative aspect-[16/9] bg-stone-100 border-b border-stone-100">
                <div className="absolute top-3 right-3 z-10 bg-white/90 backdrop-blur px-2 py-1 rounded text-[10px] font-bold text-stone-600 border border-stone-200 shadow-sm flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                    Synced
                </div>
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                />
            </div>

            {/* Benefits */}
            <div className="p-6 bg-stone-50/50">
                <ul className="space-y-3">
                    {benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-stone-600">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                            <span>{benefit}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default function DeliverablesPage() {
    return (
        <div className="min-h-screen bg-[#FAFAF9] text-stone-900 font-sans selection:bg-emerald-200">
            <Navbar />

            <main className="pt-32 pb-24">

                {/* HERO */}
                <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 border border-stone-200 text-stone-600 text-[10px] font-bold uppercase tracking-widest mb-6">
                        <Database className="w-3 h-3" />
                        Infrastructure Output
                    </div>
                    <h1 className="text-4xl md:text-5xl font-serif font-medium text-stone-900 mb-6 max-w-4xl mx-auto leading-tight">
                        Delivered into your <br className="hidden md:block" />
                        <span className="text-stone-400">Power BI</span> or <span className="text-stone-400">Looker</span> workspace.
                    </h1>
                    <p className="text-xl text-stone-500 max-w-2xl mx-auto leading-relaxed mb-10">
                        We build the warehouse. You own the data.
                        The dashboards below are simply the output—delivered ready-to-use.
                    </p>

                    <a href="https://cal.com/calyxra/audit" target="_blank" className="inline-flex items-center gap-2 bg-stone-900 hover:bg-stone-800 text-white px-8 py-4 rounded text-xs font-bold uppercase tracking-widest transition-all">
                        Request Live Warehouse Audit
                        <ArrowRight className="w-4 h-4" />
                    </a>
                </div>

                {/* LOGO STRIP */}
                <LogoStrip />

                {/* ARCHITECTURE STRIP (Pipeline not Pixel) */}
                <div className="border-y border-stone-200 bg-white py-12 mb-20">
                    <div className="max-w-5xl mx-auto px-6">
                        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12 text-stone-400">

                            <div className="text-center">
                                <div className="text-xs font-bold uppercase tracking-widest mb-2">Sources</div>
                                <div className="font-serif text-stone-900">Shopify + Ads</div>
                            </div>

                            <ArrowRight className="hidden md:block w-5 h-5 text-stone-300" />
                            <div className="w-px h-8 bg-stone-200 md:hidden"></div>

                            <div className="text-center relative">
                                <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100 whitespace-nowrap">
                                    We Build This
                                </div>
                                <div className="text-xs font-bold uppercase tracking-widest mb-2">Warehouse</div>
                                <div className="font-serif text-stone-900 text-lg">BigQuery + dbt</div>
                            </div>

                            <ArrowRight className="hidden md:block w-5 h-5 text-stone-300" />
                            <div className="w-px h-8 bg-stone-200 md:hidden"></div>

                            <div className="text-center">
                                <div className="text-xs font-bold uppercase tracking-widest mb-2">Delivery</div>
                                <div className="font-serif text-stone-900">Power BI / Looker</div>
                            </div>

                        </div>
                        <p className="text-center text-xs text-stone-400 mt-8">
                            * We do not replace your BI tool. We power it with clean, reconciled data.
                        </p>
                    </div>
                </div>

                {/* DELIVERABLES (Modules) */}
                <div className="max-w-7xl mx-auto px-6 mb-24">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl font-serif text-stone-900">Infrastructure Outputs</h2>
                        <p className="text-stone-500 text-sm mt-2">Standardized reporting modules included with every plan.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <ModuleCard
                            subtitle="Module 01"
                            title="Executive Profit"
                            comparison="Replaces: CFO Spreadsheets"
                            image="/preview-executive.png"
                            benefits={[
                                "Net Profit (Fully Reconciled)",
                                "Marketing Efficiency Ratio (MER)",
                                "3-Day Cashflow Landing Forecast"
                            ]}
                        />
                        <ModuleCard
                            subtitle="Module 02"
                            title="Paid Media Truth"
                            comparison="Replaces: Ad Manager Reporting"
                            image="/preview-marketing.png"
                            benefits={[
                                "Refund-Adjusted ROAS",
                                "Blended CAC vs Platform CPA",
                                "Cross-Channel Spend Pacing"
                            ]}
                        />
                        <ModuleCard
                            subtitle="Module 03"
                            title="Retention & LTV"
                            comparison="Replaces: Evaluation Guesswork"
                            image="/preview-retention.png"
                            benefits={[
                                "Profit-based Cohort LTV",
                                "Repurchase Rate (30/60/90d)",
                                "New vs Returning Revenue Split"
                            ]}
                        />
                    </div>
                </div>

                {/* TESTIMONIALS */}
                <Testimonials />

                {/* TRUTH CONTRACT SECTION */}
                <div className="max-w-4xl mx-auto px-6 mb-24">
                    <div className="bg-stone-900 rounded-xl overflow-hidden shadow-2xl">
                        <div className="p-8 md:p-12 text-center border-b border-stone-800">
                            <h2 className="text-2xl font-serif text-white mb-4">Infrastructure Proof</h2>
                            <p className="text-stone-400 text-lg mb-8 max-w-xl mx-auto">
                                You aren't buying a dashboard. You are buying a guarantee that your profit numbers are mathematically correct.
                            </p>

                            <div className="max-w-2xl mx-auto text-left">
                                <TruthContract />
                            </div>
                        </div>
                        <div className="bg-stone-950 p-4 text-center">
                            <p className="text-stone-500 text-xs font-mono">
                                Data is reconciled every 60 minutes via dbt transformations.
                            </p>
                        </div>
                    </div>
                </div>

            </main>

            <Footer />
        </div>
    );
}
