/**
 * SEO Parity Tests
 *
 * Compares meta tags between the live WordPress site and the local SvelteKit build.
 * Run with: pnpm playwright test e2e/seo-parity.spec.ts
 *
 * To add more pages, append entries to the `pages` array below.
 * Each entry needs:
 *   - path: the URL path (same on both sites)
 *   - label: human-readable name shown in test output
 *
 * The WordPress base URL is defined in WP_BASE below.
 */

import { test, expect, type Page } from '@playwright/test';

const WP_BASE = 'https://impactology.com.au';

// ─── Add pages here ──────────────────────────────────────────────────────────
const pages = [
	// Static pages
	{ label: 'Home', path: '/' },
	{ label: 'Blog listing', path: '/blog' },
	{ label: 'Contact', path: '/contact' },
	{ label: 'About', path: '/about' },
	{ label: 'Business Partnering Impact Program', path: '/business-partnering-impact-program' },
	{ label: 'Amplify Your Impact Program', path: '/amplify-your-impact-program' },
	{ label: 'IT Business Partnering', path: '/it-business-partnering' },
	{ label: 'Finance Business Partnering', path: '/finance-business-partnering' },
	{ label: 'HR Business Partnering', path: '/hr-business-partnering' },
	{ label: 'Procurement Business Partnering', path: '/procurement-business-partnering' },
	{ label: 'Leadership Development for BPOs', path: '/leadership-development-for-bpos' },
	{ label: 'MSP BP Programs', path: '/msp-bp-programs' },
	{ label: 'Leadership Development Local Government', path: '/leadership-development-program-local-government' },
	{ label: 'Sales Business Development Program', path: '/sales-business-development-client-management-program' },
	{ label: 'Marketing Communications BP Program', path: '/marketing-communications-business-partnering-program' },
	{ label: 'Impactora', path: '/impactora' },
	{ label: 'Evolve Book', path: '/evolve-book' },
	{ label: 'Impactology Live 2020', path: '/impactology-live-2020' },
	{ label: 'Gallery', path: '/gallery' },
	{ label: 'Privacy Policy', path: '/privacy-policy' },
	// Blog posts
	{ label: 'Blog: build-effective-business-partner-relationships', path: '/blog/build-effective-business-partner-relationships' },
	{ label: 'Blog: rise-of-the-it-business-partners', path: '/blog/rise-of-the-it-business-partners' },
	{ label: 'Blog: drive-results-with-business-partnering', path: '/blog/drive-results-with-business-partnering' },
	{ label: 'Blog: agile-client-centric-bpo-teams', path: '/blog/agile-client-centric-bpo-teams' },
	{ label: 'Blog: kpis-for-high-performing-business-partnering-teams', path: '/blog/kpis-for-high-performing-business-partnering-teams' },
	{ label: 'Blog: top-5-growth-mindset-tips-every-finance-team-needs-for-business-partnering-success', path: '/blog/top-5-growth-mindset-tips-every-finance-team-needs-for-business-partnering-success' },
	{ label: 'Blog: local-government-strategies-trust-collaboration', path: '/blog/local-government-strategies-trust-collaboration' },
	{ label: 'Blog: high-performing-cross-functional-bpo-teams', path: '/blog/high-performing-cross-functional-bpo-teams' },
	{ label: 'Blog: transform-bpo-teams-leadership-business-partnering', path: '/blog/transform-bpo-teams-leadership-business-partnering' },
	{ label: 'Blog: tips-to-overcome-local-government-employee-growth-challenges', path: '/blog/tips-to-overcome-local-government-employee-growth-challenges' },
	{ label: 'Blog: local-councils-employee-growth-community-engagement', path: '/blog/local-councils-employee-growth-community-engagement' },
	{ label: 'Blog: the-top-5-personal-growth-strategies-for-it-business-partners', path: '/blog/the-top-5-personal-growth-strategies-for-it-business-partners' },
	{ label: 'Blog: what-does-it-mean-to-be-a-transformational-it-business-partner', path: '/blog/what-does-it-mean-to-be-a-transformational-it-business-partner' },
	{ label: 'Blog: breaking-limiting-beliefs-msp-leadership-growth', path: '/blog/breaking-limiting-beliefs-msp-leadership-growth' },
	{ label: 'Blog: four-strategies-to-transform-procurement-partnering', path: '/blog/four-strategies-to-transform-procurement-partnering' },
	{ label: 'Blog: employee-growth-for-managed-service-providers-msps-a-strategic-path-to-success', path: '/blog/employee-growth-for-managed-service-providers-msps-a-strategic-path-to-success' },
	{ label: 'Blog: embracing-imposter-syndrome-hr-leadership', path: '/blog/embracing-imposter-syndrome-hr-leadership' },
	{ label: 'Blog: balancing-ambition-and-well-being-five-finance-business-partner-strategies-for-personal-growth', path: '/blog/balancing-ambition-and-well-being-five-finance-business-partner-strategies-for-personal-growth' },
	{ label: 'Blog: five-tips-to-enhancing-your-business-partnering-judgment-and-intuition-in-procurement', path: '/blog/five-tips-to-enhancing-your-business-partnering-judgment-and-intuition-in-procurement' },
	{ label: 'Blog: top-5-ways-to-create-genuine-connections-for-personal-and-professional-growth', path: '/blog/top-5-ways-to-create-genuine-connections-for-personal-and-professional-growth' },
	{ label: 'Blog: top-4-tips-to-enhance-self-awareness-for-people-culture-business-partners', path: '/blog/top-4-tips-to-enhance-self-awareness-for-people-culture-business-partners' },
	{ label: 'Blog: 7-tips-to-cultivating-creativity-in-procurement', path: '/blog/7-tips-to-cultivating-creativity-in-procurement' },
	{ label: 'Blog: top-5-mindset-shifts-for-finance-business-partners', path: '/blog/top-5-mindset-shifts-for-finance-business-partners' },
	{ label: 'Blog: theme-1-foundation-defining-sustainable-growth-in-the-mssp-msp-world-blog-1-of-6', path: '/blog/theme-1-foundation-defining-sustainable-growth-in-the-mssp-msp-world-blog-1-of-6' },
	{ label: 'Blog: 5-skills-you-need-to-build-your-resilience-and-adaptability', path: '/blog/5-skills-you-need-to-build-your-resilience-and-adaptability' },
	{ label: 'Blog: top-4-interpersonal-skills-for-people-and-culture-business-partners-to-grow-and-thrive', path: '/blog/top-4-interpersonal-skills-for-people-and-culture-business-partners-to-grow-and-thrive' },
	{ label: 'Blog: how-to-be-a-better-finance-business-partner', path: '/blog/how-to-be-a-better-finance-business-partner' },
	{ label: 'Blog: power-of-authentic-networking-in-finance-business-partnering', path: '/blog/power-of-authentic-networking-in-finance-business-partnering' },
	{ label: 'Blog: growing-leadership-potential-in-finance-business-partnering', path: '/blog/growing-leadership-potential-in-finance-business-partnering' },
];
// ─────────────────────────────────────────────────────────────────────────────

