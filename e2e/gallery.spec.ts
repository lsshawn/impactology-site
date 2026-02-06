import { test, expect } from '@playwright/test';

test.describe('Gallery Page', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/gallery');
	});

	test('loads the page successfully', async ({ page }) => {
		await expect(page).toHaveURL('/gallery');
		await expect(page).toHaveTitle(/Gallery.*Impactology/i);
	});

	test.describe('Hero Section', () => {
		test('displays the main headline', async ({ page }) => {
			const headline = page.getByRole('heading', { name: /GALLERY/i, level: 1 });
			await expect(headline).toBeVisible();
		});

		test('shows the description', async ({ page }) => {
			const description = page.getByText(
				/Capturing moments of transformation, collaboration, and impact/i
			);
			await expect(description).toBeVisible();
		});
	});

	test.describe('Gallery Grid', () => {
		test('displays all gallery images', async ({ page }) => {
			const galleryImages = page.locator('img[src^="/client-photo-"]');
			await expect(galleryImages).toHaveCount(6);
		});

		test('images have alt text', async ({ page }) => {
			const images = page.locator('img[src^="/client-photo-"]');
			const count = await images.count();

			for (let i = 0; i < count; i++) {
				const altText = await images.nth(i).getAttribute('alt');
				expect(altText).toBeTruthy();
				expect(altText!.length).toBeGreaterThan(0);
			}
		});

		test('images have lazy loading', async ({ page }) => {
			const images = page.locator('img[src^="/client-photo-"]');
			const count = await images.count();

			for (let i = 0; i < count; i++) {
				await expect(images.nth(i)).toHaveAttribute('loading', 'lazy');
			}
		});

		test('gallery items are clickable buttons', async ({ page }) => {
			const galleryButtons = page.locator('button:has(img[src^="/client-photo-"])');
			await expect(galleryButtons).toHaveCount(6);
		});
	});

	test.describe('Lightbox', () => {
		test('opens lightbox when clicking an image', async ({ page }) => {
			const firstImageButton = page.locator('button:has(img[src="/client-photo-1.jpg"])');
			await firstImageButton.click();

			// Check URL has photo parameter
			await expect(page).toHaveURL(/\?photo=0/);

			// Check lightbox is visible
			const lightbox = page.locator('[role="dialog"]');
			await expect(lightbox).toBeVisible();
		});

		test('lightbox shows the clicked image', async ({ page }) => {
			const firstImageButton = page.locator('button:has(img[src="/client-photo-1.jpg"])');
			await firstImageButton.click();

			const lightboxImage = page.locator('[role="dialog"] img[src="/client-photo-1.jpg"]');
			await expect(lightboxImage).toBeVisible();
		});

		test('lightbox shows image counter', async ({ page }) => {
			const firstImageButton = page.locator('button:has(img[src="/client-photo-1.jpg"])');
			await firstImageButton.click();

			const counter = page.locator('[role="dialog"]').getByText(/1 \/ 6/);
			await expect(counter).toBeVisible();
		});

		test('can navigate to next image', async ({ page }) => {
			const firstImageButton = page.locator('button:has(img[src="/client-photo-1.jpg"])');
			await firstImageButton.click();

			const nextButton = page.locator('[role="dialog"] button[aria-label="Next image"]');
			await nextButton.click();

			await expect(page).toHaveURL(/\?photo=1/);
			const counter = page.locator('[role="dialog"]').getByText(/2 \/ 6/);
			await expect(counter).toBeVisible();
		});

		test('can navigate to previous image', async ({ page }) => {
			// Start at second image
			await page.goto('/gallery?photo=1');

			const prevButton = page.locator('[role="dialog"] button[aria-label="Previous image"]');
			await prevButton.click();

			await expect(page).toHaveURL(/\?photo=0/);
			const counter = page.locator('[role="dialog"]').getByText(/1 \/ 6/);
			await expect(counter).toBeVisible();
		});

		test('wraps around from last to first image', async ({ page }) => {
			// Start at last image
			await page.goto('/gallery?photo=5');

			const nextButton = page.locator('[role="dialog"] button[aria-label="Next image"]');
			await nextButton.click();

			await expect(page).toHaveURL(/\?photo=0/);
		});

		test('wraps around from first to last image', async ({ page }) => {
			await page.goto('/gallery?photo=0');

			const prevButton = page.locator('[role="dialog"] button[aria-label="Previous image"]');
			await prevButton.click();

			await expect(page).toHaveURL(/\?photo=5/);
		});

		test('closes lightbox when clicking close button', async ({ page }) => {
			await page.goto('/gallery?photo=0');

			const closeButton = page.locator('[role="dialog"] button[aria-label="Close"]');
			await closeButton.click();

			await expect(page).toHaveURL('/gallery');
			const lightbox = page.locator('[role="dialog"]');
			await expect(lightbox).not.toBeVisible();
		});

		test('closes lightbox when clicking backdrop', async ({ page }) => {
			await page.goto('/gallery?photo=0');

			// Click on the edge of the backdrop (outside the image)
			const backdrop = page.locator('[role="dialog"] button[aria-label="Close lightbox"]');
			await backdrop.click({ position: { x: 10, y: 10 } });

			await expect(page).toHaveURL('/gallery');
		});

		test('closes lightbox with Escape key', async ({ page }) => {
			await page.goto('/gallery?photo=0');

			// Wait for lightbox to be visible
			await expect(page.locator('[role="dialog"]')).toBeVisible();

			// Press Escape key
			await page.keyboard.press('Escape');

			// Wait for URL to update
			await expect(page).toHaveURL('/gallery', { timeout: 10000 });
		});

		test('navigates with arrow keys', async ({ page }) => {
			await page.goto('/gallery?photo=0');

			// Wait for lightbox to be visible
			await expect(page.locator('[role="dialog"]')).toBeVisible();

			await page.keyboard.press('ArrowRight');
			await expect(page).toHaveURL(/\?photo=1/, { timeout: 10000 });

			await page.keyboard.press('ArrowLeft');
			await expect(page).toHaveURL(/\?photo=0/, { timeout: 10000 });
		});

		test('lightbox is accessible with dialog role', async ({ page }) => {
			await page.goto('/gallery?photo=0');

			const dialog = page.locator('[role="dialog"]');
			await expect(dialog).toHaveAttribute('aria-modal', 'true');
			await expect(dialog).toHaveAttribute('aria-label', 'Image lightbox');
		});
	});

	test.describe('CTA Section', () => {
		test('displays the CTA heading', async ({ page }) => {
			const heading = page.getByRole('heading', { name: /WANT TO BE PART OF OUR STORY/i });
			await expect(heading).toBeVisible();
		});

		test('shows the CTA description', async ({ page }) => {
			const description = page.getByText(/Join our programs and create your own impact moments/i);
			await expect(description).toBeVisible();
		});

		test('has Get in Touch button linking to contact page', async ({ page }) => {
			// Get the CTA button specifically in the main section
			const ctaButton = page.getByRole('main').getByRole('link', { name: /GET IN TOUCH/i });
			await expect(ctaButton).toBeVisible();
			await expect(ctaButton).toHaveAttribute('href', '/contact');
		});
	});

	test.describe('SEO', () => {
		test('has correct meta title', async ({ page }) => {
			await expect(page).toHaveTitle(/Gallery.*Impactology/i);
		});

		test('has meta description', async ({ page }) => {
			const metaDescription = page.locator('meta[name="description"]');
			await expect(metaDescription).toHaveAttribute(
				'content',
				/Browse photos from Impactology workshops/i
			);
		});

		test('has Open Graph tags', async ({ page }) => {
			const ogTitle = page.locator('meta[property="og:title"]');
			await expect(ogTitle).toHaveAttribute('content', /Gallery.*Impactology/i);

			const ogType = page.locator('meta[property="og:type"]');
			await expect(ogType).toHaveAttribute('content', 'website');

			const ogImage = page.locator('meta[property="og:image"]');
			await expect(ogImage).toHaveAttribute('content', /client-photo-1\.jpg/);
		});

		test('has canonical URL', async ({ page }) => {
			const canonical = page.locator('link[rel="canonical"]');
			await expect(canonical).toHaveAttribute('href', /gallery/i);
		});
	});

	test.describe('Page Structure', () => {
		test('has proper heading hierarchy', async ({ page }) => {
			// Should have one h1
			const h1Headings = page.locator('h1');
			await expect(h1Headings).toHaveCount(1);

			// Should have at least one h2
			const h2Headings = page.locator('h2');
			const h2Count = await h2Headings.count();
			expect(h2Count).toBeGreaterThanOrEqual(1);
		});

		test('uses section backgrounds correctly', async ({ page }) => {
			// Yellow hero section
			await expect(page.locator('.section-yellow').first()).toBeVisible();
			// Dark CTA section
			await expect(page.locator('.section-dark').first()).toBeVisible();
		});
	});

	test.describe('URL State Management', () => {
		test('lightbox state persists in URL for sharing', async ({ page }) => {
			// Open lightbox via URL
			await page.goto('/gallery?photo=2');

			// Verify lightbox is open at correct image
			const lightbox = page.locator('[role="dialog"]');
			await expect(lightbox).toBeVisible();

			const counter = page.locator('[role="dialog"]').getByText(/3 \/ 6/);
			await expect(counter).toBeVisible();
		});

		test('handles invalid photo index gracefully', async ({ page }) => {
			await page.goto('/gallery?photo=invalid');

			// Should not crash, lightbox should not open
			const lightbox = page.locator('[role="dialog"]');
			await expect(lightbox).not.toBeVisible();
		});
	});
});
