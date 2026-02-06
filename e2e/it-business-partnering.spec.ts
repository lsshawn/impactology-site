import { test, expect } from '@playwright/test';

test.describe('IT Business Partnering Page', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/it-business-partnering');
	});

	test('loads the page successfully', async ({ page }) => {
		await expect(page).toHaveURL('/it-business-partnering');
		await expect(page).toHaveTitle(/IT Business Partnering Program/i);
	});

	test.describe('Hero Section', () => {
		test('displays the program branding', async ({ page }) => {
			const logo = page.locator('img[alt="IT Business Partnering Program"]').first();
			await expect(logo).toBeVisible();

			const brandName = page.getByText('IT PROGRAM', { exact: true }).first();
			await expect(brandName).toBeVisible();
		});

		test('shows the main headline', async ({ page }) => {
			const headline = page.getByRole('heading', {
				name: /INFORMATION TECHNOLOGY.*BUSINESS PARTNERING TRAINING PROGRAM/i
			});
			await expect(headline).toBeVisible();
		});

		test('displays the hero tagline about builders of trust', async ({ page }) => {
			const tagline = page.getByText(/Builders of trust.*Experts in technology and change/i);
			await expect(tagline).toBeVisible();
		});

		test('has book strategy session call-to-action button', async ({ page }) => {
			const ctaButton = page
				.getByRole('link', { name: /BOOK YOUR FREE 60-MINUTE STRATEGY SESSION/i })
				.first();
			await expect(ctaButton).toBeVisible();
			await expect(ctaButton).toHaveAttribute('href', '#make_impacts');
		});
	});

	test.describe('Free Strategy Session Section', () => {
		test('displays strategy session benefits', async ({ page }) => {
			const benefitText = page.getByText(/Practical next steps you can act on immediately/i);
			await expect(benefitText).toBeVisible();
		});

		test('shows no hard sell promise', async ({ page }) => {
			const promiseText = page.getByText(/No hard sell – pinky promise/i);
			await expect(promiseText).toBeVisible();
		});
	});

	test.describe('What Makes This Program Unique Section', () => {
		test('displays the section heading', async ({ page }) => {
			const heading = page.getByRole('heading', {
				name: /WHAT MAKES THIS IT BUSINESS PARTNERING DEVELOPMENT PROGRAM UNIQUE/i
			});
			await expect(heading).toBeVisible();
		});

		test('shows the three core principles', async ({ page }) => {
			await expect(page.getByText('Know yourself', { exact: true })).toBeVisible();
			await expect(page.getByText('Know your business', { exact: true })).toBeVisible();
			await expect(page.getByText('Know your stakeholders', { exact: true })).toBeVisible();
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

	test.describe('Call to Action Section', () => {
		test('displays the section heading', async ({ page }) => {
			const heading = page.getByRole('heading', {
				name: /THE CALL TO ACTION FOR IT TEAMS/i
			});
			await expect(heading).toBeVisible();
		});

		test('mentions IT business partners', async ({ page }) => {
			const text = page.getByText('IT business partners', { exact: false }).first();
			await expect(text).toBeVisible();
		});
	});

	test.describe('Learning Outcomes Section', () => {
		test('displays the section heading', async ({ page }) => {
			const heading = page.getByRole('heading', { name: /WHAT YOU'LL LEARN/i });
			await expect(heading).toBeVisible();
		});

		test('shows learning outcomes', async ({ page }) => {
			const outcomes = [
				'Equip themselves with the necessary behavioural attributes',
				'Establish a solid foundation of trust',
				'Develop a personal brand known as a consistent and trusted strategic advisor',
				'Build their business acumen'
			];

			for (const outcome of outcomes) {
				await expect(page.getByText(new RegExp(outcome, 'i'))).toBeVisible();
			}
		});
	});

	test.describe('Core Modules Section', () => {
		test('displays the section heading', async ({ page }) => {
			const heading = page.getByRole('heading', { name: /CORE PROGRAM MODULES/i });
			await expect(heading).toBeVisible();
		});

		test('shows all six module titles', async ({ page }) => {
			const modules = [
				'KNOW YOUR BUSINESS',
				'KNOW YOUR STAKEHOLDERS',
				'KNOW YOUR MACRO WORLD',
				'IT BUSINESS PARTNERING TOOLKIT',
				'LEARN DATA STORYTELLING',
				'KNOW THE VALUE YOU DELIVER'
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
	});

	test.describe('Book Section', () => {
		test('displays EVOLVE branding', async ({ page }) => {
			const evolve = page.getByText('EVOLVE', { exact: true }).first();
			await expect(evolve).toBeVisible();
		});

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

		test('has buy now button', async ({ page }) => {
			const buyButton = page.getByRole('link', { name: /BUY NOW/i });
			await expect(buyButton).toBeVisible();
			await expect(buyButton).toHaveAttribute('href', '/evolve-book');
		});
	});

	test.describe('Testimonials Section', () => {
		test('displays testimonial titles', async ({ page }) => {
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

		test('shows author names and roles', async ({ page }) => {
			await expect(page.getByText('Claire')).toBeVisible();
			await expect(page.getByText('Senior Manager')).toBeVisible();
			await expect(page.getByText('Andrew')).toBeVisible();
			await expect(page.getByText('General Counsel')).toBeVisible();
		});
	});

	test.describe('Register Interest Form', () => {
		test('displays the form section heading', async ({ page }) => {
			const heading = page.getByRole('heading', { name: /REGISTER YOUR INTEREST/i });
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
		test('clicking CTA scrolls to form', async ({ page }) => {
			const ctaButton = page
				.getByRole('link', { name: /BOOK YOUR FREE 60-MINUTE STRATEGY SESSION/i })
				.first();
			await ctaButton.click();

			const form = page.locator('#make_impacts');
			await expect(form).toBeInViewport();
		});
	});

	test.describe('SEO', () => {
		test('has correct meta title', async ({ page }) => {
			await expect(page).toHaveTitle(/IT Business Partnering Program.*Impactology/i);
		});

		test('has meta description', async ({ page }) => {
			const metaDescription = page.locator('meta[name="description"]');
			await expect(metaDescription).toHaveAttribute('content', /IT Business Partnering/i);
		});

		test('has Open Graph tags', async ({ page }) => {
			const ogTitle = page.locator('meta[property="og:title"]');
			await expect(ogTitle).toHaveAttribute('content', /IT Business Partnering Program/i);

			const ogType = page.locator('meta[property="og:type"]');
			await expect(ogType).toHaveAttribute('content', 'website');
		});

		test('has canonical URL', async ({ page }) => {
			const canonical = page.locator('link[rel="canonical"]');
			await expect(canonical).toHaveAttribute(
				'href',
				'https://impactology.com.au/it-business-partnering'
			);
		});
	});
});
