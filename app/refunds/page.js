'use client';

export default function RefundPage() {
  return (
    <div className="min-h-screen bg-[#FAFAF9] text-stone-900 font-sans selection:bg-emerald-200">
      
      {/* NAV */}
      <nav className="fixed w-full z-50 bg-[#FAFAF9]/90 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-4xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="/" className="text-2xl font-serif font-bold tracking-tight">
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
            <h1 className="text-4xl font-serif font-medium mb-2">Refund Policy</h1>
            <p className="text-xs text-stone-400 font-bold uppercase tracking-widest">
              Effective Date: January 1, 2026
            </p>
            <p className="text-stone-500 text-xs mt-2 italic">
              B2B Professional Services Agreement
            </p>
          </div>

          <div className="space-y-8 text-sm text-stone-600 leading-relaxed font-medium">

            <div className="p-6 bg-emerald-50 border border-emerald-100 text-emerald-900 rounded-sm">
              <strong>B2B Notice:</strong> Calyxra provides custom data engineering
              and analytics services exclusively for business clients. Consumer
              protection laws, cooling-off periods, and retail-style returns do
              not apply.
            </div>

            <section>
              <h3 className="text-lg font-serif font-bold mb-2 border-b border-stone-100 pb-1">
                1. Setup & Engineering Fees
              </h3>
              <p>
                Setup fees cover manual engineering work including data pipeline
                configuration, warehouse modeling, BI dashboard development, and
                secure access provisioning.
              </p>
              <p className="mt-2 font-semibold text-stone-800">
                Once work has started or a kickoff call has taken place, setup
                fees are non-refundable.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-serif font-bold mb-2 border-b border-stone-100 pb-1">
                2. Monthly Retainers & Cancellation
              </h3>
              <p>
                Ongoing services are billed on a monthly retainer basis.
                Cancellation requires a <strong>30-day written notice</strong>
                sent to <strong>admin@calyxra.com</strong>.
              </p>
              <p className="mt-2">
                No prorated refunds are issued for partially used billing periods.
                Services remain active until the end of the paid term.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-serif font-bold mb-2 border-b border-stone-100 pb-1">
                3. Technical Fit Guarantee
              </h3>
              <p>
                If Calyxra confirms technical feasibility but later fails to
                connect agreed data sources due to internal limitations, we will
                issue a <strong>100% refund</strong> for the affected scope.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-serif font-bold mb-2 border-b border-stone-100 pb-1">
                4. Chargebacks & Disputes
              </h3>
              <p>
                Clients must contact Calyxra directly before initiating disputes.
                Unauthorized chargebacks may result in immediate service
                suspension and debt recovery under Ukrainian law.
              </p>
            </section>

          </div>

          <div className="mt-12 pt-8 border-t border-stone-100 text-xs text-stone-400 text-center">
            <p className="font-bold text-stone-500">
              Sole Proprietor Oleksandr Kononchuk (Calyxra)
            </p>
            <p>Dubno, Ukraine</p>
            <p>admin@calyxra.com</p>
          </div>

        </div>
      </main>

      <footer className="py-8 text-center text-[10px] text-stone-400 uppercase tracking-widest border-t border-stone-200">
        © 2026 Calyxra Data Systems. All Rights Reserved.
      </footer>
    </div>
  );
}
