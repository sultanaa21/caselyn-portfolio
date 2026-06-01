const { chromium } = require('playwright-core');
const fs = require('fs');
const sharp = require('sharp');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto('https://web2-ugc.vercel.app/', { waitUntil: 'load', timeout: 30000 });

  // Desktop screenshot: 1600x1000 (16:10)
  await page.setViewportSize({ width: 1600, height: 1000 });
  await page.screenshot({
    path: 'public/images/portfolio/personajes-virtuales-ia-desktop.png',
    clip: { x: 0, y: 0, width: 1600, height: 1000 }
  });
  console.log('Desktop screenshot saved');

  // Mobile screenshot: 750x470 (16:10)
  await page.setViewportSize({ width: 750, height: 1200 });
  await page.screenshot({
    path: 'public/images/portfolio/personajes-virtuales-ia-mobile.png',
    clip: { x: 0, y: 0, width: 750, height: 470 }
  });
  console.log('Mobile screenshot saved');

  await browser.close();

  // Convert to WebP and AVIF using Sharp
  const files = [
    'public/images/portfolio/personajes-virtuales-ia-desktop.png',
    'public/images/portfolio/personajes-virtuales-ia-mobile.png'
  ];

  for (const file of files) {
    const webpPath = file.replace('.png', '.webp');
    const avifPath = file.replace('.png', '.avif');

    await sharp(file).webp().toFile(webpPath);
    console.log(`Saved ${webpPath}`);

    await sharp(file).avif().toFile(avifPath);
    console.log(`Saved ${avifPath}`);
  }
})();
