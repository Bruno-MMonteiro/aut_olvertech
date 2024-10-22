require('cypress-xpath');
describe('Formulário de Login', ()=>{
    it('Deve acessar a página home', ()=>{
    cy.visit('/auth');
      cy.get('#email').type('brunomm123teste@hotmail.com');
      cy.get('#password').type('Bruno789@');
      cy.get('.justify-start > .justify-center').click();
      cy.url().should('contain', '/');
//      cy.xpath("//*[text()[contains(.,'Bruno')]]").should('have.value','Bruno')
    })
})