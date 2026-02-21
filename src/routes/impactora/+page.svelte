<script lang="ts">
	import SEO from '$lib/components/SEO.svelte';
	import Icon from '@iconify/svelte';

	// Contact form state
	let firstName = $state('');
	let lastName = $state('');
	let email = $state('');
	let company = $state('');
	let teamSize = $state('');
	let message = $state('');
	let formStatus = $state<'idle' | 'sending' | 'sent' | 'error'>('idle');
	let errorMessage = $state('');

	async function handleDemoRequest(e: SubmitEvent) {
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
					message: `[IMPACTORA Demo Request]\nTeam Size: ${teamSize}\n\n${message}`
				})
			});
			if (!res.ok) throw new Error('Failed to send');
			formStatus = 'sent';
			firstName = '';
			lastName = '';
			email = '';
			company = '';
			teamSize = '';
			message = '';
		} catch {
			formStatus = 'error';
			errorMessage = 'Something went wrong. Please try again.';
		}
	}

	const features = [
		{
			icon: 'ph:lightning-fill',
			title: 'INSTANT GUIDANCE',
			description:
				'Get real-time, contextual advice exactly when workplace challenges arise. No waiting for consultants or scheduled sessions.'
		},
		{
			icon: 'ph:chart-line-up-fill',
			title: 'DATA-DRIVEN INSIGHTS',
			description:
				'Leverage AI-powered analytics to understand team dynamics, identify patterns, and make informed decisions backed by evidence.'
		},
		{
			icon: 'ph:clock-fill',
			title: '24/7 AVAILABILITY',
			description:
				'Support your team around the clock. Critical moments dont wait for business hours—neither does IMPACTORA.'
		},
		{
			icon: 'ph:user-circle-fill',
			title: 'PERSONALISED EXPERIENCE',
			description:
				'Every recommendation adapts to your role, industry, and specific context. No generic advice—only relevant solutions.'
		},
		{
			icon: 'ph:shield-check-fill',
			title: 'CONFIDENTIAL & SECURE',
			description:
				'Enterprise-grade security ensures sensitive workplace matters stay protected. SOC 2 compliant infrastructure.'
		},
		{
			icon: 'ph:trend-up-fill',
			title: 'MEASURABLE IMPACT',
			description:
				'Track improvements in team performance, resolution times, and decision quality with built-in analytics dashboards.'
		}
	];

	const useCases = [
		{
			role: 'HR BUSINESS PARTNERS',
			scenarios: [
				'Navigate complex employee relations issues',
				'Guide managers through performance conversations',
				'Support restructuring and change management'
			]
		},
		{
			role: 'PEOPLE LEADERS',
			scenarios: [
				'Handle difficult team dynamics',
				'Make fair and consistent decisions',
				'Build high-performing cultures'
			]
		},
		{
			role: 'FRONTLINE MANAGERS',
			scenarios: [
				'Address underperformance constructively',
				'Resolve team conflicts quickly',
				'Onboard and develop new team members'
			]
		}
	];

	const stats = [
		{ value: '67%', label: 'Faster resolution of workplace issues' },
		{ value: '89%', label: 'Manager confidence in handling challenges' },
		{ value: '3.2x', label: 'Return on investment within 12 months' }
	];
</script>

<SEO
	title="Impactora - Impactology | Timely Information & Advice"
	description="IMPACTORA delivers instant, contextual advice for managers and HR professionals. Navigate workplace challenges with AI-powered insights available 24/7."
	ogTitle="Impactora - Impactology | Timely Information & Advice"
	ogDescription="IMPACTORA delivers instant, contextual advice for managers and HR professionals. Navigate workplace challenges with AI-powered insights available 24/7."
	ogImage="https://impactology.com.au/icon1.png"
	ogType="website"
	canonical="https://impactology.com.au/impactora"
	jsonLd={{
		'@context': 'https://schema.org',
		'@type': 'SoftwareApplication',
		name: 'IMPACTORA',
		applicationCategory: 'BusinessApplication',
		operatingSystem: 'Web',
		description: 'AI-powered workplace guidance platform for managers and HR professionals',
		offers: {
			'@type': 'Offer',
			availability: 'https://schema.org/InStock'
		},
		provider: {
			'@type': 'Organization',
			name: 'Impactology',
			url: 'https://impactology.com.au'
		}
	}}
