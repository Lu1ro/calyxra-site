import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Data Deletion Instructions | Calyxra',
  description: 'How to request deletion of your Calyxra account and associated data.',
};

export default function DataDeletionPage() {
  return (
    <main className="min-h-screen bg-[#FAFAF9]">
      <Navbar />

      <article className="pt-36 pb-20 px-6">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-2">Data Deletion Instructions</h1>
          <p className="text-sm text-stone-400 mb-10">Last updated: April 16, 2026</p>

          <div className="space-y-10 text-stone-700 leading-relaxed">
            {/* 1 */}
            <section>
              <h2 className="text-xl font-serif font-semibold text-stone-900 mb-3">1. Your Right to Delete</h2>
              <p className="text-sm">
                Under GDPR and our <a href="/privacy" className="text-emerald-700 hover:underline">Privacy Policy</a>, you have the right to request deletion of your personal data at any time. This page explains how to do that.
              </p>
              <p className="mt-2 text-sm"><strong>Operator:</strong> FOP Kononchuk Oleksandr Yaroslavovych</p>
              <p className="mt-1 text-sm"><strong>Contact:</strong> <a href="mailto:admin@calyxra.com" className="text-emerald-700 hover:underline">admin@calyxra.com</a></p>
            </section>

            {/* 2 */}
            <section>
              <h2 className="text-xl font-serif font-semibold text-stone-900 mb-3">2. How to Request Deletion</h2>

              <h3 className="font-semibold text-stone-800 mt-4 mb-2">Option A: In-App (fastest)</h3>
              <ol className="list-decimal list-inside space-y-1 text-sm">
                <li>Log in at <a href="https://app.calyxra.com/login" className="text-emerald-700 hover:underline">app.calyxra.com</a></li>
                <li>Go to Dashboard, then Settings</li>
                <li>Click Delete Account</li>
                <li>Confirm the action</li>
              </ol>
              <p className="mt-2 text-sm">Your account and all associated data are queued for permanent deletion immediately.</p>

              <h3 className="font-semibold text-stone-800 mt-4 mb-2">Option B: By Email</h3>
              <p className="text-sm">
                Send an email to <a href="mailto:admin@calyxra.com?subject=Data%20Deletion%20Request" className="text-emerald-700 hover:underline">admin@calyxra.com</a> with the subject line <strong>Data Deletion Request</strong>. Include the email address on your Calyxra account. We verify the request within 72 hours and process deletion within 30 days.
              </p>

              <h3 className="font-semibold text-stone-800 mt-4 mb-2">Option C: Via Meta (Facebook) Settings</h3>
              <p className="text-sm">
                If you connected Meta Ads to Calyxra: go to Facebook Settings, then Apps and Websites, find Calyxra, click Remove. Meta automatically notifies us via webhook and we delete your Meta tokens and related data.
              </p>

              <h3 className="font-semibold text-stone-800 mt-4 mb-2">Option D: Uninstall from Shopify</h3>
              <p className="text-sm">
                If you installed Calyxra as a Shopify app: go to your Shopify admin, then Settings, then Apps, find Calyxra, click Uninstall. Shopify notifies us via the shop/redact webhook and we delete all data associated with your shop within 30 days.
              </p>
            </section>

            {/* 3 */}
            <section>
              <h2 className="text-xl font-serif font-semibold text-stone-900 mb-3">3. What We Delete</h2>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Account information (name, email, hashed password, agency name)</li>
                <li>Connected platform credentials (Shopify, Meta, Google, TikTok API tokens)</li>
                <li>All reconciliation reports and report history</li>
                <li>Campaign snapshots and performance data</li>
                <li>Alerts and notification history</li>
                <li>White-label branding assets (logo, custom colors, report headers)</li>
                <li>Custom KPI definitions</li>
              </ul>
            </section>

            {/* 4 */}
            <section>
              <h2 className="text-xl font-serif font-semibold text-stone-900 mb-3">4. What We May Retain</h2>
              <p className="mb-2 text-sm">
                For legal and tax compliance, we may retain the following even after deletion:
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Financial transaction records (invoices, payment receipts) for 7 years, as required by Ukrainian tax law</li>
                <li>Anonymized aggregate usage statistics that cannot identify you</li>
                <li>Logs required for security investigations, retained up to 90 days</li>
              </ul>
            </section>

            {/* 5 */}
            <section>
              <h2 className="text-xl font-serif font-semibold text-stone-900 mb-3">5. Deletion Timeline</h2>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li><strong>Platform disconnection (Meta, Shopify, Google, TikTok):</strong> immediate</li>
                <li><strong>Reports and campaign data:</strong> deleted within 7 days of request</li>
                <li><strong>Account record and backups:</strong> fully removed within 30 days</li>
              </ul>
              <p className="mt-3 text-sm">You will receive an email confirmation once deletion is complete.</p>
            </section>

            {/* 6 */}
            <section>
              <h2 className="text-xl font-serif font-semibold text-stone-900 mb-3">6. Questions or Issues</h2>
              <p className="text-sm">
                If you have trouble deleting your account, or if you believe your data was not deleted as requested, contact us at <a href="mailto:admin@calyxra.com" className="text-emerald-700 hover:underline">admin@calyxra.com</a>. You also have the right to file a complaint with your local data protection authority.
              </p>
            </section>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
