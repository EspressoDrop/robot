import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 60000,
  use: {
    baseURL: 'http://webapp:3000',
    headless: true,
    navigationTimeout: 30000,
    ignoreHTTPSErrors: true,
  },
  projects: [
    {
      name: 'chromium',
      use: {
        launchOptions: {
          args: ['--disable-web-security', '--ignore-certificate-errors', '--no-sandbox', '--disable-setuid-sandbox']
        }
      },
    },
  ],
  retries: 2,
});