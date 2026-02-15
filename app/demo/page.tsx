'use client';

import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

// --- HELPER COMPONENTS ---

function Badge({ text, variant = 'default' }: { text: string; variant?: 'default' | 'highlight' }) {
    return (
        <span className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase ${variant === 'highlight'
            ? 'bg-emerald-100 border border-emerald-300 text-emerald-700'
            : 'bg-stone-200/50 border border-stone-300 text-stone-600'
            }`}>
            {text}
        </span>
    );
}

function TrustBadge({ icon, text }: { icon: React.ReactNode; text: string }) {
    return (
        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-stone-100 border border-stone-200 rounded-full text-xs font-medium text-stone-600">
            {icon}
            {text}
        </span>
    );
}

function DashboardPreview({ title, description, image }: { title: string; description: string; image: string }) {
    return (
        <div className="group">
            <div className="aspect-video bg-stone-100 relative overflow-hidden border border-stone-200 mb-3 group-hover:border-emerald-500/50 transition-colors shadow-sm">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-all duration-500 group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                />
            </div>
            <h4 className="text-stone-900 font-medium text-sm mb-1">{title}</h4>
            <p className="text-stone-500 text-xs">{description}</p>
        </div>
    );
}

function DeliverableItem({ text }: { text: string }) {
    return (
        <li className="flex items-start gap-3 text-stone-700">
            <svg className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>{text}</span>
        </li>
    );
}

// --- MAIN PAGE ---

export default function DemoPage() {
    const calendlyUrl = "https://cal.com/calyxra/15min";
    const auditUrl = "https://cal.com/calyxra/audit";

    return (
        <div className="min-h-screen bg-[#FAFAF9] text-stone-900 font-sans selection:bg-emerald-200 selection:text-emerald-900">

            <Navbar />

            <main className="pt-32">

                {/* 1️⃣ HERO SECTION */}
                <section className="px-6 pb-20 text-center border-b border-stone-200 bg-[#FAFAF9]">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex justify-center gap-3 mb-6">
                            <Badge text="Live Demo" variant="highlight" />
                            <Badge text="For Agencies" />
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-stone-900 mb-6 leading-[1.1]">
                            See how Shopify agencies turn inconsistent numbers into{' '}
                            <span className="italic text-emerald-700">one source of truth</span>
                        </h1>

                        <p className="text-xl text-stone-500 mb-8 max-w-2xl mx-auto leading-relaxed">
                            2-minute walkthrough of a real reconciliation system used to align Shopify, GA4 and ad platforms.
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
                            <a href={calendlyUrl} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-emerald-700 text-white font-bold text-sm uppercase tracking-widest hover:bg-emerald-800 transition-all shadow-lg">
                                Book 15-min Audit Call
                            </a>
                            <a href="#demo-video" className="px-8 py-4 bg-transparent border-2 border-stone-300 text-stone-900 font-bold text-sm uppercase tracking-widest hover:bg-stone-100 transition-all">
                                Watch Demo ↓
                            </a>
                        </div>
                    </div>
                </section>

                {/* 2️⃣ LOOM DEMO BLOCK */}
                <section id="demo-video" className="px-6 py-20 bg-white border-b border-stone-200">
                    <div className="max-w-5xl mx-auto">
                        {/* Video Placeholder - Replace with real Loom embed */}
                        <div className="aspect-video bg-gradient-to-br from-stone-800 to-stone-900 rounded-lg overflow-hidden mb-8 relative group border border-stone-200 shadow-xl">
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                                <div className="w-24 h-24 bg-emerald-600 rounded-full flex items-center justify-center mb-6 group-hover:bg-emerald-500 transition-colors shadow-lg shadow-emerald-600/30 cursor-pointer">
                                    <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-white text-2xl font-semibold mb-2">Calyxra Demo Walkthrough</h3>
                                <p className="text-white/70 text-sm max-w-md">90-second overview of how agencies get one source of truth for all client stores.</p>
                                <span className="mt-4 text-emerald-400 text-xs font-bold uppercase tracking-widest">Video Coming Soon</span>
                            </div>
                            {/* Uncomment when you have the real Loom URL:
              <iframe
                src="https://www.loom.com/embed/YOUR-LOOM-ID"
                title="Calyxra Demo"
                className="w-full h-full"
                frameBorder={0}
                allowFullScreen
              />
              */}
                        </div>

                        {/* What you'll see */}
                        <div className="bg-stone-50 border border-stone-200 p-8 rounded-lg">
                            <h3 className="text-lg font-semibold text-stone-900 mb-6">What you'll see in this demo:</h3>
                            <ul className="grid md:grid-cols-2 gap-4 text-stone-600 text-sm">
                                <li className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 flex-shrink-0"></span>
                                    <span>How Shopify net revenue becomes the financial source of truth</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 flex-shrink-0"></span>
                                    <span>How GA4, Meta and Google Ads are reconciled</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 flex-shrink-0"></span>
                                    <span>How agencies track MER, CAC, LTV without number conflicts</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 flex-shrink-0"></span>
                                    <span>How reporting time drops and internal debates disappear</span>
                                </li>
                            </ul>
                            <p className="mt-6 text-xs text-stone-400 italic">Demo uses anonymized data. No client data is shown.</p>
                        </div>
                    </div>
                </section>

                {/* BEFORE / AFTER SECTION */}
                <section className="px-6 py-20 bg-white border-b border-stone-200">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-serif font-medium text-stone-900 mb-4">Before → After</h2>
                            <div className="h-1 w-20 bg-emerald-700 mx-auto mb-4"></div>
                            <p className="text-stone-500 max-w-xl mx-auto">What changes when agencies implement Calyxra</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {/* BEFORE */}
                            <div className="bg-stone-50 border border-stone-200 p-8 relative">
                                <div className="absolute -top-3 left-6 bg-red-100 text-red-700 px-3 py-1 text-xs font-bold uppercase tracking-wide">Before</div>
                                <ul className="space-y-4 mt-4">
                                    <li className="flex items-start gap-3">
                                        <svg className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                                        <span className="text-stone-600">Shopify, GA4, Meta show different revenue</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <svg className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                                        <span className="text-stone-600">Manual spreadsheet reconciliation</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <svg className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                                        <span className="text-stone-600">Team debates which number is correct</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <svg className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                                        <span className="text-stone-600">Hours spent on weekly client reports</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <svg className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                                        <span className="text-stone-600">Scaling decisions based on platform metrics</span>
                                    </li>
                                </ul>
                            </div>

                            {/* AFTER */}
                            <div className="bg-emerald-50 border border-emerald-200 p-8 relative">
                                <div className="absolute -top-3 left-6 bg-emerald-100 text-emerald-700 px-3 py-1 text-xs font-bold uppercase tracking-wide">After</div>
                                <ul className="space-y-4 mt-4">
                                    <li className="flex items-start gap-3">
                                        <svg className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                        <span className="text-stone-700">One reconciled source of truth</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <svg className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                        <span className="text-stone-700">Automated daily data refresh</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <svg className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                        <span className="text-stone-700">Standard KPI definitions everyone trusts</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <svg className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                        <span className="text-stone-700">Client-ready reports in minutes</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <svg className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                        <span className="text-stone-700">Scaling decisions based on profit</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3️⃣ DASHBOARD PREVIEWS */}
                <section className="px-6 py-20 bg-[#FAFAF9] border-b border-stone-200">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-serif font-medium text-stone-900 mb-4">Dashboard Previews</h2>
                            <div className="h-1 w-20 bg-emerald-700 mx-auto mb-4"></div>
                            <p className="text-stone-500 max-w-xl mx-auto">Real screenshots from our demo environment. What agencies actually see every day.</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            <DashboardPreview
                                title="Executive KPI + Profit"
                                description="Net revenue, MER, contribution margin"
                                image="/asset-executive-v3.png"
                            />
                            <DashboardPreview
                                title="Marketing Performance"
                                description="Channel reconciliation & blended MER"
                                image="/asset-marketing-v3.png"
                            />
                            <DashboardPreview
                                title="Customers & Retention"
                                description="Cohorts, repeat rate, LTV trends"
                                image="/asset-retention-v3.png"
                            />
                        </div>

                        <div className="text-center mt-10">
                            <a href="/deliverables" className="text-emerald-700 font-medium text-sm hover:text-emerald-800 transition-colors underline underline-offset-4">
                                View all infrastructure outputs →
                            </a>
                        </div>
                    </div>
                </section>

                {/* 4️⃣ WHAT AGENCIES ACTUALLY GET */}
                <section className="px-6 py-20 bg-white border-b border-stone-200">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-serif font-medium text-stone-900 mb-4">What agencies actually get</h2>
                            <div className="h-1 w-20 bg-emerald-700 mx-auto mb-4"></div>
                            <p className="text-stone-500">No buzzwords. Concrete deliverables.</p>
                        </div>

                        <div className="bg-stone-50 border border-stone-200 p-8 md:p-12 rounded-lg">
                            <ul className="space-y-5 text-lg">
                                <DeliverableItem text="Reconciliation system between Shopify, GA4 and ad platforms" />
                                <DeliverableItem text="KPI dictionary (what every metric really means)" />
                                <DeliverableItem text="Profit-grade dashboards (not platform numbers)" />
                                <DeliverableItem text="Automated reporting layer for their clients" />
                                <DeliverableItem text="One source of truth their team can rely on" />
                            </ul>
                        </div>
                    </div>
                </section>

                {/* 5️⃣ WHO THIS IS FOR / NOT FOR */}
                <section className="px-6 py-20 bg-[#FAFAF9] border-b border-stone-200">
                    <div className="max-w-5xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* For */}
                            <div className="bg-emerald-50 border border-emerald-200 p-8 rounded-lg">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center">
                                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold text-stone-900">This is for you if...</h3>
                                </div>
                                <ul className="space-y-4 text-stone-700">
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 flex-shrink-0"></span>
                                        <span>You manage <strong className="text-stone-900">1+ Shopify store</strong> (or multiple client stores)</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 flex-shrink-0"></span>
                                        <span>You want a single reconciled source of truth (Shopify + Ads + GA4)</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 flex-shrink-0"></span>
                                        <span>You need client-ready reporting delivered into Power BI / Looker</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Not for */}
                            <div className="bg-white border border-stone-200 p-8 rounded-lg">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 bg-stone-300 rounded-full flex items-center justify-center">
                                        <svg className="w-5 h-5 text-stone-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold text-stone-900">This is NOT for...</h3>
                                </div>
                                <ul className="space-y-4 text-stone-500">
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 flex-shrink-0"></span>
                                        <span>Beginner dropshippers</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 flex-shrink-0"></span>
                                        <span>Influencer dashboards</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 flex-shrink-0"></span>
                                        <span>"Nice looking" BI without financial accuracy</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 6️⃣ INFRASTRUCTURE PROOF SIGNALS */}
                <section className="px-6 py-20 bg-white border-b border-stone-200">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-serif font-medium text-stone-900 mb-4">
                                Infrastructure Proof
                            </h2>
                            <p className="text-stone-500 max-w-xl mx-auto">
                                Pipeline → Warehouse → Export → Verified Numbers
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-stone-50 border border-stone-200 p-6 text-center">
                                <div className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-3">Variance</div>
                                <div className="text-3xl font-serif font-medium text-emerald-700 mb-2">€0.00</div>
                                <div className="text-sm text-stone-600">Reconciled across Shopify + Ads + GA4</div>
                            </div>

                            <div className="bg-emerald-50 border border-emerald-200 p-6 text-center">
                                <div className="text-xs font-bold uppercase tracking-widest text-emerald-800 mb-3">Logic Applied</div>
                                <div className="text-3xl font-serif font-medium text-emerald-700 mb-2">✓</div>
                                <div className="text-sm text-emerald-700 font-medium">Refund Logic Applied (Cash-real profit)</div>
                            </div>

                            <div className="bg-stone-50 border border-stone-200 p-6 text-center">
                                <div className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-3">Source</div>
                                <div className="text-3xl font-serif font-medium text-stone-900 mb-2">BQ</div>
                                <div className="text-sm text-stone-600">Client-Owned BigQuery Warehouse</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 7️⃣ FINAL CTA BLOCK */}
                <section className="px-6 py-24 bg-stone-900">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-serif font-medium text-white mb-4">
                            Get the full demo + your audit plan
                        </h2>
                        <p className="text-lg text-stone-400 mb-10 max-w-xl mx-auto">
                            On the call we review your current tracking, show where numbers break, and map how Calyxra would fix it.
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
                            <a href={calendlyUrl} target="_blank" rel="noopener noreferrer" className="px-10 py-5 bg-emerald-600 text-white font-bold text-sm tracking-widest uppercase hover:bg-emerald-500 transition-all shadow-xl shadow-emerald-600/30">
                                Book 15-min Audit Call
                            </a>
                            <a href={auditUrl} target="_blank" rel="noopener noreferrer" className="px-10 py-5 bg-transparent border border-white/20 text-white font-bold text-sm tracking-widest uppercase hover:bg-white/10 transition-all">
                                Book Paid Audit — €349
                            </a>
                        </div>

                        {/* Trust badges */}
                        <div className="flex flex-wrap justify-center gap-3">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-stone-800 border border-stone-700 rounded-full text-xs font-medium text-stone-300">
                                <svg className="w-3.5 h-3.5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                                GDPR-ready
                            </span>
                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-stone-800 border border-stone-700 rounded-full text-xs font-medium text-stone-300">
                                <svg className="w-3.5 h-3.5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" /></svg>
                                BigQuery + Looker/Power BI
                            </span>
                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-stone-800 border border-stone-700 rounded-full text-xs font-medium text-stone-300">
                                <svg className="w-3.5 h-3.5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                                No access without permission
                            </span>
                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-stone-800 border border-stone-700 rounded-full text-xs font-medium text-stone-300">
                                <svg className="w-3.5 h-3.5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                                Demo data only
                            </span>
                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
}
