// выбор языка
Cypress.Commands.add('selection', (lang) => {
  cy.get('[width = 37]').click()

  cy.get('.SelectControl__select-control--1Hnxs').eq(1)
    .then(($selectBtn) => {
      if ($selectBtn.text().includes(lang)) {
        cy.get('button').eq(0).click()
      }
      else {
        cy.get('.AbstractCard__card--26l0f .SelectControl__select-control--1Hnxs').eq(1)
          .click()
          .contains(lang)
          .click()

        cy.get('button').eq(1).click()
      }
    })
})
