/**
 * Caselyn — Diagnóstico Form Handler
 * ─────────────────────────────────────────────────────────────────────────────
 * Form submit, validation, country picker, i18n, language selector.
 * ─────────────────────────────────────────────────────────────────────────────
 */

'use strict';

// ============================================================================
// Country / prefix data
// ============================================================================

/**
 * PINNED — shown first, always, regardless of search.
 * Format: [flag, name, dialCode]
 */
const PINNED_COUNTRIES = [
  ['🇪🇸', 'España',          '+34'],
  ['🇫🇷', 'Francia',         '+33'],
  ['🇦🇩', 'Andorra',         '+376'],
  ['🇬🇧', 'Reino Unido',     '+44'],
  ['🇺🇸', 'Estados Unidos',  '+1'],
];

/**
 * FULL LIST — alphabetical, shown after pinned (with a divider).
 * Add more entries here to extend coverage.
 * Format: [flag, name, dialCode]
 */
const ALL_COUNTRIES = [
  ['🇦🇫', 'Afganistán',            '+93'],
  ['🇦🇱', 'Albania',               '+355'],
  ['🇩🇿', 'Argelia',               '+213'],
  ['🇦🇴', 'Angola',                '+244'],
  ['🇦🇷', 'Argentina',             '+54'],
  ['🇦🇲', 'Armenia',               '+374'],
  ['🇦🇺', 'Australia',             '+61'],
  ['🇦🇹', 'Austria',               '+43'],
  ['🇦🇿', 'Azerbaiyán',            '+994'],
  ['🇧🇭', 'Baréin',                '+973'],
  ['🇧🇩', 'Bangladés',             '+880'],
  ['🇧🇾', 'Bielorrusia',           '+375'],
  ['🇧🇪', 'Bélgica',               '+32'],
  ['🇧🇴', 'Bolivia',               '+591'],
  ['🇧🇦', 'Bosnia y Herzegovina',  '+387'],
  ['🇧🇷', 'Brasil',                '+55'],
  ['🇧🇬', 'Bulgaria',              '+359'],
  ['🇨🇦', 'Canadá',                '+1'],
  ['🇨🇱', 'Chile',                 '+56'],
  ['🇨🇳', 'China',                 '+86'],
  ['🇨🇴', 'Colombia',              '+57'],
  ['🇨🇷', 'Costa Rica',            '+506'],
  ['🇭🇷', 'Croacia',               '+385'],
  ['🇨🇺', 'Cuba',                  '+53'],
  ['🇩🇰', 'Dinamarca',             '+45'],
  ['🇪🇨', 'Ecuador',               '+593'],
  ['🇪🇬', 'Egipto',                '+20'],
  ['🇦🇪', 'Emiratos Árabes Unidos','+971'],
  ['🇸🇰', 'Eslovaquia',            '+421'],
  ['🇸🇮', 'Eslovenia',             '+386'],
  ['🇪🇸', 'España',                '+34'],
  ['🇺🇸', 'Estados Unidos',        '+1'],
  ['🇪🇹', 'Etiopía',               '+251'],
  ['🇵🇭', 'Filipinas',             '+63'],
  ['🇫🇮', 'Finlandia',             '+358'],
  ['🇫🇷', 'Francia',               '+33'],
  ['🇬🇪', 'Georgia',               '+995'],
  ['🇬🇭', 'Ghana',                 '+233'],
  ['🇬🇷', 'Grecia',                '+30'],
  ['🇬🇹', 'Guatemala',             '+502'],
  ['🇭🇳', 'Honduras',              '+504'],
  ['🇭🇺', 'Hungría',               '+36'],
  ['🇮🇳', 'India',                 '+91'],
  ['🇮🇩', 'Indonesia',             '+62'],
  ['🇮🇶', 'Irak',                  '+964'],
  ['🇮🇷', 'Irán',                  '+98'],
  ['🇮🇪', 'Irlanda',               '+353'],
  ['🇮🇱', 'Israel',                '+972'],
  ['🇮🇹', 'Italia',                '+39'],
  ['🇯🇲', 'Jamaica',               '+1-876'],
  ['🇯🇵', 'Japón',                 '+81'],
  ['🇯🇴', 'Jordania',              '+962'],
  ['🇰🇿', 'Kazajistán',            '+7'],
  ['🇰🇪', 'Kenia',                 '+254'],
  ['🇰🇼', 'Kuwait',                '+965'],
  ['🇱🇧', 'Líbano',                '+961'],
  ['🇱🇾', 'Libia',                 '+218'],
  ['🇱🇹', 'Lituania',              '+370'],
  ['🇱🇺', 'Luxemburgo',            '+352'],
  ['🇲🇾', 'Malasia',               '+60'],
  ['🇲🇦', 'Marruecos',             '+212'],
  ['🇲🇽', 'México',                '+52'],
  ['🇳🇱', 'Países Bajos',          '+31'],
  ['🇵🇰', 'Pakistán',              '+92'],
  ['🇵🇦', 'Panamá',                '+507'],
  ['🇵🇾', 'Paraguay',              '+595'],
  ['🇵🇪', 'Perú',                  '+51'],
  ['🇵🇱', 'Polonia',               '+48'],
  ['🇵🇹', 'Portugal',              '+351'],
  ['🇶🇦', 'Qatar',                 '+974'],
  ['🇬🇧', 'Reino Unido',           '+44'],
  ['🇨🇿', 'República Checa',       '+420'],
  ['🇩🇴', 'República Dominicana',  '+1-809'],
  ['🇷🇴', 'Rumanía',               '+40'],
  ['🇷🇺', 'Rusia',                 '+7'],
  ['🇸🇦', 'Arabia Saudí',          '+966'],
  ['🇸🇳', 'Senegal',               '+221'],
  ['🇷🇸', 'Serbia',                '+381'],
  ['🇸🇬', 'Singapur',              '+65'],
  ['🇸🇾', 'Siria',                 '+963'],
  ['🇸🇴', 'Somalia',               '+252'],
  ['🇸🇩', 'Sudán',                 '+249'],
  ['🇸🇪', 'Suecia',                '+46'],
  ['🇨🇭', 'Suiza',                 '+41'],
  ['🇹🇭', 'Tailandia',             '+66'],
  ['🇹🇼', 'Taiwán',                '+886'],
  ['🇹🇿', 'Tanzania',              '+255'],
  ['🇹🇳', 'Túnez',                 '+216'],
  ['🇹🇷', 'Turquía',               '+90'],
  ['🇺🇦', 'Ucrania',               '+380'],
  ['🇺🇾', 'Uruguay',               '+598'],
  ['🇻🇪', 'Venezuela',             '+58'],
  ['🇻🇳', 'Vietnam',               '+84'],
  ['🇾🇪', 'Yemen',                 '+967'],
  ['🇿🇦', 'Sudáfrica',             '+27'],
  ['🇿🇲', 'Zambia',                '+260'],
  ['🇰🇷', 'Corea del Sur',         '+82'],
  ['🇨🇩', 'Congo (RDC)',           '+243'],
  ['🇳🇬', 'Nigeria',               '+234'],
  ['🇳🇴', 'Noruega',               '+47'],
  ['🇳🇿', 'Nueva Zelanda',         '+64'],
].sort((a, b) => a[1].localeCompare(b[1], 'es'));

