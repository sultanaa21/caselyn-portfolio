/**
 * Caselyn Portfolio - Interactive Features
 */

// ============================================================================
// Navigation Functionality
// ============================================================================

const navbar = document.getElementById('navbar');
const navbarToggle = document.getElementById('navbar-toggle');
const navbarMenu = document.getElementById('navbar-menu');

// Add glass effect to navbar on scroll
let scrollTimeout;
window.addEventListener('scroll', () => {
  clearTimeout(scrollTimeout);

  scrollTimeout = setTimeout(() => {
    if (window.scrollY > 50) {
      navbar.classList.add('navbar-scrolled');
    } else {
      navbar.classList.remove('navbar-scrolled');
    }
  }, 10);
});

// Mobile menu toggle
if (navbarToggle && navbarMenu) {
  navbarToggle.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');

    // Update aria-expanded
    const isExpanded = navbarMenu.classList.contains('active');
    navbarToggle.setAttribute('aria-expanded', isExpanded);

    // Animate hamburger icon
    const spans = navbarToggle.querySelectorAll('span');
    if (isExpanded) {
      spans[0].style.transform = 'rotate(45deg) translateY(7px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translateY(-7px)';
    } else {
      spans[0].style.transform = '';
      spans[1].style.opacity = '';
      spans[2].style.transform = '';
    }
  });

  // Close mobile menu when clicking a link
  navbarMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navbarMenu.classList.remove('active');
      navbarToggle.setAttribute('aria-expanded', 'false');

      const spans = navbarToggle.querySelectorAll('span');
      spans[0].style.transform = '';
      spans[1].style.opacity = '';
      spans[2].style.transform = '';
    });
  });
}

// Close mobile menu when clicking outside
if (navbar && navbarMenu && navbarToggle) {
  document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target) && navbarMenu.classList.contains('active')) {
      navbarMenu.classList.remove('active');
      navbarToggle.setAttribute('aria-expanded', 'false');

      const spans = navbarToggle.querySelectorAll('span');
      spans[0].style.transform = '';
      spans[1].style.opacity = '';
      spans[2].style.transform = '';
    }
  });
}

// ============================================================================
// FAQ Accordion
// ============================================================================

const faqItems = document.querySelectorAll('.faq-item');

if (faqItems.length > 0) {
  faqItems.forEach((item) => {
    const question = item.querySelector('.faq-question');

    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all other items
      faqItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          otherItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
        }
      });

      // Toggle current item
      if (isActive) {
        item.classList.remove('active');
        question.setAttribute('aria-expanded', 'false');
      } else {
        item.classList.add('active');
        question.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

// ============================================================================
// Scroll Animations
// ============================================================================

// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px',
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      // Unobserve after animation to improve performance
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all fade-in elements
const fadeElements = document.querySelectorAll('.fade-in');
fadeElements.forEach((el) => observer.observe(el));

// ============================================================================
// Contact Form Handling
// ============================================================================

const contactForm = document.getElementById('contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;

    // Get form data
    const formData = {
      name: contactForm.name.value.trim(),
      email: contactForm.email.value.trim(),
      phone: contactForm.phone ? contactForm.phone.value.trim() : '',
      message: contactForm.message.value.trim(),
      website: contactForm.website ? contactForm.website.value : '', // Honeypot field
    };

    // Basic client-side validation
    if (!formData.name || !formData.message) {
      showFormMessage(submitButton, 'Por favor, completa todos los campos obligatorios', 'error');
      return;
    }

    if (!formData.email) {
      showFormMessage(submitButton, 'Introduce tu email', 'error');
      return;
    }

    if (formData.message.length < 10) {
      showFormMessage(submitButton, 'El mensaje debe tener al menos 10 caracteres', 'error');
      return;
    }

    if (formData.message.length > 5000) {
      showFormMessage(
        submitButton,
        'El mensaje es demasiado largo (máximo 5000 caracteres)',
        'error'
      );
      return;
    }

    // Disable button and show loading state
    submitButton.disabled = true;
    submitButton.textContent = 'Enviando...';
    submitButton.style.opacity = '0.7';

    try {
      // Send to serverless function
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.ok) {
        // Success! Show success message
        submitButton.textContent = 'Enviado correctamente';
        submitButton.style.backgroundColor = '#10B981';
        submitButton.style.opacity = '1';

        // Show success notification
        showSuccessNotification();

        // Reset form
        contactForm.reset();

        // Reset button after 4 seconds
        setTimeout(() => {
          submitButton.textContent = originalText;
          submitButton.style.backgroundColor = '';
          submitButton.disabled = false;
        }, 4000);
      } else {
        // Server returned error
        const errorMessage = result.error || 'Error al enviar. Intenta de nuevo.';
        showFormMessage(submitButton, errorMessage, 'error');

        // Reset button after 4 seconds
        setTimeout(() => {
          submitButton.textContent = originalText;
          submitButton.style.backgroundColor = '';
          submitButton.style.opacity = '';
          submitButton.disabled = false;
        }, 4000);
      }
    } catch (error) {
      console.error('Form submission error:', error);

      // Network or unexpected error
      showFormMessage(
        submitButton,
        'Error de conexión. Por favor, intenta de nuevo o contacta por WhatsApp.',
        'error'
      );

      // Reset button after 4 seconds
      setTimeout(() => {
        submitButton.textContent = originalText;
        submitButton.style.backgroundColor = '';
        submitButton.style.opacity = '';
        submitButton.disabled = false;
      }, 4000);
    }
  });
} // end if (contactForm)

