import { expect } from "@playwright/test"

exports.LoginPage=class LoginPage{
    constructor(page){
        this.page=page
        this.logo= page.locator('img[alt="company-branding"]')
        this.usernameInput= page.locator('input[placeholder="Username"]')
        this.passwordInput=page.locator('input[placeholder="Password"]')
        this.loginBtn=page.locator('button[type="submit"]')
        this.loginErrorMsg=page.locator('//p[text()="Invalid credentials"]')
    }

    async launchUrl(){
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    }

    async verifylogo(){
        await expect(this.logo).toBeVisible()
    }
    async loginwithcreds(username,password){
        await this.usernameInput.fill(username)
        await this.passwordInput.fill(password)
        await this.loginBtn.click()
    }

    async loginError(){
        await expect(this.loginErrorMsg).toBeVisible()
    }
    async loginsuccess(){
        await expect(this.page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    }
}