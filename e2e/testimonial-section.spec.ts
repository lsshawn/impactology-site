import { test, expect } from '@playwright/test';

test.describe('Testimonial Quote Section', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/');
	});

	test('displays the testimonial section with yellow background', async ({ page }) => {
		const section = page.locator('[data-testid="testimonial-section"]');
		await expect(section).toBeVisible();
		await expect(section).toHaveClass(/section-yellow/);
	});

	test('displays the testimonial quote text', async ({ page }) => {
		const quote = page.getByText(/helped me achieve breakthrough results/i);
		await expect(quote).toBeVisible();
	});

	test('displays the quote attribution', async ({ page }) => {
		const attribution = page.getByText(/Senior HR Business Partner/i);
		await expect(attribution).toBeVisible();
	});

	test('displays decorative quote marks', async ({ page }) => {
		const section = page.locator('[data-testid="testimonial-section"]');
		const quoteMarks = section.locator('.quote-marks');
		await expect(quoteMarks).toHaveCount(2);
	});

	test('section contains a blockquote element', async ({ page }) => {
		const section = page.locator('[data-testid="testimonial-section"]');
		const blockquote = section.locator('blockquote');
		await expect(blockquote).toBeVisible();
	});

	test('testimonial section appears after IMPACTORA showcase', async ({ page }) => {
		const impactoraSection = page
			.locator('section')
			.filter({ hasText: 'TAILORED ADVICE & INSIGHTS' });
		const testimonialSection = page.locator('[data-testid="testimonial-section"]');

		const impactoraBox = await impactoraSection.boundingBox();
		const testimonialBox = await testimonialSection.boundingBox();

		expect(impactoraBox).not.toBeNull();
		expect(testimonialBox).not.toBeNull();
		expect(testimonialBox!.y).toBeGreaterThan(impactoraBox!.y);
	});

	test('testimonial section appears before Meet Our Clients', async ({ page }) => {
		const testimonialSection = page.locator('[data-testid="testimonial-section"]');
		const clientsSection = page.locator('section').filter({ hasText: 'MEET OUR CLIENTS' });

		const testimonialBox = await testimonialSection.boundingBox();
		const clientsBox = await clientsSection.boundingBox();

		expect(testimonialBox).not.toBeNull();
		expect(clientsBox).not.toBeNull();
		expect(clientsBox!.y).toBeGreaterThan(testimonialBox!.y);
	});
});
