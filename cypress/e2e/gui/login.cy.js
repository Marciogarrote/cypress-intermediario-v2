//Crie um teste automatizado que exercita a funcionalidade de login via interface gráfica de usuário.
//Seção 3: Exercício 1
describe('Login', () => {
  it('successfully', () => {
    const user = Cypress.env('user_name')
    const password = Cypress.env('user_password')
    const options = { cacheSession: false }

    cy.login(user, password, options)

    cy.get('.qa-user-avatar').should('be.visible')
  })
})