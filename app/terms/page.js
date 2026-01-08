'use client';

function Section({ title, children }) {
  return (
    <section className="mb-10">
      <h2 className="text-lg font-serif font-bold uppercase tracking-wider border-b border-stone-200 pb-2 mb-3">
        {title}
      </h2>
      <div className="text-sm text-stone-600 leading-relaxed space-y-3 font-medium">
        {children}
      </div>
    </section>
  );
}

export default function TermsPage() {
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
            <h1 className="text-4xl font-serif font-medium mb-2">
              Terms of Service
            </h1>
            <p className="text-xs text-stone-400 font-bold uppercase tracking-widest">
              Effective Date: January 1, 2026
            </p>
          </div>

          <Section title="1. Service Scope & Entity">
            <p>
              These Terms govern services provided by
              <strong> Sole Proprietor Oleksandr Kononchuk operating as Calyxra</strong>.
              Calyxra delivers data infrastructure engineering and business
              intelligence solutions for marketing agencies and businesses.
            </p>
          </Section>

          <Section title="2. Intellectual Property">
            <p>
              Calyxra retains ownership of all underlying methodologies, schemas,
              SQL logic, templates, and technical frameworks developed during
              service delivery.
            </p>
            <p>
              Upon full payment, the Client receives a perpetual, non-exclusive
              license to use delivered assets for internal operations and
              client-facing reporting.
            </p>
            <p className="bg-red-50 border border-red-100 p-3 text-red-800">
              Clients may not resell Calyxra’s source files as standalone products.
            </p>
          </Section>

          <Section title="3. Payments & Refunds">
            <p>
              All fees are defined in invoices or service orders. Payments are
              strictly B2B transactions.
            </p>
            <p>
              Setup fees are non-refundable once work has started. Monthly
              retainers require 30-day written cancellation notice.
            </p>
          </Section>

          <Section title="4. Liability Limitations">
            <p>
              Calyxra’s total liability is limited to the total fees paid for the
              specific service giving rise to the claim.
            </p>
            <p>
              We are not responsible for outages or data loss caused by
              third-party platforms or APIs.
            </p>
          </Section>

          <Section title="5. Data Protection (GDPR)">
            <p>
              Calyxra acts as a Data Processor. The Client remains the Data
              Controller. We apply least-privilege access and never sell or reuse
              client data.
            </p>
          </Section>

          <Section title="6. Governing Law">
            <p>
              These Terms are governed by the laws of Ukraine. Any disputes shall
              be resolved under Ukrainian jurisdiction.
            </p>
          </Section>

          <div className="mt-12 pt-8 border-t border-stone-100 text-xs text-stone-400 text-center">
            <p>Sole Proprietor Oleksandr Kononchuk (Calyxra)</p>
            <p>Dubno, Ukraine • admin@calyxra.com</p>
          </div>

        </div>
      </main>

      <footer className="py-8 text-center text-[10px] text-stone-400 uppercase tracking-widest border-t border-stone-200">
        © 2026 Calyxra Data Systems.
      </footer>
    </div>
  );
}
