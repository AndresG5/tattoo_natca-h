import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { gallery, type GalleryItem } from '../data/gallery'
import { styles, type StyleKey } from '../data/styles'
import ImagePlaceholder from './ImagePlaceholder'
import GalleryModal from './GalleryModal'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

type FilterKey = 'todos' | StyleKey

export default function Gallery() {
  const [filter, setFilter] = useState<FilterKey>('todos')
  const [active, setActive] = useState<GalleryItem | null>(null)

  const filtered = useMemo(
    () => (filter === 'todos' ? gallery : gallery.filter((g) => g.style === filter)),
    [filter],
  )

  const filters: { key: FilterKey; label: string }[] = [
    { key: 'todos', label: 'Todos' },
    ...styles.map((s) => ({ key: s.key, label: s.name })),
  ]

  return (
    <motion.section
      id="galeria"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      variants={fadeUp}
      className="mx-auto max-w-6xl px-6 py-16 sm:py-24"
    >
      <div className="mb-8 text-center">
        <span className="font-body text-xs font-semibold uppercase tracking-[0.25em] text-cash-pink">
          Portafolio
        </span>
        <h2 className="mt-3 font-display text-2xl text-chrome sm:text-4xl">Nuestro trabajo</h2>
        <p className="mx-auto mt-3 max-w-md font-body text-sm text-bone/60">
          Galería en construcción — estas son las categorías que trabajamos. Las fotos reales se
          irán agregando aquí.
        </p>
      </div>

      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {filters.map((f) => (
          <button
            key={f.key}
            type="button"
            onClick={() => setFilter(f.key)}
            className={`rounded-full border px-4 py-2 font-body text-xs font-semibold transition ${
              filter === f.key
                ? 'border-cash-pink bg-cash-pink text-ink'
                : 'border-gold/20 text-bone/60 hover:border-gold/40 hover:text-gold-light'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="columns-2 gap-4 sm:columns-3 [&>*]:mb-4">
        {filtered.map((item, i) => {
          const styleName = styles.find((s) => s.key === item.style)?.name ?? item.style
          return (
            <motion.button
              key={item.id}
              type="button"
              onClick={() => setActive(item)}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 6) * 0.06, duration: 0.5 }}
              className={`group relative block w-full overflow-hidden rounded-2xl border border-gold/15 text-left transition hover:border-cash-pink/50 ${
                i % 5 === 0 ? 'aspect-[3/4]' : 'aspect-square'
              }`}
            >
              <ImagePlaceholder
                label={item.title}
                exampleSrc={item.exampleImage}
                className="h-full w-full transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-ink/90 via-ink/10 to-transparent p-3 opacity-0 transition group-hover:opacity-100">
                <span className="font-body text-[10px] font-semibold uppercase tracking-wider text-cash-pink">
                  {styleName}
                </span>
                <span className="font-display text-xs text-bone">{item.title}</span>
              </div>
            </motion.button>
          )
        })}
      </div>

      <GalleryModal item={active} onClose={() => setActive(null)} />
    </motion.section>
  )
}
