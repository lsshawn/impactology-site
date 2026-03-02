<script lang="ts">
	import SEO from '$lib/components/SEO.svelte';
	import TestimonialSlider from '$lib/components/TestimonialSlider.svelte';
	import EvolveBookSection from '$lib/components/EvolveBookSection.svelte';
	import ClientLogosSection from '$lib/components/ClientLogosSection.svelte';
	import RegisterInterestSection from '$lib/components/RegisterInterestSection.svelte';
	import ProgramBenefitsSection from '$lib/components/ProgramBenefitsSection.svelte';
	import { fly } from 'svelte/transition';

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
		startObserving();
		return { destroy: () => observer?.disconnect() };
	}

	const modules = [
		{
			icon: '/bpip-icon01.webp',
			title: 'BUILD STRATEGIC BUSINESS PARTNERING SKILLS',
			subtitle: 'Engage with clients as trusted advisors rather than transactional salespeople.',
			description:
				'Train your teams to engage with clients as trusted advisors rather than transactional salespeople. Develop the skills to align with and influence key stakeholders internally and externally, positioning your team as strategic partners who add real value.'
		},
		{
			icon: '/bpip-icon02.webp',
			title: 'STRENGTHEN LEADERSHIP ACROSS TEAMS',
			subtitle: 'Inspire teams, foster collaboration, and drive accountability.',
			description:
				'Provide tools and frameworks to inspire teams, foster collaboration, and drive accountability. Equip leaders to navigate market disruptions and drive innovation, building high-performing teams that thrive in high-pressure environments.'
		},
		{
			icon: '/bpip-icon03.webp',
			title: 'FOSTER CROSS-FUNCTIONAL COLLABORATION',
			subtitle: 'Create alignment between sales, marketing, operations, and product teams.',
			description:
				'Create alignment between sales, marketing, operations, and product teams for seamless delivery. Train teams to communicate client needs effectively across functions to enhance service delivery and client satisfaction.'
		},
		{
			icon: '/bpip-icon04.webp',
			title: 'ENHANCE COMMERCIAL ACUMEN',
			subtitle: 'Align sales strategies with organisational goals and market dynamics.',
			description:
				'Train teams to align sales strategies with organisational goals and market dynamics. Equip sales teams to demonstrate ROI and articulate the value of their solutions to clients and leadership, enabling smarter and more impactful decisions.'
		},
		{
			icon: '/bpip-icon05.webp',
			title: 'OVERCOME SILOED OPERATIONS',
			subtitle: 'Foster cross-functional collaboration and strategic alignment.',
			description:
				'Our program fosters cross-functional collaboration and strategic alignment, ensuring sales and client servicing teams work cohesively with other departments to deliver holistic solutions to clients, breaking down silos that hinder performance.'
		},
		{
			icon: '/bpip-icon06.webp',
			title: 'BUILD TRUST-BASED CLIENT RELATIONSHIPS',
			subtitle: 'Adopt a consultative approach for long-term client partnerships.',
			description:
				'We train teams to adopt a consultative approach, positioning themselves as trusted advisors who add strategic value to clients. Build trust and drive long-term partnerships that deliver exceptional client experiences and foster loyalty.'
		}
	];

	const whoShouldAttend = [
		'Sales Directors',
		'Sales Team Leaders',
		'Sales Managers',
		'BDMs',
		'Sales Representatives',
		'Client Servicing Managers',
		'Business Development (BD) Managers'
	];

	const teamBenefits = [
		{
			title: 'Stronger Client Relationships',
			description: 'Build trust and drive long-term partnerships with clients.'
		},
		{
			title: 'Enhanced Collaboration',
			description: 'Work seamlessly with internal teams to deliver comprehensive solutions.'
		},
		{
			title: 'Increased Motivation',
			description: 'Empower teams with the tools and confidence to achieve their goals.'
		}
	];

	const orgBenefits = [
		{
			title: 'Improved Sales Performance',
			description: 'Drive revenue growth through more effective sales and BD strategies.'
		},
		{
			title: 'Greater Efficiency',
			description:
				'Align sales efforts with broader organisational goals to eliminate redundancies and maximise impact.'
		},
		{
			title: 'Increased Client Retention',
			description:
				'Deliver exceptional client experiences that foster loyalty and repeat business.'
		}
	];

	const whyDifferent = [
		{
			title: 'Customised Training',
			description: "Each program is tailored to your organisation's needs and challenges."
		},
		{
			title: 'Experienced Facilitators',
			description:
				'Learn from experts with deep industry experience in sales leadership and business partnering.'
		},
		{
			title: 'Actionable Frameworks',
			description: 'Gain practical tools that your teams can immediately apply in their roles.'
		},
		{
			title: 'Proven Results',
			description:
				'Our programs are designed to deliver measurable outcomes, from improved sales performance to stronger client relationships.'
		}
	];

	let introImg = $state(false);
	let introText = $state(false);
	let uniqueImg = $state(false);
	let uniqueText = $state(false);
	let modulesHeading = $state(false);
	let modulesGrid = $state(false);
