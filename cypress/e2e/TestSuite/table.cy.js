describe("Table Test Suite", () => {

    beforeEach(() => {
        // "this" points at the test context object
        cy.visit("https://datatables.net/")
    })

    it("TC1", () => {
       
        //Get Headers
        cy.get('#example > thead > tr > th').each(($elm, index, $list) => {
            const t = $elm.text();
            cy.log(t)
        })

        //Get length of elements
        cy.get('#example > thead > tr > th').then((elm) => {
            const t = elm.length;
            cy.log(t)
        })
    })

    it("TC2", () => {
       
        //Get data of first column
        cy.get('#example> tbody > tr > td:nth-child(1)').each(($elm, index, $list) => {
           
            const t = $elm.text();
            cy.log(t)
        })
    })

    it("TC3", () => {
        
        //Get data of row
        cy.get('#example tbody > tr:nth-of-type(1)').each(($elm, index, $list) => {
            
            const t = $elm.text();
            cy.log(t)
           
        })
    })

    it("TC4", () => {
        
        //Get data of row and second column
        cy.get('#example tbody > tr:nth-of-type(1) > td:nth-child(2)').each(($elm, index, $list) => {
            
            const t = $elm.text();
            cy.log(t)
           
        })
    })

})