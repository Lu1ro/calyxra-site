import Image from "next/image";

export default function PricingPage() {
  const calendlyUrl = "https://calendly.com/calyxra-team/30min";

  return (
    <div className="bg-[#050505] text-[#ededed] min-h-screen font-sans overflow-x-hidden italic">
      <main className="relative z-10 pt-44 pb-32 px-6">
        <div className="max-w-5xl mx-auto text-center italic">
          <h1 className="text-5xl md:text-7xl font-black mb-8 text-white uppercase italic leading-none">Investment <br /><span className="text-blue-500">Models.</span></h1>
          <p className="text-gray-400 mb-20 max-w-xl mx-auto not-italic italic">Transparent pricing for premium Shopify data assets. Secure payments via Paddle.</p>
          
          <div className="grid md:grid-cols-2 gap-8 items-stretch not-italic">
            {/* Starter Card */}
            <div className="p-12 rounded-[2.5rem] bg-black border border-white/5 flex flex-col text-left hover:border-white/10 transition duration-500 italic">
              <div className="text-4xl font-black mb-4 text-white italic">€699</div>
              <p className="text-blue-500 text-[10px] uppercase font-black mb-8 not-italic">Single Executive Asset</p>
              <div className="space-y-6 text-sm text-gray-400 mb-12 flex-grow font-medium italic">
                <p>• Full payment required upfront</p><p>• 7-day digital delivery</p><p>• Technical support included</p>
              </div>
              <a href={calendlyUrl} className="w-full py-5 rounded-2xl border border-white/20 text-center font-black text-[10px] uppercase tracking-widest hover:bg-white hover:text-black transition italic">Order Starter</a>
            </div>

            {/* Growth Card - ОНОВЛЕНО */}
            <div className="p-12 rounded-[2.5rem] bg-blue-600 shadow-2xl flex flex-col text-left relative overflow-hidden group italic">
              <div className="absolute top-0 right-0 bg-white text-blue-600 px-8 py-2 text-[10px] font-black uppercase tracking-widest rounded-bl-3xl not-italic">50/50 Split Plan</div>
              <div className="text-4xl font-black mb-4 text-white italic">€2,400</div>
              <p className="text-white/80 text-[10px] uppercase font-black mb-8 not-italic">Full Scale Suite</p>
              <div className="space-y-6 text-sm text-white mb-12 flex-grow font-bold italic">
                <p>• €1,200 deposit to start project</p><p>• €1,200 final payment after demo</p><p>• 14-day implementation period</p><p>• Priority technical access</p>
              </div>
              <a href={calendlyUrl} className="w-full py-5 rounded-2xl bg-black text-white text-center font-black text-[10px] uppercase tracking-widest shadow-2xl hover:scale-[1.02] transition italic">Order Growth</a>
            </div>
          </div>
        </div>
      </main>
      <footer className="py-20 bg-black border-t border-white/5 px-6 text-center italic">
        <p className="text-[9px] text-gray-700 uppercase tracking-[0.4em] font-black italic">Operated by Sole Trader Kononchuk Oleksandr Yaroslavovych.</p>
      </footer>
    </div>
  );
}