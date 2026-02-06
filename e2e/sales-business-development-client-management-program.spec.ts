import { test, expect } from '@playwright/test';

test.describe('Sales, BD & Client Management Business Partnering Program Page', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/sales-business-development-client-management-program');
	});

	test('loads the page successfully', async ({ page }) => {
		await expect(page).toHaveURL('/sales-business-development-client-management-program');
		await expect(page).toHaveTitle(/Sales.*Client Management Business Partnering Program/i);
	});

	test.describe('Hero Section', () => {
		test('displays the program branding', async ({ page }) => {
			const logo = page.locator('img[alt="Sales Business Partnering Program"]').first();
			await expect(logo).toBeVisible();

			const brandName = page.getByText('SALES PROGRAM', { exact: true }).first();
			await expect(brandName).toBeVisible();
		});

		test('shows the main headline', async ({ page }) => {
			const headline = page.getByRole('heading', {
				name: /SALES.*BUSINESS DEVELOPMENT.*CLIENT MANAGEMENT.*BUSINESS PARTNERING IMPACT PROGRAM/i
			});
			await expect(headline).toBeVisible();
		});

		test('displays the hero tagline', async ({ page }) => {
			const tagline = page.getByText(/Revenue drivers.*Client advocates.*Strategic partners/i);
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

	test.describe('Free Strategy Session Section', () => {
		test('displays strategy session benefits', async ({ page }) => {
			const benefitText = page.getByText(/Practical next steps you can act on immediately/i);
			await expect(benefitText).toBeVisible();
		});

		test('shows no hard sell promise', async ({ page }) => {
			const promiseText = page.getByText(/No hard sell - pinky promise/i);
			await expect(promiseText).toBeVisible();
		});

		test('shows transform section heading', async ({ page }) => {
			const heading = page.getByRole('heading', {
				name: /Transform Your Sales, BD & Client Management Teams into Strategic Business Partners/i
			});
			await expect(heading).toBeVisible();
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

	test.describe('Why Choose Section', () => {
		test('displays the section heading', async ({ page }) => {
			const heading = page.getByRole('heading', {
				name: /WHY CHOOSE THE SALES.*BD.*CLIENT MANAGEMENT BUSINESS PARTNERING IMPACT PROGRAM/i
			});
			await expect(heading).toBeVisible();
		});

		test('shows challenges with solutions', async ({ page }) => {
			await expect(
				page.getByRole('heading', { name: /Siloed Operations and Misaligned Priorities/i })
			).toBeVisible();
			await expect(
				page.getByRole('heading', { name: /Transactional Client Relationships/i })
			).toBeVisible();
			await expect(
				page.getByRole('heading', { name: /Leadership Gaps in Driving Performance/i })
			).toBeVisible();
			await expect(
				page.getByRole('heading', { name: /Lack of Commercial Acumen Across Teams/i })
			).toBeVisible();
		});

		test('shows challenge and solution labels', async ({ page }) => {
			const challenges = page.getByText('The Challenge:', { exact: true });
			expect(await challenges.count()).toBeGreaterThanOrEqual(4);

			const solutions = page.getByText('Our Solution:', { exact: true });
			expect(await solutions.count()).toBeGreaterThanOrEqual(4);
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

	test.describe('Program Highlights Section', () => {
		test('displays the section heading', async ({ page }) => {
			const heading = page.getByRole('heading', { name: /PROGRAM HIGHLIGHTS/i });
			await expect(heading).toBeVisible();
		});

		test('shows all highlight titles', async ({ page }) => {
			const highlights = [
				'Build Strategic Business Partnering Skills',
				'Strengthen Leadership Across Teams',
				'Foster Cross-Functional Collaboration',
				'Enhance Commercial Acumen'
			];

			for (const highlight of highlights) {
				await expect(page.getByRole('heading', { name: highlight })).toBeVisible();
			}
		});
	});

	test.describe('Who Should Attend Section', () => {
		test('displays the section heading', async ({ page }) => {
			const heading = page.getByRole('heading', { name: /WHO SHOULD ATTEND/i });
			await expect(heading).toBeVisible();
		});

		test('shows attendee roles', async ({ page }) => {
			const roles = [
				'Sales Directors',
				'Sales Team Leaders',
				'Sales Managers',
				'BDMs',
				'Sales Representatives',
				'Client Servicing Managers',
				'Business Development (BD) Managers'
			];

			for (const role of roles) {
				await expect(page.getByText(role, { exact: true })).toBeVisible();
			}
		});
	});

	test.describe('Program Benefits Section', () => {
		test('displays the section heading', async ({ page }) => {
			const heading = page.getByRole('heading', { name: /PROGRAM BENEFITS/i });
			await expect(heading).toBeVisible();
		});

		test('shows team benefits heading', async ({ page }) => {
			const heading = page.getByRole('heading', { name: /For Your Team/i });
			await expect(heading).toBeVisible();
		});

		test('shows organisation benefits heading', async ({ page }) => {
			const heading = page.getByRole('heading', { name: /For Your Organisation/i });
			await expect(heading).toBeVisible();
		});

		test('shows team benefits', async ({ page }) => {
			await expect(page.getByText('Stronger Client Relationships:')).toBeVisible();
			await expect(page.getByText('Enhanced Collaboration:')).toBeVisible();
			await expect(page.getByText('Increased Motivation:')).toBeVisible();
		});

		test('shows organisation benefits', async ({ page }) => {
			await expect(page.getByText('Improved Sales Performance:')).toBeVisible();
			await expect(page.getByText('Greater Efficiency:')).toBeVisible();
			await expect(page.getByText('Increased Client Retention:')).toBeVisible();
		});
	});

	test.describe('Why Impactology Section', () => {
		test('displays the section heading', async ({ page }) => {
			const heading = page.getByRole('heading', { name: /WHY IMPACTOLOGY/i });
			await expect(heading).toBeVisible();
		});

		test('shows what makes us different heading', async ({ page }) => {
			const heading = page.getByRole('heading', { name: /What Makes Us Different/i });
			await expect(heading).toBeVisible();
		});

		test('shows differentiators', async ({ page }) => {
			await expect(page.getByText('Customised Training:')).toBeVisible();
			await expect(page.getByText('Experienced Facilitators:')).toBeVisible();
			await expect(page.getByText('Actionable Frameworks:')).toBeVisible();
			await expect(page.getByText('Proven Results:')).toBeVisible();
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

	test.describe('Take the First Step Section', () => {
		test('displays the section heading', async ({ page }) => {
			const heading = page.getByRole('heading', {
				name: /TAKE THE FIRST STEP TOWARD SUSTAINABLE GROWTH/i
			});
			await expect(heading).toBeVisible();
		});

		test('shows empowerment message', async ({ page }) => {
			const text = page.getByText(/Empower your sales, BD, and client management teams/i);
			await expect(text).toBeVisible();
		});
	});

	test.describe('Register Interest Form', () => {
		test('displays the form section heading', async ({ page }) => {
			const heading = page.getByRole('heading', { name: /REGISTER YOUR INTEREST TODAY/i });
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
			const description = page.getByText(/Ready to amplify your sales leadership/i);
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
			await expect(page).toHaveTitle(
				/Sales.*Client Management Business Partnering Program.*Impactology/i
			);
		});

		test('has meta description', async ({ page }) => {
			const metaDescription = page.locator('meta[name="description"]');
			await expect(metaDescription).toHaveAttribute(
				'content',
				/Empower sales, BD, and client management teams/i
			);
		});

		test('has Open Graph tags', async ({ page }) => {
			const ogTitle = page.locator('meta[property="og:title"]');
			await expect(ogTitle).toHaveAttribute(
				'content',
				/Sales.*Client Management Business Partnering Program/i
			);

			const ogType = page.locator('meta[property="og:type"]');
			await expect(ogType).toHaveAttribute('content', 'website');
		});

		test('has canonical URL', async ({ page }) => {
			const canonical = page.locator('link[rel="canonical"]');
			await expect(canonical).toHaveAttribute(
				'href',
				'https://impactology.com.au/sales-business-development-client-management-program'
			);
		});
	});
});
