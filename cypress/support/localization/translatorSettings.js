Cypress.Commands.add('translatorSettings', (lang) => {
  cy.get('[width = 37]').click()

  cy.get('.AbstractCard__card-title--3AK3b')
    .should('have.text', lang.accountSettings)

  cy.get('.row .LabeledValue__labeled-value__label--12Ih3').eq(0)
    .should('have.text', lang.login)

  cy.get('.row .LabeledValue__labeled-value__label--12Ih3').eq(1)
    .should('have.text', lang.role)

  cy.get('.row .LabeledValue__labeled-value__label--12Ih3').eq(2)
    .should('have.text', lang.company)

  cy.get('.row .SelectControl__select-label--1RhFv').eq(0)
    .should('have.text', lang.timezone)

  cy.get('.row .SelectControl__select-label--1RhFv').eq(1)
    .should('have.text', lang.language)

    cy.get('.row .SelectControl__select-label--1RhFv').eq(2)
    .should('have.text', lang.dateFormat)

  cy.get('.row .SelectControl__select-label--1RhFv').eq(3)
    .should('have.text', lang.timeFormat)

  cy.get('.row .SelectControl__select-label--1RhFv').eq(4)
    .should('have.text', lang.distance)

  cy.get('.row .SelectControl__select-label--1RhFv').eq(5)
    .should('have.text', lang.temperature)

  cy.get('.row .label')
    .should('have.text', lang.soundsNotifications)

  cy.get('.row .boolean-checkbox').eq(0)
    .should('have.text', lang.normalTemperature)

    cy.get('.row .boolean-checkbox').eq(1)
    .should('have.text', lang.elevatedTemperature)

  cy.get('.AbstractCard__card__save-button--28mce > button')
    .should('have.text', lang.apply)

  cy.get('.SelectControl__select-control__value--3DQTi').eq(2).click()

  cy.get('.SelectControl__dropdown-item--3YdHK').eq(0)
    .should('have.text', lang.rusDateFormat)

    cy.get('.SelectControl__dropdown-item--3YdHK').eq(1)
    .should('have.text', lang.usDateFormat)

  cy.get('.SelectControl__select-control__value--3DQTi').eq(3).click()

  cy.get('.SelectControl__dropdown-item--3YdHK').eq(0)
    .should('have.text', lang.usHours)

    cy.get('.SelectControl__dropdown-item--3YdHK').eq(1)
    .should('have.text', lang.rusHours)

  cy.get('.SelectControl__select-control__value--3DQTi').eq(4).click()

  cy.get('.SelectControl__dropdown-item--3YdHK').eq(0)
    .should('have.text', lang.cm)

    cy.get('.SelectControl__dropdown-item--3YdHK').eq(1)
    .should('have.text', lang.inches)

  cy.get('.SelectControl__select-control__value--3DQTi').eq(5).click()

  cy.get('.SelectControl__dropdown-item--3YdHK').eq(0)
    .should('have.text', lang.rusTemperature)

    cy.get('.SelectControl__dropdown-item--3YdHK').eq(1)
    .should('have.text', lang.usTemperature)

  cy.get('button').eq(0).click()
})
