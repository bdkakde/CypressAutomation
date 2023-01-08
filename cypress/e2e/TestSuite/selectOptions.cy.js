describe('Select Options Test suite', () => {
  it('TC1', () => {
    cy.visit('https://portal2.passportindia.gov.in/AppOnlineProject/user/RegistrationBaseAction?request_locale=en')

    //Select the option with the text 
    cy.get('#dcdrLocation').select('Goa').should('have.value', '16')
    cy.task('log','Selected dropdown value is Goa')

    //Select the option with index
    //cy.get("#dcdrLocation").select(16).invoke("val").should("eq", "Goa")

  })

  it.skip('TC2', () => {
    cy.visit('https://portal2.passportindia.gov.in/AppOnlineProject/user/RegistrationBaseAction?request_locale=en')

    //Get all options element text
    let array = []
    cy.get('#dcdrLocation').each(($option, index )=> {
        array.push(Cypress.$($option).text())
        console.log(array[index]);               
    })

  })
})