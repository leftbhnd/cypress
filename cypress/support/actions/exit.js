// выход из аккаунта
Cypress.Commands.add('exit', () => {
  cy.get('svg[width = 37]').click()

  cy.get('.AuthAccountCard__logout--1KeA0').click()
})
