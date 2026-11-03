<script lang="ts">
	import Icon from '@iconify/svelte';
	import type { GalleryImage } from '$lib/content/gallery';

	let { photos }: { photos: GalleryImage[] } = $props();

	let track: HTMLDivElement;
	let paused = false;

	function step(dir: 1 | -1) {
		const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
		if (dir === 1 && atEnd) track.scrollTo({ left: 0, behavior: 'smooth' });
		else track.scrollBy({ left: dir * track.clientWidth * 0.8, behavior: 'smooth' });
	}

	// Moves on its own every 4s; stops while the visitor hovers or touches it.
	function autoplay(node: HTMLElement) {
		if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
		const id = setInterval(() => !paused && step(1), 4000);
		return { destroy: () => clearInterval(id) };
	}
</script>

<div
	class="relative"
	use:autoplay
	role="region"
	aria-label="Photos of our clients"
	onmouseenter={() => (paused = true)}
	onmouseleave={() => (paused = false)}
	ontouchstart={() => (paused = true)}
	onfocusin={() => (paused = true)}
	onfocusout={() => (paused = false)}
>
	<div
		bind:this={track}
		class="flex snap-x snap-mandatory gap-2 overflow-x-auto scroll-smooth"
		style="scrollbar-width: none;"
	>
		{#each photos as photo (photo.src)}
			<img
				src={photo.src}
				alt={photo.alt}
				width="320"
				height="320"
				class="h-64 w-64 shrink-0 snap-start object-cover md:h-80 md:w-80"
				loading="lazy"
			/>
		{/each}
	</div>
	<button
		type="button"
		onclick={() => step(-1)}
		class="btn btn-circle btn-secondary absolute top-1/2 left-4 -translate-y-1/2 shadow-lg"
		aria-label="Previous photos"
	>
		<Icon icon="ph:arrow-left-bold" class="text-xl" />
	</button>
	<button
		type="button"
		onclick={() => step(1)}
		class="btn btn-circle btn-secondary absolute top-1/2 right-4 -translate-y-1/2 shadow-lg"
		aria-label="Next photos"
	>
		<Icon icon="ph:arrow-right-bold" class="text-xl" />
	</button>
</div>
