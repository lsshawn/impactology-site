<script lang="ts">
	import SEO from '$lib/components/SEO.svelte';
	import ContactForm from '$lib/components/ContactForm.svelte';
	import ClientLogos from '$lib/components/ClientLogos.svelte';
	import { fly } from 'svelte/transition';

	// Trigger action — fires immediately if already in viewport, else waits for scroll
	function trigger(node: HTMLElement, stateSetter: (v: boolean) => void) {
		let observer: IntersectionObserver;

		function startObserving() {
			observer = new IntersectionObserver(
				([entry]) => {
					if (entry.isIntersecting) {
						stateSetter(true);
						observer.disconnect();
					}
				},
				{ threshold: 0.15 }
			);
			observer.observe(node);
		}

		// Always start observing immediately — if in viewport it fires right away
		startObserving();

		return { destroy: () => observer?.disconnect() };
	}

	const clientLogos = [
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

	// Per-block reveal states
	let heroVisible = $state(true);
	let bpipImg = $state(false);
	let bpipText = $state(false);
	let amplifyText = $state(false);
	let amplifyImg = $state(false);
	let clientsHeading = $state(false);
	let clientsLogos = $state(false);
	let connectHeading = $state(false);
	let connectForm = $state(false);
</script>

<SEO
	title="Business Partnering Development Programs | Impactology"
	description="Choose your journey. Impactology's business partnering development programs help teams think strategically, build relationships and create lasting impact."
	ogTitle="Business Partnering Development Programs | Impactology"
	ogDescription="Together let's create an impact path. Choose your journey with Impactology's suite of business partnering programs."
	ogImage="https://impactology.com.au/icon1.png"
	ogType="website"
	canonical="https://impactology.com.au/programs"
	jsonLd={{
		'@context': 'https://schema.org',
		'@type': 'ItemList',
		name: 'Business Partnering Development Programs',
		description: "Impactology's suite of business partnering development programs",
		provider: {
			'@type': 'Organization',
			name: 'Impactology',
			url: 'https://impactology.com.au'
		}
	}}
/>

<!-- Hero Section -->
<section
	class="section-dark py-28 md:py-36 relative overflow-hidden bg-cover bg-center"
	style="background-image: url('/programs-hero-bg.webp');"
>
	<div class="absolute inset-0 bg-neutral/80"></div>
	{#if heroVisible}
		<div
			class="container-custom relative z-10 text-center"
			transition:fly={{ y: 30, duration: 700 }}
		>
			<h1 class="text-5xl md:text-6xl lg:text-6xl mb-6 leading-none text-neutral-content font-bold">
				BUSINESS PARTNERING DEVELOPMENT Programs
			</h1>
			<div class="border-t-2 border-primary w-24 mb-8 mx-auto"></div>
			<p class="text-xl md:text-2xl font-medium opacity-90 text-neutral-content">
				Together Lets Create an Impact Path. Choose Your Journey.
			</p>
		</div>
	{/if}
</section>

<!-- BPIP Program — image left, text right -->
<section
	class="py-20 md:py-28 bg-base-100"
	use:trigger={(v) => {
		bpipImg = v;
		setTimeout(() => (bpipText = v), 150);
	}}
>
	<div class="container-custom">
		<div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
			{#if bpipImg}
				<div class="flex justify-center" transition:fly={{ x: -30, duration: 600 }}>
					<img
						src="/programs-bpip.webp"
						alt="Business Partnering IMPACT Program"
						class="w-64 h-64 object-contain"
					/>
				</div>
			{/if}
			{#if bpipText}
				<div transition:fly={{ x: 30, duration: 600 }}>
					<h2 class="text-4xl md:text-5xl mb-6 leading-tight font-bold">
						Business Partnering IMPACT Program
					</h2>
					<p class="text-lg leading-relaxed mb-8 opacity-80">
						Designed for all business partners who are ready to make an impact.
					</p>
					<a href="/business-partnering-impact-program">
						<img src="/programs-know-more.webp" alt="Know More" class="h-12 w-auto" />
					</a>
				</div>
			{/if}
		</div>
	</div>
</section>

<!-- AMPLIFY Program — text left, image right -->
<section
	class="py-20 md:py-28 section-dark"
	use:trigger={(v) => {
		amplifyText = v;
		setTimeout(() => (amplifyImg = v), 150);
	}}
>
	<div class="container-custom">
		<div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
			{#if amplifyText}
				<div transition:fly={{ x: -30, duration: 600 }}>
					<h2 class="text-4xl md:text-5xl mb-6 leading-tight text-white font-bold">
						AMPLIFY YOUR IMPACT PROGRAM
					</h2>
					<p class="text-lg leading-relaxed mb-8 opacity-80 text-white">
						A follow-up to the Business Partnering IMPACT Program, this Program Experience is
						designed to prepare your Business Partners for change and drive transformation.
					</p>
					<a href="/amplify-your-impact-program">
						<img src="/programs-know-more.webp" alt="Know More" class="h-12 w-auto" />
					</a>
				</div>
			{/if}
			{#if amplifyImg}
				<div class="flex justify-center" transition:fly={{ x: 30, duration: 600 }}>
					<img
						src="/programs-amplify.webp"
						alt="AMPLIFY Your Impact Program"
						class="w-64 h-64 object-contain"
					/>
				</div>
			{/if}
		</div>
	</div>
</section>

<!-- Clients We've Impacted -->
<section class="py-16 bg-base-100">
	<div
		class="container-custom"
		use:trigger={(v) => {
			clientsHeading = v;
			setTimeout(() => (clientsLogos = v), 200);
		}}
	>
		{#if clientsHeading}
			<h2
				class="text-5xl lg:text-7xl font-bold text-center mb-12"
				transition:fly={{ y: 30, duration: 600 }}
			>
				CLIENTS WE'VE IMPACTED
			</h2>
		{/if}
		{#if clientsLogos}
			<div transition:fly={{ y: 20, duration: 600 }}>
				<ClientLogos logos={clientLogos} marquee={true} />
			</div>
		{/if}
	</div>
</section>

<!-- Connect With Us -->
<section id="connect" class="py-20 md:py-28 section-dark">
	<div
		class="container-custom"
		use:trigger={(v) => {
			connectHeading = v;
			setTimeout(() => (connectForm = v), 150);
		}}
	>
		<div class="max-w-3xl mx-auto">
			{#if connectHeading}
				<h2
					class="text-5xl lg:text-7xl font-bold text-center text-white mb-4"
					transition:fly={{ y: 30, duration: 600 }}
				>
					CONNECT WITH US
				</h2>
				<p
					class="text-center text-lg mb-12 opacity-80 text-white"
					transition:fly={{ y: 20, duration: 600, delay: 100 }}
				>
					Ready to create an impact path for your team? <br /> Let's talk about which program is right
					for you.
				</p>
			{/if}
			{#if connectForm}
				<div transition:fly={{ y: 30, duration: 600 }}>
					<ContactForm prefix="[Programs Page Enquiry]" class="bg-neutral/50 p-8 md:p-12" />
				</div>
			{/if}
		</div>
	</div>
</section>
