export default function PrivacyPolicy() {
  return (
    <div className="bg-[#0a0a0a] text-[#ededed] min-h-screen p-8 md:p-24 font-sans">
      <div className="max-w-3xl mx-auto">
        <a href="/" className="text-blue-500 hover:underline mb-8 inline-block">← Back to Home</a>
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <div className="space-y-6 text-gray-400 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white mb-4">1. Data Collection</h2>
            <p>We collect information provided directly by you during consultations and project setup (name, business email, Shopify store data). We also collect payment information through our reseller, Paddle.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">2. Compliance</h2>
            <p>Our Privacy Policy is designed to be GDPR and CCPA compliant for our clients in the EU and USA. We use your data solely to deliver custom BI solutions and improve your store analytics.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">3. User Rights</h2>
            <p>You have the right to access, delete, or port your data. To exercise these rights, please contact our support team at admin@calyxra.com.</p>
          </section>

          <section className="pt-8 border-t border-gray-900">
            <p>© 2025 Calyxra. All rights reserved.</p>
          </section>
        </div>
      </div>
    </div>
  );
}