<script lang="ts">
	import SEO from '$lib/components/SEO.svelte';
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
				"We provide a clear, strategic approach to nurture a strong commercial mindset for procurement professionals. This module is essential for developing a mature and effective procurement function, covering the broad, inter-related areas of a company's business model and how to use this information to support informed decision-making as part of the overall business strategy."
		},
		{
			icon: '/bpip-icon02.webp',
			title: 'KNOW YOUR STAKEHOLDERS',
			subtitle: "Without trust, technical skills alone won't do.",
			description:
				'Building trusted business relationships across all functions is foundational. This module covers the role of procurement business partners in connecting with internal stakeholders, customers, and suppliers. We emphasise trust, effective communication, and maintaining a strong presence for optimal impact.'
		},
		{
			icon: '/bpip-icon03.webp',
			title: 'KNOW YOUR MACRO WORLD',
			subtitle: 'Make informed and effective decisions.',
			description:
				"Effective business decisions are influenced by internal and external forces across diverse industries, markets, and geographies. This module emphasises cultivating a strong 'outside-in' view, exploring how these macro factors shape our business and influence procurement decisions. A thorough grasp of these macro factors is essential for making informed and effective decisions."
		},
		{
			icon: '/bpip-icon04.webp',
			title: 'PROCUREMENT BUSINESS PARTNERING TOOLKIT',
			subtitle: 'Enhancing stakeholder engagement through high impact skills.',
			description:
				"In this module, you'll learn tools like the ACDC Contextual Partnering Model to identify and understand how business partners adapt delivery modes based on context. These tools offer insights into personal preferences and expanding expertise through effective business partnering. Emphasising the importance of building a strong internal brand for procurement and sustainable team growth."
		},
		{
			icon: '/bpip-icon05.webp',
			title: 'THE ART OF DATA STORYTELLING',
			subtitle: 'A vital "life" skill for all Procurement Teams.',
			description:
				"Effective storytelling is crucial across all work contexts, significantly enhancing the impact of procurement business partners. This influential skill unlocks the team's ability to collaborate effectively and negotiate better outcomes, fostering a high-performance environment focused on action and results, not just ideas."
		},
		{
			icon: '/bpip-icon06.webp',
			title: 'KNOW THE VALUE YOU DELIVER',
			subtitle: 'Key drivers necessary for stakeholder success.',
			description:
				'To measure your impact, mastering the art of communicating and measuring the value your team delivers as procurement business partners is crucial. Understanding the trade-offs you make—the actions you take and those you choose not to take—can significantly influence stakeholders. This module introduces frameworks for assessing the value delivered both individually and as a Procurement team.'
		}
	];

	let introImg = $state(false);
	let introText = $state(false);
	let ctaImg = $state(false);
	let ctaText = $state(false);
	let modulesHeading = $state(false);
	let modulesGrid = $state(false);
</script>

