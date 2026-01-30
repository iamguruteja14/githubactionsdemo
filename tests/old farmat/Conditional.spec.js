import{test,expect} from '@playwright/test'
 test('Perform test case using conditions', async({page})=>{
    await page.goto('https://register.rediff.com/register/register.php?FormName=user_details')
     const checkbox_stetus=await page.locator('//input[starts-with(@name,"chk_altemail")]').isChecked()
     console.log(checkbox_stetus)

     if(checkbox_stetus){
       await page.locator('//input[starts-with(@name,"chk_altemail")]').check()
       await expect(page.locator('//input[starts-with(@name,"chk_altemail")]')).toBeChecked()
     const checkbox_stetus=await page.locator('//input[starts-with(@name,"chk_altemail")]').isChecked()
       console.log(checkbox_stetus)
     }
     else{
         await page.locator('//input[starts-with(@name,"chk_altemail")]').check()
       await expect(page.locator('//input[starts-with(@name,"chk_altemail")]')).toBeChecked()
     const checkbox_stetus=await page.locator('//input[starts-with(@name,"chk_altemail")]').isChecked()
       console.log(checkbox_stetus)
     }
 })