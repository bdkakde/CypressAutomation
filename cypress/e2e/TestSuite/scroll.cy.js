describe('Scroll Test suite', () => {
    it('TC1', () => {
      cy.visit('https://www.rediff.com/')
      cy.get('[href="http://mypage.rediff.com/feedback"]').scrollIntoView().should('be.visible')

      cy.wait(5000)

      cy.get('.mailicon').scrollIntoView()
    })
  })