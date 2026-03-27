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
        // Redirect to the SaaS dashboard after login
        window.location.href = process.env.NEXT_PUBLIC_TOOL_URL || 'https://app.calyxra.com';
      }
    } catch {
      setError('Something went wrong. Try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen font-sans">
      {/* Left — Hero */}
      <div className="hidden lg:flex flex-1 relative overflow-hidden flex-col justify-center px-16"
           style={{ background: 'linear-gradient(135deg, #0a1628 0%, #0d2137 40%, #0a2e35 100%)' }}>
        {/* Glow effects */}
        <div className="absolute -top-1/2 -right-[30%] w-[600px] h-[600px] rounded-full"
             style={{ background: 'radial-gradient(circle, rgba(6,78,59,0.15) 0%, transparent 70%)' }} />
        <div className="absolute -bottom-[30%] -left-[20%] w-[400px] h-[400px] rounded-full"
             style={{ background: 'radial-gradient(circle, rgba(6,78,59,0.1) 0%, transparent 70%)' }} />

        <div className="relative z-10 max-w-[480px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 mb-12">
            <Image src="/logo.png" alt="Calyxra" width={40} height={40} className="object-contain" />
            <span className="text-[22px] font-bold text-stone-200 tracking-tight">
              Calyx<span className="text-[#064E3B]">ra</span>
            </span>
          </Link>

          <h1 className="font-serif text-5xl text-white leading-tight mb-6">
            Stop losing money to phantom revenue
          </h1>
          <p className="text-lg text-white/55 leading-relaxed mb-14">
            Ad platforms overstate your revenue by 15–40%.
            Calyxra shows you the real numbers so you can make
            better decisions for your clients.
          </p>

          {/* Stats */}
          <div className="flex gap-10 mb-14">
            <div className="flex flex-col">
              <span className="text-[32px] font-bold text-[#064E3B] tracking-tight">$2.4M+</span>
              <span className="text-sm text-white/40 uppercase tracking-wider mt-1">Phantom Revenue Found</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[32px] font-bold text-[#064E3B] tracking-tight">15–40%</span>
              <span className="text-sm text-white/40 uppercase tracking-wider mt-1">Avg Revenue Gap</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[32px] font-bold text-[#064E3B] tracking-tight">&lt;30s</span>
              <span className="text-sm text-white/40 uppercase tracking-wider mt-1">Time to Results</span>
            </div>
          </div>

          {/* Quote */}
          <div className="py-5 px-6 rounded-r-lg border-l-[3px] border-[#064E3B]"
               style={{ background: 'rgba(255,255,255,0.04)' }}>
            <p className="text-white/60 text-base italic leading-relaxed mb-2">
              &ldquo;We found $82K in phantom revenue across 3 client stores in the first week.&rdquo;
            </p>
            <cite className="text-white/40 text-sm not-italic">— Shopify Plus Agency, UK</cite>
          </div>
        </div>
      </div>

      {/* Right — Form */}
      <div className="w-full lg:w-[480px] flex items-center justify-center bg-white px-6 sm:px-10">
        <div className="w-full max-w-[360px]">
          {/* Mobile logo */}
          <div className="lg:hidden flex items-center justify-center gap-3 mb-10">
            <Image src="/logo.png" alt="Calyxra Logo" width={40} height={40} className="object-contain" />
            <span className="text-2xl font-serif font-bold text-stone-900">
              Calyxra<span className="text-[#064E3B]">.</span>
            </span>
          </div>

          <div className="mb-8">
            <h2 className="font-serif text-[26px] text-[#1C1917] mb-1.5">Welcome back</h2>
            <p className="text-sm text-[#78716C]">Sign in to your agency dashboard</p>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4 text-center">
              <p className="text-red-600 text-sm">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-[13px] font-semibold text-[#1C1917] mb-1.5">Email</label>
              <input
                type="email"
                className="w-full px-3.5 py-2.5 border border-stone-200 rounded-lg text-sm text-[#1C1917] bg-stone-50 outline-none transition-all focus:border-[#064E3B] focus:ring-2 focus:ring-[#064E3B]/10 focus:bg-white placeholder:text-stone-400"
                placeholder="you@agency.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
              />
            </div>
            <div>
              <label className="block text-[13px] font-semibold text-[#1C1917] mb-1.5">Password</label>
              <input
                type="password"
                className="w-full px-3.5 py-2.5 border border-stone-200 rounded-lg text-sm text-[#1C1917] bg-stone-50 outline-none transition-all focus:border-[#064E3B] focus:ring-2 focus:ring-[#064E3B]/10 focus:bg-white placeholder:text-stone-400"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-[#064E3B] text-white font-semibold text-sm rounded-lg hover:bg-[#043927] hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="animate-spin">
                    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                  </svg>
                  Signing in...
                </>
              ) : 'Sign In →'}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-5 text-stone-400 text-xs">
            <div className="flex-1 h-px bg-stone-200" />
            or
            <div className="flex-1 h-px bg-stone-200" />
          </div>

          <p className="text-sm text-[#78716C] text-center">
            Don&apos;t have an account?{' '}
            <Link href="/register" className="text-[#064E3B] font-semibold hover:underline">
              Create one
            </Link>
            {' '}or{' '}
            <a href="https://cal.com/calyxra/15min" target="_blank" rel="noopener noreferrer"
               className="text-[#064E3B] font-semibold hover:underline">
              book a demo
            </a>
          </p>

          {/* Security note */}
          <div className="flex items-center justify-center gap-1.5 mt-4 text-stone-400 text-[11px]">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0110 0v4" />
            </svg>
            256-bit encryption · Read-only API access · SOC 2 ready
          </div>
        </div>
      </div>
    </div>
  );
}
