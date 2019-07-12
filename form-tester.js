const puppeteer = require('puppeteer');

(async() => {

    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    const url = process.argv[2]

    const path = url.split('/').pop()

    await page.goto(url)
    await page.screenshot({ path: `./assets/${path}.png`, fullPage: true})

    await browser.close()

})();