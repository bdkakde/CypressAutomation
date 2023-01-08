import { Given, When, Then} from "cypress-cucumber-preprocessor/steps"
import {DashBoardPage} from "E:/CypressAutomation/cypress/e2e/BDD/pageobjects/DashBoardPage";

const dashBoardPage = new DashBoardPage()


Then('user verify dashboard page', () => {
    dashBoardPage.verifyDashboardPageDisplayed()
})