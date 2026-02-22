<script lang="ts">
	import SEO from '$lib/components/SEO.svelte';
	import ClientLogos from '$lib/components/ClientLogos.svelte';
	import ContactForm from '$lib/components/ContactForm.svelte';
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

	const challenges = [
		{
			title: 'Siloed Communication and Lack of Collaboration',
			challenge:
				'Marketing teams often operate in complex, high-demand environments, with tight deadlines, shifting priorities, and the need to balance the needs of multiple stakeholders.',
			solution:
				'We foster a culture of collaboration through business partnering frameworks, enabling your team to work seamlessly with sales, product development, finance, and other vital functions.'
		},
		{
			title: 'Misalignment with Business Strategy',
			challenge:
				"Without a clear line of sight and understanding of organisational goals, marketing efforts may not effectively support the company's strategic direction.",
			solution:
				"Our program enhances your team's commercial acumen, ensuring marketing efforts and key decisions are aligned with overarching business objectives for maximum impact."
		},
		{
			title: 'Difficulty Demonstrating ROI and Value',
			challenge:
				'Justifying marketing spend and proving ROI can be challenging, leading to budget constraints and reduced influence.',
			solution:
				'We equip your team with a data storytelling model to aid their decision-making, enhance communication clarity, and drive meaningful business insights.'
		},
		{
			title: 'Rapid Market Changes and Digital Disruption',
			challenge:
				'Keeping pace with digital transformation and changing consumer behaviours requires agility and continuous learning.',
			solution:
				'Our program encourages a growth mindset and provides strategies for staying ahead of market trends, enabling your team to adapt and innovate effectively.'
		}
	];

	const programHighlights = [
		{
			title: 'Develop Strategic Business Partnering Skills',
			items: [
				{
					subtitle: 'Build Trust and Influence',
					description:
						'Learn how to establish credibility with stakeholders and become a trusted advisor within the organisation and with key external partners.'
				},
				{
					subtitle: 'Enhance Communication',
					description:
						'Master the art of conveying marketing insights in a language that resonates with non-marketing stakeholders.'
				}
			]
		},
		{
			title: 'Enhance Business Acumen',
			items: [
				{
					subtitle: 'Understand Organisational Dynamics',
					description:
						"Gain a deeper understanding of your organisation's business model to aid decision making and elevate your conversation with key stakeholders."
				},
				{
					subtitle: 'Align Marketing with Business Goals',
					description: 'Ensure marketing initiatives directly support and drive organisational objectives.'
				}
			]
		},
		{
			title: 'Foster Cross-Functional Collaboration',
			items: [
				{
					subtitle: 'Break Down Silos',
					description:
						'Create strong partnerships with other departments to improve connectivity and drive high impact campaigns.'
				},
				{
					subtitle: 'Improve Teamwork',
					description:
						'Leverage diverse perspectives to foster innovation and achieve better results.'
				}
			]
		},
		{
			title: 'Measure and Communicate Value',
			items: [
				{
					subtitle: 'Demonstrate Value',
					description:
						"Utilise tools and frameworks to measure the impact of your marketing team's efforts."
				},
				{
					subtitle: 'Communicate Successes',
					description:
						'Learn to articulate the value of marketing to senior leadership and stakeholders.'
				}
			]
		},
		{
			title: 'Adapt to Change and Drive Innovation',
			items: [
				{
					subtitle: 'Stay Ahead of Trends',
					description:
						'Equip your team with the skills to anticipate and respond to market shifts and emerging technologies.'
				},
				{
					subtitle: 'Encourage Continuous Learning',
					description:
						'Cultivate a culture that embraces change and fosters ongoing professional development.'
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
			description:
				'Develop competencies in leadership, communication, and strategic thinking.'
		},
		{
			title: 'Greater Alignment',
			description: 'Work cohesively with other departments to drive organisational success.'
		}
	];

	const orgBenefits = [
		{
			title: 'Improved Performance',
			description:
				'Align marketing initiatives with business goals to enhance overall performance.'
		},
		{
			title: 'Stronger Collaboration',
			description:
				'Benefit from integrated strategies that leverage cross-departmental strengths.'
		},
		{
			title: 'Increased ROI',
			description: 'Maximise the impact of marketing spend through targeted, strategic efforts.'
		}
	];

	const whyDifferent = [
		{
			title: 'Tailored Solutions',
			description: 'Customised training that addresses your specific organisational needs and challenges.'
		},
		{
			title: 'Experienced Facilitators',
			description:
				'Learn from industry experts with a proven marketing leadership and business partnering track record.'
		},
		{
			title: 'Actionable Frameworks',
			description: 'Gain practical tools and methodologies that can be immediately applied in the work you do.'
		},
		{
			title: 'Sustainable Results',
			description:
				'Achieve long-term improvements in team performance and organisational impact.'
		}
	];

	let introText = $state(false);
	let clientsHeading = $state(false);
	let clientsLogos = $state(false);
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
	let registerHeading = $state(false);
	let registerForm = $state(false);
</script>

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
			<p class="text-lg font-bold mb-8 text-black max-w-lg">
				Unlock the Full Potential of Your Marketing and Communications Teams
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

<!-- Intro Section -->
<section
	class="py-20 md:py-28 bg-base-100"
	use:trigger={(v) => {
		introText = v;
	}}
>
	<div class="container-custom">
		<div class="max-w-4xl mx-auto">
			{#if introText}
				<div in:fly={{ y: 30, duration: 600 }}>
					<p class="text-lg leading-relaxed mb-6 opacity-80">
						In today's rapidly evolving business landscape, Chief Marketing Officers (CMOs), marketing
						leaders, and communication leaders face unprecedented challenges. Siloed operations,
						misalignment with organisational goals, and the constant pressure to demonstrate ROI can
						hinder your team's ability to make a meaningful impact.
					</p>
					<p class="text-lg leading-relaxed opacity-80">
						At Impactology, we understand these bottlenecks and offer a tailored solution: the
						Marketing & Communication Business Partnering IMPACT Program. Designed specifically for
						marketing departments in medium to large organisations facing significant change, our
						program empowers your team to become strategic business partners who drive growth,
						innovation, and value across the organisation.
					</p>
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
					WHY CHOOSE THE MARKETING & COMMUNICATIONS BUSINESS PARTNERING IMPACT PROGRAM?
				</h2>
				<p class="text-lg text-base-100 opacity-80">
					Addressing Common Challenges Faced by Marketing and Communications Teams
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
			<div
				class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
				in:fly={{ y: 30, duration: 600 }}
			>
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
			<div class="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto" in:fly={{ y: 30, duration: 600 }}>
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
						Ready to unlock the full potential of your marketing and communications teams? Contact us
						to learn more about how our program can help your organisation achieve its goals. Fill out
						the form below to get started.
					</p>
				</div>
			{/if}
			{#if registerForm}
				<div in:fly={{ y: 30, duration: 600 }}>
					<ContactForm
						prefix="[Marketing & Communications Business Partnering IMPACT Program Interest]"
						class="bg-neutral/50 p-8 md:p-12"
					/>
				</div>
			{/if}
		</div>
	</div>
</section>
