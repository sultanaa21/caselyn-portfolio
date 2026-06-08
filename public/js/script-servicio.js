/**
 * Caselyn — Servicio Page Script
 * ─────────────────────────────────────────────────────────────────────────────
 * Shared script for individual service pages (/servicios/*).
 * Handles: navbar scroll/toggle, fade-in observer, portfolio inline render.
 * ─────────────────────────────────────────────────────────────────────────────
 */

'use strict';

// ============================================================================
// Portfolio data (inline — no ES module import needed)
// ============================================================================

const SV_PROJECTS = [
  {
    id: 'project-melt',
    slug: 'melt',
    title: 'MELT',
    category: 'Hamburguesería',
    type: 'Concepto',
    accentColor: '#F59E0B',
    thumbnail: {
      desktop: '/images/portfolio/melt-desktop.avif',
      desktopFallback: '/images/portfolio/melt-desktop.png',
      mobile: '/images/portfolio/melt-mobile.avif',
      mobileFallback: '/images/portfolio/melt-mobile.png',
      alt: 'MELT Hamburguesería — diseño oscuro con acento ámbar',
    },
    tagline: 'Web visual para presentar marca, producto y contacto de forma clara.',
    liveUrl: 'https://web-hambu.vercel.app/',
  },
  {
    id: 'project-juicy-brava',
    slug: 'juicy-brava',
    title: 'Juicy Brava',
    category: 'Batidos & Smoothies',
    type: 'Concepto',
    accentColor: '#2d4a3e',
    thumbnail: {
      desktop: '/images/portfolio/juicy-brava-desktop.avif',
      desktopFallback: '/images/portfolio/juicy-brava-desktop.png',
      mobile: '/images/portfolio/juicy-brava-mobile.avif',
      mobileFallback: '/images/portfolio/juicy-brava-mobile.png',
      alt: 'Juicy Brava — batidos frescos en la Costa Brava',
    },
    tagline: 'Landing para negocio de batidos frescos en la Costa Brava.',
    liveUrl: 'https://juicy-brava.vercel.app/',
  },
  {
    id: 'project-azul-croissant',
    slug: 'azul-croissant',
    title: 'Azul Croissant',
    category: 'Panadería & Café',
    type: 'Concepto',
    accentColor: '#0EA5E9',
    thumbnail: {
      desktop: '/images/portfolio/azul-croissant-desktop.avif',
      desktopFallback: '/images/portfolio/azul-croissant-desktop.png',
      mobile: '/images/portfolio/azul-croissant-mobile.avif',
      mobileFallback: '/images/portfolio/azul-croissant-mobile.png',
      alt: 'Azul Croissant — panadería artesanal',
    },
    tagline: 'Web para panadería artesanal con carta, ubicación y pedidos.',
    liveUrl: 'https://web-4-topaz.vercel.app',
  },
];

// ============================================================================
// i18n helper
// ============================================================================

function svGetLang() {
  return localStorage.getItem('caselyn-lang') || 'es';
}

function svT(key) {
  const lang = svGetLang();
  const tr = window.translations;
  if (tr && tr[lang] && tr[lang][key]) return tr[lang][key];
  if (tr && tr['es'] && tr['es'][key]) return tr['es'][key];
  return '';
}

// ============================================================================
// Portfolio render
// ============================================================================

