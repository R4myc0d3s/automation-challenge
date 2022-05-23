const Section1 = {
  literals: {
  },
  elements: {
    Table: '[data-test="user-table"]',
    TableHeader: '[data-test="table-header"]',
    ShowTableButton: '#table-toggle-button',
    UserRoleRows: 'tr:contains("user")',
    TableRows: '#alaya-table>tbody>tr',
    BirthDate: "#alaya-table>tbody>tr th:nth-child(4)",
    Form: '[data-test="signup-form"]',
    FormButton: '[data-test="form-toggle-button"]',
    fullNameInput: '[data-test="full-name-input"]',
    ageInput: '[data-test="age-input"]',
    genderSelect: '[data-test="gender-select"]',
    nurseCheckBox: '[data-test=nurse-input]',
    submitButton: '[data-test=submit-btn]',
  },
  constants: {
    name: 'Person Name',
    age: 28,
    gender: 'Female',
  },
  actions: {
    TableNotVisible () {
      cy.get(Section1.elements.Table).should('not.be.visible') // Assert that the table is not visible
    },
    ShowTable () {
      cy.get(Section1.elements.ShowTableButton).click() // After clicking the "Show table" button, 
    },
    TableVisible () {
      cy.get(Section1.elements.Table).should('be.visible') // assert the table is visible
    },
    TableHasFiveClmns () {
      cy.get(Section1.elements.TableHeader).find('th').should('have.length', 5) // Assert that the table is 5 columns wide
    },
    TableHasTenRows () {
      cy.get((Section1.elements.TableRows)-1)
    },
    EntriesWithUserRole () {
      cy.get(Section1.elements.UserRoleRows).should('have.length.at.least', 5) // Assert that at least 5 entries have the role "user"
    },
    FormNotVisible () {
      cy.get(Section1.elements.Form).should('not.be.visible') // Assert that the form is not visible
    },
    ShowForm () {
      cy.get(Section1.elements.FormButton).click() // After clicking the "Show form" button,..
    },
    FillFormNameAndAge () {
      cy.get(Section1.elements.fullNameInput).type(Section1.constants.name) // Fill in the "Name"..
      cy.get(Section1.elements.ageInput).type(Section1.constants.age) // ..and "Age" inputs,..
    },
    FormNameAgeFilled () {
      cy.get(Section1.elements.fullNameInput).invoke('val').should('not.be.empty') // ..and assert that..
      cy.get(Section1.elements.ageInput).invoke('val').should('not.be.empty') // ..both inputs are filled
    },
    FormSelectGender () {
      cy.get(Section1.elements.genderSelect).select(Section1.constants.gender) // Select "Female" from the select option,..
    },
    FormGenderSetToFemale () {
      cy.get(Section1.elements.genderSelect).find(':selected').contains(Section1.constants.gender) // ..and assert that the value is "female"
    },
    FormCheckNurse () {
      cy.get(Section1.elements.nurseCheckBox).check() // Tick the "Nurse" checkbox..
    },
    FormIsNurseChecked () {
      cy.get(Section1.elements.nurseCheckBox).should('be.checked') // ..and assert that the value "nurse" is true
    },
    SubmitAndCheckAlert () {
      cy.get(Section1.elements.submitButton).click() // Click on the "Submit" button..
      cy.on('window:alert', (txt) => { // ..and assert that there is an alert window..
        expect(txt).to.contains('Form submitted!') // ..showing with the text "Form submitted!"
      })
    },
    FormVisble () {
      cy.get(Section1.elements.Form).should('be.visible') // ..assert that the form is visible
    },
  },
}

module.exports = { Section1 }
