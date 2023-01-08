import {LoginPage} from "/CypressAutomation/cypress/pageobjects/LoginPage";
import {DashBoardPage} from "/CypressAutomation/cypress/pageobjects/DashBoardPage";

const loginPage = new LoginPage()
const dashBoardPage = new DashBoardPage()

describe("Login Page Test Suite", () => {
    beforeEach(() => {
        loginPage.openApplication()
    })

    it("TC1", () => {
        loginPage.enterEmail("admin@yourstore.com")
        loginPage.clearPassword()
        loginPage.clickLoginBtn()
        loginPage.verifyPasswordEmptyErrorMessage()
    })

    it("TC2", () => {
        loginPage.login("admin@yourstore.com", "admin")
        dashBoardPage.verifyDashboardPageDisplayed()
        dashBoardPage.clickOrderViewBtn()
    })

})