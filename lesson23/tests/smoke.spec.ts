import { test, expect } from '@playwright/test';

test('app loads successfully', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' });
    await expect(page).toHaveTitle(/Expense Tracker/i);
});

test('page contains main content', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' });
    await expect(page.locator('body')).toBeVisible();
});
