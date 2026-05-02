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
 *   renderServicesSection(lang)  — full render of the services section
 *   rerenderServicesSection(lang) — alias for language change events
 * ─────────────────────────────────────────────────────────────────────────────
 */

'use strict';

// ─── Helpers ──────────────────────────────────────────────────────────────────

/**
 * Build the contact URL with a pre-selected service param.
 * When the user clicks a service CTA, the contact form scrolls into view
 * and the service field is pre-populated.
 *
 * @param {object} service  - from SERVICES
 * @param {object} strings  - service i18n strings
 * @returns {string} href value
 */
function buildCtaHref(service) {
  return `#contacto?service=${encodeURIComponent(service.id)}`;
}

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

// ─── Entry Point — Auditoría Gratuita ────────────────────────────────────────

/**
 * Render the free audit entry block (above the grid).
 *
 * @param {object} auditData - AUDIT_FREE
 * @param {object} strings   - getServiceStrings('auditoria-gratuita', lang)
 * @param {object} ui        - getServicesUiStrings(lang)
 * @returns {string} HTML
 */
function renderAuditEntry(auditData, strings, ui) {
  const includes = (strings.includes || [])
    .map((item) => `
      <li class="service-entry__include-item">
        <svg class="service-entry__include-icon" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <path d="M2.5 7L5.5 10L11.5 4" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span>${esc(item)}</span>
      </li>`)
    .join('');

  return `
    <div class="service-entry fade-in" id="service-audit-free" role="region" aria-label="${esc(strings.title)}">
      <div class="service-entry__badge-row">
        <span class="service-entry__badge-free">${esc(auditData.pricing.displayLabel)} · ${esc(strings.deliveryDisplay)}</span>
        <span class="service-entry__label">${esc(ui.entryLabel)}</span>
      </div>

      <div class="service-entry__body">
        <div class="service-entry__content">
          <h3 class="service-entry__title">${esc(strings.title)}</h3>
          <p class="service-entry__tagline">${esc(strings.tagline)}</p>

          <ul class="service-entry__includes" aria-label="${esc(ui.includesLabel)}">
            ${includes}
          </ul>
        </div>

        <div class="service-entry__action">
          <p class="service-entry__outcome">${esc(strings.outcome)}</p>
          <a
            href="${buildCtaHref(auditData)}"
            class="btn service-entry__cta"
            id="cta-auditoria-gratuita"
            data-service-id="${esc(auditData.id)}"
          >
            ${esc(strings.ctaLabel)}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M3 7h8M7.5 3.5L11 7l-3.5 3.5" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  `;
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
  const pl = PRODUCT_LINES[service.productLine] || PRODUCT_LINES.launch;
  const plLabel = ui.productLines[service.productLine] || service.productLine;

  // Status badge
  const statusBadgeHtml = service.statusBadge
    ? `<span class="service-card__status-badge service-card__status-badge--${esc(service.statusBadge)}">${esc(ui.statusBadges[service.statusBadge] || service.statusBadge)}</span>`
    : '';

  // Delivery display
  const deliveryDisplay =
    service.delivery.type === 'ongoing'
      ? ui.deliveryOngoing
      : strings.deliveryDisplay || service.delivery.label;

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

  // Target audience pills
  const audiencePillsHtml = (service.targetAudience || [])
    .map((key) => {
      const label = ui.targetAudienceLabels[key] || key;
      return `<span class="service-card__audience-pill">${esc(label)}</span>`;
    })
    .join('');

  return `
    <article
      class="service-card service-card--${esc(service.productLine)}${service.featured ? ' service-card--featured' : ''}"
      id="service-${esc(service.id)}"
      data-service-id="${esc(service.id)}"
      data-product-line="${esc(service.productLine)}"
      style="--pl-color: ${pl.color}; --pl-bg: ${pl.bg};"
      aria-label="${esc(strings.title)}"
    >
      <!-- Header: product line + status badge -->
      <div class="service-card__header">
        <span class="service-card__line-badge">${esc(plLabel)}</span>
        ${statusBadgeHtml}
      </div>

      <!-- Title -->
      <h3 class="service-card__title">${esc(strings.title)}</h3>

      <!-- Price — maximum visual hierarchy -->
      <div class="service-card__pricing">
        <span class="service-card__price">${esc(service.pricing.displayLabel)}</span>
        <span class="service-card__delivery">· ${esc(deliveryDisplay)}</span>
      </div>

      <!-- Tagline -->
      <p class="service-card__tagline">${esc(strings.tagline)}</p>

      <!-- Ideal for -->
      ${audiencePillsHtml ? `
        <div class="service-card__audience" aria-label="${esc(ui.idealForLabel)}">
          <span class="service-card__audience-label">${esc(ui.idealForLabel)}</span>
          <div class="service-card__audience-pills">
            ${audiencePillsHtml}
          </div>
        </div>
      ` : ''}

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
        href="${buildCtaHref(service)}"
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

  // Entry point (audit free)
  const auditStrings = getServiceStrings(AUDIT_FREE.i18nKey, lang);
  const entryHtml = renderAuditEntry(AUDIT_FREE, auditStrings, ui);

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
      ${entryHtml}
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

  // Re-attach CTA click handlers (pre-fill contact form)
  container.querySelectorAll('[data-service-id]').forEach((el) => {
    el.addEventListener('click', (e) => {
      const serviceId = el.getAttribute('data-service-id');
      if (serviceId) {
        prefillContactService(serviceId);
      }
    });
  });
}

/**
 * Alias — called on language change.
 * @param {string} lang
 */
function rerenderServicesSection(lang) {
  renderServicesSection(lang);
}

// ─── Contact Form Pre-fill ────────────────────────────────────────────────────

/**
 * Pre-fill the contact form message with the selected service name.
 * Non-blocking: if the form doesn't exist yet, silently skips.
 *
 * @param {string} serviceId
 */
function prefillContactService(serviceId) {
  const messageField = document.getElementById('message');
  if (!messageField || messageField.value.trim() !== '') return;

  const lang = localStorage.getItem('caselyn-lang') || 'es';
  const strings = getServiceStrings(serviceId, lang);
  if (strings.title) {
    messageField.value = strings.title + ' — ';
    messageField.focus();
    // Move cursor to end
    const len = messageField.value.length;
    messageField.setSelectionRange(len, len);
  }
}
