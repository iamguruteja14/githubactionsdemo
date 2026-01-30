import{test,expect} from '@playwright/test'

import data from "../../Test Data/demoqa.json"

test('Verify the Add Employees',async({page})=>{
    await page.goto('https://demoqa.com/')
    await page.locator('(//div[@class="avatar mx-auto white"])[1]').click()
    await page.locator('//span[contains(., "Text")]').click()
    await page.getByPlaceholder('Full Name').fill(data['Full Name'])
    let r = (Math.random() + 1).toString(36).substring(7)
    let email="demoqa"+r+"@gmail.com"
    await page.locator('#userEmail').fill(email)
    await page.locator('#currentAddress').fill(data['Current Address'])
    await page.locator('#permanentAddress').fill(data['Permanent Address'])
    await page.locator('button[id="submit"]').click()
    await expect(page.locator('p[id="name"]')).toContainText('Pavan kumar')
})