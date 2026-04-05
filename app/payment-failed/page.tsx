'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

function PaymentFailedContent() {
  const searchParams = useSearchParams();
  const reason = searchParams.get('reason');

  return (
    <main className="min-h-screen bg-[#FAFAF9]">
      <Navbar />

      <section className="pt-36 pb-20 px-6">
        <div className="max-w-xl mx-auto text-center">
          <div className="w-20 h-20 mx-auto mb-6 bg-red-100 rounded-full flex items-center justify-center">
            <span className="text-4xl">&#10060;</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-4">
            Payment Failed
          </h1>
          <p className="text-stone-600 text-lg leading-relaxed mb-4">
            Unfortunately, your payment could not be processed.
            {reason && (
              <span className="block mt-2 text-sm text-stone-500">
                Reason: {reason}
              </span>
            )}
          </p>
          <p className="text-stone-600 leading-relaxed mb-8">
            No charges have been made. Please try again or contact our support team for assistance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/#pricing"
              className="inline-flex items-center justify-center px-8 py-4 bg-emerald-700 text-white font-bold text-sm uppercase tracking-widest hover:bg-emerald-800 transition-all rounded"
            >
              Try Again
            </a>
            <a
              href="mailto:admin@calyxra.com?subject=Payment%20Issue"
              className="inline-flex items-center justify-center px-8 py-4 border border-stone-300 text-stone-700 font-bold text-sm uppercase tracking-widest hover:bg-stone-100 transition-all rounded"
            >
              Contact Support
            </a>
          </div>

          <div className="bg-stone-100 rounded-xl p-6 text-left space-y-2 mt-10">
            <p className="text-sm font-semibold text-stone-700">Common reasons for payment failure:</p>
            <ul className="text-sm text-stone-600 list-disc list-inside space-y-1">
              <li>Insufficient funds on your card</li>
              <li>Card declined by your bank</li>
              <li>Incorrect card details entered</li>
              <li>3D Secure verification not completed</li>
            </ul>
          </div>

          <p className="text-sm text-stone-400 mt-6">
            Need help? <a href="mailto:admin@calyxra.com" className="text-emerald-700 hover:underline">admin@calyxra.com</a>
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default function PaymentFailedPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#FAFAF9] flex items-center justify-center">
        <p className="text-stone-400">Loading...</p>
      </div>
    }>
      <PaymentFailedContent />
    </Suspense>
  );
}
