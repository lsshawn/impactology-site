<script lang="ts">
	import SEO from '$lib/components/SEO.svelte';
	import ContactForm from '$lib/components/ContactForm.svelte';
	import TestimonialSlider from '$lib/components/TestimonialSlider.svelte';
	import EvolveBookSection from '$lib/components/EvolveBookSection.svelte';
	import ClientLogosSection from '$lib/components/ClientLogosSection.svelte';
	import RegisterInterestSection from '$lib/components/RegisterInterestSection.svelte';
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
			title: 'KNOW YOUR BUSINESS',
			subtitle: 'Know how to support your business model.',
			description:
				"Discover a proven approach to strategic thinking and action, fostering a robust commercial mindset among Finance professionals. This module is vital for building a high-performing, trusted Finance function, building necessary capability of your company's unique business model to enhance informed decision-making."
		},
		{
			icon: '/bpip-icon02.webp',
			title: 'KNOW YOUR STAKEHOLDERS',
			subtitle: "Without trust, technical skills alone won't suffice.",
			description:
				"This module underpins the Finance business partners' role in cultivating relationships with both internal and external stakeholders. We emphasise essential skills such as building trust and effective communication, crucial for maintaining a strong presence in stakeholder interactions and achieving positive impact. Importantly, knowing the rules of collaborative engagement with your Finance team/colleagues."
		},
		{
			icon: '/bpip-icon03.webp',
			title: 'KNOW YOUR MACRO WORLD',
			subtitle: 'Make effective and informed decisions.',
			description:
				'More than ever, business decisions are influenced by internal and external factors across different markets and geographies. This module focuses on building a strong "outside-in" view of the world, and how macro-environmental factors impact a company\'s strategies and the Finance team\'s decision-making. An understanding of macro factors impacting the organisation is crucial for effective decision-making and influence.'
		},
		{
			icon: '/bpip-icon04.webp',
			title: 'FINANCE BUSINESS PARTNERING TOOLKIT',
			subtitle: 'Develop high impact skills for greater business partnering effectiveness.',
			description:
				'Participants are introduced to tools like the ACDC Contextual Partnering Model to help identify and understand the different delivery modes of a business partner depending on the stakeholder context. These tools provide a valuable insight into their personal preferences, and the impact this has on your personal brand as a business partner. Broaden out your expertise by leveraging the different modes of business partnering in the right context.'
		},
		{
			icon: '/bpip-icon05.webp',
			title: 'DATA STORYTELLING WITH PURPOSE',
			subtitle: 'The vital "life" skill for all Finance Professionals.',
			description:
				"Storytelling plays an increasing and important function in all work contexts and done well, helps transform the impact Finance business partners have on their business. This influential capability can help unlock a Finance team's ability to better collaborate and negotiate better outcomes for the overall business, creating a high-performance environment that thrives on action and outcomes, not just ideas."
		},
		{
			icon: '/bpip-icon06.webp',
			title: 'KNOW THE VALUE YOU DELIVER',
			subtitle: 'Be clear of the drivers necessary for driving business value.',
			description:
				"To understand the impact you're having, you need to know how to communicate and measure the value your team delivers as Finance business partners. It is about knowing the important trade-offs you make around what you do and what you don't do as a team. This clarity makes all the difference to stakeholders. This module shares some high impact frameworks for you to use in assessing the value you deliver as Finance Business Partners – both individually and cohesively as a team."
		}
	];

	let introImg = $state(false);
	let introText = $state(false);
	let ctaImg = $state(false);
	let ctaText = $state(false);
	let modulesHeading = $state(false);
	let modulesGrid = $state(false);
	let ctaFinanceImg = $state(false);
	let ctaFinanceText = $state(false);
</script>

<svelte:head>
	<link rel="preload" as="image" href="/bpip-hero-bg.webp" fetchpriority="high" />
</svelte:head>

