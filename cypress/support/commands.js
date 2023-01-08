// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

require('cypress-iframe');
require('cypress-xpath');
require('cypress-recurse');


import { recurse } from "cypress-recurse"

Cypress.Commands.add("login", (username, password) => {
  cy.get("#login_field").type(username);
  cy.get("#password").type(password);
  cy.get("input[name='commit']").click();
});


Cypress.Commands.add("paginationClickNext", (element1, element2) => {
  recurse(() =>
    cy.get(element1), ($next) => $next.hasClass(element2), {
    delay: 1000,
    post() {
      cy.get(element1).click()
    }
  })
})


//Assertions
/*
 * @name elementLength
 * @description Compare the length to an element given with a value given by parameter
 * @param String locator
 * @param String length
 */
Cypress.Commands.add("checkElementLength", (locator, length) => {
  cy.get(locator).should("have.length", length);
});


/*
 * @name elementValue
 * @description Compare the value to an element given with a value given by parameter
 * @param String locator
 * @param String value
 */
Cypress.Commands.add("checkElementValue", (locator, value) => {
  cy.get(locator).should("have.value", value);
});


/*
 * @name elementContains
 * @description Assert if an element given contains an string(text) value given by parameter
 * @param String locator
 * @param String text
 */
Cypress.Commands.add("checkElementContainsText", (locator, text) => {
  cy.get(locator).should("contain", text);
});


/*
 * @name iselementVisible
 * @description Verify if an element is visible
 * @param String locator
 */
Cypress.Commands.add("iselementVisible", (locator) => {
  cy.get(locator).should("be.visible");
});


/*
 * @name checkRadioButton
 * @description Check the Radio button sent by locator
 * @param String locator
 */
Cypress.Commands.add("checkElement", (locator) => {
  cy.get(locator).should('be.visible').check();
});


/*
 * @name typeField
 * @description Type a text on a selected locator
 * @param String locator
 * @param String text
 */
Cypress.Commands.add("typeText", (locator,text) => {
  cy.get(locator).should('be.visible').type(text)
});


/*
 * @name clickElement
 * @description Click the locator sent by parameter
 * @param String locator
 */
Cypress.Commands.add("clickElement", (locator) => {
  cy.get(locator).should('be.visible').click();
});


/*
 * @name verifyTextofElement
 * @description Verify if the element contains some text sended by paramater
 * @param String locator
 * @param String text
 */
Cypress.Commands.add("verifyElementText", (locator, text) => {
  cy.get(locator).then(function (e) {
    const t = e.text();
    expect(t).to.contains(text);
  })
})

/*
  * @name getAlertMessage
  * @description Get the Alert Message text and then compare it
  * @param String locator
  * @param String alertText
  */
Cypress.Commands.add("getAlertMessage", (locator, alertText) => {
  cy.get(locator).click();
  cy.on("window:alert", (str) => {
    expect(str).to.equal(alertText);
  });
});


/*
  * @name getConfirmMessage
  * @description Get the Confirm Message text and then compare it
  * @param String locator
  * @param String confirmText
  */
Cypress.Commands.add("getConfirmMessage", (locator, confirmText) => {
  cy.get(locator).click();
  cy.on("window:confirm", (str) => {
    expect(str).to.equal(confirmText);
  });
});

/*
   * @name verifyCheck
   * @description Verify if a checkbox is checked
   * @param String locator
   */
Cypress.Commands.add("verifyCheck", (locator) => {
  cy.get(locator).should("be.checked");
});


 /*
   * @name verifyUnCheck
   * @description Verify if a checkbox is unchecked
   * @param String locator
   */
 Cypress.Commands.add("verifyUnCheck", (locator) => {
  cy.get(locator).should("not.be.checked");
});


/*
   * @name verifyElementDisabled
   * @description Verify if a element is disabled
   * @param String locator
   */
Cypress.Commands.add("verifyElementDisabled", (locator) => {
  cy.get(locator).should("be.disabled");
});


/*
   * @name verifyElementEnabled
   * @description Verify if a element is enabled
   * @param String locator
   */
Cypress.Commands.add("verifyElementEnabled", (locator) => {
  cy.get(locator).should("be.enabled");
});


/*
 * @name selectDropdownwithValue
 * @description Select a value on a dropdown using the Value attribute
 * @param String locator
 * @param String dropdownValue
 */
Cypress.Commands.add("selectDropdownWithValue", (locator, dropdownValue) => {
  cy.get(locator).select(dropdownValue, { force: true });
});
/*
 * @name selectDropdownwithIndex
 * @description Select a value on a dropdown using the index attribute
 * @param String locator
 * @param String index
 */
Cypress.Commands.add("selectDropdownWithIndex", (locator, index) => {
  cy.get(locator).select(Number(index));
});


/*
 * @name goTo
 * @description Interacts to the browser you can use ('back'(Go back in browser's history),
 * 'forward'(Go forward in browser's history),-1,1(equivalent to clicking forward button))
 * @param String direction
 */
Cypress.Commands.add("goTo", (direction) => {
  cy.go(direction);
});


/*
   * @name verifyInputValue
   * @description Verify value of text box if have input tag
   * @param String value
   */
Cypress.Commands.add("verifyInputValue", (value) => {
  cy.get("input[value='${value}']").should('have.value', value);
});

