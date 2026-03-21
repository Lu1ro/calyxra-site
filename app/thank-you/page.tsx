'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

function ThankYouContent() {
  const searchParams = useSearchParams();
  const plan = searchParams.get('plan');

  const toolUrl = process.env.NEXT_PUBLIC_TOOL_URL || 'https://app.calyxra.com';

  return (
    <main className="min-h-screen bg-[#FAFAF9]">
      <Navbar />

      <section className="pt-36 pb-20 px-6">
        <div className="max-w-xl mx-auto text-center">
          {plan === 'audit' ? (
            <>
              <div className="w-20 h-20 mx-auto mb-6 bg-emerald-100 rounded-full flex items-center justify-center">
                <span className="text-4xl">✅</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-4">
                Payment Received
              </h1>
              <p className="text-stone-600 text-lg leading-relaxed mb-4">
                We&apos;ll email you within <strong>2 hours</strong> to collect your
                Shopify and ad platform credentials.
              </p>
              <p className="text-stone-600 leading-relaxed mb-6">
                Your Revenue Leak Audit will be delivered within <strong>48 hours</strong> as
                a branded PDF with root cause analysis and actionable recommendations.
              </p>
              <div className="bg-stone-100 rounded-xl p-6 text-left space-y-2">
                <p className="text-sm font-semibold text-stone-700">What happens next:</p>
                <ol className="text-sm text-stone-600 list-decimal list-inside space-y-1">
                  <li>We email you to collect API credentials (read-only)</li>
                  <li>We run full reconciliation against real data</li>
                  <li>You receive a branded PDF report via email</li>
                </ol>
              </div>
              <p className="text-sm text-stone-400 mt-6">
                Questions? <a href="mailto:team@calyxra.com" className="text-emerald-700 hover:underline">team@calyxra.com</a>
              </p>
            </>
          ) : plan === 'monthly' ? (
            <>
              <div className="w-20 h-20 mx-auto mb-6 bg-emerald-100 rounded-full flex items-center justify-center">
                <span className="text-4xl">🎉</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-4">
                Welcome to Calyxra
              </h1>
              <p className="text-stone-600 text-lg leading-relaxed mb-6">
                Check your email for your login credentials.
                Your first reconciliation report is ready to run.
              </p>
              <a
                href={`${toolUrl}/login`}
                className="inline-flex items-center justify-center px-8 py-4 bg-emerald-700 text-white font-bold text-sm uppercase tracking-widest hover:bg-emerald-800 transition-all rounded"
              >
                Go to Dashboard →
              </a>
              <p className="text-sm text-stone-400 mt-6">
                Remember to change your temporary password after first login.
              </p>
            </>
          ) : (
            <>
              <h1 className="text-3xl font-serif font-bold text-stone-900 mb-4">
                Thank You
              </h1>
              <p className="text-stone-600">Your request has been received.</p>
            </>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default function ThankYouPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#FAFAF9] flex items-center justify-center">
        <p className="text-stone-400">Loading...</p>
      </div>
    }>
      <ThankYouContent />
    </Suspense>
  );
}
