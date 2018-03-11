var conf = require('../../nightwatch.conf.js');

module.exports = {
  'Demo test Google' : function (browser) {
    browser
      .url('http://www.adidas.fi/')
      .waitForElementVisible('body', 1000)
      .waitForElementVisible('header', 1000)
browser.elements('css selector', 'button', function(elements) {
  elements.value.forEach(function(element){
    browser.elementIdAttribute(element.ELEMENT, 'class', function(attribute) {
      console.log(attribute.value);
    });
  });
})

      //.sendKeys(Key.ENTER)
      .pause(1000)
      .assert.containsText('body', 'men')
      .end();
  }
}; 