import { test, expect } from '@playwright/test';

test.describe('Find Out How We Can Help - Contact Form Section', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/');
	});

	test('displays the contact form section with white background', async ({ page }) => {
		const section = page.locator('[data-testid="contact-form-section"]');
		await expect(section).toBeVisible();
		await expect(section).toHaveClass(/bg-base-100/);
	});

	test('displays the section heading', async ({ page }) => {
		const heading = page.getByRole('heading', { name: /find out how we can help/i });
		await expect(heading).toBeVisible();
	});

	test('displays the section description', async ({ page }) => {
		const description = page.getByText(/ready to make an impact/i);
		await expect(description).toBeVisible();
	});

	test('displays the contact form with all required fields', async ({ page }) => {
		const form = page.locator('[data-testid="inline-contact-form"]');
		await expect(form).toBeVisible();

		await expect(form.locator('input[type="text"]').first()).toBeVisible();
		await expect(form.locator('input[type="email"]')).toBeVisible();
		await expect(form.locator('input[type="tel"]')).toBeVisible();
		await expect(form.locator('textarea')).toBeVisible();
	});

	test('form has first name field', async ({ page }) => {
		const form = page.locator('[data-testid="inline-contact-form"]');
		const firstNameLabel = form.getByText('First Name');
		await expect(firstNameLabel).toBeVisible();

		const firstNameInput = form.locator('input[placeholder="John"]');
		await expect(firstNameInput).toBeVisible();
		await expect(firstNameInput).toHaveAttribute('required', '');
	});

	test('form has last name field', async ({ page }) => {
		const form = page.locator('[data-testid="inline-contact-form"]');
		const lastNameLabel = form.getByText('Last Name');
		await expect(lastNameLabel).toBeVisible();

		const lastNameInput = form.locator('input[placeholder="Smith"]');
		await expect(lastNameInput).toBeVisible();
		await expect(lastNameInput).toHaveAttribute('required', '');
	});

	test('form has email field', async ({ page }) => {
		const form = page.locator('[data-testid="inline-contact-form"]');
		const emailLabel = form.getByText('Email');
		await expect(emailLabel).toBeVisible();

		const emailInput = form.locator('input[type="email"]');
		await expect(emailInput).toBeVisible();
		await expect(emailInput).toHaveAttribute('required', '');
	});

	test('form has optional phone field', async ({ page }) => {
		const form = page.locator('[data-testid="inline-contact-form"]');
		const phoneLabel = form.getByText('Phone (optional)');
		await expect(phoneLabel).toBeVisible();

		const phoneInput = form.locator('input[type="tel"]');
		await expect(phoneInput).toBeVisible();
		await expect(phoneInput).not.toHaveAttribute('required');
	});

	test('form has company field', async ({ page }) => {
		const form = page.locator('[data-testid="inline-contact-form"]');
		const companyLabel = form.getByText('Company');
		await expect(companyLabel).toBeVisible();

		const companyInput = form.locator('input[placeholder="Your Company Name"]');
		await expect(companyInput).toBeVisible();
		await expect(companyInput).toHaveAttribute('required', '');
	});

	test('form has message textarea', async ({ page }) => {
		const form = page.locator('[data-testid="inline-contact-form"]');
		const messageLabel = form.getByText('How can we help?');
		await expect(messageLabel).toBeVisible();

		const messageTextarea = form.locator('textarea');
		await expect(messageTextarea).toBeVisible();
		await expect(messageTextarea).toHaveAttribute('required', '');
	});

	test('form has submit button', async ({ page }) => {
		const form = page.locator('[data-testid="inline-contact-form"]');
		const submitButton = form.getByRole('button', { name: /get in touch/i });
		await expect(submitButton).toBeVisible();
		await expect(submitButton).toBeEnabled();
	});

	test('section has id for anchor link from hero CTA', async ({ page }) => {
		const section = page.locator('[data-testid="contact-form-section"]');
		await expect(section).toHaveAttribute('id', 'make_impacts');
	});

	test('hero CTA button links to contact form section', async ({ page }) => {
		const heroButton = page.getByRole('link', {
			name: /book your free 60-minute strategy session/i
		});
		await expect(heroButton).toHaveAttribute('href', '#make_impacts');
	});

	test('contact form section appears after client logos section', async ({ page }) => {
		const logosSection = page.locator('section').filter({ hasText: "SOME COMPANIES WE'VE" });
		const contactSection = page.locator('[data-testid="contact-form-section"]');

		const logosBox = await logosSection.boundingBox();
		const contactBox = await contactSection.boundingBox();

		expect(logosBox).not.toBeNull();
		expect(contactBox).not.toBeNull();
		expect(contactBox!.y).toBeGreaterThan(logosBox!.y);
	});

	test('form fields can be filled in', async ({ page }) => {
		const form = page.locator('[data-testid="inline-contact-form"]');

		await form.locator('input[placeholder="John"]').fill('Test');
		await form.locator('input[placeholder="Smith"]').fill('User');
		await form.locator('input[type="email"]').fill('test@example.com');
		await form.locator('input[type="tel"]').fill('+61 400 000 000');
		await form.locator('input[placeholder="Your Company Name"]').fill('Test Company');
		await form.locator('textarea').fill('This is a test message');

		await expect(form.locator('input[placeholder="John"]')).toHaveValue('Test');
		await expect(form.locator('input[placeholder="Smith"]')).toHaveValue('User');
		await expect(form.locator('input[type="email"]')).toHaveValue('test@example.com');
		await expect(form.locator('input[type="tel"]')).toHaveValue('+61 400 000 000');
		await expect(form.locator('input[placeholder="Your Company Name"]')).toHaveValue(
			'Test Company'
		);
		await expect(form.locator('textarea')).toHaveValue('This is a test message');
	});
});
