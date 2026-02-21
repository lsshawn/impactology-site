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
		const section = page.locator('[data-testid="testimonial-section"]');
		const card = section.locator('[data-testid="testimonial-card"]');
		await expect(card).toBeVisible();
		// First testimonial should be visible by default
		await expect(card).toContainText('Claire');
	});

	test('displays the quote attribution with name and title', async ({ page }) => {
		const card = page.locator('[data-testid="testimonial-card"]');
		await expect(card.getByText('Claire')).toBeVisible();
		await expect(card.getByText('Senior Manager')).toBeVisible();
	});

	test('has decorative quote mark icons via CSS pseudo-elements', async ({ page }) => {
		const card = page.locator('[data-testid="testimonial-card"]');
		const before = await card.evaluate((el) => {
			const style = window.getComputedStyle(el, '::before');
			return style.backgroundImage;
		});
		expect(before).toContain('q_icon_top.png');
	});

	test('navigation shows current position and total', async ({ page }) => {
		const section = page.locator('[data-testid="testimonial-section"]');
		await expect(section.getByText('1/5')).toBeVisible();
	});

	test('navigation arrows cycle through testimonials', async ({ page }) => {
		const section = page.locator('[data-testid="testimonial-section"]');
		const nextBtn = section.getByLabel('Next testimonial');
		await nextBtn.click();
		await expect(section.getByText('2/5')).toBeVisible();
		await expect(section.locator('[data-testid="testimonial-card"]')).toContainText('Andrew');
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
