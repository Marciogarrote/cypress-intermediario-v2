//Crie um teste automatizado que exercita a funcionalidade de login via interface gráfica de usuário.
//Seção 3: Exercício 1
describe('Login', () => {
  it('successfully', () => {
    cy.login()

    cy.get('.qa-user-avatar').should('be.visible')
  })
})