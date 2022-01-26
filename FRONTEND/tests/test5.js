const { Builder, By } = require('selenium-webdriver');

const assert = require('assert');
async function example() {
  const driver = await new Builder().forBrowser('chrome').build();

  await driver.get('http://localhost:3000/product/6193bd9cac7355470d904f0e');

  let product = await driver
    .findElement(By.className('sc-hjGZqJ grvjoS'))
    .getText()
    .then(function (value) {
      return value;
    });

  assert.strictEqual(product, 'PUMA');
}
example();
