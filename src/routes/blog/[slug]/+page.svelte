<script lang="ts">
	import SEO from '$lib/components/SEO.svelte';
	import Icon from '@iconify/svelte';
	import type { BlogPost } from '$lib/data/blog-posts';

	let { data } = $props();
	let post: BlogPost | null = $derived(data.post);

	function formatDate(dateString: string): string {
		const date = new Date(dateString);
		return date.toLocaleDateString('en-AU', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	}
</script>

{#if post}
	<SEO
		title="{post.title} | Impactology"
		description={post.excerpt}
		ogTitle={post.title}
		ogDescription={post.excerpt}
		ogImage={post.featuredImage}
		ogType="article"
		canonical="https://impactology.com.au/blog/{post.slug}"
		jsonLd={{
			'@context': 'https://schema.org',
			'@type': 'BlogPosting',
			headline: post.title,
			description: post.excerpt,
			image: post.featuredImage,
			datePublished: post.date,
			dateModified: post.date,
			author: {
				'@type': 'Person',
				name: post.author
			},
			publisher: {
				'@type': 'Organization',
				name: 'Impactology',
				logo: {
					'@type': 'ImageObject',
					url: 'https://impactology.com.au/logo.png'
				}
			},
			mainEntityOfPage: {
				'@type': 'WebPage',
				'@id': `https://impactology.com.au/blog/${post.slug}`
			}
		}}
	/>

	<!-- Hero Section with Featured Image -->
	<section class="relative min-h-[50vh] md:min-h-[60vh] flex items-end">
		<div class="absolute inset-0">
			<img
				src={post.featuredImage}
				alt={post.title}
				class="w-full h-full object-cover"
				loading="eager"
				decoding="async"
				fetchpriority="high"
			/>
			<div
				class="absolute inset-0 bg-gradient-to-t from-neutral/90 via-neutral/50 to-transparent"
			></div>
		</div>
		<div class="container-custom relative z-10 pb-12 md:pb-16">
			<!-- Breadcrumb -->
			<nav class="mb-6" aria-label="Breadcrumb">
				<ol class="flex items-center gap-2 text-sm text-neutral-content/80">
					<li>
						<a href="/" class="hover:text-primary transition-colors">Home</a>
					</li>
					<li>
						<Icon icon="ph:caret-right" class="text-xs" />
					</li>
					<li>
						<a href="/blog" class="hover:text-primary transition-colors">Blog</a>
					</li>
					<li>
						<Icon icon="ph:caret-right" class="text-xs" />
					</li>
					<li class="text-neutral-content/60 truncate max-w-[200px] md:max-w-none">
						{post.title}
					</li>
				</ol>
			</nav>

			<h1 class="text-3xl md:text-5xl lg:text-6xl font-bold text-neutral-content max-w-4xl">
				{post.title}
			</h1>
		</div>
	</section>

	<!-- Article Content -->
	<article class="py-12 md:py-16 bg-base-100">
		<div class="container-custom">
			<div class="max-w-3xl mx-auto">
				<!-- Author and Date -->
				<div class="flex items-center gap-4 mb-8 pb-8 border-b border-base-300">
					<div class="avatar placeholder">
						<div
							class="bg-primary text-primary-content rounded-full w-12 h-12 flex items-center justify-center"
						>
							<span class="text-lg font-bold">{post.author.charAt(0)}</span>
						</div>
					</div>
					<div>
						<p class="font-bold">{post.author}</p>
						<time class="text-sm text-base-content/60" datetime={post.date}>
							{formatDate(post.date)}
						</time>
					</div>
				</div>

				<!-- Article Body -->
				<div class="prose prose-lg max-w-none">
					{@html post.content}
				</div>

				<!-- Share Section -->
				<div class="mt-12 pt-8 border-t border-base-300">
					<p class="font-bold mb-4 uppercase text-sm">Share this article</p>
					<div class="flex gap-3">
						<a
							href="https://www.linkedin.com/sharing/share-offsite/?url=https://impactology.com.au/blog/{post.slug}"
							target="_blank"
							rel="noopener noreferrer"
							class="btn btn-square btn-outline rounded-none"
							aria-label="Share on LinkedIn"
						>
							<Icon icon="ph:linkedin-logo-bold" class="text-xl" />
						</a>
						<a
							href="https://twitter.com/intent/tweet?url=https://impactology.com.au/blog/{post.slug}&text={encodeURIComponent(
								post.title
							)}"
							target="_blank"
							rel="noopener noreferrer"
							class="btn btn-square btn-outline rounded-none"
							aria-label="Share on Twitter"
						>
							<Icon icon="ph:x-logo-bold" class="text-xl" />
						</a>
						<a
							href="mailto:?subject={encodeURIComponent(
								post.title
							)}&body=Check out this article: https://impactology.com.au/blog/{post.slug}"
							class="btn btn-square btn-outline rounded-none"
							aria-label="Share via Email"
						>
							<Icon icon="ph:envelope-bold" class="text-xl" />
						</a>
					</div>
				</div>

				<!-- Back to Blog -->
				<div class="mt-8">
					<a
						href="/blog"
						class="inline-flex items-center gap-2 font-bold text-sm uppercase hover:gap-3 transition-all duration-200"
					>
						<Icon icon="ph:arrow-left-bold" class="text-base" />
						Back to Blog
					</a>
				</div>
			</div>
		</div>
	</article>

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
{:else}
	<SEO
		title="Post Not Found | Impactology"
		description="The blog post you're looking for could not be found."
		noindex={true}
	/>

	<section class="py-24 md:py-32 bg-base-100">
		<div class="container-custom text-center">
			<Icon icon="ph:article" class="text-6xl text-base-content/30 mb-6" />
			<h1 class="text-3xl md:text-4xl font-bold mb-4">Post Not Found</h1>
			<p class="text-lg text-base-content/70 mb-8">
				The blog post you're looking for doesn't exist or has been moved.
			</p>
			<a href="/blog" class="btn btn-primary btn-lg uppercase font-bold rounded-none">
				Browse All Posts
			</a>
		</div>
	</section>
{/if}

<style>
	/* Global styles for prose content rendered via @html */
	:global(.prose h2) {
		font-family: var(--font-heading);
		text-transform: uppercase;
		font-size: 1.75rem;
		margin-top: 2.5rem;
		margin-bottom: 1rem;
	}

	:global(.prose h3) {
		font-family: var(--font-heading);
		text-transform: uppercase;
		font-size: 1.25rem;
		margin-top: 2rem;
		margin-bottom: 0.75rem;
	}

	:global(.prose h4) {
		font-family: var(--font-heading);
		text-transform: uppercase;
		font-size: 1.1rem;
		margin-top: 1.5rem;
		margin-bottom: 0.5rem;
	}

	:global(.prose p) {
		margin-bottom: 1.25rem;
		line-height: 1.8;
	}

	:global(.prose ul),
	:global(.prose ol) {
		margin-bottom: 1.25rem;
		padding-left: 1.5rem;
	}

	:global(.prose li) {
		margin-bottom: 0.5rem;
		line-height: 1.7;
	}

	:global(.prose a) {
		color: var(--color-primary);
		text-decoration: underline;
		text-underline-offset: 2px;
	}

	:global(.prose a:hover) {
		text-decoration-thickness: 2px;
	}

	:global(.prose strong) {
		font-weight: 700;
	}
</style>
