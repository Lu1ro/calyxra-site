import { HealthStatus } from '../../lib/demo-data';
import { Database } from 'lucide-react';

interface TrustHeaderProps {
    lastSyncTime: string;
    healthStatus: HealthStatus;
}

export function TrustHeader({ lastSyncTime, healthStatus }: TrustHeaderProps) {
    const timeString = new Date(lastSyncTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const statusConfig = {
        fresh: { color: 'bg-emerald-500', label: 'Live', text: 'text-emerald-700' },
        stale: { color: 'bg-amber-400', label: 'Stale', text: 'text-amber-700' },
        degraded: { color: 'bg-orange-500', label: 'Degraded', text: 'text-orange-700' },
        broken: { color: 'bg-rose-500', label: 'Offline', text: 'text-rose-700' },
    };

    const currentStatus = statusConfig[healthStatus];

    return (
        <div className="flex items-center gap-3 text-[10px] font-medium border border-stone-200 bg-white px-2 py-1.5 rounded-md shadow-sm w-fit">

            {/* SOURCE BADGE */}
            <div className="flex items-center gap-1.5 text-stone-500 bg-stone-50 px-2 py-0.5 rounded border border-stone-100">
                <Database className="w-3 h-3 text-stone-400" />
                <span>Source: <strong className="text-stone-700">Calyxra Warehouse (BigQuery)</strong></span>
            </div>

            <div className="h-3 w-px bg-stone-200"></div>

            {/* STATUS DOT */}
            <div className="flex items-center gap-1.5">
                <span className="relative flex h-2 w-2">
                    {healthStatus === 'fresh' && (
                        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${currentStatus.color}`}></span>
                    )}
                    <span className={`relative inline-flex rounded-full h-2 w-2 ${currentStatus.color}`}></span>
                </span>
                <span className={`${currentStatus.text} uppercase tracking-wider font-bold`}>
                    {currentStatus.label}
                </span>
            </div>

            <div className="h-3 w-px bg-stone-200"></div>

            {/* TIMESTAMP */}
            <div className="text-stone-400">
                Synced: <span className="text-stone-600 font-mono">{timeString}</span>
            </div>
        </div>
    );
}
