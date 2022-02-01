Cypress.Commands.add('translateMeasurement', (langMeasurement) => {
  cy.get('.App__app--3bW75')
    .should('have.text', langMeasurement.back)

  cy.get('.App__app--3bW75')
    .should('have.text', langMeasurement.manager).parents()

  cy.get('.App__app--3bW75')
    .should('have.text', langMeasurement.numberOfMeasurements).parents()

  cy.get('.App__app--3bW75')
    .should('have.text', langMeasurement.belowNormal).parents()

  cy.get('.App__app--3bW75')
    .should('have.text', langMeasurement.fullName).parents()

  cy.get('.App__app--3bW75')
    .should('have.text', langMeasurement.dateTime).parents()

  cy.get('.App__app--3bW75')
    .should('have.text', langMeasurement.deviceName).parents()

  cy.get('.App__app--3bW75')
    .should('have.text', langMeasurement.temperature).parents()

  cy.get('.App__app--3bW75')
    .should('have.text', langMeasurement.result).parents()

  cy.get('.App__app--3bW75')
    .should('have.text', langMeasurement.normal).parents()

  cy.get('.App__app--3bW75')
    .should('have.text', langMeasurement.danger).parents()

  cy.get('.App__app--3bW75')
    .should('have.text', langMeasurement.displayBy).parents()

  cy.get('.Header__header-actions--1lvdR').click('right')

  cy.get('.Panel__panel--3--9A').eq(1)
    .find('.AbstractIcon__icon--Mxfri').eq(0)
    .click()

  cy.get('.App__app--3bW75')

  cy.get('.App__app--3bW75')
    .should('have.text', langMeasurement.devices).parents()

  cy.get('.App__app--3bW75')
    .should('have.text', langMeasurement.timePeriod).parents()

  cy.get('.App__app--3bW75')
    .should('have.text', langMeasurement.generateReport).parents()

  cy.get('.App__app--3bW75')
    .should('have.text', langMeasurement.today).parents()

  cy.get('.App__app--3bW75')
    .should('have.text', langMeasurement.yesterday).parents()

  cy.get('.App__app--3bW75')
    .should('have.text', langMeasurement.lastSevenDays).parents()

  cy.get('.App__app--3bW75')
    .should('have.text', langMeasurement.choosePeriod).parents()

  cy.get('.App__app--3bW75')
    .should('have.text', langMeasurement.back).parents()

  cy.get('.Measuring__measuring--fCmxM').click()

  cy.get('button').eq(0).click()
})
