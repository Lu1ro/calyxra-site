'use client';

function AssetRow({ title, category, description, image }) {
  return (
    <div className="group grid md:grid-cols-12 gap-8 items-center py-16 border-b border-stone-200 last:border-0">
       <div className="md:col-span-5 relative">
          <div className="aspect-[16/9] bg-stone-100 relative overflow-hidden shadow-sm group-hover:shadow-xl transition-all duration-500 border border-stone-200">
             <img src={image} alt={title} className="w-full h-full object-cover transition-all duration-500 group-hover:scale-[1.02]" />
          </div>
       </div>
       <div className="md:col-span-7">
          <div className="text-emerald-700 text-[10px] font-bold uppercase tracking-widest mb-3">{category}</div>
          <h3 className="text-3xl font-serif font-medium text-stone-900 mb-4">{title}</h3>
          <p className="text-stone-500 text-lg leading-relaxed mb-8">{description}</p>
          
          <div className="flex gap-4">
             <span className="inline-block px-3 py-1 bg-stone-100 text-stone-600 text-[10px] font-bold uppercase tracking-wide">SQL-Based</span>
             <span className="inline-block px-3 py-1 bg-stone-100 text-stone-600 text-[10px] font-bold uppercase tracking-wide">Power BI</span>
             <span className="inline-block px-3 py-1 bg-stone-100 text-stone-600 text-[10px] font-bold uppercase tracking-wide">White-Label</span>
          </div>
       </div>
    </div>
  );
}

export default function DashboardsPage() {
  return (
    <div className="min-h-screen bg-[#FAFAF9] text-stone-900 font-sans selection:bg-emerald-200">
      
      {/* NAV */}
      <nav className="fixed w-full z-50 bg-[#FAFAF9]/90 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="/" className="text-2xl font-serif font-bold tracking-tight text-stone-900 hover:opacity-80">
            Calyxra<span className="text-emerald-700">.</span>
          </a>
          <a href="https://calendly.com/calyxra-team/30min" className="text-xs font-bold text-stone-900 uppercase tracking-widest border-b-2 border-stone-900 pb-0.5 hover:text-emerald-700 hover:border-emerald-700 transition-colors">
            Inquire Access
          </a>
        </div>
      </nav>

      <main className="pt-32 px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          {/* HEADER */}
          <div className="mb-24 text-center max-w-3xl mx-auto">
             <h1 className="text-5xl font-serif font-medium text-stone-900 mb-6">Asset Library.</h1>
             <p className="text-xl text-stone-500 leading-relaxed">
               A collection of standardized data models designed to solve specific operational inefficiencies in agency reporting.
             </p>
          </div>

          {/* ASSETS LIST */}
          <div className="border-t border-stone-200">
             <AssetRow 
               title="Executive Profit Intelligence" 
               category="Module 01: Financial Core" 
               image="/asset-executive-v3.png" 
               description="The definitive view for Agency Founders. Eliminates manual P&L calculations forever by automatically deducting COGS, Shipping, Taxes, and Ad Spend from Revenue in real-time."
             />
             <AssetRow 
               title="Marketing Efficiency Engine" 
               category="Module 02: Acquisition" 
               image="/asset-marketing-v3.png" 
               description="A unified attribution engine. Track blended ROAS (MER) across Meta, Google, and TikTok in one view to help media buyers justify budget scaling without platform bias."
             />
             <AssetRow 
               title="Customer Lifetime Capital" 
               category="Module 03: Retention" 
               image="/asset-retention-v3.png" 
               description="Identify high-value cohorts and justify higher acquisition costs. Analyze repurchase rates and LTV development over 60/90 days to prove long-term impact."
             />
          </div>

          {/* ENTERPRISE CTA */}
          <div className="mt-24 bg-stone-900 text-white p-12 text-center shadow-2xl">
             <h2 className="text-2xl font-serif mb-4">Need Custom Enterprise Logic?</h2>
             <p className="text-stone-400 mb-8 max-w-xl mx-auto">
                We build bespoke connectors for NetSuite, SAP, and custom ERPs.
             </p>
             <a href="https://calendly.com/calyxra-team/30min" className="inline-block px-8 py-4 bg-white text-stone-900 font-bold text-xs uppercase tracking-widest hover:bg-emerald-50 transition-colors">
                Contact Engineering
             </a>
          </div>
        </div>
      </main>

      {/* FOOTER - ADDED BACK */}
      <footer className="py-16 px-6 bg-white border-t border-stone-200">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
                <div className="text-xl font-serif font-bold text-stone-900 mb-2">Calyxra.</div>
                <p className="text-xs text-stone-400 font-medium max-w-xs leading-relaxed">
                  Premium reporting infrastructure for high-performance agencies. Built by analysts, not marketers.
                </p>
            </div>
            <div className="flex gap-8 text-[10px] font-bold text-stone-500 uppercase tracking-widest">
                <a href="/terms" className="hover:text-stone-900">Terms of Service</a>
                <a href="mailto:admin@calyxra.com" className="hover:text-stone-900">Contact Support</a>
            </div>
          </div>
          <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-stone-100 text-center text-[10px] text-stone-300 uppercase tracking-widest">
            © 2025 Calyxra Data Systems.
          </div>
      </footer>
    </div>
  );
}