const{test,expect}=require('@playwright/test')
 test('working with the drag and drop',async({page})=>{
    await page.goto('https://kitchen.applitools.com/ingredients/drag-and-drop')
    await page.locator('#menu-fried-chicken').dragTo(page.locator('#plate-items'))
 })