import{test,expect,browser} from '@playwright/test'
import{loginpage} from '../pages/QAlogin.po'
test('verify the login with creds using POM',async({page})=>{
    let guru
    guru=new loginpage(page)
    await guru.launchUrl()
    await guru.Create_Accout()
    await guru.Sign_btn_enable()
})