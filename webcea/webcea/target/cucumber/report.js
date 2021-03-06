$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/featureFiles/Compra.feature");
formatter.feature({
  "line": 1,
  "name": "Compra realizada com Boleto Bancário",
  "description": "Esta feature é responsável por realizar compra utilizando o boleto.",
  "id": "compra-realizada-com-boleto-bancário",
  "keyword": "Feature"
});
formatter.before({
  "duration": 19226349300,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Compra utilizando o boleto bancario",
  "description": "",
  "id": "compra-realizada-com-boleto-bancário;compra-utilizando-o-boleto-bancario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "que estou logado no site da CEA",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "seleciono um produto desejado",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Eu seleciono a opcao de entrega",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Eu clico no botao ir para o pagamento",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "a opcao de boleto bancario e exibido com sucesso",
  "keyword": "Then "
});
formatter.match({
  "location": "CompraSteps.que_estou_logado_no_site_da_CEA()"
});
formatter.result({
  "duration": 6714559100,
  "status": "passed"
});
formatter.match({
  "location": "CompraSteps.seleciono_um_produto_desejado()"
});
formatter.result({
  "duration": 17124278100,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\".btn-action-close\"}\n  (Session info: chrome\u003d84.0.4147.89)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.6.0\u0027, revision: \u00276fbf3ec767\u0027, time: \u00272017-09-27T15:28:36.4Z\u0027\nSystem info: host: \u0027CENW10N0129861\u0027, ip: \u0027192.168.15.3\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d83.0.4103.39 (ccbf011cb2d2b19b506d844400483861342c20cd-refs/branch-heads/4103@{#416}), userDataDir\u003dC:\\Users\\Qintess\\AppData\\Local\\Temp\\scoped_dir17092_2067892677}, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, platform\u003dWINDOWS, proxy\u003dProxy(), goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:49788}, acceptInsecureCerts\u003dfalse, browserVersion\u003d84.0.4147.89, browserName\u003dchrome, javascriptEnabled\u003dtrue, platformName\u003dWINDOWS, setWindowRect\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: 201cb88ec2ed5a1dc818772905b5567d\n*** Element info: {Using\u003dcss selector, value\u003d.btn-action-close}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:185)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:120)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:586)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:356)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:450)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:430)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:348)\r\n\tat steps.CompraSteps.seleciono_um_produto_desejado(CompraSteps.java:51)\r\n\tat ✽.And seleciono um produto desejado(src/test/java/featureFiles/Compra.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "CompraSteps.eu_seleciono_a_opcao_de_entrega()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CompraSteps.eu_clico_no_botao_ir_para_o_pagamento()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CompraSteps.a_opcao_de_boleto_bancario_e_exibido_com_sucesso()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 768227000,
  "status": "passed"
});
});