import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0B0C0C] text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand column */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 mb-5">
              <span className="text-[22px] font-serif font-medium tracking-tight text-white leading-none">
                Calyxra<span className="text-[#6EE7B7]">.</span>
              </span>
            </div>
            <p className="text-[15px] text-white/60 max-w-md leading-[1.65] mb-6">
              Revenue reconciliation for Shopify brands. We find the gap between what ad platforms report and what your bank actually collected — in 48 hours.
            </p>
            <a
              href="https://cal.com/calyxra/15min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-white text-[#0B0C0C] text-[13px] font-semibold hover:bg-[#F5F5F4] transition-all rounded-lg"
            >
              Book an audit
              <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>

          {/* Links columns */}
          <div className="md:col-span-2">
            <p className="text-[11px] font-semibold text-white/40 uppercase tracking-[0.14em] mb-4">Product</p>
            <ul className="space-y-3">
              <li><Link href="/#pricing" className="text-[14px] text-white/80 hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="/#calculator" className="text-[14px] text-white/80 hover:text-white transition-colors">Gap calculator</Link></li>
              <li><Link href="/case-studies" className="text-[14px] text-white/80 hover:text-white transition-colors">Case studies</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="text-[11px] font-semibold text-white/40 uppercase tracking-[0.14em] mb-4">Company</p>
            <ul className="space-y-3">
              <li><a href="mailto:admin@calyxra.com" className="text-[14px] text-white/80 hover:text-white transition-colors">Contact</a></li>
              <li><a href="mailto:admin@calyxra.com?subject=Partnership" className="text-[14px] text-white/80 hover:text-white transition-colors">Partnerships</a></li>
              <li><Link href="/contact" className="text-[14px] text-white/80 hover:text-white transition-colors">Support</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="text-[11px] font-semibold text-white/40 uppercase tracking-[0.14em] mb-4">Legal</p>
            <ul className="space-y-3">
              <li><Link href="/privacy" className="text-[14px] text-white/80 hover:text-white transition-colors">Privacy policy</Link></li>
              <li><Link href="/terms" className="text-[14px] text-white/80 hover:text-white transition-colors">Terms of service</Link></li>
              <li><Link href="/refunds" className="text-[14px] text-white/80 hover:text-white transition-colors">Refund policy</Link></li>
              <li><Link href="/security" className="text-[14px] text-white/80 hover:text-white transition-colors">Security</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[12px] text-white/40">
            © 2026 Calyxra · Built by operators
          </p>
          <p className="text-[12px] text-white/40">
            <a href="mailto:admin@calyxra.com" className="hover:text-white/70 transition-colors">admin@calyxra.com</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
