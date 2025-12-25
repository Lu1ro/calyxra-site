"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();
  const calendlyUrl = "https://calendly.com/calyxra-team/30min";

  return (
    <nav className="fixed w-full z-50 bg-black/60 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* ЛОГОТИП */}
        <a href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 overflow-hidden rounded-lg border border-white/10">
            <Image 
              src="/logo.png" // Шлях до файлу в папці public
              alt="Calyxra Logo" 
              fill 
              sizes="40px"
              priority
              className="object-contain" 
            />
          </div>
          <div className="text-lg font-black tracking-tighter uppercase leading-none italic text-white">
            CALYXRA
          </div>
        </a>
        
        {/* МЕНЮ */}
        <div className="hidden md:flex gap-10 text-[11px] uppercase tracking-[0.2em] text-gray-400 font-bold">
          <a href="/#process" className="hover:text-blue-500 transition">Process</a>
          
          {/* РОЗУМНЕ ПІДСВІЧУВАННЯ: Portfolio світиться тільки на /dashboards */}
          <a 
            href="/dashboards" 
            className={`transition ${pathname === '/dashboards' ? 'text-blue-500' : 'hover:text-blue-500'}`}
          >
            Portfolio
          </a>
          
          <a href="/#pricing" className="hover:text-blue-500 transition">Pricing</a>
        </div>

        {/* КНОПКА */}
        <a 
          href={calendlyUrl} 
          className="bg-white text-black hover:bg-blue-600 hover:text-white px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-wider transition-all shadow-xl active:scale-95"
        >
          Book KPI Review
        </a>
      </div>
    </nav>
  );
}