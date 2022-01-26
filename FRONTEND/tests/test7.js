const { Builder, By } = require('selenium-webdriver');

const assert = require('assert');
async function example() {
  const driver = await new Builder().forBrowser('chrome').build();

  await driver.get('http://localhost:3000/product/61c09473c2b9114994568f4f');

  let women = await driver
    .findElement(By.className('sc-htJRVC iAmbyr'))
    .getText()
    .then(function (value) {
      return value;
    });

  assert.strictEqual(women, 'Animal Print Loafers');
}
example();
