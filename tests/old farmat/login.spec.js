import{test,expect} from '@playwright/test'
test('verify the login functionalities in orange hrm',async({page})=>{
    test.setTimeout(120000)
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.locator('//input[@name="username"]').fill(process.env.APP_USERNAME)
    await page.locator('//input[@type="password"]').fill(process.env.APP_PASSWORD)
    await page.locator('//button[text()=" Login "]').click()
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    await expect(page.getByAltText('client brand banner')).toBeVisible()
    
})
test.setTimeout(120000)
test('verify the login with valid username and invalid  password',async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.locator('//input[@name="username"]').fill('Admin')
    await page.locator('//input[@type="password"]').fill('admin1234')
    await page.locator('//button[text()=" Login "]').click()
    await expect(page.locator('//div[@role="alert"]')).toBeVisible()
})


test('verify the login with invalid username and valid password ',async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.locator('//input[@name="username"]').fill('Adminn')
    await page.locator('//input[@type="password"]').fill('admin123')
    await page.locator('//button[text()=" Login "]').click()
    await expect(page.locator('//div[@role="alert"]')).toBeVisible()
})
test('verify the login with invalid username and invalid password ',async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.locator('//input[@name="username"]').fill('Adminn')
    await page.locator('//input[@type="password"]').fill('admin1234')
    await page.locator('//button[text()=" Login "]').click()
    await expect(page.locator('//div[@role="alert"]')).toBeVisible()
})
test('verify the login with emptyfield ',async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.locator('//input[@name="username"]').fill('')
    await page.locator('//input[@type="password"]').fill('')
    await page.locator('//button[text()=" Login "]').click()
    await expect(page.locator('(//span[text()="Required"])[1]')).toBeVisible()
})

