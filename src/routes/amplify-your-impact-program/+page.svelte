<script lang="ts">
	import SEO from '$lib/components/SEO.svelte';
	import Icon from '@iconify/svelte';

	// Contact form state
	let firstName = $state('');
	let lastName = $state('');
	let email = $state('');
	let company = $state('');
	let phone = $state('');
	let message = $state('');
	let formStatus = $state<'idle' | 'sending' | 'sent' | 'error'>('idle');
	let errorMessage = $state('');

	async function handleInterestSubmit(e: SubmitEvent) {
		e.preventDefault();
		formStatus = 'sending';
		try {
			const res = await fetch('/api/contact', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					firstName,
					lastName,
					email,
					company,
					phone,
					message: `[Amplify Your Impact Program Interest]\n\n${message}`
				})
			});
			if (!res.ok) throw new Error('Failed to send');
			formStatus = 'sent';
			firstName = '';
			lastName = '';
			email = '';
			company = '';
			phone = '';
			message = '';
		} catch {
			formStatus = 'error';
			errorMessage = 'Something went wrong. Please try again.';
		}
	}

	const learningOutcomes = [
		'Gain awareness of how to better collaborate as a team to better support key internal stakeholders',
		'Develop strategic and collaborative thinking skills to enhance team and cross-functional collaboration',
		'Cultivate core behavioral attributes that align with high performance and adaptability',
		'Build confidence in applying practical business partnering techniques to communicate your service delivery model to stakeholders',
		'Strengthen the team dynamic through shared learning experiences and continuous feedback loops',
		'Apply tools and frameworks that promote ongoing professional growth and resilience in the face of change'
	];

	const programFeatures = [
		{
			number: '01',
			title: 'FACE-TO-FACE SESSIONS',
			description:
				'Interactive in-person workshops designed to build practical skills and foster team collaboration through hands-on exercises and real-world scenarios.'
		},
		{
			number: '02',
			title: 'CASE STUDIES',
			description:
				'Real-world business partnering challenges that allow participants to apply new concepts, analyze situations, and develop solution-oriented thinking.'
		},
		{
			number: '03',
			title: 'MICRO-LEARNING ACTIVITIES',
			description:
				'Individual and group learning activities through our proprietary platform IMPACTORA, reinforcing key concepts between sessions.'
		},
		{
			number: '04',
			title: 'VIRTUAL CHECK-INS',
			description:
				'Regular group virtual sessions to discuss progress, share learnings, and maintain momentum toward achieving your business partnering goals.'
		},
		{
			number: '05',
			title: 'SCORECARD APPROACH',
			description:
				'A structured measurement framework to track transformation progress and solidify key learnings throughout the program experience.'
		}
	];

	const testimonials = [
		{
			quote:
				'The AMPLIFY program gave our team the tools and confidence to truly transform how we partner with the business.',
			title: 'Transformed our approach'
		},
		{
			quote:
				'The combination of face-to-face sessions and ongoing support through IMPACTORA made the learning stick.',
			title: 'Learning that sticks'
		},
		{
			quote:
				'Our team collaboration has improved significantly. We now speak the same language when it comes to business partnering.',
			title: 'Improved collaboration'
		}
	];

	const clientLogos = [
		'/client-moss.jpeg',
		'/client-otto.png',
		'/client-ot.png',
		'/client-rba.png',
		'/client-kh.png',
		'/client-edgeward.png',
		'/client-mu.png',
		'/client-transport.png',
		'/client-specsavers.png',
		'/client-msd.png',
		'/client-lochard.png'
	];
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
<section class="section-dark py-24 md:py-32 relative overflow-hidden">
	<div
		class="absolute top-0 right-0 w-96 h-96 bg-primary opacity-5 rounded-full -translate-y-1/2 translate-x-1/2"
	></div>

	<div class="container-custom relative z-10">
		<div class="max-w-4xl">
			<div class="flex items-center gap-3 mb-6">
				<img src="/icon3.png" alt="Amplify Your Impact Program" class="w-14 h-14" />
				<span class="text-primary font-bold text-xl tracking-wider">AMPLIFY PROGRAM</span>
			</div>
			<h1 class="text-5xl md:text-6xl lg:text-7xl mb-6 leading-none">
				THE AMPLIFY BUSINESS<br />PARTNERING PROGRAM EXPERIENCE
			</h1>
			<p class="text-xl mb-8 opacity-90 leading-relaxed max-w-3xl">
				Develop a high performing team who are ready to drive and own business outcomes. Our AMPLIFY
				program is a tailored development experience crafted to equip teams for change, especially
				under heightened expectations.
			</p>
			<a
				href="#register-interest"
				class="btn btn-primary btn-lg uppercase font-bold rounded-none inline-flex items-center gap-2"
			>
				REGISTER YOUR INTEREST
				<Icon icon="ph:arrow-right-bold" class="text-lg" />
			</a>
		</div>
	</div>
