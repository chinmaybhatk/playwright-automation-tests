import { test, expect } from '@playwright/test';

test.describe('Example Test Suite', () => {
  test('basic test example', async ({ page }) => {
    // Navigate to Playwright's website as an example
    await page.goto('https://playwright.dev/');
    
    // Check if title contains Playwright
    await expect(page).toHaveTitle(/Playwright/);
    
    // Click on Get Started link
    const getStarted = page.locator('text=Get started');
    await expect(getStarted).toBeVisible();
    await getStarted.click();
    
    // Verify navigation
    await expect(page).toHaveURL(/.*docs\/intro/);
  });
  
  test('screenshot example', async ({ page }) => {
    await page.goto('https://example.com');
    await page.screenshot({ path: 'screenshots/example.png', fullPage: true });
    
    // Verify main heading
    const heading = page.locator('h1');
    await expect(heading).toHaveText('Example Domain');
  });
});