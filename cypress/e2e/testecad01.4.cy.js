describe('Registro de Pessoas', () => {
  it('Preenche os campos de registro', () => {
    cy.visit('http://localhost:5500'); // Substitua pela URL da sua página
    
    cy.get('input[name="nome"]').type('John Doe');
    cy.get('input[name="cpf"]').type('000.000.000-01');
    cy.get('input[name="email"]').type('JohnDoe.com');
    cy.get('input[name="senha"]').type('John0123456');
    
    cy.get('input[type="submit"]').click();
  });
});
