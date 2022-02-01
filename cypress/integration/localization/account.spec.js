import { translationAccount } from '../../translation/accountPage.json'

describe('Проверка локализации на странице с аккаунтами', function () {
  it('Вход на /accounts', function () {
    cy.visit("/")

    cy.auth(Cypress.env('username'), Cypress.env('password'))

    cy.get('.Tabs__tab--tnEv-').eq(3).click()

    cy.url().should('include', '/accounts')
  })

  it('Локализация En', function () {
    cy.selection('Eng')

    cy.translateAccount(translationAccount.en)
  })

  it('Локализация Ru', function () {
    cy.selection('Rus')

    cy.translateAccount(translationAccount.ru)
  })

  it('Локализация El', function () {
    cy.selection('El')

    cy.translateAccount(translationAccount.el)
  })

  it('Локализация Kz', function () {
    cy.selection('Kaz')

    cy.translateAccount(translationAccount.kz)
  })

  it('Выход из аккаунта', function () {
    cy.exit()
  })
})
