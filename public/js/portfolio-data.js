/**
 * Caselyn Portfolio Data System
 * Single source of truth for portfolio projects.
 * Prepared for future CMS / API integration.
 *
 * Data model is forward-compatible: add projects here,
 * the renderer picks them up automatically.
 */

export const PORTFOLIO_PROJECTS = [
  {
    id: 'project-melt',
    slug: 'melt',
    title: 'MELT',
    category: 'Hamburguesería',
    year: '2024',
    status: 'published',
    featured: true,
    featuredOrder: 1,
    accentColor: '#F59E0B',
    layoutType: 'standard',
    thumbnail: {
      desktop: '/images/portfolio/melt-desktop.png',
      mobile: '/images/portfolio/melt-mobile.png',
      alt: 'Landing premium de MELT Hamburguesería — diseño oscuro con acento ámbar'
    },
    gallery: [],
    stack: ['Next.js', 'Framer Motion', 'Tailwind CSS'],
    tagline: 'Landing premium para hamburguesería moderna.',
    shortDescription: 'Diseñada para convertir visitas en pedidos. Branding visual fuerte, experiencia mobile-first y carga instantánea.',
    outcome: 'Alta conversión',
    liveUrl: 'https://web-hambu.vercel.app/',
    githubUrl: null,
    metrics: [],
    testimonial: null,
    servicesUsed: ['Web Design', 'Development', 'CRO']
  },
  {
    id: 'project-juicy-brava',
    slug: 'juicy-brava',
    title: 'Juicy Brava',
    category: 'Batidos & Smoothies',
    year: '2024',
    status: 'published',
    featured: false,
    featuredOrder: 2,
    accentColor: '#2d4a3e',
    layoutType: 'standard',
    thumbnail: {
      desktop: '/images/portfolio/juicy-brava-desktop.png',
      mobile: '/images/portfolio/juicy-brava-mobile.png',
      alt: 'Juicy Brava — batidos frescos en la Costa Brava, diseño verde elegante'
    },
    gallery: [],
    stack: ['Next.js', 'Framer Motion', 'Tailwind CSS'],
    tagline: 'Fruta fresca, sabor brutal, frente al mar.',
    shortDescription: 'Diseño que transmite frescura y naturaleza. Experiencia inmersiva para un negocio real en la Costa Brava.',
    outcome: 'Presencia digital sólida',
    liveUrl: 'https://juicy-brava.vercel.app/',
    githubUrl: null,
    metrics: [],
    testimonial: null,
    servicesUsed: ['Web Design', 'Development', 'Local SEO']
  },
  {
    id: 'project-fixnow',
    slug: 'fixnow',
    title: 'FixNow',
    category: 'Servicios Profesionales',
    year: '2024',
    status: 'published',
    featured: false,
    featuredOrder: 3,
    accentColor: '#3b82f6',
    layoutType: 'standard',
    thumbnail: null,
    gallery: [],
    stack: ['Landing page', 'Formulario', 'SEO optimizado'],
    tagline: 'Landing optimizada para servicios a domicilio.',
    shortDescription: 'Mayor profesionalidad percibida desde el primer clic. Formulario directo, carga rápida y SEO local integrado.',
    outcome: '3× más solicitudes',
    liveUrl: '#',
    githubUrl: null,
    metrics: [],
    testimonial: null,
    servicesUsed: ['Launch', 'CRO']
  },
  {
    id: 'project-personajes-virtuales-ia',
    slug: 'personajes-virtuales-ia',
    title: 'Personajes Virtuales IA',
    category: 'IA & Contenido Digital',
    year: '2024',
    status: 'published',
    featured: false,
    featuredOrder: 4,
    accentColor: '#8B5CF6',
    layoutType: 'standard',
    thumbnail: {
      desktop: '/images/portfolio/personajes-virtuales-ia-desktop.png',
      mobile: '/images/portfolio/personajes-virtuales-ia-mobile.png',
      alt: 'Personajes Virtuales IA — humanos generados por IA para contenido digital'
    },
    gallery: [],
    stack: ['Next.js', 'Framer Motion', 'Tailwind CSS'],
    tagline: 'Escala tu producción de contenido digital sin límites.',
    shortDescription: 'Humanos generados por IA para contenido digital sin límites.',
    outcome: 'Producción ilimitada',
    liveUrl: 'https://web2-ugc.vercel.app/',
    githubUrl: null,
    metrics: [],
    testimonial: null,
    servicesUsed: ['Web Design', 'Development']
  },
  {
    id: 'project-frankburger',
    slug: 'frankburger',
    title: 'FrankBurger',
    category: 'Restauración',
    year: '2024',
    status: 'published',
    featured: false,
    featuredOrder: 5,
    accentColor: '#DC2626',
    layoutType: 'standard',
    thumbnail: {
      desktop: '/images/portfolio/frankburger-desktop.png',
      mobile: '/images/portfolio/frankburger-mobile.png',
      alt: 'FrankBurger — Landing premium para hamburguesería'
    },
    gallery: [],
    stack: ['Next.js', 'Tailwind CSS'],
    tagline: 'Las burgers que te harán volver.',
    shortDescription: 'Landing premium para hamburguesería.',
    outcome: 'Alta conversión',
    liveUrl: 'https://web3-72gl.vercel.app/',
    githubUrl: null,
    metrics: [],
    testimonial: null,
    servicesUsed: ['Web Design', 'Development']
  },
  {
    id: 'project-azul-croissant',
    slug: 'azul-croissant',
    title: 'Azul Croissant',
    category: 'Panadería & Café',
    year: '2024',
    status: 'published',
    featured: false,
    featuredOrder: 6,
    accentColor: '#0EA5E9',
    layoutType: 'standard',
    thumbnail: {
      desktop: '/images/portfolio/azul-croissant-desktop.png',
      mobile: '/images/portfolio/azul-croissant-mobile.png',
      alt: 'Azul Croissant — Panadería artesanal con croissants y café'
    },
    gallery: [],
    stack: ['Next.js', 'Tailwind CSS'],
    tagline: 'Croissants y café para tus mejores momentos.',
    shortDescription: 'Panadería artesanal. Croissants y café para tus mejores momentos.',
    outcome: 'Presencia digital sólida',
    liveUrl: 'https://web-4-topaz.vercel.app',
    githubUrl: null,
    metrics: [],
    testimonial: null,
    servicesUsed: ['Web Design', 'Development']
  }
];
