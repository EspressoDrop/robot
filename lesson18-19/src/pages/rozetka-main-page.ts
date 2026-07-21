import { Page } from '@playwright/test';
import { Locator } from '@playwright/test';

export class RozetkaMainPage {

    public get rozetkaLogo(): Locator {
        return this.page.locator('[alt="Rozetka Logo"]');
    }

    public get searchInput(): Locator {
        return this.page.locator('[data-testid="search-suggest-input"]');
    }

    public get popularQueriesHeader(): Locator {
    return this.page.locator('div[class="text-base font-bold py-3"]');
}

    public get searchButton(): Locator {
        return this.page.locator('[data-testid="search-suggest-submit"]');
    }

    public get searchResults(): Locator {
        return this.page.locator('[class="tile-title black-link text-base"]');
    }

    public get sortByDropdown(): Locator {
        return this.page.locator('select[id="sort"]');
    }

    public get sortByLowestPriceOption(): Locator {
        return this.page.locator('option[value="cheap"]');
    }
    public get sortByHighestPriceOption(): Locator {
        return this.page.locator('option[value="expensive"]');
    }

    public get pricesOfProducts(): Locator {
        return this.page.locator('div[class*="price text-2xl"]');
    }
    
    public constructor(public page: Page) {}

    public async open() {
        await this.page.context().addCookies([
            {
                name: 'visited',
                value: 'true',
                domain: '.rozetka.com.ua',
                path: '/'
            }
        ]);

        await this.page.goto('https://rozetka.com.ua/', {
            waitUntil: 'commit'
        });

        const captchaFrame = this.page.frameLocator('iframe[title*="human"]').first();
        const hasCaptcha = await captchaFrame.locator('body').count().catch(() => 0);

        if (hasCaptcha > 0) {
            console.log('⚠️ CAPTCHA detected - waiting 60 seconds for manual solve...');
            await this.page.pause();
        }

        await this.rozetkaLogo.waitFor({state: 'visible', timeout: 60000});
    }

    public async openSearch() {
        await this.searchInput.click();
        await this.popularQueriesHeader.waitFor({ state: 'visible' });
    }

    public async searchForProduct(productName: string) {
        await this.searchInput.fill(productName);
        await this.searchButton.click();
        await this.waitForSearchResults();
    }

    public async getSearchResultsTitles(): Promise<string[]> {
        return await this.searchResults.allTextContents();
    }

    public async sortByLowestPrice() {
        await this.sortByDropdown.selectOption('cheap');
        await this.page.waitForTimeout(2000);
    }

    public async sortByHighestPrice() {
        await this.sortByDropdown.selectOption('expensive');
        await this.page.waitForTimeout(2000);
    }

    public async getProductPrices(): Promise<number[]> {
        const priceTexts = await this.pricesOfProducts.allTextContents();
        return priceTexts.map(priceText => {
            const cleanPrice = priceText.replace(/\D/g, '');
            return Number.parseInt(cleanPrice, 10);
        });
    }

    public async waitForSearchResults() {
        await this.searchResults.first().waitFor({ state: 'visible' });
    }
}