const { Section1 } = require('../objects/section-1')

describe('DOM Table and Form', () => {
  beforeEach(function () {
    cy.visit('/section-1.html')
  })

  it('Assert Table is not visible', () => {
    Section1.actions.TableNotVisible()
  })

  it('Show table and assert that it is visible', () => {
    Section1.actions.ShowTable()
    Section1.actions.TableVisible()
  })

  it('Table is 5 clmns and 10 rows', () => {
    Section1.actions.ShowTable()    
    Section1.actions.TableHasFiveClmns()
  })  

  it('Assert form is not visible', () => {
    Section1.actions.FormNotVisible
  }) 
  it('Show form and assert that it is visible', () => {
    Section1.actions.ShowForm()
    Section1.actions.FormVisble()
  }) 
  it('Fill Form, submit and check if submitted', () => {
    Section1.actions.ShowForm()    
    Section1.actions.FillFormNameAndAge()
    Section1.actions.FormNameAgeFilled()
    Section1.actions.FormCheckNurse()
    Section1.actions.FormIsNurseChecked()
    Section1.actions.SubmitAndCheckAlert()
  }) 
})


