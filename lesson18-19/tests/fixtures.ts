import { test as base } from '@playwright/test';
import { RozetkaMainPage } from '../src/pages';

type PageObjectFixtures = {
   rozetkaMainPage: RozetkaMainPage;
};

export const test = base.extend<PageObjectFixtures>({
   rozetkaMainPage: async ({ page }, use) => {
      const rozetkaMainPage = new RozetkaMainPage(page);
      await rozetkaMainPage.open();
      await use(rozetkaMainPage);
   }
});

export { expect } from '@playwright/test';
