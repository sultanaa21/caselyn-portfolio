/**
 * Caselyn — Services Data Model
 * ─────────────────────────────────────────────────────────────────────────────
 * Source of truth for all services. Pure data — no UI, no translations.
 *
 * Architecture:
 *   services-data.js  →  services-i18n.js  →  services-renderer.js
 *
 * To add a service: add an entry to SERVICES.
 * To connect a CMS/API: replace this file with a fetch() call.
 * ─────────────────────────────────────────────────────────────────────────────
 */

'use strict';

// ─── Product Lines ───────────────────────────────────────────────────────────
// Each product line maps to a visual identity (color + label).
// Used in renderer for badge colors and card accents.

const PRODUCT_LINES = {
  launch: {
    id: 'launch',
    color: '#3b82f6',
    bg: 'rgba(59, 130, 246, 0.07)',
  },
  presence: {
    id: 'presence',
    color: '#0a0a0a',
    bg: 'rgba(10, 10, 10, 0.05)',
  },
  care: {
    id: 'care',
    color: '#6366f1',
    bg: 'rgba(99, 102, 241, 0.07)',
  },
  growth: {
    id: 'growth',
    color: '#f59e0b',
    bg: 'rgba(245, 158, 11, 0.07)',
  },
};

// ─── Audit Free Entry Point ───────────────────────────────────────────────────
// Rendered separately as the funnel entry point, above the services grid.

const AUDIT_FREE = {
  id: 'auditoria-gratuita',
  slug: 'auditoria-web-gratuita',
  status: 'active',               // 'active' | 'coming-soon' | 'beta' | 'deprecated'
  pageReady: false,               // true → /servicios/[slug] exists

  pricing: {
    type: 'free',                 // 'free' | 'one-time' | 'monthly' | 'custom'
    amount: 0,
    currency: 'EUR',
    displayLabel: 'Gratis',
  },

  delivery: {
    label: '24h',
    type: 'hours',                // 'hours' | 'days' | 'weeks' | 'ongoing'
  },

  ctaAction: 'contact',           // 'contact' | 'whatsapp' | 'external' | 'modal'
  ctaParams: { service: 'auditoria-gratuita' },

  // Extended fields — for future individual service pages
  seo: { metaTitle: '', metaDescription: '', ogImage: '' },
  heroImage: '',
  gallery: [],
  processSteps: [],
  faqs: [],
  testimonials: [],
  relatedServices: ['landing-page', 'web-premium'],
  addOns: [],
  integrations: [],
  webhookId: null,
  targetAudience: ['todo-tipo-de-negocio'],

  i18nKey: 'auditoria-gratuita',
};

// ─── Core Services Grid ───────────────────────────────────────────────────────

