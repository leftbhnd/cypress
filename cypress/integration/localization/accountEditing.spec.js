import { translationAccountEditing } from '../../translation/accountEditing.json'

describe('Проверка локализации в редактировании аккаунта', function () {
  it('Вход на /accounts', function () {
    cy.visit('/')

    cy.auth(Cypress.env('username'), Cypress.env('password'))

    cy.get('.Tabs__tab--tnEv-').eq(2).click()

    cy.url().should('include', '/accounts')
  })

  it('Локализация En', function () {
    cy.selection('Eng')

    cy.translateAccountEditing(translationAccountEditing.en)
  })

  it('Локализация Ru', function () {
    cy.selection('Rus')

    cy.translateAccountEditing(translationAccountEditing.ru)
  })

  it('Локализация El', function () {
    cy.selection('El')

    cy.translateAccountEditing(translationAccountEditing.el)
  })

  it('Локализация Kz', function () {
    cy.selection('Kaz')

    cy.translateAccountEditing(translationAccountEditing.kz)
  })

  it('Выход из аккаунта', function () {
    cy.exit()
  })
})
