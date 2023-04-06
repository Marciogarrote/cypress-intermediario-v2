const { defineConfig } = require('cypress') //primeiro fazer a configuração do require, da função defineConfig que vai definir a configuração do projeto de testes

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost',
  },
  fixturesFolder: false, 
  video: false,
})