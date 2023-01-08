describe('Loading single fixture', () => {
    it('loads', () => {
      
        cy.fixture("profile").then((user) => { 
        cy.log(user.name)
        cy.log(user.email) 
        })

    })
  })