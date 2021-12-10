/// <reference types="cypress"/>

describe('Helpers', () => {
  
  it('Wrap - exemplo 1', () => {
    const obj = { nome: 'user', idade: 26 }
    
    expect(obj).to.have.property('nome')
    cy.wrap(obj).should('have.property', 'nome')
  })

  it('Wrap - exemplo 2', () => {
    cy.visit('https://wcaquino.me/cypress/componentes.html')

    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(20)
      }, 500)
    })

    cy.get('#buttonSimple')
      .then(() => console.log('buttonSimple encontrado'))
    
    // deixar o cypress gerenciar as promises!
    cy.wrap(promise).then(result => console.log(result))

    cy.get('#buttonList')
      .then(() => console.log('buttonList encontrado'))
  })

  it('Wrap - exemplo 3', () => {
    cy.wrap(1).then(num => { 
      return 2 
    }).should('be.equal', 2)
  })
})
