export class BasePage {

    navigate(url) {
        cy.visit(url)
    }

    getElement(element) {
        return cy.get(element);
    }

    getPageTitle() {
        return cy.title()
    }

    getAlertMessage(alertMsg) {
        return cy.get(alertMsg)
    }

    clickElement(element) {
       this.getElement.click()
    }

    enterText(element, text) {
        this.getElement.type(text)
    }

    selectListValue(element, value) {
        this.getElement.select(value)
    }
}