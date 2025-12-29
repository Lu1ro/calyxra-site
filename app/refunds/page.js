'use client';

export default function RefundPage() {
  return (
    <div className="min-h-screen bg-[#FAFAF9] text-stone-900 font-sans selection:bg-emerald-200">
      
      <nav className="fixed w-full z-50 bg-[#FAFAF9]/90 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-4xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="/" className="text-2xl font-serif font-bold tracking-tight text-stone-900 hover:opacity-80">
            Calyxra<span className="text-emerald-700">.</span>
          </a>
          <a href="/" className="text-xs font-bold text-stone-500 uppercase tracking-widest hover:text-stone-900">
            ← Back to Home
          </a>
        </div>
      </nav>

      <main className="pt-32 px-6 pb-24">
        <div className="max-w-3xl mx-auto bg-white p-12 border border-stone-200 shadow-sm">
          
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-serif font-medium text-stone-900 mb-2">Refund Policy</h1>
            <p className="text-stone-500 text-sm">B2B Commercial Agreement</p>
          </div>

          <div className="space-y-8 text-sm text-stone-600 leading-relaxed font-medium">
            <div className="p-6 bg-emerald-50 border border-emerald-100 text-emerald-900">
              <strong>Executive Summary:</strong> Due to the custom engineering nature of our work, the Setup Fee is non-refundable once the onboarding call has been completed.
            </div>

            <div>
              <h3 className="text-lg font-serif font-bold text-stone-900 mb-2">1. Setup Fee (Non-Refundable)</h3>
              <p>
                The Setup Fee covers the manual labor of our Senior Data Engineers to configure your private BigQuery warehouse and Power BI environment. Once we begin this configuration, these labor hours cannot be recovered. Therefore, no refunds are issued for the Setup Fee after work has commenced.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-serif font-bold text-stone-900 mb-2">2. Monthly Retainer</h3>
              <p>
                You may cancel your monthly retainer at any time with 30 days' written notice via email to admin@calyxra.com. We do not offer prorated refunds for partial months. Your data pipelines will remain active until the billing cycle ends.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-serif font-bold text-stone-900 mb-2">3. The "Technical Fit" Guarantee</h3>
              <p>
                We offer a free technical audit <strong>before</strong> invoicing. If we approve your project but subsequently fail to connect your specific data sources due to technical limitations on our side, we will issue a full refund of any paid deposits.
              </p>
            </div>
          </div>

        </div>
      </main>

      <footer className="py-8 text-center text-[10px] text-stone-400 uppercase tracking-widest border-t border-stone-200">
        © 2025 Calyxra Data Systems.
      </footer>
    </div>
  );
}