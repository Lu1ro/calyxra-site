import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Refund Policy | Calyxra',
  description: 'Calyxra refund policy — our guarantee and how to request a refund.',
};

export default function RefundsPage() {
  return (
    <main className="min-h-screen bg-[#FAFAF9]">
      <Navbar />

      <article className="pt-36 pb-20 px-6">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-2">Refund Policy</h1>
          <p className="text-sm text-stone-400 mb-10">Last updated: March 19, 2026</p>

          <div className="space-y-10 text-stone-700 leading-relaxed">
            {/* Guarantee */}
            <section className="bg-emerald-50 border border-emerald-200 rounded-xl p-6">
              <h2 className="text-xl font-serif font-semibold text-emerald-900 mb-2">Our Guarantee</h2>
              <p className="text-emerald-800 font-medium">
                If your revenue gap is under 5%, you get a full refund. No questions asked.
              </p>
            </section>

            {/* Audit */}
            <section>
              <h2 className="text-xl font-serif font-semibold text-stone-900 mb-3">Revenue Leak Audit ($249)</h2>
              <div className="space-y-2 text-sm">
                <p>✅ Full refund if: gap under 5% of reported revenue</p>
                <p>✅ Full refund if: we fail to deliver within 48 hours</p>
                <p>✅ Full refund if: technical error prevents report delivery</p>
                <p className="text-stone-400">❌ No refund if: report delivered and gap exceeds 5%</p>
                <p className="text-stone-400">❌ No refund if: you provided incorrect API credentials</p>
              </div>
            </section>

            {/* Monthly */}
            <section>
              <h2 className="text-xl font-serif font-semibold text-stone-900 mb-3">Monthly Reconciliation ($150/mo)</h2>
              <div className="space-y-2 text-sm">
                <p>✅ Cancel anytime — no lock-in</p>
                <p>✅ Full refund if: first report not delivered within 7 days</p>
                <p className="text-stone-400">❌ No refunds for partial months already used</p>
                <p className="text-stone-400">❌ No refunds after cancellation confirmation</p>
              </div>
            </section>

            {/* How to */}
            <section>
              <h2 className="text-xl font-serif font-semibold text-stone-900 mb-3">How to Request a Refund</h2>
              <div className="bg-stone-100 rounded-xl p-6 text-sm space-y-2">
                <p><strong>Email:</strong> <a href="mailto:team@calyxra.com" className="text-emerald-700 hover:underline">team@calyxra.com</a></p>
                <p><strong>Subject:</strong> &quot;Refund Request - [your email]&quot;</p>
                <p><strong>Include:</strong> reason for refund</p>
                <hr className="border-stone-200 my-3" />
                <p><strong>Processing time:</strong> 3–5 business days</p>
                <p><strong>Refund method:</strong> original payment method</p>
              </div>
            </section>

            {/* Free Scan */}
            <section>
              <h2 className="text-xl font-serif font-semibold text-stone-900 mb-3">Free Scan</h2>
              <p className="text-sm">No payment required — nothing to refund.</p>
            </section>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
