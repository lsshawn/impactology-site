import { test, expect } from '@playwright/test';

test.describe('Content Posts Directory Structure', () => {
	const expectedSlugs = [
		'build-effective-business-partner-relationships',
		'rise-of-the-it-business-partners',
		'drive-results-with-business-partnering',
		'agile-client-centric-bpo-teams',
		'kpis-for-high-performing-business-partnering-teams',
		'top-5-growth-mindset-tips-every-finance-team-needs-for-business-partnering-success',
		'local-government-strategies-trust-collaboration',
		'high-performing-cross-functional-bpo-teams',
		'transform-bpo-teams-leadership-business-partnering',
		'tips-to-overcome-local-government-employee-growth-challenges',
		'local-councils-employee-growth-community-engagement',
		'the-top-5-personal-growth-strategies-for-it-business-partners',
		'what-does-it-mean-to-be-a-transformational-it-business-partner',
		'breaking-limiting-beliefs-msp-leadership-growth',
		'four-strategies-to-transform-procurement-partnering',
		'employee-growth-for-managed-service-providers-msps-a-strategic-path-to-success',
		'embracing-imposter-syndrome-hr-leadership',
		'theme-1-foundation-defining-sustainable-growth-in-the-mssp-msp-world-blog-1-of-6',
		'balancing-ambition-and-well-being-five-finance-business-partner-strategies-for-personal-growth',
		'five-tips-to-enhancing-your-business-partnering-judgment-and-intuition-in-procurement',
		'top-5-ways-to-create-genuine-connections-for-personal-and-professional-growth',
		'top-4-tips-to-enhance-self-awareness-for-people-culture-business-partners',
		'7-tips-to-cultivating-creativity-in-procurement',
		'top-5-mindset-shifts-for-finance-business-partners'
	];

	test('blog listing loads all 24 posts from markdown content files', async ({ page }) => {
		await page.goto('/blog');
		const articles = page.locator('article');
		const count = await articles.count();
		expect(count).toBe(24);
	});

	test('blog listing shows posts sorted by date (newest first)', async ({ page }) => {
		await page.goto('/blog');
		const firstPostTitle = page.locator('article h3 a').first();
		await expect(firstPostTitle).toContainText(
			/Building Effective Business Partner Relationships/i
		);
	});

	test('blog listing links use slug-based URLs', async ({ page }) => {
		await page.goto('/blog');
		const firstLink = page.locator('article h3 a').first();
		await expect(firstLink).toHaveAttribute(
			'href',
			'/blog/build-effective-business-partner-relationships'
		);
	});

	for (const slug of expectedSlugs) {
		test(`post "${slug}" loads from markdown content`, async ({ page }) => {
			await page.goto(`/blog/${slug}`);
			// Post should render (not show 404)
			const heading = page.locator('h1');
			await expect(heading).toBeVisible();

			// Should have article content from markdown
			const prose = page.locator('.prose');
			await expect(prose).toBeVisible();

			// Should have author info parsed from frontmatter
			await expect(page.getByText('George Liberopoulos')).toBeVisible();

			// Should have a date from frontmatter
			const dateElement = page.locator('article time');
			await expect(dateElement).toHaveAttribute('datetime', /\d{4}-\d{2}-\d{2}/);
		});
	}

	test('post frontmatter title renders in page title', async ({ page }) => {
		await page.goto('/blog/build-effective-business-partner-relationships');
		await expect(page).toHaveTitle(
			/Building Effective Business Partner Relationships.*Impactology/i
		);
	});

	test('post frontmatter excerpt renders in meta description', async ({ page }) => {
		await page.goto('/blog/build-effective-business-partner-relationships');
		const metaDescription = page.locator('meta[name="description"]');
		await expect(metaDescription).toHaveAttribute(
			'content',
			/Across finance, HR, IT, procurement, and operations/i
		);
	});

	test('post frontmatter featured image renders in hero', async ({ page }) => {
		await page.goto('/blog/build-effective-business-partner-relationships');
		const heroImage = page.locator('section img').first();
		await expect(heroImage).toHaveAttribute(
			'src',
			/Building-Effective-Business-Partner-Relationships/
		);
	});

	test('post with escaped quotes in excerpt renders correctly', async ({ page }) => {
		await page.goto('/blog/rise-of-the-it-business-partners');
		const metaDescription = page.locator('meta[name="description"]');
		const content = await metaDescription.getAttribute('content');
		expect(content).toContain('keep the systems running in the background');
	});

	test('markdown HTML content renders headings', async ({ page }) => {
		await page.goto('/blog/build-effective-business-partner-relationships');
		const h2 = page.locator('.prose h2').first();
		await expect(h2).toBeVisible();
		await expect(h2).toContainText(/Why Business Partnering Matters/i);
	});

	test('markdown HTML content renders lists', async ({ page }) => {
		await page.goto('/blog/build-effective-business-partner-relationships');
		const list = page.locator('.prose ul').first();
		await expect(list).toBeVisible();
	});

	test('markdown HTML content renders internal links', async ({ page }) => {
		await page.goto('/blog/build-effective-business-partner-relationships');
		const link = page.locator('.prose a[href="/business-partnering-impact-program"]');
		await expect(link).toBeVisible();
	});
});