</section>

<!-- Program Overview -->
<section class="py-20 md:py-28 bg-base-100">
	<div class="container-custom">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
			<div>
				<h2 class="mb-8">WHAT YOU'LL LEARN</h2>
				<p class="text-lg leading-relaxed mb-6">
					To succeed as a leader, you need more than just the right experience—your team needs the
					right behavioral attributes and mindset to execute your service delivery model
					effectively.
				</p>
				<p class="text-lg leading-relaxed mb-6">
					Are you a new leader managing a team of business partners? Does your team need a
					capability uplift to prepare for change? Are you looking for practical ways to drive
					higher performance and collaboration across your team?
				</p>
				<p class="text-lg leading-relaxed">
					Our <strong>AMPLIFY Business Partnering Program Experience</strong> is a follow-up program
					to our signature
					<a href="/business-partnering-impact-program" class="text-primary hover:underline"
						>Business Partnering IMPACT Program</a
					>, with a customised approach designed for your team's specific needs and your
					organisation's goals.
				</p>
			</div>
			<div class="bg-base-200 p-8">
				<h3 class="text-xl mb-6">PROGRAM COMMITMENT</h3>
				<div class="space-y-4">
					<div class="flex items-center gap-4">
						<div class="w-16 h-16 bg-primary flex items-center justify-center shrink-0">
							<Icon icon="ph:calendar-check-fill" class="text-3xl text-primary-content" />
						</div>
						<div>
							<p class="font-bold">6, 9, or 12 Months</p>
							<p class="text-sm opacity-80">Flexible duration based on your team's needs</p>
						</div>
					</div>
					<div class="flex items-center gap-4">
						<div class="w-16 h-16 bg-primary flex items-center justify-center shrink-0">
							<Icon icon="ph:users-three-fill" class="text-3xl text-primary-content" />
						</div>
						<div>
							<p class="font-bold">Team-Based Learning</p>
							<p class="text-sm opacity-80">Builds collective capability and alignment</p>
						</div>
					</div>
					<div class="flex items-center gap-4">
						<div class="w-16 h-16 bg-primary flex items-center justify-center shrink-0">
							<Icon icon="ph:device-mobile-fill" class="text-3xl text-primary-content" />
						</div>
						<div>
							<p class="font-bold">IMPACTORA Platform Access</p>
							<p class="text-sm opacity-80">Proprietary app and desktop learning platform</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Learning Outcomes -->
<section class="section-yellow py-20 md:py-28">
	<div class="container-custom">
		<h2 class="text-center mb-4">PROGRAM OUTCOMES</h2>
		<p class="text-xl text-center mb-12 max-w-3xl mx-auto">
			After completing the AMPLIFY Business Partnering Program Experience, participants will:
		</p>
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each learningOutcomes as outcome, i (i)}
				<div class="bg-base-100/10 p-6">
					<div class="flex items-start gap-4">
						<Icon icon="ph:check-circle-fill" class="text-2xl mt-0.5 shrink-0" />
						<span class="text-base font-medium">{outcome}</span>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Client Logos -->
