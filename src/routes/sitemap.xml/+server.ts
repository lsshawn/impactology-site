import { getAllPosts } from '$lib/content/posts';

const siteUrl = 'https://www.impactology.com.au';

const staticPages = [
	'/',
	'/about/',
	'/programs',
	'/resources/',
	'/blog',
	'/contact/',
	'/gallery',
	'/evolve-book',
	'/impactora',
	'/impactology-live-2020',
	'/amplify-your-impact-program',
	'/business-partnering-impact-program',
	'/finance-business-partnering',
	'/hr-business-partnering',
	'/it-business-partnering',
	'/leadership-development-for-bpos',
	'/leadership-development-program-local-government',
	'/marketing-communications-business-partnering-program',
	'/msp-bp-programs',
	'/procurement-business-partnering',
	'/sales-business-development-client-management-program',
	'/privacy-policy/',
	'/legals1/',
	'/legals1/terms/',
	'/legals1/eula/',
	'/legals1/impactora-privacy/'
];

export function GET() {
	const posts = getAllPosts();

	const pages = [
		...staticPages.map((path) => ({
			loc: `${siteUrl}${path}`,
			priority: path === '/' ? '1.0' : '0.7'
		})),
		...posts.map((post) => ({
			loc: `${siteUrl}/blog/${post.slug}`,
			lastmod: post.date,
			priority: '0.6'
		}))
	];

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
	.map(
		(page) => `  <url>
    <loc>${page.loc}</loc>${page.lastmod ? `\n    <lastmod>${page.lastmod}</lastmod>` : ''}
    <priority>${page.priority}</priority>
  </url>`
	)
	.join('\n')}
</urlset>`;

	return new Response(xml, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=3600'
		}
	});
}
