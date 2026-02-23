<script lang="ts">
	import SEO from '$lib/components/SEO.svelte';
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

	const challenges = [
		{
			title: 'Siloed Operations and Misaligned Priorities',
			challenge:
				'Sales and BD teams often work in isolation and/or in silos, leading to misalignment with marketing, operations, and product development teams.',
			solution:
				'Our program fosters cross-functional collaboration and strategic alignment, ensuring sales and client servicing teams work cohesively with other departments to deliver holistic solutions to clients.'
		},
		{
			title: 'Transactional Client Relationships',
			challenge:
				'Sales teams may struggle to move beyond transactional interactions, which can limit their ability to build long-term, trust-based client relationships.',
			solution:
				'We train teams to adopt a consultative approach, positioning themselves as trusted advisors who add strategic value to clients.'
		},
		{
			title: 'Leadership Gaps in Driving Performance',
			challenge:
				'Sales leaders may lack the tools to effectively inspire, align, and manage diverse teams in high-pressure environments.',
			solution:
				'Our leadership program empowers sales directors and team leaders to build high-performing teams that thrive on collaboration and accountability.'
		},
		{
			title: 'Lack of Commercial Acumen Across Teams',
			challenge:
				'Sales professionals may lack the broader business acumen needed to align their efforts with organisational goals and make strategic decisions.',
			solution:
				'We enhance commercial acumen through targeted training, enabling teams to make smarter, more impactful decisions.'
		}
	];

	const programHighlights = [
		{
			title: 'Build Strategic Business Partnering Skills',
			items: [
				{
					subtitle: 'Enhance Client Relationships',
					description:
						'Train your teams to engage with clients as trusted advisors rather than transactional salespeople.'
				},
				{
					subtitle: 'Increase Influence',
					description:
						'Develop the skills to align with and influence key stakeholders internally and externally.'
				}
			]
		},
		{
			title: 'Strengthen Leadership Across Teams',
			items: [
				{
					subtitle: 'Empower Sales Leaders',
					description:
						'Provide tools and frameworks to inspire teams, foster collaboration, and drive accountability.'
				},
				{
					subtitle: 'Lead Through Change',
					description: 'Equip leaders to navigate market disruptions and drive innovation.'
				}
			]
		},
		{
			title: 'Foster Cross-Functional Collaboration',
			items: [
				{
					subtitle: 'Break Down Silos',
					description:
						'Create alignment between sales, marketing, operations, and product teams for seamless delivery.'
				},
				{
					subtitle: 'Improve Communication',
					description:
						'Train teams to communicate client needs effectively across functions to enhance service delivery and client satisfaction.'
				}
			]
		},
		{
			title: 'Enhance Commercial Acumen',
			items: [
				{
					subtitle: 'Understand the Business Landscape',
					description:
						'Train teams to align sales strategies with organisational goals and market dynamics.'
				},
				{
					subtitle: 'Focus on Value Creation',
					description:
						'Equip sales teams to demonstrate ROI and articulate the value of their solutions to clients and leadership.'
				}
			]
		}
	];

	const whoShouldAttend = [
		'Sales Directors',
		'Sales Team Leaders',
		'Sales Managers',
		'BDMs',
		'Sales Representatives',
		'Client Servicing Managers',
		'Business Development (BD) Managers'
	];

	const teamBenefits = [
		{
			title: 'Stronger Client Relationships',
			description: 'Build trust and drive long-term partnerships with clients.'
		},
		{
			title: 'Enhanced Collaboration',
			description: 'Work seamlessly with internal teams to deliver comprehensive solutions.'
		},
		{
			title: 'Increased Motivation',
			description: 'Empower teams with the tools and confidence to achieve their goals.'
		}
	];

	const orgBenefits = [
		{
			title: 'Improved Sales Performance',
			description: 'Drive revenue growth through more effective sales and BD strategies.'
		},
		{
			title: 'Greater Efficiency',
			description:
				'Align sales efforts with broader organisational goals to eliminate redundancies and maximise impact.'
		},
		{
			title: 'Increased Client Retention',
			description: 'Deliver exceptional client experiences that foster loyalty and repeat business.'
		}
	];

	const whyDifferent = [
		{
			title: 'Customised Training',
			description: "Each program is tailored to your organisation's needs and challenges."
		},
		{
			title: 'Experienced Facilitators',
			description:
				'Learn from experts with deep industry experience in sales leadership and business partnering.'
		},
		{
			title: 'Actionable Frameworks',
			description: 'Gain practical tools that your teams can immediately apply in their roles.'
		},
		{
			title: 'Proven Results',
			description:
				'Our programs are designed to deliver measurable outcomes, from improved sales performance to stronger client relationships.'
		}
	];

	let introImg = $state(false);
	let introText = $state(false);
	let challengesHeading = $state(false);
	let challengesGrid = $state(false);
	let highlightsHeading = $state(false);
	let highlightsGrid = $state(false);
	let whoHeading = $state(false);
	let whoGrid = $state(false);
	let benefitsHeading = $state(false);
	let benefitsGrid = $state(false);
	let whyHeading = $state(false);
	let whyGrid = $state(false);
</script>

