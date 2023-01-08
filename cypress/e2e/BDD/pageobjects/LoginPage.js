export class LoginPage {

    elements = {
        emailTxb: () => cy.get("#Email"),
        passwordTxb: () => cy.get("#Password"),
        loginBtn: () => cy.get("button[class='button-1 login-button']"), 
        emptyPasswordErrorMessage: () => cy.get("div[class='message-error validation-summary-errors']")
    }

    openApplication() {
        cy.visit('https://admin-demo.nopcommerce.com/')
        cy.viewport(1920, 1080)
    }

    enterEmail(username) {
        this.elements.emailTxb().clear().type(username);
        return this
    }

    clearEmail() {
        this.elements.emailTxb().clear()
        return this
    }

    enterPassword(pswd) {
        this.elements.passwordTxb().clear().type(pswd)
        return this
    }

    clearPassword() {
        this.elements.passwordTxb().clear()
        return this
    }

    clickLoginBtn() {
        this.elements.loginBtn().click()
    }

    login(username, password) {
        this.enterEmail(username)
        this.enterPassword(password)
        this.clickLoginBtn()
    }

    verifyPasswordEmptyErrorMessage() {
        return this.elements.emptyPasswordErrorMessage().should("be.visible")
    }
}

