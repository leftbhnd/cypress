Cypress.Commands.add('translateDeviceSettings', (lang) => {
  cy.get('.SmallButton__small-button--Pk21t').eq(0).click()

  cy.get('.Button__button__label--2agM3')
    .should('have.text', lang.back)

  cy.get('.BaseControl__base-control__label--1eKzX').eq(0)
    .should('have.text', lang.deviceName)

  cy.get('.Textarea__textarea__label--1xqQq')
    .should('have.text', lang.description)

  cy.get('.Textarea__textarea__limit--2Eosw')
    .should('have.text', lang.charactersLeft)

  cy.get('textarea').type('12345')

  cy.get('.Textarea__textarea__limit--2Eosw')
    .should('have.text', lang.charactersLeftTest)

  cy.get('textarea')
    .clear()

  cy.get('.LabeledValue__labeled-value__label--12Ih3')
    .should('have.text', lang.company)

  cy.get('.boolean-checkbox')
    .should('have.text', lang.uponReceiptNewMeasurement)

  cy.get('button').eq(1)
    .should('have.text', lang.save)

  cy.get('button').eq(0).click()
})
