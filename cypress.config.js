const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,
  projectId: "mwf5tk",

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
