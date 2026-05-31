/* eslint-disable no-unused-vars */
/**
 * Caselyn — Services i18n Layer
 * ─────────────────────────────────────────────────────────────────────────────
 * Pure translation layer. No UI, no DOM, no data logic.
 *
 * Architecture:
 *   services-data.js  →  services-i18n.js  →  services-renderer.js
 *
 * To add a language: add a new key to each SERVICES_STRINGS entry.
 * To update copy: edit the string values here.
 * ─────────────────────────────────────────────────────────────────────────────
 */

'use strict';

// ─── Shared Labels ────────────────────────────────────────────────────────────
// UI chrome strings — not tied to a specific service.

const SERVICES_UI_STRINGS = {
  es: {
    sectionTitle: 'Servicios',
    sectionSubtitle: 'Webs, marketing y automatización para mejorar cómo tu negocio se muestra, capta clientes y trabaja.',
    entryLabel: 'Empieza aquí',
    idealForLabel: 'Ideal para',
    includesLabel: 'Qué incluye',
    priceLabel: 'Precio',
    deliveryLabel: 'Entrega',
    deliveryOngoing: 'Soporte continuo',
    comingSoonLabel: 'Próximamente',
    viewServiceLabel: 'Ver servicio',
    productLines: {
      launch: 'Launch',
      presence: 'Presence',
      care: 'Care',
      growth: 'Growth',
    },
    statusBadges: {
      'most-popular': 'Más vendido',
      'fastest': 'Más rápido',
      'recommended': 'Recomendado',
      'best-value': 'Mejor valor',
      'continuous-support': 'Soporte continuo',
      'real-diagnosis': 'Diagnóstico real',
    },
    targetAudienceLabels: {
      'restaurantes': 'Restaurantes',
      'clinicas': 'Clínicas',
      'salones': 'Salones',
      'comercios': 'Comercios',
      'servicios': 'Servicios',
      'nuevos-negocios': 'Negocios que empiezan',
      'webs-publicadas': 'Webs ya publicadas',
      'clientes-recurrentes': 'Clientes recurrentes',
      'negocios-con-anuncios': 'Negocios con anuncios activos',
      'todo-tipo-de-negocio': 'Todo tipo de negocio',
    },
  },

  ca: {
    sectionTitle: 'Serveis',
    sectionSubtitle: 'Webs, màrqueting i automatització per millorar com el teu negoci es mostra, capta clients i treballa.',
    entryLabel: 'Comença aquí',
    idealForLabel: 'Ideal per a',
    includesLabel: 'Què inclou',
    priceLabel: 'Preu',
    deliveryLabel: 'Lliurament',
    deliveryOngoing: 'Suport continuat',
    comingSoonLabel: 'Properament',
    viewServiceLabel: 'Veure servei',
    productLines: {
      launch: 'Launch',
      presence: 'Presence',
      care: 'Care',
      growth: 'Growth',
    },
    statusBadges: {
      'most-popular': 'Més venut',
      'fastest': 'Més ràpid',
      'recommended': 'Recomanat',
      'best-value': 'Millor valor',
      'continuous-support': 'Suport continu',
      'real-diagnosis': 'Diagnòstic real',
    },
    targetAudienceLabels: {
      'restaurantes': 'Restaurants',
      'clinicas': 'Clíniques',
      'salones': 'Salons',
      'comercios': 'Comerços',
      'servicios': 'Serveis',
      'nuevos-negocios': 'Negocis que comencen',
      'webs-publicadas': 'Webs ja publicades',
      'clientes-recurrentes': 'Clients recurrents',
      'negocios-con-anuncios': 'Negocis amb anuncis actius',
      'todo-tipo-de-negocio': 'Tot tipus de negoci',
    },
  },

  en: {
    sectionTitle: 'Services',
    sectionSubtitle: 'Websites, marketing and automation to improve how your business shows up, attracts clients and operates.',
    entryLabel: 'Start here',
    idealForLabel: 'Ideal for',
    includesLabel: "What's included",
    priceLabel: 'Price',
    deliveryLabel: 'Delivery',
    deliveryOngoing: 'Ongoing support',
    comingSoonLabel: 'Coming soon',
    viewServiceLabel: 'View service',
    productLines: {
      launch: 'Launch',
      presence: 'Presence',
      care: 'Care',
      growth: 'Growth',
    },
    statusBadges: {
      'most-popular': 'Most popular',
      'fastest': 'Fastest',
      'recommended': 'Recommended',
      'best-value': 'Best value',
      'continuous-support': 'Ongoing support',
      'real-diagnosis': 'Real diagnosis',
    },
    targetAudienceLabels: {
      'restaurantes': 'Restaurants',
      'clinicas': 'Clinics',
      'salones': 'Salons',
      'comercios': 'Retail shops',
      'servicios': 'Service businesses',
      'nuevos-negocios': 'New businesses',
      'webs-publicadas': 'Existing websites',
      'clientes-recurrentes': 'Returning clients',
      'negocios-con-anuncios': 'Businesses running ads',
      'todo-tipo-de-negocio': 'Any type of business',
    },
  },

  fr: {
    sectionTitle: 'Services',
    sectionSubtitle: 'Sites web, marketing et automatisation pour améliorer la façon dont votre entreprise se présente, attire des clients et fonctionne.',
    entryLabel: 'Commencez ici',
    idealForLabel: 'Idéal pour',
    includesLabel: 'Ce qui est inclus',
    priceLabel: 'Prix',
    deliveryLabel: 'Délai',
    deliveryOngoing: 'Support continu',
    comingSoonLabel: 'Bientôt disponible',
    viewServiceLabel: 'Voir le service',
    productLines: {
      launch: 'Launch',
      presence: 'Presence',
      care: 'Care',
      growth: 'Growth',
    },
    statusBadges: {
      'most-popular': 'Plus vendu',
      'fastest': 'Plus rapide',
      'recommended': 'Recommandé',
      'best-value': 'Meilleur rapport',
      'continuous-support': 'Support continu',
      'real-diagnosis': 'Diagnostic réel',
    },
    targetAudienceLabels: {
      'restaurantes': 'Restaurants',
      'clinicas': 'Cliniques',
      'salones': 'Salons',
      'comercios': 'Commerces',
      'servicios': 'Prestataires de services',
      'nuevos-negocios': 'Nouvelles entreprises',
      'webs-publicadas': 'Sites existants',
      'clientes-recurrentes': 'Clients récurrents',
      'negocios-con-anuncios': 'Entreprises avec des annonces actives',
      'todo-tipo-de-negocio': 'Tout type d\'entreprise',
    },
  },
};