/>

<!-- Hero Section -->
<section class="section-dark py-24 md:py-32 relative overflow-hidden">
	<!-- Decorative elements -->
	<div
		class="absolute top-0 right-0 w-96 h-96 bg-primary opacity-5 rounded-full -translate-y-1/2 translate-x-1/2"
	></div>
	<div
		class="absolute bottom-0 left-0 w-64 h-64 bg-primary opacity-5 rounded-full translate-y-1/2 -translate-x-1/2"
	></div>

	<div class="container-custom relative z-10">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
			<div>
				<div class="flex items-center gap-3 mb-6">
					<img src="/icon1.png" alt="IMPACTORA" class="w-14 h-14" />
					<span class="text-primary font-bold text-xl tracking-wider">IMPACTORA</span>
				</div>
				<h1 class="text-5xl md:text-6xl lg:text-7xl mb-6 leading-none">
					GUIDANCE IN THE MOMENTS THAT MATTER
				</h1>
				<p class="text-xl mb-8 opacity-90 leading-relaxed max-w-xl">
					IMPACTORA is your AI-powered workplace companion. Get instant, contextual advice to
					navigate challenges, support your team, and make confident decisions—24/7.
				</p>
				<div class="flex flex-col sm:flex-row gap-4">
					<a
						href="#request-demo"
						class="btn btn-primary btn-lg uppercase font-bold rounded-none inline-flex items-center justify-center gap-2"
					>
						REQUEST A DEMO
						<Icon icon="ph:arrow-right-bold" class="text-lg" />
					</a>
					<a
						href="#how-it-works"
						class="btn btn-outline border-current text-current btn-lg uppercase font-bold rounded-none hover:bg-primary hover:text-primary-content hover:border-primary"
					>
						SEE HOW IT WORKS
					</a>
				</div>
			</div>

			<!-- Product Visual -->
			<div class="relative">
				<div class="impactora-screenshots">
					<div class="impactora-screenshot-main">
						<img
							src="/impactora-dashboard.png"
							alt="IMPACTORA Dashboard"
							class="w-full h-auto rounded-sm shadow-2xl"
							loading="eager"
							onerror={(e) => {
								const img = e.currentTarget as HTMLImageElement;
								img.src = '/icon1.png';
								img.classList.add('p-16', 'bg-neutral', 'opacity-30');
							}}
						/>
					</div>
					<div class="impactora-screenshot-secondary">
						<img
							src="/impactora-mobile.png"
							alt="IMPACTORA Mobile"
							class="w-full h-auto rounded-sm shadow-xl"
							loading="eager"
							onerror={(e) => {
								(e.currentTarget as HTMLImageElement).style.display = 'none';
							}}
						/>
					</div>
				</div>
				<div class="absolute -bottom-4 -left-4 w-32 h-32 bg-primary opacity-20 -z-10"></div>
			</div>
		</div>
	</div>
</section>

