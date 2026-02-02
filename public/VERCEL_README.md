# Vercel Deployment Configuration

This directory contains all runtime files for the static site.

## Vercel Settings

**IMPORTANT:** Configure these settings in your Vercel project dashboard:

### Build & Development Settings
- **Framework Preset:** `Other`
- **Root Directory:** `public`
- **Build Command:** *(leave empty)*
- **Output Directory:** *(leave empty)*
- **Install Command:** *(leave empty)*

### Why Root Directory = "public"?
All runtime files (HTML, CSS, JS, assets) are in `/public`, so Vercel must serve from this directory.

## File Structure

```
public/
├── index.html          # Main page
├── css/
│   └── styles.css     # Styles
├── js/
│   └── script.js      # Interactivity
├── assets/            # Images, icons
├── favicon.ico        # Browser icon
├── og.png            # Social sharing image
├── robots.txt        # SEO crawler rules
└── sitemap.xml       # Site structure
```

All paths in `index.html` use absolute paths from root:
- `/css/styles.css`
- `/js/script.js`
- `/favicon.ico`
- etc.

## Expected URLs (all return 200)

- `/` → index.html
- `/css/styles.css` → CSS file
- `/js/script.js` → JavaScript file
- `/favicon.ico` → Favicon
- `/robots.txt` → Robots file
- `/sitemap.xml` → Sitemap
- `/og.png` → OG image
