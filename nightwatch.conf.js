var seleniumServer = require('selenium-server');

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
      "webdriver.chrome.driver" : "./bin/chromedriver",
      "webdriver.gecko.driver" : "./bin/geckodriver"
    }
  },

  "test_settings" : {
    "default" : {
      "globals": {
        "waitForConditionTimeout": 5000 // sometimes internet is slow so wait.
      },
      "desiredCapabilities": {
        "browserName": "firefox",
        "marionette": true
      }
    },

    "chrome" : {
      "desiredCapabilities": {
        "browserName": "chrome"
      }
    }
  }
}