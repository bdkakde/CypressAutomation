
describe('example to-do app', () => {
  beforeEach(() => {
    cy.log('I run before every test in every spec file!!!!!!')
    cy.visit(Cypress.config('baseUrl'))
    cy.log(Cypress.currentTest)
    cy.log(Cypress.platform)
  })

  it('Check home page display', () => {

    const toTxb = '.zEiP-destination > .BCcW > .k_my > .k_my-input'

    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })

    cy.title().should('eq', 'Search Flights, Hotels & Rental Cars | KAYAK')
    cy.title().should('include', 'KAYAK')

    cy.get(toTxb).type('at')

    cy.get("div[class='JyN0-name-row']").each(function ($ele, index, $list) {
      cy.log($ele.text())
      if ($ele.text().includes('Athens, Attica, GreeceATH')) {
        cy.wrap($ele).click()
      }
    })
    cy.wait(10000)

    cy.get('.zEiP-submit > .Iqt3 > .Iqt3-button-container > .Iqt3-button-content').click()

  })

})