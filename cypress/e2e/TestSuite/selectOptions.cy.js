describe('Select Options Test suite', () => {
  it('TC1', () => {
    cy.visit('https://register.rediff.com/register/register.php?FormName=user_details')

    let optn = 'Angola'
    //Select the option with the text 
    cy.get('#country').select(optn).should('have.value', 5)

    cy.get('#country').select(optn).find(':selected').contains(optn)

    cy.get('#country').select(optn).find('option:selected').should('have.text', optn);
    cy.log('Selected dropdown value is ' + optn)

    //Select the option with index
    cy.get('#country').select("India")
    cy.get(':nth-child(1) > [colspan="3"] > select').select(2).invoke("val").should("eq", "Agra")
  })

  it.skip('TC2', () => {
    cy.visit('https://portal2.passportindia.gov.in/AppOnlineProject/user/RegistrationBaseAction?request_locale=en')

    //Get all options element text
    let array = []
    cy.get('#dcdrLocation').each(($option, index) => {
      array.push(Cypress.$($option).text())
      console.log(array[index]);
    })

  })

  it('TC4', () => {
    cy.visit('https://register.rediff.com/register/register.php?FormName=user_details')

    let optn = 'Angola'
    //Select the option with the text 
    cy.get('#country').select(optn).should('have.value', 5)

    cy.get('#country').select(optn).find(':selected').contains(optn)

    cy.get('#country').select(optn).find('option:selected').should('have.text', optn);
    cy.log('Selected dropdown value is ' + optn)

    //Select the option with index
    cy.get('#country').select("India")
    cy.get(':nth-child(1) > [colspan="3"] > select').select(2).invoke("val").should("eq", "Agra")
  })

})