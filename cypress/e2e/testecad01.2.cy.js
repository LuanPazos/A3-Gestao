describe('Registro de Pessoas', () => {
  it('Preenche os campos de registro', () => {
    cy.visit('http://localhost:5500'); // Substitua pela URL da sua página
    
    cy.get('input[name="nome"]').type(" ");
    cy.get('input[name="cpf"]').type(" ");
    cy.get('input[name="email"]').type(" ");
    cy.get('input[name="senha"]').type(" ");
    
    cy.get('input[type="submit"]').click();
  });
});
