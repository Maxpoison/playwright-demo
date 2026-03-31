import { test } from "@playwright/test";

test.beforeEach(async({page}) => {
    await page.goto('https://ecd.rs/')
    await page.getByText('O nama').click()
})

test('Has text',async({page}) =>{
    const container = page.locator('.container');
    await container.locator('h1', {hasText: "O Nama"}).click()
})