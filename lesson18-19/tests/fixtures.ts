import { test as base, chromium, Browser } from '@playwright/test';
<<<<<<< HEAD
import { test as base, chromium, Browser } from '@playwright/test';
=======
>>>>>>> 4b47172a7c5bcfdd5300a49ee3408b5f0ec3a8bc
import { RozetkaMainPage } from '../src/pages';

type PageObjectFixtures = {
   rozetkaMainPage: RozetkaMainPage;
};

type WorkerFixtures = {
   sharedBrowser: Browser;
};

export const test = base.extend<PageObjectFixtures, WorkerFixtures>({
   sharedBrowser: [async ({}, use) => {
      const browser = await chromium.launch({ headless: false });
      await use(browser);
      await browser.close();
   }, { scope: 'worker' }],

   rozetkaMainPage: async ({ sharedBrowser }, use) => {
      const context = await sharedBrowser.newContext();
      const page = await context.newPage();
      const rozetkaMainPage = new RozetkaMainPage(page);
      await rozetkaMainPage.open();
      await use(rozetkaMainPage);
      await context.close();
<<<<<<< HEAD
      await context.close();
=======
>>>>>>> 4b47172a7c5bcfdd5300a49ee3408b5f0ec3a8bc
   }
});

export { expect } from '@playwright/test';
