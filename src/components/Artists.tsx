import { motion } from 'framer-motion'
import { Instagram, MessageCircle } from 'lucide-react'
import { artists } from '../data/artists'
import { waLink } from '../data/site'
import ImagePlaceholder from './ImagePlaceholder'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

export default function Artists() {
  return (
    <motion.section
      id="artistas"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
      className="mx-auto max-w-5xl px-6 py-16 sm:py-24"
    >
      <div className="mb-10 text-center">
        <span className="font-body text-xs font-semibold uppercase tracking-[0.25em] text-cash-pink">
          Nuestro equipo
        </span>
        <h2 className="mt-3 font-display text-2xl text-chrome sm:text-4xl">Artistas</h2>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {artists.map((a) => (
          <div
            key={a.id}
            className="overflow-hidden rounded-3xl border border-gold/20 bg-charcoal/60"
          >
            <ImagePlaceholder label={`Foto de ${a.name} — /public/images/artists/`} className="aspect-square" />
            <div className="p-5">
              <h3 className="font-display text-base text-gold-light">{a.name}</h3>
              <p className="mt-1 font-body text-xs uppercase tracking-wide text-cash-pink">
                {a.specialty}
              </p>
              <p className="mt-3 font-body text-sm leading-relaxed text-bone/65">{a.bio}</p>
              <div className="mt-4 flex items-center gap-2">
                <a
                  href={waLink(`Hola, quiero ver más trabajos de ${a.name}`)}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 rounded-full border border-gold/25 px-3.5 py-2 font-body text-[11px] font-semibold text-bone/70 transition hover:border-cash-pink/50 hover:text-gold-light"
                >
                  <MessageCircle size={13} /> Ver trabajos
                </a>
                {a.instagram && (
                  <a
                    href={a.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-gold/25 text-bone/70 transition hover:border-cash-pink/50 hover:text-gold-light"
                    aria-label={`Instagram de ${a.name}`}
                  >
                    <Instagram size={13} />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-6 text-center font-body text-[11px] text-bone/35">
        ¿Más artistas en el equipo? Se agregan aquí conforme se confirmen sus datos.
      </p>
    </motion.section>
  )
}
