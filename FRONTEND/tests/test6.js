const { Builder, By } = require('selenium-webdriver');

const assert = require('assert');
async function example() {
  const driver = await new Builder().forBrowser('chrome').build();

  await driver.get('http://localhost:3000/cart');

  let cart = await driver
    .findElement(By.className('sc-kLwhqv feOsOt'))
    .getText()
    .then(function (value) {
      return value;
    });

  assert.strictEqual(cart, 'YOUR BAG');
}
example();
