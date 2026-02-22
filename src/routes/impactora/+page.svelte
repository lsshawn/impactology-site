<script lang="ts">
	import SEO from '$lib/components/SEO.svelte';
	import Icon from '@iconify/svelte';

	// Rotating text state
	let currentWordIndex = $state(0);
	const rotatingWords = ['ANSWERS', 'SUPPORT', 'INSIGHTS'];

	$effect(() => {
		const interval = setInterval(() => {
			currentWordIndex = (currentWordIndex + 1) % rotatingWords.length;
		}, 2500);
		return () => clearInterval(interval);
	});

	// Testimonial carousel state
	let currentTestimonial = $state(0);
	let slideDirection = $state<'left' | 'right'>('right');
	let isAnimating = $state(false);

	const testimonials = [
		{
			quote:
				'Impactora provides streamlined insights that narrows down to specific areas',
			author: 'Janet M'
		},
		{
			quote:
				'The action pathways based on objectives, it seems like a very powerful tool to drive undecided people to action.',
			author: 'Charlotte L'
		},
		{
			quote:
				'The standouts to me are the ability to schedule goals and do reviews. I like the idea that Impactora is allowing me to continually move forward',
			author: 'Gianni R'
		},
		{
			quote:
				'At times, an organisation requiring personal development in the form of an online platform can feel mundane and distant. This section allowed a more human element to come through from the platform.',
			author: 'Lily S'
		},
		{
			quote:
				"Whether it\u2019s a quick check-in for some advice or a deep dive. Impactora has it all. In a short space of time, it has been my go-to for personal and professional development.",
			author: 'Chan L'
		}
	];

	function nextTestimonial() {
		if (isAnimating) return;
		isAnimating = true;
		slideDirection = 'right';
		setTimeout(() => {
			currentTestimonial = (currentTestimonial + 1) % testimonials.length;
			isAnimating = false;
		}, 300);
	}

	function prevTestimonial() {
		if (isAnimating) return;
		isAnimating = true;
		slideDirection = 'left';
		setTimeout(() => {
			currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
			isAnimating = false;
		}, 300);
	}

	// FAQ accordion state
	let openFaq = $state<number | null>(0);

	const faqs = [
		{
			question: 'What is Impactora?',
			answer:
				"Impactora is a SaaS based HR platform which helps solving a critical organization challenge \u2013 helping managers and employees receive tailored HR information and advice. Impactora is the platform where employees access tailored advice and information to resolve issues, access insights, make decisions, and achieve their goals which positively impacts their colleagues and work environment \u2013 imagine a combination of Wikipedia and Google tailored to your personal work context and situation."
		},
		{
			question: 'What is Impactora used for?',
			answer:
				"We solve the productivity challenge for employees and HR by providing answers to frequently asked questions for non-contextual information. We solve employee performance challenges by providing the right, tailored information with the right insights at the right time to resolve people issues and improve decision making."
		},
		{
			question: 'Is the Impactora Platform safe and secure?',
			answer:
				'Impactora is the trusted Platform where employees feel safe to help them resolve some of the tricky issues, access insights, make decisions, and achieve their goals which positively impacts their colleagues and work environment.'
		},
		{
			question: 'Who is the target audience for Impactora?',
			answer:
				'Impactora is designed for mature mid-sized organisations and smaller high growth organisations. Our end users are graduates, early career employees, first-time managers, emerging leaders and newly promoted managers, across all disciplines and job functions.'
		},
		{
			question: 'Which employees can best benefit from Impactora?',
			answer:
				"Employees who are stretched in their role and have a lack of time and knowledge on where to seek advice, getting stuck in career, have a fear of failing in their role, looking for a platform to complement existing learning and development programs, and those who have a willingness to embrace new modes of learning."
		}
	];

	// Contact form state
	let firstName = $state('');
	let lastName = $state('');
	let email = $state('');
	let company = $state('');
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
					message: `[IMPACTORA Demo Request]\n\n${message}`
				})
			});
			if (!res.ok) throw new Error('Failed to send');
			formStatus = 'sent';
			firstName = '';
			lastName = '';
			email = '';
			company = '';
			message = '';
		} catch {
			formStatus = 'error';
			errorMessage = 'Something went wrong. Please try again.';
		}
	}

	const helpBoxes = [
		{
			icon: '/impactora-icon-resolve.png',
			title: 'Resolve\nissues',
			description:
				"Reduced in-person connectivity means we miss out on the valuable 'water cooler' conversation to help us solve problems in a timely manner \u2013 resolve issues, anytime from one platform."
		},
		{
			icon: '/impactora-icon-insights.png',
			title: 'Quickly Access\nInsights',
			description:
				'When did work and life get so busy again!? IMPACTORA saves you valuable time by helping you access the insights you need to make more informed decisions and take action sooner.'
		},
		{
			icon: '/impactora-icon-decisions.png',
			title: 'Make informed\ndecisions',
			description:
				"Today\u2019s abundance of choice is often the enemy of action. IMPACTORA allows access to tailored and timely advice, which means you can make more quicker decisions that often create lasting impact."
		},
		{
			icon: '/impactora-icon-goals.png',
			title: 'Achieve\ngoals',
			description:
				'Some insights and advice are worth investing more time in. IMPACTORA lets you create goals to fast track your personal growth in the moments that matter most.'
		}
	];

	const steps = [
		{
			number: '1.',
			title: 'Know thy self',
			description: 'Answer a series of questions and access your personal profile.',
			icon: 'ph:user'
		},
		{
			number: '2.',
			title: 'Start exploring',
			description:
				'Access insights and advice tailored to your personal profile and organisation.',
			icon: 'ph:magnifying-glass'
		},
		{
			number: '3.',
			title: 'Take action sooner',
			description:
				'Increase your impact on yourself, your colleagues, your team and customers.',
			icon: 'ph:clock'
		},
		{
			number: '4.',
			title: 'Access daily insights',
			description:
				'Your personalised feed will keep you motivated to achieve your goals.',
			icon: 'ph:calendar'
		}
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
<section class="bg-white py-24 md:py-32 relative overflow-hidden min-h-[70vh] flex items-center">
	<div class="container-custom relative z-10">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
			<div>
				<div class="mb-8">
					<span
						class="text-6xl md:text-7xl lg:text-[90px] font-bold leading-none"
						style="font-family: var(--font-heading);"
					>
						FIND
					</span>
					<div class="relative h-[70px] md:h-[90px] overflow-hidden">
						{#each rotatingWords as word, i (word)}
							<span
								class="text-6xl md:text-7xl lg:text-[90px] font-bold leading-none absolute left-0 transition-all duration-500"
								style="font-family: var(--font-heading); color: #5ad4ff; {i === currentWordIndex
									? 'opacity: 1; transform: translateY(0)'
									: 'opacity: 0; transform: translateY(100%)'}"
							>
								{word}
							</span>
						{/each}
					</div>
				</div>
				<p class="text-xl mb-8 opacity-80 leading-relaxed max-w-xl">
					Tailored advice and insights for employees and managers.
				</p>
				<a
					href="#contact-section"
					class="inline-block bg-black text-white px-10 py-4 rounded-full font-bold text-sm uppercase tracking-wider hover:bg-white hover:text-[#5ad4ff] hover:outline hover:outline-2 hover:outline-[#5ad4ff] transition-all"
				>
					BOOK A DEMO
				</a>
			</div>

			<!-- Product Visual -->
			<div class="relative flex justify-center">
				<img
					src="/impactora-promo-banner.png"
					alt="IMPACTORA App"
					class="w-full max-w-lg h-auto"
					loading="eager"
				/>
			</div>
		</div>
	</div>
</section>

<!-- Tailored Advice & Insights Section -->
<section class="py-20 md:py-28 bg-base-100">
	<div class="container-custom">
		<div class="max-w-4xl mx-auto text-center">
			<h2 class="mb-8 text-3xl md:text-4xl">TAILORED ADVICE & INSIGHTS</h2>
			<p class="text-lg leading-relaxed mb-6">
				The way we work has changed forever. The emergence of remote and hybrid workplaces has
				presented great opportunities and benefits for both organisations and their employees,
				but it's not without its challenges. Most notably is the loss of in-person workplace
				connection, and along with it the "water cooler" conversations where people shared their
				experiences and knowledge.
			</p>
			<p class="text-lg leading-relaxed">
				<strong>IMPACTORA</strong> is a SaaS platform designed to bridge that loss of organisational
				knowledge by providing easy to access and immediate support, advice and insights that are tailored
				to the individual employee and your business.
			</p>
		</div>
	</div>
</section>

<!-- Impactora Helps You Section - 4 Dark Gradient Boxes -->
<section class="py-0">
	<div class="max-w-[1400px] mx-auto">
		<h2 class="text-center mb-12 text-3xl md:text-4xl pt-16">IMPACTORA HELPS YOU&hellip;</h2>
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
			{#each helpBoxes as box, i (i)}
				<div
					class="p-10 text-white"
					style="background-color: {['#636363', '#4a4a4a', '#363636', '#1a1a1a'][i]};"
				>
					<img
						src={box.icon}
						alt={box.title.replace('\n', ' ')}
						class="w-24 h-24 mb-6 object-contain"
					/>
					<h3
						class="text-xl mb-4 whitespace-pre-line"
						style="color: #5ad4ff;"
					>
						{box.title}
					</h3>
					<p class="text-sm leading-relaxed opacity-90">
						{box.description}
					</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Timely Information & Advice Section -->
<section class="py-20 md:py-28 bg-base-100">
	<div class="container-custom">
		<div class="max-w-4xl mx-auto text-center">
			<h2 class="mb-8 text-3xl md:text-4xl">TIMELY INFORMATION & ADVICE</h2>
			<p class="text-lg leading-relaxed mb-10">
				We now have access to infinite sources of knowledge, data, and advice. However, it can be
				difficult to find information specific to your situation and the abundance of choice is
				often the enemy of action. <strong>IMPACTORA</strong> provides leaders, managers and employees
				access to tailored advice and insights that will positively impact themselves, their teams,
				colleagues and customers.
			</p>

			<!-- Promo Banner Image -->
			<div class="mb-10">
				<img
					src="/impactora-promo-banner.png"
					alt="IMPACTORA Platform Preview"
					class="w-full max-w-2xl mx-auto h-auto rounded-sm shadow-lg"
				/>
			</div>

			<a
				href="#contact-section"
				class="inline-block bg-black text-white px-10 py-4 rounded-full font-bold text-sm uppercase tracking-wider hover:bg-white hover:text-[#5ad4ff] hover:outline hover:outline-2 hover:outline-[#5ad4ff] transition-all"
			>
				BOOK A DEMO
			</a>
		</div>
	</div>
</section>

<!-- Feature Showcase - Interactive Boxes -->
<section class="py-0 overflow-hidden">
	<div class="grid grid-cols-1 md:grid-cols-2">
		<!-- Left Column - Team Management -->
		<div class="bg-[#5ad4ff] p-10 md:p-14 text-black relative min-h-[400px] flex flex-col justify-between">
			<div>
				<p class="text-sm uppercase tracking-wider mb-2 opacity-70">Team management advice</p>
				<h3 class="text-3xl md:text-4xl mb-6 leading-tight" style="font-family: var(--font-heading);">
					HOW TO IDENTIFY & MANAGE HIGH PERFORMERS?
				</h3>
			</div>
			<img
				src="/impactora-mask-group.png"
				alt="Team meeting"
				class="absolute inset-0 w-full h-full object-cover opacity-20"
			/>
		</div>

		<!-- Right Column - Personal Development -->
		<div class="bg-[#00b9d1] p-10 md:p-14 text-white relative min-h-[400px] flex flex-col justify-between">
			<div>
				<p class="text-sm uppercase tracking-wider mb-2 opacity-70">Personal development</p>
				<h3 class="text-3xl md:text-4xl mb-6 leading-tight" style="font-family: var(--font-heading);">
					DEVELOPING THE RIGHT SKILLS FOR YOUR CAREER
				</h3>
			</div>
			<div class="flex gap-6 relative z-10">
				<div class="flex-1">
					<div class="text-5xl font-bold mb-2" style="font-family: var(--font-heading);">1</div>
					<h4 class="text-lg mb-1">Develop your skills</h4>
				</div>
				<div class="flex-1">
					<div class="text-5xl font-bold mb-2" style="font-family: var(--font-heading);">2</div>
					<h4 class="text-lg mb-1">Shared knowledge</h4>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- How It Works Section -->
<section class="py-20 md:py-28 bg-base-100">
	<div class="container-custom">
		<h2 class="text-center mb-16 text-3xl md:text-4xl">HOW IT WORKS</h2>

		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
			{#each steps as step, i (i)}
				<div class="text-center relative">
					<div class="w-14 h-14 mx-auto mb-4 flex items-center justify-center">
						<Icon icon={step.icon} class="text-3xl text-black" />
					</div>
					<div
						class="text-4xl font-bold mb-2"
						style="font-family: var(--font-heading);"
					>
						{step.number}
					</div>
					<h3 class="text-lg mb-3" style="font-family: var(--font-heading);">
						{step.title.toUpperCase()}
					</h3>
					<p class="text-sm leading-relaxed opacity-80">
						{step.description}
					</p>
					<!-- Connector line (visible on lg only, not on last item) -->
					{#if i < steps.length - 1}
						<div class="hidden lg:block absolute top-7 -right-4 w-8 h-px bg-base-300"></div>
					{/if}
				</div>
			{/each}
		</div>

		<div class="text-center mt-12">
			<a
				href="#contact-section"
				class="inline-block bg-black text-white px-10 py-4 rounded-full font-bold text-sm uppercase tracking-wider hover:bg-white hover:text-[#5ad4ff] hover:outline hover:outline-2 hover:outline-[#5ad4ff] transition-all"
			>
				BOOK A DEMO
			</a>
		</div>
	</div>
</section>

<!-- Testimonials Section -->
<section class="section-dark py-20 md:py-28 relative overflow-hidden">
	<div class="container-custom">
		<div class="max-w-3xl mx-auto text-center relative">
			<!-- Testimonial Box -->
			<div class="testimonial-title mx-auto">
				<div
					class="testimonial-slide {isAnimating
						? slideDirection === 'right'
							? 'slide-out-left'
							: 'slide-out-right'
						: slideDirection === 'right'
							? 'slide-in-right'
							: 'slide-in-left'}"
				>
					<div>
						<h3
							class="text-xl md:text-2xl font-bold leading-relaxed"
							style="font-family: var(--font-heading);"
						>
							"{testimonials[currentTestimonial].quote}"
						</h3>
						<p class="mt-4 text-sm opacity-80">
							&ndash; {testimonials[currentTestimonial].author}
						</p>
					</div>
				</div>
			</div>

			<!-- Navigation -->
			<div class="flex items-center justify-center gap-6 mt-12">
				<button
					onclick={prevTestimonial}
					class="w-10 h-10 border border-neutral-content/30 flex items-center justify-center hover:bg-primary hover:text-primary-content hover:border-primary transition-colors"
					aria-label="Previous testimonial"
				>
					<Icon icon="ph:caret-left-bold" />
				</button>
				<span class="text-sm opacity-70">
					{currentTestimonial + 1}/{testimonials.length}
				</span>
				<button
					onclick={nextTestimonial}
					class="w-10 h-10 border border-neutral-content/30 flex items-center justify-center hover:bg-primary hover:text-primary-content hover:border-primary transition-colors"
					aria-label="Next testimonial"
				>
					<Icon icon="ph:caret-right-bold" />
				</button>
			</div>
		</div>
	</div>
</section>

<!-- FAQ Section -->
<section class="py-20 md:py-28 bg-base-100">
	<div class="container-custom">
		<div class="max-w-3xl mx-auto">
			<h2 class="text-center mb-6 text-3xl md:text-4xl">FREQUENTLY ASKED QUESTIONS</h2>
			<p class="text-center mb-12 opacity-80">
				Here are a few of the more common questions we come across. However, if you still can't
				find what you're looking for, get in touch with us and we'll do our best to provide you
				with the answers you're after.
			</p>

			<div class="space-y-3">
				{#each faqs as faq, i (i)}
					<div class="border border-base-300 bg-white">
						<button
							onclick={() => (openFaq = openFaq === i ? null : i)}
							class="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
						>
							<span class="font-bold text-lg" style="font-family: var(--font-heading);">
								{faq.question.toUpperCase()}
							</span>
							<span
								class="shrink-0 w-7 h-7 border-2 border-[#5ad4ff] flex items-center justify-center text-[#5ad4ff] transition-transform {openFaq ===
								i
									? 'rotate-45'
									: ''}"
							>
								<Icon icon="ph:plus-bold" class="text-sm" />
							</span>
						</button>
						{#if openFaq === i}
							<div class="px-6 pb-5">
								<p class="text-sm leading-relaxed opacity-80">{faq.answer}</p>
							</div>
						{/if}
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<!-- Demo Request Form -->
<section id="contact-section" class="py-20 md:py-28 bg-base-200">
	<div class="container-custom">
		<div class="max-w-xl mx-auto">
			<div class="text-center mb-12">
				<h2 class="mb-4 text-3xl md:text-4xl">REQUEST AN IMPACTORA DEMONSTRATION</h2>
				<p class="text-lg opacity-80">
					Simply fill out the form below and an Impactora representative will contact you to
					book your demonstration.
				</p>
			</div>

			<form onsubmit={handleDemoRequest} class="space-y-5">
				<div class="grid grid-cols-1 md:grid-cols-2 gap-5">
					<input
						type="text"
						bind:value={firstName}
						required
						class="input input-bordered w-full rounded-none"
						placeholder="First Name*"
					/>
					<input
						type="text"
						bind:value={lastName}
						required
						class="input input-bordered w-full rounded-none"
						placeholder="Last Name*"
					/>
				</div>

				<input
					type="email"
					bind:value={email}
					required
					class="input input-bordered w-full rounded-none"
					placeholder="Work Email*"
				/>

				<input
					type="text"
					bind:value={company}
					required
					class="input input-bordered w-full rounded-none"
					placeholder="Company*"
				/>

				<textarea
					bind:value={message}
					class="textarea textarea-bordered w-full rounded-none h-28"
					placeholder="Message (optional)"
				></textarea>

				{#if formStatus === 'error'}
					<div class="alert alert-error rounded-none">
						<Icon icon="ph:warning-circle" class="text-lg" />
						<span>{errorMessage}</span>
					</div>
				{/if}
				{#if formStatus === 'sent'}
					<div class="alert alert-success rounded-none">
						<Icon icon="ph:check-circle" class="text-lg" />
						<span>Thanks for your interest! We'll be in touch shortly to book your demonstration.</span>
					</div>
				{/if}

				<button
					type="submit"
					class="w-full bg-black text-white py-4 font-bold text-sm uppercase tracking-wider hover:bg-[#5ad4ff] transition-colors"
					disabled={formStatus === 'sending'}
				>
					{#if formStatus === 'sending'}
						<span class="loading loading-spinner loading-sm"></span>
						Sending...
					{:else}
						SUBMIT
					{/if}
				</button>
			</form>
		</div>
	</div>
</section>
