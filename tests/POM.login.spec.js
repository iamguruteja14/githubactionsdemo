import{test,expect,browser} from '@playwright/test'
import{LoginPage} from '../pages/login.po'
import data from '../Test Data/login.json'

let login

test.describe("verify login functionalities",()=>{
    test.beforeEach(async({page})=>{
       
       login=new LoginPage(page)
        await login.launchUrl()
        await login.verifylogo()
    })
     
  


    test("verify the login with valid creds",async ()=>{

        await login.loginwithcreds(process.env.APP_USERNAME,process.env.APP_PASSWORD)
        await login.loginsuccess()
    })

     test("verify the login with invalid username and valid password",async ()=>{

        await login.loginwithcreds(data.wrongusername,process.env.APP_PASSWORD)
        await login.loginError()
    })

     test("verify the login with valid username and invalid password",async ()=>{

        await login.loginwithcreds(process.env.APP_USERNAME,data.wrongpassword)
        await login.loginError()
    })
     test("verify the login with invalid username and invalid password",async ()=>{

        await login.loginwithcreds(data.wrongusername,data.wrongpassword)
        await login.loginError()
    })
})