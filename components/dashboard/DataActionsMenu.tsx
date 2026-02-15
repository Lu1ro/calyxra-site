'use client';

import { useState } from 'react';
import { Download, FileCode, ExternalLink, BarChart3, Lock, X } from 'lucide-react';

export function DataActionsMenu() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <div className="flex items-center gap-2">
                <div className="flex bg-white border border-stone-200 rounded-md shadow-sm divide-x divide-stone-100 overflow-hidden">
                    <button
                        onClick={() => setShowModal(true)}
                        className="flex items-center gap-2 px-3 py-1.5 hover:bg-stone-50 transition-colors text-xs font-medium text-stone-600 group"
                        title="Configure Power BI Export"
                    >
                        <BarChart3 className="w-3.5 h-3.5 text-yellow-600 group-hover:text-yellow-700" />
                        <span>Power BI</span>
                    </button>
                    <button
                        onClick={() => setShowModal(true)}
                        className="flex items-center gap-2 px-3 py-1.5 hover:bg-stone-50 transition-colors text-xs font-medium text-stone-600 group"
                        title="Configure Looker Studio Export"
                    >
                        <div className="w-3.5 h-3.5 rounded-full bg-blue-500 group-hover:bg-blue-600 flex items-center justify-center text-[8px] text-white font-bold">L</div>
                        <span>Looker</span>
                    </button>
                </div>

                <button
                    onClick={() => setShowModal(true)}
                    className="flex items-center gap-2 px-3 py-1.5 bg-white border border-stone-200 rounded-md shadow-sm hover:bg-stone-50 transition-colors text-xs font-medium text-stone-500"
                >
                    <FileCode className="w-3.5 h-3.5" />
                    <span className="font-mono text-[10px]">VIEW SQL</span>
                </button>
            </div>

            {/* INFRASTRUCTURE EXPLAINER MODAL */}
            {showModal && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-stone-900/40 backdrop-blur-sm p-4">
                    <div className="bg-white rounded-lg shadow-xl max-w-sm w-full overflow-hidden animate-in fade-in zoom-in-95 duration-200">

                        <div className="flex items-center justify-between p-4 border-b border-stone-100">
                            <h3 className="text-sm font-bold text-stone-900 flex items-center gap-2">
                                <Lock className="w-4 h-4 text-stone-400" />
                                Infrastructure Link
                            </h3>
                            <button onClick={() => setShowModal(false)} className="text-stone-400 hover:text-stone-600">
                                <X className="w-4 h-4" />
                            </button>
                        </div>

                        <div className="p-6">
                            <p className="text-stone-600 text-sm leading-relaxed mb-4">
                                In the live infrastructure, this button connects the <strong>BigQuery Warehouse</strong> directly to your corporate Power BI or Looker workspace.
                            </p>
                            <p className="text-stone-500 text-xs bg-stone-50 p-3 rounded border border-stone-100">
                                <strong>Why is this locked?</strong><br />
                                This demo environment is running on a public instance. To connect your own BI tool, we need to provision your dedicated warehouse first.
                            </p>
                        </div>

                        <div className="p-4 bg-stone-50 border-t border-stone-100 flex justify-end">
                            <button
                                onClick={() => setShowModal(false)}
                                className="px-4 py-2 bg-stone-900 text-white text-xs font-bold rounded hover:bg-stone-800 transition-colors"
                            >
                                Understood
                            </button>
                        </div>

                    </div>
                </div>
            )}
        </>
    );
}
