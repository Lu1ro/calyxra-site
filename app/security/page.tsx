import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Security | Calyxra',
  description: 'How Calyxra protects your data — security practices and guarantees.',
};

export default function SecurityPage() {
  return (
    <main className="min-h-screen bg-[#FAFAF9]">
      <Navbar />

      <article className="pt-36 pb-20 px-6">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-2">Security &amp; Privacy Guarantee</h1>
          <p className="text-sm text-stone-400 mb-10">How we protect your data</p>

          <div className="space-y-10 text-stone-700 leading-relaxed">
            {/* Read-Only */}
            <section>
              <h2 className="text-xl font-serif font-semibold text-stone-900 mb-3">Read-Only Access Only</h2>
              <p className="text-sm mb-2">We request the minimum permissions needed.</p>
              <p className="text-sm">Your Shopify API token: <code className="bg-stone-100 px-1.5 py-0.5 rounded text-xs">read_orders</code>, <code className="bg-stone-100 px-1.5 py-0.5 rounded text-xs">read_analytics</code> only.</p>
              <p className="text-sm mt-1 font-medium text-stone-800">We CANNOT modify your store, create orders, or change anything.</p>
            </section>

            {/* Free Scan */}
            <section>
              <h2 className="text-xl font-serif font-semibold text-stone-900 mb-3">Free Scan — Zero Storage</h2>
              <p className="text-sm mb-3">When you run a Free Scan:</p>
              <div className="bg-stone-100 rounded-xl p-5 space-y-2 text-sm">
                <p>→ Your credentials are sent over HTTPS</p>
                <p>→ Processed entirely in server memory (RAM)</p>
                <p>→ Report generated and returned to you</p>
                <p>→ All credentials deleted immediately</p>
                <p>→ Nothing written to database</p>
                <p>→ Nothing logged</p>
              </div>
            </section>

            {/* Encrypted Storage */}
            <section>
              <h2 className="text-xl font-serif font-semibold text-stone-900 mb-3">Encrypted Storage (Paid Accounts)</h2>
              <p className="text-sm mb-3">For monthly subscribers who save connections:</p>
              <div className="space-y-2 text-sm">
                <p>→ AES-256-CBC encryption for all API tokens</p>
                <p>→ Encryption key separate from database</p>
                <p>→ Tokens never appear in logs</p>
              </div>
            </section>

            {/* Infrastructure */}
            <section>
              <h2 className="text-xl font-serif font-semibold text-stone-900 mb-3">Infrastructure Security</h2>
              <div className="space-y-2 text-sm">
                <p>→ <strong>Database:</strong> Neon PostgreSQL, EU Frankfurt (ISO 27001)</p>
                <p>→ <strong>Hosting:</strong> Vercel (SOC 2 Type II certified)</p>
                <p>→ <strong>All traffic:</strong> TLS 1.3 encrypted</p>
                <p>→ No third-party analytics or tracking scripts</p>
              </div>
            </section>

            {/* Never */}
            <section className="bg-red-50 border border-red-200 rounded-xl p-6">
              <h2 className="text-xl font-serif font-semibold text-red-900 mb-3">We Will Never:</h2>
              <div className="space-y-2 text-sm text-red-800">
                <p>❌ Sell your data</p>
                <p>❌ Use your data for advertising</p>
                <p>❌ Share your revenue data with competitors</p>
                <p>❌ Modify anything in your Shopify store or ad accounts</p>
              </div>
            </section>

            {/* Contact */}
            <section>
              <p className="text-sm">
                Questions about security?{' '}
                <a href="mailto:admin@calyxra.com" className="text-emerald-700 hover:underline">admin@calyxra.com</a>
              </p>
            </section>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
