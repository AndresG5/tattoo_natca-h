import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, MessageCircle } from 'lucide-react'
import { waLink } from '../data/site'

const LINKS = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#artistas', label: 'Artistas' },
  { href: '#galeria', label: 'Tatuajes' },
  { href: '#estilos', label: 'Estilos' },
  { href: '#proceso', label: 'Proceso' },
  { href: '#ubicacion', label: 'Ubicación' },
  { href: '#contacto', label: 'Contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'border-b border-gold/15 bg-ink/85 py-2.5 backdrop-blur-xl'
            : 'border-b border-transparent bg-transparent py-4'
        }`}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 sm:px-8">
          <a href="#inicio" className="font-display text-sm tracking-wide text-chrome sm:text-base">
            CA$H TATTOO
          </a>

          <ul className="hidden items-center gap-7 lg:flex">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="font-body text-[13px] font-medium text-bone/70 transition hover:text-gold-light"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href={waLink()}
              target="_blank"
              rel="noreferrer"
              className="hidden items-center gap-2 rounded-full bg-cash-pink px-5 py-2.5 font-body text-xs font-bold text-ink transition hover:brightness-110 active:scale-95 sm:flex"
            >
              <MessageCircle size={15} />
              Agenda tu cita
            </a>
            <button
              type="button"
              aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/25 text-gold-light lg:hidden"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-ink/98 backdrop-blur-xl lg:hidden"
          >
            <motion.ul
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.05, delayChildren: 0.15 } } }}
              className="flex h-full flex-col items-center justify-center gap-7 px-6"
            >
              {LINKS.map((l) => (
                <motion.li
                  key={l.href}
                  variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
                >
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-2xl text-bone/90 transition hover:text-cash-pink"
                  >
                    {l.label}
                  </a>
                </motion.li>
              ))}
              <motion.li
                variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
                className="mt-4"
              >
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 rounded-full bg-cash-pink px-7 py-3.5 font-body text-sm font-bold text-ink"
                >
                  <MessageCircle size={18} />
                  Agenda tu cita
                </a>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
