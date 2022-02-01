import { translationNotification } from '../../translation/notificationPage.json'

describe('Проверка локализации на странице с Уведомлениями', function () {
  it('Авторизация, выбор Eng', function () {
    cy.visit('/')

    cy.auth(Cypress.env('username'), Cypress.env('password'))

    cy.url().should('include', '/devices')

    cy.selection('Eng')
  })

  it('Проверка на создание уведомлений', function () {
    cy.get('[width = 32]').click()

    cy.get('button').eq(3)
      .should('have.text', translationNotification.template.sms)
      .click()

    cy.notificationChecker(translationNotification.en)

    cy.get('button').eq(2)
      .should('have.text', translationNotification.template.email)
      .click()

    cy.notificationChecker(translationNotification.en)

    cy.get('button').eq(1)
      .should('have.text', translationNotification.template.telegram)
      .click()

    cy.notificationChecker(translationNotification.en)

    cy.get('button').eq(0)
      .should('have.text', translationNotification.en.back)
      .click()
  })

  it('Локализация En', function () {
    cy.translateNotification(translationNotification.en, translationNotification.template)
  })

  it('Локализация Ru', function () {
    cy.selection('Rus')

    cy.translateNotification(translationNotification.ru, translationNotification.template)
  })

  it('Локализация El', function () {
    cy.selection('El')

    cy.translateNotification(translationNotification.el, translationNotification.template)
  })

  it('Локализация Kz', function () {
    cy.selection('Kaz')

    cy.translateNotification(translationNotification.kz, translationNotification.template)
  })

  it('Выход из аккаунта', function () {
    cy.exit()
  })
})
