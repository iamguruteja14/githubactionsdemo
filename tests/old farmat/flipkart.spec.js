    import{test,expect} from '@playwright/test'
    test('verify add two mobile cost',async({page})=>{
        await page.goto('https://www.flipkart.com/')
        await page.locator('input[name="q"]').fill("iphone 17")
        await page.keyboard.press('Enter')
        const price1=await page.locator('.hZ3P6w.DeU9vF').first().textContent()
        const price2=await page.locator('.hZ3P6w.DeU9vF').nth(1).textContent()
        console.log(price1,price2)
    //  console.log("total = "+(Number(price1.replace("₹","").replace(",",""))+ Number(price2.replace("₹","").replace(",","").replace(",",""))))
        console.log("total = " + (Number(price1.replace("₹","").replace(",","").replace(",","")) + Number(price2.replace("₹","").replace(",","").replace(",",""))))


     })