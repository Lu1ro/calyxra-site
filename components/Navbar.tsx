'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { data: session } = useSession();
  const toolUrl = process.env.NEXT_PUBLIC_TOOL_URL || 'http://localhost:3001';

  const handleCheckout = async () => {
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ plan: 'audit' }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      }
    } catch (err) {
      console.error('Checkout error:', err);
    }
  };

  return (
    <nav className="fixed w-full z-50 bg-[#FAFAF9]/90 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-4 group cursor-pointer">
          <div className="relative">
            <Image
              src="/logo.png"
              alt="Calyxra Logo"
              width={48}
              height={48}
              className="object-contain transition-transform duration-500 group-hover:scale-110 h-12 w-auto"
            />
            <div className="absolute -inset-2 bg-emerald-500/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="text-2xl font-serif font-bold tracking-tight text-stone-900 flex items-center">
            Calyxra<span className="text-emerald-700">.</span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-3">
          {session ? (
            <a
              href={toolUrl}
              className="px-5 py-3 text-emerald-700 text-xs font-bold uppercase tracking-wide hover:text-emerald-900 transition-all"
            >
              Dashboard →
            </a>
          ) : (
            <a
              href="/login"
              className="px-5 py-3 text-stone-600 text-xs font-bold uppercase tracking-wide hover:text-stone-900 transition-all"
            >
              Login
            </a>
          )}
          <button
            onClick={handleCheckout}
            className="px-6 py-3 bg-emerald-700 text-white text-xs font-bold uppercase tracking-wide hover:bg-emerald-800 transition-all hover:shadow-lg hover:shadow-emerald-700/30 active:scale-95"
          >
            Book Audit — $249
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-stone-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-[#FAFAF9] border-b border-stone-200 p-6 flex flex-col gap-6 shadow-xl">
          <div className="flex flex-col gap-3">
            {session ? (
              <a
                href={toolUrl}
                className="w-full py-3 bg-stone-100 text-stone-900 text-center text-xs font-bold uppercase tracking-wide"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Dashboard →
              </a>
            ) : (
              <a
                href="/login"
                className="w-full py-3 bg-stone-100 text-stone-900 text-center text-xs font-bold uppercase tracking-wide"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Login
              </a>
            )}
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                handleCheckout();
              }}
              className="w-full py-3 bg-emerald-700 text-white text-center text-xs font-bold uppercase tracking-wide"
            >
              Book Audit — $249
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}