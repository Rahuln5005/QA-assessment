 
describe('Test Case 3: Verify that the cost calculator feature is working correctly and calculates the cost of various blood tests accurately.', () => {
   
  it('Calculates the cost of selected blood tests accurately', () => {

      cy.visit('https://gor-pathology.web.app/')
      cy.get('input[name="email"]').type('test@kennect.io')
      cy.get('input[name="password"]').type('Qwerty@1234')
      cy.get('button[type="submit"]').first().click()
      cy.url().should('include', '/dashboard')

      cy.get('input[id="patient-test"]').click()
     // cy.wait(1000)
      cy.get('li[role="option"]').each(function($ele, indx, $list){
        if($ele.text().includes("CBC WITH")){
          $ele.click()
        }
      })

      cy.get('[aria-haspopup="listbox"]').click()
      cy.get('ul[role="listbox"]') // Replace 'data-testid' with the attribute of the dropdown list
         .should('be.visible')
         .contains('20') // Replace 'Your Option Text' with the text of the option you want to select
         .click();
      
    })
  })
  