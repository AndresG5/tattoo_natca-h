import { motion } from 'framer-motion'
import { styles } from '../data/styles'
import ImagePlaceholder from './ImagePlaceholder'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

export default function Styles() {
  return (
    <motion.section
      id="estilos"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
      className="mx-auto max-w-6xl px-6 py-16 sm:py-24"
    >
      <div className="mb-10 text-center">
        <span className="font-body text-xs font-semibold uppercase tracking-[0.25em] text-cash-pink">
          Encuentra tu estilo
        </span>
        <h2 className="mt-3 font-display text-2xl text-chrome sm:text-4xl">Estilos de tatuaje</h2>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {styles.map((s, i) => (
          <motion.a
            key={s.key}
            href="#galeria"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.5 }}
            className="group overflow-hidden rounded-2xl border border-gold/15 bg-charcoal/50 transition hover:border-cash-pink/50"
          >
            <ImagePlaceholder label={s.name} className="aspect-[4/3]" compact />
            <div className="p-3.5">
              <h3 className="font-display text-sm text-gold-light">{s.name}</h3>
              <p className="mt-1 font-body text-[11px] leading-snug text-bone/55">
                {s.description}
              </p>
            </div>
          </motion.a>
        ))}
      </div>
    </motion.section>
  )
}
