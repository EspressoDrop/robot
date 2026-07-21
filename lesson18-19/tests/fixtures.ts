import { test as base, chromium, Browser } from '@playwright/test';
import { RozetkaMainPage } from '../src/pages';

type PageObjectFixtures = {
   rozetkaMainPage: RozetkaMainPage;
};

type WorkerFixtures = {
   sharedBrowser: Browser;
};

export const test = base.extend<PageObjectFixtures, WorkerFixtures>({
   // Browser-scoped fixture: created once per worker, shared across all tests
   sharedBrowser: [async ({}, use) => {
      const browser = await chromium.launch({ headless: false });
      await use(browser);
      await browser.close();
   }, { scope: 'worker' }],

   // Test-scoped fixture: new context and page for each test
   rozetkaMainPage: async ({ sharedBrowser }, use) => {
      const context = await sharedBrowser.newContext();
      const page = await context.newPage();
      const rozetkaMainPage = new RozetkaMainPage(page);
      await rozetkaMainPage.open();
      await use(rozetkaMainPage);
      await context.close();
   }
});

export { expect } from '@playwright/test';
