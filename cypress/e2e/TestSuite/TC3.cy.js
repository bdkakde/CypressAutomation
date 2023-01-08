
describe('example to-do app', () => {



  it('Login to application', () => {
    //cy.fixture('../fixtures/login.json').as('testdata');
    cy.visit('https://github.com')
    cy.viewport(1920, 1080)
    cy.get('.mr-3 > .HeaderMenu-link').click()

    cy.fixture('../fixtures/login.json').then((dataFixture) => {
      cy.login(dataFixture[0].username, dataFixture[0].password);
    })

    cy.get("div[class='flash flash-full flash-error ']").should('be.visible')
    cy.contains('Incorrect username or password.')
  })

})