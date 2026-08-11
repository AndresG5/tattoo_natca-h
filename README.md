# Cash Tattoo — Landing Page

Landing page mobile-first para Cash Tattoo (estudio de tatuajes y perforaciones, Guadalupe N.L.), construida con React + Vite + TypeScript + Tailwind + Framer Motion.

## Cómo correrlo

```bash
npm install
npm run dev
```

Abre el link que te da la terminal (normalmente `http://localhost:5173`).

## Build de producción

```bash
npm run build
npm run preview
```

## Qué incluye

- **Hero** con el lockup "CA$H TATTOO" (dorado cromado + rosa neón), animación de entrada y $ flotantes.
- **Ticker** infinito con las frases de la marca.
- **Agenda tu cita** — botón directo a WhatsApp (81 2052 2457).
- **Galería** — tarjetas placeholder por categoría (diseño, fine line, realismo, perforaciones). Reemplázalas por fotos reales del trabajo cuando las tengas.
- **Ubicación** — mapa embebido de Av. Plutarco Elías Calles 103, Guadalupe, N.L.
- **Contacto** — teléfono, correo y Facebook.

## Dónde editar

Todo el contenido vive en `src/App.tsx`. Los colores/tipografías de marca están centralizados en `tailwind.config.js` (colores `gold`, `cash.pink`, `cash.violet`, `ink`, `charcoal`, `bone`) y en las utilidades `.text-chrome` / `.text-neon-pink` de `src/index.css`.

### Para poner fotos reales en la galería

En `src/App.tsx`, busca la sección `GALERÍA` y reemplaza las tarjetas de ícono por `<img>` o `background-image` con tus fotos (ponlas en `src/assets/` o `public/`).
