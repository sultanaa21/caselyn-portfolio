/**
 * Caselyn — Servicio Mantenimiento Page Script
 * ─────────────────────────────────────────────────────────────────────────────
 * Shared script pattern for service pages (/servicios/*).
 * Handles: navbar scroll/toggle, fade-in observer.
 * ─────────────────────────────────────────────────────────────────────────────
 */

'use strict';

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
  observeFadeElements();
});
