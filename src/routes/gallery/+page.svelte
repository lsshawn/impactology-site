<script lang="ts">
	import SEO from '$lib/components/SEO.svelte';
	import Icon from '@iconify/svelte';
	import { page } from '$app/state';
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';

	interface GalleryImage {
		src: string;
		alt: string;
		caption?: string;
	}

	const galleryImages: GalleryImage[] = [
		{
			src: '/client-photo-1.jpg',
			alt: 'Impactology workshop session',
			caption: 'Team workshop in action'
		},
		{
			src: '/client-photo-2.jpg',
			alt: 'Business partnering program',
			caption: 'Collaborative learning experience'
		},
		{
			src: '/client-photo-3.jpg',
			alt: 'Leadership development session',
			caption: 'Building leadership skills'
		},
		{
			src: '/client-photo-4.jpg',
			alt: 'Impact program participants',
			caption: 'Engaged participants driving change'
		},
		{
			src: '/client-photo-5.jpg',
			alt: 'Strategic planning workshop',
			caption: 'Strategic thinking in practice'
		},
		{
			src: '/client-photo-6.jpg',
			alt: 'Team collaboration activity',
			caption: 'Teams creating impact together'
		}
	];

	// URL-based lightbox state
	let selectedIndex = $derived(
		page.url.searchParams.has('photo')
			? parseInt(page.url.searchParams.get('photo') || '0', 10)
			: null
	);

	let isLightboxOpen = $derived(selectedIndex !== null && !isNaN(selectedIndex));

	let currentImage = $derived(
		isLightboxOpen && selectedIndex !== null ? galleryImages[selectedIndex] : null
	);

	function openLightbox(index: number) {
		const url = new URL(page.url);
		url.searchParams.set('photo', index.toString());
		goto(resolve(url.pathname + url.search), { replaceState: false, noScroll: true });
	}

	function closeLightbox() {
		const url = new URL(page.url);
		url.searchParams.delete('photo');
		goto(resolve(url.pathname + url.search), { replaceState: false, noScroll: true });
	}

	function navigatePrev() {
		if (selectedIndex === null) return;
		const newIndex = selectedIndex === 0 ? galleryImages.length - 1 : selectedIndex - 1;
		openLightbox(newIndex);
	}

	function navigateNext() {
		if (selectedIndex === null) return;
		const newIndex = selectedIndex === galleryImages.length - 1 ? 0 : selectedIndex + 1;
		openLightbox(newIndex);
	}

	function handleKeydown(e: KeyboardEvent) {
		if (!isLightboxOpen) return;
		if (e.key === 'Escape') closeLightbox();
		if (e.key === 'ArrowLeft') navigatePrev();
		if (e.key === 'ArrowRight') navigateNext();
	}
</script>

<svelte:window onkeydown={handleKeydown} />

<SEO
	title="Gallery | Impactology"
	description="Browse photos from Impactology workshops, programs, and events. See our teams in action creating meaningful business impact."
	ogTitle="Gallery | Impactology"
	ogDescription="Browse photos from Impactology workshops, programs, and events."
	ogImage="/client-photo-1.jpg"
	ogType="website"
	canonical="https://impactology.com.au/gallery"
	jsonLd={{
		'@context': 'https://schema.org',
		'@type': 'ImageGallery',
		name: 'Impactology Photo Gallery',
		description:
			'Photos from Impactology workshops, leadership development programs, and business partnering events.',
		url: 'https://impactology.com.au/gallery',
		publisher: {
			'@type': 'Organization',
			name: 'Impactology',
			url: 'https://impactology.com.au'
		}
	}}
/>

<!-- Hero Section -->
<section class="section-yellow py-20 md:py-28">
	<div class="container-custom text-center">
		<h1 class="mb-6">GALLERY</h1>
		<p class="text-lg md:text-xl max-w-2xl mx-auto">
			Capturing moments of transformation, collaboration, and impact from our programs and events.
		</p>
	</div>
