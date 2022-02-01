import { translationDevice } from '../../translation/devicePage.json'

describe('Проверка локализации на странице с устройствами', function () {
  it('Вход на /devices', function () {
    cy.visit('/')

    cy.auth(Cypress.env('username'), Cypress.env('password'))

    cy.url().should('include', '/devices')
  })

  it('Локализация En', function () {
    cy.selection('Eng')

    cy.translateDevice(translationDevice.en)
  })

  it('Локализация Ru', function () {
    cy.selection('Rus')

    cy.translateDevice(translationDevice.ru)
  })

  it('Локализация El', function () {
    cy.selection('El')

    cy.translateDevice(translationDevice.el)
  })

  it('Локализация Kz', function () {
    cy.selection('Kaz')

    cy.translateDevice(translationDevice.kz)
  })

  it('Выход из аккаунта', function () {
    cy.exit()
  })
})
