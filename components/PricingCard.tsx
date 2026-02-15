export default function PricingCard({
    name,
    monthlyPrice,
    setupPrice,
    discountedSetupPrice,
    bestFor,
    features,
    goLive,
    isPopular = false
}: {
    name: string;
    monthlyPrice: string;
    setupPrice: string;
    discountedSetupPrice: string;
    bestFor: string;
    features: string[];
    goLive: string;
    isPopular?: boolean;
}) {
    return (
        <div className={`relative flex flex-col p-8 ${isPopular
            ? 'bg-stone-900 text-white ring-2 ring-emerald-500 shadow-2xl shadow-emerald-500/10'
            : 'bg-white text-stone-900 border border-stone-200'
            } shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl`}>
            {isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-emerald-600 text-white px-4 py-1 text-[10px] font-bold uppercase tracking-widest shadow-md">
                    Most Popular
                </div>
            )}

            <div className="mb-6">
                <h3 className={`text-sm font-bold tracking-widest uppercase mb-2 ${isPopular ? 'text-emerald-400' : 'text-stone-500'}`}>{name}</h3>
                <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-serif font-medium">{monthlyPrice}</span>
                    <span className="text-xs opacity-60">/month</span>
                </div>
                <div className="mt-2 text-xs font-mono">
                    <span className="opacity-50 line-through">{setupPrice}</span>
                    <span className={`ml-2 font-bold ${isPopular ? 'text-emerald-400' : 'text-emerald-700'}`}>{discountedSetupPrice}</span>
                    <span className="opacity-70 ml-1">setup (Founding Partner)</span>
                </div>
            </div>

            <p className={`text-sm mb-6 pb-6 border-b ${isPopular ? 'border-white/20 text-white/70' : 'border-stone-200 text-stone-500'}`}>
                <span className="font-semibold">Best for:</span> {bestFor}
            </p>

            <ul className="space-y-4 mb-8 flex-grow">
                {features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm opacity-90">
                        <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${isPopular ? 'bg-emerald-400' : 'bg-emerald-700'}`}></span>
                        <span>{feat}</span>
                    </li>
                ))}
            </ul>

            <div className={`text-xs font-medium mb-6 ${isPopular ? 'text-emerald-400' : 'text-emerald-700'}`}>
                Typical go-live: {goLive}
            </div>

            <a
                href="https://cal.com/calyxra/15min"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-4 text-xs font-bold tracking-widest uppercase text-center transition-all duration-300 ${isPopular
                    ? 'bg-emerald-600 text-white hover:bg-emerald-500 shadow-lg shadow-emerald-600/30'
                    : 'bg-stone-900 text-white hover:bg-stone-800'
                    }`}
            >
                Get Started
            </a>
        </div>
    );
}
