import {test, expect} from "@playwright/test";

test('Open google home page', async ({page})=>{
    await page.goto('https://www.google.com');
});

test('Open Facebook home page', async ({page})=>{
    await page.goto('https://www.facebook.com')
});