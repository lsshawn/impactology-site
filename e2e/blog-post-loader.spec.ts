import { test, expect } from '@playwright/test';

test.describe('Blog Post Loader (+page.ts)', () => {
	test('loads post data via the page loader for a valid slug', async ({ page }) => {
		await page.goto('/blog/build-effective-business-partner-relationships');
		await expect(page).toHaveURL('/blog/build-effective-business-partner-relationships');

		const heading = page.locator('h1');
		await expect(heading).toContainText(
			'Building Effective Business Partner Relationships: A Practical Guide'
		);
	});

	test('returns post data with all required fields', async ({ page }) => {
		await page.goto('/blog/rise-of-the-it-business-partners');

		// Title rendered from loader data
		await expect(page.locator('h1')).toContainText('The Rise of the IT Business Partner');

		// Author from loader data
		await expect(page.getByText('George Liberopoulos')).toBeVisible();

		// Date from loader data
		const dateElement = page.locator('article time');
		await expect(dateElement).toHaveAttribute('datetime', '2025-10-31');

		// Featured image from loader data
		const heroImage = page.locator('section img').first();
		await expect(heroImage).toHaveAttribute('src', /The-Rise-of-the-IT-Business-Partner/);

		// Content from loader data
		const prose = page.locator('.prose');
		await expect(prose).toContainText('IT Business Partner');
	});

	test('handles non-existent slug gracefully', async ({ page }) => {
		await page.goto('/blog/non-existent-post-slug');

		const notFoundTitle = page.getByRole('heading', { name: /Post Not Found/i });
		await expect(notFoundTitle).toBeVisible();

		const browseLink = page.getByRole('link', { name: /Browse All Posts/i });
		await expect(browseLink).toHaveAttribute('href', '/blog');
	});

	test('loads each blog post by its unique slug', async ({ page }) => {
		const slugs = [
			{ slug: 'drive-results-with-business-partnering', titleFragment: '5 Reminders' },
			{ slug: 'agile-client-centric-bpo-teams', titleFragment: 'Adapting to Change' },
			{
				slug: 'kpis-for-high-performing-business-partnering-teams',
				titleFragment: 'Key Performance Indicators'
			},
			{
				slug: 'top-5-growth-mindset-tips-every-finance-team-needs-for-business-partnering-success',
				titleFragment: 'Growth Mindset Tips'
			},
			{
				slug: 'local-government-strategies-trust-collaboration',
				titleFragment: 'Local Government Leaders'
			},
			{
				slug: 'high-performing-cross-functional-bpo-teams',
				titleFragment: 'Driving Operational Excellence'
			},
			{
				slug: 'transform-bpo-teams-leadership-business-partnering',
				titleFragment: 'From Burnout to Brilliance'
			}
		];

		for (const { slug, titleFragment } of slugs) {
			await page.goto(`/blog/${slug}`);
			await expect(page.locator('h1')).toContainText(titleFragment);
		}
	});

	test('SEO meta tags are populated from loader data', async ({ page }) => {
		await page.goto('/blog/build-effective-business-partner-relationships');

		const metaDescription = page.locator('meta[name="description"]');
		await expect(metaDescription).toHaveAttribute(
			'content',
			/Across finance, HR, IT, procurement, and operations/i
		);

		const ogTitle = page.locator('meta[property="og:title"]');
		await expect(ogTitle).toHaveAttribute(
			'content',
			/Building Effective Business Partner Relationships/i
		);

		const canonical = page.locator('link[rel="canonical"]');
		await expect(canonical).toHaveAttribute(
			'href',
			/build-effective-business-partner-relationships/
		);
	});
});
