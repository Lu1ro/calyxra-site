'use client';

import Image from 'next/image';

function AssetRow({ title, category, description, image, tags }: {
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
}) {
  return (
    <div className="group grid md:grid-cols-12 gap-8 items-center py-16 border-b border-stone-200 last:border-0">
      <div className="md:col-span-5 relative">
        <div className="aspect-[16/9] bg-stone-100 relative overflow-hidden shadow-sm group-hover:shadow-xl transition-all duration-500 border border-stone-200">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-all duration-500 group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 100vw, 40vw"
          />
        </div>
      </div>
      <div className="md:col-span-7">
        <div className="text-emerald-700 text-[10px] font-bold uppercase tracking-widest mb-3">{category}</div>
        <h3 className="text-3xl font-serif font-medium text-stone-900 mb-4">{title}</h3>
        <p className="text-stone-500 text-lg leading-relaxed mb-8">{description}</p>

        <div className="flex flex-wrap gap-3">
          {tags.map((tag, i) => (
            <span key={i} className="inline-block px-3 py-1 bg-stone-100 text-stone-600 text-[10px] font-bold uppercase tracking-wide">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function DashboardsPage() {
  const calendlyUrl = "https://cal.com/calyxra/30min";

  return (
    <div className="min-h-screen bg-[#FAFAF9] text-stone-900 font-sans selection:bg-emerald-200">

      {/* NAV */}
      <nav className="fixed w-full z-50 bg-[#FAFAF9]/90 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="/" className="flex items-center gap-4 group cursor-pointer">
            <div className="relative">
              <Image
                src="/logo.png"
                alt="Calyxra Logo"
                width={48}
                height={48}
                className="object-contain transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute -inset-2 bg-emerald-500/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="text-2xl font-serif font-bold tracking-tight text-stone-900 flex items-center">
              Calyxra<span className="text-emerald-700">.</span>
            </div>
          </a>

          <div className="hidden md:flex gap-8 text-xs font-bold text-stone-500 uppercase tracking-widest">
            <a href="/#methodology" className="hover:text-stone-900 transition-colors">Methodology</a>
            <a href="/dashboards" className="text-emerald-700">Assets</a>
            <a href="/pricing" className="hover:text-stone-900 transition-colors">Investment</a>
          </div>

          <a href={calendlyUrl} className="px-6 py-3 bg-emerald-700 text-white text-xs font-bold uppercase tracking-wide hover:bg-emerald-800 transition-all hover:shadow-lg hover:shadow-emerald-700/30 active:scale-95">
            Book Audit
          </a>
        </div>
      </nav>

      <main className="pt-32 px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          {/* HEADER */}
          <div className="mb-24 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase bg-emerald-100 border border-emerald-300 text-emerald-700 mb-6">
              White-Label Ready
            </div>
            <h1 className="text-5xl font-serif font-medium text-stone-900 mb-6">Demo Dashboards</h1>
            <p className="text-xl text-stone-500 leading-relaxed">
              See how agencies use Calyxra to standardize Shopify + ads reporting into one KPI layer—so client reporting is consistent across every account.
            </p>
          </div>

          {/* ASSETS LIST */}
          <div className="border-t border-stone-200">
            <AssetRow
              title="Executive KPI + Profit"
              category="Module 01"
              image="/asset-executive-v3.png"
              description="One page for clients and account managers: revenue, spend, MER/ROAS, margin, and profit—with clear definitions and consistent reconciliation rules."
              tags={["Profit", "MER", "Reconciliation"]}
            />
            <AssetRow
              title="Paid Media Performance"
              category="Module 02"
              image="/asset-marketing-v3.png"
              description="Channel and campaign performance with blended MER plus platform KPIs (CPC/CPA/CTR). Built for weekly client updates without spreadsheet work."
              tags={["Blended MER", "Spend", "Attribution"]}
            />
            <AssetRow
              title="Customers & Retention"
              category="Module 03"
              image="/asset-retention-v3.png"
              description="New vs returning customers, repeat rate, cohorts, and retention trends—so you can explain growth quality, not just ROAS."
              tags={["Cohorts", "New vs Returning", "Repeat Rate"]}
            />
          </div>

          {/* DEMO CTA */}
          <div className="mt-24 bg-stone-900 text-white p-12 text-center shadow-2xl">
            <h2 className="text-2xl font-serif mb-4">Want access to the full demo + KPI definitions?</h2>
            <p className="text-stone-400 mb-8 max-w-xl mx-auto">
              Get the 2-minute walkthrough and our Reporting Consistency Audit checklist.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
              <a href={calendlyUrl} className="inline-block px-8 py-4 bg-emerald-600 text-white font-bold text-xs uppercase tracking-widest hover:bg-emerald-500 transition-colors shadow-lg shadow-emerald-600/30">
                Get Demo
              </a>
              <a href={calendlyUrl} className="inline-block px-8 py-4 bg-transparent border border-white/20 text-white font-bold text-xs uppercase tracking-widest hover:bg-white/10 transition-colors">
                Book a 15-min KPI Audit
              </a>
            </div>
            <p className="text-stone-500 text-xs">
              Demo uses public/anonymized data. No client data is shown.
            </p>
          </div>
        </div>
      </main>

      {/* FOOTER */}
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
          © 2025 Calyxra Data Systems.
        </div>
      </footer>
    </div>
  );
}