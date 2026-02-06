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
					message: `[Business Partnering Impact Program Interest]\n\n${message}`
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
		'Think and act more strategically and commercially',
		'Evolve relationships and build trust with stakeholders',
		'Navigate external influences for better decision-making',
		'Apply high-impact tools and frameworks',
		'Build data storytelling capabilities',
		'Measure and deliver value as a Business Partner'
	];

	const modules = [
		{
			title: 'UNDERSTANDING THE BUSINESS',
			subtitle: 'Systematic approach to understanding your business model.',
			description:
				'We establish a clear definition of what it means to think and act strategically, whilst nurturing a strong commercial mindset. This module covers the broad and inter-related areas of a company business model, and how to use this knowledge to support the business with informed decision making.'
		},
		{
			title: 'EVOLVING BUSINESS RELATIONSHIPS',
			subtitle: 'Core capabilities for strategic partnering',
			description:
				'This module identifies the roles in business partner relationships, including key internal stakeholders and colleagues. We focus on the importance of building trust, effective communication skills and having presence in the business partnering relationship for optimal impact.'
		},
		{
			title: 'KNOW YOUR MACRO WORLD',
			subtitle: 'Understanding external influences to enhance decision-making',
			description:
				'Business decisions are influenced by internal and external factors. This module focuses on building a strong "outside-in" view of the world and how macro-environmental factors impact a company\'s direction and how they impact your team\'s decision-making.'
		},
		{
			title: 'BUSINESS PARTNERING TOOLKIT',
			subtitle: 'High impact skills for greater effectiveness',
			description:
				'In this module, you will be introduced to tools such as the ACDC Contextual Partnering Model and understanding when to navigate between delivering, coaching, advising and partnering. We also cover the power of thought-provoking high impact questions as you expand your knowledge of models and frameworks.'
		},
		{
			title: 'THE ART OF DATA STORYTELLING',
			subtitle: 'Build your data and analytics storytelling muscle',
			description:
				'Whether you are pitching an idea, communicating a new strategy, or engaging with colleagues, effective storytelling serves an important role in the workplace and any change process. As Business Partners, regardless of discipline, there is immense value in building your confidence using data and analytics to increase your impact and engage with your stakeholders.'
		},
		{
			title: 'UNDERSTANDING & DELIVERING VALUE',
			subtitle: 'Key drivers necessary for strategic success',
			description:
				"To know you're having impact, you need to be able to measure the value your team deliver as Business Partners. This module shares our Service Impact Model and provides a framework for you to use in assessing the value you are creating individually and as a team."
		}
	];

	const testimonials = [
		{
			quote:
				'I really connected with and appreciated the style and approach. The one-on-one guidance really helped.',
			title: 'Guidance really helped'
		},
		{
			quote:
				'My goal was to maintain focus on my most important leadership priorities and this program has helped me achieve this.',
			title: 'Helped me achieve'
		},
		{
			quote:
				'My learnings from this program have helped me in so many ways both personally and professionally.',
			title: 'Program helped me in so many ways'
		},
		{
			quote:
				'I appreciated the extensive experience from a wide range of sectors to draw upon. The insights shared were innovative and pragmatic.',
			title: 'Insights were innovative and pragmatic'
		},
		{
			quote:
				'The guidance I have received has been instrumental in helping me to workout my overall vision and strategies for my career and personal goals. This has been a truly enriching and transformational experience.',
			title: 'Truly enriching and transformational experience'
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
	title="Business Partnering Impact Program | Impactology"
	description="Explore Impactology's Business Partnering Programs. Elevate your brand with innovative solutions & boost growth. Join us today!"
	ogTitle="Business Partnering Impact Program | Impactology"
	ogDescription="Our Business Partnering Impact Program is designed to help build a high performing and effective team of business partners, enhancing their business partnering capability."
	ogImage="https://impactology.com.au/icon2.png"
	ogType="website"
	canonical="https://impactology.com.au/business-partnering-impact-program"
	jsonLd={{
		'@context': 'https://schema.org',
		'@type': 'Course',
		name: 'Business Partnering Impact Program',
		description:
			'A comprehensive program designed to help build a high performing and effective team of business partners.',
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
				<img src="/icon2.png" alt="Business Partnering Impact Program" class="w-14 h-14" />
				<span class="text-primary font-bold text-xl tracking-wider">IMPACT PROGRAM</span>
			</div>
			<h1 class="text-5xl md:text-6xl lg:text-7xl mb-6 leading-none">
				BUSINESS PARTNERING IMPACT PROGRAM
			</h1>
			<p class="text-xl mb-8 opacity-90 leading-relaxed max-w-3xl">
				Organisations face increasing industry disruption, market uncertainties, competition, risk
				and rapid innovation. For any team of business partners, these considerations bring an
				increased responsibility for driving and owning business outcomes and boosting overall team
				performance.
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
		<div class="max-w-4xl mx-auto">
			<p class="text-xl leading-relaxed mb-8">
				Our Business Partnering Impact Program is designed to help build a high performing and
				effective team of business partners, enhancing their business partnering capability. The
				Program is designed for all disciplines.
			</p>
			<p class="text-lg leading-relaxed opacity-80">
				The program consists of seven modules, delivered online or in-person. The in-house sessions
				are tailored to drive the desired service delivery changes and improve the business
				partnering experience across your team and organisation. You will also gain access to the
				Impactology community and content.
			</p>
		</div>
	</div>
</section>

<!-- What You'll Learn -->
<section class="section-yellow py-20 md:py-28">
	<div class="container-custom">
		<h2 class="text-center mb-12">WHAT YOU'LL LEARN</h2>
		<div class="max-w-4xl mx-auto">
			<p class="text-xl text-center mb-12">
				After completing the Business Partnering Impact Program, your team will:
			</p>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
				{#each learningOutcomes as outcome, i (i)}
					<div class="flex items-start gap-4 bg-base-100/10 p-6">
						<Icon icon="ph:check-circle-fill" class="text-2xl mt-0.5 shrink-0" />
						<span class="text-lg font-medium">{outcome}</span>
					</div>
				{/each}
			</div>
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

<!-- Core Modules -->
<section class="section-dark py-20 md:py-28">
	<div class="container-custom">
		<h2 class="text-center mb-16">CORE MODULES</h2>
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
			{#each modules as module, i (i)}
				<div class="border border-neutral-content/20 p-8 hover:border-primary transition-colors">
					<div class="flex items-start gap-4 mb-4">
						<div
							class="w-12 h-12 bg-primary text-primary-content flex items-center justify-center shrink-0"
						>
							<span class="text-xl font-bold" style="font-family: var(--font-heading);"
								>{i + 1}</span
							>
						</div>
						<div>
							<h3 class="text-xl mb-1">{module.title}</h3>
							<p class="text-sm text-primary">{module.subtitle}</p>
						</div>
					</div>
					<p class="text-sm leading-relaxed opacity-90">{module.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- The Book Section -->
<section class="py-20 md:py-28 bg-base-100">
	<div class="container-custom">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
			<div>
				<h2 class="mb-6">THE BUSINESS PARTNERING PLAYBOOK</h2>
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
				<p class="text-lg leading-relaxed mb-8">
					If you are a current or aspiring Business Partner — HR, Finance, Procurement, IT, Risk,
					Audit, Compliance, Legal, Marketing — this is the book for you.
				</p>
				<div class="bg-primary p-6">
					<p class="text-lg font-bold">
						EVOLVE shows you how to navigate service models and systems, build your commercial
						acumen and deliver value to your organisation.
					</p>
				</div>
			</div>
			<div class="flex justify-center">
				<div class="relative">
					<div class="w-80 h-96 bg-base-200 flex items-center justify-center">
						<Icon icon="ph:book-open" class="text-8xl opacity-30" />
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
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			{#each testimonials.slice(0, 3) as testimonial, i (i)}
				<div class="bg-base-100/10 p-8 relative">
					<div class="absolute top-4 left-4 opacity-20">
						<Icon icon="ph:quotes-fill" class="text-4xl" />
					</div>
					<h3 class="text-lg mb-4 relative z-10">{testimonial.title}</h3>
					<p class="text-base leading-relaxed relative z-10">"{testimonial.quote}"</p>
				</div>
			{/each}
		</div>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
			{#each testimonials.slice(3) as testimonial, i (i)}
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
					We want to disrupt everyday thinking, spark new ideas and create new ways to interact that
					will support you to truly have an impact. If you're ready to increase your impact as a
					Business Partner, register your interest to join our Business Partnering Impact Program by
					filling out the form below.
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
						<span class="label-text font-medium">Message (optional)</span>
					</div>
					<textarea
						bind:value={message}
						class="textarea textarea-bordered w-full rounded-none h-24"
						placeholder="Tell us about your team and goals..."
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
