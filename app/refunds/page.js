export default function RefundPolicy() {
  return (
    <div className="bg-[#050505] text-[#ededed] min-h-screen p-8 md:p-24 font-sans italic selection:bg-blue-500/30">
      <div className="max-w-4xl mx-auto">
        <a href="/" className="text-blue-500 hover:text-blue-400 mb-12 inline-block font-black uppercase tracking-widest text-xs not-italic transition-colors">
          ← Back to Home
        </a>
        
        <h1 className="text-5xl font-black mb-16 text-white uppercase italic tracking-tighter">
          Refund <span className="text-blue-500">Policy.</span>
        </h1>

        <div className="space-y-12 text-gray-400 leading-relaxed text-base not-italic">
          
          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="text-white font-black uppercase tracking-widest text-sm italic">1. General Overview</h2>
            <p className="font-medium italic">
              At Calyxra, we provide premium digital dashboard assets and data modeling services for Shopify brands. 
              Our pricing reflects two service models: the Starter Package (full upfront payment) and the Growth Package (staged payment plan). 
              Due to the custom technical work involved in data modeling, we have established the following terms to ensure fair cooperation.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-6">
            <h2 className="text-white font-black uppercase tracking-widest text-sm italic">2. Refund Eligibility by Package</h2>
            
            <div className="pl-4 border-l-2 border-blue-600/30 space-y-4">
              <div>
                <h3 className="text-blue-400 font-bold mb-2 uppercase text-xs tracking-wider">Starter Package (€699)</h3>
                <p className="italic">You are eligible for a 100% refund if the request is made within 48 hours of purchase and before our technical team has initiated the data connection or modeling process.</p>
              </div>
              
              <div>
                <h3 className="text-blue-400 font-bold mb-2 uppercase text-xs tracking-wider">Growth Package (€2,400)</h3>
                <p className="mb-2 italic"><strong>Initial Deposit (50% / €1,200):</strong> The deposit is refundable only if requested before the data synchronization and custom logic modeling begin. Once implementation starts, the deposit becomes non-refundable as it covers the cost of technical labor.</p>
                <p className="italic"><strong>Final Payment (50% / €1,200):</strong> This payment is made after the successful demonstration of the asset and is non-refundable once the final dashboard files (.PBIX) or cloud access links are delivered.</p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="text-white font-black uppercase tracking-widest text-sm italic">3. Technical Failure Guarantee</h2>
            <p className="italic">
              Regardless of the package, if Calyxra is unable to connect your Shopify store or marketing APIs due to technical limitations on our side 
              that cannot be resolved within 14 business days, a full refund of all amounts paid for that specific project will be issued.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="text-white font-black uppercase tracking-widest text-sm italic">4. Non-Refundable Scenarios</h2>
            <ul className="space-y-3 italic">
              <li className="flex gap-3"><span className="text-blue-500">•</span> <strong>Project Abandonment:</strong> If a client fails to provide necessary API access or feedback for more than 30 calendar days after the Growth Package deposit is paid.</li>
              <li className="flex gap-3"><span className="text-blue-500">•</span> <strong>Post-Delivery:</strong> Once the final digital assets have been transferred or cloud access has been granted.</li>
              <li className="flex gap-3"><span className="text-blue-500">•</span> <strong>Change of Mind:</strong> If you decide to cancel the project after the custom implementation and data modeling phase has already started.</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <h2 className="text-white font-black uppercase tracking-widest text-sm italic">5. Refund Process</h2>
            <p className="italic">
              To request a refund, please email <a href="mailto:admin@calyxra.com" className="text-blue-500 underline">admin@calyxra.com</a> with your order details. 
              Approved refunds are processed via our payment partner, <strong>Paddle</strong>, and typically credited back to your original payment method within 5-10 business days.
            </p>
          </section>

          {/* Compliance Footer */}
          <div className="pt-16 border-t border-white/5">
            <div className="grid md:grid-cols-2 gap-8 text-[10px] uppercase tracking-[0.2em] font-black italic">
              <div className="space-y-2">
                <p className="text-gray-600 not-italic">Operated by:</p>
                <p className="text-white">Sole Trader Kononchuk Oleksandr Yaroslavovych</p>
              </div>
              <div className="space-y-2 md:text-right">
                <p className="text-gray-600 not-italic">Contact & Support:</p>
                <p className="text-white">Dubno, Ukraine</p>
                <p className="text-blue-500 underline">admin@calyxra.com</p>
              </div>
            </div>
            <p className="mt-8 text-[9px] text-gray-700 not-italic uppercase tracking-[0.4em]">
              This policy aligns with the consumer protection standards required by our Merchant of Record, Paddle.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}