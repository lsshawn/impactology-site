<script lang="ts">
	import SEO from '$lib/components/SEO.svelte';
	import ClientLogosSection from '$lib/components/ClientLogosSection.svelte';
	import RegisterInterestSection from '$lib/components/RegisterInterestSection.svelte';
	import TestimonialSlider from '$lib/components/TestimonialSlider.svelte';
	import { fly } from 'svelte/transition';
	import EvolveBookSection from '$lib/components/EvolveBookSection.svelte';

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
			subtitle: 'How BPO leaders can align with client and organisational goals',
			description:
				"This module offers a clear, practical framework for understanding your client's business model and aligning it with your BPO's strategic goals. It equips leaders and teams with tools and strategies to develop a strong commercial mindset, empowering them to make informed decisions that drive success for both your business and your clients."
		},
		{
			icon: '/bpip-icon02.webp',
			title: 'KNOW YOUR STAKEHOLDERS',
			subtitle: 'Trust is the foundation of all success!',
			description:
				'BPOs thrive on solid relationships built on trust and adaptability – internally within teams and externally with clients. This module focuses on building trust through effective communication, and meaningful engagement with all stakeholders. We focus on the importance of building trust, nurturing meaningful communication skills, and maintaining a relevant presence in the business partnering relationship.'
		},
		{
			icon: '/bpip-icon03.webp',
			title: 'KNOW YOUR ENVIRONMENT',
			subtitle: 'Adapting to industry trends and client dynamics',
			description:
				"In a rapidly changing landscape, BPO leaders need a deep understanding of external factors that influence their clients' industries and their own operations. This module helps participants develop an 'outside-in' perspective, equipping them to anticipate changes, mitigate risks, and adapt to evolving client demands."
		},
		{
			icon: '/bpip-icon04.webp',
			title: 'BPO LEADERSHIP TOOLKIT',
			subtitle: 'Elevating team and client impact through practical tools',
			description:
				'Participants are introduced to the AC/DC Contextual Partnering Model, which helps leaders understand and identify the different business partnering delivery modes and adjust their approach based on client and team needs. This module emphasises building a trusted personal brand, nurturing strong awareness, and leveraging different styles of business partnering to maximise impact in diverse contexts.'
		},
		{
			icon: '/bpip-icon05.webp',
			title: 'UNLOCK THE POWER OF DATA STORYTELLING',
			subtitle: 'A critical skill for influencing clients and teams',
			description:
				'Effective storytelling transforms how BPO leaders and teams communicate insights, build alignment, and influence outcomes. This module equips participants with a model to better represent data in their storytelling, driving better collaboration and building relevance with clients.'
		},
		{
			icon: '/bpip-icon06.webp',
			title: 'KNOW THE VALUE YOU DELIVER',
			subtitle: "Articulating and measuring your team's impact",
			description:
				'BPO leaders must consistently demonstrate the value they bring to clients and their organisations. This module introduces a framework for measuring and articulating team contributions, helping leaders align their efforts with client objectives and build long-term trust.'
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

<svelte:head>
	<link rel="preload" as="image" href="/bpip-hero-bg.webp" fetchpriority="high" />
</svelte:head>

<SEO
	title="Leadership Development for BPOs | Impactology"
	description="Elevate BPO leadership with Impactology's tailored training. Build trust, foster collaboration, and drive client success with proven frameworks and tools."
	ogTitle="Leadership Development for BPOs | Impactology"
	ogDescription="Elevate BPO leadership with Impactology's tailored training. Build trust, foster collaboration, and drive client success with proven frameworks and tools."
	ogImage="https://impactology.com.au/icon2.png"
	ogType="website"
	canonical="https://impactology.com.au/leadership-development-for-bpos"
	jsonLd={{
		'@context': 'https://schema.org',
		'@type': 'Course',
		name: 'Leadership Development for BPOs',
		description:
			'A comprehensive leadership development program designed to elevate BPO leaders and teams to thrive in complex, dynamic environments.',
		provider: {
			'@type': 'Organization',
			name: 'Impactology',
			url: 'https://impactology.com.au'
		}
	}}
/>

<!-- Hero Section -->
<section
	class="section-yellow pt-12 pb-24 md:py-8 bg-cover bg-center relative md:min-h-[60vh]"
	style="background-image: url('/bpip-hero-bg.webp');"
>
	<div class="absolute inset-0 bg-yellow-300/70 md:hidden"></div>
	<div class="container-custom relative z-10 flex items-center h-full">
		<div class="max-w-xl">
			<h1 class="mb-6 text-4xl lg:text-6xl font-bold text-black">
				Leadership Development for BPOS
			</h1>
			<a href="#register-interest" class="inline-block bg-secondary text-secondary-content px-6 py-4 uppercase font-bold mb-6 hover:brightness-90 transition-all rounded-4xl text-center">
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
					<h2 class="text-4xl md:text-5xl font-bold mb-8">
						LEADERSHIP TRAINING PROGRAM FOR BPO LEADERS AND TEAMS
					</h2>
					<p class="text-lg leading-relaxed mb-6 opacity-80">
						Step out of the daily whirlwind and take action toward building a high-performing,
						cohesive BPO team – amplify your leadership and drive client success today!
					</p>
					<p class="text-xl font-bold mb-6 opacity-90">
						Builders of trust. Champions of seamless service delivery.
					</p>
					<p class="text-lg leading-relaxed mb-6 opacity-80">
						BPO leaders and teams play a vital role in representing their clients, serving as the
						first point of contact for issues, questions, and solutions. Success hinges on smooth
						cross-functional collaboration, adapting to ever-evolving client needs, and fostering
						strong cultural alignment across global teams.
					</p>
					<p class="text-lg leading-relaxed mb-6 opacity-80">
						Our BPO Leadership Development Experience is tailored for BPOs and equips leaders and
						their teams with the practical tools, proven frameworks, and a growth mindset to execute
						strategies effectively, build trust with clients, and foster a positive and resilient
						work environment.
					</p>
					<p class="text-lg leading-relaxed mb-8 opacity-80">
						Whether your goal is to strengthen collaboration, enhance communication, or unify team
						culture, this program is for you: builds the skills needed to adapt, excel, and deliver
						exceptional client service in a dynamic industry.
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
						alt="Leadership Development for BPOs"
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
						What makes this Leadership Training Program for BPOs unique?
					</h2>
					<p class="text-lg leading-relaxed mb-6 opacity-80">
						At Impactology, we specialise in helping leaders and teams develop into trusted business
						partners. It is what we love doing, and what we excel at. Our approach is rooted in four
						core principles:
					</p>
					<p class="text-xl font-bold mb-6 opacity-90">
						Know yourself, know your organisation, know your clients, and know their organisation.
					</p>
					<p class="text-lg leading-relaxed mb-6 opacity-80">
						This program blends evidence-based tools, actionable insights, and practical case
						studies to develop the skills essential for thriving in high-pressure, client-focused
						environments.
					</p>
					<p class="text-lg leading-relaxed mb-8 opacity-80">
						We focus on driving results – equipping BPO leaders and teams to apply their learning
						effectively, fostering stronger client relationships, enhancing team cohesion, and
						boosting overall performance.
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
						alt="Leadership Training Program for BPOs unique"
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

<!-- Call to Action for BPO Leaders -->
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
					<h2 class="text-4xl md:text-5xl font-bold mb-6">THE CALL TO ACTION FOR BPO LEADERS!</h2>
					<p class="text-lg leading-relaxed mb-6 opacity-80">
						BPO leaders and teams must navigate complex client needs, cross-cultural dynamics, and
						evolving industry challenges. This program equips participants with the leadership
						skills to thrive in this complex environment, ensuring greater team unity and building
						stronger client partnerships.
					</p>
					<p class="text-lg leading-relaxed mb-6 opacity-80">
						Our Leadership Development Program for BPOs is tailored to help leaders and teams excel
						in their roles, deliver exceptional client results, and drive growth within the
						organisation.
					</p>
					<p class="text-lg font-medium mb-4">The learning outcomes for participants include:</p>
					<ul class="space-y-3 mb-8">
						<li class="flex items-start gap-3">
							<span class="text-primary mt-1 shrink-0">●</span>
							<span class="opacity-80"
								><strong>Enhancing communication and collaboration:</strong> Strengthening the ability
								to work effectively across teams and stakeholders.</span
							>
						</li>
						<li class="flex items-start gap-3">
							<span class="text-primary mt-1 shrink-0">●</span>
							<span class="opacity-80"
								><strong>Building trust through consistency:</strong> Fostering strong business partnering
								relationships with colleagues and clients by consistently delivering on commitments.</span
							>
						</li>
						<li class="flex items-start gap-3">
							<span class="text-primary mt-1 shrink-0">●</span>
							<span class="opacity-80"
								><strong>Developing a cohesive team culture:</strong> Promoting an environment that values
								diversity of thought and inclusivity to unite and empower the team.</span
							>
						</li>
						<li class="flex items-start gap-3">
							<span class="text-primary mt-1 shrink-0">●</span>
							<span class="opacity-80"
								><strong>Strengthening strategic alignment:</strong> Aligning efforts with client and
								organisational goals for maximum impact.</span
							>
						</li>
						<li class="flex items-start gap-3">
							<span class="text-primary mt-1 shrink-0">●</span>
							<span class="opacity-80"
								><strong>Overcoming obstacles with empathy:</strong> Using reframing techniques and a
								proven approach to promoting empathy with stakeholders and clients.</span
							>
						</li>
						<li class="flex items-start gap-3">
							<span class="text-primary mt-1 shrink-0">●</span>
							<span class="opacity-80"
								><strong>Fostering creativity and proactivity:</strong> Encouraging innovative thinking
								and decision-making to stay ahead in a dynamic environment.</span
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
	prefix="[Leadership Development for BPOs Interest]"
	introText="At Impactology, we empower BPO leaders and teams to thrive in complex, dynamic environments, transforming them into high-performing business partners. Ready to amplify your leadership presence and strengthen client relationships? Let's start the conversation – complete the form below to take the first step."
/>
