//Crie um teste automatizado que exercita a funcionalidade de logout via interface gráfica de usuário.
//Seção 4: Exercício 1 

describe('Logout', () => {
    //Pré condições sempre colocar no beforeEach, pois não é o alvo do teste que está sendo executado
    //Exemplo no logout é necessário estár logado, portando uma pré condição para fazer o logout é estar logado.
    beforeEach(() => {
        cy.login()
        cy.visit('/')
    })
    it ('sucessessfully', () => {
        cy.logout()
        
        cy.url().should('be.equal', `${Cypress.config('baseUrl')}/users/sign_in`)
    })
})