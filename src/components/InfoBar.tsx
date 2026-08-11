const ITEMS = [
  'Tatuajes personalizados',
  'Fine Line',
  'Blackwork',
  'Realismo',
  'Perforaciones',
  'Diseños a medida',
]

export default function InfoBar() {
  const row = [...ITEMS, ...ITEMS]
  return (
    <div className="relative overflow-hidden border-y border-gold/15 bg-charcoal py-3">
      <div className="flex w-max animate-[shimmer_32s_linear_infinite] gap-10 whitespace-nowrap">
        {row.map((t, i) => (
          <span key={i} className="font-body text-xs font-medium uppercase tracking-wider text-bone/60 sm:text-sm">
            {t}
            <span className="mx-10 text-cash-pink">✸</span>
          </span>
        ))}
      </div>
    </div>
  )
}
