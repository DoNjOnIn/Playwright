const { test, expect } = require('@playwright/test');

test('Login', async ({ page }) => {
    await page.goto('https://demoqa.com/login');
  
    await page.getByPlaceholder('UserName').fill('qwer');
    await page.fill('#password','!QAZ2wsx');
    await page.click('#login');
    
    await page.waitForSelector('#submit')
    const logoutbutton = await page.getByRole('button',{name: 'Log out'})
    await expect(logoutbutton).toBeVisible();
    
    await page.close();
  });


  test('CheckBox', async ({ page }) => {
    await page.goto('https://demoqa.com/checkbox');
    await page.click('#tree-node > ol > li > span > label > span.rct-checkbox > svg');
    await page.waitForSelector('#result');
    
    await expect(await page.getByText('You have selected')).toBeVisible();
    
    await page.close();
  });