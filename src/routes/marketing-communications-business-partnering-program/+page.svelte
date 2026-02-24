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
			icon: 'https://impactology.com.au/wp-content/uploads/2021/08/core-icon01.png',
			title: 'Develop Strategic Business Partnering Skills',
			bullets: [
				{
					label: 'Build Trust and Influence',
					text: 'Learn how to establish credibility with stakeholders and become a trusted advisor within the organisation and with key external partners.'
				},
				{
					label: 'Enhance Communication',
					text: 'Master the art of conveying marketing insights in a language that resonates with non-marketing stakeholders.'
				}
			]
		},
		{
			icon: 'https://impactology.com.au/wp-content/uploads/2021/08/core-icon02.png',
			title: 'Enhance Business Acumen',
			bullets: [
				{
					label: 'Understand Organisational Dynamics',
					text: "Gain a deeper understanding of your organisation's business model to aid decision making and elevate your conversation with key stakeholders."
				},
				{
					label: 'Align Marketing with Business Goals',
					text: 'Ensure marketing initiatives directly support and drive organisational objectives.'
				}
			]
		},
		{
			icon: 'https://impactology.com.au/wp-content/uploads/2021/08/core-icon03.png',
			title: 'Foster Cross-Functional Collaboration',
			bullets: [
				{
					label: 'Break Down Silos',
					text: 'Create strong partnerships with other departments to improve connectivity and drive high impact campaigns.'
				},
				{
					label: 'Improve Teamwork',
					text: 'Leverage diverse perspectives to foster innovation and achieve better results.'
				}
			]
		},
		{
			icon: 'https://impactology.com.au/wp-content/uploads/2021/08/core-icon04.png',
			title: 'Measure and Communicate Value',
			bullets: [
				{
					label: 'Demonstrate Value',
					text: "Utilise tools and frameworks to measure the impact of your marketing team's efforts."
				},
				{
					label: 'Communicate Successes',
					text: 'Learn to articulate the value of marketing to senior leadership and stakeholders.'
				}
			]
		},
		{
			icon: 'https://impactology.com.au/wp-content/uploads/2021/08/core-icon03.png',
			title: 'Adapt to Change and Drive Innovation',
			bullets: [
				{
					label: 'Stay Ahead of Trends',
					text: 'Equip your team with the skills to anticipate and respond to market shifts and emerging technologies.'
				},
				{
					label: 'Encourage Continuous Learning',
					text: 'Cultivate a culture that embraces change and fosters ongoing professional development.'
				}
			]
		}
	];

	const whoShouldAttend = [
		'Marketing Department Leaders',
		'Marketing and Communications Managers',
		'Marketing and Communications Teams'
	];

	const teamBenefits = [
		{
			title: 'Increased Influence',
			description: 'Become strategic partners who contribute meaningfully to business decisions.'
		},
		{
			title: 'Enhanced Skills',
			description: 'Develop competencies in leadership, communication, and strategic thinking.'
		},
		{
			title: 'Greater Alignment',
			description: 'Work cohesively with other departments to drive organisational success.'
		}
	];

	const orgBenefits = [
		{
			title: 'Improved Performance',
			description: 'Align marketing initiatives with business goals to enhance overall performance.'
		},
		{
			title: 'Stronger Collaboration',
			description: 'Benefit from integrated strategies that leverage cross-departmental strengths.'
		},
		{
			title: 'Increased ROI',
			description: 'Maximise the impact of marketing spend through targeted, strategic efforts.'
		}
	];

	const whyDifferent = [
		{
			title: 'Tailored Solutions',
			description:
				'Customised training that addresses your specific organisational needs and challenges.'
		},
		{
			title: 'Experienced Facilitators',
			description:
				'Learn from industry experts with a proven marketing leadership and business partnering track record.'
		},
		{
			title: 'Actionable Frameworks',
			description:
				'Gain practical tools and methodologies that can be immediately applied in the work you do.'
		},
		{
			title: 'Sustainable Results',
			description: 'Achieve long-term improvements in team performance and organisational impact.'
		}
	];

	let introImg = $state(false);
	let introText = $state(false);
	let ctaImg = $state(false);
	let ctaText = $state(false);
	let modulesHeading = $state(false);
	let modulesGrid = $state(false);
	let whoHeading = $state(false);
	let whoGrid = $state(false);
	let benefitsHeading = $state(false);
	let benefitsGrid = $state(false);
	let whyHeading = $state(false);
	let whyGrid = $state(false);
</script>

<svelte:head>
	<link rel="preload" as="image" href="/bpip-hero-bg.webp" fetchpriority="high" />
</svelte:head>

