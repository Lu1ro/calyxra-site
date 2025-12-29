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
            <h1 className="text-4xl font-serif font-medium text-stone-900 mb-2">Data Privacy & Security</h1>
            <p className="text-stone-500 text-sm">Security Protocols for Agency Partners</p>
          </div>

          <div className="space-y-8 text-sm text-stone-600 leading-relaxed font-medium">
            
            <div>
              <h3 className="text-lg font-serif font-bold text-stone-900 mb-2">1. Data Ownership</h3>
              <p>
                Calyxra acts solely as a Data Processor. <strong>You (the Client) retain 100% ownership of all data</strong> processed through our infrastructure. We do not aggregate, sell, or share your clients' performance data with any third parties.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-serif font-bold text-stone-900 mb-2">2. Storage Architecture</h3>
              <p>
                We deploy a dedicated Google BigQuery project for each agency. Your data is isolated in your own cloud environment, ensuring no cross-contamination with other clients. We use industry-standard encryption (AES-256) for data at rest and in transit.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-serif font-bold text-stone-900 mb-2">3. Access Control</h3>
              <p>
                We request "Least Privilege" access to your Shopify and Ad Accounts (usually "Analyst" or "Viewer" level). We never ask for Admin permissions or ability to modify ad campaigns.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-serif font-bold text-stone-900 mb-2">4. Non-Disclosure Agreement (NDA)</h3>
              <p>
                We automatically adhere to strict confidentiality regarding your agency's client list and revenue figures. We are happy to sign your specific NDA prior to the Kick-off call.
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