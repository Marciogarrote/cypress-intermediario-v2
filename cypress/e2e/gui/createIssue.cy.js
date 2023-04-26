import { faker } from '@faker-js/faker'


const options = { env: { snapshotOnly: true } }

//Criando nosso describe para criar a issue com sucesso
// criamos um objeto que definimos numa variavel chamada issue

describe('Create Issue', options, () => {
  const issue = {
    title: `issue-${faker.datatype.uuid()}`,
    description: faker.random.words(3),
    project: {
      name: `project-${faker.datatype.uuid()}`,
      description: faker.random.words(5)
    }
  }

    // beforeEach definimos a nossa pré condição
    // tem que estar logado e tem que existir um projeto
  beforeEach(() => {
    cy.api_deleteProjects()
    cy.login()
    cy.api_createProject(issue.project)
  })

   //Ação
  //nossa ação que recebe a issue do objeto acima, e depois verificamos o resultado esperado
  //um elemento que contem issue details tem que ter a issue title e issue description
  it('successfully', () => {
    cy.gui_createIssue(issue)
    //Resultado esperado
    cy.get('.issue-details')
      .should('contain', issue.title)
      .and('contain', issue.description)
  })
})