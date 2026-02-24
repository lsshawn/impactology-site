<script lang="ts">
	import SEO from '$lib/components/SEO.svelte';
	import ClientLogos from '$lib/components/ClientLogos.svelte';
	import ContactForm from '$lib/components/ContactForm.svelte';
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

	const modules = [
		{
			icon: '/bpip-icon01.webp',
			title: 'KNOW YOUR BUSINESS',
			subtitle: 'How BPO leaders can align with client and organisational goals',
			description:
				'BPO leaders who understand both their organisation and their clients\' businesses are better positioned to deliver value. This module covers the core elements of business models and how BPO leaders can use this knowledge to align services, drive better outcomes and support informed decision-making.'
		},
		{
			icon: '/bpip-icon02.webp',
			title: 'KNOW YOUR STAKEHOLDERS',
			subtitle: 'Trust is the foundation of all success!',
			description:
				'Building trusted relationships with clients and internal teams is the cornerstone of BPO leadership success. This module focuses on identifying key stakeholder relationships, developing trust, and building the communication skills necessary to maintain a strong, impactful presence across all business interactions.'
		},
		{
			icon: '/bpip-icon03.webp',
			title: 'KNOW YOUR ENVIRONMENT',
			subtitle: 'Adapting to industry trends and client dynamics',
			description:
				'BPO leaders operate in dynamic environments shaped by technology, industry trends, and evolving client expectations. This module builds your capacity to scan and understand the macro environment, identify emerging trends, and adapt your team\'s approach to stay ahead of change and deliver consistent value.'
		},
		{
			icon: '/bpip-icon04.webp',
			title: 'BPO LEADERSHIP TOOLKIT',
			subtitle: 'Elevating team and client impact through practical tools',
			description:
				'Participants are introduced to tools like the ACDC Contextual Partnering Model to understand how to navigate different delivery modes depending on the team and client context. These tools provide a framework for developing a strong personal and team brand, and for amplifying your impact as a BPO leader.'
		},
		{
			icon: '/bpip-icon05.webp',
			title: 'UNLOCK THE POWER OF DATA STORYTELLING',
			subtitle: 'A critical skill for influencing clients and teams',
			description:
				'In BPO environments, the ability to communicate performance data compellingly is essential. This module teaches BPO leaders how to use data storytelling to influence client decisions, engage their teams, and clearly articulate the value of the services they deliver.'
		},
		{
			icon: '/bpip-icon06.webp',
			title: 'KNOW THE VALUE YOU DELIVER',
			subtitle: "Articulating and measuring your team's impact",
			description:
				"To demonstrate impact, BPO leaders need frameworks for measuring and communicating the value their teams create. This module shares practical approaches for assessing service value, understanding client priorities, and building a culture of accountability and continuous improvement within your BPO team."
		}
	];

	let learnImg = $state(false);
	let learnText = $state(false);
	let clientsHeading = $state(false);
	let clientsLogos = $state(false);
	let modulesHeading = $state(false);
	let modulesGrid = $state(false);
	let registerHeading = $state(false);
	let registerForm = $state(false);
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
	class="section-yellow py-24 md:py-8 bg-cover bg-center relative"
	style="background-image: url('/bpip-hero-bg.webp'); height: 60vh; max-height: 60vh;"
>
	<div class="container-custom relative z-10 flex items-center h-full">
		<div class="max-w-xl">
			<h1 class="mb-6 text-5xl lg:text-6xl font-bold text-black">
				Leadership Development for BPOS
			</h1>
			<p class="text-lg font-bold mb-8 text-black max-w-lg">
				Builders of trust. Champions of seamless service delivery.
			</p>
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

<!-- What You'll Learn -->
<section
	class="py-20 md:py-28 bg-base-100"
	use:trigger={(v) => {
		learnImg = v;
		setTimeout(() => (learnText = v), 150);
	}}
