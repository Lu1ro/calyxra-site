'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toolUrl = process.env.NEXT_PUBLIC_TOOL_URL || 'https://app.calyxra.com';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAFAF9]/85 backdrop-blur-xl border-b border-[#E7E5E4]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group cursor-pointer">
          <Image
            src="/logo.png"
            alt="Calyxra"
            width={40}
            height={40}
            priority
            className="object-contain h-9 w-auto transition-transform duration-300 group-hover:scale-[1.04]"
          />
          <span className="text-[22px] font-serif font-medium tracking-tight text-[#1C1917] leading-none">
            Calyxra<span className="text-[#064E3B]">.</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          <Link
            href="/#saas-pricing"
            className="px-4 py-2.5 text-[#44403C] text-[13.5px] font-medium hover:text-[#1C1917] transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="/#calculator"
            className="px-4 py-2.5 text-[#44403C] text-[13.5px] font-medium hover:text-[#1C1917] transition-colors"
          >
            Gap calculator
          </Link>
          <a
            href="/case-studies"
            className="px-4 py-2.5 text-[#44403C] text-[13.5px] font-medium hover:text-[#1C1917] transition-colors"
          >
            Case studies
          </a>

          <div className="w-px h-5 bg-[#E7E5E4] mx-2"></div>

          <a
            href={`${toolUrl}/login`}
            className="px-4 py-2.5 text-[#44403C] text-[13.5px] font-medium hover:text-[#1C1917] transition-colors"
          >
            Sign in
          </a>
          <a
            href="https://cal.com/calyxra/15min"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-flex items-center gap-1.5 px-5 py-2.5 bg-[#064E3B] text-white text-[13px] font-semibold hover:bg-[#043927] hover:shadow-[0_6px_20px_rgba(6,78,59,0.28)] active:scale-[0.98] transition-all rounded-lg"
          >
            Book a call
            <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-[#1C1917] -mr-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-[#FAFAF9] border-b border-[#E7E5E4] shadow-xl">
          <div className="px-6 py-6 flex flex-col gap-1">
            <Link
              href="/#saas-pricing"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-4 py-3.5 text-[15px] font-medium text-[#1C1917] hover:bg-[#F5F5F4] transition-colors rounded-lg"
            >
              Pricing
            </Link>
            <Link
              href="/#calculator"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-4 py-3.5 text-[15px] font-medium text-[#1C1917] hover:bg-[#F5F5F4] transition-colors rounded-lg"
            >
              Gap calculator
            </Link>
            <a
              href="/case-studies"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-4 py-3.5 text-[15px] font-medium text-[#1C1917] hover:bg-[#F5F5F4] transition-colors rounded-lg"
            >
              Case studies
            </a>
            <a
              href={`${toolUrl}/login`}
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-4 py-3.5 text-[15px] font-medium text-[#44403C] hover:bg-[#F5F5F4] transition-colors rounded-lg"
            >
              Sign in
            </a>
            <a
              href="https://cal.com/calyxra/15min"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-3 w-full py-3.5 bg-[#064E3B] text-white text-center text-[13px] font-semibold uppercase tracking-[0.14em] rounded-lg"
            >
              Book a call →
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
