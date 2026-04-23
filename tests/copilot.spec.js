const { test, expect } = require('@playwright/test');

test('OrangeHRM Login and Dashboard Verification', async ({ page }) => {
  // Step 1: Navigate to the login URL
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  // Step 2: Enter username
  await page.fill('input[name="username"]', 'Admin');

  // Step 3: Enter password
  await page.fill('input[name="password"]', 'admin123');

  // Step 4: Click on Login Button
  await page.click('button[type="submit"]');

  // Wait for navigation to complete
  await page.waitForLoadState('networkidle');

  // Step 5: Verify assertion of dashboard after login
  await expect(page).toHaveURL(/.*dashboard/);
  await expect(page.locator('h6:has-text("Dashboard")')).toBeVisible();
});
