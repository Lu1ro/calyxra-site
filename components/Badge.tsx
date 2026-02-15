export default function Badge({ text, variant = 'default' }: { text: string; variant?: 'default' | 'highlight' }) {
    return (
        <span className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase ${variant === 'highlight'
            ? 'bg-emerald-100 border border-emerald-300 text-emerald-700'
            : 'bg-stone-200/50 border border-stone-300 text-stone-600'
            }`}>
            {text}
        </span>
    );
}
