const { Builder, By } = require('selenium-webdriver');

const assert = require('assert');
async function example() {
  const driver = await new Builder().forBrowser('chrome').build();

  await driver.get('http://localhost:3000/product/61c0b02fc2b9114994568faa');

  let women = await driver
    .findElement(By.className('sc-hjGZqJ grvjoS'))
    .getText()
    .then(function (value) {
      return value;
    });

  assert.strictEqual(women, 'PUMA kids slippers');
}
example();
