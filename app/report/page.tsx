'use client';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function ReportLandingPage() {
  return (
    <div className="min-h-screen bg-[#FAFAF9] text-stone-900 flex flex-col">
      <Navbar />

      <main className="flex-1 pt-28 pb-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-serif font-medium text-stone-900 mb-4">
            Revenue Reconciliation Report
          </h1>
          <p className="text-sm text-stone-500 mb-6">
            After you run a Free Scan on the homepage, a new tab opens with the full interactive
            dashboard in the Calyxra tool.
          </p>
          <p className="text-sm text-stone-600">
            This marketing site does not store your data or render detailed campaign tables.
            For the best experience, keep the dashboard tab open – it shows your phantom revenue,
            true ROAS, and per‑campaign recommendations.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}

