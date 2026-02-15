export default function Footer() {
    return (
        <footer className="py-16 px-6 bg-white border-t border-stone-200">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                <div>
                    <div className="text-xl font-serif font-bold text-stone-900 mb-2">Calyxra.</div>
                    <p className="text-xs text-stone-400 font-medium max-w-xs leading-relaxed">
                        Premium reporting infrastructure for high-performance agencies. Built by analysts, not marketers.
                    </p>
                </div>
                <div className="flex flex-wrap gap-8 text-[10px] font-bold text-stone-500 uppercase tracking-widest justify-center md:justify-end">
                    <a href="/terms" className="hover:text-stone-900 transition-colors">Terms of Service</a>
                    <a href="/privacy" className="hover:text-stone-900 transition-colors">Privacy Policy</a>
                    <a href="/refunds" className="hover:text-stone-900 transition-colors">Refund Policy</a>
                    <a href="mailto:admin@calyxra.com" className="hover:text-stone-900 transition-colors">Contact Support</a>
                </div>
            </div>
            <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-stone-100 text-center text-[10px] text-stone-300 uppercase tracking-widest">
                © 2026 Calyxra Data Systems.
            </div>
        </footer>
    );
}
