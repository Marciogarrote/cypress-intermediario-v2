Cypress.Commands.add('login', (
  user = Cypress.env('user_name'),
  password = Cypress.env('user_password'),
  //objeto com cachesession
  { cacheSession = true } = {},
) => {
  //define o passo a passo para fazer o login e armazena na variavel
  const login = () => {
    cy.visit('/users/sign_in')

    cy.get("[data-qa-selector='login_field']").type(user)
    cy.get("[data-qa-selector='password_field']").type(password, { log: false })
    cy.get("[data-qa-selector='sign_in_button']").click()
  }

  // 
  const validate = () => {
    cy.visit('/') //visita a pagina home
    cy.location('pathname', { timeout: 1000 }) //pega o pathname se não é igual a user/sign_in e sobrescreve o timout para 1000
      .should('not.eq', '/users/sign_in')
  }
  //Cache acrossSpecs igual a true serve para usar em outras sessões
  const options = {
    cacheAcrossSpecs: true,
    validate, //definido na variavel validate
  }

  //Se passar o cache da sessão será criado 
  if (cacheSession) {
    cy.session(user, login, options)
  } else {
    login()
  }
})

Cypress.Commands.add('logout',() =>{
  cy.get('.qa-user-avatar').click()
  cy.contains('Sign out').click()
})

Cypress.Commands.add('gui_createProject', project => {
    cy.visit('/projects/new') 
  
    cy.get('#project_name').type(project.name)
    cy.get('#project_description').type(project.description)
    cy.get('.qa-initialize-with-readme-checkbox').check()
    cy.contains('Create project').click()
})

Cypress.Commands.add('gui_createIssue', issue => {
  cy.visit(`/${Cypress.env('user_name')}/${issue.project.name}/issues/new`)

  cy.get('.qa-issuable-form-title').type(issue.title)
  cy.get('.qa-issuable-form-description').type(issue.description)
  cy.contains('Submit issue').click()
})