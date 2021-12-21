const { Builder, Key, By } = require('selenium-webdriver');
require('chromedriver');
async function example() {
  const driver = await new Builder().forBrowser('chrome').build();

  await driver.get('http://localhost:3000/register');

  await driver.findElement(By.id('name')).sendKeys('test2');
  await driver.findElement(By.id('lastname')).sendKeys('test2');
  await driver.findElement(By.id('username')).sendKeys('test2');
  await driver.findElement(By.id('email')).sendKeys('test2@gmail.com');
  await driver.findElement(By.id('password')).sendKeys('test2');
  await driver.findElement(By.id('conpassword')).sendKeys('test2', Key.RETURN);
}
example();
