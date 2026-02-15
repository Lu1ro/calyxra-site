import { ShieldCheck } from 'lucide-react';

export function Testimonials() {
    const testimonials = [
        {
            quote: "Finally the numbers match Shopify payouts, Meta spend, and GA4. No more arguing in Slack.",
            role: "COO, 8-Figure Shopify Brand (Anonymous)"
        },
        {
            quote: "We replaced 6 spreadsheets and stopped reporting incorrect MER.",
            role: "Founder, Performance Agency (Anonymous)"
        },
        {
            quote: "The Truth Contract is the first time I've seen profit defined correctly.",
            role: "Head of Finance, DTC Operator (Anonymous)"
        }
    ];

    return (
        <div className="max-w-7xl mx-auto px-6 py-24">
            <h2 className="text-2xl font-serif text-stone-900 text-center mb-12">
                What Agencies Say After Reconciling Profit
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {testimonials.map((testimonial, i) => (
                    <div key={i} className="bg-white border border-stone-200 rounded-lg p-6 shadow-sm">
                        <p className="text-stone-600 text-sm leading-relaxed mb-4 italic">
                            "{testimonial.quote}"
                        </p>
                        <div className="flex items-center justify-between">
                            <p className="text-xs font-bold text-stone-900">{testimonial.role}</p>
                            <div className="flex items-center gap-1 text-emerald-700 text-[10px] font-bold">
                                <ShieldCheck className="w-3 h-3" />
                                <span>VERIFIED</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
