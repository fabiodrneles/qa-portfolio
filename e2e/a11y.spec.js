import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

const blockingViolations = async (page) => {
  const { violations } = await new AxeBuilder({ page }).analyze();
  return violations
    .filter((v) => v.impact === 'serious' || v.impact === 'critical')
    .map((v) => `${v.id} (${v.impact}): ${v.nodes.map((n) => n.target.join(' ')).join(', ')}`);
};

for (const path of ['/', '/portfolio', '/about']) {
  test(`002 AC-3: ${path} has no serious or critical axe violations`, async ({ page }) => {
    await page.goto(path);
    await expect(page.locator('main h1').first()).toBeVisible();
    expect(await blockingViolations(page)).toEqual([]);
  });
}

for (const tab of ['Cenários de Teste', 'Métricas e KPIs']) {
  test(`002 AC-3: the "${tab}" tab has no serious or critical axe violations`, async ({ page }) => {
    await page.goto('/portfolio');
    await page.getByRole('button', { name: tab }).click();
    await expect(page.getByRole('button', { name: tab })).toHaveClass(/active/);
    expect(await blockingViolations(page)).toEqual([]);
  });
}