<SEO
	title="Finance Business Partnering Program | Impactology"
	description="Drive your Finance strategy to new heights with Impactology's Finance Business Partnering development program. Build clarity, promote collaboration and improve team productivity and efficiency."
	ogTitle="Finance Business Partnering Program | Impactology"
	ogDescription="Drive your Finance strategy to new heights with Impactology's Finance Business Partnering development program. Build clarity, promote collaboration and improve team productivity and efficiency."
	ogImage="https://impactology.com.au/icon2.png"
	ogType="website"
	canonical="https://impactology.com.au/finance-business-partnering"
	jsonLd={{
		'@context': 'https://schema.org',
		'@type': 'Course',
		name: 'Finance Business Partnering Program',
		description:
			'A comprehensive program designed to empower Finance teams with tools, frameworks, strategies, and mindset to become trusted experts in driving organisational success.',
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
	<div class="container-custom relative z-10 flex items-center h-full">
		<div class="max-w-xl">
			<h1 class="mb-6 text-5xl lg:text-6xl font-bold text-black">
				Finance Business Partnering Development Program
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
					<p class="text-lg leading-relaxed mb-6 opacity-80">
						Take the first step towards building a trusted and high-performing Finance team –
						amplify the impact of your team's business partnering.
					</p>
					<p class="text-xl font-bold mb-6 opacity-90">
						Champions of change. Builders of trust. Leaders in collaboration.
					</p>
					<p class="text-lg leading-relaxed mb-6 opacity-80">
						Improving the maturity of your Finance operations and building sustainable relationships
						with key internal stakeholders starts with trust: trust in the team's capabilities and
						with one another. It starts with delivering fundamentals of business partnering in a
						consistent and predictable way. Getting these basics correct, builds trust with your
						core stakeholders and delivers positive project outcomes. The Finance Business
						Partnering Impact Program is designed to empower your team with the tools, frameworks,
						mindset and language to become trusted experts in driving organisational success.
					</p>
					<p class="text-lg leading-relaxed mb-8 opacity-80">
						So if your team requires a <strong>capability</strong> uplift, if you're tasked with driving
						change across your business, or if you're leading a new team of Finance professionals –
						then we'd like to hear from you.
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
						alt="Finance Business Partnering Program"
						class="w-full max-w-md object-contain"
					/>
				</div>
			{/if}
		</div>
	</div>
</section>

<ClientLogosSection />

<!-- What Makes This Program Unique -->
<section
	class="py-20 md:py-28 bg-base-100"
	use:trigger={(v) => {
		ctaImg = v;
		setTimeout(() => (ctaText = v), 150);
	}}
>
	<div class="container-custom">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
			{#if ctaText}
				<div in:fly={{ x: -30, duration: 600 }}>
					<h2 class="text-4xl md:text-5xl font-bold mb-6">
						What makes this Finance Business Partnering development program unique?
					</h2>
					<p class="text-lg leading-relaxed mb-6 opacity-80">
						Firstly, we specialise in developing business partners. It's what we do, it's what
						drives us and what we do well. It's our dedication to research and establishing the core
						principles of business partnering with all our participants: know yourself, know your
						business, know your stakeholders.
					</p>
					<p class="text-lg leading-relaxed mb-8 opacity-80">
						We use a combination of research-driven tools and frameworks, real-world insights, and
						meaningful conversations that emphasise building trust across the team. Above all, our
						focus is on taking action – consistently. Trying something different to achieve a
						positive result. In life, following through on your commitments is a proven way to drive
						real change and progress.
					</p>
					<a href="#register-interest" class="btn btn-primary btn-lg uppercase font-bold">
						Register your interest
					</a>
				</div>
			{/if}
			{#if ctaImg}
				<div class="flex justify-center" in:fly={{ x: 30, duration: 600 }}>
					<img
						src="/bpip-cta.webp"
						alt="Finance Business Partnering unique program"
						class="w-full max-w-md object-contain"
					/>
				</div>
			{/if}
		</div>
	</div>
</section>

<EvolveBookSection />

<!-- Core Modules -->
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
				CORE PROGRAM MODULES
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

<!-- Call to Action for Finance Teams -->
<section
	class="py-20 md:py-28 bg-base-100"
	use:trigger={(v) => {
		ctaFinanceImg = v;
		setTimeout(() => (ctaFinanceText = v), 150);
	}}
>
	<div class="container-custom">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
			{#if ctaFinanceText}
				<div in:fly={{ x: -30, duration: 600 }}>
					<h2 class="text-4xl md:text-5xl font-bold mb-6">
						THE CALL TO ACTION FOR FINANCE TEAMS!
					</h2>
					<p class="text-lg leading-relaxed mb-6 opacity-80">
						For any team of Finance business partners, today's fast-changing business environment
						bring an increased responsibility for driving and owning business outcomes. This call to
						action for Finance Teams serves as an important ingredient to managing change across any
						organisation, boosting overall team performance, and staying relevant in the face of
						fast-changing market trends. An effective Finance team forms a key part helping drive
						change across any organisation.
					</p>
					<p class="text-lg font-medium mb-4">
						The Finance Business Partnering IMPACT Program, learning objectives include:
					</p>
					<ul class="space-y-3 mb-8">
						<li class="flex items-start gap-3">
							<span class="text-primary mt-1 shrink-0">●</span>
							<span class="opacity-80"
								>Equip themselves with the integral skills to meet the expectations of key internal
								and external stakeholders.</span
							>
						</li>
						<li class="flex items-start gap-3">
							<span class="text-primary mt-1 shrink-0">●</span>
							<span class="opacity-80"
								>Establish a solid foundation of trust with their team, stakeholders and other
								functions.</span
							>
						</li>
						<li class="flex items-start gap-3">
							<span class="text-primary mt-1 shrink-0">●</span>
							<span class="opacity-80"
								>Create a personal brand built on being a consistent and trusted strategic
								advisor.</span
							>
						</li>
						<li class="flex items-start gap-3">
							<span class="text-primary mt-1 shrink-0">●</span>
							<span class="opacity-80"
								>Develop their business acumen to complement their finance technical
								proficiency.</span
							>
						</li>
					</ul>
					<a href="/evolve-book" class="btn btn-primary btn-lg uppercase font-bold">BUY NOW</a>
				</div>
			{/if}
			{#if ctaFinanceImg}
				<div class="flex justify-center" in:fly={{ x: 30, duration: 600 }}>
					<img
						src="/bpip-book-cover.webp"
						alt="The Business Partnering Playbook - EVOLVE"
						class="w-96 object-contain drop-shadow-2xl"
					/>
				</div>
			{/if}
		</div>
	</div>
</section>

<!-- Testimonials -->
<section class="bg-[#fff000] py-20 md:py-28">
	<div class="container-custom">
		<TestimonialSlider />
	</div>
</section>

<RegisterInterestSection prefix="[Finance Business Partnering Program Interest]" />
