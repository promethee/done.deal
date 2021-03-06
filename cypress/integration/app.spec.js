// cypress/integration/app.spec.js

describe('Navigation', () => {
  it('should navigate to the users page', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/')

    // Find a link with an href attribute containing "users" and click it
    cy.get('[href*="users"]').click()

    // The new url should include "/users"
    cy.url().should('include', '/users')

    // The new page should contain an h1 with "Users page"
    cy.get('h1').contains('Users Page')

    // The new page should contain at least one usercard div
    cy.get('[data-test="usercard"]')
  })
})