<SEO
	title="Marketing & Communications Team Business Partnering Program | Impactology"
	description="Empower marketing and communication teams to become strategic business partners. Drive growth, foster collaboration, and align marketing with organisational goals."
	ogTitle="Marketing & Communications Team Business Partnering Program | Impactology"
	ogDescription="Empower marketing and communication teams to become strategic business partners. Drive growth, foster collaboration, and align marketing with organisational goals."
	ogImage="https://impactology.com.au/icon2.png"
	ogType="website"
	canonical="https://impactology.com.au/marketing-communications-business-partnering-program"
	jsonLd={{
		'@context': 'https://schema.org',
		'@type': 'Course',
		name: 'Marketing & Communications Team Business Partnering IMPACT Program',
		description:
			'A comprehensive program designed to transform marketing and communications teams into strategic business partners who drive growth, foster collaboration, and align marketing with organisational goals.',
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
				Marketing & Communications Team Business Partnering Impact Program
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
					<p class="text-xl font-bold mb-6 opacity-90">
						Unlock the Full Potential of Your Marketing and Communications Teams
					</p>
					<p class="text-lg leading-relaxed mb-6 opacity-80">
						In today's rapidly evolving business landscape, Chief Marketing Officers (CMOs),
						marketing leaders, and communication leaders face unprecedented challenges. Siloed
						operations, misalignment with organisational goals, and the constant pressure to
						demonstrate ROI can hinder your team's ability to make a meaningful impact.
					</p>
					<p class="text-lg leading-relaxed mb-8 opacity-80">
						At Impactology, we understand these bottlenecks and offer a tailored solution: the
						Marketing & Communication Business Partnering IMPACT Program. Designed specifically for
						marketing departments in medium to large organisations facing significant change, our
						program empowers your team to become strategic business partners who drive growth,
						innovation, and value across the organisation.
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
						alt="Procurement Business Partnering Program"
						class="w-full max-w-md object-contain"
					/>
				</div>
			{/if}
		</div>
	</div>
</section>

<ClientLogosSection />

<!-- Call to Action for Procurement Teams -->
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
						Why Choose the Marketing &amp; Communication Business Partnering IMPACT Program?
					</h2>
					<h3 class="text-xl font-bold mb-4">
						Addressing Common Challenges Faced by Marketing Leaders
					</h3>

					<p class="font-bold mb-2">1. Siloed Communication and Lack of Collaboration</p>
					<ul class="list-disc list-inside space-y-2 mb-6 text-lg opacity-80">
						<li>
							<strong>The Challenge:</strong> Marketing teams often operate in complex, high-demand environments,
							with tight deadlines, shifting priorities, and the need to balance the needs of multiple
							stakeholders.
						</li>
						<li>
							<strong>Our Solution:</strong> We foster a culture of collaboration through business partnering
							frameworks, enabling your team to work seamlessly with sales, product development, finance,
							and other vital functions.
						</li>
					</ul>

					<p class="font-bold mb-2">2. Misalignment with Business Strategy</p>
					<ul class="list-disc list-inside space-y-2 mb-6 text-lg opacity-80">
						<li>
							<strong>The Challenge:</strong> Without a clear line of sight and understanding of organisational
							goals, marketing efforts may not effectively support the company's strategic direction.
						</li>
						<li>
							<strong>Our Solution:</strong> Our program enhances your team's commercial acumen, ensuring
							marketing efforts and key decisions are aligned with overarching business objectives for
							maximum impact.
						</li>
					</ul>

					<p class="font-bold mb-2">3. Difficulty Demonstrating ROI and Value</p>
					<ul class="list-disc list-inside space-y-2 mb-6 text-lg opacity-80">
						<li>
							<strong>The Challenge:</strong> Justifying marketing spend and proving ROI can be challenging,
							leading to budget constraints and reduced influence.
						</li>
						<li>
							<strong>Our Solution:</strong> We equip your team with a data storytelling model to aid
							their decision-making, enhance communication clarity, and drive meaningful business insights.
						</li>
					</ul>

					<p class="font-bold mb-2">4. Rapid Market Changes and Digital Disruption</p>
					<ul class="list-disc list-inside space-y-2 mb-8 text-lg opacity-80">
						<li>
							<strong>The Challenge:</strong> Keeping pace with digital transformation and changing consumer
							behaviours requires agility and continuous learning.
						</li>
						<li>
							<strong>Our Solution:</strong> Our program encourages a growth mindset and provides strategies
							for staying ahead of market trends, enabling your team to adapt and innovate effectively.
						</li>
					</ul>

					<a href="#register-interest" class="btn btn-primary btn-lg uppercase font-bold">
						CONNECT WITH US
					</a>
				</div>
			{/if}
			{#if ctaImg}
				<div class="flex justify-center" in:fly={{ x: 30, duration: 600 }}>
					<img
						src="/bpip-cta.webp"
						alt="The Call to Action for Procurement Teams"
						class="w-full max-w-md object-contain"
					/>
				</div>
			{/if}
		</div>
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
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-8" in:fly={{ y: 30, duration: 600 }}>
				{#each modules as module, i (i)}
					<div
						class="border border-neutral-content/20 p-8 hover:border-primary transition-colors {i ===
						4
							? 'lg:col-span-2'
							: ''}"
					>
						<div class="mb-6">
							<img src={module.icon} alt={module.title} class="w-16 h-16 object-contain mb-4" />
							<h3 class="text-2xl text-primary font-bold mb-4">{module.title}</h3>
						</div>
						<ul class="space-y-3">
							{#each module.bullets as bullet}
								<li class="text-sm leading-relaxed text-base-100 opacity-90">
									<strong>{bullet.label}:</strong>
									{bullet.text}
								</li>
							{/each}
						</ul>
					</div>
				{/each}
			</div>
		{/if}
	</div>
</section>

<!-- Who Should Attend -->
<section
	class="py-20 md:py-28 bg-base-100"
	use:trigger={(v) => {
		whoHeading = v;
		setTimeout(() => (whoGrid = v), 150);
	}}
>

	<div class="container-custom">
		{#if whoHeading}
			<h2
				class="text-4xl md:text-5xl font-bold text-center mb-12"
				in:fly={{ y: 30, duration: 600 }}
			>
				WHO SHOULD ATTEND?
			</h2>
		{/if}
		{#if whoGrid}
			<div
				class="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto"
				in:fly={{ y: 30, duration: 600 }}
			>
				{#each whoShouldAttend as role, i (i)}
					<div class="bg-base-200 px-6 py-4 text-center">
						<p class="font-medium">{role}</p>
					</div>
				{/each}
			</div>
		{/if}
	</div>
</section>

<!-- Program Benefits -->
<section
	class="bg-[#fff000] py-20 md:py-28"
	use:trigger={(v) => {
		benefitsHeading = v;
		setTimeout(() => (benefitsGrid = v), 150);
	}}
>
	<div class="container-custom">
		{#if benefitsHeading}
			<h2
				class="text-4xl md:text-5xl font-bold text-center mb-16"
				in:fly={{ y: 30, duration: 600 }}
			>
				PROGRAM BENEFITS
			</h2>
		{/if}
		{#if benefitsGrid}
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-12" in:fly={{ y: 30, duration: 600 }}>
				<div>
					<h3 class="text-2xl font-bold mb-8 text-center">For Your Team</h3>
					<div class="space-y-4">
						{#each teamBenefits as benefit}
							<div class="flex items-start gap-4 bg-black/10 p-6">
								<span class="text-black mt-1 shrink-0 text-xl">●</span>
								<div>
									<p class="font-bold mb-1">{benefit.title}:</p>
									<p class="text-sm opacity-90">{benefit.description}</p>
								</div>
							</div>
						{/each}
					</div>
				</div>
				<div>
					<h3 class="text-2xl font-bold mb-8 text-center">For Your Organisation</h3>
					<div class="space-y-4">
						{#each orgBenefits as benefit}
							<div class="flex items-start gap-4 bg-black/10 p-6">
								<span class="text-black mt-1 shrink-0 text-xl">●</span>
								<div>
									<p class="font-bold mb-1">{benefit.title}:</p>
									<p class="text-sm opacity-90">{benefit.description}</p>
								</div>
							</div>
						{/each}
					</div>
				</div>
			</div>
		{/if}
	</div>
</section>

<!-- Why Impactology -->
<section
	class="py-20 md:py-28 bg-base-100"
	use:trigger={(v) => {
		whyHeading = v;
		setTimeout(() => (whyGrid = v), 150);
	}}
>
	<div class="container-custom">
		{#if whyHeading}
			<div class="text-center mb-12" in:fly={{ y: 30, duration: 600 }}>
				<h2 class="text-4xl md:text-5xl font-bold mb-6">WHY IMPACTOLOGY?</h2>
				<p class="text-lg max-w-3xl mx-auto opacity-80">
					At Impactology, we specialise in transforming teams into strategic business partners. Our
					expertise lies in understanding the unique challenges marketing and communication
					departments face in large organisations.
				</p>
			</div>
		{/if}
		{#if whyGrid}
			<div
				class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
				in:fly={{ y: 30, duration: 600 }}
			>
				{#each whyDifferent as item}
					<div class="flex items-start gap-4 border border-base-300 p-6">
						<span class="text-primary mt-1 shrink-0 text-xl">★</span>
						<div>
							<p class="font-bold mb-1">{item.title}:</p>
							<p class="text-sm opacity-80">{item.description}</p>
						</div>
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

<RegisterInterestSection prefix="[Procurement Business Partnering Program Interest]" />
