const { Builder, By } = require('selenium-webdriver');

const assert = require('assert');
async function example() {
  const driver = await new Builder().forBrowser('chrome').build();

  await driver.get('http://localhost:3000');

  let home = await driver
    .findElement(By.className('sc-bBHxTw bBgOcG'))
    .getText()
    .then(function (value) {
      return value;
    });

  assert.strictEqual(home, 'Style Walks');
}
example();
