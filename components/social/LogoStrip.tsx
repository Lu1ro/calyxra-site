export function LogoStrip() {
    const clients = [
        "Agency Partner A",
        "Agency Partner B",
        "Performance Studio",
        "Growth Ops Team",
        "Shopify Analytics Group"
    ];

    return (
        <div className="border-y border-stone-200 bg-white py-12">
            <div className="max-w-7xl mx-auto px-6">
                <p className="text-center text-xs font-bold uppercase tracking-widest text-stone-400 mb-8">
                    Trusted by Shopify Agencies
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                    {clients.map((client, i) => (
                        <div key={i} className="px-6 py-3 bg-stone-50 border border-stone-200 rounded text-stone-600 text-xs font-medium">
                            {client}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
