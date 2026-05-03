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
    id: 'project-studio-belle',
    slug: 'studio-belle',
    title: 'Studio Belle',
    category: 'Salón de Belleza',
    year: '2024',
    status: 'published',
    featured: false,
    featuredOrder: 2,
    accentColor: '#ec4899',
    layoutType: 'standard',
    thumbnail: null,
    gallery: [],
    stack: ['Galería visual', 'Citas online', 'Mobile-first'],
    tagline: 'Sitio elegante con galería de servicios y reservas.',
    shortDescription: 'Captación de clientes nuevos desde el primer día. Diseño limpio, femenino y orientado a la conversión.',
    outcome: '8–12 citas / semana',
    liveUrl: '#',
    githubUrl: null,
    metrics: [],
    testimonial: null,
    servicesUsed: ['Presence', 'Local SEO']
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
  }
];
