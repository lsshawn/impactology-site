<script lang="ts">
	import ClientLogos from '$lib/components/ClientLogos.svelte';
	import { fly } from 'svelte/transition';

	const logos = [
		'/client-moss.webp',
		'/client-otto.webp',
		'/client-ot.webp',
		'/client-rba.webp',
		'/client-kh.webp',
		'/client-edgeward.webp',
		'/client-mu.webp',
		'/client-transport.webp',
		'/client-specsavers.webp',
		'/client-msd.webp',
		'/client-lochard.webp'
	];

	function trigger(node: HTMLElement, stateSetter: (v: boolean) => void) {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					stateSetter(true);
					observer.disconnect();
				}
			},
			{ threshold: 0.15 }
		);
		observer.observe(node);
		return { destroy: () => observer.disconnect() };
	}

	let heading = $state(false);
	let logosVisible = $state(false);
</script>

<section class="py-16">
	<div
		class="container-custom"
		use:trigger={(v) => {
			heading = v;
			setTimeout(() => (logosVisible = v), 200);
		}}
	>
		{#if heading}
			<h2
				class="text-4xl md:text-5xl font-bold text-center mb-12"
				in:fly={{ y: 30, duration: 600 }}
			>
				SOME COMPANIES WE'VE PARTNERED WITH
			</h2>
		{/if}
		{#if logosVisible}
			<div in:fly={{ y: 20, duration: 600 }}>
				<ClientLogos {logos} marquee={true} />
			</div>
		{/if}
	</div>
</section>
