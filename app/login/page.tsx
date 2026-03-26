'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await signIn('credentials', {
        email,
        password,
        redirect: false,
      });

      if (res?.error) {
        setError('Invalid email or password.');
      } else {
        router.push('/');
        router.refresh();
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
            Welcome back
          </h1>
          <p className="text-sm text-[#78716C] text-center mb-6">
            Sign in to your Calyxra account
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
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
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
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
              {loading ? 'Signing in…' : 'Sign In →'}
            </button>
          </form>

          <p className="text-sm text-[#78716C] text-center mt-6">
            Don&apos;t have an account?{' '}
            <Link href="/register" className="text-[#064E3B] font-semibold hover:underline">
              Create one
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
