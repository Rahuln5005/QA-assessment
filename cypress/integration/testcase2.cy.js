describe('Test Case 2: Verify that the home page is accessible after successful login.', () => {
    it('Logs in and verifies that the user is redirected to the home page', () => {
      cy.visit('https://gor-pathology.web.app/') 
      cy.get('input[name="email"]').type('test@kennect.io')
      cy.get('input[name="password"]').type('Qwerty@1234')
      cy.get('button[type="submit"]').first().click() 
      cy.url().should('include', '/dashboard')

      // clicks on list of todos.....

      cy.visit('https://gor-pathology.web.app/dashboard/todos')


     })
  })
  