import { readFileSync } from 'node:fs';
import { expect, test } from '@playwright/test';

const { profile } = JSON.parse(readFileSync('src/data/portfolio.json', 'utf8'));

test('002 AC-2: the menu walks Home → Portfolio → About', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1, name: profile.headline })).toBeVisible();

  const nav = page.locator('header nav');
  await nav.getByRole('link', { name: 'Portfólio' }).click();
  await expect(page).toHaveURL(/\/portfolio$/);
  await expect(page.getByRole('heading', { level: 1, name: 'Portfólio de Projetos' })).toBeVisible();

  await nav.getByRole('link', { name: 'Sobre' }).click();
  await expect(page).toHaveURL(/\/about$/);
  await expect(page.getByRole('heading', { level: 1, name: 'Sobre Mim' })).toBeVisible();
});

test('001 AC-2: a direct route loads its page', async ({ page }) => {
  await page.goto('/about');
  await expect(page.getByRole('heading', { level: 1, name: 'Sobre Mim' })).toBeVisible();
});