// ============================================================================
// Country Picker
// ============================================================================

(function initCountryPicker() {
  const picker       = document.getElementById('phone-prefix-picker');
  const panel        = document.getElementById('phone-country-panel');
  const list         = document.getElementById('phone-country-list');
  const search       = document.getElementById('phone-country-search');
  const flagEl       = document.getElementById('phone-prefix-flag');
  const codeEl       = document.getElementById('phone-prefix-code');
  const combined     = document.getElementById('diag-phone-combined');
  const numberInput  = document.getElementById('diag-phone-number');

  if (!picker || !panel || !list) return;

  // Current selection
  let selectedCode = '+34';
  let selectedFlag = '🇪🇸'; // eslint-disable-line no-unused-vars -- used for picker display and reset

  // ── Render helpers ──────────────────────────────────────────────────────

  function makeOption(flag, name, code, isPinned) {
    const li = document.createElement('li');
    li.setAttribute('role', 'option');
    li.setAttribute('aria-selected', 'false');
    li.setAttribute('data-code', code);
    li.setAttribute('data-flag', flag);
    li.setAttribute('data-name', name.toLowerCase());
    li.className = 'phone-country-option';
    if (isPinned) li.setAttribute('data-pinned', '');

    li.innerHTML = `
      <span class="phone-country-option__flag" aria-hidden="true">${flag}</span>
      <span class="phone-country-option__name">${name}</span>
      <span class="phone-country-option__code">${code}</span>
    `;

    li.addEventListener('click', () => selectCountry(flag, code));
    li.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        selectCountry(flag, code);
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        const next = li.nextElementSibling;
        if (next && next.classList.contains('phone-country-option')) next.focus();
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        const prev = li.previousElementSibling;
        if (prev && prev.classList.contains('phone-country-option')) {
          prev.focus();
        } else {
          search.focus();
        }
      } else if (e.key === 'Escape') {
        closePanel();
        picker.focus();
      }
    });

    li.setAttribute('tabindex', '-1');
    return li;
  }

  function renderList(query) {
    list.innerHTML = '';
    const q = (query || '').trim().toLowerCase();

    if (!q) {
      // Pinned section
      PINNED_COUNTRIES.forEach(([flag, name, code]) => {
        list.appendChild(makeOption(flag, name, code, true));
      });

      // Divider
      const div = document.createElement('li');
      div.className = 'phone-country-divider';
      div.setAttribute('role', 'separator');
      div.setAttribute('aria-hidden', 'true');
      list.appendChild(div);

      // Full alphabetical list
      ALL_COUNTRIES.forEach(([flag, name, code]) => {
        list.appendChild(makeOption(flag, name, code, false));
      });
    } else {
      // Filter all (pinned + full) by query
      const pool = [...PINNED_COUNTRIES, ...ALL_COUNTRIES];
      // Deduplicate by name+code
      const seen = new Set();
      const filtered = pool.filter(([, name, code]) => {
        const key = name + code;
        if (seen.has(key)) return false;
        seen.add(key);
        return name.toLowerCase().includes(q) || code.includes(q);
      });

      if (filtered.length === 0) {
        const empty = document.createElement('li');
        empty.className = 'phone-country-empty';
        empty.textContent = 'Sin resultados';
        list.appendChild(empty);
      } else {
        filtered.forEach(([flag, name, code]) => {
          list.appendChild(makeOption(flag, name, code, false));
        });
      }
    }

    // Mark currently selected
    list.querySelectorAll('.phone-country-option').forEach((opt) => {
      opt.setAttribute('aria-selected',
        opt.getAttribute('data-code') === selectedCode ? 'true' : 'false'
      );
    });
  }

  // ── Open / Close ─────────────────────────────────────────────────────────

  function openPanel() {
    panel.hidden = false;
    picker.setAttribute('aria-expanded', 'true');
    picker.classList.add('open');
    renderList('');
    search.value = '';
    search.focus();
  }

  function closePanel() {
    panel.hidden = true;
    picker.setAttribute('aria-expanded', 'false');
    picker.classList.remove('open');
  }

  function togglePanel() {
    panel.hidden ? openPanel() : closePanel();
  }

  // ── Select ────────────────────────────────────────────────────────────────

  function selectCountry(flag, code) {
    selectedFlag = flag;
    selectedCode = code;
    flagEl.textContent = flag;
    codeEl.textContent = code;
    closePanel();
    picker.focus();
    updateCombined();
  }

  // ── Combined hidden field ─────────────────────────────────────────────────

  function updateCombined() {
    const num = numberInput ? numberInput.value.trim() : '';
    if (combined) {
      combined.value = num ? `${selectedCode} ${num}` : '';
    }
  }

  if (numberInput) {
    numberInput.addEventListener('input', updateCombined);
  }

  // ── Events ────────────────────────────────────────────────────────────────

  picker.addEventListener('click', (e) => {
    e.stopPropagation();
    togglePanel();
  });

  picker.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowDown') {
      e.preventDefault();
      openPanel();
    } else if (e.key === 'Escape') {
      closePanel();
    }
  });

  search.addEventListener('input', () => {
    renderList(search.value);
  });

  // Jump to first matching option when typing in search
  search.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const first = list.querySelector('.phone-country-option');
      if (first) first.focus();
    } else if (e.key === 'Escape') {
      closePanel();
      picker.focus();
    }
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!picker.closest('.phone-field').contains(e.target)) {
      closePanel();
    }
  });

  // Init render
  renderList('');
}());

