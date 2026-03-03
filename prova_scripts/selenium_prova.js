const { By, Builder, Browser } = require('selenium-webdriver');
const assert = require('assert');

(async function firstTest() {
  let driver;

  try {
    driver = await new Builder().forBrowser(Browser.FIREFOX).build();
    await driver.get('https://his.se');

    let title = await driver.getTitle();
    assert.ok(title.length > 0, "Titeln på sidan borde inte vara tom");

    await driver.manage().setTimeouts({ implicit: 10000 });

    // Hämta element med id 'p6'
    let headingElement = await driver.findElement(By.id('p6'));
    let headingText = await headingElement.getText();

    // Enkel assert för att kontrollera att elementet innehåller text
    assert.notStrictEqual(headingText, '', "Elementet med id 'p6' har ingen text");

    console.log("Heading text:", headingText);

  } catch (e) {
    console.log(e);
  } finally {
    await driver.quit();
  }
})();