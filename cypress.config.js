const { defineConfig } = require("cypress");

const cucumber = require('cypress-cucumber-preprocessor').default
require('multiple-cucumber-html-reporter');


module.exports = defineConfig({
  e2e: {
    watchForFileChanges:true,
    pageLoadTimeout: 90000,
    chromeWebSecurity: false,
    defaultCommandTimeout: 7000,
    video: false,
    videosFolder: 'cypress/videos/',
    screenshotOnRunFailure: true,
    baseUrl: 'https://www.kayak.co.in/',
    projectId: "ie23xd",
    

    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor', cucumber())

      //this is for task command to execute
      on('task', {
        log(message) {
          console.log(message)
      
          return null
        },
      })
      // End task command to execute

    },
    //specPattern:'cypress/e2e//BDD/features/'
    specPattern:'cypress/e2e//TestSuite/'

  }});

//node E:\CypressAutomation\cucumber-html-report.js