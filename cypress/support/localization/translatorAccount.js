Cypress.Commands.add('translateAccount', (langAccount) => {
  cy.get('.Header__account-info__role--6nCnj')
    .should('have.text', langAccount.manager)

  cy.get('.Tabs__tab-label--3Bmg8').eq(0)
    .should('have.text', langAccount.devices)

  cy.get('.Tabs__tab-label--3Bmg8').eq(1)
    .should('have.text', langAccount.accounts)

  cy.get('.column-label').eq(0)
    .should('have.text', langAccount.createDate)

  cy.get('.column-label').eq(1)
    .should('have.text', langAccount.login)

  cy.get('.column-label').eq(2)
    .should('have.text', langAccount.company)

  cy.get('.Pagination__page-size-chooser__title--2vhiD')
    .should('have.text', langAccount.pagination)
})
