//Crie um teste automatizado que exercita a funcionalidade de criação de projeto via interface gráfica de usuário.
//Seção 5: Exercício 1

//Importando o faker 
//O faker é uma biblioteca que serve para gerar dados aleatorios 
import { faker } from '@faker-js/faker'

const options = { env: { snapshotOnly: true } }

//Pré condição
describe('Create Project', options, () => {
  
  beforeEach(() => {
    cy.api_deleteProjects()
    cy.login()
  })

  it('successfully', () => {
    const project = {
    //Usando o template literal 
      name: `project-${faker.datatype.uuid()}`, //o projeto será "project-faker uuid" aleatorio 
      description: faker.random.words(5) // A descrição serão 5 palavras aletorias 
    }
    //Ação 
    cy.gui_createProject(project)

    //Resultados esperados
    cy.url().should('be.equal', `${Cypress.config('baseUrl')}/${Cypress.env('user_name')}/${project.name}`)
    cy.contains(project.name).should('be.visible')
    cy.contains(project.description).should('be.visible')
  })
})