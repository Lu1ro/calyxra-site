'use client';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

/* ────────────────────────────────────────────────────────────
   Pricing page — mirror of the homepage pricing section,
   with a deeper comparison table and dedicated FAQ.
   ──────────────────────────────────────────────────────────── */

function CheckIcon({ dark = false }: { dark?: boolean }) {
  return (
    <svg className={`w-4 h-4 flex-shrink-0 mt-1 ${dark ? 'text-[#6EE7B7]' : 'text-[#064E3B]'}`} viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  );
}

function DashIcon() {
  return (
    <svg className="w-4 h-4 flex-shrink-0 mt-1 text-[#D6D3D1]" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
    </svg>
  );
}

export default function PricingPage() {
  const calendlyUrl = 'https://cal.com/calyxra/15min';

  const compareRows = [
    { label: 'Shopify stores', basic: '1 store', pro: '1 store' },
    { label: 'Ad platforms covered', basic: 'Meta or Google (1)', pro: 'Meta + Google (2)' },
    { label: 'Window of data', basic: '30 days', pro: '90 days' },
    { label: 'Phantom revenue breakdown', basic: true, pro: true },
    { label: 'Refund & chargeback analysis', basic: true, pro: true },
    { label: 'Campaign-level variance', basic: false, pro: true },
    { label: 'Channel-overlap detection', basic: false, pro: true },
    { label: 'Recommendations', basic: '3', pro: '5 + projected annual impact' },
    { label: 'Walkthrough call', basic: '30 min', pro: '45 min' },
    { label: 'Delivery', basic: '48 hours', pro: '48 hours' },
    { label: 'Refund if gap < 5%', basic: true, pro: true },
  ];

  const faq = [
    {
      q: 'Why no monthly subscription?',
      a: "We've stripped the offer down to one-time audits while we build the automation layer underneath. Monthly reconciliation returns in Q3 2026 as proper software — not a dashboard we update manually. If you want to be on the waitlist, email admin@calyxra.com.",
    },
    {
      q: 'Can I buy an audit for a client?',
      a: "Yes — agencies buy audits for their clients regularly. The invoice goes to whichever entity you specify. If you run multiple clients, ask about bulk pricing (3+ audits) at admin@calyxra.com.",
    },
    {
      q: 'How do I pay?',
      a: "After the intro call we send an invoice — wire, Wise, or card. One audit, one invoice, no auto-renewal. Pay before we start or on delivery, whichever you prefer.",
    },
    {
      q: 'What if my data is messy or incomplete?',
      a: "That's normal. On the intro call we confirm what you can export. If a source is unavailable (e.g. Google Ads closed last month) we adjust scope and sometimes price.",
    },
    {
      q: 'Do you sign an NDA?',
      a: "Yes, on request, before you send any data. DPA also available for EU clients.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAFAF9] text-[#1C1917] font-sans selection:bg-[#064E3B]/20 antialiased">
      <Navbar />

      <main className="pt-32">
        {/* ═══════════════════════════════════════════════════
            HERO
        ═══════════════════════════════════════════════════ */}
        <section className="px-6 pt-16 pb-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-[#E7E5E4] rounded-full text-[12px] font-medium text-[#44403C] mb-8 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#064E3B]"></span>
              Concierge audits · Delivered in 48h
            </div>
            <h1 className="text-[44px] md:text-[60px] font-serif font-medium text-[#1C1917] mb-6 leading-[1.06] tracking-[-0.02em]">
              Two audit tiers.<br />
              <span className="italic text-[#064E3B]">One invoice. No subscriptions.</span>
            </h1>
            <p className="text-[19px] text-[#44403C] max-w-2xl mx-auto leading-[1.55]">
              Pick the depth that fits the account. Both delivered manually, both refunded in full if the gap is below 5%.
            </p>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════
            PRICING CARDS
        ═══════════════════════════════════════════════════ */}
        <section className="px-6 pb-28">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {/* Basic */}
              <div className="bg-white border border-[#E7E5E4] rounded-2xl p-8 md:p-10 hover:border-[#D6D3D1] hover:shadow-[0_8px_24px_rgba(0,0,0,0.04)] transition-all duration-300">
                <div className="mb-6">
                  <p className="text-[11px] font-semibold text-[#78716C] uppercase tracking-[0.14em] mb-2">Revenue Audit</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-[48px] font-serif font-medium text-[#1C1917] leading-none tabular-nums">$249</span>
                    <span className="text-[14px] text-[#78716C] ml-2">one-time</span>
                  </div>
                  <p className="text-[13px] text-[#78716C] mt-2">For brands validating one platform</p>
                </div>

                <div className="h-px bg-[#E7E5E4] mb-6"></div>

                <ul className="space-y-3.5 mb-8">
                  {[
                    '1 Shopify store × 1 ad platform (Meta or Google)',
                    '30 days of data reconciled',
                    'Campaign-level phantom revenue breakdown',
                    'Refund, chargeback & discount analysis',
                    'Branded PDF report + 3 recommendations',
                    '30-minute walkthrough call',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckIcon />
                      <span className="text-[14.5px] text-[#1C1917] leading-[1.55]">{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3.5 bg-white border-2 border-[#1C1917] text-[#1C1917] font-semibold text-[13px] uppercase tracking-[0.14em] hover:bg-[#1C1917] hover:text-white transition-all rounded-lg text-center"
                >
                  Book audit — $249
                </a>
                <p className="text-[12px] text-[#78716C] text-center mt-3">PDF delivered within 48 hours</p>
              </div>

              {/* Pro */}
              <div className="relative bg-[#0B3B2E] text-white rounded-2xl p-8 md:p-10 shadow-[0_24px_60px_rgba(6,78,59,0.25)]">
                <div className="absolute -top-3 left-8">
                  <span className="inline-block bg-white text-[#064E3B] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] rounded-full border border-[#D6D3D1]">
                    Recommended
                  </span>
                </div>

                <div className="mb-6">
                  <p className="text-[11px] font-semibold text-[#6EE7B7] uppercase tracking-[0.14em] mb-2">Pro Audit</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-[48px] font-serif font-medium text-white leading-none tabular-nums">$499</span>
                    <span className="text-[14px] text-white/60 ml-2">one-time</span>
                  </div>
                  <p className="text-[13px] text-white/60 mt-2">For agencies & scaling DTC brands</p>
                </div>

                <div className="h-px bg-white/10 mb-6"></div>

                <ul className="space-y-3.5 mb-8">
                  {[
                    '1 Shopify store × Meta AND Google',
                    '90 days of data reconciled',
                    'Channel-overlap analysis (Meta vs Google double-counting)',
                    'Campaign-level variance decomposition',
                    'Branded PDF + 5 recommendations + projected annual impact',
                    '45-minute walkthrough call',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckIcon dark />
                      <span className="text-[14.5px] text-white/95 leading-[1.55]">{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3.5 bg-white text-[#064E3B] font-semibold text-[13px] uppercase tracking-[0.14em] hover:bg-[#F5F5F4] transition-all rounded-lg text-center"
                >
                  Book pro audit — $499
                </a>
                <p className="text-[12px] text-white/60 text-center mt-3">PDF delivered within 48 hours</p>
              </div>
            </div>

            <p className="text-center text-[14px] text-[#78716C] mt-10">
              Need something custom (multi-store, multi-platform, bulk)?{' '}
              <a href="mailto:admin@calyxra.com?subject=Custom audit request" className="text-[#064E3B] font-semibold hover:underline">
                Email us →
              </a>
            </p>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════
            COMPARISON TABLE
        ═══════════════════════════════════════════════════ */}
        <section className="py-24 px-6 bg-white border-y border-[#E7E5E4]">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14 max-w-2xl mx-auto">
              <p className="text-[11px] font-semibold text-[#064E3B] uppercase tracking-[0.18em] mb-3">Compare</p>
              <h2 className="text-[34px] md:text-[44px] font-serif font-medium text-[#1C1917] leading-[1.15] mb-4">
                What&apos;s different between the two.
              </h2>
              <p className="text-[17px] text-[#78716C] leading-relaxed">
                Both audits use the same methodology. Pro goes wider (two platforms) and deeper (90 days + channel overlap).
              </p>
            </div>

            <div className="max-w-4xl mx-auto bg-white border border-[#E7E5E4] rounded-2xl overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#FAFAF9] border-b border-[#E7E5E4]">
                    <th className="text-left px-6 py-5 text-[11px] font-semibold text-[#78716C] uppercase tracking-[0.14em]">Feature</th>
                    <th className="text-center px-6 py-5 text-[11px] font-semibold text-[#78716C] uppercase tracking-[0.14em]">$249 Audit</th>
                    <th className="text-center px-6 py-5 text-[11px] font-semibold text-[#064E3B] uppercase tracking-[0.14em] bg-[#064E3B]/5">$499 Pro</th>
                  </tr>
                </thead>
                <tbody>
                  {compareRows.map((row, i) => (
                    <tr key={i} className="border-b border-[#E7E5E4] last:border-0">
                      <td className="px-6 py-4 text-[14.5px] font-medium text-[#1C1917]">{row.label}</td>
                      <td className="px-6 py-4 text-center">
                        {typeof row.basic === 'boolean' ? (
                          row.basic ? (
                            <span className="inline-flex"><CheckIcon /></span>
                          ) : (
                            <span className="inline-flex"><DashIcon /></span>
                          )
                        ) : (
                          <span className="text-[14px] text-[#44403C]">{row.basic}</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-center bg-[#064E3B]/[0.03]">
                        {typeof row.pro === 'boolean' ? (
                          row.pro ? (
                            <span className="inline-flex"><CheckIcon /></span>
                          ) : (
                            <span className="inline-flex"><DashIcon /></span>
                          )
                        ) : (
                          <span className="text-[14px] font-medium text-[#064E3B]">{row.pro}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════
            HOW WE DELIVER
        ═══════════════════════════════════════════════════ */}
        <section className="py-24 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14 max-w-2xl mx-auto">
              <p className="text-[11px] font-semibold text-[#064E3B] uppercase tracking-[0.18em] mb-3">Delivery</p>
              <h2 className="text-[34px] md:text-[44px] font-serif font-medium text-[#1C1917] leading-[1.15] mb-4">
                What the 48 hours look like.
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-10 md:gap-6">
              {[
                {
                  step: '01',
                  title: 'Intro call (15 min)',
                  body: 'We confirm scope, you describe the account, we send a checklist of exports you need to pull from Shopify, Meta, and Google.',
                },
                {
                  step: '02',
                  title: 'You send exports',
                  body: 'Standard CSV exports — about 5 minutes of work. No API access, no OAuth, no permissions to your accounts. Data leaves your side only once.',
                },
                {
                  step: '03',
                  title: 'Report + walkthrough',
                  body: 'Branded PDF delivered within 48 hours, followed by a 30–45 minute walkthrough call where we go through findings campaign by campaign.',
                },
              ].map((item, i) => (
                <div key={i}>
                  <div className="flex items-baseline gap-3 mb-4">
                    <span className="text-[13px] font-mono font-semibold text-[#064E3B] tracking-widest">{item.step}</span>
                    <div className="flex-1 h-px bg-[#E7E5E4]"></div>
                  </div>
                  <h3 className="text-[22px] font-serif font-medium text-[#1C1917] mb-3 leading-[1.25]">{item.title}</h3>
                  <p className="text-[15px] text-[#44403C] leading-[1.65]">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════
            FAQ
        ═══════════════════════════════════════════════════ */}
        <section className="py-24 px-6 bg-white border-y border-[#E7E5E4]">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-[11px] font-semibold text-[#064E3B] uppercase tracking-[0.18em] mb-3">Questions</p>
              <h2 className="text-[34px] md:text-[44px] font-serif font-medium text-[#1C1917] leading-[1.15]">
                Pricing & delivery questions.
              </h2>
            </div>

            <div className="bg-[#FAFAF9] rounded-2xl border border-[#E7E5E4]">
              {faq.map((item, i) => (
                <details key={i} className="border-b border-[#E7E5E4] last:border-0 group">
                  <summary className="w-full px-7 py-5 flex items-center justify-between text-left cursor-pointer list-none [&::-webkit-details-marker]:hidden hover:bg-white transition-colors">
                    <span className="text-[15.5px] font-semibold text-[#1C1917] pr-4 leading-[1.4]">{item.q}</span>
                    <svg className="w-5 h-5 text-[#78716C] flex-shrink-0 transition-transform duration-200 group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-7 pb-6 -mt-1">
                    <p className="text-[15px] text-[#44403C] leading-[1.7]">{item.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════
            FINAL CTA
        ═══════════════════════════════════════════════════ */}
        <section className="py-24 px-6 bg-[#0B3B2E] text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-[36px] md:text-[48px] font-serif font-medium leading-[1.1] mb-6 tracking-[-0.02em]">
              Ready when you are.
            </h2>
            <p className="text-[17px] text-white/70 mb-10 max-w-xl mx-auto leading-relaxed">
              Book a 15-minute intro. We&apos;ll confirm scope and send the export checklist.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
              <a
                href={calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#064E3B] font-semibold text-[13px] uppercase tracking-[0.14em] hover:bg-[#F5F5F4] transition-all rounded-lg min-w-[220px]"
              >
                Book a call →
              </a>
              <a
                href="mailto:admin@calyxra.com?subject=Audit question"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-white/30 text-white font-semibold text-[13px] uppercase tracking-[0.14em] hover:bg-white/5 hover:border-white/60 transition-all rounded-lg min-w-[220px]"
              >
                Email us first
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
