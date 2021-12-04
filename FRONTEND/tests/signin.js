const { Builder, By } = require('selenium-webdriver');

const assert = require('assert');
async function example() {
  const driver = await new Builder().forBrowser('chrome').build();

  await driver.get('http://localhost:3000/login');

  let signin = await driver
    .findElement(By.xpath('//*[@id="root"]/div/div/h1'))
    .getText()
    .then(function (value) {
      return value;
    });

  assert.strictEqual(signin, 'SIGN IN');
}
example();
