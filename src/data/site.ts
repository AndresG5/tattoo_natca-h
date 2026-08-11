export const SITE = {
  whatsappNumber: '528120522457',
  whatsappDisplay: '81 2052 2457',
  whatsappDefaultMessage: 'Hola Cash Tattoo, quiero agendar una cita',
  email: 'natcash67@gmail.com',
  facebook: 'https://www.facebook.com/share/1JQrEgYubN/?mibextid=wwXIfr',
  // No hay Instagram configurado todavía — se deja como placeholder explícito.
  instagram: null as string | null,
  address: 'Av. Plutarco Elías Calles 103, Guadalupe, Nuevo León, 67100',
  mapsQuery: 'Av+Plutarco+Elias+Calles+103+Guadalupe+Nuevo+Leon+67100',
  // Horarios no confirmados por el cliente — placeholder explícito, no inventado.
  hours: null as string | null,
}

export function waLink(message: string = SITE.whatsappDefaultMessage) {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`
}
