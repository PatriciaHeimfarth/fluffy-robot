require('dotenv').config();
const { Builder, By } = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('firefox').build();
  try {
    await driver.get('https://www.instagram.com');
    await new Promise(resolve => setTimeout(resolve, 3000));
    var element1 = driver.findElement(By.xpath("//button[text()='Akzeptieren']"));
    await element1.click();
    await new Promise(resolve => setTimeout(resolve, 3000));
    await driver.findElements(By.className("_2hvTZ")).then(function (elements) {

      var name = String(process.env.USRNAME);
      elements[0].click();
      elements[0].sendKeys(name);

      elements[1].click();
      var pass = String(process.env.PASS);
      elements[1].sendKeys(pass);

    });
   
  } finally {
    // await driver.quit();
  }
})();

