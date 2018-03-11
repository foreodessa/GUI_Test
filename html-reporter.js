var HtmlReporter = require('nightwatch-html-reporter');
/* Same options as when using the built in nightwatch reporter option */
var reporter = new HtmlReporter({
  openBrowser: true,
  reportsDirectory: __dirname + '/reports/e2e',
  uniqueFilename: true,
  themeName: 'compact'
});

module.exports = {
  write : function(results, options, done) {
    reporter.fn(results, done);
  }
};