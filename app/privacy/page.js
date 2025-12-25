export default function PrivacyPolicy() {
  return (
    <div className="bg-[#050505] text-[#ededed] min-h-screen p-8 md:p-24 font-sans italic selection:bg-blue-500/30">
      <div className="max-w-4xl mx-auto">
        <a href="/" className="text-blue-500 hover:text-blue-400 mb-12 inline-block font-black uppercase tracking-widest text-xs not-italic transition-colors">
          ← Back to Home
        </a>
        
        <h1 className="text-5xl font-black mb-16 text-white uppercase italic tracking-tighter">
          Privacy <span className="text-blue-500">Policy.</span>
        </h1>

        <div className="space-y-12 text-gray-400 leading-relaxed text-base not-italic">
          
          {/* Section 1: Introduction */}
          <section className="space-y-4">
            <h2 className="text-white font-black uppercase tracking-widest text-sm italic">1. Introduction & Trust</h2>
            <p className="font-medium italic">
              At Calyxra, we understand that your store’s data is your most valuable asset. 
              This Privacy Policy explains how we handle information when you purchase our premium BI dashboard assets. 
              Our business, operated by Sole Trader Kononchuk Oleksandr Yaroslavovych, is committed to the highest standards of data protection and transparency.
            </p>
          </section>

          {/* Section 2: Data Handling */}
          <section className="space-y-4">
            <h2 className="text-white font-black uppercase tracking-widest text-sm italic">2. Data Processing (The "No-Storage" Rule)</h2>
            <p className="italic">
              To build your custom dashboards, we require temporary access to your Shopify and Marketing APIs. 
              <strong> Crucially:</strong> We do not store your raw transactional data on our servers. 
              The data flows directly from your official APIs into your private Power BI environment. 
              We never store or have access to your passwords or sensitive customer payment information.
            </p>
          </section>

          {/* Section 3: Information We Collect */}
          <section className="space-y-4">
            <h2 className="text-white font-black uppercase tracking-widest text-sm italic">3. Information We Collect</h2>
            <ul className="space-y-3 italic">
              <li className="flex gap-3"><span className="text-blue-500">•</span> <strong>Contact Information:</strong> Name and email address to manage your order and provide technical support.</li>
              <li className="flex gap-3"><span className="text-blue-500">•</span> <strong>Technical Metadata:</strong> Store URL and API connection tokens required to build the data models.</li>
              <li className="flex gap-3"><span className="text-blue-500">•</span> <strong>Payment Data:</strong> Handled entirely by our payment partner, <strong>Paddle</strong>. We never see or store your credit card details.</li>
            </ul>
          </section>

          {/* Section 4: Third-Party Services */}
          <section className="space-y-4">
            <h2 className="text-white font-black uppercase tracking-widest text-sm italic">4. Third-Party Services</h2>
            <p className="italic">
              We use <strong>Paddle</strong> as our Merchant of Record to process payments and handle sales tax. 
              Paddle’s privacy policy applies to the checkout process. For data visualization, we utilize <strong>Microsoft Power BI</strong>, ensuring your reports remain within a secure, world-class enterprise ecosystem.
            </p>
          </section>

          {/* Section 5: Security */}
          <section className="space-y-4">
            <h2 className="text-white font-black uppercase tracking-widest text-sm italic">5. Data Security Measures</h2>
            <p className="italic">
              We implement industry-standard encryption for all data in transit. 
              Access to your API tokens is strictly limited to the technical team involved in your project and is revoked immediately upon project completion.
            </p>
          </section>

          {/* Section 6: Contact */}
          <section className="space-y-4">
            <h2 className="text-white font-black uppercase tracking-widest text-sm italic">6. Your Rights & Contact</h2>
            <p className="italic">
              Under GDPR, you have the right to access, rectify, or erase your personal data. 
              For any privacy-related inquiries, please contact us at <a href="mailto:admin@calyxra.com" className="text-blue-500 underline">admin@calyxra.com</a>.
            </p>
          </section>

          {/* Legal Footer */}
          <div className="pt-16 border-t border-white/5">
            <div className="grid md:grid-cols-2 gap-8 text-[10px] uppercase tracking-[0.2em] font-black italic">
              <div className="space-y-2">
                <p className="text-gray-600 not-italic">Data Controller:</p>
                <p className="text-white">Sole Trader Kononchuk Oleksandr Yaroslavovych</p>
                <p className="text-white">Dubno, Ukraine</p>
              </div>
              <div className="space-y-2 md:text-right">
                <p className="text-gray-600 not-italic">Last Updated:</p>
                <p className="text-white">December 26, 2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}