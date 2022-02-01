import { translationLogin, errorsLogin } from '../../translation/loginPage.json'

describe('Проверка локализации на странице авторизации', function () {
  it('Локализация En', function () {
    cy.visit('/')

    cy.get('.circle-arrow-icon').click()

    cy.get('.select-dropdown').contains('Eng').click()

    cy.translateLogin(translationLogin.en)

    cy.errorCheckerLogin(translationLogin.en, errorsLogin.en)
  })

  it('Локализация Ru', function () {
    cy.get('.circle-arrow-icon').click()

    cy.get('.select-dropdown').contains('Rus').click()

    cy.translateLogin(translationLogin.ru)

    cy.errorCheckerLogin(translationLogin.ru, errorsLogin.ru)
  })

  it('Локализация El', function () {
    cy.get('.circle-arrow-icon').click()

    cy.get('.select-dropdown').contains('El').click()

    cy.translateLogin(translationLogin.el)

    cy.errorCheckerLogin(translationLogin.el, errorsLogin.el)
  })

  it('Локализация Kz', function () {
    cy.get('.circle-arrow-icon').click()

    cy.get('.select-dropdown').contains('Kaz').click()

    cy.translateLogin(translationLogin.kz)

    cy.errorCheckerLogin(translationLogin.kz, errorsLogin.kz)
  })
})
