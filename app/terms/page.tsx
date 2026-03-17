import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Terms of Service | Calyxra',
  description: 'Terms and conditions for using the Calyxra platform.',
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#FAFAF9]">
      <Navbar />

      <article className="pt-36 pb-20 px-6">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-2">Terms of Service</h1>
          <p className="text-sm text-stone-400 mb-10">Last updated: March 17, 2026</p>

          <div className="space-y-10 text-stone-700 leading-relaxed">
            {/* 1 */}
            <section>
              <h2 className="text-xl font-serif font-semibold text-stone-900 mb-3">1. Acceptance</h2>
              <p className="text-sm">By using Calyxra, you agree to these terms. If you disagree, do not use our service.</p>
            </section>

            {/* 2 */}
            <section>
              <h2 className="text-xl font-serif font-semibold text-stone-900 mb-3">2. Service Description</h2>
              <p className="mb-2 text-sm">Calyxra provides:</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Revenue reconciliation between ad platforms and Shopify</li>
                <li>Campaign-level phantom revenue analysis</li>
                <li>Budget optimization recommendations</li>
                <li>Branded PDF reports (paid tier)</li>
              </ul>
            </section>

            {/* 3 */}
            <section>
              <h2 className="text-xl font-serif font-semibold text-stone-900 mb-3">3. Your Responsibilities</h2>
              <p className="mb-2 text-sm font-semibold text-stone-800">You must:</p>
              <ul className="list-disc list-inside space-y-1 text-sm mb-4">
                <li>Provide accurate API credentials</li>
                <li>Have legal right to access the data you provide</li>
                <li>Not use the service for illegal purposes</li>
                <li>Keep your account credentials secure</li>
              </ul>
              <p className="mb-2 text-sm font-semibold text-stone-800">You must NOT:</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Share your account with others</li>
                <li>Attempt to reverse engineer our software</li>
                <li>Use our service to harm third parties</li>
              </ul>
            </section>

            {/* 4 */}
            <section>
              <h2 className="text-xl font-serif font-semibold text-stone-900 mb-3">4. API Credentials &amp; Data</h2>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>You grant us temporary, read-only access to your data</li>
                <li>We process data solely to provide the service</li>
                <li>Free Scan: data is never stored on our servers</li>
                <li>Paid accounts: encrypted storage for automated reports</li>
              </ul>
            </section>

            {/* 5 */}
            <section>
              <h2 className="text-xl font-serif font-semibold text-stone-900 mb-3">5. Payment Terms</h2>

              <h3 className="font-semibold text-stone-800 mt-4 mb-2">Free Scan</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Completely free, no credit card required</li>
                <li>Results shown immediately</li>
              </ul>

              <h3 className="font-semibold text-stone-800 mt-4 mb-2">Revenue Leak Audit ($249)</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>One-time payment</li>
                <li>Delivered within 48 hours</li>
                <li>Full refund if revenue gap is under 5%</li>
                <li>Refund request: calyxra.team@gmail.com within 7 days</li>
              </ul>

              <h3 className="font-semibold text-stone-800 mt-4 mb-2">Monthly Reconciliation ($150/month)</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Billed monthly, cancel anytime</li>
                <li>No refunds for partial months</li>
                <li>Cancel before next billing date to avoid charge</li>
              </ul>
            </section>

            {/* 6 */}
            <section>
              <h2 className="text-xl font-serif font-semibold text-stone-900 mb-3">6. Refund Policy</h2>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Gap under 5%: full refund, no questions asked</li>
                <li>Technical failure: full refund</li>
                <li>Change of mind after delivery: no refund</li>
                <li>All refund requests: <a href="mailto:calyxra.team@gmail.com" className="text-emerald-700 hover:underline">calyxra.team@gmail.com</a></li>
              </ul>
            </section>

            {/* 7 */}
            <section>
              <h2 className="text-xl font-serif font-semibold text-stone-900 mb-3">7. Limitation of Liability</h2>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>We provide analysis tools, not financial advice</li>
                <li>We are not responsible for business decisions made based on our reports</li>
                <li>Maximum liability limited to amount paid for service</li>
              </ul>
            </section>

            {/* 8 */}
            <section>
              <h2 className="text-xl font-serif font-semibold text-stone-900 mb-3">8. Intellectual Property</h2>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Our software, reports, and methodology are proprietary</li>
                <li>You own your data at all times</li>
                <li>Report content may be used for your business purposes</li>
              </ul>
            </section>

            {/* 9 */}
            <section>
              <h2 className="text-xl font-serif font-semibold text-stone-900 mb-3">9. Termination</h2>
              <p className="mb-2 text-sm">We may terminate accounts that:</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Violate these terms</li>
                <li>Engage in fraudulent activity</li>
                <li>Attempt to harm our systems</li>
              </ul>
            </section>

            {/* 10 */}
            <section>
              <h2 className="text-xl font-serif font-semibold text-stone-900 mb-3">10. Governing Law</h2>
              <p className="text-sm">These terms are governed by the laws of Ukraine. Disputes resolved through negotiation first, then Ukrainian courts if necessary.</p>
              <p className="mt-3 text-sm">Contact: <a href="mailto:calyxra.team@gmail.com" className="text-emerald-700 hover:underline">calyxra.team@gmail.com</a></p>
            </section>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