function renderSvPortfolio() {
  const container = document.getElementById('sv-portfolio-container');
  if (!container) return;

  container.innerHTML = SV_PROJECTS.map((p) => {
    const hasLive = p.liveUrl && p.liveUrl !== '#';
    const wrapOpen = hasLive
      ? `<a href="${p.liveUrl}" target="_blank" rel="noopener noreferrer" class="portfolio-card__link-wrapper">`
      : `<div class="portfolio-card__link-wrapper portfolio-card__link-wrapper--disabled">`;
    const wrapClose = hasLive ? '</a>' : '</div>';

    const img = p.thumbnail
      ? `<picture>
           <source media="(max-width:600px)" srcset="${p.thumbnail.mobile}" type="image/avif">
           <source srcset="${p.thumbnail.desktop}" type="image/avif">
           <source media="(max-width:600px)" srcset="${p.thumbnail.mobileFallback}" type="image/webp">
           <source srcset="${p.thumbnail.desktopFallback}" type="image/webp">
           <img src="${p.thumbnail.desktopFallback}" alt="${p.thumbnail.alt}"
                loading="lazy" decoding="async" width="800" height="500"
                class="portfolio-card__img">
         </picture>
         <div class="portfolio-card__overlay"></div>`
      : '';

    return `
      <article class="portfolio-card" id="${p.id}" style="--project-accent:${p.accentColor}">
        ${wrapOpen}
          <div class="portfolio-card__image">${img}</div>
          <div class="portfolio-card__body">
            <div class="portfolio-card__header">
              <h3 class="portfolio-card__title">${p.title}</h3>
            </div>
            <p class="portfolio-card__tagline">${p.tagline}</p>
            <div class="portfolio-card__meta">
              <span class="portfolio-card__category">${p.category}</span>
              <span class="portfolio-card__dot">·</span>
              <span class="portfolio-card__year">${p.type}</span>
            </div>
            <div class="portfolio-card__cta">
              <span class="portfolio-card__cta-label">${hasLive ? (svT('portfolio.cta.live') || 'Ver proyecto') : (svT('portfolio.cta.soon') || 'Próximamente')}</span>
              <svg class="portfolio-card__cta-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </div>
          </div>
        ${wrapClose}
      </article>`;
  }).join('');
}

// ============================================================================
// Navbar
// ============================================================================

const navbar       = document.getElementById('navbar');
const navbarToggle = document.getElementById('navbar-toggle');
const navbarMenu   = document.getElementById('navbar-menu');

let scrollTimeout;
window.addEventListener('scroll', () => {
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => {
    if (navbar) navbar.classList.toggle('navbar-scrolled', window.scrollY > 50);
  }, 10);
});

if (navbarToggle && navbarMenu) {
  navbarToggle.addEventListener('click', () => {
    const open = navbarMenu.classList.toggle('active');
    navbarToggle.setAttribute('aria-expanded', open);
    const spans = navbarToggle.querySelectorAll('span');
    spans[0].style.transform = open ? 'rotate(45deg) translateY(7px)' : '';
    spans[1].style.opacity   = open ? '0' : '';
    spans[2].style.transform = open ? 'rotate(-45deg) translateY(-7px)' : '';
  });

  // Close on link click
  navbarMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navbarMenu.classList.remove('active');
      navbarToggle.setAttribute('aria-expanded', 'false');
      const spans = navbarToggle.querySelectorAll('span');
      spans[0].style.transform = '';
      spans[1].style.opacity   = '';
      spans[2].style.transform = '';
    });
  });
}

// Close on outside click
document.addEventListener('click', (e) => {
  if (navbar && !navbar.contains(e.target) && navbarMenu && navbarMenu.classList.contains('active')) {
    navbarMenu.classList.remove('active');
    navbarToggle.setAttribute('aria-expanded', 'false');
    const spans = navbarToggle.querySelectorAll('span');
    spans[0].style.transform = '';
    spans[1].style.opacity   = '';
    spans[2].style.transform = '';
  }
});

// ============================================================================
// Fade-in observer
// ============================================================================

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

function observeFadeElements() {
  document.querySelectorAll('.fade-in').forEach((el) => {
    if (!el.classList.contains('visible')) observer.observe(el);
  });
}

// Reduced motion
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.querySelectorAll('.fade-in').forEach((el) => el.classList.add('visible'));
}

// ============================================================================
// Init
// ============================================================================

document.addEventListener('DOMContentLoaded', () => {
  renderSvPortfolio();
  observeFadeElements();

  // Re-render portfolio cards when language changes so CTA labels translate
  window.rerenderServicesSection = function () {
    renderSvPortfolio();
  };
});
