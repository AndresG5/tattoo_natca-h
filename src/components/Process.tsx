import { motion } from 'framer-motion'

const STEPS = [
  { n: '01', title: 'Cuéntanos tu idea', desc: 'Escríbenos por WhatsApp y platícanos qué tienes en mente.' },
  { n: '02', title: 'Diseñamos tu concepto', desc: 'Creamos una propuesta personalizada basada en tu idea.' },
  { n: '03', title: 'Agendamos tu cita', desc: 'Elegimos fecha y hora que te acomoden en el estudio.' },
  { n: '04', title: 'Creamos tu tatuaje', desc: 'Le damos vida a tu diseño con todo el cuidado del proceso.' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

export default function Process() {
  return (
    <motion.section
      id="proceso"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
      className="mx-auto max-w-4xl px-6 py-16 sm:py-24"
    >
      <div className="mb-12 text-center">
        <span className="font-body text-xs font-semibold uppercase tracking-[0.25em] text-cash-pink">
          Cómo funciona
        </span>
        <h2 className="mt-3 font-display text-2xl text-chrome sm:text-4xl">Tu proceso, paso a paso</h2>
      </div>

      <div className="relative grid gap-8 sm:grid-cols-4 sm:gap-4">
        <div className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent sm:block" />
        {STEPS.map((s, i) => (
          <motion.div
            key={s.n}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="relative flex flex-col items-center text-center sm:items-start sm:text-left"
          >
            <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-ink font-display text-sm text-gold-light">
              {s.n}
            </span>
            <h3 className="mt-4 font-display text-sm text-bone sm:text-base">{s.title}</h3>
            <p className="mt-2 font-body text-xs leading-relaxed text-bone/55 sm:text-sm">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
