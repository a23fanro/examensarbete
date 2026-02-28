const { Builder, By } = require('selenium-webdriver');

(async () => {
    const driver = await new Builder().forBrowser('firefox').build();

    try {
        await driver.manage().setTimeouts({ implicit: 10000 }); //10 sek implicit wait

        await driver.get('https://his.se');

        //hämtar element med id p6
        const headingElement = await driver.findElement(By.id('p6'));

    } finally {
        await driver.quit();
    }
})();