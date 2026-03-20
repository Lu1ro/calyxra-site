import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Privacy Policy | Calyxra',
  description: 'How Calyxra collects, uses, and protects your data.',
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#FAFAF9]">
      <Navbar />

      <article className="pt-36 pb-20 px-6">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-2">Privacy Policy</h1>
          <p className="text-sm text-stone-400 mb-10">Last updated: March 19, 2026</p>

          <div className="space-y-10 text-stone-700 leading-relaxed">
            {/* 1 */}
            <section>
              <h2 className="text-xl font-serif font-semibold text-stone-900 mb-3">1. Who We Are</h2>
              <p>
                Calyxra (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) is a revenue reconciliation service for Shopify brands.
              </p>
              <p className="mt-2"><strong>Operator:</strong> FOP Kononchuk Oleksandr Yaroslavovych</p>
              <p className="mt-1"><strong>Contact:</strong> <a href="mailto:team@calyxra.com" className="text-emerald-700 hover:underline">team@calyxra.com</a></p>
              <p className="mt-1"><strong>Address:</strong> Zolota 12, Dubno, Rivne Oblast, Ukraine</p>
            </section>

            {/* 2 */}
            <section>
              <h2 className="text-xl font-serif font-semibold text-stone-900 mb-3">2. What Data We Collect</h2>

              <h3 className="font-semibold text-stone-800 mt-4 mb-2">Free Scan</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Shopify store domain</li>
                <li>API credentials (processed in memory, <strong>NEVER</strong> stored)</li>
                <li>Meta/Google/TikTok API tokens (processed in memory, <strong>NEVER</strong> stored)</li>
                <li>Date ranges selected</li>
              </ul>

              <h3 className="font-semibold text-stone-800 mt-4 mb-2">Account Registration</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Name and email address</li>
                <li>Encrypted password</li>
                <li>Company/agency name</li>
              </ul>

              <h3 className="font-semibold text-stone-800 mt-4 mb-2">Payment Processing</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Handled by Fondy (fondy.eu)</li>
                <li>We never see or store credit card data</li>
              </ul>
            </section>

            {/* 3 */}
            <section>
              <h2 className="text-xl font-serif font-semibold text-stone-900 mb-3">3. How We Use Your Data</h2>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>To provide revenue reconciliation reports</li>
                <li>To send audit results and reports via email</li>
                <li>To communicate about your account</li>
                <li>We <strong>NEVER</strong> sell your data to third parties</li>
                <li>We <strong>NEVER</strong> use your data for advertising</li>
              </ul>
            </section>

            {/* 4 */}
            <section>
              <h2 className="text-xl font-serif font-semibold text-stone-900 mb-3">4. Data Storage &amp; Security</h2>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>API credentials from Free Scan: processed in RAM only, deleted immediately after report generation</li>
                <li>Account data: stored in encrypted PostgreSQL database (Neon, EU Frankfurt region)</li>
                <li>All API tokens stored with AES-256 encryption</li>
                <li>HTTPS enforced on all connections</li>
              </ul>
            </section>

            {/* 5 */}
            <section>
              <h2 className="text-xl font-serif font-semibold text-stone-900 mb-3">5. Third-Party Services</h2>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li><strong>Shopify</strong>: to fetch your order data (read-only)</li>
                <li><strong>Meta/Google/TikTok</strong>: to fetch campaign data (read-only)</li>
                <li><strong>Neon PostgreSQL</strong>: database hosting (EU)</li>
                <li><strong>Resend</strong>: transactional email delivery</li>
                <li><strong>Fondy</strong>: payment processing</li>
              </ul>
            </section>

            {/* 6 */}
            <section>
              <h2 className="text-xl font-serif font-semibold text-stone-900 mb-3">6. Your Rights (GDPR)</h2>
              <p className="mb-2">You have the right to:</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Delete your account and all data</li>
                <li>Export your data</li>
                <li>Withdraw consent at any time</li>
              </ul>
              <p className="mt-3 text-sm">To exercise these rights: <a href="mailto:team@calyxra.com" className="text-emerald-700 hover:underline">team@calyxra.com</a></p>
            </section>

            {/* 7 */}
            <section>
              <h2 className="text-xl font-serif font-semibold text-stone-900 mb-3">7. Data Retention</h2>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Free Scan data: deleted immediately after report</li>
                <li>Account data: retained while account is active</li>
                <li>After account deletion: removed within 30 days</li>
              </ul>
            </section>

            {/* 8 */}
            <section>
              <h2 className="text-xl font-serif font-semibold text-stone-900 mb-3">8. Cookies</h2>
              <p className="text-sm">We use only essential cookies for authentication. No tracking or advertising cookies.</p>
            </section>

            {/* 9 */}
            <section>
              <h2 className="text-xl font-serif font-semibold text-stone-900 mb-3">9. Children</h2>
              <p className="text-sm">Our service is not directed to anyone under 18.</p>
            </section>

            {/* 10 */}
            <section>
              <h2 className="text-xl font-serif font-semibold text-stone-900 mb-3">10. Changes</h2>
              <p className="text-sm">We will notify you of material changes via email. Continued use constitutes acceptance.</p>
              <p className="mt-3 text-sm">Contact: <a href="mailto:team@calyxra.com" className="text-emerald-700 hover:underline">team@calyxra.com</a></p>
            </section>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
