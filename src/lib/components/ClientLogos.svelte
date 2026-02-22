<script lang="ts">
	import Icon from '@iconify/svelte';

	type Props = {
		logos?: string[];
		carousel?: boolean;
		marquee?: boolean;
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

	let { logos = defaultLogos, carousel = false, marquee = false, class: className = '' }: Props =
		$props();
</script>

{#if marquee}
	<!-- Infinite sushi-train marquee: right → left, seamless loop, no snap -->
	<div class="overflow-hidden {className}" style="mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%); -webkit-mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);">
		<div class="marquee-track flex items-center gap-16 py-4" style="width: max-content;">
			<!-- Two identical sets so the loop is seamless -->
			{#each [logos, logos] as set}
				<div class="flex items-center gap-16 shrink-0" aria-hidden={set === logos ? undefined : 'true'}>
					{#each set as logo}
						<div class="flex items-center justify-center shrink-0">
							<img src={logo} alt="Client logo" class="max-h-14 w-auto object-contain" loading="lazy" />
						</div>
					{/each}
				</div>
			{/each}
		</div>
	</div>
{:else if carousel}
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
			{#each logos as logo}
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

<style>
	.marquee-track {
		animation: marquee 30s linear infinite;
		/* pause on hover */
	}

	.marquee-track:hover {
		animation-play-state: paused;
	}

	@keyframes marquee {
		0% {
			transform: translateX(0);
		}
		100% {
			/* Shift exactly one full set width — since both sets are equal, this is 50% of the track */
			transform: translateX(-50%);
		}
	}
</style>
