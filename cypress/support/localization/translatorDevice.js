Cypress.Commands.add('translateDevice', (langDevice) => {
  cy.get('.Header__account-info__role--6nCnj')
    .should('have.text', langDevice.manager)

  cy.get('.Tabs__tab-label--3Bmg8').eq(0)
    .should('have.text', langDevice.devices)

  cy.get('.Tabs__tab-label--3Bmg8').eq(1)
    .should('have.text', langDevice.accounts)

  cy.get('.column-label').eq(0)
    .should('have.text', langDevice.date)

  cy.get('.column-label').eq(1)
    .should('have.text', langDevice.deviceName)

  cy.get('.DeviceTable__off--27gMJ').eq(0)
    .should('have.text', langDevice.off)

  cy.get('.DeviceTable__on--1p3Re').eq(0)
    .should('have.text', langDevice.on)

  cy.get('.Pagination__page-size-chooser__title--2vhiD')
    .should('have.text', langDevice.pagination)
})
