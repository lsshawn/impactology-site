import { test, expect } from '@playwright/test';

test.describe('Amplify Your Impact Program Page', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/amplify-your-impact-program');
	});

	test('loads the page successfully', async ({ page }) => {
		await expect(page).toHaveURL('/amplify-your-impact-program');
		await expect(page).toHaveTitle(/Amplify Your Impact Program/i);
	});

	test.describe('Hero Section', () => {
		test('displays the program branding', async ({ page }) => {
			const logo = page.locator('img[alt="Amplify Your Impact Program"]').first();
			await expect(logo).toBeVisible();

			const brandName = page.getByText('AMPLIFY PROGRAM', { exact: true }).first();
			await expect(brandName).toBeVisible();
		});

		test('shows the main headline', async ({ page }) => {
			const headline = page.getByRole('heading', {
				name: /THE AMPLIFY BUSINESS.*PARTNERING PROGRAM EXPERIENCE/i
			});
			await expect(headline).toBeVisible();
		});

		test('displays the hero description about developing high performing teams', async ({
			page
		}) => {
			const description = page.getByText(/Develop a high performing team/i);
			await expect(description).toBeVisible();
		});

		test('has register interest call-to-action button', async ({ page }) => {
			const ctaButton = page.getByRole('link', { name: /REGISTER YOUR INTEREST/i }).first();
			await expect(ctaButton).toBeVisible();
			await expect(ctaButton).toHaveAttribute('href', '#register-interest');
		});
	});

	test.describe("What You'll Learn Section", () => {
		test('displays the section heading', async ({ page }) => {
			const heading = page.getByRole('heading', { name: /WHAT YOU'LL LEARN/i });
			await expect(heading).toBeVisible();
		});

		test('mentions follow-up program to IMPACT Program', async ({ page }) => {
			const description = page.getByText(/is a follow-up program/i);
			await expect(description).toBeVisible();
		});

		test('links to Business Partnering Impact Program', async ({ page }) => {
			const link = page.getByRole('link', { name: /Business Partnering IMPACT Program/i });
			await expect(link).toBeVisible();
			await expect(link).toHaveAttribute('href', '/business-partnering-impact-program');
		});
	});

	test.describe('Program Commitment Box', () => {
		test('displays the program commitment heading', async ({ page }) => {
			const heading = page.getByRole('heading', { name: /PROGRAM COMMITMENT/i });
			await expect(heading).toBeVisible();
		});

		test('shows flexible duration options', async ({ page }) => {
			const duration = page.getByText(/6, 9, or 12 Months/i);
			await expect(duration).toBeVisible();
		});

		test('mentions team-based learning', async ({ page }) => {
			const teamLearning = page.getByText(/Team-Based Learning/i);
			await expect(teamLearning).toBeVisible();
		});

		test('mentions IMPACTORA platform access', async ({ page }) => {
			const impactora = page.getByText(/IMPACTORA Platform Access/i);
			await expect(impactora).toBeVisible();
		});
	});

	test.describe('Program Outcomes Section', () => {
		test('displays the section heading', async ({ page }) => {
			const heading = page.getByRole('heading', { name: /PROGRAM OUTCOMES/i });
			await expect(heading).toBeVisible();
		});

		test('shows learning outcomes', async ({ page }) => {
			const outcomes = [
				'Gain awareness of how to better collaborate as a team',
				'Develop strategic and collaborative thinking skills',
				'Cultivate core behavioral attributes',
				'Build confidence in applying practical business partnering techniques',
				'Strengthen the team dynamic',
				'Apply tools and frameworks'
			];

			for (const outcome of outcomes) {
				await expect(page.getByText(new RegExp(outcome, 'i'))).toBeVisible();
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

	test.describe('The AMPLIFY Experience Section', () => {
		test('displays the section heading', async ({ page }) => {
			const heading = page.getByRole('heading', { name: /THE AMPLIFY EXPERIENCE/i });
			await expect(heading).toBeVisible();
		});

		test('shows all five program features', async ({ page }) => {
			const features = [
				'FACE-TO-FACE SESSIONS',
				'CASE STUDIES',
				'MICRO-LEARNING ACTIVITIES',
				'VIRTUAL CHECK-INS',
				'SCORECARD APPROACH'
			];

			for (const feature of features) {
				await expect(page.getByRole('heading', { name: feature })).toBeVisible();
			}
		});

		test('has numbered feature indicators', async ({ page }) => {
			const indicators = ['01', '02', '03', '04', '05'];
			for (const indicator of indicators) {
				await expect(page.getByText(indicator, { exact: true }).first()).toBeVisible();
			}
		});

		test('displays feature descriptions', async ({ page }) => {
			await expect(page.getByText(/Interactive in-person workshops/i)).toBeVisible();
			await expect(page.getByText(/Real-world business partnering challenges/i)).toBeVisible();
			await expect(page.getByText(/proprietary platform IMPACTORA/i)).toBeVisible();
		});
	});

	test.describe('Building on IMPACT Program Section', () => {
		test('displays the section heading', async ({ page }) => {
			const heading = page.getByRole('heading', { name: /BUILDING ON THE IMPACT PROGRAM/i });
			await expect(heading).toBeVisible();
		});

		test('shows tagline about next level', async ({ page }) => {
			const tagline = page.getByText(/takes the foundations.*to the next level/i);
			await expect(tagline).toBeVisible();
		});

		test('has link to IMPACT program', async ({ page }) => {
			const link = page.getByRole('link', { name: /LEARN ABOUT THE IMPACT PROGRAM/i });
			await expect(link).toBeVisible();
			await expect(link).toHaveAttribute('href', '/business-partnering-impact-program');
		});

		test('shows program progression visual with IMPACT and AMPLIFY labels', async ({ page }) => {
			// Check for the visual progression showing IMPACT PROGRAM leading to AMPLIFY PROGRAM
			const impactLabel = page.getByText('IMPACT PROGRAM', { exact: true }).last();
			await expect(impactLabel).toBeVisible();

			const amplifyLabel = page.getByText('AMPLIFY PROGRAM', { exact: true }).last();
			await expect(amplifyLabel).toBeVisible();
		});
	});

	test.describe('Testimonials Section', () => {
		test('displays testimonial quotes', async ({ page }) => {
			const testimonials = [
				'Transformed our approach',
				'Learning that sticks',
				'Improved collaboration'
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
			await expect(form.getByLabel(/Tell us about your team/i)).toBeVisible();
		});

		test('has a submit button', async ({ page }) => {
			const submitButton = page.getByRole('button', { name: /Submit Your Interest/i });
			await expect(submitButton).toBeVisible();
			await expect(submitButton).toBeEnabled();
		});

		test('displays form description about AMPLIFY program', async ({ page }) => {
			const description = page.getByText(/Ready to amplify your team's impact/i);
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
			await expect(page).toHaveTitle(/Amplify Your Impact Program.*Impactology/i);
		});

		test('has meta description', async ({ page }) => {
			const metaDescription = page.locator('meta[name="description"]');
			await expect(metaDescription).toHaveAttribute('content', /Amplify transformative outcomes/i);
		});

		test('has Open Graph tags', async ({ page }) => {
			const ogTitle = page.locator('meta[property="og:title"]');
			await expect(ogTitle).toHaveAttribute('content', /Amplify Your Impact Program/i);

			const ogType = page.locator('meta[property="og:type"]');
			await expect(ogType).toHaveAttribute('content', 'website');
		});

		test('has canonical URL', async ({ page }) => {
			const canonical = page.locator('link[rel="canonical"]');
			await expect(canonical).toHaveAttribute(
				'href',
				'https://impactology.com.au/amplify-your-impact-program'
			);
		});
	});
});
