import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#0a0a0a] text-[#ededed] min-h-screen font-sans selection:bg-blue-500/30">
      {/* NAVIGATION */}
      <nav className="fixed w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-gray-900">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="text-xl font-bold tracking-tighter">CALYXRA</div>
          <div className="hidden md:flex gap-8 text-sm text-gray-400 font-medium">
            <a href="#process" className="hover:text-white transition">Process</a>
            <a href="#dashboards" className="hover:text-white transition">Dashboards</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
            <a href="#about" className="hover:text-white transition">About</a>
          </div>
          <a 
            href="https://calendly.com" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-bold transition shadow-lg shadow-blue-600/20"
          >
            Book Free Review
          </a>
        </div>
      </nav>

      <main>
        {/* HERO SECTION */}
        <section className="pt-32 pb-20 px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-white">
              Stop guessing. <br />
              <span className="text-blue-500">Start deciding.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-12 leading-relaxed max-w-2xl mx-auto">
              Profit-first Shopify dashboards: Know your real margin after ads, shipping, and refunds.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12">
              <a 
                href="https://calendly.com" 
                className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-xl shadow-blue-600/20 text-center"
              >
                Book Free KPI Review
              </a>
              <a 
                href="#dashboards" 
                className="w-full md:w-auto bg-transparent border border-gray-800 hover:border-gray-600 text-white px-10 py-5 rounded-xl font-bold text-lg transition text-center"
              >
                View Demo Dashboards
              </a>
            </div>
            <div className="py-4 border-y border-gray-900 inline-block px-8">
              <p className="text-sm text-gray-500 font-medium tracking-wide">
                Built in 7 days · From €699 · Direct with Lukian & Oleh · No middlemen
              </p>
            </div>
          </div>
        </section>

        {/* PAIN SECTION */}
        <section id="process" className="py-24 bg-[#0d0d0d] px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-white">Excel is slowing you down.</h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              When refunds, shipping costs, and ad spend are scattered across different tabs, you aren&apos;t running a business — you&apos;re guessing. We consolidate your Shopify chaos into a single source of truth.
            </p>
          </div>
        </section>

        {/* OUTCOMES SECTION */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-10 rounded-2xl bg-[#111] border border-gray-800 hover:border-blue-500/50 transition">
              <h3 className="text-xl font-bold mb-4 text-blue-500">Stop margin leakage</h3>
              <p className="text-gray-400">Track the real impact of returns and logistics on the profit of every SKU in real-time.</p>
            </div>
            <div className="p-10 rounded-2xl bg-[#111] border border-gray-800 hover:border-blue-500/50 transition">
              <h3 className="text-xl font-bold mb-4 text-blue-500">Scale winning ads</h3>
              <p className="text-gray-400">Get clean MER and ROAS signals based on actual sales data, not inflated ad reports.</p>
            </div>
            <div className="p-10 rounded-2xl bg-[#111] border border-gray-800 hover:border-blue-500/50 transition">
              <h3 className="text-xl font-bold mb-4 text-blue-500">Customer quality</h3>
              <p className="text-gray-400">Understand LTV and retention (New vs Returning) without writing a single line of SQL.</p>
            </div>
          </div>
        </section>

        {/* DASHBOARD EXAMPLE SECTION */}
        <section id="dashboards" className="py-24 px-6 bg-[#0a0a0a]">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-16">Real Shopify Dashboards for Operators</h2>
            <div className="relative rounded-2xl overflow-hidden border border-gray-800 shadow-2xl shadow-blue-900/10">
              <Image 
                src="/dashboard-preview.png" 
                alt="Shopify Profit Dashboard" 
                width={1200} 
                height={675} 
                className="w-full h-auto pointer-events-none"
              />
            </div>
            <p className="mt-6 text-gray-500 text-sm italic">Track contribution margin, not just revenue. Demo uses sample structures.</p>
          </div>
        </section>

        {/* PRICING SECTION */}
        <section id="pricing" className="py-32 px-6 bg-[#0d0d0d] border-t border-gray-900">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-16 text-center">Transparent Pricing</h2>
            <div className="grid md:grid-cols-2 gap-10">
              {/* STARTER CARD - KYC FREE LIMIT */}
              <div className="p-10 rounded-3xl bg-[#0a0a0a] border border-gray-800 relative">
                <div className="absolute top-0 right-10 bg-green-600 text-[10px] px-4 py-1 font-bold uppercase tracking-widest rounded-b-lg">No ID Required</div>
                <h3 className="text-2xl font-bold mb-2">Starter</h3>
                <div className="text-5xl font-bold mb-8">€699 <span className="text-lg font-normal text-gray-600">/fixed</span></div>
                <ul className="space-y-4 text-gray-400 mb-12 text-sm">
                  <li>✅ 1 Executive Dashboard</li>
                  <li>✅ Shopify Data Integration</li>
                  <li>✅ Loom Training Video</li>
                  <li>✅ Handover & Documentation</li>
                </ul>
                <a href="https://calendly.com" className="block w-full py-4 rounded-xl bg-white text-black font-bold hover:bg-gray-200 transition text-center">Instant Checkout</a>
              </div>
              {/* GROWTH CARD */}
              <div className="p-10 rounded-3xl bg-[#111] border-2 border-blue-600 shadow-2xl shadow-blue-600/10 scale-105">
                <h3 className="text-2xl font-bold mb-2 text-blue-500">Growth</h3>
                <div className="text-5xl font-bold mb-8">€2,400 <span className="text-lg font-normal text-gray-600">/fixed</span></div>
                <ul className="space-y-4 text-gray-400 mb-12 text-sm">
                  <li>✅ 3-4 Advanced Dashboards</li>
                  <li>✅ Marketing & Ads Analytics</li>
                  <li>✅ Automated Refresh Setup</li>
                  <li>✅ 2-3 Iteration Rounds</li>
                </ul>
                <a href="https://calendly.com" className="block w-full py-4 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 transition text-center">Scale My Brand</a>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT & CONTACT SECTION */}
        <section id="about" className="py-24 bg-[#0a0a0a] px-6 text-center border-t border-gray-900">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-white">Direct with Founders</h2>
            <p className="text-lg text-gray-400 leading-relaxed mb-6">
              We are Lukian & Oleh. We build the models and design the visuals. No account managers. Just direct expertise.
            </p>
            <div className="text-blue-500 font-bold mb-10">
              Contact us: <a href="mailto:admin@calyxra.com" className="underline hover:text-blue-400">admin@calyxra.com</a>
            </div>
            <div className="flex justify-center gap-4 text-xs font-bold text-gray-600 uppercase tracking-widest">
              <span>Lukian K.</span>
              <span>•</span>
              <span>Oleh P.</span>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER WITH LEGAL NOTE */}
      <footer className="py-12 border-t border-gray-900 px-6 text-center">
        <p className="text-gray-600 text-sm mb-4 italic">© 2025 Calyxra. Specialized Shopify Analytics.</p>
        <p className="text-[10px] text-gray-700 uppercase tracking-widest mb-6">
          Payments processed by FOP [Kononchuk Oleksandr]
        </p>
        <div className="max-w-xs mx-auto p-3 bg-[#111] rounded-xl border border-gray-800 text-[9px] text-gray-500 uppercase tracking-widest leading-loose">
          <strong>Website Q&A Assistant:</strong> Ask about pricing or timeline. (No business data access).
        </div>
      </footer>
    </div>
  );
}