import { test, expect } from '@playwright/test';
test('test', async ({ page }) => {
    // Go to https://create.vista.com/
    await page.goto('https://create.vista.com/');
    // Click a:has-text("Square Video Post 1080 × 1080 px")
    await page.locator('a:has-text("Square Video Post 1080 × 1080 px")').click();
    await expect(page).toHaveURL('https://create.vista.com/signup/');
    // Click [data-test="cimpress"]
    const [page1] = await Promise.all([
      page.waitForEvent('popup'),
      page.locator('[data-test="cimpress"]').click()
    ]);
  });

//Open Facebook page 
test.describe('facebook testing', ()=>{
    test.beforeEach(async ({page})=>{
        await page.goto('https://www.facebook.com');  
    });

//Check page title
    test('Check facebook name',async ({page})=>{
            await expect(page).toHaveTitle('Facebook - log in or sign up');  
        });
});


