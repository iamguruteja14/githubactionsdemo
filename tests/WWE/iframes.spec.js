import{test,expect} from '@playwright/test'

test('verify the working of iframes',async({page})=>{
    await page.goto('https://jqueryui.com/checkboxradio/')
    await page.frameLocator('iframe[src="/resources/demos/checkboxradio/default.html"]').locator('//label[text()="2 Star"]').check()
    await page.waitForTimeout(5000)
    await page.close()
})  