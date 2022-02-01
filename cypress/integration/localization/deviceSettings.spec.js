import { translationDeviceSettings } from '../../translation/deviceSettings.json'

describe('Проверка локализации в настройках стойки', function () {
  it('Вход на /devices', function () {
    cy.visit('/')

    cy.auth(Cypress.env('username'), Cypress.env('password'))

    cy.url().should('include', '/devices')
  })

  it('Локализация En', function () {
    cy.selection('Eng')

    cy.translateDeviceSettings(translationDeviceSettings.en)
  })

  it('Локализация Ru', function () {
    cy.selection('Rus')

    cy.translateDeviceSettings(translationDeviceSettings.ru)
  })

  it('Локализация El', function () {
    cy.selection('El')

    cy.translateDeviceSettings(translationDeviceSettings.el)
  })

  it('Локализация Kz', function () {
    cy.selection('Kaz')

    cy.translateDeviceSettings(translationDeviceSettings.kz)
  })

  it('Выход из аккаунта', function () {
    cy.exit()
  })
})
