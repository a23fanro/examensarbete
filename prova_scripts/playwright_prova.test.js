import { test, expect } from '@playwright/test';

test('kontrollerar textinnehåll för #p6 på his.se', async ({ page }) => {
  await page.goto('https://his.se');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Start - Högskolan i Skövde/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://his.se/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Bibliotek' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Högskolebiblioteket' })).toBeVisible();
});