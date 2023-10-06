describe('Test Case 1: Verify that the login page is accessible and the user can log in successfully using the provided credentials.', () => {
 
  it('Navigates to the login page and logs in successfully', () => {
 
    cy.visit('https://gor-pathology.web.app/')
    cy.get('input[name="email"]').type('test@kennect.io')
    cy.get('input[name="password"]').type('Qwerty@1234')
    cy.get('button[type="submit"]').first().click()
    cy.url().should('include', '/dashboard')
 
  })
})
