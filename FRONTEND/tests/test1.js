const { Builder, Key, By } = require('selenium-webdriver');
require('chromedriver');
async function example() {
  const driver = await new Builder().forBrowser('chrome').build();

  await driver.get('http://localhost:3000/login');

  await driver.findElement(By.id('username')).sendKeys('Admin');
  await driver.sleep(2000);
  await driver.findElement(By.id('password')).sendKeys('12345', Key.RETURN);
}
example();
