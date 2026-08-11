import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Send, Paperclip } from 'lucide-react'
import { SITE } from '../data/site'
import { styles } from '../data/styles'

interface FormState {
  name: string
  whatsapp: string
  email: string
  type: string
  style: string
  size: string
  zone: string
  description: string
  budget: string
}

const initialState: FormState = {
  name: '',
  whatsapp: '',
  email: '',
  type: '',
  style: '',
  size: '',
  zone: '',
  description: '',
  budget: '',
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

function fieldClass() {
  return 'w-full rounded-xl border border-gold/20 bg-ink/60 px-4 py-3 font-body text-sm text-bone placeholder:text-bone/30 outline-none transition focus:border-cash-pink focus:ring-1 focus:ring-cash-pink'
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState)
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})
  const [attachmentNote, setAttachmentNote] = useState('')

  const update = (key: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }))

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    setAttachmentNote(
      file
        ? `Adjuntará "${file.name}" directamente en WhatsApp.`
        : '',
    )
  }

  const validate = () => {
    const next: Partial<Record<keyof FormState, string>> = {}
    if (!form.name.trim()) next.name = 'Escribe tu nombre.'
    if (!form.whatsapp.trim()) next.whatsapp = 'Escribe tu número de WhatsApp.'
    if (!form.description.trim()) next.description = 'Cuéntanos brevemente tu idea.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    const lines = [
      `Hola CA$H Tattoo, soy ${form.name}. Me gustaría cotizar un tatuaje.`,
      form.type && `Tipo: ${form.type}`,
      form.style && `Estilo: ${form.style}`,
      form.size && `Tamaño aproximado: ${form.size}`,
      form.zone && `Zona del cuerpo: ${form.zone}`,
      form.budget && `Presupuesto aproximado: ${form.budget}`,
      `Idea: ${form.description}`,
      form.whatsapp && `Mi WhatsApp: ${form.whatsapp}`,
      form.email && `Mi correo: ${form.email}`,
    ].filter(Boolean)

    const message = encodeURIComponent(lines.join('\n'))
    window.open(`https://wa.me/${SITE.whatsappNumber}?text=${message}`, '_blank', 'noreferrer')
  }

  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={fadeUp}
      className="mx-auto max-w-2xl px-6 py-16 sm:py-24"
    >
      <div className="mb-10 text-center">
        <span className="font-body text-xs font-semibold uppercase tracking-[0.25em] text-cash-pink">
          Cotiza tu idea
        </span>
        <h2 className="mt-3 font-display text-2xl text-chrome sm:text-4xl">Cuéntanos tu proyecto</h2>
        <p className="mx-auto mt-3 max-w-md font-body text-sm text-bone/60">
          Llena el formulario y te armamos el mensaje listo para enviarlo por WhatsApp — no se
          guarda en ningún servidor.
        </p>
      </div>

      <form onSubmit={handleSubmit} noValidate className="grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label htmlFor="name" className="mb-1.5 block font-body text-xs font-medium text-bone/60">
            Nombre *
          </label>
          <input id="name" value={form.name} onChange={update('name')} className={fieldClass()} placeholder="Tu nombre" />
          {errors.name && <p className="mt-1 font-body text-xs text-cash-pink">{errors.name}</p>}
        </div>

        <div className="sm:col-span-1">
          <label htmlFor="whatsapp" className="mb-1.5 block font-body text-xs font-medium text-bone/60">
            WhatsApp *
          </label>
          <input id="whatsapp" value={form.whatsapp} onChange={update('whatsapp')} className={fieldClass()} placeholder="10 dígitos" />
          {errors.whatsapp && <p className="mt-1 font-body text-xs text-cash-pink">{errors.whatsapp}</p>}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="email" className="mb-1.5 block font-body text-xs font-medium text-bone/60">
            Correo (opcional)
          </label>
          <input id="email" type="email" value={form.email} onChange={update('email')} className={fieldClass()} placeholder="tucorreo@ejemplo.com" />
        </div>

        <div className="sm:col-span-1">
          <label htmlFor="type" className="mb-1.5 block font-body text-xs font-medium text-bone/60">
            Tipo
          </label>
          <input id="type" value={form.type} onChange={update('type')} className={fieldClass()} placeholder="Tatuaje / Perforación" />
        </div>

        <div className="sm:col-span-1">
          <label htmlFor="style" className="mb-1.5 block font-body text-xs font-medium text-bone/60">
            Estilo
          </label>
          <select id="style" value={form.style} onChange={update('style')} className={fieldClass()}>
            <option value="">Selecciona un estilo</option>
            {styles.map((s) => (
              <option key={s.key} value={s.name}>
                {s.name}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-1">
          <label htmlFor="size" className="mb-1.5 block font-body text-xs font-medium text-bone/60">
            Tamaño aproximado
          </label>
          <input id="size" value={form.size} onChange={update('size')} className={fieldClass()} placeholder='Ej. 10x10 cm' />
        </div>

        <div className="sm:col-span-1">
          <label htmlFor="zone" className="mb-1.5 block font-body text-xs font-medium text-bone/60">
            Zona del cuerpo
          </label>
          <input id="zone" value={form.zone} onChange={update('zone')} className={fieldClass()} placeholder="Ej. antebrazo" />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="description" className="mb-1.5 block font-body text-xs font-medium text-bone/60">
            Describe tu idea *
          </label>
          <textarea
            id="description"
            value={form.description}
            onChange={update('description')}
            rows={4}
            className={fieldClass()}
            placeholder="Cuéntanos qué tienes en mente…"
          />
          {errors.description && <p className="mt-1 font-body text-xs text-cash-pink">{errors.description}</p>}
        </div>

        <div className="sm:col-span-1">
          <label htmlFor="budget" className="mb-1.5 block font-body text-xs font-medium text-bone/60">
            Presupuesto aproximado
          </label>
          <input id="budget" value={form.budget} onChange={update('budget')} className={fieldClass()} placeholder="Opcional" />
        </div>

        <div className="sm:col-span-1">
          <label htmlFor="reference" className="mb-1.5 block font-body text-xs font-medium text-bone/60">
            Adjuntar referencia
          </label>
          <label
            htmlFor="reference"
            className="flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-dashed border-gold/25 bg-ink/40 px-4 py-3 font-body text-xs text-bone/50 transition hover:border-gold/50"
          >
            <Paperclip size={14} />
            {attachmentNote || 'Elegir imagen'}
          </label>
          <input id="reference" type="file" accept="image/*" onChange={handleFile} className="hidden" />
          <p className="mt-1 font-body text-[11px] text-bone/35">
            El archivo no se sube aquí — te recordamos adjuntarlo directamente en WhatsApp.
          </p>
        </div>

        <button
          type="submit"
          className="mt-2 flex items-center justify-center gap-2 rounded-full bg-cash-pink px-6 py-3.5 font-body text-sm font-bold text-ink transition hover:brightness-110 active:scale-95 sm:col-span-2"
        >
          <Send size={16} />
          Enviar por WhatsApp
        </button>
      </form>
    </motion.section>
  )
}
