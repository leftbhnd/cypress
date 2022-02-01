Cypress.Commands.add('translateLogin', (langLogin) => {
  cy.get('.login-form-title')
    .should('have.text', langLogin.tittle)

  cy.get('.control__input input').eq(0)
    .should('have.attr', 'placeholder', langLogin.PHlogin)

  cy.get('.control__input input').eq(1)
    .should('have.attr', 'placeholder', langLogin.PHpassword)

  cy.get('.boolean-checkbox')
    .should('have.text', langLogin.checkbox)

  cy.get('button')
    .should('have.text', langLogin.button)

  cy.get('.login-form-recovery-link > span')
    .should('have.text', langLogin.forget)
})

Cypress.Commands.add('errorCheckerLogin', (langLogin, errorLogin) => {
  cy.get('button')
    .click()

  cy.get('.control__message').eq(0)
    .should('have.text', errorLogin.typeLogin)

  cy.get('.control__message').eq(1)
    .should('have.text', errorLogin.typePassword)

  cy.get('.control__input input').eq(0)
    .type('123')

  cy.get('.control__input input').eq(1)
    .type('123')

  cy.get('button')
    .click()

  cy.get('.login-form-message')
    .should('have.text', errorLogin.incorrect)

  cy.get('.control__input input').eq(0).clear()
  cy.get('.control__input input').eq(1).clear()
})