<SEO
	title="Sales & Client Management Business Partnering Program | Impactology"
	description="Empower sales, BD, and client management teams with our Business Partnering IMPACT Program. Drive growth, build trust, and foster long-term client relationships."
	ogTitle="Sales & Client Management Business Partnering Program | Impactology"
	ogDescription="Empower sales, BD, and client management teams with our Business Partnering IMPACT Program. Drive growth, build trust, and foster long-term client relationships."
	ogImage="https://impactology.com.au/icon2.png"
	ogType="website"
	canonical="https://impactology.com.au/sales-business-development-client-management-program"
	jsonLd={{
		'@context': 'https://schema.org',
		'@type': 'Course',
		name: 'Sales, BD & Client Management Business Partnering IMPACT Program',
		description:
			'A comprehensive program designed to transform sales, BD, and client management teams into strategic business partners who drive revenue, build client trust, and align with broader organisational objectives.',
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
				Sales, Business Development & Client Management Business Partnering Impact Program
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
						Transform Your Sales, BD & Client Management Teams into Strategic Business Partners
					</p>
					<p class="text-lg leading-relaxed mb-6 opacity-80">
						Sales, Business Development (BD), and Client Management teams are the lifeblood of any
						growing organisation. Yet, in the complex environments of small to medium enterprises and
						large enterprise-level businesses, these teams often face challenges that hinder their
						ability to deliver consistent growth, align with strategic goals, and maximise client
						satisfaction.
					</p>
					<p class="text-lg leading-relaxed mb-8 opacity-80">
						The Sales, BD & Client Management Business Partnering IMPACT Program by Impactology is
						specifically designed to address these challenges. It equips sales leaders and client
						servicing teams with the skills and strategies to become true business partners, enabling
						them to drive revenue, build client trust, and align seamlessly with broader
						organisational objectives.
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
						alt="Sales, BD & Client Management Business Partnering Program"
						class="w-full max-w-md object-contain"
					/>
				</div>
			{/if}
		</div>
	</div>
</section>

<ClientLogosSection />

<!-- Why Choose — Challenges & Solutions -->
<section
	class="py-20 md:py-28 bg-[#212023]"
	use:trigger={(v) => {
		challengesHeading = v;
		setTimeout(() => (challengesGrid = v), 150);
	}}
>
	<div class="container-custom">
		{#if challengesHeading}
			<div class="text-center mb-6" in:fly={{ y: 30, duration: 600 }}>
				<h2 class="text-4xl md:text-5xl font-bold text-base-100 mb-4">
					WHY CHOOSE THE SALES, BD & CLIENT MANAGEMENT BUSINESS PARTNERING IMPACT PROGRAM?
				</h2>
				<p class="text-lg text-base-100 opacity-80">
					Addressing Common Challenges Faced by Sales and BD Teams
				</p>
			</div>
		{/if}
		{#if challengesGrid}
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12" in:fly={{ y: 30, duration: 600 }}>
				{#each challenges as challenge, i (i)}
					<div class="border border-neutral-content/20 p-8 hover:border-primary transition-colors">
						<h3 class="text-xl text-primary font-bold mb-4">{challenge.title}</h3>
						<p class="text-sm font-bold text-white mb-1">The Challenge:</p>
						<p class="text-sm leading-relaxed opacity-80 text-base-100 mb-4">{challenge.challenge}</p>
						<p class="text-sm font-bold text-white mb-1">Our Solution:</p>
						<p class="text-sm leading-relaxed opacity-80 text-base-100">{challenge.solution}</p>
					</div>
				{/each}
			</div>
		{/if}
	</div>
</section>

<!-- Program Highlights -->
<section
	class="py-20 md:py-28 bg-base-300"
	use:trigger={(v) => {
		highlightsHeading = v;
		setTimeout(() => (highlightsGrid = v), 150);
	}}
>
	<div class="container-custom">
		{#if highlightsHeading}
			<h2
				class="text-4xl md:text-5xl font-bold text-center mb-16"
				in:fly={{ y: 30, duration: 600 }}
			>
				PROGRAM HIGHLIGHTS
			</h2>
		{/if}
		{#if highlightsGrid}
			<div class="grid grid-cols-1 md:grid-cols-2 gap-8" in:fly={{ y: 30, duration: 600 }}>
				{#each programHighlights as highlight, i (i)}
					<div class="border border-base-content/20 p-8">
						<h3 class="text-xl font-bold mb-6 text-primary">{highlight.title}</h3>
						{#each highlight.items as item}
							<div class="mb-4 last:mb-0">
								<p class="font-bold mb-1">{item.subtitle}:</p>
								<p class="text-sm opacity-80 leading-relaxed">{item.description}</p>
							</div>
						{/each}
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
				class="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
				in:fly={{ y: 30, duration: 600 }}
			>
				{#each whoShouldAttend as role, i (i)}
					<div class="bg-base-200 p-4 text-center">
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
					At Impactology, we understand the unique challenges that sales, BD, and client management
					teams face in small to medium and large organisations. Our tailored programs are designed
					to address these pain points and deliver actionable solutions that drive real change.
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

<!-- Take the First Step -->
<section class="py-20 md:py-28 bg-base-100">
	<div class="container-custom max-w-4xl mx-auto text-center">
		<h2 class="text-4xl md:text-5xl font-bold mb-6">TAKE THE FIRST STEP TOWARD SUSTAINABLE GROWTH</h2>
		<p class="text-lg leading-relaxed opacity-80">
			Empower your sales, BD, and client management teams to overcome bottlenecks, drive revenue,
			and build long-term client relationships. The Sales, BD & Client Management Business
			Partnering IMPACT Program is your pathway to creating high-performing teams that thrive in
			today's competitive environment.
		</p>
	</div>
</section>

<RegisterInterestSection
	prefix="[Sales, BD & Client Management Business Partnering IMPACT Program Interest]"
	introText="Ready to amplify your sales leadership and team performance? Contact us to learn more about how our program can help your organisation achieve its goals. Fill out the form below to get started."
/>
