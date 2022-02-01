Cypress.Commands.add('translateAccountEditing', (lang) => {
  cy.get('.SmallButton__small-button--Pk21t').eq(0)
    .click()

  cy.get('.Button__button__label--2agM3')
    .should('have.text', lang.back)

  cy.get('.AbstractCard__card-title--3AK3b')
    .should('have.text', lang.accountSettings)

  cy.get('input').eq(0)
    .should('have.attr', 'placeholder', lang.enterLogin)

  cy.get('input').eq(1)
    .should('have.attr', 'placeholder', lang.enterPassword)

  cy.get('.Prompt__prompt__text--3g0T1').eq(0)
    .should('have.text', lang.regLogin)

  cy.get('.Prompt__prompt__text--3g0T1').eq(1)
    .should('have.text', lang.regPassword)

  cy.get('.SelectControl__select-label--1RhFv').eq(0)
    .should('have.text', lang.company)

  cy.get('.SelectControl__select-label--1RhFv').eq(1)
    .should('have.text', lang.role)

  cy.get('.SelectControl__select-control--1Hnxs').eq(1).click()

  cy.get('.SelectControl__dropdown-item--3YdHK').eq(0)
    .should('have.text', lang.operator)

  cy.get('.SelectControl__dropdown-item--3YdHK').eq(1)
    .should('have.text', lang.manager)

  cy.get('.SelectControl__select-label--1RhFv').eq(2)
    .should('have.text', lang.timezone)

  cy.get('.SelectControl__select-label--1RhFv').eq(3)
    .should('have.text', lang.language)

  cy.get('.SelectControl__select-control--1Hnxs').eq(3).click()

  cy.get('.SelectControl__dropdown-item--3YdHK').eq(0)
    .should('have.text', 'Eng')

  cy.get('.SelectControl__dropdown-item--3YdHK').eq(1)
    .should('have.text', 'Rus')

  cy.get('.SelectControl__dropdown-item--3YdHK').eq(2)
    .should('have.text', 'El')

  cy.get('.SelectControl__dropdown-item--3YdHK').eq(3)
    .should('have.text', 'Kaz')

  cy.get('.Panel__panel-title--2FI9R')
    .should('have.text', lang.devices)

  cy.get('.Panel__panel-subtitle--1b5XS')
    .should('have.text', lang.youNotChooseDevices)

  cy.get('.Panel__panel-head__icon--2GnRr').click()

  cy.get('.search-input.SearchInput__search-input--3vwja > input')
    .should('have.attr', 'placeholder', lang.search)

  cy.get('.object-chooser-item.select-all span').eq(1)
    .should('have.text', lang.selectAll)

  cy.get('.boolean-checkbox > span').eq(0).click()

  cy.get('.Panel__panel-subtitle--1b5XS')
    .should('have.text', lang.deviceListForAccount)

  cy.get('.boolean-checkbox > span').eq(0).click()

  cy.get('.SelectControl__select-label--1RhFv').eq(4)
    .should('have.text', lang.dateFormat)

  cy.get('.SelectControl__select-control--1Hnxs').eq(4).click()

  cy.get('.SelectControl__dropdown-item--3YdHK').eq(0)
    .should('have.text', lang.rusDateFormat)

  cy.get('.SelectControl__dropdown-item--3YdHK').eq(1)
    .should('have.text', lang.usDateFormat)

  cy.get('.SelectControl__select-label--1RhFv').eq(5)
    .should('have.text', lang.timeFormat)

  cy.get('.SelectControl__select-control--1Hnxs').eq(5).click()

  cy.get('.SelectControl__dropdown-item--3YdHK').eq(0)
    .should('have.text', lang.usHours)

  cy.get('.SelectControl__dropdown-item--3YdHK').eq(1)
    .should('have.text', lang.rusHours)

  cy.get('.SelectControl__select-label--1RhFv').eq(6)
    .should('have.text', lang.distance)

  cy.get('.SelectControl__select-control--1Hnxs').eq(6).click()

  cy.get('.SelectControl__dropdown-item--3YdHK').eq(0)
    .should('have.text', lang.cm)

  cy.get('.SelectControl__dropdown-item--3YdHK').eq(1)
    .should('have.text', lang.inches)

  cy.get('.SelectControl__select-label--1RhFv').eq(7)
    .should('have.text', lang.temperature)

  cy.get('.SelectControl__select-control--1Hnxs').eq(7).click()

  cy.get('.SelectControl__dropdown-item--3YdHK').eq(0)
    .should('have.text', lang.rusTemperature)

  cy.get('.SelectControl__dropdown-item--3YdHK').eq(1)
    .should('have.text', lang.usTemperature)

  cy.get('button').eq(1)
    .should('have.text', lang.save)

  cy.get('.CardModal__card-modal--rIiss button').eq(0)
    .click()
})
