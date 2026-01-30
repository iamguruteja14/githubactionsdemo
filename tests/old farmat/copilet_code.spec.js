import { test, expect } from '@playwright/test';

test('OrangeHRM Login Test', async ({ page }) => {
    // Step 1: Navigate to login URL
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    
    // Step 2: Enter username
    await page.fill('input[name="username"]', 'Admin');
    
    // Step 3: Enter password
    await page.fill('input[name="password"]', 'admin123');
    
    // Step 4: Click login button
    await page.click('button[type="submit"]');
    
    // Step 5: Verify dashboard is visible
    // await page.waitForNavigation();
    await expect(page).toHaveURL(/.*dashboard/);
    await expect(page.locator('//span[text()="Dashboard"]')).toBeVisible();
});