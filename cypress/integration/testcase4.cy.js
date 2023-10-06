
describe('Test Case 4: Verify that the user can add patient details and create test requests for patients.', () => {
    it('Adds patient details and creates test requests successfully', () => {
      cy.visit('https://gor-pathology.web.app/')
      cy.get('input[name="email"]').type('test@kennect.io')
      cy.get('input[name="password"]').type('Qwerty@1234')
      cy.get('button[type="submit"]').first().click()
     
      // ..........screen 1.................
      cy.get('div[class="MuiListItemText-root"]').each(function($ele, indx, $list){         
          if($ele.text().includes('Patient'))
          {
              $ele.click()
          }
        })
        cy.visit('https://gor-pathology.web.app/patients/add')
        cy.get('input[name="name"]').type('John Doe')
        cy.get('input[name="email"]').type('test@kennect.io')
        cy.get('input[name="phone"]').type('9876543210')


        cy.get('button[type="button"]').each(function($ele, indx, $list){   

          cy.log($ele.text())

           if($ele.text() == "General Details")
          {
            $ele.click()
          }
        })
//.............screen 2.............
        cy.get('input[name="height"]').type('175')
        cy.get('input[name="weight"]').type('100')
 
        // gender tab....
         cy.get('#mui-component-select-gender').click()
         cy.get('ul[role="listbox"]')  
         .should('be.visible')
         .contains('Male')  
         .click();

         cy.get('input[name="age"]').type('35')
         cy.get('input[name="systolic"]').type('80')
         cy.get('input[name="diastolic"]').type('99')
         
         cy.get('button[type="button"]').each(function($ele, indx, $list){   
            if($ele.text() == "Add Tests")
           {
             $ele.click()
           }
         })
/* -------- Screen 3 --------- */
        //ctrl1 -  Add test for Patients
         cy.get('input[id="patient-test"]').click()
         cy.get('li[role="option"]').each(function($ele, indx, $list){
           if($ele.text().includes("AFP")){
            $ele.click()
          }
        })

        // ctrl 3 - Select Labs from recommendation
        cy.get('input[id="patient-tests-labs"]').click()
        cy.get('li[role="option"]').each(function($ele, indx, $list){
         if($ele.text().includes("AFP")){
           $ele.click()
         }
       })

    //ctrl 4- Doctor
        cy.get('input[name="doctor_name"]').click()
        cy.get('ul[role="listbox"]') // Replace 'data-testid' with the attribute of the dropdown list
         .should('be.visible')
         .contains('Beans') // Replace 'Your Option Text' with the text of the option you want to select
         .click();
      

      //ctrl 5 - Doctor's Commission
      cy.get('#mui-component-select-doctor_commission').click()
         cy.get('ul[role="listbox"]') // Replace 'data-testid' with the attribute of the dropdown list
         .should('be.visible')
         .contains('20') // Replace 'Your Option Text' with the text of the option you want to select
         .click();
      
         cy.wait(1000) 
         
// add equipment........
       cy.get('button').each(function($ele, indx, $list){   
          cy.log($ele.find('span').find('span').text())
          if($ele.find('span').find('span').text() == 'add_box'){
            $ele.find('span').find('span').click()
          }
      })

    })
  })
  