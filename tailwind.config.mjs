// tailwind.config.cjs (o tailwind.config.js)
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        'dag-burgundy': '#760F05',
        'dag-black': '#000000',
        'dag-white': '#FFFFFF',
        'dag-platinum': '#E0E0E0',
        'dag-ivory': '#F9F9D6',
        // Añade aquí otros colores si los defines
      },
      fontFamily: {
        'advent-pro': ['Advent Pro', 'sans-serif'], // Si decides usarla como fuente CSS
      }
    },
  },
  plugins: [],
}