const report = require('multiple-cucumber-html-reporter');

report.generate({
    theme: 'bootstrap',
	jsonDir: './cucumber-json/',
	reportPath: './reports/',
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    launchReport: true,
    embeddedScreenshots: true,
	metadata:{
        browser: {
            name: 'chrome',
            version: '106'
        },
        device: 'localhost',
        platform: {
            name: 'Window',
            version: '10'
        }
    },
    customData: {
        title: 'Run info',
        data: [
            {label: 'Project', value: 'Cypress Automation'},
            {label: 'Release', value: '1.2.3'},
            {label: 'Cycle', value: 'B11221.34321'},
            {label: 'Execution Start Time', value: `${new Date().toLocaleString()}`},
            {label: 'Execution End Time', value: `${new Date().toLocaleString()}`}
        ]
    }
});