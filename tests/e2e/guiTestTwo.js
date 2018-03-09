var conf = require('../../nightwatch.conf.js');

module.exports = {
  'Search for EQT': function (browser) {
    browser
      .url('http://www.adidas.fi/')   // visit the url
      .waitForElementVisible('body'); // wait for the body to be rendered
      // check if we are seeing the Mobile Version of GitHub
      browser.element('css selector', '.switch-to-desktop', function(result) {
        if(result.status != -1) { //Element exists, do something
          browser.click('.switch-to-desktop')
          .waitForElementVisible('body'); // wait for the body to be rendered
        }
      });
    // part two:
    browser
      .assert.containsText('body', 'dwyl.com') // assert body contains text
      .end();
    }
};