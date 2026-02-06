import { test, expect } from '@playwright/test';

test.describe('Blog Post Page', () => {
	const testSlug = 'build-effective-business-partner-relationships';
	const testTitle = 'Building Effective Business Partner Relationships: A Practical Guide';

	test.beforeEach(async ({ page }) => {
		await page.goto(`/blog/${testSlug}`);
	});

	test('loads the blog post page successfully', async ({ page }) => {
		await expect(page).toHaveURL(`/blog/${testSlug}`);
		await expect(page).toHaveTitle(new RegExp(testTitle.substring(0, 30), 'i'));
	});

	test.describe('Hero Section', () => {
		test('displays the featured image', async ({ page }) => {
			const heroImage = page.locator('section img').first();
			await expect(heroImage).toBeVisible();
			await expect(heroImage).toHaveAttribute('alt', testTitle);
		});

		test('displays the post title', async ({ page }) => {
			const title = page.locator('h1');
			await expect(title).toBeVisible();
			await expect(title).toContainText('Building Effective Business Partner Relationships');
		});

		test('has gradient overlay on hero', async ({ page }) => {
			const overlay = page.locator('section').first().locator('.bg-gradient-to-t');
			await expect(overlay).toBeVisible();
		});
	});

	test.describe('Breadcrumb Navigation', () => {
		test('displays breadcrumb', async ({ page }) => {
			const breadcrumb = page.locator('nav[aria-label="Breadcrumb"]');
			await expect(breadcrumb).toBeVisible();
		});

		test('has Home link', async ({ page }) => {
			const homeLink = page.locator('nav[aria-label="Breadcrumb"] a', { hasText: 'Home' });
			await expect(homeLink).toBeVisible();
			await expect(homeLink).toHaveAttribute('href', '/');
		});

		test('has Blog link', async ({ page }) => {
			const blogLink = page.locator('nav[aria-label="Breadcrumb"] a', { hasText: 'Blog' });
			await expect(blogLink).toBeVisible();
			await expect(blogLink).toHaveAttribute('href', '/blog');
		});

		test('shows current post title in breadcrumb', async ({ page }) => {
			const breadcrumb = page.locator('nav[aria-label="Breadcrumb"]');
			await expect(breadcrumb).toContainText('Building Effective Business Partner Relationships');
		});
	});

	test.describe('Author and Date', () => {
		test('displays author name', async ({ page }) => {
			const author = page.getByText('George Liberopoulos');
			await expect(author).toBeVisible();
		});

		test('displays publication date', async ({ page }) => {
			const dateElement = page.locator('article time');
			await expect(dateElement).toBeVisible();
			await expect(dateElement).toHaveAttribute('datetime', '2025-11-04');
		});

		test('displays author avatar placeholder', async ({ page }) => {
			const avatar = page.locator('.avatar');
			await expect(avatar).toBeVisible();
		});
	});

	test.describe('Article Content', () => {
		test('displays article content', async ({ page }) => {
			const prose = page.locator('.prose');
			await expect(prose).toBeVisible();
		});

		test('contains headings', async ({ page }) => {
			const h2 = page.locator('.prose h2').first();
			await expect(h2).toBeVisible();
		});

		test('contains paragraphs', async ({ page }) => {
			const paragraph = page.locator('.prose p').first();
			await expect(paragraph).toBeVisible();
		});

		test('contains lists', async ({ page }) => {
			const list = page.locator('.prose ul').first();
			await expect(list).toBeVisible();
		});

		test('contains internal links', async ({ page }) => {
			const link = page.locator('.prose a').first();
			await expect(link).toBeVisible();
		});
	});

	test.describe('Share Section', () => {
		test('displays share section', async ({ page }) => {
			const shareText = page.getByText('Share this article');
			await expect(shareText).toBeVisible();
		});

		test('has LinkedIn share button', async ({ page }) => {
			const linkedInButton = page.locator('a[aria-label="Share on LinkedIn"]');
			await expect(linkedInButton).toBeVisible();
			await expect(linkedInButton).toHaveAttribute('href', /linkedin.com/);
		});

		test('has Twitter share button', async ({ page }) => {
			const twitterButton = page.locator('a[aria-label="Share on Twitter"]');
			await expect(twitterButton).toBeVisible();
			await expect(twitterButton).toHaveAttribute('href', /twitter.com/);
		});

		test('has Email share button', async ({ page }) => {
			const emailButton = page.locator('a[aria-label="Share via Email"]');
			await expect(emailButton).toBeVisible();
			await expect(emailButton).toHaveAttribute('href', /mailto:/);
		});
	});

	test.describe('Back to Blog Link', () => {
		test('displays back to blog link', async ({ page }) => {
			const backLink = page.getByRole('link', { name: /Back to Blog/i });
			await expect(backLink).toBeVisible();
			await expect(backLink).toHaveAttribute('href', '/blog');
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
			await expect(page).toHaveTitle(/Building Effective Business Partner Relationships/i);
		});

		test('has meta description', async ({ page }) => {
			const metaDescription = page.locator('meta[name="description"]');
			await expect(metaDescription).toHaveAttribute(
				'content',
				/Across finance, HR, IT, procurement, and operations/i
			);
		});

		test('has Open Graph tags', async ({ page }) => {
			const ogTitle = page.locator('meta[property="og:title"]');
			await expect(ogTitle).toHaveAttribute(
				'content',
				/Building Effective Business Partner Relationships/i
			);

			const ogType = page.locator('meta[property="og:type"]');
			await expect(ogType).toHaveAttribute('content', 'article');

			const ogImage = page.locator('meta[property="og:image"]');
			await expect(ogImage).toHaveAttribute('content', /Building-Effective-Business-Partner/i);
		});

		test('has canonical URL', async ({ page }) => {
			const canonical = page.locator('link[rel="canonical"]');
			await expect(canonical).toHaveAttribute('href', new RegExp(testSlug));
		});

		test('has JSON-LD structured data', async ({ page }) => {
			const jsonLd = page.locator('script[type="application/ld+json"]');
			await expect(jsonLd).toHaveCount(1);

			const content = await jsonLd.textContent();
			expect(content).toContain('"@type":"BlogPosting"');
			expect(content).toContain('George Liberopoulos');
		});
	});

	test.describe('404 Handling', () => {
		test('shows 404 for non-existent post', async ({ page }) => {
			await page.goto('/blog/this-post-does-not-exist');
			const notFoundTitle = page.getByRole('heading', { name: /Post Not Found/i });
			await expect(notFoundTitle).toBeVisible();
		});

		test('404 page has link to blog', async ({ page }) => {
			await page.goto('/blog/this-post-does-not-exist');
			const browseLink = page.getByRole('link', { name: /Browse All Posts/i });
			await expect(browseLink).toBeVisible();
			await expect(browseLink).toHaveAttribute('href', '/blog');
		});
	});

	test.describe('Navigation from Blog Listing', () => {
		test('can navigate from blog listing to post', async ({ page }) => {
			await page.goto('/blog');
			const postLink = page.locator('article a').first();
			await postLink.click();
			await expect(page).toHaveURL(/\/blog\/build-effective-business-partner-relationships/);
		});
	});

	test.describe('Multiple Posts', () => {
		test('IT Business Partner post loads correctly', async ({ page }) => {
			await page.goto('/blog/rise-of-the-it-business-partners');
			await expect(page).toHaveTitle(/The Rise of the IT Business Partner/i);
			const heading = page.locator('h1');
			await expect(heading).toContainText('The Rise of the IT Business Partner');
		});

		test('5 Reminders post loads correctly', async ({ page }) => {
			await page.goto('/blog/drive-results-with-business-partnering');
			await expect(page).toHaveTitle(/5 Reminders to Effective Business Partnering/i);
			const heading = page.locator('h1');
			await expect(heading).toContainText('5 Reminders to Effective Business Partnering');
		});

		test('BPO Teams post loads correctly', async ({ page }) => {
			await page.goto('/blog/agile-client-centric-bpo-teams');
			await expect(page).toHaveTitle(/Adapting to Change/i);
			const heading = page.locator('h1');
			await expect(heading).toContainText('Adapting to Change');
		});

		test('Local Government Employee Growth post loads correctly', async ({ page }) => {
			await page.goto('/blog/tips-to-overcome-local-government-employee-growth-challenges');
			await expect(page).toHaveTitle(/Four Tips to Overcome/i);
			const heading = page.locator('h1');
			await expect(heading).toContainText('Four Tips to Overcome');
		});

		test('Local Councils Employee Growth post loads correctly', async ({ page }) => {
			await page.goto('/blog/local-councils-employee-growth-community-engagement');
			await expect(page).toHaveTitle(/Three Strategies Local Councils/i);
			const heading = page.locator('h1');
			await expect(heading).toContainText('Three Strategies Local Councils');
		});

		test('IT Business Partners Negotiation post loads correctly', async ({ page }) => {
			await page.goto('/blog/the-top-5-personal-growth-strategies-for-it-business-partners');
			await expect(page).toHaveTitle(/Mastering the Art of Negotiation/i);
			const heading = page.locator('h1');
			await expect(heading).toContainText('Mastering the Art of Negotiation');
		});
	});

	test.describe('Image Optimization', () => {
		test('hero image has eager loading', async ({ page }) => {
			const heroImage = page.locator('section img').first();
			await expect(heroImage).toHaveAttribute('loading', 'eager');
		});

		test('hero image has async decoding', async ({ page }) => {
			const heroImage = page.locator('section img').first();
			await expect(heroImage).toHaveAttribute('decoding', 'async');
		});

		test('hero image has high fetch priority', async ({ page }) => {
			const heroImage = page.locator('section img').first();
			await expect(heroImage).toHaveAttribute('fetchpriority', 'high');
		});
	});

	test.describe('Accessibility', () => {
		test('breadcrumb has aria-label', async ({ page }) => {
			const breadcrumb = page.locator('nav[aria-label="Breadcrumb"]');
			await expect(breadcrumb).toBeVisible();
		});

		test('share buttons have aria-labels', async ({ page }) => {
			const linkedInButton = page.locator('a[aria-label="Share on LinkedIn"]');
			await expect(linkedInButton).toBeVisible();

			const twitterButton = page.locator('a[aria-label="Share on Twitter"]');
			await expect(twitterButton).toBeVisible();

			const emailButton = page.locator('a[aria-label="Share via Email"]');
			await expect(emailButton).toBeVisible();
		});

		test('article has proper heading hierarchy', async ({ page }) => {
			const h1 = page.locator('h1');
			await expect(h1).toHaveCount(1);

			const h2 = page.locator('.prose h2');
			const h2Count = await h2.count();
			expect(h2Count).toBeGreaterThan(0);
		});
	});
});
