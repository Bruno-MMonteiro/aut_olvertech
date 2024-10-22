describe('Teste entrar na página home', ()=>{

    it('Deve acessar a página home', () => {
      cy.visit('/help')
      cy.location('pathname').should('eq', '/help');
    })
  })