</script>

<svelte:head>
	<link rel="preload" as="image" href="/bpip-hero-bg.webp" fetchpriority="high" />
</svelte:head>

<SEO
	title="Sales & Client Management Business Partnering Program | Impactology"
	description="Empower sales, BD, and client management teams with our Business Partnering IMPACT Program. Drive growth, build trust, and foster long-term client relationships."
	ogTitle="Sales & Client Management Business Partnering Program | Impactology"
	ogDescription="Empower sales, BD, and client management teams with our Business Partnering IMPACT Program. Drive growth, build trust, and foster long-term client relationships."
	ogImage="https://impactology.com.au/icon2.png"
	ogType="website"
	canonical="https://impactology.com.au/sales-business-development-client-management-program"
	jsonLd={{
		'@context': 'https://schema.org',
		'@type': 'Course',
		name: 'Sales, BD & Client Management Business Partnering IMPACT Program',
		description:
			'A comprehensive program designed to transform sales, BD, and client management teams into strategic business partners who drive revenue, build client trust, and align with broader organisational objectives.',
		provider: {
			'@type': 'Organization',
			name: 'Impactology',
			url: 'https://impactology.com.au'
		}
	}}
/>

<!-- Hero Section -->
<section
	class="section-yellow py-24 md:py-8 bg-cover bg-center relative"
	style="background-image: url('/bpip-hero-bg.webp'); height: 60vh; max-height: 60vh;"
>
	<div class="absolute inset-0 bg-yellow-300/70 md:hidden"></div>
	<div class="container-custom relative z-10 flex items-center h-full">
		<div class="max-w-xl">
			<h1 class="mb-6 text-3xl lg:text-5xl font-bold text-black">
				Sales, Business Development & Client Management Business Partnering Impact Program
			</h1>
			<a href="#register-interest" class="btn btn-secondary btn-lg uppercase font-bold mb-6">
				BOOK YOUR FREE 60-MINUTE STRATEGY SESSION
			</a>
			<div class="text-base max-w-xl prose prose-lg">
				<p>This free strategy session will help you uncover what your team needs most.</p>
				<p><strong>Your Benefit:</strong> practical next steps you can act on immediately.</p>
				<p><strong>No hard sell – pinky promise!</strong></p>
			</div>
		</div>
	</div>
</section>

<!-- Program Intro Section -->
<section
	class="py-20 md:py-28 bg-base-100"
	use:trigger={(v) => {
		introImg = v;
		setTimeout(() => (introText = v), 150);
	}}
