import { Mail, Phone, MapPin } from 'lucide-react'
import { SITE, waLink } from '../data/site'

const LINKS = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#artistas', label: 'Artistas' },
  { href: '#galeria', label: 'Tatuajes' },
  { href: '#estilos', label: 'Estilos' },
  { href: '#proceso', label: 'Proceso' },
  { href: '#ubicacion', label: 'Ubicación' },
]

export default function Footer() {
  return (
    <footer id="contacto" className="border-t border-gold/15 bg-charcoal">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-3">
        <div>
          <span className="font-display text-base text-chrome">CA$H TATTOO</span>
          <p className="mt-2 font-script text-lg text-cash-pink">Arte que deja marca.</p>
        </div>

        <div>
          <h3 className="font-body text-xs font-semibold uppercase tracking-widest text-bone/40">
            Navegación
          </h3>
          <ul className="mt-3 grid grid-cols-2 gap-2">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="font-body text-xs text-bone/60 transition hover:text-gold-light">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-body text-xs font-semibold uppercase tracking-widest text-bone/40">
            Contacto
          </h3>
          <ul className="mt-3 space-y-2.5">
            <li>
              <a href={waLink()} target="_blank" rel="noreferrer" className="flex items-center gap-2 font-body text-xs text-bone/60 transition hover:text-gold-light">
                <Phone size={13} className="text-cash-pink" /> {SITE.whatsappDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${SITE.email}`} className="flex items-center gap-2 font-body text-xs text-bone/60 transition hover:text-gold-light">
                <Mail size={13} className="text-cash-pink" /> {SITE.email}
              </a>
            </li>
            <li className="flex items-start gap-2 font-body text-xs text-bone/60">
              <MapPin size={13} className="mt-0.5 shrink-0 text-cash-pink" /> {SITE.address}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gold/10 px-6 py-5 text-center">
        <p className="font-body text-[11px] text-bone/35">
          © {new Date().getFullYear()} CA$H Tattoo. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
