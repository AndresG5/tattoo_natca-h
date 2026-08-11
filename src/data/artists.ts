export interface Artist {
  id: string
  name: string
  specialty: string
  bio: string
  photo: string
  placeholder?: boolean
  instagram?: string
}

// TODO(dueño del sitio): agrega aquí a los demás tatuadores del estudio
// cuando tengas su nombre, especialidad y foto. No se inventan artistas.
export const artists: Artist[] = [
  {
    id: 'nat-cash',
    name: 'Nat Cash',
    specialty: 'Especialidad por confirmar',
    bio: 'Fundadora de Cash Tattoo. Agrega aquí una bio corta cuando la tengas lista.',
    photo: '/images/artists/nat-cash.webp',
    placeholder: true,
    instagram: undefined,
  },
]
