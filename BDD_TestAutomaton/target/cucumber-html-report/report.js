$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("MyApplication.feature");
formatter.feature({
  "line": 1,
  "name": "Smoke test of facebook application",
  "description": "",
  "id": "smoke-test-of-facebook-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "Perform smoke test of facebook application",
  "description": "",
  "id": "smoke-test-of-facebook-application;perform-smoke-test-of-facebook-application",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "Open firefox browser and start application",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "I enter valid \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" credentials",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Click login button",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "User should be able to login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Application should be closed",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "smoke-test-of-facebook-application;perform-smoke-test-of-facebook-application;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 10,
      "id": "smoke-test-of-facebook-application;perform-smoke-test-of-facebook-application;;1"
    },
    {
      "cells": [
        "mydevopscloud@gmail.com",
        "Test@123$"
      ],
      "line": 11,
      "id": "smoke-test-of-facebook-application;perform-smoke-test-of-facebook-application;;2"
    },
    {
      "cells": [
        "mydevopscloud@gmail.com",
        "Test@123$"
      ],
      "line": 12,
      "id": "smoke-test-of-facebook-application;perform-smoke-test-of-facebook-application;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
  "name": "Perform smoke test of facebook application",
  "description": "",
  "id": "smoke-test-of-facebook-application;perform-smoke-test-of-facebook-application;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "Open firefox browser and start application",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "I enter valid \"mydevopscloud@gmail.com\" and \"Test@123$\" credentials",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Click login button",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "User should be able to login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Application should be closed",
  "keyword": "Then "
});
formatter.match({
  "location": "SmokeTest.open_firefox_browser_and_start_application()"
});
formatter.result({
  "duration": 13552002600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mydevopscloud@gmail.com",
      "offset": 15
    },
    {
      "val": "Test@123$",
      "offset": 45
    }
  ],
  "location": "SmokeTest.i_enter_valid_and_credentials(String,String)"
});
formatter.result({
  "duration": 1215014300,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTest.click_login_button()"
});
formatter.result({
  "duration": 10127155400,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTest.user_should_be_able_to_login_successfully()"
});
formatter.result({
  "duration": 104158600,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTest.application_should_be_closed()"
});
formatter.result({
  "duration": 1376542700,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Perform smoke test of facebook application",
  "description": "",
  "id": "smoke-test-of-facebook-application;perform-smoke-test-of-facebook-application;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "Open firefox browser and start application",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "I enter valid \"mydevopscloud@gmail.com\" and \"Test@123$\" credentials",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Click login button",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "User should be able to login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Application should be closed",
  "keyword": "Then "
});
formatter.match({
  "location": "SmokeTest.open_firefox_browser_and_start_application()"
});
formatter.result({
  "duration": 10937683600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mydevopscloud@gmail.com",
      "offset": 15
    },
    {
      "val": "Test@123$",
      "offset": 45
    }
  ],
  "location": "SmokeTest.i_enter_valid_and_credentials(String,String)"
});
formatter.result({
  "duration": 1193455100,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTest.click_login_button()"
});
formatter.result({
  "duration": 9193400000,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTest.user_should_be_able_to_login_successfully()"
});
formatter.result({
  "duration": 101701600,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTest.application_should_be_closed()"
});
formatter.result({
  "duration": 1286538500,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 14,
  "name": "Perform smoke test of facebook application with invalid credentials",
  "description": "",
  "id": "smoke-test-of-facebook-application;perform-smoke-test-of-facebook-application-with-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "Open firefox browser and start application",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I enter valid \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" credentials",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "Click login button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User should not be able to login",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Application should be closed",
  "keyword": "Then "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "smoke-test-of-facebook-application;perform-smoke-test-of-facebook-application-with-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 22,
      "id": "smoke-test-of-facebook-application;perform-smoke-test-of-facebook-application-with-invalid-credentials;;1"
    },
    {
      "cells": [
        "mydevopscloud@gmail.com",
        "Test@123$45"
      ],
      "line": 23,
      "id": "smoke-test-of-facebook-application;perform-smoke-test-of-facebook-application-with-invalid-credentials;;2"
    },
    {
      "cells": [
        "mydevopcloud@gmail.com",
        "Test@123$99"
      ],
      "line": 24,
      "id": "smoke-test-of-facebook-application;perform-smoke-test-of-facebook-application-with-invalid-credentials;;3"
    },
    {
      "cells": [
        "mydevopcloud@gmail.com",
        "Test@123$"
      ],
      "line": 25,
      "id": "smoke-test-of-facebook-application;perform-smoke-test-of-facebook-application-with-invalid-credentials;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 23,
  "name": "Perform smoke test of facebook application with invalid credentials",
  "description": "",
  "id": "smoke-test-of-facebook-application;perform-smoke-test-of-facebook-application-with-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "Open firefox browser and start application",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I enter valid \"mydevopscloud@gmail.com\" and \"Test@123$45\" credentials",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "Click login button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User should not be able to login",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Application should be closed",
  "keyword": "Then "
});
formatter.match({
  "location": "SmokeTest.open_firefox_browser_and_start_application()"
});
formatter.result({
  "duration": 10675430300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mydevopscloud@gmail.com",
      "offset": 15
    },
    {
      "val": "Test@123$45",
      "offset": 45
    }
  ],
  "location": "SmokeTest.i_enter_valid_and_credentials(String,String)"
});
formatter.result({
  "duration": 1258755800,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTest.click_login_button()"
});
formatter.result({
  "duration": 7032461900,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTest.user_should_not_be_able_to_login()"
});
formatter.result({
  "duration": 132490500,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTest.application_should_be_closed()"
});
formatter.result({
  "duration": 1117636800,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Perform smoke test of facebook application with invalid credentials",
  "description": "",
  "id": "smoke-test-of-facebook-application;perform-smoke-test-of-facebook-application-with-invalid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "Open firefox browser and start application",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I enter valid \"mydevopcloud@gmail.com\" and \"Test@123$99\" credentials",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "Click login button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User should not be able to login",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Application should be closed",
  "keyword": "Then "
});
formatter.match({
  "location": "SmokeTest.open_firefox_browser_and_start_application()"
});
formatter.result({
  "duration": 12119212200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mydevopcloud@gmail.com",
      "offset": 15
    },
    {
      "val": "Test@123$99",
      "offset": 44
    }
  ],
  "location": "SmokeTest.i_enter_valid_and_credentials(String,String)"
});
formatter.result({
  "duration": 1240795900,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTest.click_login_button()"
});
formatter.result({
  "duration": 7245641200,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTest.user_should_not_be_able_to_login()"
});
formatter.result({
  "duration": 130953700,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTest.application_should_be_closed()"
});
formatter.result({
  "duration": 1122445200,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Perform smoke test of facebook application with invalid credentials",
  "description": "",
  "id": "smoke-test-of-facebook-application;perform-smoke-test-of-facebook-application-with-invalid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "Open firefox browser and start application",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I enter valid \"mydevopcloud@gmail.com\" and \"Test@123$\" credentials",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "Click login button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User should not be able to login",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Application should be closed",
  "keyword": "Then "
});
formatter.match({
  "location": "SmokeTest.open_firefox_browser_and_start_application()"
});
formatter.result({
  "duration": 11074798400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mydevopcloud@gmail.com",
      "offset": 15
    },
    {
      "val": "Test@123$",
      "offset": 44
    }
  ],
  "location": "SmokeTest.i_enter_valid_and_credentials(String,String)"
});
formatter.result({
  "duration": 1196854200,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTest.click_login_button()"
});
formatter.result({
  "duration": 10233216200,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTest.user_should_not_be_able_to_login()"
});
formatter.result({
  "duration": 50078007900,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: //*[@id\u003d\"loginform\"]\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-GETK66M\u0027, ip: \u0027172.28.32.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_144\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 60.6.3, javascriptEnabled: true, moz:accessibilityChecks: false, moz:headless: false, moz:processID: 14080, moz:profile: C:\\Users\\BirendraRawal\\AppD..., moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: XP, platformName: XP, platformVersion: 10.0, rotatable: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}}\nSession ID: 9728e2cb-77fe-4bc6-957f-2e5fc1e5946d\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"loginform\"]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat stepDefinition.SmokeTest.user_should_not_be_able_to_login(SmokeTest.java:74)\r\n\tat ✽.Then User should not be able to login(MyApplication.feature:18)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "SmokeTest.application_should_be_closed()"
});
formatter.result({
  "status": "skipped"
});
});