'use client';

export default function PrivacyPage() {
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
            <h1 className="text-4xl font-serif font-medium text-stone-900 mb-2">Privacy & Data Security</h1>
            <p className="text-xs text-stone-400 font-bold uppercase tracking-widest">Effective Date: January 1, 2026</p>
            <p className="text-stone-500 text-xs mt-2 italic">GDPR & B2B Compliance Protocol</p>
          </div>

          <div className="space-y-8 text-sm text-stone-600 leading-relaxed font-medium">
            
            <section>
              <h3 className="text-lg font-serif font-bold text-stone-900 mb-2 border-b border-stone-100 pb-1">1. Legal Entity & Roles</h3>
              <p>
                This Privacy Policy governs the data processing practices of <strong>Sole Proprietor Oleksandr Kononchuk operating as Calyxra</strong> (“Calyxra”, “we”, “us”).
              </p>
              <p className="mt-2">
                Under GDPR definitions, Calyxra acts as a <strong>Data Processor</strong>. Our Clients act as <strong>Data Controllers</strong>. We process data solely under documented client instructions.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-serif font-bold text-stone-900 mb-2 border-b border-stone-100 pb-1">2. Data Isolation & Architecture</h3>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li><strong>Environment Isolation:</strong> Dedicated BigQuery projects or datasets per Client.</li>
                <li><strong>Encryption:</strong> AES-256 at rest and TLS 1.2+ in transit.</li>
                <li><strong>No Data Resale:</strong> Client data is never aggregated, sold, or reused.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-serif font-bold text-stone-900 mb-2 border-b border-stone-100 pb-1">3. Access Control</h3>
              <p>
                We follow the Principle of Least Privilege. Access is limited to required roles only. Credentials are never stored; secure OAuth or service accounts are used.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-serif font-bold text-stone-900 mb-2 border-b border-stone-100 pb-1">4. International Transfers</h3>
              <p>
                For EU and US Clients, Standard Contractual Clauses (SCCs) are applied to ensure GDPR-equivalent protection.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-serif font-bold text-stone-900 mb-2 border-b border-stone-100 pb-1">5. Sub-processors</h3>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Google Cloud Platform (BigQuery)</li>
                <li>Microsoft Power BI</li>
                <li>Vercel (website hosting)</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-serif font-bold text-stone-900 mb-2 border-b border-stone-100 pb-1">6. Confidentiality</h3>
              <p>
                All project data and communications are confidential. NDA execution is available upon request.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-serif font-bold text-stone-900 mb-2 border-b border-stone-100 pb-1">7. Contact</h3>
              <p>
                GDPR inquiries: <strong>admin@calyxra.com</strong>
              </p>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-stone-100 text-[10px] text-stone-400 text-center uppercase tracking-widest">
            <p className="font-bold">Sole Proprietor Oleksandr Kononchuk (Calyxra)</p>
            <p>Dubno, Ukraine • 2026</p>
          </div>

        </div>
      </main>
    </div>
  );
}
