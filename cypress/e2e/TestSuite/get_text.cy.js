Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
});
describe('Scroll Test suite', () => {
    it('TC1', () => {
        cy.visit('https://portal2.passportindia.gov.in/AppOnlineProject/user/RegistrationBaseAction?request_locale=en')

        cy.get('.hd_blue').should('have.text', 'User Registration')
        //cy.get('#frmSample').find('a').should('have.text','User Registration')

        cy.get('#givenName').type("baban")

        cy.get('#givenName').invoke('val').as('name')
        cy.get('@name').then((name) => {
            cy.log('Student Name: ' + name) //prints name
        })

        cy.get('#dcdrLocation').select('Goa')

        cy.get('#givenName').invoke('val').as('name')
        cy.get('@name').then((name) => {
            cy.get('#loginId').type(name)
        })

    })

    it('TC2', () => {
        cy.visit('https://portal2.passportindia.gov.in/AppOnlineProject/user/RegistrationBaseAction?request_locale=en')

        //Read element text amd log
        cy.get(".hd_blue").then(($elem) => {
            const txtValue = $elem.text()
            cy.log(txtValue)
        })

        //Enter text in textfield and read value
        //cy.get('#givenName').type("baban")
        cy.get('.hd_blue').invoke('text').as('storedValue')

        cy.get('@storedValue').then((storedValue) => {
            //Access storedValue here
            cy.log(storedValue) //prints value
            cy.get('#surname').type(storedValue)
        })

        //Check value
        cy.get('#cpvLocationPO').invoke('val').then(val => {
            const attrValue = val;
            cy.log(attrValue)
        });

        //Check attribute value
        cy.get('#cpvLocationPO').invoke('prop', 'checked').then(state => {
            cy.log(`checkbox is ${state ? 'checked' : 'not checked'}`)
            console.log(`checkbox is ${state ? 'checked' : 'not checked'}`)
        });

        //Check link is valid
        cy.get('a').invoke('attr', 'href').then(href => {
            cy.request(href).its('status').should('eq', 200);

        });

    })

    it('TC3', () => {
        cy.visit('https://portal2.passportindia.gov.in/AppOnlineProject/user/RegistrationBaseAction?request_locale=en')

        //To check the href attribute, you can write a test like this:
        cy.get('#rti > a').invoke('attr', 'href').should('eq', '/AppOnlineProject/online/rti')

        //The other interesting thing about .invoke() val is that by passing a second argument to this 
        //function will enable you to change the value and (kinda) simulate pasting a text to an textarea.
        cy.get("#givenName").invoke('val', 'baban')
   
    })

    it('TC4', () => {
        cy.visit('https://portal2.passportindia.gov.in/AppOnlineProject/user/RegistrationBaseAction?request_locale=en')

        //you can test if the link is actually valid, by making an http request to it
        cy.get(':nth-child(1) > .Footer_External_Links > ul > :nth-child(3) > a').invoke('attr', 'href').then(href => {
            cy.request(href).its('status').should('eq', 200);
        });
    })

    it('TC5', () => {
        cy.visit('https://portal2.passportindia.gov.in/AppOnlineProject/user/RegistrationBaseAction?request_locale=en')

        cy.xpath("(//a[contains(text(),'FAQs')])[1]").click()
        //Read text of all list elements
        cy.get('#faqSub li').each(($li) => cy.log($li.text()))
        
    })


})