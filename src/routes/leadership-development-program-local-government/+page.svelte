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

	const testimonials = [
		{
			shortQuote: 'Guidance really helped',
			quote:
				'I really connected with and appreciated the style and approach. The one-on-one guidance really helped.',
			name: 'Claire',
			title: 'Senior Manager'
		},
		{
			shortQuote: 'Helped me achieve',
			quote:
				'My goal was to maintain focus on my most important leadership priorities and this program has helped me achieve this.',
			name: 'Andrew',
			title: 'General Counsel'
		},
		{
			shortQuote: 'Program helped me in so many ways',
			quote:
				'My learnings from this program have helped me in so many ways both personally and professionally.',
			name: 'Deborah',
			title: 'HR Director'
		},
		{
			shortQuote: 'Insights were innovative and pragmatic',
			quote:
				'I appreciated the extensive experience from a wide range of sectors to draw upon. The insights shared were innovative and pragmatic.',
			name: 'Raj',
			title: 'GM Human Resources'
		},
		{
			shortQuote: 'Truly enriching and transformational experience',
			quote:
				'The guidance I have received has been instrumental in helping me to workout my overall vision and strategies for my career and personal goals. This has been a truly enriching and transformational experience.',
			name: 'Katarina',
			title: 'Marketing Specialist'
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
				Leadership Development Program for Local Government
			</h1>
			<p class="text-lg font-bold mb-8 text-black max-w-lg">
				Community leaders. Public servants. Change makers.
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
							Local government leaders operate in one of the most complex environments in the public
							sector — balancing community expectations, political dynamics, and operational
							excellence. This program develops the leadership capabilities essential for thriving in
							this unique context.
						</p>
						<p class="text-lg leading-relaxed mb-6 opacity-80">
							The Leadership Development Program for Local Government is designed to empower your
							team with the tools, frameworks and mindset to become trusted experts in driving
							community outcomes.
						</p>
						<p class="text-lg font-medium mb-4">
							The learning objectives of the Leadership Development Program for Local Government
							include:
						</p>
						<ul class="space-y-3 mb-8">
							<li class="flex items-start gap-3">
								<span class="text-primary mt-1 shrink-0">●</span>
								<span class="opacity-80"
									>Equip themselves with the necessary skills to meet the expectations of key
									internal and external stakeholders</span
								>
							</li>
							<li class="flex items-start gap-3">
								<span class="text-primary mt-1 shrink-0">●</span>
								<span class="opacity-80"
									>Establish a solid foundation of trust with their team, stakeholders and other
									functions</span
								>
							</li>
							<li class="flex items-start gap-3">
								<span class="text-primary mt-1 shrink-0">●</span>
								<span class="opacity-80"
									>Establish themselves as a consistent and trusted strategic advisor</span
								>
							</li>
							<li class="flex items-start gap-3">
								<span class="text-primary mt-1 shrink-0">●</span>
								<span class="opacity-80"
									>Build their business acumen to complement their leadership proficiency</span
								>
							</li>
						</ul>
						<p class="text-base leading-relaxed opacity-70">
							This program features a face-to-face component, and micro-learning activities and
							check-in process to help embed the Program learnings.
						</p>
					</div>
				{/if}
			</div>
			{#if learnImg}
				<div class="flex justify-center" in:fly={{ x: 30, duration: 600 }}>
					<img
						src="/bpip-learn.webp"
						alt="Leadership Development for Local Government learning framework"
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
		<TestimonialSlider {testimonials} />
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
						We want to disrupt everyday thinking, spark new ideas and create new ways to interact
						that will support you to truly have an impact. If you're ready to elevate your leadership
						capabilities in local government, register your interest by filling out the form below.
					</p>
				</div>
			{/if}
			{#if registerForm}
				<div in:fly={{ y: 30, duration: 600 }}>
					<ContactForm
						prefix="[Leadership Development Program for Local Government Interest]"
						class="bg-neutral/50 p-8 md:p-12"
					/>
				</div>
			{/if}
		</div>
	</div>
</section>