/**
 * Show temporary message on submit button
 */
function showFormMessage(button, message, type = 'error') {
  if (type === 'error') {
    button.textContent = message;
    button.style.backgroundColor = '#EF4444';
  } else if (type === 'success') {
    button.textContent = message;
    button.style.backgroundColor = '#10B981';
  }

  button.style.opacity = '1';
}

/**
 * Show success notification below the form
 */
function showSuccessNotification() {
  // Check if notification already exists
  let notification = document.getElementById('form-success-notification');

  if (!notification) {
    // Create notification element
    notification = document.createElement('div');
    notification.id = 'form-success-notification';
    notification.style.cssText = `
      margin-top: 20px;
      padding: 16px 20px;
      background: linear-gradient(135deg, #10B981 0%, #059669 100%);
      color: white;
      border-radius: 8px;
      font-weight: 500;
      text-align: center;
      box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
      animation: slideIn 0.3s ease-out;
    `;
    notification.innerHTML = `
      <div style="display: flex; align-items: center; justify-content: center; gap: 10px;">
        <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="flex-shrink: 0;">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <span>¡Mensaje enviado! Responderemos en menos de 24h.</span>
      </div>
    `;

    // Insert after form
    contactForm.parentNode.insertBefore(notification, contactForm.nextSibling);

    // Add animation
    const style = document.createElement('style');
    style.textContent = `
      @keyframes slideIn {
        from {
          opacity: 0;
          transform: translateY(-10px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `;
    document.head.appendChild(style);

    // Auto-remove after 8 seconds
    setTimeout(() => {
      notification.style.animation = 'slideIn 0.3s ease-out reverse';
      setTimeout(() => {
        notification.remove();
      }, 300);
    }, 8000);
  }
}

// ============================================================================
// Smooth Scroll (for older browsers that don't support CSS scroll-behavior)
// ============================================================================

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');

    // Don't prevent default for # only (used for logo)
    if (href === '#') return;

    e.preventDefault();

    const target = document.querySelector(href);
    if (target) {
      const offsetTop = target.offsetTop - 80; // Account for fixed navbar

      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  });
});

// ============================================================================
// Performance: Reduce motion for users who prefer it
// ============================================================================

if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  // Remove animations for users who prefer reduced motion
  document.querySelectorAll('.fade-in').forEach((el) => {
    el.classList.add('visible');
  });
}

// ============================================================================
// Initialize: Add visible class to elements already in viewport
// ============================================================================

