// cypress/integration/registro.spec.js

describe('Registro de Pessoas', () => {
  it('Preenche os campos de registro', () => {
    cy.visit('http://localhost:5500'); // Substitua pela URL da sua página
    
    cy.get('input[name="nome"]').type('Fulano de Tal');
    cy.get('input[name="cpf"]').type('12345678900');
    cy.get('input[name="email"]').type('fulano@example.com');
    cy.get('input[name="senha"]').type('senha123');
    
    cy.get('input[type="submit"]').click();
  });
});
