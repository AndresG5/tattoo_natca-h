import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import type { GalleryItem } from '../data/gallery'
import { styles } from '../data/styles'
import ImagePlaceholder from './ImagePlaceholder'

export default function GalleryModal({
  item,
  onClose,
}: {
  item: GalleryItem | null
  onClose: () => void
}) {
  const styleName = item ? styles.find((s) => s.key === item.style)?.name ?? item.style : ''

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/90 p-4 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label={`${item.title}, ${styleName}`}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-gold/25 bg-charcoal"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Cerrar"
              className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-ink/70 text-bone backdrop-blur"
            >
              <X size={16} />
            </button>

            <ImagePlaceholder
              label={item.title}
              exampleSrc={item.exampleImage}
              className="aspect-square w-full"
            />

            <div className="p-6 text-left">
              <span className="font-body text-[11px] font-semibold uppercase tracking-[0.2em] text-cash-pink">
                {styleName}
              </span>
              <h3 className="mt-1 font-display text-lg text-gold-light">{item.title}</h3>
              <p className="mt-2 font-body text-sm text-bone/60">Artista: {item.artist}</p>
              {item.description && (
                <p className="mt-3 font-body text-sm leading-relaxed text-bone/70">
                  {item.description}
                </p>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
