import { motion } from 'framer-motion'
import { MapPin, Clock, Phone, Navigation } from 'lucide-react'
import { SITE, waLink } from '../data/site'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

export default function Location() {
  return (
    <motion.section
      id="ubicacion"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
      className="mx-auto max-w-4xl px-6 py-16 sm:py-24"
    >
      <div className="mb-10 text-center">
        <span className="font-body text-xs font-semibold uppercase tracking-[0.25em] text-cash-pink">
          Visítanos
        </span>
        <h2 className="mt-3 font-display text-2xl text-chrome sm:text-4xl">Ubicación</h2>
      </div>

      <div className="grid gap-4 overflow-hidden rounded-3xl border border-gold/25 glow-ring sm:grid-cols-5">
        <iframe
          title="Ubicación Cash Tattoo"
          src={`https://www.google.com/maps?q=${SITE.mapsQuery}&output=embed`}
          className="h-64 w-full sm:col-span-3 sm:h-full"
          style={{ border: 0, filter: 'grayscale(0.3) invert(0.92) contrast(0.9)' }}
          loading="lazy"
        />
        <div className="flex flex-col justify-center gap-5 bg-charcoal p-6 sm:col-span-2">
          <div className="flex items-start gap-3">
            <MapPin size={18} className="mt-0.5 shrink-0 text-cash-pink" />
            <p className="font-body text-sm text-bone/80">{SITE.address}</p>
          </div>
          <div className="flex items-start gap-3">
            <Clock size={18} className="mt-0.5 shrink-0 text-cash-pink" />
            <p className="font-body text-sm text-bone/80">
              {SITE.hours ?? 'Horarios por confirmar — escríbenos para agendar tu horario.'}
            </p>
          </div>
          <div className="flex items-start gap-3">
            <Phone size={18} className="mt-0.5 shrink-0 text-cash-pink" />
            <p className="font-body text-sm text-bone/80">{SITE.whatsappDisplay}</p>
          </div>
          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${SITE.mapsQuery}`}
            target="_blank"
            rel="noreferrer"
            className="mt-1 flex items-center justify-center gap-2 rounded-full border border-gold/30 py-3 font-body text-xs font-semibold text-gold-light transition hover:bg-gold/10"
          >
            <Navigation size={14} />
            Cómo llegar
          </a>
          <a
            href={waLink()}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 rounded-full bg-cash-pink py-3 font-body text-xs font-bold text-ink"
          >
            Escríbenos por WhatsApp
          </a>
        </div>
      </div>
    </motion.section>
  )
}
