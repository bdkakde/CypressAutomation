Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
});

describe('Upload Test suite', () => {
    it('TC1', () => {
        cy.visit('https://demo.guru99.com/test/upload/')

        cy.get('#uploadfile_0').selectFile('E:\\CypressAutomation\\cypress\\fixtures\\users.json')

        cy.get('#terms').click()

        cy.get('#submitbutton').click()

        cy.get('#res > center').should('be.visible')

    })
})