>
	<div class="container-custom">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
			<div>
				{#if learnText}
					<div in:fly={{ x: -30, duration: 600 }}>
						<h2 class="text-4xl md:text-5xl font-bold mb-8">WHAT YOU'LL LEARN</h2>
						<p class="text-lg leading-relaxed mb-6 opacity-80">
							At Impactology, we empower BPO leaders and teams to thrive in complex, dynamic
							environments. Our program is built around four core principles: know yourself, know
							your organisation, know your clients, and know their organisation.
						</p>
						<p class="text-lg leading-relaxed mb-6 opacity-80">
							This Leadership Training Program for BPO Leaders and Teams is designed to build the
							capability, confidence and commercial acumen needed to lead high-performing BPO teams
							and deliver exceptional client outcomes.
						</p>
						<p class="text-lg font-medium mb-4">
							The call to action for BPO leaders — participants will:
						</p>
						<ul class="space-y-3 mb-8">
							<li class="flex items-start gap-3">
								<span class="text-primary mt-1 shrink-0">●</span>
								<span class="opacity-80">Enhance communication and collaboration across teams and clients</span>
							</li>
							<li class="flex items-start gap-3">
								<span class="text-primary mt-1 shrink-0">●</span>
								<span class="opacity-80">Build trust through consistency and reliable service delivery</span>
							</li>
							<li class="flex items-start gap-3">
								<span class="text-primary mt-1 shrink-0">●</span>
								<span class="opacity-80">Develop a cohesive team culture focused on client success</span>
							</li>
							<li class="flex items-start gap-3">
								<span class="text-primary mt-1 shrink-0">●</span>
								<span class="opacity-80">Strengthen strategic alignment with client and organisational goals</span>
							</li>
							<li class="flex items-start gap-3">
								<span class="text-primary mt-1 shrink-0">●</span>
								<span class="opacity-80">Overcome obstacles with empathy and effective reframing techniques</span>
							</li>
							<li class="flex items-start gap-3">
								<span class="text-primary mt-1 shrink-0">●</span>
								<span class="opacity-80">Foster creativity and proactivity in service delivery</span>
							</li>
						</ul>
					</div>
				{/if}
			</div>
			{#if learnImg}
				<div class="flex justify-center" in:fly={{ x: 30, duration: 600 }}>
					<img
						src="/bpip-learn.webp"
						alt="Leadership Development for BPOs learning framework"
						class="w-full max-w-md object-contain"
					/>
				</div>
			{/if}
		</div>
	</div>
</section>

<!-- Client Logos -->
<section class="py-16">
	<div
		class="container-custom"
		use:trigger={(v) => {
			clientsHeading = v;
			setTimeout(() => (clientsLogos = v), 200);
		}}
	>
		{#if clientsHeading}
			<h2
				class="text-4xl md:text-5xl font-bold text-center mb-12"
				in:fly={{ y: 30, duration: 600 }}
			>
				SOME COMPANIES WE'VE PARTNERED WITH
			</h2>
		{/if}
		{#if clientsLogos}
			<div in:fly={{ y: 20, duration: 600 }}>
				<ClientLogos logos={clientLogos} marquee={true} />
			</div>
		{/if}
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

<!-- Register Interest Form -->
<section
	id="register-interest"
	class="section-dark py-20 md:py-28"
	use:trigger={(v) => {
		registerHeading = v;
		setTimeout(() => (registerForm = v), 150);
	}}
>
	<div class="container-custom">
		<div class="max-w-3xl mx-auto">
			{#if registerHeading}
				<div class="text-center mb-12" in:fly={{ y: 30, duration: 600 }}>
					<h2 class="text-5xl lg:text-7xl font-bold text-white mb-6">REGISTER YOUR INTEREST</h2>
					<p class="text-lg text-white opacity-80">
						At Impactology, we empower BPO leaders and teams to thrive in complex, dynamic
						environments. Connect with us to find out how this program can help your team by filling
						out the form below.
					</p>
				</div>
			{/if}
			{#if registerForm}
				<div in:fly={{ y: 30, duration: 600 }}>
					<ContactForm
						prefix="[Leadership Development for BPOs Interest]"
						class="bg-neutral/50 p-8 md:p-12"
					/>
				</div>
			{/if}
		</div>
	</div>
</section>
