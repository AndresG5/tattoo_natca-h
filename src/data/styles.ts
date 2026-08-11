export type StyleKey =
  | 'blackwork'
  | 'fine-line'
  | 'realismo'
  | 'lettering'
  | 'color'
  | 'piercing'

export interface TattooStyle {
  key: StyleKey
  name: string
  description: string
}

export const styles: TattooStyle[] = [
  {
    key: 'fine-line',
    name: 'Fine Line',
    description: 'Trazo fino y delicado, ideal para diseños minimalistas y detallados.',
  },
  {
    key: 'blackwork',
    name: 'Blackwork',
    description: 'Tinta negra sólida, contrastes fuertes y composiciones gráficas.',
  },
  {
    key: 'realismo',
    name: 'Realismo',
    description: 'Retratos y escenas con profundidad, luz y sombra realistas.',
  },
  {
    key: 'lettering',
    name: 'Lettering',
    description: 'Frases y nombres con tipografía personalizada, tu historia en letras.',
  },
  {
    key: 'color',
    name: 'Color',
    description: 'Piezas vibrantes que usan el color como protagonista del diseño.',
  },
  {
    key: 'piercing',
    name: 'Perforaciones',
    description: 'Piercings con material de calidad y proceso 100% higiénico.',
  },
]
