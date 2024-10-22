import {faker} from '@faker-js/faker/locale/pt_BR'
describe('Teste de cadastro de usuário', ()=>{
  
  const num = faker.phone.number();
  const usuario = {
    nome: faker.name.fullName(),
    email: faker.internet.email(),
    senha: faker.internet.password(),
    number: num.replace('+55', '').replace(/\D/g, ''),
    numeroTelefone: '85994949494',
    data: '10102010'
  }
  it('Deve permitir cadastrar um usuário com sucesso', () => {
    cy.visit('/register')
    cy.get('#name').type(usuario.nome);
    cy.get('#gender').select(1).should('have.value', 'M');
    cy.get('#phoneNumber').type(usuario.numeroTelefone);
    cy.get('#dateBirth').type(usuario.data);
    cy.get('#email').type(usuario.email);
    cy.get('#password').type(usuario.senha);
    cy.get('#confirmPassword').type(usuario.senha);
    cy.get('#accept-policyPrivacy').click();
    cy.get('.justify-start > .justify-center').click();
    cy.get('.Toastify__toast-body > :nth-child(2)')
    .should('have.text','Cadastro realizado com sucesso, confira o seu email para efetivar o cadastro!' )
    cy.location('pathname').should('eq', '/');
  })
})