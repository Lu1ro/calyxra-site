export default function SectionHeading({ title, subtitle }: { title: string; subtitle: string }) {
    return (
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-stone-900 mb-4 px-4">{title}</h2>
            <div className="h-1 w-20 bg-emerald-700 mx-auto mb-4"></div>
            <p className="text-stone-500 max-w-2xl mx-auto text-lg leading-relaxed px-4">{subtitle}</p>
        </div>
    );
}
