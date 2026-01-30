import{test,expect} from '@playwright/test'
//import { promises } from 'node:dns'

test('working with the downloads',async({page})=>{
await page.goto('https://the-internet.herokuapp.com/download')

    const[download]=await Promise.all([
        page.waitForEvent('download'),
        page.locator('a[href="download/sample.txt"]').click()

    ])

    const suggestedFileName = download.suggestedFilename()
    const filepath= 'downloads/'+suggestedFileName
    await download.saveAs(filepath)
    console.log(filepath)
})

test('downloading multiple files at a same time',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/download')

    const elements=['a[href="download/test-image.png"]','a[href="download/foto.png"]','a[href="download/search.png"]']

    for(let links of elements){
         const[download]=await Promise.all([
        page.waitForEvent('download'),
        page.locator(links).click()

    ])

    const suggestedFileName = download.suggestedFilename()
    const filepath= 'downloads/'+suggestedFileName
    await download.saveAs(filepath)
    console.log(filepath)
    }

})

