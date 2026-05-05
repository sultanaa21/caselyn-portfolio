#!/usr/bin/env node
/**
 * Sync Domain across static files
 * ─────────────────────────────────────────────────────────────────────────────
 * Reads SITE_URL from environment variables and replaces known placeholder
 * or outdated domains in robots.txt, sitemap.xml and all HTML files.
 *
 * Usage:
 *   SITE_URL=https://tudominio.com node scripts/sync-domain.js
 *
 * Add to package.json:
 *   "sync-domain": "node scripts/sync-domain.js"
 */

const fs = require('fs');
const path = require('path');

// ─── Configuration ──────────────────────────────────────────────────────────

const SITE_URL = (process.env.SITE_URL || 'https://caselyn-portfolio.vercel.app').replace(/\/$/, '');

const TARGET_FILES = [
  'public/robots.txt',
  'public/sitemap.xml',
  'public/index.html',
  'public/privacidad.html',
  'public/cookies.html',
];

// Domains that should be replaced (with or without trailing slash)
const OLD_DOMAINS = [
  'https://your-domain.vercel.app',
  'https://caselyn-portfolio.vercel.app',
];

// ─── Helpers ────────────────────────────────────────────────────────────────

function replaceDomain(content, oldDomain, newDomain) {
  // Build variants (with and without trailing slash)
  const variants = [
    { from: oldDomain + '/', to: newDomain + '/' },
    { from: oldDomain, to: newDomain },
  ];

  variants.forEach(({ from, to }) => {
    if (content.includes(from)) {
      content = content.split(from).join(to);
    }
  });

  return content;
}

// ─── Main ───────────────────────────────────────────────────────────────────

let changedCount = 0;

TARGET_FILES.forEach((relativePath) => {
  const filePath = path.join(__dirname, '..', relativePath);

  if (!fs.existsSync(filePath)) {
    console.warn(`⚠️  File not found: ${relativePath}`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  OLD_DOMAINS.forEach((old) => {
    if (content.includes(old)) {
      content = replaceDomain(content, old, SITE_URL);
    }
  });

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Updated domain in ${relativePath} → ${SITE_URL}`);
    changedCount++;
  } else {
    console.log(`⏭️  No changes needed in ${relativePath}`);
  }
});

console.log(`\n🚀 Domain sync complete. ${changedCount} file(s) updated.`);
