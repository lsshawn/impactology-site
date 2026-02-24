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
			subtitle: 'How IT Business Partners can best support their business model',
			description:
				"We share a systematic and clear approach on what it means to think and act strategically while nurturing a strong commercial mindset for IT leaders and employees. This module is essential for the development of a mature and effective IT function, covers the broad and inter-related areas of a company's business model, and how to use this information to support the business with informed decision-making as part of the overall business strategy."
		},
		{
			icon: '/bpip-icon02.webp',
			title: 'KNOW YOUR STAKEHOLDERS',
			subtitle: "Without trust, technical skills alone won't suffice.",
			description:
				'Building and nurturing trusted business relationships across all business functions is a foundational capability for IT teams. This module focuses on the role IT business partners play in building relationships with internal stakeholders, customers and suppliers. We focus on the importance of building trust, effective communication skills, and maintaining a relevant presence in the business partnering relationship for optimal impact.'
		},
		{
			icon: '/bpip-icon03.webp',
			title: 'KNOW YOUR MACRO WORLD',
			subtitle: 'Understanding external influences helps enhance decision-making.',
			description:
				'Business decisions are influenced by internal and external factors across different industries, markets and geographies. This module focuses on building a strong "outside-in" view of the world, and how macro-environmental factors impact a company\'s direction and the IT team\'s broader decision-making. A solid understanding of the macro factors that impact the organisation, is critical to effective decision making.'
		},
		{
			icon: '/bpip-icon04.webp',
			title: 'IT BUSINESS PARTNERING TOOLKIT',
			subtitle: 'Improved stakeholder engagement through high impact skills.',
			description:
				'Participants will learn about the ACDC Contextual Partnering Model, to help identify and understand the different delivery modes of a business partner depending on the business and stakeholder context. These tools provide a valuable insight into building a strong internal personal brand and how they can amplify their impact by leveraging the different modes of business partnering in the right context.'
		},
		{
			icon: '/bpip-icon05.webp',
			title: 'LEARN DATA STORYTELLING',
			subtitle: 'A vital "life" skill for all IT Professionals.',
			description:
				"Storytelling plays a major function in all work contexts and done well, helps transform the impact IT business partners have on their business. This influential capability can therefore help unlock an IT team's ability to better collaborate and negotiate better outcomes for the overall business. The result: creating a high-performance environment that thrives on action and outcomes, not just ideas."
		},
		{
			icon: '/bpip-icon06.webp',
			title: 'KNOW THE VALUE YOU DELIVER',
			subtitle: 'Articulate and measure the value you deliver.',
			description:
				"To know you're having an impact, you need to know how to articulate and measure the value your team delivers as IT business partners. It is knowing the trade-offs you make about what you do and what you don't do as a team: this makes all the difference to stakeholders. This module shares some high impact frameworks for you to use in assessing the value IT Business Partners deliver individually and as a team."
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
	title="IT Business Partnering Program | Impactology"
	description="Take your internal IT strategy to new heights with Impactology's IT Business Partnering development program. Enhance collaboration and increase productivity and efficiency."
	ogTitle="IT Business Partnering Program | Impactology"
	ogDescription="Take your internal IT strategy to new heights with Impactology's IT Business Partnering development program. Enhance collaboration and increase productivity and efficiency."
	ogImage="https://impactology.com.au/icon3.png"
	ogType="website"
	canonical="https://impactology.com.au/it-business-partnering"
	jsonLd={{
		'@context': 'https://schema.org',
		'@type': 'Course',
		name: 'IT Business Partnering Program',
		description:
			'A comprehensive program designed to empower IT teams with tools, frameworks, language and mindset to become trusted experts in driving organisational change.',
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
				Information Technology (IT) Business Partnering Training Program
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
						Take the first step towards building a trusted and high-performing internal IT team –
						and amplify your business partnering impact to the next level.
					</p>
					<p class="text-xl font-bold mb-6 opacity-90">
						Builders of trust. Experts in technology and change.
					</p>
					<p class="text-lg leading-relaxed mb-6 opacity-80">
						Enhancing the maturity of your IT operations and building sustainable relationships with
						key internal stakeholders starts with trust: trust in one another and in the team's
						capabilities. It starts with executing the business partnering fundamentals consistently.
					</p>
					<p class="text-lg leading-relaxed mb-6 opacity-80">
						Getting these basics right, means building sustainable and proactive relationships with
						your key internal stakeholders becomes easier. The IT Business Partnering Impact Program
						is designed to empower your team with the relevant tools, frameworks, language and
						mindset to become trusted experts in driving organisational change.
					</p>
					<p class="text-lg leading-relaxed mb-8 opacity-80">
						So if your team requires a <strong>capability boost</strong>, if you're tasked with
						driving IT change across the business, or if you're leading a new team of IT Business
						Partners and want to get them 'talking' the same language of business partnering and
						behaving in an aligned way – then we'd like to hear from you!
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
						alt="IT Business Partnering Program"
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
						What makes this IT Business Partnering DEVELOPMENT PROGRAM unique?
					</h2>
					<p class="text-lg leading-relaxed mb-6 opacity-80">
						Firstly, we specialise in developing business partners. It's what we do, it's what we
						are passionate about and what we do well. It's our dedication to establishing the core
						fundamentals of business partnering with all our participants: Know yourself. Know your
						business. Know your stakeholders.
					</p>
					<p class="text-lg leading-relaxed mb-6 opacity-80">
						We deliver content through a combination of research-driven tools and frameworks,
						real-world insights, and meaningful conversations that emphasise building trust across
						the team and organisation.
					</p>
					<p class="text-lg leading-relaxed mb-8 opacity-80">
						Above all, we prioritise taking action. Doing something different to get a positive
						result for your business and stakeholders.
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
						alt="IT Business Partnering unique program"
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

<!-- Call to Action for IT Teams -->
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
					<h2 class="text-4xl md:text-5xl font-bold mb-6">THE CALL TO ACTION FOR IT TEAMS!</h2>
					<p class="text-lg leading-relaxed mb-6 opacity-80">
						In today's dynamic environment, businesses face increasing industry disruption, market
						uncertainties, risk, and rapid innovation. For any team of <strong
							>IT business partners</strong
						>, more than ever, these considerations bring an increased responsibility for driving and
						owning business outcomes. This call to action for IT Teams serves as a vital pillar in
						managing change across any organisation and staying relevant in the face of fast-changing
						industry and technology market trends. An effective IT team forms a key part helping
						drive change across any organisation and helping achieve core strategic goals.
					</p>
					<p class="text-lg leading-relaxed mb-6 opacity-80">
						Our <strong>IT Business Partnering training</strong> is tailored to develop a high-performing
						and trusted group of <strong>IT business partners</strong>, amplifying their business
						acumen, differentiating their capabilities and giving them an edge in the marketplace.
						Aimed at IT managers and their teams, this course is suitable for all backgrounds.
					</p>
					<p class="text-lg font-medium mb-4">The learning outcomes for participants include:</p>
					<ul class="space-y-3 mb-8">
						<li class="flex items-start gap-3">
							<span class="text-primary mt-1 shrink-0">●</span>
							<span class="opacity-80"
								>Equip themselves with the necessary behavioural attributes to meet the
								expectations of key internal and external stakeholders.</span
							>
						</li>
						<li class="flex items-start gap-3">
							<span class="text-primary mt-1 shrink-0">●</span>
							<span class="opacity-80"
								>Establish a solid foundation of trust with their team, core stakeholders and other
								functions.</span
							>
						</li>
						<li class="flex items-start gap-3">
							<span class="text-primary mt-1 shrink-0">●</span>
							<span class="opacity-80"
								>Develop a personal brand known as a consistent and trusted strategic advisor.</span
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
		<TestimonialSlider />
	</div>
</section>

<RegisterInterestSection prefix="[IT Business Partnering Program Interest]" />
