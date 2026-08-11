import { motion } from 'framer-motion'
import { Facebook, Instagram, MessageCircle } from 'lucide-react'
import { SITE, waLink } from '../data/site'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

export default function Socials() {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
      className="mx-auto max-w-md px-6 py-14 text-center"
    >
      <h2 className="font-display text-xl text-chrome sm:text-2xl">Síguenos</h2>
      <p className="mt-2 font-body text-sm text-bone/55">Más trabajos y novedades en nuestras redes.</p>

      <div className="mt-6 flex items-center justify-center gap-3">
        <a
          href={SITE.facebook}
          target="_blank"
          rel="noreferrer"
          aria-label="Facebook de Cash Tattoo"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/25 text-bone/70 transition hover:border-cash-pink/50 hover:text-gold-light"
        >
          <Facebook size={18} />
        </a>

        {SITE.instagram ? (
          <a
            href={SITE.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram de Cash Tattoo"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/25 text-bone/70 transition hover:border-cash-pink/50 hover:text-gold-light"
          >
            <Instagram size={18} />
          </a>
        ) : (
          <span
            title="Instagram aún no configurado"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-dashed border-gold/15 text-bone/25"
          >
            <Instagram size={18} />
          </span>
        )}

        <a
          href={waLink()}
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp de Cash Tattoo"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/25 text-bone/70 transition hover:border-cash-pink/50 hover:text-gold-light"
        >
          <MessageCircle size={18} />
        </a>
      </div>
    </motion.section>
  )
}
