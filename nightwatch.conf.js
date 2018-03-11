const seleniumServer = require('selenium-server');

module.exports = {
  "src_folders" : ["tests"],
  "output_folder" : "reports",
  "custom_commands_path" : "",
  "custom_assertions_path" : "",
  "page_objects_path" : "",
  "globals_path" : "",

  "selenium" : {
    "start_process" : true,
    "server_path" : "./node_modules/selenium-server/lib/runner/selenium-server-standalone-3.10.0.jar",
    "log_path" : "",
    "host" : "127.0.0.1",
    "port" : 4444,
    "cli_args" : {
      "webdriver.chrome.driver" : "./bin/chromedriver.exe",
      "webdriver.gecko.driver" : "./bin/geckodriver.exe"
    }
  },

  "test_settings" : {
    "default" : {
    "selenium_port"  : 4444,
    "selenium_host"  : "localhost",
      "globals": {
        "waitForConditionTimeout": 5000 // sometimes internet is slow so wait.
      },
      "desiredCapabilities": {
        "browserName": "chrome",
        "javascriptEnabled": true,
        "acceptSslCerts" : true,
        "chromeOptions":{"args" : ["disable-web-security"]}
      }
    },
    
    "chrome" : {
      "desiredCapabilities": {
        "browserName": "chrome",
        "javascriptEnabled": true
      }
    },

    "firefox" : {
      "desiredCapabilities": {
        "browserName": "firefox",
        "marionette": true,
        "acceptSslCerts" : true,
        "cssSelectorsEnabled": true
      }
    }
  }
};