window.addEventListener('DOMContentLoaded', () => {
  fadeElements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      el.classList.add('visible');
    }
  });

  // ============================================================================
  // Language Selector — Data-Driven Dropdown
  // ============================================================================

  /**
   * Language options shown in the selector.
   * Add new entries here to support more languages — the UI adapts automatically.
   * CA (Catalan) translations remain in translations.js but are hidden from
   * the visible selector per design decision.
   */
  const LANG_OPTIONS = [
    { 
      code: 'es', 
      label: 'Español',
      flag: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 12" width="18" height="12" style="border-radius:3px"><rect width="18" height="12" fill="#AA151B"/><rect width="18" height="6" y="3" fill="#F1BF00"/></svg>`
    },
    { 
      code: 'en', 
      label: 'English',
      flag: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 12" width="18" height="12" style="border-radius:3px"><rect width="18" height="12" fill="#012169"/><path d="M0,0 L18,12 M18,0 L0,12" stroke="#fff" stroke-width="2"/><path d="M0,0 L18,12 M18,0 L0,12" stroke="#C8102E" stroke-width="1"/><path d="M9,0 v12 M0,6 h18" stroke="#fff" stroke-width="3"/><path d="M9,0 v12 M0,6 h18" stroke="#C8102E" stroke-width="2"/></svg>`
    },
    { 
      code: 'fr', 
      label: 'Français',
      flag: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 12" width="18" height="12" style="border-radius:3px"><rect width="18" height="12" fill="#ED2939"/><rect width="12" height="12" fill="#fff"/><rect width="6" height="12" fill="#002395"/></svg>`
    },
  ];

  const langSelector = document.getElementById('lang-selector');
  const langTrigger = document.getElementById('lang-trigger');
  const langTriggerLabel = document.getElementById('lang-trigger-label');
  const langDropdown = document.getElementById('lang-dropdown');

  if (langSelector && langTrigger && langDropdown) {
    const savedLang = localStorage.getItem('caselyn-lang') || 'es';
    let currentLang = savedLang;

    // --- Render dropdown items from config ---
    const renderLangOptions = () => {
      langDropdown.innerHTML = '';
      LANG_OPTIONS.forEach(({ code, label }) => {
        const btn = document.createElement('button');
        btn.className = 'lang-option' + (code === currentLang ? ' active' : '');
        btn.setAttribute('data-lang', code);
        btn.setAttribute('type', 'button');
        const langConfig = LANG_OPTIONS.find(opt => opt.code === code);
        btn.innerHTML = `
          <span style="display:flex; align-items:center; gap:8px;">
            ${langConfig.flag}
            <span>${label}</span>
          </span>
        `;
        langDropdown.appendChild(btn);
      });
    };

    // --- Update trigger label and dropdown active state ---
    const setActiveLang = (lang) => {
      currentLang = lang;
      const langConfig = LANG_OPTIONS.find((opt) => opt.code === lang) || LANG_OPTIONS[0];
      langTriggerLabel.innerHTML = `
        <span style="display:flex; align-items:center; gap:6px;">
          ${langConfig.flag}
          <span>${langConfig.code.toUpperCase()}</span>
        </span>
      `;
      langDropdown.querySelectorAll('.lang-option').forEach((btn) => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
      });
    };

    // --- Open / Close ---
    const openDropdown = () => {
      langSelector.classList.add('open');
      langTrigger.setAttribute('aria-expanded', 'true');
    };

    const closeDropdown = () => {
      langSelector.classList.remove('open');
      langTrigger.setAttribute('aria-expanded', 'false');
    };

    const toggleDropdown = () => {
      if (langSelector.classList.contains('open')) {
        closeDropdown();
      } else {
        openDropdown();
      }
    };

    // --- Select a language ---
    const selectLang = (lang) => {
      if (lang === currentLang) {
        closeDropdown();
        return;
      }
      setActiveLang(lang);
      localStorage.setItem('caselyn-lang', lang);
      applyTranslations(lang);  // eslint-disable-line no-undef -- defined in translations.js
      closeDropdown();
    };

    // --- Desktop hover intent (only on non-touch devices) ---
    const isDesktop = () => window.matchMedia('(min-width: 769px)').matches;
    let hoverTimeout = null;

    langSelector.addEventListener('mouseenter', () => {
      if (!isDesktop()) return;
      clearTimeout(hoverTimeout);
      hoverTimeout = setTimeout(openDropdown, 80);
    });

    langSelector.addEventListener('mouseleave', () => {
      if (!isDesktop()) return;
      clearTimeout(hoverTimeout);
      hoverTimeout = setTimeout(closeDropdown, 120);
    });

    // --- Click / tap toggle ---
    langTrigger.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleDropdown();
    });

    // --- Delegate click on dropdown options ---
    langDropdown.addEventListener('click', (e) => {
      const option = e.target.closest('.lang-option');
      if (option) {
        e.stopPropagation();
        selectLang(option.dataset.lang);
      }
    });

    // --- Close on outside click ---
    document.addEventListener('click', (e) => {
      if (!langSelector.contains(e.target)) {
        closeDropdown();
      }
    });

    // --- Keyboard accessibility ---
    langTrigger.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleDropdown();
      } else if (e.key === 'Escape') {
        closeDropdown();
        langTrigger.focus();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        openDropdown();
        const first = langDropdown.querySelector('.lang-option');
        if (first) first.focus();
      }
    });

    langDropdown.addEventListener('keydown', (e) => {
      const options = [...langDropdown.querySelectorAll('.lang-option')];
      const idx = options.indexOf(document.activeElement);

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        const next = options[idx + 1] || options[0];
        next.focus();
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        const prev = options[idx - 1] || options[options.length - 1];
        prev.focus();
      } else if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        if (options[idx]) selectLang(options[idx].dataset.lang);
      } else if (e.key === 'Escape') {
        closeDropdown();
        langTrigger.focus();
      }
    });

    // --- Initialize ---
    renderLangOptions();
    setActiveLang(currentLang);
    applyTranslations(currentLang);  // eslint-disable-line no-undef
  }
});
