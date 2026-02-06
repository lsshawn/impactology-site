import { test, expect } from '@playwright/test';

test.describe('Blog Page', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/blog');
	});

	test('loads the blog page successfully', async ({ page }) => {
		await expect(page).toHaveURL('/blog');
		await expect(page).toHaveTitle(/Blog.*Impactology/i);
	});

	test.describe('Hero Section', () => {
		test('displays the main headline', async ({ page }) => {
			const headline = page.getByRole('heading', { name: /BLOG/i });
			await expect(headline).toBeVisible();
		});

		test('shows the hero description', async ({ page }) => {
			const description = page.getByText(
				/Insights, strategies, and practical guides for business partners/i
			);
			await expect(description).toBeVisible();
		});

		test('hero section has yellow background', async ({ page }) => {
			const heroSection = page.locator('section.section-yellow').first();
			await expect(heroSection).toBeVisible();
		});
	});

	test.describe('Blog Posts Grid', () => {
		test('displays blog post cards', async ({ page }) => {
			const articles = page.locator('article');
			const count = await articles.count();
			expect(count).toBeGreaterThanOrEqual(1);
		});

		test('each post card has a featured image', async ({ page }) => {
			const postImages = page.locator('article img');
			const firstImage = postImages.first();
			await expect(firstImage).toBeVisible();
			await expect(firstImage).toHaveAttribute('alt', /.+/);
		});

		test('each post card has a title', async ({ page }) => {
			const firstPostTitle = page.locator('article h3').first();
			await expect(firstPostTitle).toBeVisible();
		});

		test('each post card has a date', async ({ page }) => {
			const firstPostDate = page.locator('article time').first();
			await expect(firstPostDate).toBeVisible();
			await expect(firstPostDate).toHaveAttribute('datetime', /\d{4}-\d{2}-\d{2}/);
		});

		test('each post card has an excerpt', async ({ page }) => {
			const firstExcerpt = page.locator('article p').first();
			await expect(firstExcerpt).toBeVisible();
		});

		test('each post card has a Read More link', async ({ page }) => {
			const readMoreLinks = page.locator('article a', { hasText: /Read More/i });
			const firstLink = readMoreLinks.first();
			await expect(firstLink).toBeVisible();
		});

		test('displays the correct number of blog posts', async ({ page }) => {
			const articles = page.locator('article');
			const count = await articles.count();
			expect(count).toBe(12);
		});

		test('shows recent post first', async ({ page }) => {
			const firstPostTitle = page.locator('article h3 a').first();
			await expect(firstPostTitle).toContainText(
				/Building Effective Business Partner Relationships/i
			);
		});
	});

	test.describe('Blog Post Links', () => {
		test('post title links to the correct post', async ({ page }) => {
			const firstPostTitleLink = page.locator('article h3 a').first();
			await expect(firstPostTitleLink).toHaveAttribute(
				'href',
				'/blog/build-effective-business-partner-relationships'
			);
		});

		test('Read More link points to the same URL as title', async ({ page }) => {
			const firstPostTitleLink = page.locator('article h3 a').first();
			const firstReadMoreLink = page.locator('article a', { hasText: /Read More/i }).first();

			const titleHref = await firstPostTitleLink.getAttribute('href');
			const readMoreHref = await firstReadMoreLink.getAttribute('href');

			expect(titleHref).toBe(readMoreHref);
		});

		test('featured image links to the post', async ({ page }) => {
			const firstImageLink = page.locator('article a').first();
			await expect(firstImageLink).toHaveAttribute('href', /\/blog\//);
		});
	});

	test.describe('CTA Section', () => {
		test('displays CTA heading', async ({ page }) => {
			const heading = page.getByRole('heading', { name: /READY TO MAKE AN IMPACT/i });
			await expect(heading).toBeVisible();
		});

		test('displays CTA description', async ({ page }) => {
			const description = page.getByText(
				/Discover how our leadership development programs can transform/i
			);
			await expect(description).toBeVisible();
		});

		test('has Get in Touch button linking to contact page', async ({ page }) => {
			const ctaSection = page.locator('section.section-dark');
			const ctaButton = ctaSection.getByRole('link', { name: /Get in Touch/i });
			await expect(ctaButton).toBeVisible();
			await expect(ctaButton).toHaveAttribute('href', '/contact');
		});

		test('CTA section has dark background', async ({ page }) => {
			const ctaSection = page.locator('section.section-dark');
			await expect(ctaSection).toBeVisible();
		});
	});

	test.describe('SEO', () => {
		test('has correct meta title', async ({ page }) => {
			await expect(page).toHaveTitle(/Blog.*Impactology/i);
		});

		test('has meta description', async ({ page }) => {
			const metaDescription = page.locator('meta[name="description"]');
			await expect(metaDescription).toHaveAttribute(
				'content',
				/Insights, strategies, and practical guides for business partners/i
			);
		});

		test('has Open Graph tags', async ({ page }) => {
			const ogTitle = page.locator('meta[property="og:title"]');
			await expect(ogTitle).toHaveAttribute('content', /Blog.*Impactology/i);

			const ogType = page.locator('meta[property="og:type"]');
			await expect(ogType).toHaveAttribute('content', 'website');

			const ogSiteName = page.locator('meta[property="og:site_name"]');
			await expect(ogSiteName).toHaveAttribute('content', 'Impactology');
		});

		test('has canonical URL', async ({ page }) => {
			const canonical = page.locator('link[rel="canonical"]');
			await expect(canonical).toHaveAttribute('href', /blog/i);
		});

		test('has JSON-LD structured data', async ({ page }) => {
			const jsonLd = page.locator('script[type="application/ld+json"]');
			await expect(jsonLd).toHaveCount(1);

			const content = await jsonLd.textContent();
			expect(content).toContain('"@type":"Blog"');
			expect(content).toContain('Impactology Blog');
		});
	});

	test.describe('Responsive Layout', () => {
		test('displays 3 columns on desktop', async ({ page }) => {
			await page.setViewportSize({ width: 1280, height: 800 });
			const grid = page.locator('section.bg-base-100 .grid');
			await expect(grid).toHaveClass(/lg:grid-cols-3/);
		});

		test('displays 2 columns on tablet', async ({ page }) => {
			await page.setViewportSize({ width: 768, height: 1024 });
			const grid = page.locator('section.bg-base-100 .grid');
			await expect(grid).toHaveClass(/md:grid-cols-2/);
		});

		test('displays single column on mobile', async ({ page }) => {
			await page.setViewportSize({ width: 375, height: 812 });
			const grid = page.locator('section.bg-base-100 .grid');
			await expect(grid).toHaveClass(/grid-cols-1/);
		});
	});

	test.describe('Image Optimization', () => {
		test('images have lazy loading attribute', async ({ page }) => {
			const postImages = page.locator('article img');
			const firstImage = postImages.first();
			await expect(firstImage).toHaveAttribute('loading', 'lazy');
		});

		test('images have async decoding', async ({ page }) => {
			const postImages = page.locator('article img');
			const firstImage = postImages.first();
			await expect(firstImage).toHaveAttribute('decoding', 'async');
		});
	});

	test.describe('Accessibility', () => {
		test('images have alt text', async ({ page }) => {
			const postImages = page.locator('article img');
			const count = await postImages.count();

			for (let i = 0; i < count; i++) {
				const altText = await postImages.nth(i).getAttribute('alt');
				expect(altText).toBeTruthy();
			}
		});

		test('dates have datetime attribute', async ({ page }) => {
			const dateTimes = page.locator('article time');
			const count = await dateTimes.count();

			for (let i = 0; i < count; i++) {
				await expect(dateTimes.nth(i)).toHaveAttribute('datetime', /\d{4}-\d{2}-\d{2}/);
			}
		});

		test('links are descriptive', async ({ page }) => {
			const readMoreLinks = page.locator('article a', { hasText: /Read More/i });
			const count = await readMoreLinks.count();
			expect(count).toBeGreaterThan(0);
		});
	});
});
