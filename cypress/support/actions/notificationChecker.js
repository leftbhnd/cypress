// создание оповещений, если они отсутствуют
Cypress.Commands.add('notificationChecker', (lang) => {
  cy.get('.AbstractCard__card--26l0f')
    .then(($notification) => {
      if (!$notification.text().includes(lang.template)) {
        cy.get('button')
          .contains(lang.addNotification)
          .click()
      }
    })
})
