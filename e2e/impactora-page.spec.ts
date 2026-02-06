import { test, expect } from '@playwright/test';

test.describe('IMPACTORA Product Page', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/impactora');
	});

	test('loads the Impactora page successfully', async ({ page }) => {
		await expect(page).toHaveURL('/impactora');
		await expect(page).toHaveTitle(/IMPACTORA/i);
	});

	test.describe('Hero Section', () => {
		test('displays the IMPACTORA branding', async ({ page }) => {
			const logo = page.locator('img[alt="IMPACTORA"]').first();
			await expect(logo).toBeVisible();

			const brandName = page.getByText('IMPACTORA', { exact: true }).first();
			await expect(brandName).toBeVisible();
		});

		test('shows the main headline', async ({ page }) => {
			const headline = page.getByRole('heading', {
				name: /GUIDANCE IN THE MOMENTS THAT MATTER/i
			});
			await expect(headline).toBeVisible();
		});

		test('displays the hero description', async ({ page }) => {
			const description = page.getByText(/AI-powered workplace companion/i);
			await expect(description).toBeVisible();
		});

		test('has call-to-action buttons', async ({ page }) => {
			const demoButton = page.getByRole('link', { name: /REQUEST A DEMO/i });
			await expect(demoButton).toBeVisible();
			await expect(demoButton).toHaveAttribute('href', '#request-demo');

			const howItWorksButton = page.getByRole('link', { name: /SEE HOW IT WORKS/i });
			await expect(howItWorksButton).toBeVisible();
			await expect(howItWorksButton).toHaveAttribute('href', '#how-it-works');
		});
	});

	test.describe('Stats Section', () => {
		test('displays key statistics', async ({ page }) => {
			await expect(page.getByText('67%')).toBeVisible();
			await expect(page.getByText(/Faster resolution/i)).toBeVisible();

			await expect(page.getByText('89%')).toBeVisible();
			await expect(page.getByText(/Manager confidence/i)).toBeVisible();

			await expect(page.getByText('3.2x')).toBeVisible();
			await expect(page.getByText(/Return on investment/i)).toBeVisible();
		});
	});

	test.describe('Challenge Section', () => {
		test('displays the challenge heading', async ({ page }) => {
			const heading = page.getByRole('heading', { name: /THE CHALLENGE/i });
			await expect(heading).toBeVisible();
		});

		test('shows the three challenge cards', async ({ page }) => {
			await expect(page.getByText('DELAYED DECISIONS')).toBeVisible();
			await expect(page.getByText('INCONSISTENT GUIDANCE')).toBeVisible();
			await expect(page.getByText('ISOLATED MANAGERS')).toBeVisible();
		});
	});

	test.describe('How It Works Section', () => {
		test('displays the how it works heading', async ({ page }) => {
			const heading = page.getByRole('heading', { name: /HOW IMPACTORA WORKS/i });
			await expect(heading).toBeVisible();
		});

		test('shows the three steps', async ({ page }) => {
			await expect(page.getByText('DESCRIBE YOUR SITUATION')).toBeVisible();
			await expect(page.getByText('RECEIVE TAILORED GUIDANCE')).toBeVisible();
			await expect(page.getByText('ACT WITH CONFIDENCE')).toBeVisible();
		});

		test('has numbered step indicators', async ({ page }) => {
			const section = page.locator('#how-it-works');
			await expect(section.getByText('1', { exact: true })).toBeVisible();
			await expect(section.getByText('2', { exact: true })).toBeVisible();
			await expect(section.getByText('3', { exact: true })).toBeVisible();
		});
	});

	test.describe('Features Section', () => {
		test('displays the features heading', async ({ page }) => {
			const heading = page.getByRole('heading', { name: /POWERFUL CAPABILITIES/i });
			await expect(heading).toBeVisible();
		});

		test('shows all six feature cards', async ({ page }) => {
			const features = [
				'INSTANT GUIDANCE',
				'DATA-DRIVEN INSIGHTS',
				'24/7 AVAILABILITY',
				'PERSONALISED EXPERIENCE',
				'CONFIDENTIAL & SECURE',
				'MEASURABLE IMPACT'
			];

			for (const feature of features) {
				await expect(page.getByText(feature, { exact: true })).toBeVisible();
			}
		});
	});

	test.describe('Use Cases Section', () => {
		test('displays role-based use cases', async ({ page }) => {
			await expect(page.getByText('HR BUSINESS PARTNERS')).toBeVisible();
			await expect(page.getByText('PEOPLE LEADERS')).toBeVisible();
			await expect(page.getByText('FRONTLINE MANAGERS')).toBeVisible();
		});
	});

	test.describe('Testimonial Section', () => {
		test('displays a customer testimonial', async ({ page }) => {
			const quote = page.getByText(/transformed how our managers handle difficult situations/i);
			await expect(quote).toBeVisible();

			const attribution = page.getByText(/Chief People Officer/i);
			await expect(attribution).toBeVisible();
		});
	});

	test.describe('Pricing Section', () => {
		test('displays pricing tiers', async ({ page }) => {
			await expect(page.getByRole('heading', { name: 'STARTER' })).toBeVisible();
			await expect(page.getByRole('heading', { name: 'PROFESSIONAL' })).toBeVisible();
			await expect(page.getByRole('heading', { name: 'ENTERPRISE' })).toBeVisible();
		});

		test('highlights the most popular plan', async ({ page }) => {
			await expect(page.getByText('Most Popular')).toBeVisible();
		});
	});

	test.describe('Demo Request Form', () => {
		test('displays the demo request form', async ({ page }) => {
			const heading = page.getByRole('heading', { name: /REQUEST A DEMO/i });
			await expect(heading).toBeVisible();
		});

		test('has all required form fields', async ({ page }) => {
			const form = page.locator('#request-demo');

			await expect(form.getByLabel(/First Name/i)).toBeVisible();
			await expect(form.getByLabel(/Last Name/i)).toBeVisible();
			await expect(form.getByLabel(/Work Email/i)).toBeVisible();
			await expect(form.getByLabel(/Company/i)).toBeVisible();
			await expect(form.getByLabel(/Team Size/i)).toBeVisible();
		});

		test('has a submit button', async ({ page }) => {
			const submitButton = page.getByRole('button', { name: /Request Your Demo/i });
			await expect(submitButton).toBeVisible();
			await expect(submitButton).toBeEnabled();
		});

		test('team size dropdown has correct options', async ({ page }) => {
			const select = page.locator('#request-demo select');
			await select.click();

			await expect(page.getByRole('option', { name: '1-25 employees' })).toBeVisible();
			await expect(page.getByRole('option', { name: '26-100 employees' })).toBeVisible();
			await expect(page.getByRole('option', { name: '101-500 employees' })).toBeVisible();
			await expect(page.getByRole('option', { name: '501-1,000 employees' })).toBeVisible();
			await expect(page.getByRole('option', { name: '1,000+ employees' })).toBeVisible();
		});
	});

	test.describe('Final CTA Section', () => {
		test('displays the final call to action', async ({ page }) => {
			const heading = page.getByRole('heading', {
				name: /READY TO TRANSFORM YOUR WORKPLACE/i
			});
			await expect(heading).toBeVisible();
		});

		test('has action buttons', async ({ page }) => {
			const getStartedButton = page.getByRole('link', { name: /GET STARTED TODAY/i });
			await expect(getStartedButton).toBeVisible();

			const speakButton = page.getByRole('link', { name: /SPEAK TO OUR TEAM/i });
			await expect(speakButton).toBeVisible();
			await expect(speakButton).toHaveAttribute('href', '/contact');
		});
	});

	test.describe('Navigation', () => {
		test('clicking "Request a Demo" scrolls to form', async ({ page }) => {
			const demoButton = page.getByRole('link', { name: /REQUEST A DEMO/i }).first();
			await demoButton.click();

			const form = page.locator('#request-demo');
			await expect(form).toBeInViewport();
		});

		test('clicking "See How It Works" scrolls to section', async ({ page }) => {
			const howItWorksButton = page.getByRole('link', { name: /SEE HOW IT WORKS/i });
			await howItWorksButton.click();

			const section = page.locator('#how-it-works');
			await expect(section).toBeInViewport();
		});
	});

	test.describe('SEO', () => {
		test('has correct meta title', async ({ page }) => {
			await expect(page).toHaveTitle(/IMPACTORA.*AI-Powered Workplace Guidance/i);
		});

		test('has meta description', async ({ page }) => {
			const metaDescription = page.locator('meta[name="description"]');
			await expect(metaDescription).toHaveAttribute(
				'content',
				/instant.*contextual advice.*managers.*HR/i
			);
		});

		test('has Open Graph tags', async ({ page }) => {
			const ogTitle = page.locator('meta[property="og:title"]');
			await expect(ogTitle).toHaveAttribute('content', /IMPACTORA/i);

			const ogType = page.locator('meta[property="og:type"]');
			await expect(ogType).toHaveAttribute('content', 'website');
		});
	});
});
