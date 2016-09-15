module.exports = function (config) {  
  config.set({
    basePath: './',
    frameworks: [ 'mocha', 'chai' ],
    files: [
      './**/*.js'
    ],
    plugins: [
      'karma-mocha',
      'karma-chai',
      'karma-mocha-reporter',
      'karma-phantomjs-launcher'
    ],
    reporters: [ 'mocha' ],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: [ 'PhantomJS' ],
    singleRun: true,
    concurrency: Infinity
  })
}