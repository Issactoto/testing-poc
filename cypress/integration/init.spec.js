// init.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test


describe('The MadLibs Main Form', () => {
    it('loads successfully', () => {
        // ARRANGE
        cy.visit('http://localhost:3000')
        const firstName = "Issac"
        const lastName = "To"
        cy.get('input[name="firstName"]').type(firstName).should('have.value', firstName)
        cy.get('input[name="lastName"]').type(lastName).should('have.value', lastName)
        // cy.get('[name="testingDropDown"]').select('A')

    })
})