<SEO
	title="Procurement Business Partner | Impactology"
	description="Take your procurement strategy to new heights with Impactology's Procurement Business Partner development experience. Boost efficiency and foster sustainable growth."
	ogTitle="Procurement Business Partner | Impactology"
	ogDescription="Take your procurement strategy to new heights with Impactology's Procurement Business Partner development experience. Boost efficiency and foster sustainable growth."
	ogImage="https://impactology.com.au/icon2.png"
	ogType="website"
	canonical="https://impactology.com.au/procurement-business-partnering"
	jsonLd={{
		'@context': 'https://schema.org',
		'@type': 'Course',
		name: 'Procurement Business Partnering Program',
		description:
			'A comprehensive program designed to empower procurement teams with tools, frameworks, strategies, and mindset to become trusted experts.',
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
				Procurement Business Partnering Program
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
						Take the first step towards building a trusted and high-performing procurement team –
						take your business partnering to the next level.
					</p>
					<p class="text-xl font-bold mb-6 opacity-90">
						Builders of trust. Experts in change. Champions in collaboration.
					</p>
					<p class="text-lg leading-relaxed mb-6 opacity-80">
						Enhancing the maturity of your procurement operations and building sustainable
						relationships with key stakeholders starts with trust: trust in each other and in the
						team's capabilities. Getting the basics right makes it easier to build proactive
						supplier relationships. The Procurement Business Partnering Program empowers your team
						with the tools, frameworks, strategies, and mindset to become trusted experts in driving
						organisational success.
					</p>
					<p class="text-lg font-bold mb-4">
						What makes this Procurement Business Partnering Program unique?
					</p>
					<p class="text-lg leading-relaxed mb-6 opacity-80">
						Firstly, we specialise in developing procurement business partners. It's what we do and
						what we do well. Our dedication to establishing the core principles of business
						partnering with all our participants sets us apart: Understanding yourself;
						Understanding your business; Understanding your stakeholders.
					</p>
					<p class="text-lg leading-relaxed mb-8 opacity-80">
						We achieve this through research-backed frameworks and tools, real-world insights, and
						meaningful conversations that emphasise building trust across the team. Above all, we
						prioritize taking action to achieve positive results.
					</p>
					<p class="text-lg leading-relaxed mb-8 opacity-80">
						So if your team requires a <strong>capability boost</strong>, if you're tasked with
						driving change across the business, or if you're leading a new team of Procurement
						Business Partners – then we'd like to hear from you.
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
						alt="Procurement Business Partnering Program"
						class="w-full max-w-md object-contain"
					/>
				</div>
			{/if}
		</div>
	</div>
</section>

<ClientLogosSection />

<!-- Call to Action for Procurement Teams -->
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
						THE CALL TO ACTION FOR PROCUREMENT TEAMS!
					</h2>
					<p class="text-lg leading-relaxed mb-6 opacity-80">
						In today's dynamic corporate environment, businesses face increasing industry
						disruption, market uncertainties, competition, risk, and rapid innovation. For any team
						of
						<strong>procurement business partners</strong>, these considerations bring an increased
						responsibility for driving and owning business outcomes. This call to action for any
						effective procurement team forms a key part helping drive change across any organisation
						and helping achieve core strategic goals.
					</p>
					<p class="text-lg leading-relaxed mb-6 opacity-80">
						Our <strong>Procurement Business Partnering training</strong> is tailored to develop a
						high-functioning and trusted group of <strong>procurement business partners</strong>,
						amplifying their business acumen, differentiating their capabilities and giving them an
						edge in the marketplace. Aimed at procurement managers and their teams, this course is
						suitable for all levels of experience.
					</p>
					<p class="text-lg font-medium mb-4">
						Upon finishing the Procurement Business Partnering Training, participants will be able
						to:
					</p>
					<ul class="space-y-3 mb-8">
						<li class="flex items-start gap-3">
							<span class="text-primary mt-1 shrink-0">●</span>
							<span class="opacity-80"
								>Equip themselves with the necessary skills to meet the expectations of key internal
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
								>Establish themselves as a consistent and trusted strategic advisor.</span
							>
						</li>
						<li class="flex items-start gap-3">
							<span class="text-primary mt-1 shrink-0">●</span>
							<span class="opacity-80"
								>Build their business acumen to complement their technical proficiency.</span
							>
						</li>
					</ul>
					<p class="text-base leading-relaxed opacity-70 mb-8">
						This <strong><a href="/programs">business partnering development program</a></strong> features
						a face-to-face component, and micro-learning activities and check-in process to help embed
						the Program learnings. The program aims to enhance service delivery standards with key stakeholders,
						and build a greater depth of relationship with external vendors and suppliers.
					</p>
					<a href="#register-interest" class="btn btn-primary btn-lg uppercase font-bold">
						CONNECT WITH US
					</a>
				</div>
			{/if}
			{#if ctaImg}
				<div class="flex justify-center" in:fly={{ x: 30, duration: 600 }}>
					<img
						src="/bpip-cta.webp"
						alt="The Call to Action for Procurement Teams"
						class="w-full max-w-md object-contain"
					/>
				</div>
			{/if}
		</div>
	</div>
</section>

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

<EvolveBookSection />

<!-- Testimonials -->
<section class="bg-[#fff000] py-20 md:py-28">
	<div class="container-custom">
		<TestimonialSlider />
	</div>
</section>

<RegisterInterestSection prefix="[Procurement Business Partnering Program Interest]" />
