import { expect, test } from '@playwright/test';

test('Dashboard page has a block with the TVL', async ({ page }) => {
	await page.goto('/');
	await expect(page.locator('dt')).toHaveText('Total value locked');
});