// ============================================================================
// i18n helpers
// ============================================================================

function getLang() {
  return localStorage.getItem('caselyn-lang') || 'es';
}

function t(key) {
  const lang = getLang();
  const tr = window.translations;
  if (tr && tr[lang] && tr[lang][key]) return tr[lang][key];
  if (tr && tr['es'] && tr['es'][key]) return tr['es'][key];
  return '';
}

// ============================================================================
// Form submit
// ============================================================================

const diagForm    = document.getElementById('diag-form');
const diagSubmit  = document.getElementById('diag-submit');
const diagStatus  = document.getElementById('diag-status');

function setStatus(message, type) {
  if (!diagStatus) return;
  diagStatus.textContent = message;
  diagStatus.className = 'form-status form-status--' + type;
}

function clearStatus() {
  if (!diagStatus) return;
  diagStatus.textContent = '';
  diagStatus.className = 'form-status';
}

function setLoading(loading) {
  if (!diagSubmit) return;
  diagSubmit.disabled = loading;
  const label = diagSubmit.querySelector('.btn-label');
  if (label) {
    label.textContent = loading ? '...' : (t('diag.form.submit') || 'Enviar solicitud');
  }
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateForm(data) {
  if (!data.name || data.name.trim().length < 2) return 'Introduce tu nombre.';
  if (!data.email || !isValidEmail(data.email.trim())) return 'Introduce un email válido.';
  if (!data.business || data.business.trim().length < 1) return 'Indica el nombre de tu negocio.';
  if (!data.service || data.service === '') return 'Selecciona qué quieres crear o mejorar.';
  if (!data.message || data.message.trim().length < 10) return 'El mensaje debe tener al menos 10 caracteres.';
  if (data.message.trim().length > 5000) return 'El mensaje es demasiado largo.';
  return null;
}

if (diagForm) {
  diagForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    clearStatus();

    // Read phone combined field (set by picker + number input)
    const combinedPhone = document.getElementById('diag-phone-combined');
    const phoneVal = combinedPhone ? combinedPhone.value.trim() : '';

    const formData = {
      name:            (diagForm.querySelector('#diag-name')     || {}).value || '',
      email:           (diagForm.querySelector('#diag-email')    || {}).value || '',
      phone:           phoneVal,
      business:        (diagForm.querySelector('#diag-business') || {}).value || '',
      website_current: (diagForm.querySelector('#diag-website')  || {}).value || '',
      service:         (diagForm.querySelector('#diag-service')  || {}).value || '',
      message:         (diagForm.querySelector('#diag-message')  || {}).value || '',
      hp_field:        (diagForm.querySelector('#hp_field')      || {}).value || '',
    };

    const validationError = validateForm(formData);
    if (validationError) {
      setStatus(validationError, 'error');
      return;
    }

    // Build enriched message for the API
    const fullMessage = [
      formData.service         ? `Servicio: ${formData.service}`              : '',
      formData.business        ? `Negocio: ${formData.business}`              : '',
      formData.website_current ? `Web actual: ${formData.website_current}`    : '',
      '',
      formData.message,
    ].filter(Boolean).join('\n');

    const payload = {
      name:    formData.name.trim(),
      email:   formData.email.trim(),
      phone:   formData.phone,
      message: fullMessage.trim(),
      website: formData.hp_field,       // honeypot
    };

    setLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.ok) {
        setStatus(
          t('diag.form.success') || 'Solicitud enviada. Nos ponemos en contacto contigo en breve.',
          'success'
        );
        diagForm.reset();
        // Reset picker display
        const flagEl = document.getElementById('phone-prefix-flag');
        const codeEl = document.getElementById('phone-prefix-code');
        const comb   = document.getElementById('diag-phone-combined');
        if (flagEl) flagEl.textContent = '🇪🇸';
        if (codeEl) codeEl.textContent = '+34';
        if (comb)   comb.value = '';
      } else {
        setStatus(
          result.error || t('diag.form.error') || 'Algo ha fallado. Intenta de nuevo.',
          'error'
        );
      }
    } catch (err) {
      console.error('Diagnostico form error:', err);
      setStatus(t('diag.form.error') || 'Error de conexión. Intenta de nuevo.', 'error');
    } finally {
      setLoading(false);
    }
  });
}

