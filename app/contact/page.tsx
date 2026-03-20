import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#FAFAF9] text-stone-900 font-sans">
      <Navbar />
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-serif font-bold mb-2">Contact Us</h1>
          <p className="text-sm text-stone-500 mb-10">Get in touch</p>

          <div className="space-y-8 text-stone-700 leading-relaxed">
            <section className="bg-white border border-stone-200 rounded-lg p-6">
              <div className="space-y-3 text-sm">
                <p><strong>Email:</strong> <a href="mailto:team@calyxra.com" className="text-emerald-700 hover:underline">team@calyxra.com</a></p>
                <p><strong>Response time:</strong> within 24 hours</p>
                <p><strong>Book a call:</strong> <a href="https://cal.com/calyxra/15min" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:underline">cal.com/calyxra/15min</a></p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-serif font-bold text-stone-900 mb-3">For Refund Requests</h2>
              <p className="text-sm">
                Email with subject &quot;Refund Request - [your email]&quot;
              </p>
            </section>

            <section>
              <h2 className="text-xl font-serif font-bold text-stone-900 mb-3">For Technical Support</h2>
              <p className="text-sm">
                Email with subject &quot;Support - [your issue]&quot;
              </p>
            </section>

            <section>
              <h2 className="text-xl font-serif font-bold text-stone-900 mb-3">Business Details</h2>
              <ul className="space-y-1 text-sm">
                <li><strong>Operator:</strong> FOP Kononchuk Oleksandr Yaroslavovych</li>
                <li><strong>Tax ID (EDRPOU):</strong> 3078714279</li>
                <li><strong>Address:</strong> Zolota 12, Dubno, Rivne Oblast, Ukraine</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
