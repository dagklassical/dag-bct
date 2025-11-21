// src/config/dag.config.ts
export const SITE = {
  title: 'DAG Klassical - Música Clásica Premium',
  description: 'DAG Klassical - Descubre la mejor música clásica contemporánea y tradicional',
  url: 'https://dagklassical.com', // Ajusta al dominio real
  navigation: [
    { label: 'Inicio', href: '/' },
    { label: 'Música', href: '/musica' },
    { label: 'Blockchain', href: '/blockchain' },
    { label: 'Noticias', href: '/noticias' },
    { label: 'Nosotros', href: '/nosotros' },
    { label: 'Contacto', href: '/contacto' },
  ],
  // Otros valores que necesites...
};

// Asegúrate de exportar cualquier cosa que uses en rss.xml.js
export const BLOG = {
  // ...
};