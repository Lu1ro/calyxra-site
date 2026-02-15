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
                            title="Profit Reconciliation Across Shopify + Ads + GA4"
                            problem="Revenue numbers differ across Shopify payouts, Meta Ads Manager, Google Ads, and GA4. Teams debate which source is correct, leading to incorrect profit calculations."
                            fix="BigQuery warehouse with dbt models that reconcile Shopify Finances API, ad platform invoices, and GA4 e-commerce events into one unified profit layer."
                            deliverable="Single Executive Dashboard showing reconciled net revenue, blended ad spend, and cash-real profit with zero variance."
                        />

                        <UseCaseCard
                            title="Refund-adjusted Margin & ROAS Truth"
                            problem="Platform metrics show optimistic ROAS because they don't account for post-sale refunds. Marketing teams scale based on inflated numbers."
                            fix="Warehouse layer applies Shopify refund data retroactively to ad platform conversion events. ROAS recalculated on cash-collected revenue only."
                            deliverable="Refund-Adjusted ROAS dashboard that shows true performance after refunds are applied, preventing overspend on underperforming campaigns."
                        />

                        <UseCaseCard
                            title="Multi-client Agency Standardized Warehouse Layer"
                            problem="Each client has different reporting formats, making it impossible to compare performance across accounts or deliver consistent KPIs."
                            fix="Standardized dbt schema applied to all client warehouses. Same data model, same KPI definitions, same reconciliation logic—just different client data."
                            deliverable="One reporting template that works for every client. Onboarding time drops from weeks to days. Team alignment across all accounts."
                        />

                    </div>
                </div>

                {/* CTA SECTION */}
                <div className="max-w-4xl mx-auto px-6">
                    <div className="bg-stone-900 rounded-xl p-12 text-center">
                        <h2 className="text-2xl font-serif text-white mb-4">
                            Want to see how this applies to your agency?
                        </h2>
                        <p className="text-stone-400 mb-8 max-w-xl mx-auto">
                            Book a 15-minute warehouse audit. We'll review your current data sources and show you the reconciliation layer.
                        </p>
                        <a
                            href="https://cal.com/calyxra/audit"
                            target="_blank"
                            className="inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-600 text-white px-6 py-3 rounded text-xs font-bold uppercase tracking-widest transition-all"
                        >
                            Request Live Warehouse Audit
                            <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>
                </div>

            </main>

            <Footer />
        </div>
    );
}
