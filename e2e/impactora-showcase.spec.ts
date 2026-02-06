import { test, expect } from '@playwright/test';

test.describe('IMPACTORA Showcase Section', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/');
	});

	test('displays the IMPACTORA showcase section', async ({ page }) => {
		const section = page.locator('section').filter({ hasText: 'TAILORED ADVICE & INSIGHTS' });
		await expect(section).toBeVisible();
	});

	test('shows the IMPACTORA branding', async ({ page }) => {
		const impactoraLabel = page.getByText('IMPACTORA', { exact: true }).first();
		await expect(impactoraLabel).toBeVisible();
	});

	test('displays the main headline', async ({ page }) => {
		const headline = page.getByRole('heading', { name: /TAILORED ADVICE & INSIGHTS/i });
		await expect(headline).toBeVisible();
	});

	test('shows the description text', async ({ page }) => {
		const description = page.getByText(/delivers personalised guidance exactly when you need it/i);
		await expect(description).toBeVisible();
	});

	test('displays all three feature bullet points', async ({ page }) => {
		const features = [/instant, contextual advice/i, /data-driven insights/i, /available 24\/7/i];

		for (const feature of features) {
			await expect(page.getByText(feature)).toBeVisible();
		}
	});

	test('has a working Explore IMPACTORA link', async ({ page }) => {
		const exploreLink = page.getByRole('link', { name: /EXPLORE IMPACTORA/i });
		await expect(exploreLink).toBeVisible();
		await expect(exploreLink).toHaveAttribute('href', '/impactora');
	});

	test('section has dark background styling', async ({ page }) => {
		const section = page.locator('section').filter({ hasText: 'TAILORED ADVICE & INSIGHTS' });
		await expect(section).toHaveClass(/section-dark/);
	});

	test('displays the IMPACTORA icon', async ({ page }) => {
		const icon = page.locator('img[alt="IMPACTORA"]');
		await expect(icon).toBeVisible();
	});
});
