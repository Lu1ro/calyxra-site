'use client';

import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // Placeholder: wire up to real auth later
      console.log('Login attempted', { email });
      // Simulate short delay for nicer UX
      await new Promise((resolve) => setTimeout(resolve, 500));
    } catch (err) {
      setError('Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAF9] text-stone-900 flex flex-col">
      <Navbar />

      <main className="flex-1 pt-28 pb-24 px-6">
        <div className="max-w-md mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-3xl md:text-4xl font-serif font-medium text-stone-900 mb-2">
              Login to Calyxra
            </h1>
            <p className="text-sm text-stone-500">
              Access your reconciliation dashboards and client reports.
            </p>
          </div>

          <div className="bg-white border border-stone-200 rounded-xl shadow-sm p-6 md:p-8">
            {error && (
              <div className="mb-4 rounded border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-600">
                {error}
              </div>
            )}

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-xs font-semibold text-stone-600 mb-1.5 uppercase tracking-wide">
                  Email
                </label>
                <input
                  type="email"
                  required
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded border border-stone-300 bg-white text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="you@agency.com"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-600 mb-1.5 uppercase tracking-wide">
                  Password
                </label>
                <input
                  type="password"
                  required
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded border border-stone-300 bg-white text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="••••••••"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 mt-2 rounded bg-emerald-700 text-white text-xs font-bold uppercase tracking-widest hover:bg-emerald-800 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
              >
                {loading ? 'Signing in…' : 'Sign In'}
              </button>
            </form>

            <p className="mt-4 text-xs text-stone-500 text-center">
              Don&apos;t have an account yet?{' '}
              <a
                href="https://cal.com/calyxra/15min"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-emerald-700 hover:underline"
              >
                Book a call
              </a>{' '}
              to get access.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

