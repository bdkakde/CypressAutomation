import { recurse } from "cypress-recurse"

const nextBtn = '#example_next'
const nextBtnDisabled = 'paginate_button next disabled'

describe('Pagination Test Suite', () => {

    it('TC1', () => {
        cy.visit('https://datatables.net/')
 
        // recurse(() =>
        //     cy.get(nextBtn), ($next) => $next.hasClass(nextBtnDisabled), {
              
        //         delay: 1000,
        //         post() {
        //             cy.get(nextBtn).click()
        //         }
                
        //     }
        // )

        cy.paginationClickNext(nextBtn, nextBtnDisabled)
    })
})