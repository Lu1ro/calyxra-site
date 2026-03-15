'use client';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Database, ArrowRight, CheckCircle2 } from 'lucide-react';

function UseCaseCard({ title, problem, fix, deliverable }: {
    title: string;
    problem: string;
    fix: string;
    deliverable: string;
}) {
    return (
        <div className="bg-white border border-stone-200 rounded-lg overflow-hidden shadow-sm">
            {/* Header */}
            <div className="bg-stone-900 text-white p-6">
                <div className="inline-block px-3 py-1 bg-stone-700 text-white text-[10px] font-bold uppercase tracking-widest rounded mb-3">
                    Infrastructure Scenario
                </div>
                <h3 className="text-xl font-serif font-medium">{title}</h3>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
                <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900 mb-2 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                        Problem
                    </h4>
                    <p className="text-stone-600 leading-relaxed text-sm">
                        {problem}
                    </p>
                </div>

                <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900 mb-2 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                        Infrastructure Fix
                    </h4>
                    <p className="text-stone-600 leading-relaxed text-sm">
                        {fix}
                    </p>
                </div>

                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-900 mb-2 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4" />
                        Deliverable Output
                    </h4>
                    <p className="text-emerald-800 text-sm font-medium">
                        {deliverable}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default function UseCasesPage() {
    return (
        <div className="min-h-screen bg-[#FAFAF9] text-stone-900 font-sans selection:bg-emerald-200">
            <Navbar />

            <main className="pt-32 pb-24">

                {/* HERO */}
                <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 border border-stone-200 text-stone-600 text-[10px] font-bold uppercase tracking-widest mb-6">
                        <Database className="w-3 h-3" />
                        Agency Deployment Scenarios
                    </div>
                    <h1 className="text-4xl md:text-5xl font-serif font-medium text-stone-900 mb-6 max-w-4xl mx-auto leading-tight">
                        How Agencies Use<br className="hidden md:block" />
                        <span className="text-stone-400">Infrastructure-First Reporting</span>
                    </h1>
                    <p className="text-xl text-stone-500 max-w-2xl mx-auto leading-relaxed">
                        Real infrastructure patterns deployed across Shopify agencies.
                    </p>
                </div>

                {/* USE CASES GRID */}
                <div className="max-w-7xl mx-auto px-6 mb-20">
                    <div className="grid md:grid-cols-3 gap-8">

                        <UseCaseCard
                            title="Profit Reconciliation Across Shopify + Ads"
                            problem="Revenue numbers differ across Shopify payouts, Meta Ads Manager, and Google Ads. Teams debate which source is correct, leading to incorrect profit calculations and wasted ad spend."
                            fix="Calyxra connects to Shopify and ad platform APIs, reconciles everything automatically, and shows exactly where the gap is — down to individual discount codes and refund patterns."
                            deliverable="Branded PDF report with reconciled net revenue, phantom revenue breakdown, true ROAS, and campaign-level recommendations."
                        />

                        <UseCaseCard
                            title="Refund-adjusted ROAS Truth"
                            problem="Ad platforms show inflated ROAS because they count refunds, cancelled orders, and test orders as real sales. Marketing teams scale based on phantom numbers."
                            fix="Calyxra applies Shopify refund data retroactively to ad platform conversions. ROAS is recalculated on cash-collected revenue only — showing the real picture."
                            deliverable="Refund-adjusted ROAS dashboard with campaign-level flagging (🔴🟡🟢), budget reallocation recommendations, and projected annual savings."
                        />

                        <UseCaseCard
                            title="Multi-client Agency Reporting"
                            problem="Each client has different reporting formats. You're spending hours on spreadsheets instead of strategy. There's no consistent view across accounts."
                            fix="Calyxra standardizes reconciliation across all your client stores. Same methodology, same KPI definitions, same report template — just different client data."
                            deliverable="White-label branded reports for every client. Onboarding takes 15 minutes per store. Team alignment across all accounts."
                        />

                    </div>
                </div>

                {/* CTA SECTION */}
                <div className="max-w-4xl mx-auto px-6">
                    <div className="bg-stone-900 rounded-xl p-12 text-center">
                        <h2 className="text-2xl font-serif text-white mb-4">
                            Want to see the real numbers for your agency?
                        </h2>
                        <p className="text-stone-400 mb-8 max-w-xl mx-auto">
                            Book a $249 Revenue Leak Audit. We'll connect your Shopify + Meta, find the phantom revenue, and deliver a branded report in 48 hours.
                        </p>
                        <a
                            href="https://cal.com/calyxra/15min"
                            target="_blank"
                            className="inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-600 text-white px-6 py-3 rounded text-xs font-bold uppercase tracking-widest transition-all"
                        >
                            Book $249 Audit — 48h Delivery
                            <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>
                </div>

            </main>

            <Footer />
        </div>
    );
}
