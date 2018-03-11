var conf = require('../../nightwatch.conf.js');

module.exports = {
  'Demo test Google' : function (browser) {
    browser
      .url('http://www.adidas.fi/')
      .waitForElementVisible('body', 1000)
      .waitForElementVisible('header', 1000)
      .click('div[class="proposals___1z_1d"] a.first')

      //.sendKeys(Key.ENTER)
      .pause(1000)
      .assert.containsText('body', 'men')
      .end();
  }
}; 