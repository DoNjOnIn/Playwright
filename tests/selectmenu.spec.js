const { test, expect } = require('@playwright/test');

  test('Menu', async ({ page }) => {
    await page.goto('https://demoqa.com/select-menu');

    await page.locator('#withOptGroup > div > div.css-1hwfws3 > div.css-1wa3eu0-placeholder').click()
    await page.keyboard.type('A root option');
    await page.keyboard.press('Enter');
 
    await page.locator('  #selectOne > div > div.css-1hwfws3 > div.css-1wa3eu0-placeholder').click()
    await page.keyboard.type('Prof.');
    await page.keyboard.press('Enter');

    await page.locator('#oldSelectMenu').selectOption('7');

    await page.getByText('Saab').click();

    await page.close();
  });

  test('Slider', async ({ page }) => {
    await page.goto('https://demoqa.com/slider');
    
    const slidergoal = '69'
    const box = await page.locator('#sliderContainer > div.col-9 > span > input').boundingBox();
    await page.mouse.click(box.x, box.y + box.height / 2);
    await page.mouse.move(box.x, box.y + box.height / 2);
    await page.mouse.down();

    let loop = true
    
    while(loop){

      await page.mouse.move(box.x+2, box.y + box.height / 2);
      box.x = box.x + 2
      if(await page.locator('#sliderValue').inputValue()==slidergoal){loop=false;};
      
    };
    await page.mouse.up();

    await page.close();
  });