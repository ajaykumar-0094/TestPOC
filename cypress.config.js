const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: `https://upgrade.portal.cleverciti.com`,
    defaultCommandTimeout: 5000,
    pageLoadTimeout: 30000,
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
