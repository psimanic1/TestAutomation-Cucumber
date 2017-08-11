
exports.config = {
  getPageTimeout: 60000,
  restartBrowserBetweenTests: true,
  allScriptsTimeout: 5000000,
  framework: 'custom',
  directConnect: true,
  specs: 'features/bookingWithDeclinedPayment.feature',
  capabilities: {
    'browserName': 'chrome',
    shardTestFiles: false,
    maxInstances: 1
  },
  onPrepare: function (config, capabilities) {
    var Actions = require('./actions/actions.js');
    var Pages = require('./pages/pages.js');
    global.actions = new Actions();
    global.pages = new Pages();
    var path = require('path');
    var fs = require('fs');
    const resultsJsonLocation = path.join(__dirname, 'tests_result.json');
    if (fs.existsSync(resultsJsonLocation)) {
      fs.unlinkSync(resultsJsonLocation)
    };
  },
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  baseUrl: 'http://localhost:8000',
  cucumberOpts: {
    require: ['step_definitions/step_definitions.js', './hooks.js'],
    tags: false,
    format: 'pretty',
    strict: true,
    showColors: true,
    profile: false,
    'no-source': true,
  },
};