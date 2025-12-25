export default function TermsOfService() {
  return (
    <div className="bg-[#050505] text-[#ededed] min-h-screen p-8 md:p-24 font-sans italic selection:bg-blue-500/30">
      <div className="max-w-4xl mx-auto">
        <a href="/" className="text-blue-500 hover:text-blue-400 mb-12 inline-block font-black uppercase tracking-widest text-xs not-italic transition-colors">
          ← Back to Home
        </a>
        
        <h1 className="text-5xl font-black mb-16 text-white uppercase italic tracking-tighter">
          Terms of <span className="text-blue-500">Service.</span>
        </h1>

        <div className="space-y-12 text-gray-400 leading-relaxed text-base not-italic">
          
          {/* Section 1: Agreement */}
          <section className="space-y-4">
            <h2 className="text-white font-black uppercase tracking-widest text-sm italic">1. Acceptance of Terms</h2>
            <p className="font-medium italic">
              By accessing calyxra.com or purchasing our digital assets, you agree to be bound by these Terms of Service. 
              Calyxra is a brand operated by Sole Trader Kononchuk Oleksandr Yaroslavovych, registered in Dubno, Ukraine.
            </p>
          </section>

          {/* Section 2: Services & Deliverables */}
          <section className="space-y-4">
            <h2 className="text-white font-black uppercase tracking-widest text-sm italic">2. Digital Assets & Services</h2>
            <p className="italic">
              Calyxra provides custom Power BI dashboard assets and data modeling services for Shopify brands. 
              Deliverables include digital software files (.PBIX) or private cloud access to finalized data visualizations.
            </p>
          </section>

          {/* Section 3: Payments & Paddle */}
          <section className="space-y-4">
            <h2 className="text-white font-black uppercase tracking-widest text-sm italic">3. Pricing & Payment Terms</h2>
            <ul className="space-y-3 italic">
              <li className="flex gap-3"><span className="text-blue-500">•</span> <strong>Paddle:</strong> Our order process is conducted by our Merchant of Record, Paddle.com, who also handles customer service inquiries and returns.</li>
              <li className="flex gap-3"><span className="text-blue-500">•</span> <strong>Starter Package (€699):</strong> Requires 100% upfront payment.</li>
              <li className="flex gap-3"><span className="text-blue-500">•</span> <strong>Growth Package (€2,400):</strong> Eligible for a 50/50 split plan (50% deposit to initiate work, 50% final payment upon successful demonstration of the assets).</li>
            </ul>
          </section>

          {/* Section 4: Intellectual Property */}
          <section className="space-y-4">
            <h2 className="text-white font-black uppercase tracking-widest text-sm italic">4. Intellectual Property Rights</h2>
            <p className="italic">
              Until full payment is received, all custom data models and dashboard templates remain the intellectual property of Calyxra. 
              Upon 100% payment, the client is granted a perpetual, non-exclusive license to use the delivered assets for their internal business operations. 
              Reselling or redistributing our core templates is strictly prohibited.
            </p>
          </section>

          {/* Section 5: Data Access & Security */}
          <section className="space-y-4">
            <h2 className="text-white font-black uppercase tracking-widest text-sm italic">5. Client Obligations</h2>
            <p className="italic">
              To complete the services, clients must provide necessary API access to their Shopify and Marketing accounts. 
              We strictly adhere to our <a href="/privacy" className="text-blue-500 underline">Privacy Policy</a>: we do not store your raw transactional data on our servers.
            </p>
          </section>

          {/* Section 6: Limitation of Liability */}
          <section className="space-y-4">
            <h2 className="text-white font-black uppercase tracking-widest text-sm italic">6. Limitation of Liability</h2>
            <p className="italic">
              Calyxra shall not be liable for any indirect, incidental, or consequential damages resulting from the use of our dashboard assets or any changes in third-party APIs (Shopify, Meta, Google).
            </p>
          </section>

          {/* Legal Footer */}
          <div className="pt-16 border-t border-white/5">
            <div className="grid md:grid-cols-2 gap-8 text-[10px] uppercase tracking-[0.2em] font-black italic">
              <div className="space-y-2">
                <p className="text-gray-600 not-italic">Company Details:</p>
                <p className="text-white">Sole Trader Kononchuk Oleksandr Yaroslavovych</p>
                <p className="text-white">Address: Dubno, Ukraine</p>
                <p className="text-white">Contact: admin@calyxra.com</p>
              </div>
              <div className="space-y-2 md:text-right">
                <p className="text-gray-600 not-italic">Governing Law:</p>
                <p className="text-white">Ukraine</p>
                <p className="text-gray-600 not-italic mt-4">Last Updated:</p>
                <p className="text-white">December 26, 2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}