</section>

<!-- Gallery Grid -->
<section class="py-16 md:py-24 bg-base-100">
	<div class="container-custom">
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each galleryImages as image, index (image.src)}
				<button
					type="button"
					class="group relative aspect-[4/3] overflow-hidden bg-base-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
					onclick={() => openLightbox(index)}
					aria-label="View {image.alt}"
				>
					<img
						src={image.src}
						alt={image.alt}
						class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
						loading="lazy"
						decoding="async"
					/>
					<!-- Overlay -->
					<div
						class="absolute inset-0 bg-neutral/0 group-hover:bg-neutral/40 transition-colors duration-300 flex items-center justify-center"
					>
						<div
							class="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-neutral-content"
						>
							<Icon icon="ph:magnifying-glass-plus-bold" class="text-4xl" />
						</div>
					</div>
					<!-- Caption -->
					{#if image.caption}
						<div
							class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-neutral/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300"
						>
							<p class="text-neutral-content text-sm font-medium">{image.caption}</p>
						</div>
					{/if}
				</button>
			{/each}
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="section-dark py-16 md:py-20">
	<div class="container-custom text-center">
		<h2 class="text-3xl md:text-4xl mb-6">WANT TO BE PART OF OUR STORY?</h2>
		<p class="text-lg mb-8 max-w-xl mx-auto opacity-90">
			Join our programs and create your own impact moments.
		</p>
		<a
			href={resolve('/contact')}
			class="btn btn-primary btn-lg uppercase font-bold rounded-none inline-flex items-center gap-2"
		>
			GET IN TOUCH
			<Icon icon="ph:arrow-right-bold" class="text-lg" />
		</a>
	</div>
</section>

<!-- Lightbox Modal -->
{#if isLightboxOpen && currentImage}
	<div
		class="fixed inset-0 z-50 flex items-center justify-center"
		role="dialog"
		aria-modal="true"
		aria-label="Image lightbox"
	>
		<!-- Backdrop -->
		<button
			type="button"
			class="absolute inset-0 bg-neutral/95 cursor-default"
			onclick={closeLightbox}
			aria-label="Close lightbox"
		></button>

		<!-- Close button -->
		<button
			type="button"
			class="absolute top-4 right-4 z-10 btn btn-circle btn-ghost text-neutral-content hover:bg-neutral-content/10"
			onclick={closeLightbox}
			aria-label="Close"
		>
			<Icon icon="ph:x-bold" class="text-2xl" />
		</button>

		<!-- Navigation: Previous -->
		<button
			type="button"
			class="absolute left-4 z-10 btn btn-circle btn-ghost text-neutral-content hover:bg-neutral-content/10"
			onclick={navigatePrev}
			aria-label="Previous image"
		>
			<Icon icon="ph:caret-left-bold" class="text-3xl" />
		</button>

		<!-- Image container -->
		<div class="relative z-10 max-w-5xl max-h-[85vh] mx-4">
			<img
				src={currentImage.src}
				alt={currentImage.alt}
				class="max-w-full max-h-[85vh] object-contain"
			/>
			{#if currentImage.caption}
				<div
					class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-neutral/80 to-transparent"
				>
					<p class="text-neutral-content text-center">{currentImage.caption}</p>
				</div>
			{/if}
		</div>

		<!-- Navigation: Next -->
		<button
			type="button"
			class="absolute right-4 z-10 btn btn-circle btn-ghost text-neutral-content hover:bg-neutral-content/10"
			onclick={navigateNext}
			aria-label="Next image"
		>
			<Icon icon="ph:caret-right-bold" class="text-3xl" />
		</button>

		<!-- Image counter -->
		<div class="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 text-neutral-content text-sm">
			{(selectedIndex ?? 0) + 1} / {galleryImages.length}
		</div>
	</div>
{/if}
