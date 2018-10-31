const puppeteer = require('puppeteer');

const screenShot = async (url) => {


  try {
    const browser = await puppeteer.launch({ args: ['--no-sandbox'], timeout: 30000 });
    const page = await browser.newPage();

    await page.goto(url);
    await page.screenshot({path: 'image.png', fullPage: true});
    await browser.close();

　　console.log("Crawling succeeded.");

  } catch(e) {
    console.error(e);
  }
}

if (process.argv.length !== 3) {
  console.error('Require only one commandline argument.');
  return;
}

screenShot(process.argv[2]);
