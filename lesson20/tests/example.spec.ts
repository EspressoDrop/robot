import { test, expect } from '@playwright/test';
import { RozetkaMainPage } from '../src/pages/rozetka-main-page';

test.describe('Rozetka main page', () => {
   let rozetkaMainPage: RozetkaMainPage;

   test.beforeEach(async ({ page }) => {
      rozetkaMainPage = new RozetkaMainPage(page);
      await rozetkaMainPage.open();
   });

   test('should display the logo', async () => {
      await expect(rozetkaMainPage.rozetkaLogo).toBeVisible();
   });

   test('should open search field and check popular queries exist', async () => {
      await rozetkaMainPage.openSearch();
      await expect(rozetkaMainPage.popularQueriesHeader).toBeVisible();
   });

   test('should search for a product and check result names includ search query', async () => {
      const searchQuery = 'ecoflow';
      await rozetkaMainPage.openSearch();
      await rozetkaMainPage.searchForProduct(searchQuery);
      const resultTitles = await rozetkaMainPage.getSearchResultsTitles();
      for (const title of resultTitles) {
        expect(title.toLowerCase()).toContain(searchQuery);
      }
   });

   test('should sort search results by lowest price and check prices are in ascending order', async () => {
      const searchQuery = 'ecoflow';
      await rozetkaMainPage.openSearch();
      await rozetkaMainPage.searchForProduct(searchQuery);
      await rozetkaMainPage.sortByLowestPrice();
      const prices = await rozetkaMainPage.getProductPrices();
      for (let i = 0; i < prices.length - 1; i++) {
         expect(prices[i]).toBeLessThanOrEqual(prices[i + 1]);
      }
   });

   test('should sort search results by highest price and check prices are in descending order', async () => {
      const searchQuery = 'ecoflow';
      await rozetkaMainPage.openSearch();
      await rozetkaMainPage.searchForProduct(searchQuery);
      await rozetkaMainPage.sortByHighestPrice();
      const prices = await rozetkaMainPage.getProductPrices();
      for (let i = 0; i < prices.length - 1; i++) {
         expect(prices[i]).toBeGreaterThanOrEqual(prices[i + 1]);
      }
   });
});