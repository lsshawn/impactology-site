import { test, expect } from '@playwright/test';

test.describe('Business Partnering Impact Program Page', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/business-partnering-impact-program');
	});

	test('loads the page successfully', async ({ page }) => {
		await expect(page).toHaveURL('/business-partnering-impact-program');
		await expect(page).toHaveTitle(/Business Partnering Impact Program/i);
	});

	test.describe('Hero Section', () => {
		test('displays the program branding', async ({ page }) => {
			const logo = page.locator('img[alt="Business Partnering Impact Program"]').first();
			await expect(logo).toBeVisible();

			const brandName = page.getByText('IMPACT PROGRAM', { exact: true }).first();
			await expect(brandName).toBeVisible();
		});

		test('shows the main headline', async ({ page }) => {
			const headline = page.getByRole('heading', {
				name: /BUSINESS PARTNERING IMPACT PROGRAM/i
			});
			await expect(headline).toBeVisible();
		});

		test('displays the hero description about industry disruption', async ({ page }) => {
			const description = page.getByText(/industry disruption.*market uncertainties/i);
			await expect(description).toBeVisible();
		});

		test('has register interest call-to-action button', async ({ page }) => {
			const ctaButton = page.getByRole('link', { name: /REGISTER YOUR INTEREST/i }).first();
			await expect(ctaButton).toBeVisible();
			await expect(ctaButton).toHaveAttribute('href', '#register-interest');
		});
	});

	test.describe('Program Overview Section', () => {
		test('displays program description', async ({ page }) => {
			const description = page.getByText(/designed to help build a high performing/i);
			await expect(description).toBeVisible();
		});

		test('mentions seven modules', async ({ page }) => {
			const modulesText = page.getByText(/seven modules.*online or in-person/i);
			await expect(modulesText).toBeVisible();
		});
	});

	test.describe("What You'll Learn Section", () => {
		test('displays the section heading', async ({ page }) => {
			const heading = page.getByRole('heading', { name: /WHAT YOU'LL LEARN/i });
			await expect(heading).toBeVisible();
		});

		test('shows learning outcomes', async ({ page }) => {
			const outcomes = [
				'Think and act more strategically and commercially',
				'Evolve relationships and build trust with stakeholders',
				'Navigate external influences for better decision-making',
				'Apply high-impact tools and frameworks',
				'Build data storytelling capabilities',
				'Measure and deliver value as a Business Partner'
			];

			for (const outcome of outcomes) {
				await expect(page.getByText(outcome)).toBeVisible();
			}
		});
	});

	test.describe('Client Logos Section', () => {
		test('displays the section heading', async ({ page }) => {
			const heading = page.getByRole('heading', {
				name: /SOME COMPANIES WE'VE PARTNERED WITH/i
			});
			await expect(heading).toBeVisible();
		});

		test('shows client logos', async ({ page }) => {
			const logoImages = page.locator('img[alt="Client logo"]');
			await expect(logoImages.first()).toBeVisible();
			expect(await logoImages.count()).toBeGreaterThan(5);
		});
	});

	test.describe('Core Modules Section', () => {
		test('displays the section heading', async ({ page }) => {
			const heading = page.getByRole('heading', { name: /CORE MODULES/i });
			await expect(heading).toBeVisible();
		});

		test('shows all six module titles', async ({ page }) => {
			const modules = [
				'UNDERSTANDING THE BUSINESS',
				'EVOLVING BUSINESS RELATIONSHIPS',
				'KNOW YOUR MACRO WORLD',
				'BUSINESS PARTNERING TOOLKIT',
				'THE ART OF DATA STORYTELLING',
				'UNDERSTANDING & DELIVERING VALUE'
			];

			for (const module of modules) {
				await expect(page.getByRole('heading', { name: module })).toBeVisible();
			}
		});

		test('has numbered module indicators', async ({ page }) => {
			for (let i = 1; i <= 6; i++) {
				await expect(page.getByText(String(i), { exact: true }).first()).toBeVisible();
			}
		});

		test('displays module subtitles', async ({ page }) => {
			await expect(
				page.getByText(/Systematic approach to understanding your business model/i)
			).toBeVisible();
			await expect(page.getByText(/Core capabilities for strategic partnering/i)).toBeVisible();
			await expect(
				page.getByText(/Understanding external influences to enhance decision-making/i)
			).toBeVisible();
		});
	});

	test.describe('Book Section', () => {
		test('displays the book section heading', async ({ page }) => {
			const heading = page.getByRole('heading', { name: /THE BUSINESS PARTNERING PLAYBOOK/i });
			await expect(heading).toBeVisible();
		});

		test('shows the book tagline', async ({ page }) => {
			const tagline = page.getByText(
				/Finally, a book that provides realistic and targeted advice/i
			);
			await expect(tagline).toBeVisible();
		});

		test('mentions EVOLVE', async ({ page }) => {
			const evolveText = page.getByText(/EVOLVE shows you how to navigate service models/i);
			await expect(evolveText).toBeVisible();
		});
	});

	test.describe('Testimonials Section', () => {
		test('displays testimonial quotes', async ({ page }) => {
			const testimonials = [
				'Guidance really helped',
				'Helped me achieve',
				'Program helped me in so many ways',
				'Insights were innovative and pragmatic',
				'Truly enriching and transformational experience'
			];

			for (const testimonial of testimonials) {
				await expect(page.getByRole('heading', { name: testimonial })).toBeVisible();
			}
		});
	});

	test.describe('Register Interest Form', () => {
		test('displays the form section heading', async ({ page }) => {
			const heading = page.getByRole('heading', { name: /REGISTER YOUR INTEREST/i }).last();
			await expect(heading).toBeVisible();
		});

		test('has all required form fields', async ({ page }) => {
			const form = page.getByTestId('interest-form');

			await expect(form.getByLabel(/First Name/i)).toBeVisible();
			await expect(form.getByLabel(/Last Name/i)).toBeVisible();
			await expect(form.getByLabel(/Email/i)).toBeVisible();
			await expect(form.getByLabel(/Phone/i)).toBeVisible();
			await expect(form.getByLabel(/Company/i)).toBeVisible();
			await expect(form.getByLabel(/Message/i)).toBeVisible();
		});

		test('has a submit button', async ({ page }) => {
			const submitButton = page.getByRole('button', { name: /Submit Your Interest/i });
			await expect(submitButton).toBeVisible();
			await expect(submitButton).toBeEnabled();
		});

		test('displays form description', async ({ page }) => {
			const description = page.getByText(/disrupt everyday thinking.*spark new ideas/i);
			await expect(description).toBeVisible();
		});
	});

	test.describe('Stay in the Loop Section', () => {
		test('displays the section heading', async ({ page }) => {
			const heading = page.getByRole('main').getByRole('heading', { name: /STAY IN THE LOOP/i });
			await expect(heading).toBeVisible();
		});

		test('has contact us button', async ({ page }) => {
			const contactButton = page.getByRole('link', { name: /CONTACT US/i }).first();
			await expect(contactButton).toBeVisible();
			await expect(contactButton).toHaveAttribute('href', '/contact');
		});
	});

	test.describe('Navigation', () => {
		test('clicking "Register Your Interest" scrolls to form', async ({ page }) => {
			const ctaButton = page.getByRole('link', { name: /REGISTER YOUR INTEREST/i }).first();
			await ctaButton.click();

			const form = page.locator('#register-interest');
			await expect(form).toBeInViewport();
		});
	});

	test.describe('SEO', () => {
		test('has correct meta title', async ({ page }) => {
			await expect(page).toHaveTitle(/Business Partnering Impact Program.*Impactology/i);
		});

		test('has meta description', async ({ page }) => {
			const metaDescription = page.locator('meta[name="description"]');
			await expect(metaDescription).toHaveAttribute('content', /Business Partnering Programs/i);
		});

		test('has Open Graph tags', async ({ page }) => {
			const ogTitle = page.locator('meta[property="og:title"]');
			await expect(ogTitle).toHaveAttribute('content', /Business Partnering Impact Program/i);

			const ogType = page.locator('meta[property="og:type"]');
			await expect(ogType).toHaveAttribute('content', 'website');
		});

		test('has canonical URL', async ({ page }) => {
			const canonical = page.locator('link[rel="canonical"]');
			await expect(canonical).toHaveAttribute(
				'href',
				'https://impactology.com.au/business-partnering-impact-program'
			);
		});
	});
});
