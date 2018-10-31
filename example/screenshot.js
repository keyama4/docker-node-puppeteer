const puppeteer = require('puppeteer');

const screenShot = async () => {


  try {
    const browser = await puppeteer.launch({ args: ['--no-sandbox'], timeout: 30000 });
    const page = await browser.newPage();

    await page.goto('https://google.com');
    await page.screenshot({path: 'image.png', fullPage: true});
    await browser.close();

　　console.log("Crawling succeeded.");

  } catch(e) {
    console.error(e);
  }
}

screenShot();
