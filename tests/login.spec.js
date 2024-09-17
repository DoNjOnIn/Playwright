const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/loginpage');

test('Login', async ({ page }) => {

    const loginpage = new LoginPage(page);
    
    await loginpage.goto();
    await loginpage.successfulLogin();
    await loginpage.logOut();
    await loginpage.failedLogin();

    await page.close();
  });


  test('CheckBox', async ({ page }) => {
    await page.goto('https://demoqa.com/checkbox');
    await page.click('#tree-node > ol > li > span > label > span.rct-checkbox > svg');
    await page.waitForSelector('#result');
    
    await expect(await page.getByText('You have selected')).toBeVisible();
    
    await page.close();
  });