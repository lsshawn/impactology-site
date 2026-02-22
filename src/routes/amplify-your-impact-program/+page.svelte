<script lang="ts">
	import SEO from '$lib/components/SEO.svelte';
	import ContactForm from '$lib/components/ContactForm.svelte';
	import TestimonialSlider from '$lib/components/TestimonialSlider.svelte';
	import { fly } from 'svelte/transition';

	// Trigger action — fires immediately if already in viewport, else waits for scroll
	function trigger(node: HTMLElement, stateSetter: (v: boolean) => void) {
		let observer: IntersectionObserver;
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
		return { destroy: () => observer?.disconnect() };
	}

	const features = [
		{
			icon: '/amplify-icon01.webp',
			title: 'RESEARCH BACKED CONTENT',
			subtitle: 'Evidence-Based Insights',
			description:
				'Program materials are rooted in research and leverages the content from the Business Partnering IMPACT Program ensuring that participants gain reliable, impactful insights that enhance their business partnering personal brand.'
		},
		{
			icon: '/amplify-icon02.webp',
			title: 'FACE-TO-FACE SESSIONS',
			subtitle: 'In-Person Deep Dives',
			description:
				'Interactive, face-to-face sessions allow participants to engage directly with our expert facilitator and peers, fostering strong connections and active learning.'
		},
		{
			icon: '/amplify-icon03.webp',
			title: 'LEARNING PARTNERS',
			subtitle: 'Peer Support Network',
			description:
				'Each participant is paired with a learning partner (a fellow participant), promoting accountability, shared insights, and peer encouragement throughout the program.'
		},
		{
			icon: '/amplify-icon04.webp',
			title: 'GROUP CHECK-IN SESSIONS',
			subtitle: 'Collaborative Reflection Points',
			description:
				'Monthly check-ins bring the group together to review progress, address challenges, and reinforce collective program and team goals.'
		},
		{
			icon: '/amplify-icon05.webp',
			title: 'MICRO-LEARNING ACTIVITIES',
			subtitle: 'Bite-Sized Skill Building',
			description:
				'Quick, focused micro-learning activities enhance learning retention by delivering core concepts and skills in short, easily digestible segments via our proprietary technology platform IMPACTORA.'
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
	let learnText = $state(false);
	let learnImg = $state(false);
	let featuresHeading = $state(false);
	let featuresGrid = $state(false);
	let registerHeading = $state(false);
	let registerForm = $state(false);
</script>

<SEO
	title="Amplify Your Impact Program | Impactology"
	description="Amplify transformative outcomes with our Impact Programs. Achieve lasting change and growth with Impactology by your side."
	ogTitle="Amplify Your Impact Program - Impactology"
	ogDescription="Amplify transformative outcomes with our Impact Programs. Achieve lasting change and growth with Impactology by your side."
	ogImage="https://impactology.com.au/icon3.png"
	ogType="website"
	canonical="https://impactology.com.au/amplify-your-impact-program"
	jsonLd={{
		'@context': 'https://schema.org',
		'@type': 'Course',
		name: 'Amplify Your Impact Program',
		description:
			'A tailored development experience crafted to equip teams for change. Building on the Business Partnering IMPACT Program, this six-month experience provides check-in support and a scorecard approach to drive transformation.',
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
	style="background-image: url('/amplify-hero-bg.webp'); height: 80vh; max-height: 80vh;"
>
	<div class="container-custom relative z-10 flex items-center h-full">
		<div class="max-w-xl">
			<h1 class="mb-6 text-5xl lg:text-7xl font-bold text-black leading-none">
				THE AMPLIFY BUSINESS PARTNERING PROGRAM EXPERIENCE
			</h1>
			<p class="text-lg md:text-xl font-bold mb-8 text-black max-w-lg">
				Develop a high performing team who are ready to drive and own business outcomes.
			</p>
			<a href="#register-interest" class="btn btn-secondary btn-lg uppercase font-bold">
				REGISTER YOUR INTEREST
			</a>
		</div>
	</div>
</section>

<!-- What You'll Learn -->
<section
	class="py-20 md:py-28 bg-base-100"
	use:trigger={(v) => {
		learnText = v;
		setTimeout(() => (learnImg = v), 150);
	}}
>
	<div class="container-custom">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
			<div>
				{#if learnText}
					<div in:fly={{ x: -30, duration: 600 }}>
						<h2 class="text-4xl md:text-5xl font-bold mb-8">WHAT YOU'LL LEARN</h2>
						<p class="text-lg leading-relaxed mb-6 opacity-80">
							To succeed as a leader, you need more than just the right experience—your team needs
							the right behavioral attributes and mindset to execute your service delivery model
							effectively.
						</p>
						<p class="text-lg leading-relaxed mb-6 opacity-80">
							Are you a new leader managing a team of business partners? Does your team need a
							capability uplift to prepare for change? Are you looking for practical ways to drive
							higher performance and collaboration across your team?
						</p>
						<p class="text-lg leading-relaxed mb-6 opacity-80">
							Our <strong>AMPLIFY Business Partnering Program Experience</strong> is a follow-up
							program to our signature
							<a href="/business-partnering-impact-program" class="text-primary hover:underline"
								>Business Partnering IMPACT Program</a
							>, with a customised approach designed for your team's specific needs and your
							organisation's goals.
						</p>
						<p class="text-lg leading-relaxed mb-6 opacity-80">
							The <strong>AMPLIFY Program Experience</strong> hones both team and individual capabilities
							to strengthen your service delivery model and boost business performance. It's a commitment
							of 6, 9, or 12 months and combines diverse learning formats: face-to-face sessions, case
							studies, individual and group micro-learning activities through our proprietary app and
							desktop platform 'IMPACTORA', and virtual group check-ins—all geared toward reinforcing
							key outcomes in a supportive, action-oriented environment.
						</p>
						<p class="text-lg leading-relaxed mb-4 opacity-80">
							After completing the <strong>AMPLIFY Business Partnering Program Experience</strong>,
							participants will:
						</p>
						<ul class="list-disc list-outside ml-6 space-y-2 text-lg opacity-80 mb-8">
							<li>
								Gain awareness of how to better collaborate as a team to better support key internal
								stakeholders.
							</li>
							<li>
								Develop strategic and collaborative thinking skills to enhance team and
								cross-functional collaboration.
							</li>
							<li>
								Cultivate core behavioral attributes that align with high performance and
								adaptability.
							</li>
							<li>
								Build confidence in applying practical business partnering techniques to communicate
								your service delivery model to stakeholders.
							</li>
							<li>
								Strengthen the team dynamic through shared learning experiences and continuous
								feedback loops.
							</li>
							<li>
								Apply tools and frameworks that promote ongoing professional growth and resilience
								in the face of change.
							</li>
						</ul>
						<a
							href="#register-interest"
							class="btn btn-primary btn-lg uppercase font-bold rounded-none"
						>
							CONNECT WITH US
						</a>
					</div>
				{/if}
			</div>
			{#if learnImg}
				<div class="flex justify-center" in:fly={{ x: 30, duration: 600 }}>
					<img
						src="/amplify-person.webp"
						alt="Amplify Your Impact Program"
						class="w-full max-w-md object-contain"
					/>
				</div>
			{/if}
		</div>
	</div>
</section>

<!-- Key Program Features -->
<section
	class="py-20 md:py-28 bg-[#212023]"
	use:trigger={(v) => {
		featuresHeading = v;
		setTimeout(() => (featuresGrid = v), 150);
	}}
>
	<div class="container-custom">
		{#if featuresHeading}
			<h2
				class="text-5xl lg:text-7xl font-bold text-center mb-4 text-base-100"
				in:fly={{ y: 30, duration: 600 }}
			>
				KEY PROGRAM EXPERIENCE FEATURES
			</h2>
		{/if}
		{#if featuresGrid}
			<div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8" in:fly={{ y: 30, duration: 600 }}>
				{#each features.slice(0, 3) as feature}
					<div class="border border-neutral-content/20 p-8 hover:border-primary transition-colors">
						<div class="mb-6">
							<img src={feature.icon} alt={feature.title} class="w-16 h-16 object-contain mb-4" />
							<h3 class="text-2xl font-bold text-primary mb-1">{feature.title}</h3>
							<p class="text-sm text-white mb-3">{feature.subtitle}</p>
						</div>
						<p class="text-sm leading-relaxed opacity-90 text-base-100">{feature.description}</p>
					</div>
				{/each}
			</div>
			<div
				class="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto"
				in:fly={{ y: 30, duration: 600, delay: 100 }}
			>
				{#each features.slice(3) as feature}
					<div class="border border-neutral-content/20 p-8 hover:border-primary transition-colors">
						<div class="mb-6">
							<img src={feature.icon} alt={feature.title} class="w-16 h-16 object-contain mb-4" />
							<h3 class="text-2xl font-bold text-primary mb-1">{feature.title}</h3>
							<p class="text-sm text-white mb-3">{feature.subtitle}</p>
						</div>
						<p class="text-sm leading-relaxed opacity-90 text-base-100">{feature.description}</p>
					</div>
				{/each}
			</div>
		{/if}
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
					<h2 class="text-5xl lg:text-7xl font-bold text-white mb-6">
						IS THIS PROGRAM RIGHT FOR YOU?
					</h2>
					<p class="text-lg text-white opacity-80">
						Connect with us to see if this Program Experience is suited to your individual and team
						needs by filling in the form below.
					</p>
				</div>
			{/if}
			{#if registerForm}
				<div in:fly={{ y: 30, duration: 600 }}>
					<ContactForm
						prefix="[Amplify Your Impact Program Interest]"
						class="bg-neutral/50 p-8 md:p-12"
					/>
				</div>
			{/if}
		</div>
	</div>
</section>
