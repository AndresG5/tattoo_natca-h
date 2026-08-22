import { useState } from 'react'
import { Camera } from 'lucide-react'

/**
 * Espacio para fotografía real (hero, estudio, artistas, galería).
 *
 * Si se pasa `exampleSrc`, muestra una foto de ejemplo temporal (stock, de
 * uso libre) con una etiqueta "EJEMPLO" para que quede claro que NO es
 * trabajo real del estudio — nunca se presenta como si lo fuera.
 *
 * Sin `exampleSrc`, muestra el marcador de cámara de siempre.
 */
export default function ImagePlaceholder({
  label,
  className = '',
  compact = false,
  exampleSrc,
}: {
  label: string
  className?: string
  compact?: boolean
  exampleSrc?: string
}) {
  const [failed, setFailed] = useState(false)

  if (exampleSrc && !failed) {
    return (
      <div className={`relative overflow-hidden bg-charcoal ${className}`}>
        <img
          src={exampleSrc}
          alt={`Ejemplo temporal — ${label}`}
          loading="lazy"
          className="h-full w-full object-cover"
          onError={() => setFailed(true)}
        />
        <span className="absolute right-2 top-2 rounded-full border border-gold/40 bg-ink/70 px-2 py-0.5 font-body text-[9px] font-semibold uppercase tracking-widest text-gold-light backdrop-blur">
          Ejemplo
        </span>
      </div>
    )
  }

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
