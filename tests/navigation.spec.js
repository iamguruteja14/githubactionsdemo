import { test, expect } from '@playwright/test';

test('Browser back and forward navigation in OrangeHRM', async ({ page }) => {

  // Step 1: Launch OrangeHRM
  await page.goto('https://opensource-demo.orangehrmlive.com/');

  // Step 2: Login
  await page.locator('input[name="username"]').fill('Admin');
  await page.locator('input[name="password"]').fill('admin123');
  await page.locator('button[type="submit"]').click();

  // Step 3: Verify Dashboard
  await expect(page).toHaveURL(/dashboard/);
  await page.waitForTimeout(5000)

  // Step 4: Navigate to PIM module
  await page.locator('//span[text()="PIM"]').click();
  await expect(page).toHaveURL(/pim/);
  await page.waitForTimeout(5000)

  // Step 5: Go back (PIM → Dashboard)
  await page.goBack();
  await expect(page).toHaveURL(/dashboard/);
  await page.waitForTimeout(5000)

  // Step 6: Go forward (Dashboard → PIM)
  await page.goForward();
  await expect(page).toHaveURL(/pim/);
  await page.waitForTimeout(5000)

});