const SERVICES = [
  {
    // ── Identity ────────────────────────────────────────────────────────────
    id: 'landing-page',
    slug: 'landing-page',
    productLine: 'launch',

    // ── Status ──────────────────────────────────────────────────────────────
    status: 'active',
    featured: false,
    order: 1,

    // ── Pricing ─────────────────────────────────────────────────────────────
    pricing: {
      type: 'one-time',
      amount: 100,
      currency: 'EUR',
      displayLabel: '100€',
    },

    // ── Delivery ────────────────────────────────────────────────────────────
    delivery: {
      label: '24h',
      type: 'hours',
    },

    // ── Status badge ────────────────────────────────────────────────────────
    // Guides visitor decision. Rendered as a secondary badge.
    // Values: 'most-popular' | 'fastest' | 'recommended' | 'best-value'
    //         | 'continuous-support' | 'real-diagnosis' | null
    statusBadge: 'fastest',

    // ── CTA ─────────────────────────────────────────────────────────────────
    ctaAction: 'contact',
    ctaParams: { service: 'landing-page' },

    // ── Extended fields (for future /servicios/landing-page) ─────────────
    pageReady: false,
    seo: { metaTitle: '', metaDescription: '', ogImage: '' },
    heroImage: '',
    gallery: [],
    processSteps: [],
    faqs: [],
    testimonials: [],
    relatedServices: ['web-premium', 'auditoria-gratuita'],
    addOns: [],
    integrations: [],
    webhookId: null,

    // ── Target audience ─────────────────────────────────────────────────────
    targetAudience: ['restaurantes', 'comercios', 'servicios', 'nuevos-negocios'],

    // ── i18n key ────────────────────────────────────────────────────────────
    i18nKey: 'landing-page',
  },

  {
    id: 'web-premium',
    slug: 'web-premium',
    productLine: 'presence',

    status: 'active',
    featured: true,
    order: 2,

    pricing: {
      type: 'one-time',
      amount: 350,
      currency: 'EUR',
      displayLabel: '350€',
    },

    delivery: {
      label: '48-72h',
      type: 'hours',
    },

    statusBadge: 'recommended',

    ctaAction: 'contact',
    ctaParams: { service: 'web-premium' },

    pageReady: false,
    seo: { metaTitle: '', metaDescription: '', ogImage: '' },
    heroImage: '',
    gallery: [],
    processSteps: [],
    faqs: [],
    testimonials: [],
    relatedServices: ['landing-page', 'mantenimiento'],
    addOns: [],
    integrations: [],
    webhookId: null,

    targetAudience: ['restaurantes', 'clinicas', 'salones', 'comercios'],

    i18nKey: 'web-premium',
  },

  {
    id: 'mantenimiento',
    slug: 'mantenimiento-mensual',
    productLine: 'care',

    status: 'active',
    featured: false,
    order: 3,

    pricing: {
      type: 'monthly',
      amount: 49,
      currency: 'EUR',
      displayLabel: '49€/mes',
    },

    delivery: {
      label: 'ongoing',
      type: 'ongoing',
    },

    statusBadge: 'continuous-support',

    ctaAction: 'contact',
    ctaParams: { service: 'mantenimiento' },

    pageReady: false,
    seo: { metaTitle: '', metaDescription: '', ogImage: '' },
    heroImage: '',
    gallery: [],
    processSteps: [],
    faqs: [],
    testimonials: [],
    relatedServices: ['web-premium', 'landing-page'],
    addOns: [],
    integrations: [],
    webhookId: null,

    targetAudience: ['webs-publicadas', 'clientes-recurrentes'],

    i18nKey: 'mantenimiento',
  },

  {
    id: 'auditoria-meta-ads',
    slug: 'auditoria-meta-ads',
    productLine: 'growth',

    status: 'active',
    featured: false,
    order: 4,

    pricing: {
      type: 'one-time',
      amount: 100,
      currency: 'EUR',
      displayLabel: '100€',
    },

    delivery: {
      label: '48h',
      type: 'hours',
    },

    statusBadge: 'real-diagnosis',

    ctaAction: 'contact',
    ctaParams: { service: 'auditoria-meta-ads' },

    pageReady: false,
    seo: { metaTitle: '', metaDescription: '', ogImage: '' },
    heroImage: '',
    gallery: [],
    processSteps: [],
    faqs: [],
    testimonials: [],
    relatedServices: ['landing-page', 'web-premium'],
    addOns: [],
    integrations: [],
    webhookId: null,

    targetAudience: ['negocios-con-anuncios'],

    i18nKey: 'auditoria-meta-ads',
  },
];

// ─── Future Services (coming-soon placeholder structure) ──────────────────────
// Add here to reserve a slot before the page exists.
// Renderer will display these as locked/coming-soon cards when enabled.

const FUTURE_SERVICES = [
  { id: 'seo-local', slug: 'seo-local', productLine: 'growth', status: 'coming-soon', order: 5, i18nKey: 'seo-local' },
  { id: 'chatbot-ia', slug: 'chatbot-ia', productLine: 'growth', status: 'coming-soon', order: 6, i18nKey: 'chatbot-ia' },
  { id: 'automatizacion-leads', slug: 'automatizacion-leads', productLine: 'growth', status: 'coming-soon', order: 7, i18nKey: 'automatizacion-leads' },
];
