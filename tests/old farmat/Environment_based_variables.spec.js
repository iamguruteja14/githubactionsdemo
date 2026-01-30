import{test,expect} from '@playwright/test'

import Preproddata from "../../Test Data/preprod.json"
import QAdata from "../../Test Data/QA.json"
import UATdata from "../../Test Data/UAT.json"

if(process.env.Environment==="PREPROD"){

    test('verify the login functionalities',async({page})=>{
    //test.setTimeout(120000)
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.locator('//input[@name="username"]').fill(Preproddata.username)
    await page.locator('//input[@type="password"]').fill(Preproddata.password)
    await page.locator('//button[text()=" Login "]').click()
    await expect(page.locator('//div[@role="alert"]')).toBeVisible()  
})

}
else if(process.env.Environment==="QA"){
     test('verify the login functionalities',async({page})=>{
   // test.setTimeout(120000)
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.locator('//input[@name="username"]').fill(QAdata.username)
    await page.locator('//input[@type="password"]').fill(QAdata.password)
    await page.locator('//button[text()=" Login "]').click()
    await expect(page.locator('//div[@role="alert"]')).toBeVisible()  
})
}
else if(process.env.Environment==="UAT"){
     test('verify the login functionalities',async({page})=>{
    //test.setTimeout(120000)
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.locator('//input[@name="username"]').fill(UATdata.username)
    await page.locator('//input[@type="password"]').fill(UATdata.password)
    await page.locator('//button[text()=" Login "]').click()
    await expect(page.locator('//div[@role="alert"]')).toBeVisible()  
})
}