>
	<div class="container-custom">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
			{#if introText}
				<div in:fly={{ x: -30, duration: 600 }}>
					<p class="text-xl font-bold mb-6 opacity-90">
						Transform Your Sales, BD & Client Management Teams into Strategic Business Partners
					</p>
					<p class="text-lg leading-relaxed mb-6 opacity-80">
						Sales, Business Development (BD), and Client Management teams are the lifeblood of any
						growing organisation. Yet, in the complex environments of small to medium enterprises
						and large enterprise-level businesses, these teams often face challenges that hinder
						their ability to deliver consistent growth, align with strategic goals, and maximise
						client satisfaction.
					</p>
					<p class="text-lg leading-relaxed mb-8 opacity-80">
						The Sales, BD & Client Management Business Partnering IMPACT Program by Impactology is
						specifically designed to address these challenges. It equips sales leaders and client
						servicing teams with the skills and strategies to become true business partners,
						enabling them to drive revenue, build client trust, and align seamlessly with broader
						organisational objectives.
					</p>
					<a href="#register-interest" class="btn btn-primary btn-lg uppercase font-bold">
						Register your interest
					</a>
				</div>
			{/if}
			{#if introImg}
				<div class="flex justify-center" in:fly={{ x: 30, duration: 600 }}>
					<img
						src="/bpip-intro.webp"
						alt="Sales, BD & Client Management Business Partnering Program"
						class="w-full max-w-md object-contain"
					/>
				</div>
			{/if}
		</div>
	</div>
</section>

<ClientLogosSection />

<!-- Why Choose This Program -->
<section
	class="py-20 md:py-28 bg-base-100"
	use:trigger={(v) => {
		uniqueImg = v;
		setTimeout(() => (uniqueText = v), 150);
	}}
>
	<div class="container-custom">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
			{#if uniqueText}
				<div in:fly={{ x: -30, duration: 600 }}>
					<h2 class="text-4xl md:text-5xl font-bold mb-6">
						Why Choose The Sales, BD & Client Management Business Partnering Impact Program?
					</h2>
					<p class="text-lg font-bold mb-4 opacity-90">
						Addressing Common Challenges Faced by Sales and BD Teams
					</p>
					<div class="space-y-6 mb-8">
						<div>
							<p class="font-bold mb-1">Siloed Operations and Misaligned Priorities</p>
							<p class="text-sm leading-relaxed opacity-80 mb-1">
								<strong>The Challenge:</strong> Sales and BD teams often work in isolation and/or in
								silos, leading to misalignment with marketing, operations, and product development teams.
							</p>
							<p class="text-sm leading-relaxed opacity-80">
								<strong>Our Solution:</strong> Our program fosters cross-functional collaboration and
								strategic alignment, ensuring sales and client servicing teams work cohesively with other
								departments to deliver holistic solutions to clients.
							</p>
						</div>
						<div>
							<p class="font-bold mb-1">Transactional Client Relationships</p>
							<p class="text-sm leading-relaxed opacity-80 mb-1">
								<strong>The Challenge:</strong> Sales teams may struggle to move beyond transactional
								interactions, which can limit their ability to build long-term, trust-based client relationships.
							</p>
							<p class="text-sm leading-relaxed opacity-80">
								<strong>Our Solution:</strong> We train teams to adopt a consultative approach, positioning
								themselves as trusted advisors who add strategic value to clients.
							</p>
						</div>
						<div>
							<p class="font-bold mb-1">Leadership Gaps in Driving Performance</p>
							<p class="text-sm leading-relaxed opacity-80 mb-1">
								<strong>The Challenge:</strong> Sales leaders may lack the tools to effectively inspire,
								align, and manage diverse teams in high-pressure environments.
							</p>
							<p class="text-sm leading-relaxed opacity-80">
								<strong>Our Solution:</strong> Our leadership program empowers sales directors and team
								leaders to build high-performing teams that thrive on collaboration and accountability.
							</p>
						</div>
						<div>
							<p class="font-bold mb-1">Lack of Commercial Acumen Across Teams</p>
							<p class="text-sm leading-relaxed opacity-80 mb-1">
								<strong>The Challenge:</strong> Sales professionals may lack the broader business acumen
								needed to align their efforts with organisational goals and make strategic decisions.
							</p>
							<p class="text-sm leading-relaxed opacity-80">
								<strong>Our Solution:</strong> We enhance commercial acumen through targeted training,
								enabling teams to make smarter, more impactful decisions.
							</p>
						</div>
					</div>
					<a href="#register-interest" class="btn btn-primary btn-lg uppercase font-bold">
						Register your interest
					</a>
				</div>
			{/if}
			{#if uniqueImg}
				<div class="flex justify-center" in:fly={{ x: 30, duration: 600 }}>
					<img
						src="/bpip-cta.webp"
						alt="Sales & BD Business Partnering unique program"
						class="w-full max-w-md object-contain"
					/>
				</div>
			{/if}
		</div>
	</div>
</section>

<EvolveBookSection />

<!-- Program Highlights -->
<section
	class="py-20 md:py-28 bg-[#212023]"
	use:trigger={(v) => {
		modulesHeading = v;
		setTimeout(() => (modulesGrid = v), 150);
	}}
>
	<div class="container-custom">
		{#if modulesHeading}
			<h2
				class="text-5xl lg:text-7xl font-bold text-center mb-16 text-base-100"
				in:fly={{ y: 30, duration: 600 }}
			>
				PROGRAM HIGHLIGHTS
			</h2>
		{/if}
		{#if modulesGrid}
			<div class="grid grid-cols-1 lg:grid-cols-3 gap-8" in:fly={{ y: 30, duration: 600 }}>
				{#each modules as module, i (i)}
					<div class="border border-neutral-content/20 p-8 hover:border-primary transition-colors">
						<div class="mb-6">
							<img src={module.icon} alt={module.title} class="w-16 h-16 object-contain mb-4" />
							<h3 class="text-2xl text-primary font-bold mb-1">{module.title}</h3>
							<p class="text-sm text-white mb-3">{module.subtitle}</p>
						</div>
						<p class="text-sm leading-relaxed opacity-90 text-base-100">{module.description}</p>
					</div>
				{/each}
			</div>
		{/if}
	</div>
</section>

<ProgramBenefitsSection
	{whoShouldAttend}
	{teamBenefits}
	{orgBenefits}
	{whyDifferent}
	whyIntro="At Impactology, we understand the unique challenges that sales, BD, and client management teams face in small to medium and large organisations. Our tailored programs are designed to address these pain points and deliver actionable solutions that drive real change."
/>

<!-- Testimonials -->
<section class="bg-[#fff000] py-20 md:py-28">
	<div class="container-custom">
		<TestimonialSlider />
	</div>
</section>

<RegisterInterestSection
	prefix="[Sales, BD & Client Management Business Partnering IMPACT Program Interest]"
	introText="Ready to amplify your sales leadership and team performance? Contact us to learn more about how our program can help your organisation achieve its goals. Fill out the form below to get started."
/>
