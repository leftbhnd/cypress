Cypress.Commands.add('translateNotification', (lang, template) => {
  cy.get('svg[width = 32]').click()
  /*
  
  SMS NOTIFICATIONS
  
  */
  cy.get('button').eq(3)
    .should('have.text', 'SMS')
    .click()

  cy.get('.Panel__panel-head__icon--2GnRr').click()

  cy.get('.Panel__panel-title--2FI9R')
    .should('have.text', lang.smsNotification)

  cy.get('.control__input input').eq(0)
    .should('have.attr', 'placeholder', lang.loginEmail)

  cy.get('.control__input input').eq(1)
    .should('have.attr', 'placeholder', lang.passwordEmail)

  cy.get('.control__input input').eq(2)
    .should('have.attr', 'placeholder', lang.smsSender)

  cy.get('.LabeledValue__labeled-value__label--12Ih3').eq(0)
    .should('have.text', lang.status)

  cy.get('.LabeledValue__labeled-value__label--12Ih3').eq(1)
    .should('have.text', lang.balance)

  cy.get('.Prompt__prompt__text--3g0T1')
    .should('have.text', lang.smsServer)

  cy.get('button:disabled')
    .should('have.text', lang.save)

  cy.get('.SelectControl__select-label--1RhFv').eq(0)
    .should('have.text', lang.status)

  cy.get('.SelectControl__select-label--1RhFv').eq(1)
    .should('have.text', lang.template)

  cy.get('.SelectControl__select-label--1RhFv').eq(2)
    .should('have.text', lang.devices)

  cy.get('.BaseControl__base-control__label--1eKzX')
    .should('have.text', lang.phone)

  cy.get('.SelectControl__select-control__collapse--11Hsp').eq(0).click()

  cy.get('.SelectControl__dropdown-item--3YdHK').eq(0)
    .should('have.text', lang.statusDisabled)

  cy.get('.SelectControl__dropdown-item--3YdHK').eq(1)
    .should('have.text', lang.statusAll)

  cy.get('.SelectControl__dropdown-item--3YdHK').eq(2)
    .should('have.text', lang.statusOnlyHigh)

  cy.get('.SelectControl__select-control__collapse--11Hsp').eq(1).click()

  cy.get('.SelectControl__dropdown-item--3YdHK').eq(0)
    .should('have.text', template.us)

  cy.get('.SelectControl__dropdown-item--3YdHK').eq(1)
    .should('have.text', template.eng)

  cy.get('.SelectControl__dropdown-item--3YdHK').eq(2)
    .should('have.text', template.rus)

  cy.get('.SelectControl__dropdown-item--3YdHK').eq(3)
    .should('have.text', template.usExp)

  cy.get('.SelectControl__dropdown-item--3YdHK').eq(4)
    .should('have.text', template.engExp)

  cy.get('.SelectControl__dropdown-item--3YdHK').eq(5)
    .should('have.text', template.rusExp)
  /*
  
  EMAIL NOTIFICATIONS
  
  */
  cy.get('button').eq(2)
    .should('have.text', 'Email')
    .click()

  cy.get('.SelectControl__select-label--1RhFv').eq(0)
    .should('have.text', lang.status)

  cy.get('.SelectControl__select-label--1RhFv').eq(1)
    .should('have.text', lang.template)

  cy.get('.SelectControl__select-label--1RhFv').eq(2)
    .should('have.text', lang.devices)

  cy.get('.BaseControl__base-control__label--1eKzX')
    .should('have.text', lang.email)

  cy.get('.SelectControl__select-control__collapse--11Hsp').eq(0).click()

  cy.get('.SelectControl__dropdown-item--3YdHK').eq(0)
    .should('have.text', lang.statusDisabled)

  cy.get('.SelectControl__dropdown-item--3YdHK').eq(1)
    .should('have.text', lang.statusOnlyHigh)

  cy.get('.SelectControl__select-control__collapse--11Hsp').eq(1).click()

  cy.get('.SelectControl__dropdown-item--3YdHK').eq(0)
    .should('have.text', template.us)

  cy.get('.SelectControl__dropdown-item--3YdHK').eq(1)
    .should('have.text', template.eng)

  cy.get('.SelectControl__dropdown-item--3YdHK').eq(2)
    .should('have.text', template.rus)

  cy.get('.SelectControl__dropdown-item--3YdHK').eq(3)
    .should('have.text', template.usExp)

  cy.get('.SelectControl__dropdown-item--3YdHK').eq(4)
    .should('have.text', template.engExp)

  cy.get('.SelectControl__dropdown-item--3YdHK').eq(5)
    .should('have.text', template.rusExp)
  /*
  
  TELEGRAM NOTIFICATIONS
  
  */
  cy.get('button').eq(1)
    .should('have.text', 'Telegram')
    .click()

  cy.get('.Panel__panel-title--2FI9R')
    .should('have.text', lang.telegramNotification)

  cy.get('.Panel__panel-head--3WI7u > .Panel__panel-head__icon--2GnRr').click()

  cy.get('.LabeledValue__labeled-value__label--12Ih3').eq(0)
    .should('have.text', lang.botName)

  cy.get('.LabeledValue__labeled-value__label--12Ih3').eq(1)
    .should('have.text', lang.status)

  cy.get('.LabeledValue__labeled-value__value--1RDbm').eq(1)
    .should('have.text', lang.authorizedOn)

  cy.get('.Prompt__prompt__text--3g0T1')
    .should('have.text', lang.botInstruction)

  cy.get('.SelectControl__select-label--1RhFv').eq(0)
    .should('have.text', lang.status)

  cy.get('.SelectControl__select-label--1RhFv').eq(1)
    .should('have.text', lang.template)

  cy.get('.SelectControl__select-label--1RhFv').eq(2)
    .should('have.text', lang.devices)

  cy.get('.BaseControl__base-control__label--1eKzX').eq(0)
    .should('have.text', lang.chatId)

  cy.get('.SelectControl__select-control__collapse--11Hsp').eq(0).click()

  cy.get('.SelectControl__dropdown-item--3YdHK').eq(0)
    .should('have.text', lang.statusDisabled)

  cy.get('.SelectControl__dropdown-item--3YdHK').eq(1)
    .should('have.text', lang.statusAll)

  cy.get('.SelectControl__dropdown-item--3YdHK').eq(2)
    .should('have.text', lang.statusOnlyHigh)

  cy.get('.SelectControl__select-control__collapse--11Hsp').eq(1).click()

  cy.get('.SelectControl__dropdown-item--3YdHK').eq(0)
    .should('have.text', template.us)

  cy.get('.SelectControl__dropdown-item--3YdHK').eq(1)
    .should('have.text', template.eng)

  cy.get('.SelectControl__dropdown-item--3YdHK').eq(2)
    .should('have.text', template.rus)

  cy.get('.SelectControl__dropdown-item--3YdHK').eq(3)
    .should('have.text', template.usExp)

  cy.get('.SelectControl__dropdown-item--3YdHK').eq(4)
    .should('have.text', template.engExp)

  cy.get('.SelectControl__dropdown-item--3YdHK').eq(5)
    .should('have.text', template.rusExp)

  cy.get('button').eq(0)
    .should('have.text', lang.back)
    .click()
})
