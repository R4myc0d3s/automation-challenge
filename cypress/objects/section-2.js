const Section2 = {
  calls: {
    NetworkCall: 'http://localhost:8889/todos/1',
  },
  elements: {
    networkCallBtn: '[data-test="network-call-button"]',
    newTabBtn: '[data-test="new-tab-button"]',
  },
  actions: {
    ClickMeNetwork () {
      cy.get(Section2.elements.networkCallBtn).should('be.visible').click()
      cy.request('GET', Section2.calls.NetworkCall).then((response) => {
        expect(response.status).to.equal(200)
        expect(response.body.title).to.equal('Abnormally long network call!')
      })
    },
    ClickMeNewTab () {
      cy.get(Section2.elements.newTabBtn).should('be.visible')
      // cy.request('GET', Section2.calls.NetworkCall).then((response) => {
      //   expect(response.status).to.equal(200)
      //   cy.log(response.body.title)
      // })
    },
  },
}

module.exports = { Section2 }
