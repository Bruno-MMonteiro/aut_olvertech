describe('Formulario de Login', ()=>{
    it('Deve acessar a página login', ()=>{
      cy.fixture('usuarios').then(usuario =>{
        cy.login(usuario[0].email, usuario[0].senha);
        cy.visit('/auth');

      });
    })

})