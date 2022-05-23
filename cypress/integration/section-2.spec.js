const { Section2 } = require('../objects/section-2')

describe('Section 2', () => {
  beforeEach(function () {
    cy.visit('/section-2.html')
  })

  it('Waiting for network calls', () => {
    Section2.actions.ClickMeNetwork()
  })

  it('Opening a new tab', () => {
    Section2.actions.ClickMeNewTab()
  })
})
