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

// Close mobile menu when clicking outside
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

// ============================================================================
// FAQ Accordion
// ============================================================================

const faqItems = document.querySelectorAll('.faq-item');

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

contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const submitButton = contactForm.querySelector('button[type="submit"]');
  const originalText = submitButton.textContent;

  // Get form data
  const formData = {
    name: contactForm.name.value.trim(),
    email: contactForm.email.value.trim(),
    message: contactForm.message.value.trim(),
  };

  // Basic validation
  if (!formData.name || !formData.email || !formData.message) {
    alert('Por favor, completa todos los campos');
    return;
  }

  // Disable button and show loading state
  submitButton.disabled = true;
  submitButton.textContent = 'Enviando...';

  try {
    // Simulate form submission (replace with actual endpoint)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Log to console (for development)
    console.log('Form submission:', formData);

    // Show success message
    submitButton.textContent = '¡Mensaje enviado!';
    submitButton.style.backgroundColor = '#10B981';

    // Reset form
    contactForm.reset();

    // Optional: Redirect to WhatsApp as fallback
    setTimeout(() => {
      const whatsappMessage = encodeURIComponent(`Hola, soy ${formData.name}. ${formData.message}`);
      window.open(`https://wa.me/34600000000?text=${whatsappMessage}`, '_blank');
    }, 1500);

    // Reset button after 3 seconds
    setTimeout(() => {
      submitButton.textContent = originalText;
      submitButton.style.backgroundColor = '';
      submitButton.disabled = false;
    }, 3000);
  } catch (error) {
    console.error('Form submission error:', error);

    // Show error message
    submitButton.textContent = 'Error. Inténtalo de nuevo';
    submitButton.style.backgroundColor = '#EF4444';

    // Reset button after 3 seconds
    setTimeout(() => {
      submitButton.textContent = originalText;
      submitButton.style.backgroundColor = '';
      submitButton.disabled = false;
    }, 3000);
  }
});

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
});
