// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html
const fs = require('fs');

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular/cli'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular/cli/plugins/karma')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      reports: ['html', 'lcovonly'],
      fixWebpackSourcePaths: true
    },
    angularCli: {
      environment: 'dev'
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    proxies: {
      '/web': 'https://localhost:3000',
    },
    protocol: 'https',
    httpsServerOptions: {
      key: fs.readFileSync(__dirname + '/server/http2-express/server.key', 'utf8'),
      cert: fs.readFileSync(__dirname + '/server/http2-express/server.crt', 'utf8')
    },
  });
};
