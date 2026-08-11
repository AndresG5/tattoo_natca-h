import { Camera } from 'lucide-react'

/**
 * Marcador visual claramente identificado para espacios donde debe ir una
 * fotografía real (hero, estudio, artistas, galería). Nunca se usan fotos
 * genéricas/stock sin relación con el estudio — mientras no exista la foto
 * real, se muestra este placeholder.
 */
export default function ImagePlaceholder({
  label,
  className = '',
  compact = false,
}: {
  label: string
  className?: string
  compact?: boolean
}) {
  return (
    <div
      className={`relative flex flex-col items-center justify-center gap-2 overflow-hidden bg-gradient-to-br from-charcoal via-ink to-charcoal text-center grain ${className}`}
      role="img"
      aria-label={`Espacio reservado para fotografía: ${label}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(232,182,79,0.10),transparent_60%)]" />
      <Camera size={compact ? 18 : 26} className="relative z-10 text-gold/50" strokeWidth={1.5} />
      {!compact && (
        <span className="relative z-10 max-w-[80%] font-body text-[11px] leading-snug text-bone/40">
          {label}
        </span>
      )}
    </div>
  )
}
