<script lang="ts">
	import SEO from '$lib/components/SEO.svelte';
	import Icon from '@iconify/svelte';

	interface BlogPost {
		id: number;
		slug: string;
		title: string;
		excerpt: string;
		date: string;
		featuredImage: string;
		link: string;
	}

	const blogPosts: BlogPost[] = [
		{
			id: 7605,
			slug: 'build-effective-business-partner-relationships',
			title: 'Building Effective Business Partner Relationships: A Practical Guide',
			excerpt:
				"Across finance, HR, IT, procurement, and operations, the role of professionals has expanded well beyond support functions. They're being called on to become trusted business partners, helping to guide decisions, align resources, and influence the direction of the business.",
			date: '2025-11-04',
			featuredImage:
				'https://impactology.com.au/wp-content/uploads/Building-Effective-Business-Partner-Relationships-A-Practical-Guide-768x511.jpg',
			link: '/blog/build-effective-business-partner-relationships'
		},
		{
			id: 7597,
			slug: 'rise-of-the-it-business-partners',
			title: 'The Rise of the IT Business Partner: Bridging Tech, Strategy and Advice',
			excerpt:
				'Technology has always been the growth engine room of modern business. But the expectations placed on IT teams have shifted dramatically. No longer is it enough to "keep the systems running in the background". Today, organisations want IT leaders who can sit at the planning and strategy table.',
			date: '2025-10-31',
			featuredImage:
				'https://impactology.com.au/wp-content/uploads/The-Rise-of-the-IT-Business-Partner-768x511.jpg',
			link: '/blog/rise-of-the-it-business-partners'
		},
		{
			id: 7588,
			slug: 'drive-results-with-business-partnering',
			title: '5 Reminders to Effective Business Partnering That Drive Results',
			excerpt:
				"Great teams aren't built in isolation. The best-performing organisations know that collaboration between departments is what transforms strategy into action and challenges into progress. But effective business partnering isn't just about sharing information or attending cross-functional meetings.",
			date: '2025-10-28',
			featuredImage:
				'https://impactology.com.au/wp-content/uploads/5-Reminders-to-Effective-Business-Partnering-That-Drive-Results-768x511.jpg',
			link: '/blog/drive-results-with-business-partnering'
		},
		{
			id: 7557,
			slug: 'agile-client-centric-bpo-teams',
			title:
				'Adapting to Change: Building Agile and Client-Centric BPO Teams in a Rapidly Evolving Market',
			excerpt:
				'The Business Process Outsourcing (BPO) industry is constantly changing. Shifting client demands, disruptive technologies, and evolving market trends are the norm, not the exception. For BPO leaders, this creates a dual challenge: staying agile while delivering consistent, high-quality service.',
			date: '2025-07-15',
			featuredImage:
				'https://impactology.com.au/wp-content/uploads/Building-Agile-and-Client-Centric-BPO-Teams-768x511.jpg',
			link: '/blog/agile-client-centric-bpo-teams'
		},
		{
			id: 5597,
			slug: 'kpis-for-high-performing-business-partnering-teams',
			title:
				'Key Performance Indicators for Team Leaders: Essential Metrics for Business Partnering Success',
			excerpt:
				"This has been one of our most-read articles among team leaders and business partners, and for good reason. If you're leading a team or driving strategic partnerships, you already know that measuring progress matters. Key Performance Indicators, or KPIs, are crucial tools to guide a team leader.",
			date: '2025-07-03',
			featuredImage:
				'https://impactology.com.au/wp-content/uploads/Key-Performance-Indicators-for-Team-Leaders-768x511.jpg',
			link: '/blog/kpis-for-high-performing-business-partnering-teams'
		},
		{
			id: 7223,
			slug: 'top-5-growth-mindset-tips-every-finance-team-needs-for-business-partnering-success',
			title: 'Top 5 Growth Mindset Tips Every Finance Team Needs for Business Partnering Success',
			excerpt:
				"Today's finance professionals are no longer just stewards of data. They are navigators of business performance, strategic advisors, and culture builders. But excelling in this broader role isn't simply about gaining new technical skills, it's about how we think.",
			date: '2025-05-15',
			featuredImage:
				'https://impactology.com.au/wp-content/uploads/Growth-Mindset-Tips-Finance-Team-768x511.jpg',
			link: '/blog/top-5-growth-mindset-tips-every-finance-team-needs-for-business-partnering-success'
		},
		{
			id: 7216,
			slug: 'local-government-strategies-trust-collaboration',
			title:
				'The 3 Strategies for Local Government Leaders to Drive Collaboration, Build Trust, and Enhance Commercial Acumen in Teams',
			excerpt:
				'Local government leaders face a unique and demanding challenge: delivering exceptional services to their communities while managing diverse teams, tight budgets, and complex stakeholder relationships. Success in this environment requires a workforce that is not only skilled but also collaborative.',
			date: '2025-04-22',
			featuredImage:
				'https://impactology.com.au/wp-content/uploads/Local-Government-Strategies-768x511.jpg',
			link: '/blog/local-government-strategies-trust-collaboration'
		},
		{
			id: 7209,
			slug: 'high-performing-cross-functional-bpo-teams',
			title:
				'Driving Operational Excellence: How BPO Leaders Can Build High-Performing, Cross-Functional Teams',
			excerpt:
				'For many large enterprise businesses worldwide, Business Process Outsourcing (BPO), operational excellence is the backbone of success. BPO leaders are tasked with delivering seamless service, maintaining efficiency, and exceeding client expectations—all while managing large, diverse, and often geographically dispersed teams.',
			date: '2025-04-08',
			featuredImage:
				'https://impactology.com.au/wp-content/uploads/BPO-Cross-Functional-Teams-768x511.jpg',
			link: '/blog/high-performing-cross-functional-bpo-teams'
		},
		{
			id: 7204,
			slug: 'transform-bpo-teams-leadership-business-partnering',
			title:
				'From Burnout to Brilliance: Empowering BPO Teams Through Leadership Development and Business Partnering',
			excerpt:
				'The business process outsourcing (BPO) industry is known for its fast-paced, high-pressure environment. Large teams often manage cross-functional tasks and represent clients on the front lines, so the stakes are high. The need to meet client expectations, adapt to changing demands, and handle large volumes of work can lead to employee burnout.',
			date: '2025-03-25',
			featuredImage:
				'https://impactology.com.au/wp-content/uploads/BPO-Leadership-Development-768x511.jpg',
			link: '/blog/transform-bpo-teams-leadership-business-partnering'
		}
	];

	function formatDate(dateString: string): string {
		const date = new Date(dateString);
		return date.toLocaleDateString('en-AU', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	}
</script>

<SEO
	title="Blog | Impactology"
	description="Insights, strategies, and practical guides for business partners, team leaders, and professionals looking to make a meaningful impact in their organisations."
	ogTitle="Blog | Impactology"
	ogDescription="Insights, strategies, and practical guides for business partners, team leaders, and professionals looking to make a meaningful impact."
	ogImage="https://impactology.com.au/logo.png"
	ogType="website"
	canonical="https://impactology.com.au/blog"
	jsonLd={{
		'@context': 'https://schema.org',
		'@type': 'Blog',
		name: 'Impactology Blog',
		description: 'Insights and strategies for business partners and team leaders.',
		url: 'https://impactology.com.au/blog',
		publisher: {
			'@type': 'Organization',
			name: 'Impactology',
			logo: {
				'@type': 'ImageObject',
				url: 'https://impactology.com.au/logo.png'
			}
		}
	}}
/>

<!-- Hero Section -->
<section class="section-yellow py-16 md:py-24">
	<div class="container-custom">
		<h2 class="mb-4">BLOG</h2>
		<p class="text-xl md:text-2xl max-w-3xl">
			Insights, strategies, and practical guides for business partners and team leaders looking to
			make a meaningful impact.
		</p>
	</div>
</section>

<!-- Blog Posts Grid -->
<section class="py-16 md:py-20 bg-base-100">
	<div class="container-custom">
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			{#each blogPosts as post (post.id)}
				<article class="group flex flex-col h-full">
					<a href={post.link} class="block overflow-hidden mb-4">
						<img
							src={post.featuredImage}
							alt={post.title}
							class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
							loading="lazy"
							decoding="async"
						/>
					</a>
					<div class="flex flex-col flex-1">
						<time class="text-sm text-base-content/60 mb-2" datetime={post.date}>
							{formatDate(post.date)}
						</time>
						<h3 class="text-lg font-bold mb-3 leading-tight">
							<a href={post.link} class="hover:text-primary transition-colors duration-200">
								{post.title}
							</a>
						</h3>
						<p class="text-base-content/80 text-sm mb-4 flex-1 line-clamp-3">
							{post.excerpt}
						</p>
						<a
							href={post.link}
							class="inline-flex items-center gap-2 font-bold text-sm uppercase hover:gap-3 transition-all duration-200"
						>
							Read More
							<Icon icon="ph:arrow-right-bold" class="text-base" />
						</a>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="section-dark py-16 md:py-20">
	<div class="container-custom text-center">
		<h2 class="mb-6">READY TO MAKE AN IMPACT?</h2>
		<p class="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
			Discover how our leadership development programs can transform your team's performance and
			business partnering capabilities.
		</p>
		<a href="/contact" class="btn btn-primary btn-lg uppercase font-bold rounded-none">
			Get in Touch
		</a>
	</div>
</section>

<style>
	.line-clamp-3 {
		display: -webkit-box;
		-webkit-line-clamp: 3;
		line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
</style>
