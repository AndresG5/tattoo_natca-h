import { motion } from 'framer-motion'
import { MessageCircle, ImageIcon, Sparkles } from 'lucide-react'
import { waLink } from '../data/site'
import ImagePlaceholder from './ImagePlaceholder'

function DollarField() {
  const dots = [
    { top: '14%', left: '6%', size: 24, delay: 0 },
    { top: '24%', left: '86%', size: 18, delay: 0.6 },
    { top: '72%', left: '90%', size: 28, delay: 1.1 },
    { top: '80%', left: '8%', size: 20, delay: 1.6 },
  ]
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {dots.map((d, i) => (
        <span
          key={i}
          className="absolute font-display text-cash-pink/20 animate-float"
          style={{ top: d.top, left: d.left, fontSize: d.size, animationDelay: `${d.delay}s` }}
        >
          $
        </span>
      ))}
    </div>
  )
}

export default function Hero() {
  return (
    <header id="inicio" className="relative min-h-dvh overflow-hidden pt-16">
      {/* Fotografía grande de fondo — reemplazar por foto real del estudio/tatuaje en /public/images/hero/ */}
      <div className="absolute inset-0">
        <ImagePlaceholder
          label="Fotografía grande del hero (estudio, sesión o pieza destacada) — colócala en /public/images/hero/"
          className="h-full w-full"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/70 to-ink" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(91,31,143,0.35),transparent_55%)]" />
      </div>

      <DollarField />

      <div className="relative z-10 flex min-h-dvh flex-col items-center justify-center px-6 pb-20 pt-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          <span className="mb-6 flex items-center gap-2 rounded-full border border-gold/40 bg-charcoal/70 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-light backdrop-blur">
            <Sparkles size={13} className="text-cash-pink" />
            Estudio de tatuajes y perforaciones
          </span>

          <h1 className="font-display leading-none">
            <span className="block animate-flicker text-chrome text-[15vw] sm:text-7xl lg:text-8xl">
              ARTE QUE
            </span>
            <span className="-mt-1 block font-script text-cash-pink text-[13vw] text-neon-pink sm:text-6xl lg:text-7xl -rotate-1">
              deja marca
            </span>
          </h1>

          <p className="mt-6 max-w-xs font-body text-sm text-bone/70 sm:max-w-md sm:text-base">
            Tatuajes y perforaciones creados para contar tu historia. Diseño personalizado,
            estudio en Guadalupe, Nuevo León.
          </p>

          <div className="mt-9 flex w-full max-w-xs flex-col gap-3 sm:max-w-md sm:flex-row">
            <a
              href={waLink()}
              target="_blank"
              rel="noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-full bg-cash-pink px-6 py-3.5 font-body text-sm font-bold text-ink shadow-[0_8px_30px_rgba(255,47,140,0.35)] transition hover:brightness-110 active:scale-95"
            >
              <MessageCircle size={18} />
              Agenda tu cita
            </a>
            <a
              href="#galeria"
              className="flex flex-1 items-center justify-center gap-2 rounded-full border border-gold/40 bg-ink/40 px-6 py-3.5 font-body text-sm font-semibold text-gold-light backdrop-blur transition hover:bg-ink/60 active:scale-95"
            >
              <ImageIcon size={18} />
              Ver trabajos
            </a>
          </div>
        </motion.div>
      </div>
    </header>
  )
}
