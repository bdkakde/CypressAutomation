import 'cypress-iframe';

describe('Alert Test Suite', () => {

    it('TC1_check iframe', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.frameLoaded('#courses-iframe')//Load desired iFrame
        cy.wait(1000)
        cy.iframe().find("a[href*='mentorship']").eq(0).click()
    })

    it('TC2_check Alert', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
       
        cy.get("#alertbtn").click()

        cy.on('window:alert', (actualText) => {
            const expectedText = 'Hello , share this practice page and share your knowledge'
            expect(actualText).to.equal(expectedText)
            console.log(actualText)
        })
    })

    it('TC3_check confirm', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
       
        cy.get("#confirmbtn").click()

        cy.on('window:confirm', (actualText) => {
            const expectedText = 'Hello , Are you sure you want to confirm?'
            expect(actualText).to.equal(expectedText)
            console.log(actualText)
        })
    })

})

