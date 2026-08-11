/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0a0709',
        charcoal: '#161114',
        gold: {
          DEFAULT: '#e8b64f',
          light: '#fbe6a8',
          dark: '#9c7420',
        },
        cash: {
          pink: '#ff2f8c',
          magenta: '#c4157a',
          violet: '#5b1f8f',
        },
        bone: '#f3ead9',
      },
      fontFamily: {
        display: ['"Bungee"', 'sans-serif'],
        script: ['"Permanent Marker"', 'cursive'],
        body: ['"Inter"', 'sans-serif'],
      },
      backgroundImage: {
        'gold-chrome': 'linear-gradient(180deg, #fff6d9 0%, #f0c869 25%, #9c7420 55%, #f6d787 75%, #7a5a15 100%)',
        'noise': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E\")",
      },
      keyframes: {
        flicker: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-14px) rotate(6deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        flicker: 'flicker 3.2s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite',
      },
    },
  },
  plugins: [],
}
