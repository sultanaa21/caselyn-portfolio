# Caselyn Portfolio

> Premium, minimalist portfolio website for a professional web agency

A static, enterprise-grade landing page built with clean HTML, CSS, and JavaScript. Designed with Apple/Stripe-level aesthetics to position Caselyn as a serious, established web agency serving local businesses.

[![CI](https://github.com/sultanaa21/caselyn-portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/sultanaa21/caselyn-portfolio/actions/workflows/ci.yml)

[Live Demo](https://your-domain.vercel.app) • [Report Bug](https://github.com/sultanaa21/caselyn-portfolio/issues)

---

## ✨ Features

- **Premium Design** - Apple/Stripe-inspired minimalist aesthetic with restrained glass effects
- **7 Complete Sections** - Hero, Social Proof, Services, Portfolio, Process, FAQ, Contact
- **Mobile-First** - Fully responsive design optimized for all devices
- **Zero Dependencies** - Pure HTML/CSS/JS, no frameworks or build process
- **SEO Optimized** - Complete meta tags, Open Graph, Twitter Cards, sitemap
- **Performance** - Instant load times, GPU-accelerated animations
- **Accessible** - WCAG AA compliant, semantic HTML, keyboard navigation
- **Professional Tooling** - ESLint, Prettier, Stylelint with CI/CD

---

## 🚀 Quick Start

### Local Development

**Option 1: Direct File Access**

```bash
# Clone the repository
git clone https://github.com/sultanaa21/caselyn-portfolio.git
cd caselyn-portfolio

# Open in browser
open index.html  # macOS
start index.html # Windows
```

**Option 2: Local Server** (recommended)

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve

# Using PHP
php -S localhost:8000
```

Then open [http://localhost:8000](http://localhost:8000)

### Install Development Tools

```bash
npm install
```

---

## 🛠️ Development

### Quality Commands

```bash
# Format code
npm run format

# Check formatting
npm run format:check

# Run linters
npm run lint
```

### Dev Workflow

This repository has **auto-formatting on commit** via Husky + lint-staged:

1. **Make changes** to any file
2. **Stage files**: `git add .`
3. **Commit**: `git commit -m "your message"`
4. **Auto-fix runs**: Prettier + ESLint + Stylelint auto-fix staged files
5. **If fails**: Fix errors, then commit again

**Manual commands:**

```bash
npm run lint:fix  # Auto-fix all linting issues
npm run format    # Format all files
```

All checks run automatically via GitHub Actions on push/PR.

---

## 📁 Project Structure

```
caselyn-portfolio/
├── index.html              # Main landing page
├── css/
│   └── styles.css         # Complete design system
├── js/
│   └── script.js          # Interactive features
├── assets/
│   ├── img/               # Portfolio screenshots (add yours here)
│   └── icons/             # SVG icons (optional)
├── public/
│   ├── favicon.ico        # Browser favicon
│   ├── og.png            # Social sharing image
│   ├── robots.txt        # SEO crawler rules
│   └── sitemap.xml       # Site structure
├── .github/
│   └── workflows/
│       └── ci.yml        # GitHub Actions CI
└── [config files]        # .prettierrc, .eslintrc, etc.
```

---

## ✏️ Customization

### 1. Update WhatsApp Number

Find and replace in `index.html`:

```html
<!-- Search for -->
34600000000

<!-- Replace with your WhatsApp number (include country code) -->
```

Locations:

- Hero section CTAs
- Navigation button
- Contact section

### 2. Replace Portfolio Projects

In `index.html`, find the `.portfolio-card` sections and update:

```html
<article class="portfolio-card fade-in">
  <div class="portfolio-image">
    <!-- Replace SVG with actual screenshot -->
    <img src="assets/img/project-name.png" alt="Project Name" />
  </div>
  <div class="portfolio-content">
    <span class="portfolio-tag">YOUR CATEGORY</span>
    <h3 class="portfolio-title">Client Name</h3>
    <p class="portfolio-description">Brief description of the project and results achieved.</p>
  </div>
</article>
```

### 3. Update Service Descriptions

Modify the three service cards in the `#servicios` section to match your specific offerings.

### 4. Customize FAQ

Update questions in the `#faq` section with real questions your clients ask.

### 5. Replace Domain URLs

After deploying to Vercel, update these placeholders in `index.html`:

```html
<!-- Replace all instances of -->
https://your-domain.vercel.app/

<!-- With your actual Vercel URL or custom domain -->
```

Also update in:

- `public/robots.txt`
- `public/sitemap.xml`

### 6. Update Social Sharing Image

Replace `public/og.png` with a custom 1200x630px image featuring your branding.

---

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. **Import Repository**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Import your GitHub repository

2. **Configure Project**
   - Framework Preset: **Other**
   - Build Command: _(leave empty)_
   - Output Directory: _(leave empty)_
   - Install Command: `npm install` (for CI only)

3. **Deploy**
   - Click "Deploy"
   - Your site will be live at `https://your-project.vercel.app`

4. **Post-Deployment**
   - Update all `https://your-domain.vercel.app/` URLs in the code
   - Add custom domain (optional)
   - Update canonical URLs and OG tags

### Deploy to GitHub Pages

1. Go to **Settings** → **Pages**
2. Source: **Deploy from a branch**
3. Branch: **main** / **(root)**
4. Save

Your site will be live at `https://sultanaa21.github.io/caselyn-portfolio/`

### Other Static Hosts

Works with any static hosting:

- Netlify
- Cloudflare Pages
- Firebase Hosting
- AWS S3 + CloudFront

**No build process required** - just upload the files.

---

## 🎨 Design System

### Colors

```css
--color-background: #fafaf9 /* Off-white */ --color-surface: #ffffff /* Pure white */
  --color-text-primary: #0a0a0a /* Near-black */ --color-accent: #3b82f6
  /* Professional blue (CTAs only) */;
```

### Typography

- **Font Stack**: SF Pro Display / Inter / System fonts
- **Scale**: 14px - 56px (responsive with clamp)
- **Weights**: 400 (regular), 500 (medium), 600 (semibold)

### Spacing

8px-based scale: `8, 16, 24, 32, 48, 64, 96, 128px`

### Glass Morphism

Applied only to:

- Navigation bar (on scroll)
- Select card hover states

Parameters:

- Backdrop blur: 24px
- Background: rgba(255, 255, 255, 0.8)
- Very subtle borders

---

## 🧪 Browser Support

- Chrome/Edge (modern)
- Firefox (modern)
- Safari (modern)
- Mobile browsers (iOS Safari, Chrome Mobile)

Graceful degradation for older browsers.

---

## 📄 License

[MIT License](LICENSE) - feel free to use this code for your projects.

---

## 🤝 Contributing

Contributions welcome! Please:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Run linters (`npm run lint`)
4. Format code (`npm run format`)
5. Commit changes (`git commit -m 'Add amazing feature'`)
6. Push to branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

---

## 📞 Support

For questions or issues:

- Open an [issue](https://github.com/sultanaa21/caselyn-portfolio/issues)
- Contact via WhatsApp (update link in code)

---

## 📚 Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern features (custom properties, grid, flexbox)
- **JavaScript ES2021** - Vanilla JS, no frameworks
- **GitHub Actions** - CI/CD pipeline
- **Vercel** - Hosting platform

---

Built with care for the modern web. ✨
