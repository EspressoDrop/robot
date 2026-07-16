import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from './world';

Given('I open Rozetka main page', async function (this: CustomWorld) {
    await this.rozetkaPage.open();
});

When('I open the search field', async function (this: CustomWorld) {
    await this.rozetkaPage.openSearch();
});

When('I search for {string}', async function (this: CustomWorld, searchQuery: string) {
    await this.rozetkaPage.searchForProduct(searchQuery);
});

When('I sort by lowest price', async function (this: CustomWorld) {
    await this.rozetkaPage.sortByLowestPrice();
});

When('I sort by highest price', async function (this: CustomWorld) {
    await this.rozetkaPage.sortByHighestPrice();
});

Then('the logo should be visible', async function (this: CustomWorld) {
    await expect(this.rozetkaPage.rozetkaLogo).toBeVisible();
});

Then('popular queries header should be visible', async function (this: CustomWorld) {
    await expect(this.rozetkaPage.popularQueriesHeader).toBeVisible();
});

Then('all product titles should contain {string}', async function (this: CustomWorld, searchQuery: string) {
    const titles = await this.rozetkaPage.getSearchResultsTitles();
    for (const title of titles) {
        expect(title.toLowerCase()).toContain(searchQuery.toLowerCase());
    }
});

Then('product prices should be in ascending order', async function (this: CustomWorld) {
    const prices = await this.rozetkaPage.getProductPrices();
    for (let i = 0; i < prices.length - 1; i++) {
        expect(prices[i]).toBeLessThanOrEqual(prices[i + 1]);
    }
});

Then('product prices should be in descending order', async function (this: CustomWorld) {
    const prices = await this.rozetkaPage.getProductPrices();
    for (let i = 0; i < prices.length - 1; i++) {
        expect(prices[i]).toBeGreaterThanOrEqual(prices[i + 1]);
    }
});
