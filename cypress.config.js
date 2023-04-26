const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost',
    env: {
      hideCredentials: true, //serve para quando estiver executando testes onde tem por exemplo o acessToken não vaze
      requestMode: true, //para que tenha feedback visual quand oestá usando o cy.request
    },
  },
  fixturesFolder: false,
  video: false,
})