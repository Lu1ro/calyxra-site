'use client';

function Section({ title, children }) {
  return (
    <div className="mb-10">
      <h2 className="text-lg font-serif font-bold text-stone-900 mb-3 uppercase tracking-wider border-b border-stone-200 pb-2">{title}</h2>
      <div className="text-stone-600 text-sm leading-relaxed space-y-3 font-medium">
        {children}
      </div>
    </div>
  );
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#FAFAF9] text-stone-900 font-sans selection:bg-emerald-200">
      
      {/* NAV */}
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
            <h1 className="text-4xl font-serif font-medium text-stone-900 mb-2">Terms of Service</h1>
            <p className="text-xs text-stone-400 font-bold uppercase tracking-widest">Effective Date: December 28, 2025</p>
          </div>

          <Section title="1. Service Scope">
            <p>
              Calyxra ("we") provides data infrastructure engineering and business intelligence assets for marketing agencies ("Client"). By engaging our services, you agree that you are purchasing a B2B service for professional use.
            </p>
          </Section>

          <Section title="2. Intellectual Property & License">
            <p>
              <strong>Ownership:</strong> Calyxra retains all intellectual property rights to the underlying SQL logic, data schemas, and Power BI template structures ("Core IP").
            </p>
            <p>
              <strong>License Grant:</strong> Upon full payment, Calyxra grants the Client a perpetual, non-exclusive, worldwide license to use, modify, and display the delivered assets for internal business operations and client reporting.
            </p>
            <p className="text-red-800 bg-red-50 p-3 border border-red-100">
              <strong>Restriction:</strong> You may NOT resell, sub-license, or redistribute our source code (.pbix files or SQL scripts) as a standalone software product or template pack to third parties.
            </p>
          </Section>

          <Section title="3. Payment Terms">
            <p>
              <strong>Agency Pilot (€900 + Setup):</strong> 100% upfront payment required to reserve engineering capacity.
            </p>
            <p>
              <strong>Agency Scale (€1,500 + Setup):</strong> Split payment available (50% deposit / 50% upon delivery) at our discretion.
            </p>
            <p>
              Late payments for monthly retainers may result in the temporary suspension of data pipeline updates (BigQuery scheduled queries).
            </p>
          </Section>

          <Section title="4. Liability">
            <p>
              Our services rely on third-party APIs (Shopify, Meta, Google). We are not liable for data interruptions caused by platform outages or API deprecations managed by these providers. We commit to updating our connectors within a reasonable timeframe as part of the monthly retainer.
            </p>
          </Section>

          <div className="mt-12 pt-8 border-t border-stone-100 text-xs text-stone-400 text-center">
            <p>Sole Trader Kononchuk Oleksandr Yaroslavovych</p>
            <p>Dubno, Ukraine. admin@calyxra.com</p>
          </div>

        </div>
      </main>
      
      <footer className="py-8 text-center text-[10px] text-stone-400 uppercase tracking-widest border-t border-stone-200">
        © 2025 Calyxra Data Systems.
      </footer>
    </div>
  );
}