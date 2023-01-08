
describe('Rest api testing suite', () => {


  it('Test GET Request', () => {

    cy.request('https://jsonplaceholder.cypress.io/comments')
      .then((response) => {
        cy.log(response.status)
        cy.log(response.duration)
        cy.log(response.body)
        cy.log(response.headers)
        cy.log(response.isOkStatusCode)
        cy.log(response.statusText)
        cy.log(response.requestHeaders)
      
        expect(response).property('status').to.equal(200)
        expect(response).property('body').to.have.property('length').and.be.oneOf([500, 501])
        expect(response).to.include.keys('headers', 'duration')

        
      })

  })


})
