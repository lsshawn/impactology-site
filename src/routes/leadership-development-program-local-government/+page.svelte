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
			title: 'KNOW YOUR ORGANISATION',
			subtitle: 'How council leaders can effectively align with broader local government goals.',
			description:
				"This module introduces a structured approach to understanding and supporting your council's objectives and business model. It fosters a strategic mindset, helping leaders and teams identify how to support local government priorities best while considering the community's diverse needs. Participants will gain tools to better understand how the council delivers value to the community and interconnected business model components that make it all possible."
		},
		{
			icon: '/bpip-icon02.webp',
			title: 'KNOW YOUR STAKEHOLDERS',
			subtitle: 'Trust is the foundation of successful governance.',
			description:
				'Building and nurturing relationships with internal teams, external stakeholders, and community groups is essential for local government effectiveness. This module emphasises developing trust, enhancing communication, and creating strong connections with all key stakeholders.'
		},
		{
			icon: '/bpip-icon03.webp',
			title: 'KNOW YOUR COMMUNITY AND ENVIRONMENT',
			subtitle: 'Understanding community needs strengthens decision-making.',
			description:
				"Community priorities and external influences significantly impact local government decisions. This module develops an 'outside-in' perspective, enabling leaders to consider societal, economic, and environmental factors. With this understanding, council teams can make informed decisions that align with their communities' long-term needs."
		},
		{
			icon: '/bpip-icon04.webp',
			title: 'LEADERSHIP TOOLKIT FOR COUNCILS',
			subtitle: 'Enhancing stakeholder engagement with practical tools.',
			description:
				'Participants will learn about the ACDC Contextual Partnering Model, which adapts to a local government context. This model helps leaders tailor their business partnering approach to maximise impact while building a solid reputation as reliable, strategic advisors.'
		},
		{
			icon: '/bpip-icon05.webp',
			title: 'LEARN DATA STORYTELLING',
			subtitle: 'A critical skill for effective communication and advocacy.',
			description:
				"Storytelling enhances leaders' ability to present data and ideas in compelling ways. This module equips council teams to use storytelling to engage stakeholders, communicate a more cohesive story using data, and foster collaboration across departments and community groups."
		},
		{
			icon: '/bpip-icon06.webp',
			title: 'KNOW THE VALUE YOU DELIVER',
			subtitle: "Measure and communicate your team's impact.",
			description:
				'Measuring the outcomes of local government initiatives is vital to demonstrating value to stakeholders. This module introduces a high-impact framework for evaluating and articulating the value delivered by council leaders and their teams, ensuring efforts are recognised and aligned with community expectations.'
		}
	];

	let introImg = $state(false);
	let introText = $state(false);
	let uniqueImg = $state(false);
	let uniqueText = $state(false);
	let modulesHeading = $state(false);
	let modulesGrid = $state(false);
	let ctaImg = $state(false);
	let ctaText = $state(false);
</script>

<SEO
	title="Leadership Development Program for Local Government Teams | Impactology"
	description="Transform your LGA leadership team with our tailored Leadership Development Program. Build trust, foster collaboration, and deliver impactful outcomes."
	ogTitle="Leadership Development Program for Local Government Teams | Impactology"
	ogDescription="Transform your LGA leadership team with our tailored Leadership Development Program. Build trust, foster collaboration, and deliver impactful outcomes."
	ogImage="https://impactology.com.au/icon2.png"
	ogType="website"
	canonical="https://impactology.com.au/leadership-development-program-local-government"
	jsonLd={{
		'@context': 'https://schema.org',
		'@type': 'Course',
		name: 'Leadership Development Program for Local Government',
		description:
			'A comprehensive leadership development program designed for local government executives and managers, focusing on community-centred leadership, political dynamics, and driving transformational change in the public sector.',
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
				Leadership Development Program for Local Government Area (LGAs) Teams
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
						Amplify your leadership, positively impact your colleagues and importantly, impact your
						community today! Take the first step toward building a high-performing, cohesive LGA
						business partnering team.
					</p>
					<p class="text-xl font-bold mb-6 opacity-90">Impact Your Local Community.</p>
					<p class="text-lg leading-relaxed mb-6 opacity-80">
						Enhancing the effectiveness of your LGA business partnering team and fostering
						meaningful collaboration with internal and community stakeholders begins with trust:
						trust within the team and with the broader community. It starts with consistently
						applying the core principles of business partnering.
					</p>
					<p class="text-lg leading-relaxed mb-6 opacity-80">
						Mastering these fundamentals enables council leaders and their teams to develop proactive
						and impactful relationships with key stakeholders, from internal departments to local
						community groups. Our Leadership Development Program for Local Government is designed to
						equip council teams with essential tools, frameworks, and the mindset to drive progress
						and deliver outcomes that truly benefit the community.
					</p>
					<p class="text-lg leading-relaxed mb-8 opacity-80">
						This program will improve cross-functional collaboration, enhance communication with
						internal and external stakeholders, and establish purposeful goal-setting that leads to
						genuine buy-in and aligned teams across Council moving in the same direction.
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
						alt="Leadership Development Program for Local Government"
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
		uniqueImg = v;
		setTimeout(() => (uniqueText = v), 150);
	}}
