<script lang="ts">
	import ClientLogos from '$lib/components/ClientLogos.svelte';

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
		<h2
			class="reveal-y text-4xl md:text-5xl font-bold text-center mb-12"
			class:visible={heading}
		>
			SOME COMPANIES WE'VE PARTNERED WITH
		</h2>
		<div class="reveal-y" class:visible={logosVisible} style="transition-delay: 200ms">
			<ClientLogos {logos} marquee={true} />
		</div>
	</div>
</section>
