export default function AuditOfferSection() {
    return (
        <section className="py-20 px-6 bg-gradient-to-br from-stone-50 via-white to-emerald-50/30 border-y border-stone-200">
            <div className="max-w-6xl mx-auto">
                {/* Section Label */}
                <div className="flex justify-center mb-8">
                    <div className="inline-flex items-center gap-2 bg-emerald-600 px-4 py-1.5 rounded-full">
                        <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                        </svg>
                        <span className="text-white text-[10px] font-bold uppercase tracking-widest">Source-of-Truth Audit (Entry Offer)</span>
                    </div>
                </div>

                {/* Two-Column Layout */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left Column: Offer Description */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-serif font-medium text-stone-900 mb-4 leading-tight">
                            Your Shopify numbers don't match.<br />
                            <span className="text-emerald-700">We'll show you why.</span>
                        </h2>

                        <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                            A 45-minute technical audit where we reconcile Shopify, GA4 and ad platforms—and show exactly what's broken and what it's costing you.
                        </p>

                        {/* Key Benefits */}
                        <ul className="space-y-4 mb-10">
                            <li className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <svg className="w-3.5 h-3.5 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <span className="text-stone-700">Live revenue reconciliation (Shopify vs GA4 vs Ads)</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <svg className="w-3.5 h-3.5 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <span className="text-stone-700">Identify attribution, timezone, refund & tracking breaks</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <svg className="w-3.5 h-3.5 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <span className="text-stone-700">Clear answer: which numbers are safe to trust</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <svg className="w-3.5 h-3.5 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <span className="text-stone-700">Written report + fix roadmap delivered in 3 business days</span>
                            </li>
                        </ul>

                        {/* Pricing & CTA */}
                        <div className="bg-white border-2 border-stone-200 p-6 rounded-sm mb-6">
                            <div className="flex items-baseline gap-2 mb-2">
                                <span className="text-4xl font-serif font-medium text-stone-900">€349</span>
                                <span className="text-stone-500 text-sm">— paid audit</span>
                            </div>
                            <p className="text-sm text-stone-600 mb-4">
                                Report delivered in 3 business days<br />
                                For Shopify brands & agencies doing €300K+/month
                            </p>
                            <a
                                href="https://cal.com/calyxra/audit"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full py-4 bg-emerald-700 text-white text-center font-bold text-sm uppercase tracking-widest hover:bg-emerald-800 transition-all shadow-lg hover:shadow-xl"
                            >
                                Book Audit — €349
                            </a>
                        </div>

                        <p className="text-xs text-stone-400 italic text-center">
                            "This is a diagnostic, not a strategy call."
                        </p>
                    </div>

                    {/* Right Column: Deliverables Card */}
                    <div className="bg-stone-900 text-white p-8 shadow-2xl border border-stone-800">
                        <h3 className="text-lg font-serif font-medium mb-6 flex items-center gap-3">
                            <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            What you receive
                        </h3>

                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-sm text-white/90">
                                <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Full data-flow map</span>
                            </li>
                            <li className="flex items-start gap-3 text-sm text-white/90">
                                <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Reconciliation table</span>
                            </li>
                            <li className="flex items-start gap-3 text-sm text-white/90">
                                <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Risk assessment (red/yellow/green metrics)</span>
                            </li>
                            <li className="flex items-start gap-3 text-sm text-white/90">
                                <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Prioritized fix roadmap</span>
                            </li>
                            <li className="flex items-start gap-3 text-sm text-white/90">
                                <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Optional upgrade path to Calyxra profit layer</span>
                            </li>
                        </ul>

                        <div className="mt-8 pt-6 border-t border-white/10">
                            <div className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <p className="text-xs text-white/60 leading-relaxed">
                                    This audit identifies what's broken. If you want to fix it permanently with infrastructure, that's where Calyxra comes in (separate pricing).
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