// ─── Service-Specific Strings ────────────────────────────────────────────────

const SERVICES_STRINGS = {

  'webs-landings': {
    es: {
      title: 'Webs y landings',
      tagline: 'Páginas claras, rápidas y adaptadas a cada negocio.',
      includes: [
        'Diseño a medida, 100% responsive',
        'Formulario de contacto y WhatsApp integrados',
        'SEO básico y velocidad optimizada',
        'Preparada para captar contactos desde el primer día',
      ],
      outcome: 'Tu negocio online, con una estructura clara que facilita el contacto.',
      ctaLabel: 'Contactar',
      deliveryDisplay: '',
    },
    ca: {
      title: 'Webs i landings',
      tagline: 'Pàgines clares, ràpides i adaptades a cada negoci.',
      includes: [
        'Disseny a mida, 100% responsive',
        'Formulari de contacte i WhatsApp integrats',
        'SEO bàsic i velocitat optimitzada',
        'Preparada per captar contactes des del primer dia',
      ],
      outcome: 'El teu negoci online, amb una estructura clara que facilita el contacte.',
      ctaLabel: 'Contactar',
      deliveryDisplay: '',
    },
    en: {
      title: 'Websites & Landings',
      tagline: 'Clear, fast pages tailored to each business.',
      includes: [
        'Custom design, 100% responsive',
        'Contact form and WhatsApp integrated',
        'Basic SEO and speed optimization',
        'Ready to capture leads from day one',
      ],
      outcome: 'Your business online, with a clear structure that makes contact easy.',
      ctaLabel: 'Contact us',
      deliveryDisplay: '',
    },
    fr: {
      title: 'Sites web & Landings',
      tagline: 'Pages claires, rapides et adaptées à chaque entreprise.',
      includes: [
        'Design sur mesure, 100% responsive',
        'Formulaire de contact et WhatsApp intégrés',
        'SEO de base et vitesse optimisée',
        'Prêt à capturer des contacts dès le premier jour',
      ],
      outcome: 'Votre entreprise en ligne, avec une structure claire qui facilite le contact.',
      ctaLabel: 'Nous contacter',
      deliveryDisplay: '',
    },
  },

  'marketing': {
    es: {
      title: 'Marketing',
      tagline: 'Campañas, landings y mejoras para atraer clientes.',
      includes: [
        'Campañas en Meta Ads y Google',
        'Landings preparadas para convertir',
        'Seguimiento y optimización de resultados',
        'Análisis de lo que funciona y lo que no',
      ],
      outcome: 'Más contactos, reservas y ventas. Sin gastar en lo que no funciona.',
      ctaLabel: 'Contactar',
      deliveryDisplay: '',
    },
    ca: {
      title: 'Màrqueting',
      tagline: 'Campanyes, landings i millores per atraure clients.',
      includes: [
        'Campanyes a Meta Ads i Google',
        'Landings preparades per convertir',
        'Seguiment i optimització de resultats',
        'Anàlisi del que funciona i el que no',
      ],
      outcome: 'Més contactes, reserves i vendes. Sense gastar en el que no funciona.',
      ctaLabel: 'Contactar',
      deliveryDisplay: '',
    },
    en: {
      title: 'Marketing',
      tagline: 'Campaigns, landings and improvements to attract clients.',
      includes: [
        'Meta Ads and Google campaigns',
        'Landings built to convert',
        'Results tracking and optimization',
        'Analysis of what works and what does not',
      ],
      outcome: 'More contacts, bookings and sales. Without spending on what does not work.',
      ctaLabel: 'Contact us',
      deliveryDisplay: '',
    },
    fr: {
      title: 'Marketing',
      tagline: 'Campagnes, landings et améliorations pour attirer des clients.',
      includes: [
        'Campagnes Meta Ads et Google',
        'Landings conçues pour convertir',
        'Suivi et optimisation des résultats',
        'Analyse de ce qui fonctionne et ce qui ne fonctionne pas',
      ],
      outcome: 'Plus de contacts, réservations et ventes. Sans dépenser sur ce qui ne fonctionne pas.',
      ctaLabel: 'Nous contacter',
      deliveryDisplay: '',
    },
  },

  'automatizacion': {
    es: {
      title: 'Automatización',
      tagline: 'Conexión de formularios, contactos y herramientas.',
      includes: [
        'Automatización de formularios y leads',
        'Conexión entre herramientas (CRM, email, Sheets)',
        'Notificaciones automáticas al equipo',
        'Flujos simples sin código complejo',
      ],
      outcome: 'Menos trabajo manual. Más seguimiento sin esfuerzo adicional.',
      ctaLabel: 'Contactar',
      deliveryDisplay: '',
    },
    ca: {
      title: 'Automatització',
      tagline: 'Connexió de formularis, contactes i eines.',
      includes: [
        'Automatització de formularis i leads',
        'Connexió entre eines (CRM, email, Sheets)',
        'Notificacions automàtiques a l\'equip',
        'Fluxos simples sense codi complex',
      ],
      outcome: 'Menys treball manual. Més seguiment sense esforç addicional.',
      ctaLabel: 'Contactar',
      deliveryDisplay: '',
    },
    en: {
      title: 'Automation',
      tagline: 'Connecting forms, contacts and tools.',
      includes: [
        'Form and lead automation',
        'Tool connections (CRM, email, Sheets)',
        'Automatic team notifications',
        'Simple flows without complex code',
      ],
      outcome: 'Less manual work. More follow-up without extra effort.',
      ctaLabel: 'Contact us',
      deliveryDisplay: '',
    },
    fr: {
      title: 'Automatisation',
      tagline: 'Connexion des formulaires, contacts et outils.',
      includes: [
        'Automatisation des formulaires et leads',
        'Connexion entre outils (CRM, email, Sheets)',
        'Notifications automatiques à l\'équipe',
        'Flux simples sans code complexe',
      ],
      outcome: 'Moins de travail manuel. Plus de suivi sans effort supplémentaire.',
      ctaLabel: 'Nous contacter',
      deliveryDisplay: '',
    },
  },

  'mantenimiento': {
    es: {
      title: 'Mantenimiento',
      tagline: 'Cambios, soporte y revisión técnica mensual.',
      includes: [
        'Cambios de contenido cuando los necesites',
        'Revisión técnica mensual',
        'Soporte por WhatsApp',
        'Tu web siempre activa y actualizada',
      ],
      outcome: 'Tu web bajo control. Tú solo te ocupas de tu negocio.',
      ctaLabel: 'Contactar',
      deliveryDisplay: 'Soporte continuo',
    },
    ca: {
      title: 'Manteniment',
      tagline: 'Canvis, suport i revisió tècnica mensual.',
      includes: [
        'Canvis de contingut quan els necessitis',
        'Revisió tècnica mensual',
        'Suport per WhatsApp',
        'La teva web sempre activa i actualitzada',
      ],
      outcome: 'La teva web sota control. Tu només t\'ocupes del teu negoci.',
      ctaLabel: 'Contactar',
      deliveryDisplay: 'Suport continu',
    },
    en: {
      title: 'Maintenance',
      tagline: 'Updates, support and monthly technical review.',
      includes: [
        'Content updates whenever you need them',
        'Monthly technical review',
        'WhatsApp support',
        'Your site always live and up to date',
      ],
      outcome: 'Your site under control. You just focus on your business.',
      ctaLabel: 'Contact us',
      deliveryDisplay: 'Ongoing support',
    },
    fr: {
      title: 'Maintenance',
      tagline: 'Mises à jour, support et révision technique mensuelle.',
      includes: [
        'Mises à jour du contenu quand vous en avez besoin',
        'Révision technique mensuelle',
        'Support WhatsApp',
        'Votre site toujours en ligne et à jour',
      ],
      outcome: 'Votre site sous contrôle. Vous vous occupez uniquement de votre activité.',
      ctaLabel: 'Nous contacter',
      deliveryDisplay: 'Support continu',
    },
  },

};

/**
 * Get all UI chrome strings for a given language.
 * Falls back to 'es' if the lang is not found.
 *
 * @param {string} lang
 * @returns {object}
 */
function getServicesUiStrings(lang) {
  return SERVICES_UI_STRINGS[lang] || SERVICES_UI_STRINGS['es'];
}

/**
 * Get copy strings for a specific service in a given language.
 * Falls back to 'es' if the lang or serviceId is not found.
 *
 * @param {string} serviceId  - matches service.i18nKey
 * @param {string} lang
 * @returns {object}
 */
function getServiceStrings(serviceId, lang) {
  const service = SERVICES_STRINGS[serviceId];
  if (!service) return {};
  return service[lang] || service['es'] || {};
}
