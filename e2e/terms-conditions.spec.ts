import { test, expect } from '@playwright/test';

test.describe('Terms & Conditions Page', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/legals1');
	});

	test('loads the page successfully', async ({ page }) => {
		await expect(page).toHaveURL('/legals1');
		await expect(page).toHaveTitle(/Terms.*Conditions.*Impactology/i);
	});

	test.describe('Content', () => {
		test('displays the main headline', async ({ page }) => {
			const headline = page.getByRole('heading', { name: /TERMS.*CONDITIONS/i, level: 1 });
			await expect(headline).toBeVisible();
		});

		test('shows the introductory paragraph', async ({ page }) => {
			const intro = page.getByText(/These terms and conditions.*govern your use/i);
			await expect(intro).toBeVisible();
		});

		test('displays all main sections', async ({ page }) => {
			const sections = [
				'1. Services',
				'2. Registration and Booking',
				'3. Payment Terms',
				'4. Cancellation and Refund Policy',
				'5. Intellectual Property',
				'6. Confidentiality',
				'7. Code of Conduct',
				'8. Limitation of Liability',
				'9. Indemnification',
				'10. Website Use',
				'11. Third-Party Links',
				'12. Privacy',
				'13. Force Majeure',
				'14. Amendments',
				'15. Governing Law',
				'16. Severability',
				'17. Entire Agreement',
				'18. Contact Us'
			];

			for (const section of sections) {
				const heading = page.getByRole('heading', { name: section });
				await expect(heading).toBeVisible();
			}
		});

		test('shows last updated date', async ({ page }) => {
			const lastUpdated = page.getByText(/Last updated:/i);
			await expect(lastUpdated).toBeVisible();
		});
	});

	test.describe('Links', () => {
		test('has link to Privacy Policy in content', async ({ page }) => {
			const privacyLink = page.getByRole('main').getByRole('link', { name: /Privacy Policy/i });
			await expect(privacyLink).toBeVisible();
			await expect(privacyLink).toHaveAttribute('href', '/privacy-policy');
		});

		test('has email contact link', async ({ page }) => {
			const emailLink = page.getByRole('link', { name: /hello@impactology\.com\.au/i });
			await expect(emailLink).toBeVisible();
			await expect(emailLink).toHaveAttribute('href', 'mailto:hello@impactology.com.au');
		});

		test('has website link', async ({ page }) => {
			const websiteLink = page.getByRole('link', { name: /www\.impactology\.com\.au/i });
			await expect(websiteLink).toBeVisible();
		});
	});

	test.describe('SEO', () => {
		test('has correct meta title', async ({ page }) => {
			await expect(page).toHaveTitle(/Terms.*Conditions.*Impactology/i);
		});

		test('has meta description', async ({ page }) => {
			const metaDescription = page.locator('meta[name="description"]');
			await expect(metaDescription).toHaveAttribute(
				'content',
				/Terms and conditions governing the use of Impactology/i
			);
		});

		test('has canonical URL', async ({ page }) => {
			const canonical = page.locator('link[rel="canonical"]');
			await expect(canonical).toHaveAttribute('href', /legals1/i);
		});
	});

	test.describe('Page Structure', () => {
		test('has proper heading hierarchy', async ({ page }) => {
			// Should have exactly one h1
			const h1Headings = page.locator('h1');
			await expect(h1Headings).toHaveCount(1);

			// Should have h2 headings for each section
			const h2Headings = page.locator('h2');
			const h2Count = await h2Headings.count();
			expect(h2Count).toBeGreaterThanOrEqual(18);
		});

		test('uses prose styling for content', async ({ page }) => {
			const proseContainer = page.locator('.prose');
			await expect(proseContainer).toBeVisible();
		});

		test('is contained within max-width container', async ({ page }) => {
			const container = page.locator('.max-w-4xl');
			await expect(container).toBeVisible();
		});
	});

	test.describe('Accessibility', () => {
		test('all links are accessible', async ({ page }) => {
			const links = page.locator('.prose a');
			const count = await links.count();

			for (let i = 0; i < count; i++) {
				const linkText = await links.nth(i).textContent();
				expect(linkText?.trim().length).toBeGreaterThan(0);
			}
		});

		test('ordered lists are properly structured', async ({ page }) => {
			const orderedLists = page.locator('.prose ol');
			const count = await orderedLists.count();
			expect(count).toBeGreaterThan(0);
		});
	});

	test.describe('Navigation', () => {
		test('can navigate to Terms & Conditions from footer', async ({ page }) => {
			await page.goto('/');
			const footerLink = page
				.locator('footer')
				.getByRole('link', { name: /Terms and Conditions/i });
			await expect(footerLink).toBeVisible();
			await footerLink.click();
			await expect(page).toHaveURL('/legals1');
		});
	});
});
