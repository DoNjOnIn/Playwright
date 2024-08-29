// @ts-check
const { test, expect } = require('@playwright/test');
const HomePage = 'https://demoqa.com';

test('Test1', async ({ page }) => {
  await page.goto(HomePage);

  await expect(page).toHaveTitle('DEMOQA');

  page.close();
});

test('Test2', async ({ page }) => {
  await page.goto(HomePage);

  await page.click('#app > div > div > div.home-body > div > div:nth-child(1)');
  
  await expect(page).toHaveURL('https://demoqa.com/elements');
  
  const test2selector = '#app > div > div > div > div:nth-child(1) > div > div > div:nth-child(1) > div > ul';
  page.waitForSelector(test2selector);

  const DropDown = await page.$$(test2selector);
  
  for(const a of DropDown) {
    const droptext = await a.textContent();
    expect(droptext).toEqual('Text BoxCheck BoxRadio ButtonWeb TablesButtonsLinksBroken Links - ImagesUpload and DownloadDynamic Properties');
    };
  
  page.close();
});

