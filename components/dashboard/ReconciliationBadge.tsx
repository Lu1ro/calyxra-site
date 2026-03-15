import { AlertCircle, CheckCircle2, AlertTriangle, Database } from 'lucide-react';

interface ReconciliationBadgeProps {
    status: 'verified' | 'estimated' | 'action_required';
    varianceAmount: number;
    unreconciledSources: string[];
}

export function ReconciliationBadge({ status, varianceAmount, unreconciledSources }: ReconciliationBadgeProps) {

    if (status === 'verified') {
        return (
            <div className="flex items-center gap-2 text-stone-400 text-xs font-mono cursor-help" title="All transaction sources matched (Shopify vs Ad Platforms vs Bank)">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                <span>RECONCILED</span>
            </div>
        );
    }

    if (status === 'estimated') {
        return (
            <div className="flex items-center gap-2 text-amber-600 text-xs font-mono cursor-help bg-amber-50 px-2 py-1 rounded" title="Minor variance detected due to currency/timing.">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>~99% ACCURACY</span>
                <span className="opacity-50">|</span>
                <span>Var: {varianceAmount > 0 ? '+' : ''}${varianceAmount.toFixed(2)}</span>
            </div>
        );
    }

    // Action Required - Only this one looks interactive/alerting
    return (
        <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 text-rose-600 text-xs font-bold px-2 py-1 bg-rose-50 rounded border border-rose-100">
                <Database className="w-3.5 h-3.5" />
                <span>MISSING DATA</span>
            </div>
            {unreconciledSources.length > 0 && (
                <span className="text-[10px] text-stone-500 underline cursor-pointer hover:text-stone-800">
                    Fix {unreconciledSources.length} Sources
                </span>
            )}
        </div>
    );
}
