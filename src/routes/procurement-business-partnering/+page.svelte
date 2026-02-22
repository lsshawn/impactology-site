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
			<p class="text-lg font-bold mb-8 text-black max-w-lg">
				Builders of trust. Experts in change. Champions in collaboration.
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
							Enhancing the maturity of your procurement operations and building sustainable
							relationships with key stakeholders starts with trust: trust in each other and in the
							team's capabilities.
						</p>
						<p class="text-lg leading-relaxed mb-6 opacity-80">
							Our dedication to establishing the core principles of business partnering with all our
							participants: understanding yourself, understanding your business, understanding your
							stakeholders.
						</p>
						<p class="text-lg font-medium mb-4">
							Upon finishing the Procurement Business Partnering Training, participants will be able
							to:
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
						alt="Procurement Business Partnering learning framework"
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
						a Business Partner, register your interest to join our Business Partnering Impact Program
						by filling out the form below.
					</p>
				</div>
			{/if}
			{#if registerForm}
				<div in:fly={{ y: 30, duration: 600 }}>
					<ContactForm
						prefix="[Procurement Business Partnering Program Interest]"
						class="bg-neutral/50 p-8 md:p-12"
					/>
				</div>
			{/if}
		</div>
	</div>
</section>
