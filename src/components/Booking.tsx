import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { waLink, SITE } from '../data/site'

export default function Booking() {
  return (
    <motion.section
      id="agenda"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="relative overflow-hidden px-6 py-20 sm:py-28"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,47,140,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-lg text-center">
        <h2 className="font-display text-3xl leading-tight text-chrome sm:text-5xl">
          ¿LISTO PARA
          <br />
          DEJAR TU MARCA?
        </h2>
        <p className="mx-auto mt-5 max-w-sm font-body text-sm text-bone/65 sm:text-base">
          Cuéntanos tu idea y comencemos a crearla.
        </p>
        <a
          href={waLink()}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-cash-pink px-8 py-4 font-body text-sm font-bold text-ink shadow-[0_10px_40px_rgba(255,47,140,0.4)] transition hover:brightness-110 active:scale-95"
        >
          <MessageCircle size={18} />
          Agendar por WhatsApp
        </a>
        <p className="mt-4 font-body text-xs text-bone/40">{SITE.whatsappDisplay}</p>
      </div>
    </motion.section>
  )
}
