'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toolUrl = process.env.NEXT_PUBLIC_TOOL_URL || 'https://app.calyxra.com';

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
            Calyxra<span className="text-[#064E3B]">.</span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={`${toolUrl}/login`}
            className="px-5 py-3 text-stone-600 text-xs font-bold uppercase tracking-wide hover:text-stone-900 transition-all"
          >
            Sign In
          </a>
          <a
            href="https://cal.com/calyxra/15min"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-[#064E3B] text-white text-xs font-bold uppercase tracking-wide hover:bg-[#043927] transition-all hover:shadow-lg hover:shadow-[#064E3B]/30 active:scale-95 rounded-lg"
          >
            Book a Call
          </a>
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
            <a
              href={`${toolUrl}/login`}
              className="w-full py-3 bg-stone-100 text-stone-900 text-center text-xs font-bold uppercase tracking-wide"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Sign In
            </a>
            <a
              href="https://cal.com/calyxra/15min"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full py-3 bg-[#064E3B] text-white text-center text-xs font-bold uppercase tracking-wide rounded-lg block"
            >
              Book a Call
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
