import { Given, When, Then} from "cypress-cucumber-preprocessor/steps"
import {LoginPage} from "E:/CypressAutomation/cypress/e2e/BDD/pageobjects/LoginPage";

const loginPage = new LoginPage()

Given('user open login page', () => {
    loginPage.openApplication()
})

When('user enter valid username and empty password and click on Login button', () => {
    loginPage.enterEmail("admin@yourstore.com")
    loginPage.clearPassword()
    loginPage.clickLoginBtn()
})

When('user enter empty username and valid password and click on Login button', () => {
    loginPage.clearEmail()
    loginPage.enterPassword("admin")
    loginPage.clickLoginBtn()
})

When('user login to application', () => {
    loginPage.login("admin@yourstore.com", "admin")
})

Then('user verify error messege', () =>  {
    loginPage.verifyPasswordEmptyErrorMessage()
})