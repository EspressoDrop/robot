import { setWorldConstructor, World } from '@cucumber/cucumber';
import { Browser, BrowserContext, Page, chromium } from '@playwright/test';
import { RozetkaMainPage } from './pages/rozetka-main-page';

export class CustomWorld extends World {
    static browser: Browser;
    context!: BrowserContext;
    page!: Page;
    rozetkaPage!: RozetkaMainPage;

    constructor(options: any) {
        super(options);
    }

    async init(): Promise<void> {
        if (!CustomWorld.browser) {
            CustomWorld.browser = await chromium.launch({
                headless: false,
                args: ['--disable-blink-features=AutomationControlled']
            });
        }

        this.context = await CustomWorld.browser.newContext({
            viewport: { width: 1280, height: 720 },
            userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36'
        });
        this.page = await this.context.newPage();
        this.rozetkaPage = new RozetkaMainPage(this.page);
    }

    async cleanup(): Promise<void> {
        await this.page?.close();
        await this.context?.close();
    }
}

setWorldConstructor(CustomWorld);
