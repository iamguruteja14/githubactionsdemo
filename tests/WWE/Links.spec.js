const{test,expect}=require('@playwright/test')

test('working with different domain',async({page})=>{
    await page.goto('https://trello.com/')
    await page.locator('(//a[text()="Log in"])[1]').click()
    await page.getByPlaceholder('Enter your email').fill('tester123@gmail.com')
})