interface SeoData {
	title: string | null;
	description: string | null;
	ogTitle: string | null;
	ogDescription: string | null;
	ogImage: string | null;
	ogType: string | null;
	canonical: string | null;
	jsonLd: Record<string, unknown> | null;
	h1: string | null;
}

async function getSeoData(page: Page, url: string): Promise<SeoData> {
	await page.goto(url, { waitUntil: 'domcontentloaded' });

	const [title, description, ogTitle, ogDescription, ogImage, ogType, canonical, jsonLdRaw, h1] =
		await Promise.all([
			page.title(),
			page.$eval('meta[name="description"]', (el) => el.getAttribute('content')).catch(() => null),
			page.$eval('meta[property="og:title"]', (el) => el.getAttribute('content')).catch(() => null),
			page.$eval('meta[property="og:description"]', (el) => el.getAttribute('content')).catch(() => null),
			page.$eval('meta[property="og:image"]', (el) => el.getAttribute('content')).catch(() => null),
			page.$eval('meta[property="og:type"]', (el) => el.getAttribute('content')).catch(() => null),
			page.$eval('link[rel="canonical"]', (el) => el.getAttribute('href')).catch(() => null),
			page.$eval('script[type="application/ld+json"]', (el) => el.textContent).catch(() => null),
			page.$eval('h1', (el) => el.textContent?.trim() ?? null).catch(() => null),
		]);

	let jsonLd: Record<string, unknown> | null = null;
	if (jsonLdRaw) {
		try {
			jsonLd = JSON.parse(jsonLdRaw);
		} catch {
			// ignore parse errors
		}
	}

	return { title, description, ogTitle, ogDescription, ogImage, ogType, canonical, jsonLd, h1 };
}

for (const { label, path } of pages) {
	test.describe(`SEO parity: ${label}`, () => {
		let wp: SeoData;
		let local: SeoData;

		test.beforeAll(async ({ browser }) => {
			// Fetch both sites in parallel using separate pages
			const [wpPage, localPage] = await Promise.all([
				browser.newPage(),
				browser.newPage(),
			]);

			[wp, local] = await Promise.all([
				getSeoData(wpPage, `${WP_BASE}${path}`),
				getSeoData(localPage, path),
			]);

			await Promise.all([wpPage.close(), localPage.close()]);
		});

		test('page title matches', () => {
			expect(local.title).toBe(wp.title);
		});

		test('meta description matches', () => {
			expect(local.description).toBe(wp.description);
		});

		test('og:title matches', () => {
			expect(local.ogTitle).toBe(wp.ogTitle);
		});

		test('og:description matches', () => {
			expect(local.ogDescription).toBe(wp.ogDescription);
		});

		test('og:image matches', () => {
			expect(local.ogImage).toBe(wp.ogImage);
		});

		test('og:type matches', () => {
			expect(local.ogType).toBe(wp.ogType);
		});

		test('canonical URL contains path', () => {
			// Only assert the path is present — domain will differ on local
			if (wp.canonical) {
				expect(local.canonical).toContain(path);
			}
		});

		test('h1 text matches', () => {
			expect(local.h1).toBe(wp.h1);
		});

		test('JSON-LD @type matches', () => {
			if (!wp.jsonLd) return; // skip pages where WP has no JSON-LD
			expect(local.jsonLd?.['@type']).toBe(wp.jsonLd['@type']);
		});
	});
}
