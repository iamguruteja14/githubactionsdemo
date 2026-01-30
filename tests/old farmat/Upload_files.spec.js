import{test,expect} from '@playwright/test'
test('Verify the Add Employees',async({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.locator('//input[@name="username"]').fill('Admin')
    await page.locator('//input[@type="password"]').fill('admin123')
    await page.locator('//button[text()=" Login "]').click()
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    await expect(page.getByAltText('client brand banner')).toBeVisible()
    await page.locator('//span[text()="PIM"]').click()
    await page.locator('//a[text()="Add Employee"]').click()
    await page.getByPlaceholder('First Name').fill("guruteja")
    await page.getByPlaceholder('Last Name').fill('dt')
    let r = (Math.random() + 1).toString(36).substring(7)
    await page.locator('(//input[@class="oxd-input oxd-input--active"])[2]').fill(r)
    
    //uploading files
    await page.setInputFiles('//input[@type="file"]','Test Data/uploadfiles/image.png')

    await page.locator('//button[@type="submit"]').click()
    await page.waitForTimeout(10000)
    await expect(page.locator('//a[text()="Personal Details"]')).toBeVisible()

})