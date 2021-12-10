/// <reference types="cypress"/>

describe('Working with HTML elements', () => {

  before(() => {
    cy.visit('http://localhost:3000')
  })

  beforeEach(() => {
    cy.reload()
  })
  
  it("text", function() {
    cy.get('body').should('contain', 'Full Stack')
  })

  it("input text", function() {
    cy.get('textarea')
      .type('Mensagem', { force: true })
      .should('have.value', 'Mensagem')

    cy.get('[data-cy=mensagem]')
      .type('12{backspace}{backspace}', { force: true })
      .should('have.value', 'Mensagem')

    cy.get('[data-cy=mensagem]')
      .clear()
      .type('erro{selectall}acerto', { force: true })
      .should('have.value', 'acerto')
  })

  it("radio button", function() {
    cy.get('[data-cy=firstOption]')
      .click()
      .should('be.checked')

    cy.get('[data-cy=secondOption]')
      .click()
      .should('not.be.checked')
  })

  it("checkbox", function() {
    cy.get('[data-cy=checkbox-group]')
      .click({ multiple: true })

    cy.get('#checkbox1')
      .should('be.checked')

    cy.get('#checkbox2')
      .should('be.checked')
  })

  it("select", function() {
    cy.get('[data-test=select]')
      .select('Paraná')
      .should('have.value', 'PR')

    cy.get('[data-test=select]')
      .select('PR')
      .should('have.value', 'PR')
    
    // TODO validar as opções que existem no select
  })

  it("select multiple", function() {
    cy.get('[data-testid=fields]')
      .select(['tecnologia', 'engenharia'])

    // TODO criar assertiva
  })
})
