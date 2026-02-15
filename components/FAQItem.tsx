'use client';

import { useState } from 'react';

export default function FAQItem({ question, answer }: { question: string; answer: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-stone-200 last:border-b-0">
            <button
                className="w-full py-6 flex justify-between items-center text-left group"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="font-medium text-stone-900 group-hover:text-emerald-700 transition-colors pr-4">{question}</span>
                <svg
                    className={`w-5 h-5 text-stone-400 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}>
                <p className="text-stone-500 leading-relaxed">{answer}</p>
            </div>
        </div>
    );
}
