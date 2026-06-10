#!/usr/bin/env node
/**
 * Build System — Static Site Compiler
 * ─────────────────────────────────────────────────────────────────────────────
 * Reads templates from src/pages/ and partials from src/partials/,
 * replaces {{MARKERS}} with partial content, and writes compiled HTML to public/.
 *
 * Usage:
 *   node scripts/build.js
 *
 * Add to package.json:
 *   "build": "node scripts/build.js"
 */

const fs = require('fs');
const path = require('path');

// ─── Paths ──────────────────────────────────────────────────────────────────

const ROOT = path.join(__dirname, '..');
const PARTIALS_DIR = path.join(ROOT, 'src', 'partials');
const PAGES_DIR = path.join(ROOT, 'src', 'pages');
const OUTPUT_DIR = path.join(ROOT, 'public');

// ─── Helpers ────────────────────────────────────────────────────────────────

function readPartial(name) {
  const filePath = path.join(PARTIALS_DIR, `${name}.html`);
  if (!fs.existsSync(filePath)) {
    throw new Error(`Partial not found: ${name}.html`);
  }
  return fs.readFileSync(filePath, 'utf8');
}

function compileTemplate(templatePath, vars = {}) {
  let content = fs.readFileSync(templatePath, 'utf8');

  // Replace partial markers: {{HEAD_HOME}} → content of head-home.html
  const markerRegex = /\{\{([A-Z_]+)\}\}/g;
  content = content.replace(markerRegex, (match, marker) => {
    // Check if it's a simple variable (TITLE, SLUG)
    if (vars[marker] !== undefined) {
      return vars[marker];
    }
    // Otherwise treat as partial name (lowercase with hyphens)
    const partialName = marker.toLowerCase().replace(/_/g, '-');
    try {
      return readPartial(partialName);
    } catch (err) {
      console.warn(`Warning: ${err.message}`);
      return match; // keep marker if partial not found
    }
  });

  return content;
}

// ─── Page Definitions ───────────────────────────────────────────────────────

const pages = [
  {
    input: 'index.html',
    output: 'index.html',
  },
  {
    input: 'contacto.html',
    output: 'contacto.html',
  },
  {
    input: 'privacidad.html',
    output: 'privacidad.html',
  },
  {
    input: 'cookies.html',
    output: 'cookies.html',
  },
  // Service pages
  {
    input: 'servicios/webs-y-landings.html',
    output: 'servicios/webs-y-landings.html',
  },
  {
    input: 'servicios/marketing.html',
    output: 'servicios/marketing.html',
  },
  {
    input: 'servicios/automatizacion.html',
    output: 'servicios/automatizacion.html',
  },
  {
    input: 'servicios/mantenimiento.html',
    output: 'servicios/mantenimiento.html',
  },
  // diagnostico.html is a static redirect in public/ — not compiled by build
];

// ─── Build ──────────────────────────────────────────────────────────────────

console.log('🔨 Building static pages...\n');

let changedCount = 0;

pages.forEach(({ input, output, vars = {} }) => {
  const templatePath = path.join(PAGES_DIR, input);
  const outputPath = path.join(OUTPUT_DIR, output);

  if (!fs.existsSync(templatePath)) {
    console.error(`❌ Template not found: ${input}`);
    return;
  }

  const compiled = compileTemplate(templatePath, vars);

  // Ensure output subdirectory exists
  const outputSubdir = path.dirname(outputPath);
  if (!fs.existsSync(outputSubdir)) {
    fs.mkdirSync(outputSubdir, { recursive: true });
  }

  // Only write if changed (prevents unnecessary git noise)
  const existing = fs.existsSync(outputPath) ? fs.readFileSync(outputPath, 'utf8') : null;
  if (compiled !== existing) {
    fs.writeFileSync(outputPath, compiled, 'utf8');
    console.log(`✅ ${input} → public/${output}`);
    changedCount++;
  } else {
    console.log(`⏭️  ${output} (no changes)`);
  }
});

console.log(`\n🚀 Build complete. ${changedCount} file(s) updated.`);
