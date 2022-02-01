describe('Проверка локализации на странице с устройствами', function () {
  it('Вход на /devices', function () {
    cy.visit('/')

    cy.auth(Cypress.env('username'), Cypress.env('password'))

    cy.url()
      .should('include', '/devices')

    cy.get('[aria-rowindex= "1"]')
      .find('.SmallButton__small-button--Pk21t').eq(1)
      .click()

    cy.wait(2000)

    cy.request({
      method: 'POST',
      url: Cypress.env('apiUrl'),
      headers: {
        'Origin': Cypress.env('origin')
      },
      body: {
        action: 'add_measurement',
        deviceUuid: Cypress.env('deviceUuid'),
        status: 0,
        value: 36.6,
        date: `date -u +%s`
      }
    })

    cy.get('.ReactVirtualized__Table__row').eq(0)
      .find('[aria-colindex = "5"]')
      .find('div')
      .should('have.text', '36.6 C °')

    cy.get('.ReactVirtualized__Table__row').eq(0)
      .find('[aria-colindex = "6"]')
      .should('have.text', 'Normal')

    cy.wait(8000)

    cy.get('.ReactVirtualized__Table__row').eq(0)
      .find('.AbstractIcon__icon--Mxfri')
      .should('be.visible')

    cy.request({
      method: 'POST',
      url: Cypress.env('apiUrl'),
      headers: {
        'Origin': Cypress.env('origin')
      },
      body: {
        action: 'add_measurement',
        deviceUuid: Cypress.env('deviceUuid'),
        status: 1,
        value: 100.0,
        date: `date -u +%s`
      }
    })

    cy.get('.ReactVirtualized__Table__row').eq(0)
      .find('[aria-colindex = "5"]')
      .find('div')
      .should('have.text', '100.0 C °')

    cy.get('.ReactVirtualized__Table__row').eq(0)
      .find('[aria-colindex = "6"]')
      .should('have.text', 'High')

    cy.wait(8000)

    cy.get('.ReactVirtualized__Table__row').eq(0)
      .find('.AbstractIcon__icon--Mxfri')
      .should('be.visible')
  })
})
