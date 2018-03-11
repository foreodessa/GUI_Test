var conf = require('../../nightwatch.conf.js');

module.exports = {
  'Demo test Google' : function (browser) {
    browser
      .url('http://www.adidas.fi/')
      .waitForElementVisible('body', 1000)
      .waitForElementVisible('header', 1000)
      .click('.header_content___fNypr a')
      .waitForElementVisible('.inner___34ZC2', 2000)
      .click('.inner___34ZC2 a')
      .waitForElementVisible('.help-search-field', 1000)
      //.setValue('.help-search-field', 'why is my order late')
      .waitForElementVisible('.help-container.help-categories-content', 1000)
      .click('.help-container.help-categories-content a')
      .pause(1000)
      .assert.containsText('body','You can track your order by following the link in your Shipment Confirmation email.')
      .end();
  }
}; 