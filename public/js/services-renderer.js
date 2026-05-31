/* eslint-disable no-undef */
/**
 * Caselyn — Services Renderer
 * ─────────────────────────────────────────────────────────────────────────────
 * Reads from services-data.js and services-i18n.js.
 * No data logic. No translations. Just DOM generation.
 *
 * Architecture:
 *   services-data.js  →  services-i18n.js  →  services-renderer.js  →  DOM
 *
 * Public API:
 *   renderServicesSection(lang)   — full render of the services section
 *   rerenderServicesSection(lang) — alias for language change events
 * ─────────────────────────────────────────────────────────────────────────────
 */

'use strict';

// ─── Helpers ──────────────────────────────────────────────────────────────────

/**
 * Escape HTML to prevent injection.
 * @param {string} str
 * @returns {string}
 */
function esc(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// ─── Service Card ─────────────────────────────────────────────────────────────

/**
 * Render a single service card.
 *
 * @param {object} service  - from SERVICES
 * @param {object} strings  - getServiceStrings(service.i18nKey, lang)
 * @param {object} ui       - getServicesUiStrings(lang)
 * @returns {string} HTML
 */
function renderServiceCard(service, strings) {
  const pl = PRODUCT_LINES[service.productLine] || PRODUCT_LINES.web;

  // Map service id to its detail page (add more as pages are created)
  const SERVICE_PAGES = {
    'webs-landings': '/servicios/webs-y-landings',
    'marketing': '/servicios/marketing',
    'automatizacion': '/servicios/automatizacion',
    'mantenimiento': '/servicios/mantenimiento',
  };
  const pageUrl = SERVICE_PAGES[service.id] || null;

  const inner = `
    <h3 class="service-card__title">${esc(strings.title)}</h3>
    <p class="service-card__tagline">${esc(strings.tagline)}</p>
    ${pageUrl ? `<a href="${pageUrl}" class="btn btn-primary service-card__btn">Ver servicio</a>` : ''}
  `;

  if (pageUrl) {
    return `
      <article
        class="service-card service-card--${esc(service.productLine)} service-card--link"
        id="service-${esc(service.id)}"
        style="--pl-color: ${pl.color}; --pl-bg: ${pl.bg};"
      >
        ${inner}
      </article>
    `;
  }

  return `
    <article
      class="service-card service-card--${esc(service.productLine)}"
      id="service-${esc(service.id)}"
      style="--pl-color: ${pl.color}; --pl-bg: ${pl.bg};"
    >
      ${inner}
    </article>
  `;
}

// ─── Section Header ───────────────────────────────────────────────────────────

function renderSectionHeader(ui) {
  return `
    <div class="section-header fade-in" id="servicios-header">
      <h2 class="section-title">${esc(ui.sectionTitle)}</h2>
      <p class="section-description">${esc(ui.sectionSubtitle)}</p>
    </div>
  `;
}

// ─── Main Render Function ─────────────────────────────────────────────────────

/**
 * Render the complete services section into #servicios.
 * Called on init and on every language change.
 *
 * @param {string} lang - 'es' | 'ca' | 'en' | 'fr'
 */
function renderServicesSection(lang) {
  const container = document.getElementById('servicios');
  if (!container) return;

  const ui = getServicesUiStrings(lang);

  // Section header
  const headerHtml = renderSectionHeader(ui);

  // Services grid — sorted by order
  const sortedServices = [...SERVICES].sort((a, b) => a.order - b.order);
  const cardsHtml = sortedServices
    .map((service) => {
      const strings = getServiceStrings(service.i18nKey, lang);
      return renderServiceCard(service, strings);
    })
    .join('');

  const gridHtml = `
    <div class="services-grid-v2" role="list" aria-label="Servicios">
      ${cardsHtml}
    </div>
  `;

  // Inject
  container.innerHTML = `
    <div class="container">
      ${headerHtml}
      ${gridHtml}
    </div>
  `;

  // Re-observe fade-in elements (IntersectionObserver from script.js)
  if (typeof observer !== 'undefined') {
    container.querySelectorAll('.fade-in').forEach((el) => {
      el.classList.remove('visible');
      observer.observe(el);
    });
  }
}

/**
 * Alias — called on language change.
 * @param {string} lang
 */
function rerenderServicesSection(lang) {
  renderServicesSection(lang);
}
