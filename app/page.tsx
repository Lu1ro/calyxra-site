'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  Send, Loader2, Sparkles, BarChart3, Database, Zap, X, Mail, 
  ArrowRight, CheckCircle2, TrendingUp, FileSpreadsheet, ArrowRightLeft, Calendar
} from 'lucide-react';

// --- Types ---
interface Service {
  id: string;
  title: string;
  icon: React.ReactNode;
  shortDesc: string;
}

const SERVICES: Service[] = [
  {
    id: 'power-bi',
    title: 'Power BI KPI Dashboards',
    icon: <BarChart3 className="w-6 h-6 text-blue-400" />,
    shortDesc: 'Автоматизоване відстеження доходу, росту та операцій.'
  },
  {
    id: 'data-cleaning',
    title: 'Data Cleaning & Modeling',
    icon: <Database className="w-6 h-6 text-purple-400" />,
    shortDesc: 'Трансформації на базі SQL для гарантії точності ваших цифр.'
  },
  {
    id: 'automation',
    title: 'Reporting Automation',
    icon: <Zap className="w-6 h-6 text-yellow-400" />,
    shortDesc: 'Зменшення ручної роботи через пряме підключення SQL та Excel.'
  }
];

// --- Components ---

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
    <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
      <div className="flex items-center gap-3 font-bold text-xl text-white cursor-pointer" onClick={() => window.scrollTo(0,0)}>
        <Image src="/logo.png" alt="Calyxra" width={40} height={40} className="w-10 h-10 object-contain" />
        <span>Calyxra</span>
      </div>
      <div className="hidden md:flex gap-6 text-sm font-medium text-neutral-400">
        <a href="#problem" className="hover:text-white transition-colors">The Problem</a>
        <a href="#services" className="hover:text-white transition-colors">Services</a>
        <a href="#process" className="hover:text-white transition-colors">Process</a>
        <a href="#examples" className="hover:text-white transition-colors">Examples</a>
        <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
      </div>
      {/* Пряме посилання на Calendly у меню */}
      <a href="https://calendly.com/calyxra-team/30min" target="_blank" className="px-5 py-2 bg-white text-black text-xs font-bold rounded-full hover:bg-neutral-200 transition-colors">
        Book a call
      </a>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative pt-32 pb-20 px-6">
    <div className="max-w-4xl mx-auto text-center relative z-10">
      <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white">
        Stop guessing. <br />
        <span className="text-blue-500">Start deciding.</span>
      </h1>
      <p className="text-lg md:text-xl text-neutral-400 mb-10 max-w-2xl mx-auto leading-relaxed">
        Ми перетворюємо хаотичні Excel-таблиці та SQL-бази на єдине джерело істини — Power BI дашборди для засновників, яким потрібні цифри, що заслуговують на довіру.
      </p>
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
        {/* Головна кнопка дії (Calendly) */}
        <a href="https://calendly.com/calyxra-team/30min" target="_blank" className="px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-500 transition-all flex items-center gap-2 shadow-lg shadow-blue-600/20">
          <Calendar className="w-5 h-5" /> Book a free 30-min KPI review
        </a>
        <a href="#examples" className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold rounded-lg hover:bg-white/5 transition-colors">
          View dashboard examples
        </a>
      </div>
      <div className="flex flex-wrap justify-center gap-6 text-sm text-neutral-500">
        <span className="flex items-center gap-2">✓ Доставка за 1–3 тижні</span>
        <span className="flex items-center gap-2">✓ Стартові пакети від €750</span>
        <span className="flex items-center gap-2">✓ Прямий зв'язок з Lukian & Oleh</span>
      </div>
    </div>
  </section>
);

const Problem = () => (
  <section id="problem" className="py-24 px-6 bg-neutral-950">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Excel гальмує ваш розвиток.</h2>
      <p className="text-neutral-400 text-lg leading-relaxed">
        Ручна звітність створює суперечливі KPI, сповільнює прийняття рішень і породжує "різні версії правди". 
        Ми допоможемо консолідувати дані та створити дашборди, на які ваша команда зможе реально покластися.
      </p>
    </div>
  </section>
);

