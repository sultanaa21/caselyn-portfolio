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
function renderServiceCard(service, strings, ui) {
  const pl = PRODUCT_LINES[service.productLine] || PRODUCT_LINES.web;

  // Includes list
  const includesHtml = (strings.includes || [])
    .map((item) => `
      <li class="service-card__include-item">
        <svg class="service-card__include-icon" width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <path d="M2.5 7L5.5 10L11.5 4" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span>${esc(item)}</span>
      </li>`)
    .join('');

  return `
    <article
      class="service-card service-card--${esc(service.productLine)}"
      id="service-${esc(service.id)}"
      data-service-id="${esc(service.id)}"
      data-product-line="${esc(service.productLine)}"
      style="--pl-color: ${pl.color}; --pl-bg: ${pl.bg};"
      aria-label="${esc(strings.title)}"
    >
      <!-- Title -->
      <h3 class="service-card__title">${esc(strings.title)}</h3>

      <!-- Tagline -->
      <p class="service-card__tagline">${esc(strings.tagline)}</p>

      <!-- Divider -->
      <hr class="service-card__divider" />

      <!-- Includes -->
      <ul class="service-card__includes" aria-label="${esc(ui.includesLabel)}">
        ${includesHtml}
      </ul>

      <!-- Outcome -->
      <p class="service-card__outcome">${esc(strings.outcome)}</p>

      <!-- CTA -->
      <a
        href="/contacto"
        class="btn service-card__cta"
        id="cta-${esc(service.id)}"
        data-service-id="${esc(service.id)}"
      >
        ${esc(strings.ctaLabel)}
        <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <path d="M3 7h8M7.5 3.5L11 7l-3.5 3.5" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </a>
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
      return renderServiceCard(service, strings, ui);
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
