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
			subtitle: 'How MSP/MSSP employees can best support their business model',
			description:
				"We share a systematic and clear approach on what it means to think and act strategically while nurturing a strong commercial mindset for MSP/MSSP leaders and employees. This module is essential for the development of a mature and effective MSP/MSSP, covers the broad and inter-related areas of your company's business model, and how to use this information to support the business and clients with informed decision-making as part of the overall business strategy."
		},
		{
			icon: '/bpip-icon02.webp',
			title: 'KNOW YOUR STAKEHOLDERS',
			subtitle: "Without trust, technical skills alone won't suffice.",
			description:
				'Building and nurturing trusted and collaborative business relationships across your business is a foundational capability for any high-performing business. This module focuses on the role employees play in building relationships with internal stakeholders, clients and partners/vendors. We focus on the importance of building trust, effective communication skills, and maintaining a relevant presence in the business partnering relationship for optimal impact.'
		},
		{
			icon: '/bpip-icon03.webp',
			title: 'KNOW YOUR MACRO WORLD',
			subtitle: 'Understanding external influences helps optimise decision-making.',
			description:
				'Effective business decisions are influenced by balancing both internal and external factors across different industries, markets and geographies. This module focuses on building a strong "outside-in" view of the world, and how macro-environmental factors impact a company\'s direction. A solid understanding of the macro factors that impact the organisation, and is critical to effective decision making.'
		},
		{
			icon: '/bpip-icon04.webp',
			title: 'IT BUSINESS PARTNERING TOOLKIT',
			subtitle: 'Improved stakeholder engagement through high impact capabilities.',
			description:
				'Participants will learn about the AC/DC Contextual Partnering Model, to help identify and understand the different delivery modes of a business partner depending on the MSP/MSSPs context and stage of growth. These tools provide a valuable insight into building a strong personal brand and how to amplify their impact by leveraging the different modes of business partnering in the right context.'
		},
		{
			icon: '/bpip-icon05.webp',
			title: 'LEARN DATA STORYTELLING',
			subtitle: 'A vital "life" skill for all MSP/MSSP Professionals',
			description:
				"Storytelling plays a major role in all work contexts and done well, helps transform the relationships with clients, vendors/partners and on their business. This life skill can help unearth an IT team's ability to better collaborate and negotiate better outcomes for the overall business. The result: creating a high-performance culture that thrives on action and outcomes, not just ideas."
		},
		{
			icon: '/bpip-icon06.webp',
			title: 'KNOW THE VALUE YOU DELIVER',
			subtitle: 'Measuring and articulating the value you deliver',
			description:
				"How do you know you're having an impact? You need to know how to clearly articulate and measure the value your team delivers to your valued clients. It is knowing the trade-offs you make about what you do and what you don't do as a team: this makes all the difference to all stakeholders. This module shares some high impact frameworks for you to use in assessing the value your business deliver individually and as a team."
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
	title="MSP MSSP Leadership Development Program | Impactology"
	description="Empower your MSP/MSSP team with skills to foster trust, collaboration, and growth. Align employee development with your business goals for sustainable success."
	ogTitle="MSP MSSP Leadership Development Program | Impactology"
	ogDescription="Empower your MSP/MSSP team with skills to foster trust, collaboration, and growth. Align employee development with your business goals for sustainable success."
	ogImage="https://www.impactology.com.au/icon2.png"
	ogType="website"
	canonical="https://www.impactology.com.au/msp-bp-programs"
	jsonLd={{
		'@context': 'https://schema.org',
		'@type': 'Course',
		name: 'MSP/MSSP Employee Development Program',
		description:
			'A comprehensive program designed to empower MSP/MSSP teams with skills to foster trust, collaboration, and sustainable growth.',
		provider: {
			'@type': 'Organization',
			name: 'Impactology',
			url: 'https://www.impactology.com.au'
		}
	}}
/>

<svelte:head>
	<link rel="preload" as="image" href="/bpip-hero-bg.webp" fetchpriority="high" />
</svelte:head>

<!-- Hero Section -->
<section
	class="section-yellow pt-12 pb-24 md:py-8 bg-cover bg-center relative md:min-h-[60vh]"
	style="background-image: url('/bpip-hero-bg.webp');"
>
	<div class="absolute inset-0 bg-yellow-300/70 md:hidden"></div>
	<div class="container-custom relative z-10 flex items-center h-full">
		<div class="max-w-xl">
			<h1 class="mb-6 text-4xl lg:text-6xl font-bold text-black">
				Managed Service Provider (MSP/MSSP) Employee Development Program
			</h1>
			<a
				href="#register-interest"
				class="inline-block bg-secondary text-secondary-content px-6 py-4 uppercase font-bold mb-6 hover:brightness-90 transition-all rounded-4xl text-center"
			>
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
						Take the first step toward <strong>building a high-performing team</strong> that thrives on
						trust, collaboration, and leadership. Scale your Managed Service Provider (MSP) or Managed
						Security Service Provider (MSSP) business while preserving your company culture and aligning
						employee development with your growth aspirations.
					</p>
					<p class="text-xl font-bold mb-6 opacity-90">Builders of trust. Experts in technology.</p>
					<p class="text-lg leading-relaxed mb-6 opacity-80">
						In the dynamic world of MSPs/MSSPs, growth is both an opportunity and a challenge. While
						increasing MRR and scaling rapidly can be empowering, unchecked growth often puts undue
						pressure on the very teams driving your success. Sustainable growth begins with
						prioritising employee development—ensuring your team grows in step with your business.
					</p>
					<p class="text-lg leading-relaxed mb-6 opacity-80">
						This starts with equipping employees with the principles of <strong
							>business partnering.</strong
						>
					</p>
					<p class="text-lg leading-relaxed mb-6 opacity-80">
						Historically, business partnering referred to internal consultants/advisors supporting
						functional success. Today, it's more than a role – it's an attitude. It's about
						fostering collaboration, trust, and a deep passion for the business. It's about
						understanding your work's impact on clients and how cross-functional collaboration
						unlocks innovation and success.
					</p>
					<p class="text-lg leading-relaxed mb-6 opacity-80">
						The <strong>MSP/MSSP Employee Development Program</strong> equips your team with the tools,
						frameworks, language, and mindset they need to become trusted experts in prioritising exceptional
						client value. Through this program, your employees will develop the skills to break silos,
						embrace collaboration, and align their behaviors with your company's mission and vision.
					</p>
					<p class="text-lg leading-relaxed mb-8 opacity-80">
						<strong>Ready to empower your team?</strong> If you're responsible for driving employee or
						business growth and want your team to 'speak the language' of business partnering while working
						in alignment to achieve your company's goals, we'd love to hear from you. Let's start the
						conversation today!
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
						alt="MSP/MSSP Employee Development Program"
						width="665"
						height="374"
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
						WHAT MAKES THIS MSP/MSSP EMPLOYEE DEVELOPMENT PROGRAM UNIQUE?
					</h2>
					<p class="text-xl font-bold mb-4 opacity-90">
						We Specialise in Developing Business Partners
					</p>
					<p class="text-lg leading-relaxed mb-6 opacity-80">
						This is our passion, our expertise, and what we excel at. We thrive on supporting the
						growth and development of employees in the MSP/MSSP space. Our focus is on establishing
						the core fundamentals of business partnering to drive sustainable growth through
						high-performing teams:
					</p>
					<ul class="space-y-2 mb-6">
						<li class="flex items-start gap-3">
							<span class="text-primary mt-1 shrink-0">●</span>
							<span class="opacity-80">Know yourself.</span>
						</li>
						<li class="flex items-start gap-3">
							<span class="text-primary mt-1 shrink-0">●</span>
							<span class="opacity-80">Know your business.</span>
						</li>
						<li class="flex items-start gap-3">
							<span class="text-primary mt-1 shrink-0">●</span>
							<span class="opacity-80">Know your colleagues.</span>
						</li>
						<li class="flex items-start gap-3">
							<span class="text-primary mt-1 shrink-0">●</span>
							<span class="opacity-80">Know your clients.</span>
						</li>
					</ul>
					<p class="text-lg leading-relaxed mb-6 opacity-80">
						Our approach combines research-driven tools and frameworks, real-world insights, and
						meaningful connections that foster trust across teams and organisations.
					</p>
					<p class="text-lg leading-relaxed mb-8 opacity-80">
						In a fast-paced, ever-changing industry, staying the same is simply not an option.
						Taking action is our priority—and we're here to help you do the same.
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
						alt="MSP/MSSP Employee Development Program unique"
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

<!-- Call to Action for MSP/MSSP Teams -->
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
					<h2 class="text-4xl md:text-5xl font-bold mb-6">THE CALL TO ACTION FOR MSP/MSSPs!</h2>
					<p class="text-lg leading-relaxed mb-6 opacity-80">
						In today's dynamic environment, businesses face increasing industry disruption, market
						uncertainties, risk, and rapid innovation. For any <strong
							>aspiring high performing MSP/MSSP team</strong
						>, more than ever, these considerations bring an increased responsibility for driving
						and owning business outcomes. This call to action for leaders and employees serves as a
						vital pillar in managing growth and preserving your company culture and staying relevant
						in the face of fast-changing industry and technology market trends. Setting the
						foundation and defining sustainable growth in the MSP/MSSP world, forms a key part
						helping scale growth and helping achieve core strategic goals.
					</p>
					<p class="text-lg leading-relaxed mb-6 opacity-80">
						Our <strong>MSP/MSSP development experience</strong> is tailored to develop a
						high-performing
						<strong>business partners</strong>, amplifying their business acumen, differentiating
						their capabilities and giving them an edge in the marketplace. Tailored to the MSP/MSSP
						sector, this course is suitable for all experience and backgrounds.
					</p>
					<p class="text-lg font-medium mb-4">The learning outcomes for participants include:</p>
					<ul class="space-y-3 mb-8">
						<li class="flex items-start gap-3">
							<span class="text-primary mt-1 shrink-0">●</span>
							<span class="opacity-80"
								>Equip themselves with the necessary behavioural attributes to meet the expectations
								of key internal and external stakeholders, vendors and partners.</span
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
								>Develop a personal brand – known as a consistent and trusted strategic advisor.</span
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
						width="384"
						height="519"
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
	prefix="[MSP/MSSP Employee Development Program Interest]"
	introText="If you're ready to chat and share your aspirations, please fill in the form below to find out more about the MSP/MSSP Business Partnering Employee Development Program."
/>
