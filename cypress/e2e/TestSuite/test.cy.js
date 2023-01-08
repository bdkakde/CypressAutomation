describe('Select Options Test suite', () => {
    it('TC1', () => {
        cy.visit('https://portal2.passportindia.gov.in/AppOnlineProject/user/RegistrationBaseAction?request_locale=en')
       
        cy.get('#dcdrLocation').select('Goa').invoke('val').should('equal', '16')
        cy.get('#dcdrLocation').contains('Nagpur')
        //cy.get('#dcdrLocation').should('have.text', 'Nagpur');
    })

 })