<section class="section-gray py-16">
	<div class="container-custom">
		<h2 class="text-center mb-12">SOME COMPANIES WE'VE PARTNERED WITH</h2>
		<div class="grid grid-cols-3 md:grid-cols-6 gap-8 items-center">
			{#each clientLogos as logo, i (i)}
				<div class="flex items-center justify-center p-4">
					<img src={logo} alt="Client logo" class="max-h-14 w-auto object-contain" />
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Program Features -->
<section class="section-dark py-20 md:py-28">
	<div class="container-custom">
		<h2 class="text-center mb-4">THE AMPLIFY EXPERIENCE</h2>
		<p class="text-xl text-center mb-16 max-w-3xl mx-auto opacity-90">
			The AMPLIFY Program hones both team and individual capabilities to strengthen your service
			delivery model and boost business performance through diverse learning formats.
		</p>
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			{#each programFeatures as feature, i (i)}
				<div class="border border-neutral-content/20 p-8 hover:border-primary transition-colors">
					<div class="flex items-start gap-4 mb-4">
						<div
							class="w-12 h-12 bg-primary text-primary-content flex items-center justify-center shrink-0"
						>
							<span class="text-lg font-bold" style="font-family: var(--font-heading);"
								>{feature.number}</span
							>
						</div>
						<h3 class="text-lg">{feature.title}</h3>
					</div>
					<p class="text-sm leading-relaxed opacity-90">{feature.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Connection to IMPACT Program -->
<section class="py-20 md:py-28 bg-base-100">
	<div class="container-custom">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
			<div>
				<h2 class="mb-6">BUILDING ON THE IMPACT PROGRAM</h2>
				<p class="text-xl font-bold mb-6">
					AMPLIFY takes the foundations of business partnering to the next level.
				</p>
				<p class="text-lg leading-relaxed mb-6 opacity-80">
					The AMPLIFY Business Partnering Program Experience is designed as a follow-up to our
					signature Business Partnering IMPACT Program. While the IMPACT Program establishes core
					business partnering capabilities, AMPLIFY focuses on embedding and sustaining these
					capabilities over time.
				</p>
				<p class="text-lg leading-relaxed mb-8 opacity-80">
					Through a six-month experience with check-in support and a scorecard approach, your team
					will drive transformation and solidify key learnings in a supportive, action-oriented
					environment.
				</p>
				<a
					href="/business-partnering-impact-program"
					class="btn btn-outline btn-lg uppercase font-bold rounded-none inline-flex items-center gap-2"
				>
					LEARN ABOUT THE IMPACT PROGRAM
					<Icon icon="ph:arrow-right-bold" class="text-lg" />
				</a>
			</div>
			<div class="flex justify-center">
				<div class="relative">
					<div
						class="w-80 h-80 bg-base-200 flex items-center justify-center border-4 border-primary"
					>
						<div class="text-center p-8">
							<img
								src="/icon2.png"
								alt="Business Partnering Impact Program"
								class="w-20 h-20 mx-auto mb-4"
							/>
							<p class="font-bold text-lg">IMPACT PROGRAM</p>
							<Icon icon="ph:arrow-down-bold" class="text-3xl text-primary my-4" />
							<img
								src="/icon3.png"
								alt="Amplify Your Impact Program"
								class="w-20 h-20 mx-auto mb-4"
							/>
							<p class="font-bold text-lg">AMPLIFY PROGRAM</p>
						</div>
					</div>
					<div class="absolute -bottom-4 -right-4 w-20 h-20 bg-primary -z-10"></div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Testimonials -->
<section class="section-yellow py-20 md:py-28">
	<div class="container-custom">
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			{#each testimonials as testimonial, i (i)}
				<div class="bg-base-100/10 p-8 relative">
					<div class="absolute top-4 left-4 opacity-20">
						<Icon icon="ph:quotes-fill" class="text-4xl" />
					</div>
					<h3 class="text-lg mb-4 relative z-10">{testimonial.title}</h3>
					<p class="text-base leading-relaxed relative z-10">"{testimonial.quote}"</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Register Interest Form -->
<section id="register-interest" class="py-20 md:py-28 bg-base-100">
	<div class="container-custom">
		<div class="max-w-2xl mx-auto">
			<div class="text-center mb-12">
				<h2 class="mb-4">REGISTER YOUR INTEREST</h2>
				<p class="text-lg">
					Ready to amplify your team's impact? Register your interest to join our AMPLIFY Business
					Partnering Program Experience. We'll be in touch to discuss how the program can be
					tailored to your team's specific needs.
				</p>
			</div>

			<form onsubmit={handleInterestSubmit} class="space-y-6" data-testid="interest-form">
				<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
					<label class="form-control w-full">
						<div class="label">
							<span class="label-text font-medium">First Name</span>
						</div>
						<input
							type="text"
							bind:value={firstName}
							required
							class="input input-bordered w-full rounded-none"
							placeholder="John"
						/>
					</label>

					<label class="form-control w-full">
						<div class="label">
							<span class="label-text font-medium">Last Name</span>
						</div>
						<input
							type="text"
							bind:value={lastName}
							required
							class="input input-bordered w-full rounded-none"
							placeholder="Smith"
						/>
					</label>
				</div>

				<label class="form-control w-full">
					<div class="label">
						<span class="label-text font-medium">Email</span>
					</div>
					<input
						type="email"
						bind:value={email}
						required
						class="input input-bordered w-full rounded-none"
						placeholder="john@company.com"
					/>
				</label>

				<label class="form-control w-full">
					<div class="label">
						<span class="label-text font-medium">Phone (optional)</span>
					</div>
					<input
						type="tel"
						bind:value={phone}
						class="input input-bordered w-full rounded-none"
						placeholder="+61 400 000 000"
					/>
				</label>

				<label class="form-control w-full">
					<div class="label">
						<span class="label-text font-medium">Company</span>
					</div>
					<input
						type="text"
						bind:value={company}
						required
						class="input input-bordered w-full rounded-none"
						placeholder="Your Company Name"
					/>
				</label>

				<label class="form-control w-full">
					<div class="label">
						<span class="label-text font-medium">Tell us about your team (optional)</span>
					</div>
					<textarea
						bind:value={message}
						class="textarea textarea-bordered w-full rounded-none h-24"
						placeholder="Team size, current challenges, goals..."
					></textarea>
				</label>

				{#if formStatus === 'error'}
					<div class="alert alert-error rounded-none">
						<Icon icon="ph:warning-circle" class="text-lg" />
						<span>{errorMessage}</span>
					</div>
				{/if}
				{#if formStatus === 'sent'}
					<div class="alert alert-success rounded-none">
						<Icon icon="ph:check-circle" class="text-lg" />
						<span>Thanks for your interest! We'll be in touch within 24 hours.</span>
					</div>
				{/if}

				<button
					type="submit"
					class="btn btn-primary btn-lg uppercase font-bold rounded-none w-full"
					disabled={formStatus === 'sending'}
				>
					{#if formStatus === 'sending'}
						<span class="loading loading-spinner loading-sm"></span>
						Sending...
					{:else}
						Submit Your Interest
					{/if}
				</button>
			</form>
		</div>
	</div>
</section>

<!-- Stay in the Loop -->
<section class="section-dark py-16">
	<div class="container-custom text-center">
		<h2 class="text-3xl md:text-4xl mb-6">STAY IN THE LOOP</h2>
		<p class="text-lg mb-8 max-w-2xl mx-auto opacity-90">
			Receive news and information on upcoming events
		</p>
		<a href="/contact" class="btn btn-primary btn-lg uppercase font-bold rounded-none">
			CONTACT US
		</a>
	</div>
</section>
