const { chromium } = require('playwright-core');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto('https://juicy-brava.vercel.app/', { waitUntil: 'networkidle', timeout: 30000 });

  // Desktop screenshot: 1600x1000 (16:10)
  await page.setViewportSize({ width: 1600, height: 1000 });
  await page.screenshot({
    path: 'public/images/portfolio/juicy-brava-desktop.png',
    clip: { x: 0, y: 0, width: 1600, height: 1000 }
  });
  console.log('Desktop screenshot saved');

  // Mobile screenshot: 750x470 (16:10)
  await page.setViewportSize({ width: 750, height: 1200 });
  await page.screenshot({
    path: 'public/images/portfolio/juicy-brava-mobile.png',
    clip: { x: 0, y: 0, width: 750, height: 470 }
  });
  console.log('Mobile screenshot saved');

  await browser.close();
})();
