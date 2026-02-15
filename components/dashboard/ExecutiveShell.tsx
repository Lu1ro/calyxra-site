'use client';

import { ReactNode } from 'react';
import { DashboardState } from '../../lib/demo-data'; // Adjust path
import { TrustHeader } from './TrustHeader';
import { ReconciliationBadge } from './ReconciliationBadge';
import { DataActionsMenu } from './DataActionsMenu';
import { Lock } from 'lucide-react';

interface ExecutiveShellProps {
    dashboardState: DashboardState;
    children: ReactNode;
}

export function ExecutiveShell({ dashboardState, children }: ExecutiveShellProps) {
    const isBroken = dashboardState.healthStatus === 'broken';

    return (
        <div className="min-h-screen bg-[#F5F5F4] p-6 relative">

            {/* GLOBAL HEADER BAR */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                    {/* BREADCRUMB / TITLE */}
                    <div className="flex items-center gap-3">
                        <h1 className="text-xl font-serif font-medium text-stone-900">
                            Executive Report <span className="text-stone-400 font-sans font-normal">(Auto-Generated)</span>
                        </h1>
                        {isBroken && <span className="text-xs bg-rose-100 text-rose-700 px-2 py-0.5 rounded font-sans font-bold uppercase tracking-wider">Offline</span>}
                    </div>
                    <p className="text-xs text-stone-500 mt-1 flex items-center gap-1.5">
                        Generated from <span className="font-semibold text-stone-700">Calyxra Warehouse</span>
                        <span className="text-stone-300">•</span>
                        Delivered to <span className="font-semibold text-stone-700">Client Portal</span>
                    </p>
                </div>

                {/* TRUST & ACTIONS LAYER (Right Side) */}
                <div className="flex flex-col items-end gap-2">
                    {/* Top Row: Trust Signals */}
                    <div className="flex items-center gap-3">
                        <TrustHeader
                            lastSyncTime={dashboardState.lastSyncTime}
                            healthStatus={dashboardState.healthStatus}
                        />
                        <ReconciliationBadge
                            status={dashboardState.reconciliation.status}
                            varianceAmount={dashboardState.reconciliation.varianceAmount}
                            unreconciledSources={dashboardState.reconciliation.unreconciledSources}
                        />
                    </div>

                    {/* Bottom Row: Data Actions */}
                    <DataActionsMenu />
                </div>
            </div>

            {/* MAIN CONTENT AREA */}
            <div className="relative">
                {isBroken && (
                    <div className="absolute inset-0 z-50 backdrop-blur-md bg-white/50 flex flex-col items-center justify-center text-center p-8 border border-rose-200 rounded-lg">
                        <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mb-4">
                            <Lock className="w-8 h-8 text-rose-600" />
                        </div>
                        <h2 className="text-xl font-bold text-stone-900 mb-2">Safety Lock Active</h2>
                        <p className="text-stone-600 max-w-md mb-6">
                            Core data sources (Shopify API) are unreachable. To prevent decision errors, the dashboard has been locked.
                        </p>
                        <button className="px-6 py-2 bg-stone-900 text-white font-bold text-sm rounded hover:bg-stone-800 transition-colors">
                            Check Connection Status
                        </button>
                    </div>
                )}

                {/* Content - Blurred if broken */}
                <div className={isBroken ? 'opacity-20 pointer-events-none filter blur-sm' : ''}>
                    {children}
                </div>
            </div>

        </div>
    );
}
