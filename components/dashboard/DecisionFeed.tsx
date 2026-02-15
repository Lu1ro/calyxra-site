import { AlertTriangle, TrendingUp, ShieldAlert, ArrowRight } from 'lucide-react';
import { DecisionInsight } from '../../lib/demo-data';

interface DecisionFeedProps {
    insights: DecisionInsight[];
}

export function DecisionFeed({ insights }: DecisionFeedProps) {
    if (!insights || insights.length === 0) return null;

    // Prioritize High Severity
    const sortedInsights = [...insights].sort((a, b) => {
        const severityScore = { high: 3, medium: 2, low: 1 };
        return severityScore[b.severity] - severityScore[a.severity];
    }).slice(0, 3); // Max 3 items

    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-stone-500 uppercase tracking-wider">Decision Feed</h3>
                <span className="text-xs text-stone-400 bg-stone-100 px-2 py-0.5 rounded-full">AI Analysis</span>
            </div>

            <div className="grid gap-3">
                {sortedInsights.map((insight) => (
                    <div
                        key={insight.id}
                        className={`
                            relative p-4 rounded-lg border-l-4 shadow-sm bg-white
                            ${insight.type === 'risk' ? 'border-l-rose-500 ' : ''}
                            ${insight.type === 'opportunity' ? 'border-l-emerald-500' : ''}
                            ${insight.type === 'constraint' ? 'border-l-amber-500' : ''}
                        `}
                    >
                        <div className="flex items-start gap-3">
                            {/* ICON */}
                            <div className="mt-0.5 shrink-0">
                                {insight.type === 'risk' && <AlertTriangle className="w-5 h-5 text-rose-500" />}
                                {insight.type === 'opportunity' && <TrendingUp className="w-5 h-5 text-emerald-500" />}
                                {insight.type === 'constraint' && <ShieldAlert className="w-5 h-5 text-amber-500" />}
                            </div>

                            {/* CONTENT */}
                            <div className="flex-1">
                                <div className="flex items-center justify-between mb-1">
                                    <h4 className="font-bold text-stone-900 text-sm">{insight.title}</h4>
                                    {insight.metric && (
                                        <span className={`text-xs font-mono font-bold px-1.5 py-0.5 rounded
                                            ${insight.type === 'risk' ? 'bg-rose-50 text-rose-700' : ''}
                                            ${insight.type === 'opportunity' ? 'bg-emerald-50 text-emerald-700' : ''}
                                            ${insight.type === 'constraint' ? 'bg-amber-50 text-amber-700' : ''}
                                        `}>
                                            {insight.metric}
                                        </span>
                                    )}
                                </div>
                                <p className="text-xs text-stone-600 leading-relaxed max-w-[90%]">
                                    {insight.description}
                                </p>

                                {insight.actionLabel && (
                                    <button className="mt-2 text-xs font-bold flex items-center gap-1 hover:opacity-75 transition-opacity
                                        text-stone-800
                                    ">
                                        {insight.actionLabel}
                                        <ArrowRight className="w-3 h-3" />
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
