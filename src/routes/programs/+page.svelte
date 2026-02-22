<script lang="ts">
	import SEO from '$lib/components/SEO.svelte';
	import ContactForm from '$lib/components/ContactForm.svelte';
	import ClientLogos from '$lib/components/ClientLogos.svelte';
	import Icon from '@iconify/svelte';

	const programs = [
		{
			icon: '/icon2.png',
			title: 'Business Partnering IMPACT Program',
			slug: '/business-partnering-impact-program',
			tag: 'FOUNDATION PROGRAM',
			description:
				'Designed for all business partners who are ready to make an impact. Our Business Partnering Impact Program focuses on building the behavioural attributes and commercial acumen required to make a greater business impact.',
			highlights: [
				'Think and act more strategically',
				'Evolve stakeholder relationships',
				'Apply high-impact tools & frameworks',
				'Build data storytelling capabilities'
			],
			bg: 'bg-base-100'
		},
		{
			icon: '/icon3.png',
			title: 'AMPLIFY Your Impact Program',
			slug: '/amplify-your-impact-program',
			tag: 'ADVANCED PROGRAM',
			description:
				'A follow-up to the Business Partnering IMPACT Program, this Program Experience is designed to prepare your Business Partners for change and drive transformation over 6 to 12 months.',
			highlights: [
				'Face-to-face sessions & case studies',
				'Micro-learning via IMPACTORA platform',
				'Virtual check-ins & team scorecard',
				'Sustain & embed capabilities long-term'
			],
			bg: 'section-gray'
		}
	];

	const clientLogos = [
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
	style="background-image: url('/home_banner1.jpg');"
>
	<div class="absolute inset-0 bg-neutral/80"></div>
	<div class="container-custom relative z-10">
		<div class="max-w-3xl">
			<span class="text-primary font-bold tracking-widest text-sm uppercase mb-4 block"
				>Choose Your Journey</span
			>
			<h1 class="text-5xl md:text-6xl lg:text-8xl mb-6 leading-none text-neutral-content">
				BUSINESS PARTNERING DEVELOPMENT PROGRAMS
			</h1>
			<div class="border-t-2 border-primary w-24 mb-8"></div>
			<p class="text-xl md:text-2xl font-medium opacity-90 text-neutral-content">
				Together Let's Create an Impact Path.
			</p>
		</div>
	</div>
</section>

<!-- Programs -->
{#each programs as program, i}
	<section class="py-20 md:py-28 {program.bg}">
		<div class="container-custom">
			<div
				class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center {i % 2 === 1
					? 'lg:[&>*:first-child]:order-2'
					: ''}"
			>
				<!-- Icon / Visual -->
				<div class="flex justify-center lg:justify-{i % 2 === 0 ? 'end' : 'start'}">
					<div class="relative">
						<div
							class="w-64 h-64 md:w-80 md:h-80 bg-neutral flex items-center justify-center"
						>
							<img
								src={program.icon}
								alt={program.title}
								class="w-32 h-32 md:w-40 md:h-40 brightness-0 invert"
							/>
						</div>
						<div
							class="absolute -bottom-4 {i % 2 === 0
								? '-right-4'
								: '-left-4'} w-20 h-20 bg-primary -z-10"
						></div>
					</div>
				</div>

				<!-- Content -->
				<div>
					<span
						class="inline-block text-xs font-bold tracking-widest uppercase text-primary mb-3 border border-primary px-3 py-1"
					>
						{program.tag}
					</span>
					<h2 class="text-4xl md:text-5xl mb-6 leading-tight">{program.title}</h2>
					<p class="text-lg leading-relaxed mb-8 opacity-80">{program.description}</p>

					<ul class="space-y-3 mb-10">
						{#each program.highlights as highlight}
							<li class="flex items-start gap-3">
								<Icon icon="ph:check-circle-fill" class="text-primary text-xl mt-0.5 shrink-0" />
								<span class="text-base font-medium">{highlight}</span>
							</li>
						{/each}
					</ul>

					<a
						href={program.slug}
						class="btn btn-secondary btn-lg uppercase font-bold rounded-none inline-flex items-center gap-2"
					>
						Know More
						<Icon icon="ph:arrow-right-bold" class="text-lg" />
					</a>
				</div>
			</div>
		</div>
	</section>
{/each}

<!-- Clients We've Impacted -->
<section class="py-16 bg-base-100">
	<div class="container-custom">
		<h2 class="text-5xl lg:text-7xl font-bold text-center mb-12">CLIENTS WE'VE IMPACTED</h2>
		<ClientLogos logos={clientLogos} carousel={true} />
	</div>
</section>

<!-- Connect With Us -->
<section id="connect" class="py-20 md:py-28 section-dark">
	<div class="container-custom">
		<div class="max-w-3xl mx-auto">
			<h2 class="text-5xl lg:text-7xl font-bold text-center text-neutral-content mb-4">
				CONNECT WITH US
			</h2>
			<p class="text-center text-lg mb-12 opacity-80 text-neutral-content">
				Ready to create an impact path for your team? Let's talk about which program is right for
				you.
			</p>
			<ContactForm
				prefix="[Programs Page Enquiry]"
				class="bg-neutral/50 p-8 md:p-12"
			/>
		</div>
	</div>
</section>
