describe('For loop Test suite', () => {

    it('TC1', () => {
        cy.visit('https://datatables.net/')

        cy.get('td[class*=dtr-control]').each(($button) => {
            cy.wrap($button).click()
        })
    })

    it('TC2', () => {
        cy.visit('https://datatables.net/')

        cy.get("#example_paginate > span > a[class='paginate_button ']").as("pages")
        cy.get("@pages").its("length").then((len) => [...Array(len).keys()]).each((index) => {
            cy.get("@pages").eq(index).click()
        })
    })

    it('TC3', () => {
        cy.visit('https://datatables.net/')

        cy.get("#example_paginate > span > a[class='paginate_button ']").as("pages")
        cy.get("@pages").its("length").then((len) => [...Array(len).keys()]).each((index) => {
            cy.get("@pages").eq(index).click()

            cy.get('td[class*=dtr-control]').each(($button) => {
                cy.wrap($button).click()

                cy.get('span.dtr-data').invoke('val').as('name')
                cy.get('@name').then((name) => {
                    cy.log('Salary: ' + name) //prints name
                })

            })
        })


    })

})