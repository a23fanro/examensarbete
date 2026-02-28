const { firefox } = require('playwright');

(async () => {
    const browser = await firefox.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://his.se');

    const heading = await page.locator('#p6').textContent();

    await browser.close();
})();