/*
тестовая црмка не работает

import { translationMeasurement } from '../../translation/measurementPage.json'

describe('Проверка локализации на странице с устройствами', function () {
  it('Вход на /devices', function () {
    cy.visit('/')

    cy.auth(Cypress.env('username'), Cypress.env('password'))

    cy.url().should('include', 'devices')
  })

  it('Локализация En', function () {
    cy.selection('Eng')

    cy.wait(2000)

    cy.get('[aria-rowindex= "1"]')
      .find('.SmallButton__small-button--Pk21t').eq(1)
      .click()

    cy.translateMeasurement(translationMeasurement.en)
  })

  it('Локализация Ru', function () {
    cy.selection('Rus')

    cy.wait(2000)

    cy.get('[aria-rowindex= "1"]')
      .find('.SmallButton__small-button--Pk21t').eq(1)
      .click()

    cy.translateMeasurement(translationMeasurement.ru)
  })

  it('Локализация El', function () {
    cy.selection('El')

    cy.wait(2000)

    cy.get('[aria-rowindex= "1"]')
      .find('.SmallButton__small-button--Pk21t').eq(1)
      .click()

    cy.translateMeasurement(translationMeasurement.el)
  })

  it('Локализация Kz', function () {
    cy.selection('Kaz')

    cy.wait(2000)

    cy.get('[aria-rowindex= "1"]')
      .find('.SmallButton__small-button--Pk21t').eq(1)
      .click()

    cy.translateMeasurement(translationMeasurement.kz)
  })

  it('Выход из аккаунта', function () {
    cy.exit()
  })
})
*/
