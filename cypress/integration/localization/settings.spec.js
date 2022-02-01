import { translationSettings } from '../../translation/settingsPage.json'

describe('Проверка локализации в настройках учетной записи', function () {
  it('Авторизация в аккаунте', function () {
    cy.visit('/')

    cy.auth(Cypress.env('username'), Cypress.env('password'))

    cy.url().should('include', '/devices')
  })

  it('Локализация En', function () {
    cy.selection('Eng')
      .translatorSettings(translationSettings.en)
  })

  it('Локализация Ru', function () {
    cy.selection('Rus')
      .translatorSettings(translationSettings.ru)
  })

  it('Локализация El', function () {
    cy.selection('El')
      .translatorSettings(translationSettings.el)
  })

  it('Локализация Kz', function () {
    cy.selection('Kaz')
      .translatorSettings(translationSettings.kz)
  })
  
  // на проде нет чешского
  // it('Локализация Cs', function () {
  //   cy.selection('Cze')
  //     .translatorSettings(translationSettings.cs)
  // })

  it('Выход из аккаунта', function () {
    cy.exit()
  })
})
