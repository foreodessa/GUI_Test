var conf = require('../../nightwatch.conf.js');

module.exports = {
  'Product code is found on product page': function (browser) {
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
      .click('.image.plp-image-bg a')
      .assert.containsText('body','Product code: CV4712')
      .end();
    }
};

