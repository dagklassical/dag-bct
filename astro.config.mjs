// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import { SITE } from './src/config/dag.config'; // Asumiendo que tienes este archivo

export default defineConfig({
  integrations: [
    tailwind({
      configFile: './tailwind.config.cjs', // Ajusta si tu archivo es .js o .ts
    }),
  ],
  // Define tus aliases aquí
  vite: {
    resolve: {
      alias: {
        '@config': new URL('./src/config/dag.config.ts', import.meta.url).pathname, // Apunta al archivo correcto
        // Puedes añadir más alias aquí si los usas
        '@components': new URL('./src/components/', import.meta.url).pathname,
        '@layouts': new URL('./src/layouts/', import.meta.url).pathname,
        // '@utils': new URL('./src/utils/', import.meta.url).pathname,
      },
    },
  },
});