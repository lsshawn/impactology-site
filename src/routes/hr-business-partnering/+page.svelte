<script lang="ts">
	import SEO from '$lib/components/SEO.svelte';
	import ClientLogos from '$lib/components/ClientLogos.svelte';
	import ContactForm from '$lib/components/ContactForm.svelte';
	import TestimonialSlider from '$lib/components/TestimonialSlider.svelte';
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
			title: 'UNDERSTAND YOUR BUSINESS',
			subtitle: "Know how to support your company's business model.",
			description:
				"We help you grow your ability to think strategically and develop a strong commercial mindset. This module is crucial for building a mature and effective HR function. It covers essential aspects of what are the core elements of a business model, helping you make informed decisions that support the overall business strategy. This module is tailored to your company and industry – no 'off the shelf' solution here!"
		},
		{
			icon: '/bpip-icon02.webp',
			title: 'UNDERSTAND YOUR STAKEHOLDERS',
			subtitle: "Without trust, technical skills alone won't suffice.",
			description:
				'Building and nurturing trusted business relationships across all business functions is a foundational capability for all HR and P&C professionals – regardless of seniority. This module focuses on the role HR business partners play in building relationships with internal stakeholders and their People and Culture colleagues. We prioritise trust-building, building fit for purpose communication skills, and creating a strong presence in stakeholder relationships for maximum impact.'
		},
		{
			icon: '/bpip-icon03.webp',
			title: 'UNDERSTAND YOUR MACRO WORLD',
			subtitle: 'Understanding the external influences to improve decision-making.',
			description:
				'Business decisions are influenced by internal and external factors across different industries, markets and geographies. This module focuses on building a strong "outside-in" view of the world, and how macro-environmental factors impact a company\'s direction and the HR team\'s influence and decision-making. A solid understanding of the macro factors that can impact the organisation, is critical to effective HR/P&C decision making.'
		},
		{
			icon: '/bpip-icon04.webp',
			title: 'HR / PEOPLE & CULTURE BUSINESS PARTNERING TOOLKIT',
			subtitle: 'Build high impact skills for greater stakeholder effectiveness.',
			description:
				'This module will introduce you to tools like the ACDC Contextual Partnering Model to help identify and understand the different delivery modes of a business partner depending on the work and stakeholder context. These tools provide participants a valuable insight into their personal preferences, and how they can build a strong internal personal brand by leveraging the different modes of business partnering in the right context.'
		},
		{
			icon: '/bpip-icon05.webp',
			title: 'THE ART OF DATA STORYTELLING',
			subtitle: 'A vital "life" skill for all HR and People & Culture Teams.',
			description:
				"Storytelling plays an increasing role in all work contexts and done well, helps transform the impact business partners have on their business. Refining this lost skill of storytelling can unleash a HR/P&C team's ability to collaborate effectively and influence better outcomes for the overall business. This fosters a high-performance environment driven by action and tangible results, not just ideas."
		},
		{
			icon: '/bpip-icon06.webp',
			title: 'KNOW & MEASURE THE VALUE YOU DELIVER',
			subtitle: 'The core ingredient to driving team & stakeholder success.',
			description:
				"To know you're having an impact, you need to know how to articulate and measure the value your team delivers as HR business partners. It's knowing the trade-offs you make around what you do and what you don't do as a team. This makes all the difference to stakeholders. This module shares some high impact frameworks to use in assessing the value HR/P&C Business Partners deliver individually and as a team."
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
	let bookImg = $state(false);
	let bookText = $state(false);
	let registerHeading = $state(false);
	let registerForm = $state(false);
</script>

<SEO
	title="HR Business Partnering Program | Impactology"
	description="Take your People & Culture strategy to new heights with Impactology's HR / People & Culture Business Partnering development program. Enhance collaboration, build your team's brand and increase productivity and improve trust with key stakeholders."
	ogTitle="HR Business Partnering Program | Impactology"
	ogDescription="Take your People & Culture strategy to new heights with Impactology's HR / People & Culture Business Partnering development program. Enhance collaboration, build your team's brand and increase productivity and improve trust with key stakeholders."
	ogImage="https://impactology.com.au/icon3.png"
	ogType="website"
	canonical="https://impactology.com.au/hr-business-partnering"
	jsonLd={{
		'@context': 'https://schema.org',
		'@type': 'Course',
		name: 'HR / People & Culture Business Partnering Program',
		description:
			'A comprehensive program designed to empower HR and People & Culture teams with tools, frameworks, language and mindset to become trusted experts in driving organisational change.',
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
				HR / People & Culture Business Partnering Impact Program
			</h1>
			<p class="text-lg font-bold mb-8 text-black max-w-lg">
				Experts in change. Builders of trust. Leaders in collaboration.
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
							Enhancing your HR / People & Culture operations starts with trust: trust in each other
							and in the team's capabilities. Consistently executing the basics of business
							partnering is crucial.
						</p>
						<p class="text-lg leading-relaxed mb-6 opacity-80">
							The HR / People & Culture Business Partnering Impact Program is designed to empower
							your team with the tools, frameworks and mindset to become trusted experts in driving
							organisational change.
						</p>
						<p class="text-lg font-medium mb-4">
							The learning objectives of the HR/P&C Business Partnering IMPACT Program include:
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
									>Build their business acumen to complement their technical proficiency</span
								>
							</li>
						</ul>
						<p class="text-base leading-relaxed opacity-70">
							This program targets HR generalists, Communication experts, L&D, OD, Employee
							Experience, Recruitment and Talent Acquisition, Rewards and ER/IR professionals.
						</p>
					</div>
				{/if}
			</div>
			{#if learnImg}
				<div class="flex justify-center" in:fly={{ x: 30, duration: 600 }}>
					<img
						src="/bpip-learn.webp"
						alt="HR Business Partnering learning framework"
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
						and their impact is evident across all business functions. Initially tasked with providing
						advice, they are now true collaborating partners, ideally placed to lead and manage change
						in the changing world of work and business.
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
						EVOLVE shows you how to navigate service models and systems, build your commercial acumen
						and deliver value to your organisation.
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
						that will support you to truly have an impact. If you're ready to increase your impact as
						a Business Partner, register your interest by filling out the form below.
					</p>
				</div>
			{/if}
			{#if registerForm}
				<div in:fly={{ y: 30, duration: 600 }}>
					<ContactForm
						prefix="[HR / People & Culture Business Partnering Program Interest]"
						class="bg-neutral/50 p-8 md:p-12"
					/>
				</div>
			{/if}
		</div>
	</div>
</section>
