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
						Take the step towards building a high-performing and trusted HR team – amplify the
						impact of your team and align your business partnering approach to business needs of your
						key stakeholders – take your business partnering to the next level.
					</p>
					<p class="text-xl font-bold mb-6 opacity-90">
						Experts in change. Builders of trust. Leaders in collaboration.
					</p>
					<p class="text-lg leading-relaxed mb-6 opacity-80">
						Enhancing your HR / People & Culture operations starts with trust: trust in each other
						and in the team's capabilities. Consistently executing the basics of business partnering
						is crucial. When you get these fundamentals right, building sustainable and proactive
						relationships with stakeholders becomes easier.
					</p>
					<p class="text-lg leading-relaxed mb-6 opacity-80">
						The HR / People & Culture Business Partnering Impact Program is designed to empower your
						team with the tools, frameworks and mindset to become trusted experts in driving
						organisational change.
					</p>
					<p class="text-lg leading-relaxed mb-8 opacity-80">
						This program targets HR generalists, Communication experts, L&D, OD, Employee
						Experience, Recruitment and Talent Acquisition, Rewards and ER/IR professionals.
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
						alt="HR / People & Culture Business Partnering Program"
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
						What makes this HR / People & Culture Business Partnering Training Unique?
					</h2>
					<p class="text-lg leading-relaxed mb-6 opacity-80">
						Firstly, we specialise in developing business partners. It's what we do and what we do
						well. It's what drives us. We are dedicated to building those foundational principles of
						business partnering with all our participants and their leaders.
					</p>
					<p class="text-lg leading-relaxed mb-6 opacity-80">
						We achieve this through a blend of research-backed frameworks, practical tools, and
						real-world insights. But it's not just about the methods – we have real conversations
						that focus on building trust within the team. Above all, we prioritise taking action.
						It's about doing something different to get a positive result. Because in the end, it's
						action that makes all the difference. Positive change doesn't happen by chance.
					</p>
					<p class="text-lg leading-relaxed mb-8 opacity-80">
						So if you're looking at amplifying your team's capability, if you're responsible with
						driving change across the business, or if you're leading a new team of HR and People and
						Culture Business Partners and want to get them 'talking' the same language of business
						partnering – then we'd like to hear from you.
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
						alt="HR Business Partnering unique program"
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

<!-- Call to Action for HR / People & Culture Teams -->
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
						THE CALL TO ACTION FOR HR / PEOPLE & CULTURE TEAMS!
					</h2>
					<p class="text-lg leading-relaxed mb-6 opacity-80">
						For any team of HR/People & Culture business partners, today's dynamic world of work
						brings an increased responsibility for driving and owning business outcomes. This call
						to action is a vital pillar for managing change in any organisation. An effective HR and
						People & Culture Team forms a key part helping drive change across any organisation and
						helping achieve core strategic goals.
					</p>
					<p class="text-lg leading-relaxed mb-6 opacity-80">
						Our HR/People & Culture Business Partnering IMPACT Program initiative is tailored to
						develop a high-functioning and trusted group of HR/P&C business partners, building
						their commercial acumen, differentiating their capabilities and giving them an edge in
						the marketplace. Aimed at HR / People & Culture managers and their teams, this learning
						program is suitable for all levels of experience.
					</p>
					<p class="text-lg font-medium mb-4">
						The learning objectives of the HR/P&C Business Partnering IMPACT Program include:
					</p>
					<ul class="space-y-3 mb-8">
						<li class="flex items-start gap-3">
							<span class="text-primary mt-1 shrink-0">●</span>
							<span class="opacity-80"
								>Equip themselves with the necessary skills to meet the expectations of key
								internal and external stakeholders.</span
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
		<TestimonialSlider {testimonials} />
	</div>
</section>

<RegisterInterestSection prefix="[HR / People & Culture Business Partnering Program Interest]" />
