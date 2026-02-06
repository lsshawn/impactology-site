<script lang="ts">
	import Icon from '@iconify/svelte';

	interface Props {
		instagramHandle?: string;
	}

	let { instagramHandle = 'impactologyaust' }: Props = $props();

	// Instagram post images - these would be real posts from the Instagram feed
	const instagramPosts = [
		{
			image: '/instagram-1.jpg',
			alt: 'Impactology team workshop session',
			likes: 47
		},
		{
			image: '/instagram-2.jpg',
			alt: 'Leadership development training',
			likes: 62
		},
		{
			image: '/instagram-3.jpg',
			alt: 'Business partnering success story',
			likes: 38
		},
		{
			image: '/instagram-4.jpg',
			alt: 'Team collaboration moment',
			likes: 55
		},
		{
			image: '/instagram-5.jpg',
			alt: 'Impactology event highlight',
			likes: 71
		},
		{
			image: '/instagram-6.jpg',
			alt: 'Client success celebration',
			likes: 44
		}
	];
</script>

<section class="section-dark py-20 md:py-28" data-testid="instagram-section">
	<div class="container-custom">
		<!-- Header -->
		<div class="text-center mb-12">
			<div class="flex items-center justify-center gap-3 mb-4">
				<Icon icon="ph:instagram-logo-fill" class="text-4xl text-primary" />
			</div>
			<h2 class="text-4xl md:text-5xl lg:text-6xl mb-4">FOLLOW US ON INSTAGRAM</h2>
			<a
				href="https://instagram.com/{instagramHandle}"
				target="_blank"
				rel="noopener noreferrer"
				class="text-primary hover:underline text-lg font-medium inline-flex items-center gap-2"
			>
				@{instagramHandle}
				<Icon icon="ph:arrow-square-out" class="text-sm" />
			</a>
		</div>

		<!-- Instagram Grid -->
		<div class="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
			{#each instagramPosts as post, i (i)}
				<a
					href="https://instagram.com/{instagramHandle}"
					target="_blank"
					rel="noopener noreferrer"
					class="instagram-post group relative aspect-square overflow-hidden"
					data-testid="instagram-post-{i}"
				>
					<img
						src={post.image}
						alt={post.alt}
						class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
						loading="lazy"
						onerror={(e) => {
							const img = e.currentTarget as HTMLImageElement;
							img.src = '/icon1.png';
							img.classList.add('p-8', 'bg-neutral', 'opacity-30');
						}}
					/>
					<!-- Hover Overlay -->
					<div
						class="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
					>
						<div class="flex items-center gap-2 text-primary-content">
							<Icon icon="ph:heart-fill" class="text-2xl" />
							<span class="font-bold text-lg">{post.likes}</span>
						</div>
					</div>
				</a>
			{/each}
		</div>

		<!-- Follow Button -->
		<div class="text-center mt-12">
			<a
				href="https://instagram.com/{instagramHandle}"
				target="_blank"
				rel="noopener noreferrer"
				class="btn btn-primary btn-lg uppercase font-bold rounded-none inline-flex items-center gap-3"
			>
				<Icon icon="ph:instagram-logo-fill" class="text-xl" />
				Follow @{instagramHandle}
			</a>
		</div>
	</div>
</section>

<style>
	.instagram-post {
		/* Ensure square aspect ratio */
		aspect-ratio: 1 / 1;
	}
</style>
