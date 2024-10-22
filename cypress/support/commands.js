Cypress.Commands.add('getByData', (seletor) => {
    return cy.get(`[data-test=${seletor}]`);
  });
  
  Cypress.Commands.add('login', (email,senha) =>{
    cy.session([email,senha],()=>{
      cy.visit('/auth');
      cy.get('#email').type(email);
      cy.get('#password').type(senha);
      cy.get('.justify-start > .justify-center').click();
      cy.url().should('contain', '/');
      cy.get('.font-semibold > .flex-row > .flex').should('have.text', 'Minhas inscrições');
    })
  });