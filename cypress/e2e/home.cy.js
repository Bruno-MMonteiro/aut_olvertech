require('cypress-xpath');
describe('Teste entrar na página home', ()=>{

    it('Deve acessar a página home', () => {
      cy.visit('/')
      cy.location('pathname').should('eq', '/');
    })
  })