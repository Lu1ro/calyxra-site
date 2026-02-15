'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, ShieldCheck, Scale, ScrollText } from 'lucide-react';

export function TruthContract() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-stone-200 rounded-lg bg-white overflow-hidden shadow-sm">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-4 bg-stone-50 hover:bg-stone-100 transition-colors text-left"
            >
                <div className="flex items-center gap-2 text-stone-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>View Truth Contract & Definitions</span>
                </div>
                {isOpen ? <ChevronUp className="w-4 h-4 text-stone-400" /> : <ChevronDown className="w-4 h-4 text-stone-400" />}
            </button>

            {isOpen && (
                <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">

                    {/* COLUMN 1: Profit Logic */}
                    <div className="space-y-3">
                        <div className="flex items-center gap-2 text-stone-900 font-bold uppercase text-xs tracking-wider">
                            <Scale className="w-3.5 h-3.5" />
                            <span>Net Profit Definition</span>
                        </div>
                        <div className="p-3 bg-stone-50 rounded border border-stone-100 font-mono text-xs text-stone-600 leading-relaxed">
                            Net Sales <br />
                            - COGS (LIFO matched) <br />
                            - Ad Spend (Blended) <br />
                            - Shipping Labels <br />
                            - Gateway Fees (Stripe/Shopify) <br />
                            --------------------------- <br />
                            = <strong className="text-emerald-700">Net Profit</strong>
                        </div>
                    </div>

                    {/* COLUMN 2: Refund Handling */}
                    <div className="space-y-3">
                        <div className="flex items-center gap-2 text-stone-900 font-bold uppercase text-xs tracking-wider">
                            <ScrollText className="w-3.5 h-3.5" />
                            <span>Refund Logic</span>
                        </div>
                        <p className="text-stone-600 text-xs leading-relaxed">
                            Returns are deducted from Revenue and COGS on the <strong>return processed date</strong> (Cash Basis) to align with bank payout reality.
                            <br /><br />
                            Restocking fees are added back as "Other Revenue".
                        </p>
                    </div>

                    {/* COLUMN 3: Reconciliation */}
                    <div className="space-y-3">
                        <div className="flex items-center gap-2 text-stone-900 font-bold uppercase text-xs tracking-wider">
                            <ShieldCheck className="w-3.5 h-3.5" />
                            <span>Reconciliation Promise</span>
                        </div>
                        <ul className="text-stone-600 text-xs space-y-2 list-disc pl-4">
                            <li><strong>Gross Sales:</strong> Matches Shopify "Finances" report exactly.</li>
                            <li><strong>Ad Spend:</strong> Matches Invoice Billing caps (not just API spend).</li>
                            <li><strong>Payouts:</strong> Matches Bank Deposits +/- 24h.</li>
                        </ul>
                    </div>

                </div>
            )}
        </div>
    );
}