>
	<div class="container-custom">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
			{#if uniqueText}
				<div in:fly={{ x: -30, duration: 600 }}>
					<h2 class="text-4xl md:text-5xl font-bold mb-6">
						What makes this Leadership Development Program for Local Government unique?
					</h2>
					<p class="text-lg leading-relaxed mb-6 opacity-80">
						We specialise in developing trusted business partners, and our approach is rooted in
						building solid foundations for success: Know yourself, know your organisation, and know
						your stakeholders. Create a positive impact.
					</p>
					<p class="text-lg leading-relaxed mb-6 opacity-80">
						Our program is tailored to your council and combines evidence-based frameworks,
						real-world insights, and meaningful interactions to help participants foster trust,
						collaboration, and positive change.
					</p>
					<p class="text-lg leading-relaxed mb-8 opacity-80">
						Above all, we focus on action, ensuring your leadership team is prepared to implement
						strategies that deliver tangible results for the council and the community and have a
						team with the right behavioural attributes.
					</p>
					<a href="#register-interest" class="btn btn-primary btn-lg uppercase font-bold">
						Register your interest
					</a>
				</div>
			{/if}
			{#if uniqueImg}
				<div class="flex justify-center" in:fly={{ x: 30, duration: 600 }}>
					<img
						src="/bpip-cta.webp"
						alt="Leadership Development for Local Government unique program"
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

<!-- Call to Action for Local Government Teams -->
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
						THE CALL TO ACTION FOR LOCAL GOVERNMENT (LGA) TEAMS!
					</h2>
					<p class="text-lg leading-relaxed mb-6 opacity-80">
						Local government and council leaders operate in a dynamic environment marked by
						competing demands, budget constraints, and evolving community needs. This program helps
						leaders navigate these challenges by fostering collaboration, streamlining
						communication, and delivering results that impact all stakeholders.
					</p>
					<p class="text-lg leading-relaxed mb-6 opacity-80">
						Our Leadership Development Program for Local Government is tailored to help councils
						create high-performing teams, enhance strategic alignment, and elevate their impact on
						the community.
					</p>
					<p class="text-lg font-medium mb-4">The learning outcomes for participants include:</p>
					<ul class="space-y-3 mb-8">
						<li class="flex items-start gap-3">
							<span class="text-primary mt-1 shrink-0">●</span>
							<span class="opacity-80"
								>Strengthening collaboration between council departments and community
								stakeholders.</span
							>
						</li>
						<li class="flex items-start gap-3">
							<span class="text-primary mt-1 shrink-0">●</span>
							<span class="opacity-80"
								>Establishing trust and effective communication across diverse groups.</span
							>
						</li>
						<li class="flex items-start gap-3">
							<span class="text-primary mt-1 shrink-0">●</span>
							<span class="opacity-80"
								>Developing a reputation as a strategic and reliable business partnering team.</span
							>
						</li>
						<li class="flex items-start gap-3">
							<span class="text-primary mt-1 shrink-0">●</span>
							<span class="opacity-80"
								>Enhancing business acumen to complement leadership roles.</span
							>
						</li>
					</ul>
					<a href="/evolve-book" class="btn btn-primary btn-lg uppercase font-bold">BUY NOW</a>
				</div>
			{/if}
			{#if ctaImg}
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

<RegisterInterestSection
	prefix="[Leadership Development Program for Local Government Interest]"
	introText="At Impactology, we aim to empower council leaders and teams to think differently, foster innovation, and create new ways to engage with each other and their communities. If you're ready to transform your LGA's approach to leadership, reach out to learn more about our Leadership Development Program tailored for Local Government by filling out the form below."
/>
