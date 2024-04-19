const { test, expect } = require('@playwright/test');

test('Check games page', async ({ page }) => {
    await page.goto('https://theo1-exam.onrender.com/games');
    const list = await page.$('ul');
    expect(list).toBeTruthy();
  });
  