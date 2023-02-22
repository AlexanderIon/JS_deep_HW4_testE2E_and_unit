import puppeteer from 'puppeteer';

jest.setTimeout(13000);

describe('WidgetCard', () => {
  let browser;
  let page;
  beforeEach(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 100,
      devtools: true,
    });
    page = await browser.newPage();
  });

  // test('Widget is on the page', async () => {
  //     await page.goto('http://localhost:9000')
  //     await page.waitForSelector('.listImgCards')
  // })

  test('Check Valid Card', async () => {
    await page.goto('http://localhost:9000');
    await page.waitForSelector('.checkCard');
    const checkCard = await page.$('.checkCard');
    const btnCheck = await checkCard.$('.CheckeBtn');
    const inputNumb = await checkCard.$('.cardNumber');
    await inputNumb.type('4485602681175708');

    await btnCheck.click();
    // await btnCheck.click();
    await page.waitForSelector('.active');
  });

  afterAll(async () => {
    await browser.close();
  });
});
