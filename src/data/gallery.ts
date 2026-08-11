import type { StyleKey } from './styles'

export interface GalleryItem {
  id: string
  /**
   * Ruta a la fotografía real. Coloca el archivo en /public/images/tattoos/
   * y actualiza esta ruta. Mientras no exista la foto, `placeholder: true`
   * hace que el componente muestre un marcador visual en vez de una imagen rota.
   */
  image: string
  title: string
  style: StyleKey
  artist: string
  description?: string
  placeholder?: boolean
}

// TODO(dueño del sitio): reemplaza estas entradas por fotografías reales.
// Cada vez que agregues una foto en /public/images/tattoos/, crea una entrada
// aquí con placeholder: false (o simplemente quita la propiedad).
export const gallery: GalleryItem[] = [
  {
    id: 'tattoo-01',
    image: '/images/tattoos/tattoo-01.webp',
    title: 'Trabajo blackwork',
    style: 'blackwork',
    artist: 'Nat Cash',
    placeholder: true,
  },
  {
    id: 'tattoo-02',
    image: '/images/tattoos/tattoo-02.webp',
    title: 'Fine line',
    style: 'fine-line',
    artist: 'Nat Cash',
    placeholder: true,
  },
  {
    id: 'tattoo-03',
    image: '/images/tattoos/tattoo-03.webp',
    title: 'Realismo',
    style: 'realismo',
    artist: 'Nat Cash',
    placeholder: true,
  },
  {
    id: 'tattoo-04',
    image: '/images/tattoos/tattoo-04.webp',
    title: 'Lettering',
    style: 'lettering',
    artist: 'Nat Cash',
    placeholder: true,
  },
  {
    id: 'tattoo-05',
    image: '/images/tattoos/tattoo-05.webp',
    title: 'Color',
    style: 'color',
    artist: 'Nat Cash',
    placeholder: true,
  },
  {
    id: 'tattoo-06',
    image: '/images/tattoos/tattoo-06.webp',
    title: 'Perforación',
    style: 'piercing',
    artist: 'Nat Cash',
    placeholder: true,
  },
]
