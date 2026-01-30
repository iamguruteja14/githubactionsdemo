import { test, expect } from '@playwright/test';

test('Login to OrangeHRM using credentials from page', async ({ page }) => {

  // 1. Launch URL
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  // 2. Capture the credentials text shown on page
  // Example text: "Username : Admin"
  //               "Password : admin123"

  //to store or assign some text to the variable we use  .textContent()
  const usernameText = await page.locator('//p[text()="Username : Admin"]').textContent();
  const passwordText = await page.locator('//p[text()="Password : admin123"]').textContent();

  // 3. Extract actual values
  const username = usernameText.split(':')[1].trim();
  const password = passwordText.split(':')[1].trim();

  // 4. Use extracted values in input fields
  await page.locator('input[name="username"]').fill(username);
  await page.locator('input[name="password"]').fill(password);

  // 5. Click Login
  await page.locator('button[type="submit"]').click();

  // 6. Validate successful login
  await expect(page).toHaveURL(/dashboard/);
});
