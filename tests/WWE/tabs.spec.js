import{test,expect} from '@playwright/test'

test('working with the tabs',async({page})=>{
    await page.goto('https://www.flipkart.com/')
    await page.locator('input[name="q"]').fill('laptop Dell')
    await page.keyboard.press("Enter")

    const[newpage]=await Promise.all([
         page.waitForEvent('popup'),
         page.locator('(//div[@class="RG5Slk"])[1]').click()
    ])


    await newpage.locator("text=Add to cart").click()
})