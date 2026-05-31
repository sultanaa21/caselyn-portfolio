/* eslint-disable no-unused-vars */
/**
 * Caselyn — Services Data Model
 * ─────────────────────────────────────────────────────────────────────────────
 * Source of truth for all services. Pure data — no UI, no translations.
 *
 * Architecture:
 *   services-data.js  →  services-i18n.js  →  services-renderer.js
 * ─────────────────────────────────────────────────────────────────────────────
 */

'use strict';

// ─── Product Lines ───────────────────────────────────────────────────────────

const PRODUCT_LINES = {
  web: {
    id: 'web',
    color: '#3b82f6',
    bg: 'rgba(59, 130, 246, 0.07)',
  },
  marketing: {
    id: 'marketing',
    color: '#f59e0b',
    bg: 'rgba(245, 158, 11, 0.07)',
  },
  automation: {
    id: 'automation',
    color: '#6366f1',
    bg: 'rgba(99, 102, 241, 0.07)',
  },
  care: {
    id: 'care',
    color: '#0a0a0a',
    bg: 'rgba(10, 10, 10, 0.05)',
  },
};

// ─── Core Services Grid ───────────────────────────────────────────────────────

const SERVICES = [
  {
    id: 'webs-landings',
    slug: 'webs-landings',
    productLine: 'web',

    status: 'active',
    featured: false,
    order: 1,

    pricing: {
      type: 'custom',
      amount: null,
      currency: 'EUR',
      displayLabel: '',
    },

    delivery: {
      label: '',
      type: 'custom',
    },

    statusBadge: null,

    ctaAction: 'diagnostico',
    ctaParams: { service: 'webs-landings' },

    pageReady: false,
    seo: { metaTitle: '', metaDescription: '', ogImage: '' },
    heroImage: '',
    gallery: [],
    processSteps: [],
    faqs: [],
    testimonials: [],
    relatedServices: ['marketing', 'mantenimiento'],
    addOns: [],
    integrations: [],
    webhookId: null,

    targetAudience: [],

    i18nKey: 'webs-landings',
  },

  {
    id: 'marketing',
    slug: 'marketing',
    productLine: 'marketing',

    status: 'active',
    featured: false,
    order: 2,

    pricing: {
      type: 'custom',
      amount: null,
      currency: 'EUR',
      displayLabel: '',
    },

    delivery: {
      label: '',
      type: 'custom',
    },

    statusBadge: null,

    ctaAction: 'diagnostico',
    ctaParams: { service: 'marketing' },

    pageReady: true,
    seo: { metaTitle: 'Marketing | Caselyn', metaDescription: 'Campañas, contenido y landings conectadas a la identidad de tu negocio. Marketing coherente entre web, redes, anuncios y contacto.', ogImage: '' },
    heroImage: '',
    gallery: [],
    processSteps: [],
    faqs: [],
    testimonials: [],
    relatedServices: ['webs-landings', 'automatizacion'],
    addOns: [],
    integrations: [],
    webhookId: null,

    targetAudience: [],

    i18nKey: 'marketing',
  },

  {
    id: 'automatizacion',
    slug: 'automatizacion',
    productLine: 'automation',

    status: 'active',
    featured: false,
    order: 3,

    pricing: {
      type: 'custom',
      amount: null,
      currency: 'EUR',
      displayLabel: '',
    },

    delivery: {
      label: '',
      type: 'custom',
    },

    statusBadge: null,

    ctaAction: 'diagnostico',
    ctaParams: { service: 'automatizacion' },

    pageReady: true,
    seo: { metaTitle: 'Automatización | Caselyn', metaDescription: 'Conectamos formularios, contactos y herramientas para ordenar procesos, avisos y seguimiento en negocios que quieren trabajar mejor.', ogImage: '' },
    heroImage: '',
    gallery: [],
    processSteps: [],
    faqs: [],
    testimonials: [],
    relatedServices: ['webs-landings', 'marketing'],
    addOns: [],
    integrations: [],
    webhookId: null,

    targetAudience: [],

    i18nKey: 'automatizacion',
  },

  {
    id: 'mantenimiento',
    slug: 'mantenimiento',
    productLine: 'care',

    status: 'active',
    featured: false,
    order: 4,

    pricing: {
      type: 'custom',
      amount: null,
      currency: 'EUR',
      displayLabel: '',
    },

    delivery: {
      label: 'ongoing',
      type: 'ongoing',
    },

    statusBadge: null,

    ctaAction: 'diagnostico',
    ctaParams: { service: 'mantenimiento' },

    pageReady: false,
    seo: { metaTitle: '', metaDescription: '', ogImage: '' },
    heroImage: '',
    gallery: [],
    processSteps: [],
    faqs: [],
    testimonials: [],
    relatedServices: ['webs-landings'],
    addOns: [],
    integrations: [],
    webhookId: null,

    targetAudience: [],

    i18nKey: 'mantenimiento',
  },
];
