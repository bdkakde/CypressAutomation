Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
});
describe('Scroll Test suite', () => {
    it('TC1', () => {
        cy.visit('https://portal2.passportindia.gov.in/AppOnlineProject/user/RegistrationBaseAction?request_locale=en')

        cy.get('#givenName').type("baban")

        cy.get('#givenName').invoke('val').as('name')
        cy.get('@name').then((x) => {
            cy.get('#loginId').type(x)
        })

    })

    it('TC2', () => {
        cy.visit('https://portal2.passportindia.gov.in/AppOnlineProject/user/RegistrationBaseAction?request_locale=en')

        //The other interesting thing about .invoke() val is that by passing a second argument to this 
        //function will enable you to change the value and (kinda) simulate pasting a text to an textarea.
        cy.get("#givenName").invoke('val', 'baban')

        cy.get("#givenName").clear()

        //In our case, we need to fire the blur event to our input field:
        cy.get("#givenName").invoke('val', 'baban').trigger('blur')
        cy.wait(5000)

    })

    it('TC3', () => {
        cy.visit('https://portal2.passportindia.gov.in/AppOnlineProject/user/RegistrationBaseAction?request_locale=en')

        // This is the same as a user holding down SHIFT and ALT, then pressing b
        // The modifiers are released before typing 'hello'
        cy.get('#givenName').type('{shift+alt+b}hello')

        cy.get('#givenName').clear()

        // This is the same as a user holding down SHIFT and ALT, then typing 'hello'
        // The modifiers are held for the duration of the command.
        cy.get('#givenName').type('{shift}{alt}hello')

    })

    it('TC4', () => {
        cy.visit('https://portal2.passportindia.gov.in/AppOnlineProject/user/RegistrationBaseAction?request_locale=en')

        //Type using javascript
        cy.window().then((win) => { 
            win.document.getElementsByClassName('txtbox')[0].value = "Ganesh" 
            cy.task('log', 'This will be output to the terminal')
         });

    })

    it('TC5', () => {
        cy.visit('https://portal2.passportindia.gov.in/AppOnlineProject/user/RegistrationBaseAction?request_locale=en')

        cy.get('#givenName').click().focused().type('dfdjfhjdhfjdhfjdhfdj')

    })

})

//cy.get('').click().focused().type('')