const Process = () => (
  <section id="process" className="py-24 px-6 border-y border-white/5">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-16 text-center">Від хаосу до ясності за 4 кроки</h2>
      <div className="grid md:grid-cols-4 gap-8">
        {[
          { n: '1', t: 'KPI review call', d: 'Визначаємо, що саме трекати.' },
          { n: '2', t: 'Data audit', d: 'Шукаємо прогалини у ваших даних.' },
          { n: '3', t: 'Prototype → Build', d: 'Розробляємо та налаштовуємо.' },
          { n: '4', t: 'Handover', d: 'Навчання та передача доступу.' }
        ].map((s, i) => (
          <div key={i} className="relative p-6 bg-neutral-900 rounded-xl border border-white/5">
            <span className="text-blue-500 font-bold text-lg mb-4 block">0{s.n}</span>
            <h3 className="font-bold mb-2">{s.t}</h3>
            <p className="text-sm text-neutral-500">{s.d}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Pricing = () => (
  <section id="pricing" className="py-24 px-6">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-16 text-center">Transparent engagement</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="p-8 bg-neutral-900 rounded-2xl border border-white/5">
          <h3 className="text-xl font-bold mb-2">Starter</h3>
          <div className="text-2xl font-bold mb-4">від €750</div>
          <ul className="text-sm text-neutral-400 space-y-3 mb-8">
            <li>• 1 KPI дашборд</li>
            <li>• Базова модель даних</li>
            <li>• Передача та Навчання</li>
          </ul>
        </div>
        <div className="p-8 bg-blue-900/20 rounded-2xl border border-blue-500/30 relative">
          <div className="absolute -top-3 left-6 px-3 py-1 bg-blue-600 text-[10px] font-bold uppercase rounded-full">Most Popular</div>
          <h3 className="text-xl font-bold mb-2">Growth</h3>
          <div className="text-2xl font-bold mb-4">від €2,400</div>
          <ul className="text-sm text-neutral-400 space-y-3 mb-8">
            <li>• 2-3 дашборди</li>
            <li>• Просунуте моделювання</li>
            <li>• Налаштування автооновлення</li>
          </ul>
        </div>
        <div className="p-8 bg-neutral-900 rounded-2xl border border-white/5">
          <h3 className="text-xl font-bold mb-2">Custom</h3>
          <div className="text-2xl font-bold mb-4">Scoped</div>
          <ul className="text-sm text-neutral-400 space-y-3 mb-8">
            <li>• Мульти-джерельна інтеграція</li>
            <li>• Повна автоматизація</li>
            <li>• Постійна підтримка</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      <Navbar />
      <Hero />
      
      {/* Tool Bar */}
      <div className="py-10 border-y border-white/5 bg-neutral-900/20 text-center">
         <p className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-4">Tools we work with</p>
         <div className="flex flex-wrap justify-center gap-8 text-neutral-400 font-medium">
            <span>Power BI</span><span>Excel</span><span>Google Sheets</span><span>SQL</span><span>BigQuery</span><span>Python</span>
         </div>
      </div>

      <Problem />

      {/* SERVICES */}
      <section id="services" className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {SERVICES.map((s) => (
            <div key={s.id} className="p-8 bg-neutral-900 border border-white/5 rounded-2xl">
              <div className="mb-4">{s.icon}</div>
              <h3 className="font-bold mb-2">{s.title}</h3>
              <p className="text-sm text-neutral-400">{s.shortDesc}</p>
            </div>
          ))}
        </div>
      </section>

      <Process />

      {/* EXAMPLES */}
      <section id="examples" className="py-24 px-6 bg-neutral-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-16 text-center">Рішення, готові до впровадження</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <div className="aspect-video bg-neutral-800 rounded-xl border border-white/10 relative overflow-hidden group">
                 <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                 <div className="absolute top-1/4 right-1/4 px-2 py-1 bg-blue-600 text-[10px] rounded shadow-lg">Drop-off detected</div>
              </div>
              <p className="font-bold">Де "протікає" ваша воронка</p>
              <p className="text-sm text-neutral-500">Виявлення втрат клієнтів за кроками та каналами для оптимізації витрат.</p>
            </div>
            <div className="space-y-4">
              <div className="aspect-video bg-neutral-800 rounded-xl border border-white/10 relative overflow-hidden">
                 <div className="absolute bottom-1/4 left-1/3 px-2 py-1 bg-purple-600 text-[10px] rounded shadow-lg">Top revenue segment</div>
              </div>
              <p className="font-bold">Драйвери доходу</p>
              <p className="text-sm text-neutral-500">RFM та когортний аналіз, щоб побачити, які сегменти насправді приносять ріст.</p>
            </div>
          </div>
        </div>
      </section>

      <Pricing />

      {/* FINAL CTA */}
      <section className="py-24 px-6 bg-blue-600">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Готові довіряти своїм цифрам?</h2>
          <p className="text-blue-100 text-lg mb-10">
            Забронюйте безкоштовний 30-хвилинний KPI-огляд — ми складемо карту того, що потрібно відстежувати, та найшвидший шлях до надійного дашборду.
          </p>
          <a href="https://calendly.com/calyxra-team/30min" target="_blank" className="px-10 py-5 bg-white text-blue-600 font-bold rounded-xl hover:shadow-2xl transition-all inline-block">
            Book my free review call
          </a>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-white/5 text-center text-neutral-600 text-sm">
        <p>&copy; {new Date().getFullYear()} Calyxra. Built for founders by founders.</p>
      </footer>
    </main>
  );
}