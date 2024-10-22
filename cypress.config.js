const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://teste.olvertech.com.br',
    viewportWidth: 1200,
    viewportHeight: 1000
  },
});
