/// <reference types="cypress"/>


describe('Cypress basics', () => {
  it("Should visit a page and assert title", function() {
    cy.visit('https://lanaschuster-portfolio-t.herokuapp.com')
    
    cy.title()
      .debug()
      .should('be.equal', 'Lana Schuster :: Portfolio')
      .should('contain', ':: Portfolio')
  })

  it("Should find and interact with an element", function() {
    cy.visit('https://wcaquino.me/cypress/componentes.html')

    cy.pause()

    cy.get('#buttonSimple')
      .click()
      .should('have.value', 'Obrigado!')
  })
})
