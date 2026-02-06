import { test, expect } from '@playwright/test';

test.describe('Instagram Section', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/');
	});

	test('displays the instagram section with dark background', async ({ page }) => {
		const section = page.locator('[data-testid="instagram-section"]');
		await expect(section).toBeVisible();
		await expect(section).toHaveClass(/section-dark/);
	});

	test('displays the "Follow us on Instagram" heading', async ({ page }) => {
		const heading = page.getByRole('heading', { name: /follow us on instagram/i });
		await expect(heading).toBeVisible();
	});

	test('displays the Instagram handle link', async ({ page }) => {
		const handleLink = page.getByRole('link', { name: '@impactologyaust', exact: true });
		await expect(handleLink).toBeVisible();
		await expect(handleLink).toHaveAttribute('href', /instagram\.com\/impactologyaust/);
		await expect(handleLink).toHaveAttribute('target', '_blank');
	});

	test('displays a grid of Instagram posts', async ({ page }) => {
		const section = page.locator('[data-testid="instagram-section"]');
		const posts = section.locator('[data-testid^="instagram-post-"]');
		await expect(posts).toHaveCount(6);
	});

	test('each Instagram post links to Instagram', async ({ page }) => {
		const firstPost = page.locator('[data-testid="instagram-post-0"]');
		await expect(firstPost).toHaveAttribute('href', /instagram\.com\/impactologyaust/);
		await expect(firstPost).toHaveAttribute('target', '_blank');
	});

	test('displays a follow button at the bottom', async ({ page }) => {
		const section = page.locator('[data-testid="instagram-section"]');
		const followButton = section.getByRole('link', { name: /follow @impactologyaust/i });
		await expect(followButton).toBeVisible();
		await expect(followButton).toHaveClass(/btn-primary/);
	});

	test('Instagram section appears after Meet Our Clients carousel', async ({ page }) => {
		const clientsSection = page.locator('section').filter({ hasText: 'MEET OUR CLIENTS' });
		const instagramSection = page.locator('[data-testid="instagram-section"]');

		const clientsBox = await clientsSection.boundingBox();
		const instagramBox = await instagramSection.boundingBox();

		expect(clientsBox).not.toBeNull();
		expect(instagramBox).not.toBeNull();
		expect(instagramBox!.y).toBeGreaterThan(clientsBox!.y);
	});

	test('Instagram section appears before Client Logos section', async ({ page }) => {
		const instagramSection = page.locator('[data-testid="instagram-section"]');
		const logosSection = page
			.locator('section')
			.filter({ hasText: "SOME COMPANIES WE'VE PARTNERED" });

		const instagramBox = await instagramSection.boundingBox();
		const logosBox = await logosSection.boundingBox();

		expect(instagramBox).not.toBeNull();
		expect(logosBox).not.toBeNull();
		expect(logosBox!.y).toBeGreaterThan(instagramBox!.y);
	});

	test('Instagram post images have proper alt text', async ({ page }) => {
		const section = page.locator('[data-testid="instagram-section"]');
		const images = section.locator('img');

		const count = await images.count();
		expect(count).toBeGreaterThan(0);

		for (let i = 0; i < count; i++) {
			const img = images.nth(i);
			const alt = await img.getAttribute('alt');
			expect(alt).toBeTruthy();
		}
	});
});
