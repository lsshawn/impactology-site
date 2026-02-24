<script lang="ts">
	import SEO from '$lib/components/SEO.svelte';
	import ContactForm from '$lib/components/ContactForm.svelte';
	import ClientLogos from '$lib/components/ClientLogos.svelte';

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
	<div
		class="reveal-y container-custom relative z-10 text-center"
		class:visible={heroVisible}
	>
		<h1 class="text-5xl md:text-6xl lg:text-6xl mb-6 leading-none text-neutral-content font-bold">
			BUSINESS PARTNERING DEVELOPMENT Programs
		</h1>
		<div class="border-t-2 border-primary w-24 mb-8 mx-auto"></div>
		<p class="text-xl md:text-2xl font-medium opacity-90 text-neutral-content">
			Together Lets Create an Impact Path. Choose Your Journey.
		</p>
	</div>
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
			<div class="reveal-x-left flex justify-center" class:visible={bpipImg}>
				<img
					src="/programs-bpip.webp"
					alt="Business Partnering IMPACT Program"
					class="w-64 h-64 object-contain"
				/>
			</div>
			<div class="reveal-x-right" class:visible={bpipText} style="transition-delay: 150ms">
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
			<div class="reveal-x-left" class:visible={amplifyText}>
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
			<div class="reveal-x-right flex justify-center" class:visible={amplifyImg} style="transition-delay: 150ms">
				<img
					src="/programs-amplify.webp"
					alt="AMPLIFY Your Impact Program"
					class="w-64 h-64 object-contain"
				/>
			</div>
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
		<h2
			class="reveal-y text-5xl lg:text-7xl font-bold text-center mb-12"
			class:visible={clientsHeading}
		>
			CLIENTS WE'VE IMPACTED
		</h2>
		<div class="reveal-y" class:visible={clientsLogos} style="transition-delay: 200ms">
			<ClientLogos logos={clientLogos} marquee={true} />
		</div>
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
			<h2
				class="reveal-y text-5xl lg:text-7xl font-bold text-center text-white mb-4"
				class:visible={connectHeading}
			>
				CONNECT WITH US
			</h2>
			<p
				class="reveal-y text-center text-lg mb-12 opacity-80 text-white"
				class:visible={connectHeading}
				style="transition-delay: 100ms"
			>
				Ready to create an impact path for your team? <br /> Let's talk about which program is right
				for you.
			</p>
			<div class="reveal-y" class:visible={connectForm} style="transition-delay: 150ms">
				<ContactForm prefix="[Programs Page Enquiry]" class="bg-neutral/50 p-8 md:p-12" />
			</div>
		</div>
	</div>
</section>
