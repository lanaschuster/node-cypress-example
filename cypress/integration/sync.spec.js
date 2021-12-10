/// <reference types="cypress"/>

describe('Entendendo o sincronismo do Cypress', () => {
  before(() => {
    cy.visit('https://wcaquino.me/cypress/componentes.html')
  })

  beforeEach(() => {
    cy.reload()
  })

  it('Deve aguardar o elemento estar disponível', () => {
    cy.get('#novoCampo').should('not.exist')
    cy.get('#buttonDelay').click()
    cy.get('#novoCampo').should('not.exist')
    cy.get('#novoCampo').should('exist')
    cy.get('#novoCampo').type('it works')
    cy.get('#novoCampo').should('have.value', 'it works')
  })

  it('Retry', () => {
    cy.get('#buttonDelay').click()
    cy.get('#novoCampo')
    .should('exist')
    .should('not.exist')
  })

  it('Uso do find', () => {
    cy.get('#buttonList').click()
    cy.get('#lista li')
      .find('span')
      .should('contain', 'Item 1')

    cy.get('#lista li span')
      .should('contain', 'Item 2')
  })

  it.only('Uso do timeout', () => {
    cy.get('#buttonDelay').click()
    cy.get('#novoCampo', { timeout: 1000 }).should('exist')
  })
})
