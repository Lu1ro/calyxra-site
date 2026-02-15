import { ArrowUpRight, ArrowDownRight, Minus } from 'lucide-react';

interface ExecutiveKpiCardProps {
    title: string;
    value: string | number;
    change?: number; // percentage, e.g. 12.5 vs last period
    isPositiveGood?: boolean;
    target?: string;
    subtext?: string;
    className?: string;
}

export function ExecutiveKpiCard({ title, value, change, isPositiveGood = true, target, subtext, className = '' }: ExecutiveKpiCardProps) {
    // Format logic
    const formattedValue = typeof value === 'number'
        ? new Intl.NumberFormat('en-US', { style: 'currency', currency: 'EUR', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(value)
        : value;

    // Change Logic
    const isPositive = change && change > 0;
    const isNeutral = change === 0;

    // Color Logic for Change
    // If positive is good (Profit): Green for up, Red for down
    // If positive is bad (CPA): Red for up, Green for down
    let colorClass = 'text-stone-500';
    let Icon = Minus;

    if (!isNeutral && change !== undefined) {
        if (isPositiveGood) {
            colorClass = isPositive ? 'text-emerald-600' : 'text-rose-600';
            Icon = isPositive ? ArrowUpRight : ArrowDownRight;
        } else {
            colorClass = isPositive ? 'text-rose-600' : 'text-emerald-600';
            Icon = isPositive ? ArrowUpRight : ArrowDownRight;
        }
    }

    return (
        <div className={`bg-white p-5 rounded-lg border border-stone-200 shadow-sm flex flex-col justify-between h-full ${className}`}>
            <div>
                <h3 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-2">{title}</h3>
                <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-serif font-medium text-stone-900">{formattedValue}</span>
                </div>
            </div>

            <div className="mt-4 flex items-end justify-between">
                <div>
                    {/* Change Badge */}
                    {change !== undefined && (
                        <div className={`flex items-center gap-1 text-xs font-bold ${colorClass}`}>
                            <Icon className="w-3 h-3" />
                            <span>{Math.abs(change).toFixed(1)}%</span>
                        </div>
                    )}
                    <div className="text-[10px] text-stone-400 font-medium mt-0.5">
                        {subtext || 'vs. last 30 days'}
                    </div>
                </div>

                {/* Optional Target or Mini Sparkline Placeholder */}
                {target && (
                    <div className="text-right">
                        <div className="text-[10px] text-stone-400">Target</div>
                        <div className="text-xs font-mono font-medium text-stone-600">{target}</div>
                    </div>
                )}
            </div>
        </div>
    );
}
