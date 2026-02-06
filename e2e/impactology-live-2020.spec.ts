import { test, expect } from '@playwright/test';

test.describe('Impactology Live 2020 Page', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/impactology-live-2020');
	});

	test('loads the page successfully', async ({ page }) => {
		await expect(page).toHaveURL('/impactology-live-2020');
		await expect(page).toHaveTitle(/Impactology Live 2020/i);
	});

	test.describe('Hero Section', () => {
		test('displays the main headline', async ({ page }) => {
			const headline = page.getByRole('heading', {
				name: /OVER 3 DAYS.*30\+ SPEAKERS/i
			});
			await expect(headline).toBeVisible();
		});

		test('shows the event dates', async ({ page }) => {
			const dates = page.getByText(/NOVEMBER 19-21/i);
			await expect(dates).toBeVisible();
		});

		test('displays the tagline', async ({ page }) => {
			const tagline = page.getByText(/ONE GLOBAL COMMUNITY MAKING IMPACT/i).first();
			await expect(tagline).toBeVisible();
		});

		test('shows watch prompt', async ({ page }) => {
			const prompt = page.getByText(/Watch one\. Watch all\. Up to you/i);
			await expect(prompt).toBeVisible();
		});
	});

	test.describe('Intro Section', () => {
		test('displays the impact quote', async ({ page }) => {
			const quote = page.getByRole('heading', {
				name: /When ideas and inspiration collide, it creates IMPACT/i
			});
			await expect(quote).toBeVisible();
		});
	});

	test.describe('Why Now Section', () => {
		test('displays Why Now heading', async ({ page }) => {
			const heading = page.getByRole('heading', { name: /WHY NOW/i });
			await expect(heading).toBeVisible();
		});

		test('explains Impactology Live purpose', async ({ page }) => {
			await expect(
				page.getByText(
					/Impactology Live is an event designed to connect people that are having an impact/i
				)
			).toBeVisible();
		});

		test('mentions the challenging period context', async ({ page }) => {
			await expect(page.getByText(/It has been a challenging period/i)).toBeVisible();
		});

		test('describes the 3-day event', async ({ page }) => {
			await expect(page.getByText(/3-day event connected 33 global speakers/i)).toBeVisible();
		});
	});

	test.describe('Featured Speakers Section', () => {
		test('displays Featured Speakers heading', async ({ page }) => {
			const heading = page.getByRole('heading', { name: /FEATURED SPEAKERS/i });
			await expect(heading).toBeVisible();
		});

		test('shows Dimitra Manis', async ({ page }) => {
			await expect(page.getByText('Dimitra Manis').first()).toBeVisible();
			await expect(page.getByText(/Chief People Officer, S&P Global/i).first()).toBeVisible();
		});

		test('shows Mark Reading', async ({ page }) => {
			await expect(page.getByText('Mark Reading').first()).toBeVisible();
			await expect(page.getByText(/Head of Foundation.*Atlassian/i).first()).toBeVisible();
		});

		test('shows Peter Shankman', async ({ page }) => {
			await expect(page.getByText('Peter Shankman').first()).toBeVisible();
		});
	});

	test.describe('Event Banner Section', () => {
		test('displays Impactology Live 2020 banner heading', async ({ page }) => {
			const headings = page.getByRole('heading', { name: /IMPACTOLOGY LIVE 2020/i });
			await expect(headings.first()).toBeVisible();
		});
	});

	test.describe('All Speakers Section', () => {
		test('displays Impactology Live 2020 Talks heading', async ({ page }) => {
			const heading = page.getByRole('heading', { name: /IMPACTOLOGY LIVE 2020 TALKS/i });
			await expect(heading).toBeVisible();
		});

		test('shows multiple speaker cards', async ({ page }) => {
			// Check for some of the speakers
			await expect(page.getByText('Stella Kasadigli')).toBeVisible();
			await expect(page.getByText('Rana Hussain')).toBeVisible();
			await expect(page.getByText('Justin Robinson')).toBeVisible();
			await expect(page.getByText('Radek Sali')).toBeVisible();
		});

		test('displays speaker titles', async ({ page }) => {
			await expect(page.getByText(/Writer, Director, Filmmaker/i)).toBeVisible();
			await expect(page.getByText(/Mental Health Advocate & Actor/i)).toBeVisible();
		});
	});

	test.describe('Atlassian Foundation Section', () => {
		test('mentions Education focus area', async ({ page }) => {
			await expect(
				page.getByText(/Education.*helping to educate millions of disadvantaged youth/i)
			).toBeVisible();
		});

		test('mentions Pledge 1% focus area', async ({ page }) => {
			await expect(
				page.getByText(/Pledge 1%.*helping to bring out the best of business/i)
			).toBeVisible();
		});
	});

	test.describe('Stay In The Loop Section', () => {
		test('displays Stay In The Loop heading', async ({ page }) => {
			const heading = page.getByRole('main').getByRole('heading', { name: /STAY IN THE LOOP/i });
			await expect(heading).toBeVisible();
		});

		test('shows newsletter prompt', async ({ page }) => {
			await expect(
				page.getByRole('main').getByText(/Receive news and information on upcoming events/i)
			).toBeVisible();
		});

		test('has Contact Us button', async ({ page }) => {
			const contactButton = page.getByRole('link', { name: /CONTACT US/i });
			await expect(contactButton).toBeVisible();
			await expect(contactButton).toHaveAttribute('href', '/contact');
		});
	});

	test.describe('SEO', () => {
		test('has correct meta title', async ({ page }) => {
			await expect(page).toHaveTitle(/Impactology Live 2020.*Impactology/i);
		});

		test('has meta description', async ({ page }) => {
			const metaDescription = page.locator('meta[name="description"]');
			await expect(metaDescription).toHaveAttribute(
				'content',
				/3-day event connected 33 global speakers/i
			);
		});

		test('has Open Graph tags', async ({ page }) => {
			const ogTitle = page.locator('meta[property="og:title"]');
			await expect(ogTitle).toHaveAttribute('content', /Impactology Live 2020/i);

			const ogType = page.locator('meta[property="og:type"]');
			await expect(ogType).toHaveAttribute('content', 'website');
		});

		test('has canonical URL', async ({ page }) => {
			const canonical = page.locator('link[rel="canonical"]');
			await expect(canonical).toHaveAttribute('href', /impactology-live-2020/i);
		});
	});

	test.describe('Page Structure', () => {
		test('has proper heading hierarchy', async ({ page }) => {
			// Check that there are h2 headings
			const h2Headings = page.locator('h2');
			const h2Count = await h2Headings.count();
			expect(h2Count).toBeGreaterThan(5);
		});

		test('all sections are accessible', async ({ page }) => {
			// Verify all major sections render
			await expect(page.locator('.section-yellow').first()).toBeVisible();
			await expect(page.locator('.section-dark').first()).toBeVisible();
			await expect(page.locator('.section-gray').first()).toBeVisible();
		});
	});
});