<!-- Stats Bar -->
<section class="section-yellow py-12">
	<div class="container-custom">
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
			{#each stats as stat, i (i)}
				<div>
					<div
						class="text-5xl md:text-6xl font-bold mb-2"
						style="font-family: var(--font-heading);"
					>
						{stat.value}
					</div>
					<p class="text-sm uppercase tracking-wide font-medium">{stat.label}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Problem/Solution Section -->
<section class="py-20 md:py-28 bg-base-100">
	<div class="container-custom">
		<div class="max-w-4xl mx-auto text-center mb-16">
			<h2 class="mb-6">THE CHALLENGE</h2>
			<p class="text-xl leading-relaxed">
				Managers face critical workplace moments every day—difficult conversations, team conflicts,
				policy questions, performance issues. Traditional support is too slow, too expensive, or
				simply unavailable when you need it most.
			</p>
		</div>

		<div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
			<div class="bg-base-200 p-8">
				<Icon icon="ph:clock-countdown" class="text-4xl text-primary mb-4" />
				<h3 class="text-lg mb-3">DELAYED DECISIONS</h3>
				<p class="text-sm leading-relaxed opacity-80">
					Waiting days for HR or consultant input while situations escalate and team morale suffers.
				</p>
			</div>
			<div class="bg-base-200 p-8">
				<Icon icon="ph:question" class="text-4xl text-primary mb-4" />
				<h3 class="text-lg mb-3">INCONSISTENT GUIDANCE</h3>
				<p class="text-sm leading-relaxed opacity-80">
					Different advice from different sources leads to confusion and potential compliance risks.
				</p>
			</div>
			<div class="bg-base-200 p-8">
				<Icon icon="ph:user-minus" class="text-4xl text-primary mb-4" />
				<h3 class="text-lg mb-3">ISOLATED MANAGERS</h3>
				<p class="text-sm leading-relaxed opacity-80">
					Leaders feel alone in handling sensitive issues, lacking confidence to act decisively.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- How It Works Section -->
<section id="how-it-works" class="section-dark py-20 md:py-28">
	<div class="container-custom">
		<h2 class="text-center mb-16">HOW IMPACTORA WORKS</h2>

		<div class="grid grid-cols-1 md:grid-cols-3 gap-12">
			<div class="text-center">
				<div
					class="w-20 h-20 mx-auto mb-6 bg-primary text-primary-content flex items-center justify-center"
				>
					<span class="text-4xl font-bold" style="font-family: var(--font-heading);">1</span>
				</div>
				<h3 class="mb-4">DESCRIBE YOUR SITUATION</h3>
				<p class="text-sm leading-relaxed opacity-90">
					Share the workplace challenge youre facing in your own words. Our AI understands context,
					nuance, and the complexities of real workplace dynamics.
				</p>
			</div>

			<div class="text-center">
				<div
					class="w-20 h-20 mx-auto mb-6 bg-primary text-primary-content flex items-center justify-center"
				>
					<span class="text-4xl font-bold" style="font-family: var(--font-heading);">2</span>
				</div>
				<h3 class="mb-4">RECEIVE TAILORED GUIDANCE</h3>
				<p class="text-sm leading-relaxed opacity-90">
					Get instant, actionable advice customised to your role, industry, and specific
					circumstances. No generic templates—only relevant, practical recommendations.
				</p>
			</div>

			<div class="text-center">
				<div
					class="w-20 h-20 mx-auto mb-6 bg-primary text-primary-content flex items-center justify-center"
				>
					<span class="text-4xl font-bold" style="font-family: var(--font-heading);">3</span>
				</div>
				<h3 class="mb-4">ACT WITH CONFIDENCE</h3>
				<p class="text-sm leading-relaxed opacity-90">
					Move forward with clarity. Follow up for additional support, track outcomes, and
					continuously improve your leadership capabilities.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- Features Grid -->
<section class="py-20 md:py-28 bg-base-100">
	<div class="container-custom">
		<div class="text-center mb-16">
			<h2 class="mb-6">POWERFUL CAPABILITIES</h2>
			<p class="text-xl max-w-2xl mx-auto">
				Everything you need to handle workplace challenges with confidence and consistency.
			</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			{#each features as feature, i (i)}
				<div class="group p-8 border border-base-300 hover:border-primary transition-colors">
					<Icon icon={feature.icon} class="text-4xl text-primary mb-4" />
					<h3 class="text-lg mb-3">{feature.title}</h3>
					<p class="text-sm leading-relaxed opacity-80">{feature.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Use Cases Section -->
<section class="section-gray py-20 md:py-28">
	<div class="container-custom">
		<h2 class="text-center mb-16">BUILT FOR YOUR ROLE</h2>

		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			{#each useCases as useCase, i (i)}
				<div class="bg-base-100 p-8 shadow-sm">
					<h3 class="text-lg mb-6 text-primary">{useCase.role}</h3>
					<ul class="space-y-4">
						{#each useCase.scenarios as scenario, j (j)}
							<li class="flex items-start gap-3">
								<Icon icon="ph:check-circle-fill" class="text-primary text-lg mt-0.5 shrink-0" />
								<span class="text-sm">{scenario}</span>
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Testimonial Section -->
<section class="section-yellow py-20 md:py-28">
	<div class="container-custom">
		<div class="max-w-4xl mx-auto text-center relative">
			<div class="quote-marks absolute -top-8 left-0 md:left-8 text-base-content/10">
				<Icon icon="ph:quotes-fill" class="text-8xl md:text-9xl" />
			</div>

			<blockquote class="relative z-10">
				<p class="text-2xl md:text-3xl lg:text-4xl font-bold leading-relaxed mb-8">
					IMPACTORA has transformed how our managers handle difficult situations. They now have the
					confidence to act quickly and consistently, knowing they have expert guidance at their
					fingertips.
				</p>
				<footer class="text-lg md:text-xl">
					<cite class="not-italic font-semibold">— Chief People Officer, ASX 200 Company</cite>
				</footer>
			</blockquote>

			<div class="quote-marks absolute -bottom-8 right-0 md:right-8 text-base-content/10">
				<Icon icon="ph:quotes-fill" class="text-8xl md:text-9xl rotate-180" />
			</div>
		</div>
	</div>
</section>

<!-- Pricing/CTA Section -->
<section class="section-dark py-20 md:py-28">
	<div class="container-custom">
		<div class="max-w-4xl mx-auto text-center">
			<h2 class="mb-6">FLEXIBLE PLANS FOR EVERY ORGANISATION</h2>
			<p class="text-xl mb-12 opacity-90">
				From emerging startups to enterprise organisations, IMPACTORA scales with your needs.
				Contact us to discuss pricing tailored to your team size and requirements.
			</p>

			<div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
				<div class="border border-neutral-content/20 p-8">
					<h3 class="text-lg mb-2">STARTER</h3>
					<p class="text-sm opacity-80 mb-6">For small teams getting started</p>
					<ul class="text-sm space-y-3 text-left">
						<li class="flex items-center gap-2">
							<Icon icon="ph:check" class="text-primary" />
							Up to 25 users
						</li>
						<li class="flex items-center gap-2">
							<Icon icon="ph:check" class="text-primary" />
							Core guidance features
						</li>
						<li class="flex items-center gap-2">
							<Icon icon="ph:check" class="text-primary" />
							Email support
						</li>
					</ul>
				</div>

				<div class="border-2 border-primary p-8 relative">
					<div
						class="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-content px-4 py-1 text-xs font-bold uppercase"
					>
						Most Popular
					</div>
					<h3 class="text-lg mb-2">PROFESSIONAL</h3>
					<p class="text-sm opacity-80 mb-6">For growing organisations</p>
					<ul class="text-sm space-y-3 text-left">
						<li class="flex items-center gap-2">
							<Icon icon="ph:check" class="text-primary" />
							Up to 200 users
						</li>
						<li class="flex items-center gap-2">
							<Icon icon="ph:check" class="text-primary" />
							Advanced analytics
						</li>
						<li class="flex items-center gap-2">
							<Icon icon="ph:check" class="text-primary" />
							Priority support
						</li>
						<li class="flex items-center gap-2">
							<Icon icon="ph:check" class="text-primary" />
							Custom integrations
						</li>
					</ul>
				</div>

				<div class="border border-neutral-content/20 p-8">
					<h3 class="text-lg mb-2">ENTERPRISE</h3>
					<p class="text-sm opacity-80 mb-6">For large organisations</p>
					<ul class="text-sm space-y-3 text-left">
						<li class="flex items-center gap-2">
							<Icon icon="ph:check" class="text-primary" />
							Unlimited users
						</li>
						<li class="flex items-center gap-2">
							<Icon icon="ph:check" class="text-primary" />
							Custom AI training
						</li>
						<li class="flex items-center gap-2">
							<Icon icon="ph:check" class="text-primary" />
							Dedicated success manager
						</li>
						<li class="flex items-center gap-2">
							<Icon icon="ph:check" class="text-primary" />
							SSO & advanced security
						</li>
					</ul>
				</div>
			</div>

			<a
				href="#request-demo"
				class="btn btn-primary btn-lg uppercase font-bold rounded-none inline-flex items-center gap-2"
			>
				GET PRICING DETAILS
				<Icon icon="ph:arrow-right-bold" class="text-lg" />
			</a>
		</div>
	</div>
</section>

<!-- Demo Request Form -->
<section id="request-demo" class="py-20 md:py-28 bg-base-100">
	<div class="container-custom">
		<div class="max-w-2xl mx-auto">
			<div class="text-center mb-12">
				<h2 class="mb-4">REQUEST A DEMO</h2>
				<p class="text-lg">
					See IMPACTORA in action. Our team will show you how it can transform the way your
					organisation handles workplace challenges.
				</p>
			</div>

			<form onsubmit={handleDemoRequest} class="space-y-6">
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
							placeholder="Jane"
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
						<span class="label-text font-medium">Work Email</span>
					</div>
					<input
						type="email"
						bind:value={email}
						required
						class="input input-bordered w-full rounded-none"
						placeholder="jane@company.com"
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
						<span class="label-text font-medium">Team Size</span>
					</div>
					<select bind:value={teamSize} required class="select select-bordered w-full rounded-none">
						<option value="" disabled>Select team size</option>
						<option value="1-25">1-25 employees</option>
						<option value="26-100">26-100 employees</option>
						<option value="101-500">101-500 employees</option>
						<option value="501-1000">501-1,000 employees</option>
						<option value="1000+">1,000+ employees</option>
					</select>
				</label>

				<label class="form-control w-full">
					<div class="label">
						<span class="label-text font-medium"
							>What challenges are you looking to solve? (optional)</span
						>
					</div>
					<textarea
						bind:value={message}
						class="textarea textarea-bordered w-full rounded-none h-24"
						placeholder="Tell us about your current pain points..."
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
						<span
							>Thanks for your interest! We'll be in touch within 24 hours to schedule your demo.</span
						>
					</div>
				{/if}

				<button
					type="submit"
					class="btn btn-primary btn-lg uppercase font-bold rounded-none w-full"
					disabled={formStatus === 'sending'}
				>
					{#if formStatus === 'sending'}
						<span class="loading loading-spinner loading-sm"></span>
						Sending Request...
					{:else}
						Request Your Demo
					{/if}
				</button>

				<p class="text-xs text-center opacity-70">
					By submitting this form, you agree to our privacy policy. We'll never share your
					information with third parties.
				</p>
			</form>
		</div>
	</div>
</section>

<!-- Final CTA -->
<section class="section-yellow py-16">
	<div class="container-custom text-center">
		<h2 class="text-3xl md:text-4xl mb-6">READY TO TRANSFORM YOUR WORKPLACE?</h2>
		<p class="text-lg mb-8 max-w-2xl mx-auto">
			Join leading organisations already using IMPACTORA to empower their managers and HR teams.
		</p>
		<div class="flex flex-col sm:flex-row gap-4 justify-center">
			<a href="#request-demo" class="btn btn-secondary btn-lg uppercase font-bold rounded-none">
				GET STARTED TODAY
			</a>
			<a
				href="/contact"
				class="btn btn-outline border-current text-current btn-lg uppercase font-bold rounded-none hover:bg-secondary hover:text-secondary-content hover:border-secondary"
			>
				SPEAK TO OUR TEAM
			</a>
		</div>
	</div>
</section>
