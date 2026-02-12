import { expect } from "@playwright/test"

exports.loginpage=class loginpage{
   
    constructor(page){
        this.page=page
        this.username= page.locator('(//input[@type="text"])[1]')
        this.email=page.locator('(//input[@type="text"])[2]')
        this.select_country=page.locator('(//select[@class="form-control form-select rounded-0 undefined"])[1]')
        this.select_Account=page.locator('(//select[@class="form-control form-select rounded-0 undefined"])[2]')
        this.password=page.locator('(//input[@type="password"])[1]')
        this.confirm_password=page.locator('(//input[@type="password"])[2]')
        this.check_box=page.locator('input[type="checkbox"]')
        this.button=page.locator('span[class="after"]')
    }

    async launchUrl(){
        await this.page.goto('https://qabrains.com/auth/signup')
    }

    async Create_Accout(){
        await this.username.fill("Anilkumar")
        await this.email.fill("anil123@gmail.com")
        await this.select_country.selectOption({label:"India"})
        await this.select_Account.selectOption({label:'Personal'})
        await this.password.fill("Abcd@123")
        await this.confirm_password.fill("Abcd@123")
        await this.check_box.check()
    }

    async Sign_btn_enable(){
        await expect(this.button).toBeEnabled()
    }
}
