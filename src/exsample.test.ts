import {test, expect} from "@playwright/test";

test.describe('crello testing', ()=>{
    test.beforeEach(async ({page})=>{
        await page.goto('https://www.crello.com');  
    });


test('Check crello title', async({page})=>{
    await expect(page).toHaveTitle('VistaCreate – Free Graphic Design Software with 70,000+ Free Templates');
    await expect (page.locator('.search-input')).toHaveAttribute('placeholder', 'Search thousands of templates');
});
});
