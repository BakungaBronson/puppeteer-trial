import puppeteer from 'puppeteer';

// const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();

  await page.goto('https://google.com');

  // Type into search box.
  await page.type('.gLFyf', 'Hello World');

  await page.waitForTimeout(1000);

  await page.click('.gNO89b');

  await page.waitForTimeout(1000);

  // // Wait for suggest overlay to appear and click "show all results".
  // const allResultsSelector = '.devsite-suggest-all-results';
  // await page.waitForSelector(allResultsSelector);
  // await page.click(allResultsSelector);

  // // Wait for the results page to load and display the results.
  // const resultsSelector = '.gsc-results .gs-title';
  // await page.waitForSelector(resultsSelector);

  // // Extract the results from the page.
  // const links = await page.evaluate(resultsSelector => {
  //   return [...document.querySelectorAll(resultsSelector)].map(anchor => {
  //     const title = anchor.textContent.split('|')[0].trim();
  //     return `${title} - ${anchor.href}`;
  //   });
  // }, resultsSelector);

  // // Print all the files.
  // console.log(links.join('\n'));

  await browser.close();
})();