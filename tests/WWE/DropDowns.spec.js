import{test,expect} from '@playwright/test'
test('verify the dropdowns functionalities',async ({page})=>{
    await page.goto('https://register.rediff.com/register/register.php?FormName=user_details')
    //selecting dropdown by using test
    await page.locator('//select[starts-with(@name,"DOB_Month")]').selectOption('JUN')
    await page.waitForTimeout(5000)
    //selecting dropdowns by using values
     await page.locator('//select[starts-with(@name,"DOB_Month")]').selectOption("07")
     //selecting dropdowns by using indexing
     await page.locator('//select[starts-with(@name,"DOB_Month")]').selectOption({index: 8})



})