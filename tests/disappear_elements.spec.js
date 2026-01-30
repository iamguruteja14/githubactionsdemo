import{test,expect} from '@playwright/test'
test('working on disappear elements',async({page})=>{
    await page.goto('https://www.flipkart.com/')
    await page.locator('input[name="q"]').fill("iphone")
    await page.locator('(//a[@class="Q4gOLj"])[2]').click()
})