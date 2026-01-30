import{test,expect} from '@playwright/test'

const jobtitlesname={
    title1:"SDET1",
    title2:"QA Engineer",
    title3:"Automation tester"
}

for(let title in jobtitlesname){
    test(`verify the add jobtitles-${title}`, async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('link', { name: 'Dashboard' })).toBeVisible();
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.getByText('Job', { exact: true }).click();
  await page.getByRole('menuitem', { name: 'Job Titles' }).click();
  await page.getByRole('button', { name: ' Add' }).click();
  await page.getByRole('textbox').nth(1).click();
//   await page.getByRole('textbox').nth(1).fill('QA Engineer');
//   await page.getByRole('textbox').nth(1).click();
  let r = (Math.random() + 1).toString(36).substring(7)
  await page.getByRole('textbox').nth(1).fill(jobtitlesname[title]+r);
  await page.getByRole('textbox', { name: 'Type description here' }).click();
  await page.getByRole('textbox', { name: 'Type description here' }).fill('Ensure the Quality of the application');
  await page.getByRole('textbox', { name: 'Add note' }).click();
  await page.getByRole('textbox', { name: 'Add note' }).fill('nothing');
  await page.getByRole('button', { name: 'Save' }).click();
  await expect(page.getByRole('heading', { name: 'Job Titles' })).toBeVisible();
});
}

const ADDEMP={
    Emp1:{
        firstname:"guru",
        lastname:"teja"
    },
    Emp2:{
         firstname:"anil",
        lastname:"kumar"
    },

     Emp3:{
         firstname:"pavan",
        lastname:"ullikata"
    }
    
}

for(let employees in ADDEMP ){
    test(`Verify the Add Employees-${employees}`,async({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.locator('//input[@name="username"]').fill('Admin')
    await page.locator('//input[@type="password"]').fill('admin123')
    await page.locator('//button[text()=" Login "]').click()
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    await expect(page.getByAltText('client brand banner')).toBeVisible()
    await page.locator('//span[text()="PIM"]').click()
    await page.locator('//a[text()="Add Employee"]').click()
    await page.getByPlaceholder('First Name').fill(ADDEMP[employees].firstname)
    await page.getByPlaceholder('Last Name').fill(ADDEMP[employees].lastname)
    let r = (Math.random() + 1).toString(36).substring(7)
    await page.locator('(//input[@class="oxd-input oxd-input--active"])[2]').fill(r)
    await page.locator('//button[@type="submit"]').click()
    await page.waitForTimeout(10000)
    await expect(page.locator('//a[text()="Personal Details"]')).toBeVisible()

})
}