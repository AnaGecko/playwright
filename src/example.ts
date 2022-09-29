import {test, expect} from "@playwright/test";

//Open Crello page 
test.describe('crello testing', ()=>{
    test.beforeEach(async ({page})=>{
        await page.goto('https://www.crello.com');  
    });

//Verify Crello title and search fiels
test('Check crello title', async({page})=>{
    await expect(page).toHaveTitle('VistaCreate – Free Graphic Design Software with 70,000+ Free Templates');
    await expect (page.locator('.search-input')).toHaveAttribute('placeholder', 'Search thousands of templates');
});
});
//Open Creative Vista page and click on random elements
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

