<script lang="ts">
	import { fly } from 'svelte/transition';

	interface BenefitItem {
		title: string;
		description: string;
	}

	interface WhyItem {
		title: string;
		description: string;
	}

	interface Props {
		whoShouldAttend: string[];
		teamBenefits: BenefitItem[];
		orgBenefits: BenefitItem[];
		whyDifferent: WhyItem[];
		whyIntro: string;
	}

	let { whoShouldAttend, teamBenefits, orgBenefits, whyDifferent, whyIntro }: Props = $props();

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

	let whoHeading = $state(false);
	let whoGrid = $state(false);
	let benefitsHeading = $state(false);
	let benefitsGrid = $state(false);
	let whyHeading = $state(false);
	let whyGrid = $state(false);
</script>

<!-- Who Should Attend -->
<section
	class="py-20 md:py-28 bg-base-100"
	use:trigger={(v) => {
		whoHeading = v;
		setTimeout(() => (whoGrid = v), 150);
	}}
>
	<div class="container-custom">
		{#if whoHeading}
			<h2
				class="text-4xl md:text-5xl font-bold text-center mb-12"
				in:fly={{ y: 30, duration: 600 }}
			>
				WHO SHOULD ATTEND?
			</h2>
		{/if}
		{#if whoGrid}
			<div
				class="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto"
				in:fly={{ y: 30, duration: 600 }}
			>
				{#each whoShouldAttend as role, i (i)}
					<div class="bg-base-200 px-6 py-4 text-center">
						<p class="font-medium">{role}</p>
					</div>
				{/each}
			</div>
		{/if}
	</div>
</section>

<!-- Program Benefits -->
<section
	class="bg-[#fff000] py-20 md:py-28"
	use:trigger={(v) => {
		benefitsHeading = v;
		setTimeout(() => (benefitsGrid = v), 150);
	}}
>
	<div class="container-custom">
		{#if benefitsHeading}
			<h2
				class="text-4xl md:text-5xl font-bold text-center mb-16"
				in:fly={{ y: 30, duration: 600 }}
			>
				PROGRAM BENEFITS
			</h2>
		{/if}
		{#if benefitsGrid}
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-12" in:fly={{ y: 30, duration: 600 }}>
				<div>
					<h3 class="text-2xl font-bold mb-8 text-center">For Your Team</h3>
					<div class="space-y-4">
						{#each teamBenefits as benefit}
							<div class="flex items-start gap-4 bg-black/10 p-6">
								<span class="text-black mt-1 shrink-0 text-xl">●</span>
								<div>
									<p class="font-bold mb-1">{benefit.title}:</p>
									<p class="text-sm opacity-90">{benefit.description}</p>
								</div>
							</div>
						{/each}
					</div>
				</div>
				<div>
					<h3 class="text-2xl font-bold mb-8 text-center">For Your Organisation</h3>
					<div class="space-y-4">
						{#each orgBenefits as benefit}
							<div class="flex items-start gap-4 bg-black/10 p-6">
								<span class="text-black mt-1 shrink-0 text-xl">●</span>
								<div>
									<p class="font-bold mb-1">{benefit.title}:</p>
									<p class="text-sm opacity-90">{benefit.description}</p>
								</div>
							</div>
						{/each}
					</div>
				</div>
			</div>
		{/if}
	</div>
</section>

<!-- Why Impactology -->
<section
	class="py-20 md:py-28 bg-base-100"
	use:trigger={(v) => {
		whyHeading = v;
		setTimeout(() => (whyGrid = v), 150);
	}}
>
	<div class="container-custom">
		{#if whyHeading}
			<div class="text-center mb-12" in:fly={{ y: 30, duration: 600 }}>
				<h2 class="text-4xl md:text-5xl font-bold mb-6">WHY IMPACTOLOGY?</h2>
				<p class="text-lg max-w-3xl mx-auto opacity-80">{whyIntro}</p>
			</div>
		{/if}
		{#if whyGrid}
			<div
				class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
				in:fly={{ y: 30, duration: 600 }}
			>
				{#each whyDifferent as item}
					<div class="flex items-start gap-4 border border-base-300 p-6">
						<span class="text-primary mt-1 shrink-0 text-xl">★</span>
						<div>
							<p class="font-bold mb-1">{item.title}:</p>
							<p class="text-sm opacity-80">{item.description}</p>
						</div>
					</div>
				{/each}
			</div>
		{/if}
	</div>
</section>
