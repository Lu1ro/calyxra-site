'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function RegisterPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || 'Registration failed.');
        setLoading(false);
        return;
      }

      // Auto sign-in after successful registration
      const result = await signIn('credentials', {
        email,
        password,
        redirect: false,
      });
      if (result?.error) {
        setError(result.error || 'Login failed after registration.');
      } else {
        const toolUrl = process.env.NEXT_PUBLIC_TOOL_URL || 'http://localhost:3001';
        router.push(toolUrl);
      }
    } catch (err) {
      setError('Registration failed. Please try again.');
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
              Create your Calyxra account
            </h1>
            <p className="text-sm text-stone-500">
              Use this account to access your reconciliation dashboard.
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
                  minLength={8}
                  autoComplete="new-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded border border-stone-300 bg-white text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="At least 8 characters"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-600 mb-1.5 uppercase tracking-wide">
                  Confirm Password
                </label>
                <input
                  type="password"
                  required
                  autoComplete="new-password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded border border-stone-300 bg-white text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="Repeat password"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 mt-2 rounded bg-emerald-700 text-white text-xs font-bold uppercase tracking-widest hover:bg-emerald-800 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
              >
                {loading ? 'Creating account…' : 'Create Account'}
              </button>
            </form>

            <p className="mt-4 text-xs text-stone-500 text-center">
              Already have an account?{' '}
              <a href="/login" className="font-semibold text-emerald-700 hover:underline">
                Log in
              </a>
              .
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

