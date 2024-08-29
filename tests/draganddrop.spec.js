const { test, expect } = require('@playwright/test');

test('Dragndrop', async ({ page }) => {
    await page.goto('https://demoqa.com/droppable');
    await page.locator('#droppableExample-tab-accept').click();
    
    
    await page.locator('#notAcceptable').hover();
    await page.mouse.down();
    await page.getByLabel('Accept').getByText('Drop here').hover();
    await page.mouse.up();
    await expect(page.getByLabel('Accept').locator('#droppable')).toHaveText('Drop here');
    
    await page.locator('#acceptable').hover();
    await page.mouse.down();
    await page.getByLabel('Accept').locator('#droppable').hover();
    await page.mouse.up();
    await expect(page.getByLabel('Accept').locator('#droppable')).toHaveText('Dropped!');
    
    await page.close;
  });


