import { test, expect } from '@playwright/test';

test.describe('EVOLVE Book Page', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/evolve-book');
	});

	test('loads the Evolve Book page successfully', async ({ page }) => {
		await expect(page).toHaveURL('/evolve-book');
		await expect(page).toHaveTitle(/Evolve Book/i);
	});

	test.describe('Hero Section', () => {
		test('displays the main headline', async ({ page }) => {
			const headline = page.getByRole('heading', {
				name: /IF YOU ARE A CURRENT OR ASPIRING BUSINESS PARTNER/i
			});
			await expect(headline).toBeVisible();
		});

		test('shows the hero description', async ({ page }) => {
			const description = page.getByText(
				/Finally, a book that provides realistic and targeted advice/i
			);
			await expect(description).toBeVisible();
		});

		test('has Buy Now call-to-action button', async ({ page }) => {
			const buyButton = page.getByRole('link', { name: /BUY NOW/i });
			await expect(buyButton).toBeVisible();
			await expect(buyButton).toHaveAttribute('href', '#buy-now-form');
		});

		test('displays the book cover image', async ({ page }) => {
			const bookCover = page
				.locator('img[alt*="EVOLVE"]')
				.or(page.locator('img[alt*="Business Partnering Playbook"]'))
				.first();
			await expect(bookCover).toBeVisible();
		});
	});

	test.describe('Companies Section', () => {
		test('displays Companies We Worked With heading', async ({ page }) => {
			const heading = page.getByRole('heading', { name: /COMPANIES WE'VE WORKED WITH/i });
			await expect(heading).toBeVisible();
		});

		test('shows client logos', async ({ page }) => {
			const logos = page.locator('img[alt="Client logo"]');
			await expect(logos.first()).toBeVisible();
		});
	});

	test.describe('Why EVOLVE Section', () => {
		test('displays Why EVOLVE heading', async ({ page }) => {
			const heading = page.getByRole('heading', { name: /WHY EVOLVE/i });
			await expect(heading).toBeVisible();
		});

		test('shows key points about Business Partners', async ({ page }) => {
			await expect(
				page.getByText(/Business Partners hold a vital role as trusted confidants/i)
			).toBeVisible();
			await expect(page.getByText(/they are now true collaborating partners/i)).toBeVisible();
			await expect(
				page.getByText(/no pathway to develop the competencies essential/i)
			).toBeVisible();
		});

		test('displays "Until now" transition text', async ({ page }) => {
			await expect(page.getByText('Until now….')).toBeVisible();
		});

		test('describes what EVOLVE shows', async ({ page }) => {
			await expect(
				page.getByText(/EVOLVE shows you how to navigate service models and systems/i)
			).toBeVisible();
		});

		test('lists target audience', async ({ page }) => {
			await expect(page.getByText(/HR, Finance, Procurement/i)).toBeVisible();
		});

		test('mentions availability in hard copy and e-book', async ({ page }) => {
			await expect(page.getByText(/EVOLVE is available in hard copy and e-book/i)).toBeVisible();
		});
	});

	test.describe('Order Form Section', () => {
		test('displays Order Form heading', async ({ page }) => {
			const heading = page.getByRole('heading', { name: /ORDER FORM/i });
			await expect(heading).toBeVisible();
		});

		test('shows the price', async ({ page }) => {
			await expect(page.getByText(/AUD \$24.95/i)).toBeVisible();
		});

		test('has contact us to order button', async ({ page }) => {
			const contactButton = page.getByRole('link', { name: /CONTACT US TO ORDER/i });
			await expect(contactButton).toBeVisible();
			await expect(contactButton).toHaveAttribute('href', '/contact');
		});
	});

	test.describe('International Purchase Options', () => {
		test('displays international purchase heading', async ({ page }) => {
			await expect(page.getByText(/IF YOU'RE OUTSIDE AUSTRALIA OR NEW ZEALAND/i)).toBeVisible();
		});

		test('has Amazon USA link', async ({ page }) => {
			const amazonUsaLink = page.getByRole('link', { name: /Amazon USA/i });
			await expect(amazonUsaLink).toBeVisible();
			await expect(amazonUsaLink).toHaveAttribute('href', 'https://www.amazon.com/dp/B09J8BXC59');
		});

		test('has Amazon UK link', async ({ page }) => {
			const amazonUkLink = page.getByRole('link', { name: /Amazon UK/i });
			await expect(amazonUkLink).toBeVisible();
			await expect(amazonUkLink).toHaveAttribute('href', 'https://www.amazon.co.uk/dp/B09J8BXC59');
		});

		test('has Amazon AU link', async ({ page }) => {
			const amazonAuLink = page.getByRole('link', { name: /Amazon AU/i });
			await expect(amazonAuLink).toBeVisible();
			await expect(amazonAuLink).toHaveAttribute('href', 'https://www.amazon.com.au/dp/B09J8BXC59');
		});

		test('displays E-Book Options heading', async ({ page }) => {
			await expect(page.getByText('E-BOOK OPTIONS')).toBeVisible();
		});

		test('has Apple Books link', async ({ page }) => {
			const appleBooksLink = page.getByRole('link', { name: /Apple Books/i });
			await expect(appleBooksLink).toBeVisible();
		});

		test('has Google Play link', async ({ page }) => {
			const googlePlayLink = page.getByRole('link', { name: /Google Play/i });
			await expect(googlePlayLink).toBeVisible();
			await expect(googlePlayLink).toHaveAttribute('href', /play\.google\.com.*EVOLVE/i);
		});
	});

	test.describe('Final CTA Section', () => {
		test('displays final call to action heading', async ({ page }) => {
			const heading = page.getByRole('heading', {
				name: /READY TO EVOLVE YOUR BUSINESS PARTNERING SKILLS/i
			});
			await expect(heading).toBeVisible();
		});

		test('has Order Your Copy button', async ({ page }) => {
			const orderButton = page.getByRole('link', { name: /ORDER YOUR COPY/i });
			await expect(orderButton).toBeVisible();
			await expect(orderButton).toHaveAttribute('href', '#buy-now-form');
		});

		test('has Ask A Question button', async ({ page }) => {
			const askButton = page.getByRole('link', { name: /ASK A QUESTION/i });
			await expect(askButton).toBeVisible();
			await expect(askButton).toHaveAttribute('href', '/contact');
		});
	});

	test.describe('Navigation', () => {
		test('clicking Buy Now scrolls to order form', async ({ page }) => {
			const buyButton = page.getByRole('link', { name: /BUY NOW/i }).first();
			await buyButton.click();

			const form = page.locator('#buy-now-form');
			await expect(form).toBeInViewport();
		});

		test('clicking Order Your Copy scrolls to order form', async ({ page }) => {
			const orderButton = page.getByRole('link', { name: /ORDER YOUR COPY/i });
			await orderButton.click();

			const form = page.locator('#buy-now-form');
			await expect(form).toBeInViewport();
		});
	});

	test.describe('SEO', () => {
		test('has correct meta title', async ({ page }) => {
			await expect(page).toHaveTitle(/Evolve Book.*Impactology/i);
		});

		test('has meta description', async ({ page }) => {
			const metaDescription = page.locator('meta[name="description"]');
			await expect(metaDescription).toHaveAttribute(
				'content',
				/Evolve Book shows you how to navigate service models/i
			);
		});

		test('has Open Graph tags', async ({ page }) => {
			const ogTitle = page.locator('meta[property="og:title"]');
			await expect(ogTitle).toHaveAttribute('content', /Evolve Book/i);

			const ogType = page.locator('meta[property="og:type"]');
			await expect(ogType).toHaveAttribute('content', 'website');
		});

		test('has canonical URL', async ({ page }) => {
			const canonical = page.locator('link[rel="canonical"]');
			await expect(canonical).toHaveAttribute('href', /evolve-book/i);
		});
	});

	test.describe('External Links', () => {
		test('Amazon links open in new tab', async ({ page }) => {
			const amazonLinks = page.locator('a[href*="amazon"]');
			const count = await amazonLinks.count();

			for (let i = 0; i < count; i++) {
				await expect(amazonLinks.nth(i)).toHaveAttribute('target', '_blank');
				await expect(amazonLinks.nth(i)).toHaveAttribute('rel', /noopener/);
			}
		});

		test('E-book links open in new tab', async ({ page }) => {
			const googlePlayLink = page.getByRole('link', { name: /Google Play/i });
			await expect(googlePlayLink).toHaveAttribute('target', '_blank');
			await expect(googlePlayLink).toHaveAttribute('rel', /noopener/);
		});
	});
});
