var conf = require('../../nightwatch.conf.js');

module.exports = {
  'Succsesfully going back to the main page from product page': function (browser) {
    browser
      .url('http://www.adidas.fi/')
      .waitForElementVisible('body', 1000)
      .waitForElementVisible('header', 1000)
      .click('.header_content___fNypr a')
      .pause(1000)


      .click('.teaser_container___2fM-W a')
      .waitForElementVisible('#page-content', 1000)
      .pause(1000)
      .assert.containsText('#page-content','WANDERLUST YOGA TWO-IN-ONE TANK TOP')
      .click('.column.column-logo a')
      .pause(1000)
      .assert.urlEquals('https://www.adidas.fi')
      .end();
    }
};
