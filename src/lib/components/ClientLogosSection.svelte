<script lang="ts">
	import ClientLogos from '$lib/components/ClientLogos.svelte';


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

<section class="py-16" style="min-height: 220px;">
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
		<div class="reveal-y" class:visible={logosVisible} style="transition-delay: 200ms; min-height: 56px;">
			<ClientLogos marquee={true} />
		</div>
	</div>
</section>
