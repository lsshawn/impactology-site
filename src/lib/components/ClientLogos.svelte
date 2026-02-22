<script lang="ts">
	import Icon from '@iconify/svelte';

	type Props = {
		logos?: string[];
		carousel?: boolean;
		class?: string;
	};

	const defaultLogos = [
		'/client-moss.jpeg',
		'/client-otto.png',
		'/client-ot.png',
		'/client-rba.png',
		'/client-kh.png',
		'/client-edgeward.png',
		'/client-mu.png',
		'/client-transport.png',
		'/client-specsavers.png',
		'/client-msd.png',
		'/client-lochard.png'
	];

	let { logos = defaultLogos, carousel = false, class: className = '' }: Props = $props();
</script>

{#if carousel}
	<div class="relative group/carousel {className}">
		<!-- Left Arrow -->
		<button
			onclick={() => {
				const el = document.getElementById('client-logos-carousel');
				if (el) el.scrollBy({ left: -el.clientWidth * 0.75, behavior: 'smooth' });
			}}
			class="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-10 btn btn-secondary btn-circle shadow-lg opacity-0 group-hover/carousel:opacity-100 transition-opacity"
			aria-label="Scroll left"
		>
			<Icon icon="ph:arrow-left-bold" class="text-xl" />
		</button>

		<div
			id="client-logos-carousel"
			class="flex overflow-x-auto scroll-smooth gap-8 items-center py-6 px-4"
			style="scrollbar-width: none;"
		>
			{#each logos as logo, i}
				<div class="flex items-center justify-center shrink-0 px-4">
					<img src={logo} alt="Client logo" class="max-h-14 w-auto object-contain" loading="lazy" />
				</div>
			{/each}
		</div>

		<!-- Right Arrow -->
		<button
			onclick={() => {
				const el = document.getElementById('client-logos-carousel');
				if (el) el.scrollBy({ left: el.clientWidth * 0.75, behavior: 'smooth' });
			}}
			class="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-10 btn btn-secondary btn-circle shadow-lg opacity-0 group-hover/carousel:opacity-100 transition-opacity"
			aria-label="Scroll right"
		>
			<Icon icon="ph:arrow-right-bold" class="text-xl" />
		</button>
	</div>
{:else}
	<div class="grid grid-cols-3 md:grid-cols-6 gap-8 items-center {className}">
		{#each logos as logo}
			<div class="flex items-center justify-center p-4">
				<img src={logo} alt="Client logo" class="max-h-14 w-auto object-contain" loading="lazy" />
			</div>
		{/each}
	</div>
{/if}
