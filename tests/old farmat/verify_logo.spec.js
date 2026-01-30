import {test,expect} from '@playwright/test'
 
test("verify the logo of the OrangeHRM", async({page})=>{
    test.setTimeout(120000)
    await page.sett
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await expect(page.locator('//img[@alt="company-branding"]')).toBeVisible() 
})