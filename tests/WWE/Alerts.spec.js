const { test, expect } = require('@playwright/test')

test.describe('working with the alerts', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/javascript_alerts')
    })

    test('working with simple alerts alerts', async ({ page }) => {

        //wait for the alerts and verify the message
        page.on('dialog', async guru => {
            expect(guru.message()).toBe('I am a JS Alert')
            await guru.accept()
        })
        //trigger the alerts
        await page.locator('text=Click for JS Alert').click()

    })
    test("working with confirm alerts", async ({ page }) => {
        //trigger alerts
        

        page.on('dialog', async dialog => {
            expect(dialog.type()).toBe('confirm')
            await dialog.dismiss()
        })
        
        await page.locator('button[onclick="jsConfirm()"]').click()

        
        await page.waitForTimeout(5000)
    })

    test("working with the promt alerts",async({page})=>{
        page.on('dialog',async dialog=>{
            expect(dialog.type()).toBe("prompt")
            await dialog.accept("guru")
        })
        await page.locator('//button[@onclick="jsPrompt()"]').click()
    })
})
