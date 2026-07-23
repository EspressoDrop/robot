import { test as base, chromium, Browser } from '@playwright/test';
import { RozetkaMainPage } from '../src/pages';

type PageObjectFixtures = {
   rozetkaMainPage: RozetkaMainPage;
};

type WorkerFixtures = {
   sharedBrowser: Browser;
};

export const test = base.extend<PageObjectFixtures, WorkerFixtures>({
   sharedBrowser: [async ({}, use) => {
      const browser = await chromium.launch({
         headless: false,
         args: [
            '--disable-blink-features=AutomationControlled',
            '--disable-features=IsolateOrigins,site-per-process',
            '--disable-site-isolation-trials',
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-dev-shm-usage',
            '--disable-web-security',
         ]
      });
      await use(browser);
      await browser.close();
   }, { scope: 'worker' }],

   rozetkaMainPage: async ({ sharedBrowser }, use) => {
      const context = await sharedBrowser.newContext({
         locale: 'uk-UA',
         timezoneId: 'Europe/Kyiv',
         userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
         viewport: { width: 1920, height: 1080 },
         deviceScaleFactor: 1,
         hasTouch: false,
         javaScriptEnabled: true,
         permissions: ['geolocation']
      });

      await context.addInitScript(() => {
         Object.defineProperty(navigator, 'webdriver', {
            get: () => false,
         });

         delete (window as any).navigator.webdriver;
      });

      const page = await context.newPage();
      const rozetkaMainPage = new RozetkaMainPage(page);
      await rozetkaMainPage.open();
      await use(rozetkaMainPage);
      await context.close();
   }
});

export { expect } from '@playwright/test';
