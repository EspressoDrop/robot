import { test, expect } from './fixtures';

test.describe('Rozetka main page', () => {

   test('should display the top bar', async ({ rozetkaMainPage }) => {
      await expect(rozetkaMainPage.rozetkaTopBar).toBeVisible();
   });

   test('should open search field and check popular queries exist', async ({ rozetkaMainPage }) => {
      await rozetkaMainPage.openSearch();
      await expect(rozetkaMainPage.popularQueriesHeader).toBeVisible();
   });

   test('should search for a product and check result names includ search query', async ({ rozetkaMainPage }) => {
      const searchQuery = 'ecoflow';
      await rozetkaMainPage.openSearch();
      await rozetkaMainPage.searchForProduct(searchQuery);
      const resultTitles = await rozetkaMainPage.getSearchResultsTitles();
      for (const title of resultTitles) {
        expect(title.toLowerCase()).toContain(searchQuery);
      }
   });

   test('should sort search results by lowest price and check prices are in ascending order', async ({ rozetkaMainPage }) => {
      const searchQuery = 'ecoflow';
      await rozetkaMainPage.openSearch();
      await rozetkaMainPage.searchForProduct(searchQuery);
      await rozetkaMainPage.sortByLowestPrice();
      const prices = await rozetkaMainPage.getProductPrices();

      const validPrices = prices.filter(price => !isNaN(price) && price > 0);

      let sortedCorrectly = 0;
      for (let i = 0; i < validPrices.length - 1; i++) {
         if (validPrices[i] <= validPrices[i + 1]) {
            sortedCorrectly++;
         }
      }

      const percentCorrect = sortedCorrectly / (validPrices.length - 1);
      expect(percentCorrect).toBeGreaterThan(0.8);
   });

   test('should sort search results by highest price and check prices are in descending order', async ({ rozetkaMainPage }) => {
      const searchQuery = 'ecoflow';
      await rozetkaMainPage.openSearch();
      await rozetkaMainPage.searchForProduct(searchQuery);
      await rozetkaMainPage.sortByHighestPrice();
      const prices = await rozetkaMainPage.getProductPrices();

      const validPrices = prices.filter(price => !isNaN(price) && price > 0);

      let sortedCorrectly = 0;
      for (let i = 0; i < validPrices.length - 1; i++) {
         if (validPrices[i] >= validPrices[i + 1]) {
            sortedCorrectly++;
         }
      }

      const percentCorrect = sortedCorrectly / (validPrices.length - 1);
      expect(percentCorrect).toBeGreaterThan(0.8);
   });
});
