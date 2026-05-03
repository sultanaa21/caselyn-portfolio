import { PORTFOLIO_PROJECTS } from './portfolio-data.js';

/**
 * Portfolio Renderer
 * Generates uniform, premium portfolio cards from data.
 * All cards share the same visual structure — no hero overrides.
 */

export function renderPortfolioGrid() {
  const container = document.getElementById('portfolio-container');
  if (!container) return;

  /**
   * Generates a premium wireframe-style SVG placeholder
   * when no real thumbnail is available.
   * Uses the project's accent color for subtle branding.
   */
  const getMockSvg = (project) => {
    const color = project.accentColor || '#3b82f6';
    return `
      <svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg" class="portfolio-card__mock-svg" aria-hidden="true">
        <defs>
          <linearGradient id="bg-${project.slug}" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="var(--color-background)" />
            <stop offset="100%" stop-color="${color}" stop-opacity="0.06" />
          </linearGradient>
        </defs>

        <!-- Background -->
        <rect width="800" height="500" fill="url(#bg-${project.slug})" />

        <!-- Browser chrome bar -->
        <rect x="40" y="32" width="720" height="36" rx="6" fill="var(--color-surface)" />
        <circle cx="68" cy="50" r="5" fill="${color}" opacity="0.35" />
        <circle cx="86" cy="50" r="5" fill="${color}" opacity="0.2" />
        <circle cx="104" cy="50" r="5" fill="${color}" opacity="0.12" />
        <rect x="280" y="42" width="240" height="16" rx="8" fill="var(--color-border)" opacity="0.5" />

        <!-- Content area -->
        <rect x="40" y="72" width="720" height="396" rx="0 0 6 6" fill="var(--color-surface)" stroke="var(--color-border)" stroke-width="1" />

        <!-- Hero text block -->
        <rect x="80" y="120" width="280" height="20" rx="4" fill="${color}" opacity="0.18" />
        <rect x="80" y="152" width="220" height="14" rx="3" fill="var(--color-border)" opacity="0.7" />
        <rect x="80" y="176" width="180" height="14" rx="3" fill="var(--color-border)" opacity="0.5" />

        <!-- CTA button -->
        <rect x="80" y="212" width="120" height="36" rx="8" fill="${color}" opacity="0.2" />

        <!-- Image placeholder -->
        <rect x="420" y="100" width="300" height="200" rx="8" fill="${color}" opacity="0.07" />
        <circle cx="570" cy="200" r="30" fill="${color}" opacity="0.12" />

        <!-- Bottom bar -->
        <rect x="80" y="380" width="640" height="1" fill="var(--color-border)" opacity="0.4" />
        <rect x="80" y="400" width="100" height="10" rx="3" fill="var(--color-border)" opacity="0.4" />
        <rect x="240" y="400" width="80" height="10" rx="3" fill="var(--color-border)" opacity="0.3" />
        <rect x="380" y="400" width="80" height="10" rx="3" fill="var(--color-border)" opacity="0.3" />

        <!-- Project name watermark -->
        <text x="400" y="480" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="${color}" opacity="0.25" text-anchor="middle" letter-spacing="0.15em" font-weight="500">${project.title.toUpperCase()}</text>
      </svg>
    `;
  };

  container.innerHTML = PORTFOLIO_PROJECTS
    .filter(p => p.status === 'published')
    .sort((a, b) => a.featuredOrder - b.featuredOrder)
    .map(project => {
      // Image: real thumbnail or premium SVG mock
      let imageContent = '';
      if (project.thumbnail) {
        imageContent = `
          <picture>
            <source media="(max-width: 600px)" srcset="${project.thumbnail.mobile}">
            <img src="${project.thumbnail.desktop}"
                 alt="${project.thumbnail.alt}"
                 loading="lazy"
                 class="portfolio-card__img">
          </picture>
          <div class="portfolio-card__overlay"></div>
        `;
      } else {
        imageContent = getMockSvg(project);
      }

      // Stack pills
      const stackPills = project.stack
        .map((t, i) => `<span class="portfolio-card__tech-pill" data-i18n="portfolio.${project.slug}.stack.${i}">${t}</span>`)
        .join('');

      // CTA label — only "Ver proyecto" for real links
      const hasLiveUrl = project.liveUrl && project.liveUrl !== '#';
      const ctaLabel = hasLiveUrl ? 'Ver proyecto' : 'Próximamente';
      const ctaI18n = hasLiveUrl ? 'portfolio.cta.live' : 'portfolio.cta.soon';
      const ctaTag = hasLiveUrl
        ? `<a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="portfolio-card__link-wrapper">`
        : `<div class="portfolio-card__link-wrapper portfolio-card__link-wrapper--disabled">`;
      const ctaCloseTag = hasLiveUrl ? '</a>' : '</div>';

      return `
        <article class="portfolio-card" id="${project.id}" style="--project-accent: ${project.accentColor}">
          ${ctaTag}
            <div class="portfolio-card__image">
              ${imageContent}
            </div>

            <div class="portfolio-card__body">
              <div class="portfolio-card__header">
                <h3 class="portfolio-card__title" data-i18n="portfolio.${project.slug}.title">${project.title}</h3>
                ${project.featured ? `<span class="portfolio-card__badge" data-i18n="portfolio.badge.featured">Destacado</span>` : ''}
              </div>

              <p class="portfolio-card__tagline" data-i18n="portfolio.${project.slug}.tagline">${project.tagline || project.shortDescription}</p>

              <div class="portfolio-card__meta">
                <span class="portfolio-card__category" data-i18n="portfolio.${project.slug}.category">${project.category}</span>
                <span class="portfolio-card__dot">·</span>
                <span class="portfolio-card__year">${project.year}</span>
              </div>

              <div class="portfolio-card__stack">
                ${stackPills}
              </div>

              <div class="portfolio-card__cta">
                <span class="portfolio-card__cta-label" data-i18n="${ctaI18n}">${ctaLabel}</span>
                <svg class="portfolio-card__cta-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
            </div>
          ${ctaCloseTag}
        </article>
      `;
    }).join('');

  // Re-apply translations if the i18n system is already loaded
  const applyTrans = window.applyTranslations || (typeof applyTranslations === 'function' ? applyTranslations : null);
  if (applyTrans) {
    const savedLang = localStorage.getItem('caselyn-lang') || document.documentElement.lang || 'es';
    applyTrans(savedLang);
  }
}

// Expose for external triggers
window.renderPortfolioGrid = renderPortfolioGrid;

// Auto-init
document.addEventListener('DOMContentLoaded', renderPortfolioGrid);
