import { test, expect } from '@playwright/test';

test.describe('Leadership Development for BPOs Page', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/leadership-development-for-bpos');
	});

	test('loads the page successfully', async ({ page }) => {
		await expect(page).toHaveURL('/leadership-development-for-bpos');
		await expect(page).toHaveTitle(/Leadership Development for BPOs/i);
	});

	test.describe('Hero Section', () => {
		test('displays the program branding', async ({ page }) => {
			const logo = page.locator('img[alt="Leadership Development Program"]').first();
			await expect(logo).toBeVisible();

			const brandName = page.getByText('LEADERSHIP PROGRAM', { exact: true }).first();
			await expect(brandName).toBeVisible();
		});

		test('shows the main headline', async ({ page }) => {
			const headline = page.getByRole('heading', {
				name: /LEADERSHIP DEVELOPMENT FOR BUSINESS PARTNER OFFICERS/i
			});
			await expect(headline).toBeVisible();
		});

		test('displays the hero tagline', async ({ page }) => {
			const tagline = page.getByText(/Strategic leaders.*Change drivers.*Trusted advisors/i);
			await expect(tagline).toBeVisible();
		});

		test('has book strategy session call-to-action button', async ({ page }) => {
			const ctaButton = page
				.getByRole('link', { name: /BOOK YOUR FREE 60-MINUTE STRATEGY SESSION/i })
				.first();
			await expect(ctaButton).toBeVisible();
			await expect(ctaButton).toHaveAttribute('href', '#register-interest');
		});
	});

	test.describe('Program Introduction Section', () => {
		test('displays program benefits', async ({ page }) => {
			const benefitText = page.getByText(
				/Practical leadership frameworks you can apply immediately/i
			);
			await expect(benefitText).toBeVisible();
		});

		test('shows no theory without application promise', async ({ page }) => {
			const promiseText = page.getByText(/No theory without application/i);
			await expect(promiseText).toBeVisible();
		});
	});

	test.describe('What Makes This Program Unique Section', () => {
		test('displays the section heading', async ({ page }) => {
			const heading = page.getByRole('heading', {
				name: /WHAT MAKES THIS LEADERSHIP PROGRAM UNIQUE/i
			});
			await expect(heading).toBeVisible();
		});

		test('shows the three core principles', async ({ page }) => {
			await expect(page.getByText('Lead with purpose', { exact: true })).toBeVisible();
			await expect(page.getByText('Influence through trust', { exact: true })).toBeVisible();
			await expect(page.getByText('Drive strategic outcomes', { exact: true })).toBeVisible();
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

	test.describe('Leadership Imperative Section', () => {
		test('displays the section heading', async ({ page }) => {
			const heading = page.getByRole('heading', {
				name: /THE LEADERSHIP IMPERATIVE FOR BUSINESS PARTNERS/i
			});
			await expect(heading).toBeVisible();
		});

		test('mentions strategic leaders', async ({ page }) => {
			const text = page.getByText('strategic leaders', { exact: false }).first();
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
				'Develop strategic leadership capabilities',
				'Build trust and credibility as a leader',
				'Master the art of influencing and inspiring teams',
				'Strengthen your executive presence'
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
				'FOUNDATIONS OF LEADERSHIP',
				'STRATEGIC THINKING & VISION',
				'LEADING THROUGH CHANGE',
				'BUILDING HIGH-PERFORMANCE TEAMS',
				'INFLUENCE WITHOUT AUTHORITY',
				'EXECUTIVE PRESENCE & COMMUNICATION'
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
				'Transformed how I approach leadership',
				'Exactly what I needed',
				'A game-changer',
				'Leadership that works',
				'Perfect blend of theory and practice'
			];

			for (const testimonial of testimonials) {
				await expect(page.getByRole('heading', { name: testimonial })).toBeVisible();
			}
		});

		test('shows author names and roles', async ({ page }) => {
			await expect(page.getByText('Sarah')).toBeVisible();
			await expect(page.getByText('Senior Finance Business Partner')).toBeVisible();
			await expect(page.getByText('Michael')).toBeVisible();
			await expect(page.getByText('IT Business Partner Lead')).toBeVisible();
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

			const form = page.locator('#register-interest');
			await expect(form).toBeInViewport();
		});
	});

	test.describe('SEO', () => {
		test('has correct meta title', async ({ page }) => {
			await expect(page).toHaveTitle(/Leadership Development for BPOs.*Impactology/i);
		});

		test('has meta description', async ({ page }) => {
			const metaDescription = page.locator('meta[name="description"]');
			await expect(metaDescription).toHaveAttribute(
				'content',
				/Leadership Development.*Business Partner Officers/i
			);
		});

		test('has Open Graph tags', async ({ page }) => {
			const ogTitle = page.locator('meta[property="og:title"]');
			await expect(ogTitle).toHaveAttribute('content', /Leadership Development for BPOs/i);

			const ogType = page.locator('meta[property="og:type"]');
			await expect(ogType).toHaveAttribute('content', 'website');
		});

		test('has canonical URL', async ({ page }) => {
			const canonical = page.locator('link[rel="canonical"]');
			await expect(canonical).toHaveAttribute(
				'href',
				'https://impactology.com.au/leadership-development-for-bpos'
			);
		});
	});
});
