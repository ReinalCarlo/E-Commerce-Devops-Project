const { Builder, Thread, By } = require('selenium-webdriver');
require('chromedriver');
async function example() {
  const driver = await new Builder().forBrowser('chrome').build();

  await driver.get('http://localhost:3000');
  await driver.sleep(2000);
  await driver.findElement(By.className('sc-GEbAx fQYsfQ')).click();
  await driver.sleep(2000);
  await driver.get('http://localhost:3000/product/6193bd9cac7355470d904f0e');

  await driver.findElement(By.className('sc-gjNHFA ggPHPY')).selectbyIndex(2);
}
example();
