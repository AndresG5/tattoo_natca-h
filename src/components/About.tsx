import { motion } from 'framer-motion'
import ImagePlaceholder from './ImagePlaceholder'

const STATS = [
  { value: '—', label: 'Clientes atendidos' },
  { value: '—', label: 'Diseños realizados' },
  { value: '—', label: 'Años de experiencia' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

export default function About() {
  return (
    <motion.section
      id="nosotros"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
      className="mx-auto max-w-5xl px-6 py-16 sm:py-24"
    >
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          <ImagePlaceholder
            label="Foto del estudio — colócala en /public/images/studio/"
            className="col-span-2 aspect-video rounded-2xl border border-gold/20"
          />
          <ImagePlaceholder
            label="Tatuador trabajando — /public/images/studio/"
            className="aspect-square rounded-2xl border border-gold/20"
            compact
          />
          <ImagePlaceholder
            label="Detalle del estudio — /public/images/studio/"
            className="aspect-square rounded-2xl border border-gold/20"
            compact
          />
        </div>

        <div>
          <span className="font-body text-xs font-semibold uppercase tracking-[0.25em] text-cash-pink">
            Nuestra historia
          </span>
          <h2 className="mt-3 font-display text-2xl text-chrome sm:text-4xl">Arte que deja marca</h2>
          <p className="mt-5 font-body text-sm leading-relaxed text-bone/70 sm:text-base">
            En Cash Tattoo creemos que un tatuaje no solamente se lleva en la piel. Representa
            una historia, una etapa, una persona o una idea. Trabajamos cada diseño de forma
            personalizada, cuidando el detalle desde la primera plática hasta el resultado final.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-4">
            {STATS.map((s) => (
              <div key={s.label} className="rounded-2xl border border-gold/15 bg-charcoal/60 px-3 py-4 text-center">
                <div className="font-display text-xl text-gold-light sm:text-2xl">{s.value}</div>
                <div className="mt-1 font-body text-[11px] leading-tight text-bone/50 sm:text-xs">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-3 font-body text-[11px] text-bone/35">
            Estadísticas pendientes de confirmar con el estudio.
          </p>
        </div>
      </div>
    </motion.section>
  )
}
