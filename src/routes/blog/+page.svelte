<script lang="ts">
	import SEO from '$lib/components/SEO.svelte';
	import Icon from '@iconify/svelte';
	import { getAllBlogPosts } from '$lib/data/blog-posts';

	const blogPosts = getAllBlogPosts();

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
					<a href="/blog/{post.slug}" class="block overflow-hidden mb-4">
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
							<a href="/blog/{post.slug}" class="hover:text-primary transition-colors duration-200">
								{post.title}
							</a>
						</h3>
						<p class="text-base-content/80 text-sm mb-4 flex-1 line-clamp-3">
							{post.excerpt}
						</p>
						<a
							href="/blog/{post.slug}"
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