// ============================================================================
// Navbar scroll + mobile toggle
// ============================================================================

const navbar       = document.getElementById('navbar');
const navbarToggle = document.getElementById('navbar-toggle');
const navbarMenu   = document.getElementById('navbar-menu');

let scrollTimeout;
window.addEventListener('scroll', () => {
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => {
    if (navbar) {
      navbar.classList.toggle('navbar-scrolled', window.scrollY > 50);
    }
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
}

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
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));

if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.querySelectorAll('.fade-in').forEach((el) => el.classList.add('visible'));
}

// ============================================================================
// Language selector
// ============================================================================

window.addEventListener('DOMContentLoaded', () => {
  const LANG_OPTIONS = [
    { code: 'es', label: 'Español',  flag: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 12" width="18" height="12" style="border-radius:3px"><rect width="18" height="12" fill="#AA151B"/><rect width="18" height="6" y="3" fill="#F1BF00"/></svg>` },
    { code: 'ca', label: 'Català',   flag: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 12" width="18" height="12" style="border-radius:3px"><rect width="18" height="12" fill="#ffff00"/><rect width="18" height="1.33" y="1.33" fill="#d40000"/><rect width="18" height="1.33" y="4" fill="#d40000"/><rect width="18" height="1.33" y="6.66" fill="#d40000"/><rect width="18" height="1.33" y="9.33" fill="#d40000"/></svg>` },
    { code: 'en', label: 'English',  flag: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 12" width="18" height="12" style="border-radius:3px"><rect width="18" height="12" fill="#012169"/><path d="M0,0 L18,12 M18,0 L0,12" stroke="#fff" stroke-width="2"/><path d="M0,0 L18,12 M18,0 L0,12" stroke="#C8102E" stroke-width="1"/><path d="M9,0 v12 M0,6 h18" stroke="#fff" stroke-width="3"/><path d="M9,0 v12 M0,6 h18" stroke="#C8102E" stroke-width="2"/></svg>` },
    { code: 'fr', label: 'Français', flag: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 12" width="18" height="12" style="border-radius:3px"><rect width="18" height="12" fill="#ED2939"/><rect width="12" height="12" fill="#fff"/><rect width="6" height="12" fill="#002395"/></svg>` },
  ];

  const langSelector     = document.getElementById('lang-selector');
  const langTrigger      = document.getElementById('lang-trigger');
  const langTriggerLabel = document.getElementById('lang-trigger-label');
  const langDropdown     = document.getElementById('lang-dropdown');

  if (!langSelector || !langTrigger || !langDropdown) return;

  const savedLang = localStorage.getItem('caselyn-lang') || 'es';
  let currentLang = savedLang;

  const renderLangOptions = () => {
    langDropdown.innerHTML = '';
    LANG_OPTIONS.forEach(({ code, label }) => {
      const btn = document.createElement('button');
      btn.className = 'lang-option' + (code === currentLang ? ' active' : '');
      btn.setAttribute('data-lang', code);
      btn.setAttribute('type', 'button');
      const cfg = LANG_OPTIONS.find((o) => o.code === code);
      btn.innerHTML = `<span style="display:flex;align-items:center;gap:8px;">${cfg.flag}<span>${label}</span></span>`;
      langDropdown.appendChild(btn);
    });
  };

  const setActiveLang = (lang) => {
    currentLang = lang;
    const cfg = LANG_OPTIONS.find((o) => o.code === lang) || LANG_OPTIONS[0];
    langTriggerLabel.innerHTML = `<span style="display:flex;align-items:center;gap:6px;">${cfg.flag}<span>${cfg.code.toUpperCase()}</span></span>`;
    langDropdown.querySelectorAll('.lang-option').forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
  };

  const openDD  = () => { langSelector.classList.add('open');    langTrigger.setAttribute('aria-expanded', 'true');  };
  const closeDD = () => { langSelector.classList.remove('open'); langTrigger.setAttribute('aria-expanded', 'false'); };
  const toggleDD = () => langSelector.classList.contains('open') ? closeDD() : openDD();

  const selectLang = (lang) => {
    if (lang === currentLang) { closeDD(); return; }
    setActiveLang(lang);
    localStorage.setItem('caselyn-lang', lang);
    if (typeof applyTranslations === 'function') applyTranslations(lang); // eslint-disable-line no-undef
    closeDD();
  };

  const isDesktop = () => window.matchMedia('(min-width: 769px)').matches;
  let hoverTimeout = null;

  langSelector.addEventListener('mouseenter', () => { if (!isDesktop()) return; clearTimeout(hoverTimeout); hoverTimeout = setTimeout(openDD, 80); });
  langSelector.addEventListener('mouseleave', () => { if (!isDesktop()) return; clearTimeout(hoverTimeout); hoverTimeout = setTimeout(closeDD, 120); });
  langTrigger.addEventListener('click', (e) => { e.stopPropagation(); toggleDD(); });
  langDropdown.addEventListener('click', (e) => { const opt = e.target.closest('.lang-option'); if (opt) { e.stopPropagation(); selectLang(opt.dataset.lang); } });
  document.addEventListener('click', (e) => { if (!langSelector.contains(e.target)) closeDD(); });

  renderLangOptions();
  setActiveLang(currentLang);
  if (typeof applyTranslations === 'function') applyTranslations(currentLang); // eslint-disable-line no-undef
});
