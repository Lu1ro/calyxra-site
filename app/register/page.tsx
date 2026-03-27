'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // 1. Register
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Registration failed.');
        setLoading(false);
        return;
      }

      // 2. Auto sign-in after registration
      const signInRes = await signIn('credentials', {
        email,
        password,
        redirect: false,
      });

      if (signInRes?.error) {
        // Registration succeeded but sign-in failed — redirect to login
        router.push('/login');
      } else {
        // Redirect to the SaaS dashboard after registration
        window.location.href = process.env.NEXT_PUBLIC_TOOL_URL || 'https://app.calyxra.com';
      }
    } catch {
      setError('Something went wrong. Try again.');
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    'w-full px-4 py-3 border border-stone-300 text-[#1C1917] text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-[#064E3B]/30 focus:border-[#064E3B] transition-all bg-white';

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAFAF9] px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <Link href="/" className="flex items-center justify-center gap-3 mb-10 group">
          <Image
            src="/logo.png"
            alt="Calyxra Logo"
            width={40}
            height={40}
            className="object-contain"
          />
          <span className="text-2xl font-serif font-bold text-stone-900">
            Calyxra<span className="text-[#064E3B]">.</span>
          </span>
        </Link>

        <div className="bg-white rounded-xl border border-stone-200 shadow-sm p-8">
          <h1 className="text-2xl font-serif font-medium text-[#1C1917] mb-1 text-center">
            Create your account
          </h1>
          <p className="text-sm text-[#78716C] text-center mb-6">
            Start reconciling your ad revenue in minutes
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-[#1C1917] mb-1.5">
                Name
              </label>
              <input
                type="text"
                className={inputClass}
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#1C1917] mb-1.5">
                Email
              </label>
              <input
                type="email"
                className={inputClass}
                placeholder="you@agency.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#1C1917] mb-1.5">
                Password
              </label>
              <input
                type="password"
                className={inputClass}
                placeholder="Min. 6 characters"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
              />
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-center">
                <p className="text-red-600 text-sm">{error}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 bg-[#064E3B] text-white font-bold text-sm uppercase tracking-widest hover:bg-[#043927] transition-all rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Creating account…' : 'Create Account →'}
            </button>
          </form>

          <p className="text-sm text-[#78716C] text-center mt-6">
            Already have an account?{' '}
            <Link href="/login" className="text-[#064E3B] font-semibold hover:underline">
              Sign in
            </Link>
          </p>
        </div>

        <p className="text-xs text-[#78716C] text-center mt-6">
          🔒 Read-only API access. Your data is never stored.
        </p>
      </div>
    </div>
  );
}
