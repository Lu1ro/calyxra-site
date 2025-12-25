export default function TermsOfService() {
  return (
    <div className="bg-[#0a0a0a] text-[#ededed] min-h-screen p-8 md:p-24 font-sans">
      <div className="max-w-3xl mx-auto">
        <a href="/" className="text-blue-500 hover:underline mb-8 inline-block">← Back to Home</a>
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <div className="space-y-6 text-gray-400 leading-relaxed">
          <p className="text-sm italic">Effective Date: December 25, 2025</p>
          
          <section>
            <h2 className="text-xl font-bold text-white mb-4">1. Agreement to Terms</h2>
            <p>These Terms of Service constitute a legally binding agreement between you and Calyxra (Service Provider: Sole Trader Kononchuk Oleksandr Yaroslavovych, Ukraine). By accessing calyxra.com, you agree to be bound by these terms and the reseller terms of Paddle, our Merchant of Record.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">2. Services</h2>
            <p>Calyxra provides custom Digital BI Dashboards and Interactive Data Visualization software assets. Services are provided on a project basis with delivery via digital download or cloud access.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">3. Payment and Billing</h2>
            <p>All payments are processed through Paddle. As the Merchant of Record, Paddle will be responsible for billing, inquiries, and returns.</p>
          </section>

          <section className="pt-8 border-t border-gray-900">
            <p>Contact: <a href="mailto:admin@calyxra.com" className="text-blue-500 underline">admin@calyxra.com</a></p>
          </section>
        </div>
      </div>
    </div>
  );
}