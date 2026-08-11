import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { waLink } from '../data/site'

export default function WhatsAppButton() {
  return (
    <motion.a
      href={waLink()}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Agenda tu cita por WhatsApp"
      title="Agenda tu cita"
      className="group fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-cash-pink pl-3.5 pr-3.5 py-3.5 text-ink shadow-[0_8px_30px_rgba(255,47,140,0.45)] sm:pr-5"
    >
      <MessageCircle size={22} />
      <span className="hidden font-body text-xs font-bold sm:inline">Agenda tu cita</span>
    </motion.a>
  )
}
