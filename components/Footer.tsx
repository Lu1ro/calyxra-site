export default function Footer() {
    return (
        <footer className="py-16 px-6 bg-stone-900 text-white border-t border-stone-800">
            <div className="max-w-4xl mx-auto text-center">
                <div className="text-2xl font-serif font-bold mb-4">Calyxra<span className="text-emerald-400">.</span></div>
                <p className="text-stone-400 text-sm mb-8 max-w-xl mx-auto leading-relaxed">
                    Revenue reconciliation for Shopify brands.
                    Compare what ad platforms report vs what your bank actually collected.
                </p>
                <div className="flex flex-wrap gap-6 text-[10px] font-bold text-stone-500 uppercase tracking-widest justify-center mb-6">
                    <a href="#calculator" className="hover:text-white transition-colors">Free Scan</a>
                    <a href="/#pricing" className="hover:text-white transition-colors">Book Audit</a>
                    <a href="/login" className="hover:text-white transition-colors">Login</a>
                    <a href="mailto:team@calyxra.com" className="hover:text-white transition-colors">Contact</a>
                </div>
                <div className="flex flex-wrap gap-6 text-[10px] text-stone-600 uppercase tracking-widest justify-center mb-8">
                    <a href="/privacy" className="hover:text-stone-400 transition-colors">Privacy Policy</a>
                    <a href="/terms" className="hover:text-stone-400 transition-colors">Terms of Service</a>
                    <a href="/refunds" className="hover:text-stone-400 transition-colors">Refund Policy</a>
                    <a href="/security" className="hover:text-stone-400 transition-colors">Security</a>
                    <a href="/contact" className="hover:text-stone-400 transition-colors">Contact</a>
                </div>
                <p className="text-stone-600 text-xs">team@calyxra.com</p>
            </div>
            <div className="max-w-4xl mx-auto mt-12 pt-8 border-t border-stone-800 text-center text-[10px] text-stone-600 uppercase tracking-widest">
                © 2026 Calyxra
            </div>
        </footer>
    );
}
