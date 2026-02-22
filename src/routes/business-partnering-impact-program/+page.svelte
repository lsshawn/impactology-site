<script lang="ts">
	import SEO from '$lib/components/SEO.svelte';
	import ClientLogos from '$lib/components/ClientLogos.svelte';
	import ContactForm from '$lib/components/ContactForm.svelte';
	import TestimonialSlider from '$lib/components/TestimonialSlider.svelte';
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
			title: 'UNDERSTANDING THE BUSINESS',
			subtitle: 'Systematic approach to understanding your business model.',
			description:
				'We establish a clear definition of what it means to think and act strategically, whilst nurturing a strong commercial mindset. This module covers the broad and inter-related areas of a company business model, and how to use this knowledge to support the business with informed decision making.'
		},
		{
			icon: '/bpip-icon02.webp',
			title: 'EVOLVING BUSINESS RELATIONSHIPS',
			subtitle: 'Core capabilities for strategic partnering',
			description:
				'This module identifies the roles in business partner relationships, including key internal stakeholders and colleagues. We focus on the importance of building trust, effective communication skills and having presence in the business partnering relationship for optimal impact.'
		},
		{
			icon: '/bpip-icon03.webp',
			title: 'KNOW YOUR MACRO WORLD',
			subtitle: 'Understanding external influences to enhance decision-making',
			description:
				'Business decisions are influenced by internal and external factors. This module focuses on building a strong "outside-in" view of the world and how macro-environmental factors impact a company\'s direction and how they impact your team\'s decision-making.'
		},
		{
			icon: '/bpip-icon04.webp',
			title: 'BUSINESS PARTNERING TOOLKIT',
			subtitle: 'High impact skills for greater effectiveness',
			description:
				'In this module, you will be introduced to tools such as the ACDC Contextual Partnering Model and understanding when to navigate between delivering, coaching, advising and partnering. We also cover the power of thought-provoking high impact questions as you expand your knowledge of models and frameworks.'
		},
		{
			icon: '/bpip-icon05.webp',
			title: 'THE ART OF DATA STORYTELLING',
			subtitle: 'Build your data and analytics storytelling muscle',
			description:
				'Whether you are pitching an idea, communicating a new strategy, or engaging with colleagues, effective storytelling serves an important role in the workplace and any change process. As Business Partners, regardless of discipline, there is immense value in building your confidence using data and analytics to increase your impact and engage with your stakeholders.'
		},
		{
			icon: '/bpip-icon06.webp',
			title: 'UNDERSTANDING & DELIVERING VALUE',
			subtitle: 'Key drivers necessary for strategic success',
			description:
				"To know you're having impact, you need to be able to measure the value your team deliver as Business Partners. This module shares our Service Impact Model and provides a framework for you to use in assessing the value you are creating individually and as a team."
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

	// Per-block reveal states
	let learnImg = $state(false);
	let learnText = $state(false);
	let clientsHeading = $state(false);
	let clientsLogos = $state(false);
	let modulesHeading = $state(false);
	let modulesGrid = $state(false);
	let bookImg = $state(false);
	let bookText = $state(false);
	let registerHeading = $state(false);
	let registerForm = $state(false);
</script>

<SEO
	title="Business Partnering Impact Program | Impactology"
	description="Explore Impactology's Business Partnering Programs. Elevate your brand with innovative solutions & boost growth. Join us today!"
	ogTitle="Business Partnering Impact Program | Impactology"
	ogDescription="Our Business Partnering Impact Program is designed to help build a high performing and effective team of business partners, enhancing their business partnering capability."
	ogImage="https://impactology.com.au/icon2.png"
	ogType="website"
	canonical="https://impactology.com.au/business-partnering-impact-program"
	jsonLd={{
		'@context': 'https://schema.org',
		'@type': 'Course',
		name: 'Business Partnering Impact Program',
		description:
			'A comprehensive program designed to help build a high performing and effective team of business partners.',
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
				Business Partnering Impact Program
			</h1>
			<p class="text-lg font-bold mb-8 text-black max-w-lg">
				Build an effective high performing team of business partners who are ready to make an
				impact.
			</p>
			<a href="#register-interest" class="btn btn-secondary btn-lg uppercase font-bold mb-6">
				REGISTER YOUR INTEREST
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
							Organisations face increasing industry disruption, market uncertainties, competition,
							risk and rapid innovation. For any team of business partners, these considerations
							bring an increased responsibility for driving and owning business outcomes and
							boosting overall team performance.
						</p>
						<p class="text-lg leading-relaxed mb-6 opacity-80">
							Our Business Partnering Impact Program is designed to help build a high performing and
							effective team of business partners, enhancing their business partnering capability.
							The Program is designed for all disciplines.
						</p>
						<p class="text-lg font-medium mb-4">
							After completing the Business Partnering Impact Program, your team will:
						</p>
						<ul class="space-y-3 mb-8">
							<li class="flex items-start gap-3">
								<span class="text-primary mt-1 shrink-0">●</span>
								<span class="opacity-80"
									>Be equipped with the relevant skills to meet the demands of key stakeholders and
									the increased pace of change</span
								>
							</li>
							<li class="flex items-start gap-3">
								<span class="text-primary mt-1 shrink-0">●</span>
								<span class="opacity-80"
									>Create a stronger foundation for your stakeholder relationships</span
								>
							</li>
							<li class="flex items-start gap-3">
								<span class="text-primary mt-1 shrink-0">●</span>
								<span class="opacity-80"
									>Position themselves as a highly valued and trusted strategic advisors</span
								>
							</li>
							<li class="flex items-start gap-3">
								<span class="text-primary mt-1 shrink-0">●</span>
								<span class="opacity-80"
									>Improve their commercial acumen to complement their technical expertise</span
								>
							</li>
						</ul>
						<p class="text-base leading-relaxed opacity-70">
							The program consists of seven modules, delivered online or in-person. The in-house
							sessions are tailored to drive the desired service delivery changes and improve the
							business partnering experience across your team and organisation. You will also gain
							access to the Impactology community and content.
						</p>
					</div>
				{/if}
			</div>
			{#if learnImg}
				<div class="flex justify-center" in:fly={{ x: 30, duration: 600 }}>
					<img
						src="/bpip-learn.webp"
						alt="Business Partnering Impact Program learning framework"
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
				CORE MODULES
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

<!-- The Book Section -->
<section
	class="py-20 md:py-28 bg-base-300"
	use:trigger={(v) => {
		bookImg = v;
		setTimeout(() => (bookText = v), 150);
	}}
>
	<div class="container-custom">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
			{#if bookText}
				<div in:fly={{ x: -30, duration: 600 }}>
					<h2 class="text-4xl md:text-5xl font-bold mb-6">THE BUSINESS PARTNERING PLAYBOOK</h2>
					<p class="text-xl font-bold mb-6">
						Finally, a book that provides realistic and targeted advice to Business Partners!
					</p>
					<p class="text-lg leading-relaxed mb-6 opacity-80">
						Business Partners hold a vital role as trusted confidants with deep technical expertise,
						and their impact is evident across all business functions. Initially tasked with
						providing advice, they are now true collaborating partners, ideally placed to lead and
						manage change in the changing world of work and business.
					</p>
					<p class="text-lg leading-relaxed mb-6 opacity-80">
						Yet as the Business Partner role has changed, there has been no pathway to develop the
						competencies essential for their success. Until now.
					</p>
					<p class="text-lg leading-relaxed mb-8 opacity-80">
						If you are a current or aspiring Business Partner — HR, Finance, Procurement, IT, Risk,
						Audit, Compliance, Legal, Marketing — this is the book for you.
					</p>
					<p class="text-lg font-bold">
						EVOLVE shows you how to navigate service models and systems, build your commercial
						acumen and deliver value to your organisation.
					</p>
				</div>
			{/if}
			{#if bookImg}
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
						that will support you to truly have an impact. If you're ready to increase your impact
						as a Business Partner, register your interest to join our Business Partnering Impact
						Program by filling out the form below.
					</p>
				</div>
			{/if}
			{#if registerForm}
				<div in:fly={{ y: 30, duration: 600 }}>
					<ContactForm
						prefix="[Business Partnering Impact Program Interest]"
						class="bg-neutral/50 p-8 md:p-12"
					/>
				</div>
			{/if}
		</div>
	</div>
</section>
