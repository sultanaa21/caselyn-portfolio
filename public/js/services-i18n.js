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
    sectionTitle: 'Cada servicio resuelve un problema concreto.',
    sectionSubtitle: 'Elige el que necesita tu negocio ahora. Sin paquetes. Sin letra pequeña.',
    entryLabel: 'Empieza aquí',
    idealForLabel: 'Ideal para',
    includesLabel: 'Qué incluye',
    priceLabel: 'Precio',
    deliveryLabel: 'Entrega',
    deliveryOngoing: 'Soporte continuo',
    comingSoonLabel: 'Próximamente',
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
    sectionTitle: 'Cada servei resol un problema concret.',
    sectionSubtitle: 'Tria el que necessita el teu negoci ara. Sense paquets. Sense lletra petita.',
    entryLabel: 'Comença aquí',
    idealForLabel: 'Ideal per a',
    includesLabel: 'Què inclou',
    priceLabel: 'Preu',
    deliveryLabel: 'Lliurament',
    deliveryOngoing: 'Suport continuat',
    comingSoonLabel: 'Properament',
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
    sectionTitle: 'Every service solves a specific problem.',
    sectionSubtitle: 'Choose what your business needs right now. No bundles. No fine print.',
    entryLabel: 'Start here',
    idealForLabel: 'Ideal for',
    includesLabel: "What's included",
    priceLabel: 'Price',
    deliveryLabel: 'Delivery',
    deliveryOngoing: 'Ongoing support',
    comingSoonLabel: 'Coming soon',
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
    sectionTitle: 'Chaque service résout un problème précis.',
    sectionSubtitle: 'Choisissez ce dont votre entreprise a besoin maintenant. Sans forfaits. Sans petits caractères.',
    entryLabel: 'Commencez ici',
    idealForLabel: 'Idéal pour',
    includesLabel: 'Ce qui est inclus',
    priceLabel: 'Prix',
    deliveryLabel: 'Délai',
    deliveryOngoing: 'Support continu',
    comingSoonLabel: 'Bientôt disponible',
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

  'auditoria-gratuita': {
    es: {
      title: 'Auditoría Web Gratuita',
      tagline: 'Antes de invertir, sabe exactamente qué necesita tu web.',
      includes: [
        'Análisis visual de tu web actual',
        'Errores de diseño, UX y experiencia en móvil',
        'Velocidad, SEO básico y puntos de fuga',
        'Informe personalizado con recomendaciones claras',
      ],
      outcome: 'Sin compromiso. Sin presión. Solo claridad sobre qué necesita tu negocio.',
      ctaLabel: 'Solicitar mi auditoría gratuita',
      deliveryDisplay: 'Respuesta en 24h',
    },
    ca: {
      title: 'Auditoria Web Gratuïta',
      tagline: 'Abans d\'invertir, sàpigues exactament què necessita la teva web.',
      includes: [
        'Anàlisi visual de la teva web actual',
        'Errors de disseny, UX i experiència en mòbil',
        'Velocitat, SEO bàsic i punts de fuga',
        'Informe personalitzat amb recomanacions clares',
      ],
      outcome: 'Sense compromís. Sense pressió. Només claredat sobre el que necessita el teu negoci.',
      ctaLabel: 'Sol·licitar la meva auditoria gratuïta',
      deliveryDisplay: 'Resposta en 24h',
    },
    en: {
      title: 'Free Web Audit',
      tagline: 'Before you invest, know exactly what your website needs.',
      includes: [
        'Visual analysis of your current website',
        'Design, UX and mobile experience errors',
        'Speed, basic SEO and conversion leaks',
        'Personalized report with clear recommendations',
      ],
      outcome: 'No commitment. No pressure. Just clarity on what your business needs.',
      ctaLabel: 'Request my free audit',
      deliveryDisplay: 'Response within 24h',
    },
    fr: {
      title: 'Audit Web Gratuit',
      tagline: 'Avant d\'investir, sachez exactement ce que votre site web a besoin.',
      includes: [
        'Analyse visuelle de votre site web actuel',
        'Erreurs de design, UX et expérience mobile',
        'Vitesse, SEO de base et points de fuite',
        'Rapport personnalisé avec des recommandations claires',
      ],
      outcome: 'Sans engagement. Sans pression. Juste de la clarté sur ce dont votre entreprise a besoin.',
      ctaLabel: 'Demander mon audit gratuit',
      deliveryDisplay: 'Réponse sous 24h',
    },
  },

  'landing-page': {
    es: {
      title: 'Landing Page',
      tagline: 'Una página que convierte. Online en 24 horas.',
      includes: [
        'Diseño a medida, 100% responsive',
        'Formulario de contacto funcional',
        'Integración con WhatsApp',
        'SEO básico y velocidad optimizada',
      ],
      outcome: 'Tus clientes podrán encontrarte y contactarte fácilmente desde cualquier dispositivo.',
      ctaLabel: 'Quiero mi Landing',
      deliveryDisplay: 'Entrega en 24h',
    },
    ca: {
      title: 'Landing Page',
      tagline: 'Una pàgina que converteix. Online en 24 hores.',
      includes: [
        'Disseny a mida, 100% responsive',
        'Formulari de contacte funcional',
        'Integració amb WhatsApp',
        'SEO bàsic i velocitat optimitzada',
      ],
      outcome: 'Els teus clients podran trobar-te i contactar-te fàcilment des de qualsevol dispositiu.',
      ctaLabel: 'Vull la meva Landing',
      deliveryDisplay: 'Lliurament en 24h',
    },
    en: {
      title: 'Landing Page',
      tagline: 'A page that converts. Online in 24 hours.',
      includes: [
        'Custom design, 100% responsive',
        'Functional contact form',
        'WhatsApp integration',
        'Basic SEO and speed optimization',
      ],
      outcome: 'Your customers will find you and contact you easily from any device.',
      ctaLabel: 'I want my Landing',
      deliveryDisplay: 'Delivered in 24h',
    },
    fr: {
      title: 'Landing Page',
      tagline: 'Une page qui convertit. En ligne en 24 heures.',
      includes: [
        'Design sur mesure, 100% responsive',
        'Formulaire de contact fonctionnel',
        'Intégration WhatsApp',
        'SEO de base et vitesse optimisée',
      ],
      outcome: 'Vos clients pourront vous trouver et vous contacter facilement depuis n\'importe quel appareil.',
      ctaLabel: 'Je veux ma Landing',
      deliveryDisplay: 'Livraison en 24h',
    },
  },

  'web-premium': {
    es: {
      title: 'Web Premium',
      tagline: 'Tu web profesional, completa y lista para crecer.',
      includes: [
        'Diseño custom multisección',
        'Responsive perfecto en todos los dispositivos',
        'Integración con WhatsApp, Google Maps y reservas',
        'SEO local básico configurado',
        '30 días de soporte post-lanzamiento',
      ],
      outcome: 'Tu negocio tendrá una presencia profesional que genera confianza desde el primer segundo.',
      ctaLabel: 'Empezar mi web',
      deliveryDisplay: 'Entrega en 48-72h',
    },
    ca: {
      title: 'Web Premium',
      tagline: 'La teva web professional, completa i llesta per créixer.',
      includes: [
        'Disseny custom multisecció',
        'Responsive perfecte en tots els dispositius',
        'Integració amb WhatsApp, Google Maps i reserves',
        'SEO local bàsic configurat',
        '30 dies de suport post-llançament',
      ],
      outcome: 'El teu negoci tindrà una presència professional que genera confiança des del primer segon.',
      ctaLabel: 'Començar la meva web',
      deliveryDisplay: 'Lliurament en 48-72h',
    },
    en: {
      title: 'Premium Web',
      tagline: 'Your professional website, complete and ready to grow.',
      includes: [
        'Custom multi-section design',
        'Perfect responsive on all devices',
        'WhatsApp, Google Maps and booking integrations',
        'Basic local SEO configured',
        '30 days post-launch support',
      ],
      outcome: 'Your business will have a professional presence that builds trust from the very first second.',
      ctaLabel: 'Start my website',
      deliveryDisplay: 'Delivered in 48-72h',
    },
    fr: {
      title: 'Web Premium',
      tagline: 'Votre site web professionnel, complet et prêt à grandir.',
      includes: [
        'Design custom multi-sections',
        'Responsive parfait sur tous les appareils',
        'Intégration WhatsApp, Google Maps et réservations',
        'SEO local de base configuré',
        '30 jours de support post-lancement',
      ],
      outcome: 'Votre entreprise aura une présence professionnelle qui inspire confiance dès la première seconde.',
      ctaLabel: 'Démarrer mon site',
      deliveryDisplay: 'Livraison en 48-72h',
    },
  },

  'mantenimiento': {
    es: {
      title: 'Mantenimiento Mensual',
      tagline: 'Tu web siempre activa, sin que tengas que pensar en ella.',
      includes: [
        'Hasta 3 cambios de contenido al mes',
        'Monitorización de disponibilidad 24/7',
        'Informe mensual de rendimiento',
        'Soporte prioritario por WhatsApp',
      ],
      outcome: 'Tu web funciona, se actualiza y está bajo control. Tú solo te ocupas de tu negocio.',
      ctaLabel: 'Contratar mantenimiento',
      deliveryDisplay: 'Soporte continuo',
    },
    ca: {
      title: 'Manteniment Mensual',
      tagline: 'La teva web sempre activa, sense que hagis de pensar-hi.',
      includes: [
        'Fins a 3 canvis de contingut al mes',
        'Monitorització de disponibilitat 24/7',
        'Informe mensual de rendiment',
        'Suport prioritari per WhatsApp',
      ],
      outcome: 'La teva web funciona, s\'actualitza i està sota control. Tu només t\'ocupes del teu negoci.',
      ctaLabel: 'Contractar manteniment',
      deliveryDisplay: 'Suport continu',
    },
    en: {
      title: 'Monthly Maintenance',
      tagline: 'Your website always up, without you having to think about it.',
      includes: [
        'Up to 3 content updates per month',
        '24/7 uptime monitoring',
        'Monthly performance report',
        'Priority WhatsApp support',
      ],
      outcome: 'Your website works, stays updated and is under control. You just focus on your business.',
      ctaLabel: 'Get maintenance plan',
      deliveryDisplay: 'Ongoing support',
    },
    fr: {
      title: 'Maintenance Mensuelle',
      tagline: 'Votre site toujours actif, sans que vous ayez à y penser.',
      includes: [
        'Jusqu\'à 3 mises à jour de contenu par mois',
        'Surveillance de disponibilité 24/7',
        'Rapport mensuel de performance',
        'Support prioritaire par WhatsApp',
      ],
      outcome: 'Votre site fonctionne, reste à jour et est sous contrôle. Vous vous occupez uniquement de votre activité.',
      ctaLabel: 'Souscrire à la maintenance',
      deliveryDisplay: 'Support continu',
    },
  },

  'auditoria-meta-ads': {
    es: {
      title: 'Auditoría Meta Ads + Landing',
      tagline: 'Para negocios que invierten en anuncios pero no ven resultados.',
      includes: [
        'Revisión completa de tus campañas activas',
        'Análisis de tu landing page actual',
        'Mapa de errores y oportunidades perdidas',
        'Plan de acción con prioridades claras',
      ],
      outcome: 'Sabrás exactamente por qué tus anuncios no convierten y qué hacer al respecto.',
      ctaLabel: 'Auditar mis campañas',
      deliveryDisplay: 'Informe en 48h',
    },
    ca: {
      title: 'Auditoria Meta Ads + Landing',
      tagline: 'Per a negocis que inverteixen en anuncis però no veuen resultats.',
      includes: [
        'Revisió completa de les teves campanyes actives',
        'Anàlisi de la teva landing page actual',
        'Mapa d\'errors i oportunitats perdudes',
        'Pla d\'acció amb prioritats clares',
      ],
      outcome: 'Sabràs exactament per què els teus anuncis no converteixen i com solucionar-ho.',
      ctaLabel: 'Auditar les meves campanyes',
      deliveryDisplay: 'Informe en 48h',
    },
    en: {
      title: 'Meta Ads + Landing Audit',
      tagline: 'For businesses investing in ads but not seeing results.',
      includes: [
        'Full review of your active campaigns',
        'Analysis of your current landing page',
        'Map of errors and missed opportunities',
        'Action plan with clear priorities',
      ],
      outcome: 'You\'ll know exactly why your ads aren\'t converting — and what to do about it.',
      ctaLabel: 'Audit my campaigns',
      deliveryDisplay: 'Report in 48h',
    },
    fr: {
      title: 'Audit Meta Ads + Landing',
      tagline: 'Pour les entreprises qui investissent dans des annonces mais ne voient pas de résultats.',
      includes: [
        'Revue complète de vos campagnes actives',
        'Analyse de votre landing page actuelle',
        'Carte des erreurs et opportunités manquées',
        'Plan d\'action avec des priorités claires',
      ],
      outcome: 'Vous saurez exactement pourquoi vos annonces ne convertissent pas et comment y remédier.',
      ctaLabel: 'Auditer mes campagnes',
      deliveryDisplay: 'Rapport en 48h',
    },
  },

  // ── Future Services (coming-soon) ─────────────────────────────────────────
  'seo-local': {
    es: { title: 'Pack SEO Local', tagline: 'Aparecer en Google cuando te buscan.', ctaLabel: 'Próximamente' },
    ca: { title: 'Pack SEO Local', tagline: 'Aparèixer a Google quan et busquen.', ctaLabel: 'Properament' },
    en: { title: 'Local SEO Pack', tagline: 'Show up on Google when people search for you.', ctaLabel: 'Coming soon' },
    fr: { title: 'Pack SEO Local', tagline: 'Apparaître sur Google quand on vous cherche.', ctaLabel: 'Bientôt' },
  },
  'chatbot-ia': {
    es: { title: 'Chatbot IA', tagline: 'Atención automática 24/7 para tus clientes.', ctaLabel: 'Próximamente' },
    ca: { title: 'Chatbot IA', tagline: 'Atenció automàtica 24/7 per als teus clients.', ctaLabel: 'Properament' },
    en: { title: 'AI Chatbot', tagline: 'Automated 24/7 support for your customers.', ctaLabel: 'Coming soon' },
    fr: { title: 'Chatbot IA', tagline: 'Support automatique 24/7 pour vos clients.', ctaLabel: 'Bientôt' },
  },
  'automatizacion-leads': {
    es: { title: 'Automatización de Leads', tagline: 'Cada formulario, una acción automática.', ctaLabel: 'Próximamente' },
    ca: { title: 'Automatització de Leads', tagline: 'Cada formulari, una acció automàtica.', ctaLabel: 'Properament' },
    en: { title: 'Lead Automation', tagline: 'Every form submission, an automatic action.', ctaLabel: 'Coming soon' },
    fr: { title: 'Automatisation des leads', tagline: 'Chaque formulaire, une action automatique.', ctaLabel: 'Bientôt' },
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
