<script lang="ts">
	import SEO from '$lib/components/SEO.svelte';
	import Icon from '@iconify/svelte';
	import { resolve } from '$app/paths';

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
					message: `[Leadership Development for BPOs Interest]\n\n${message}`
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
		'Develop strategic leadership capabilities that drive business outcomes and team performance.',
		'Build trust and credibility as a leader within your organisation and with key stakeholders.',
		'Master the art of influencing and inspiring teams through change and uncertainty.',
		'Strengthen your executive presence and personal leadership brand.'
	];

	const modules = [
		{
			title: 'FOUNDATIONS OF LEADERSHIP',
			subtitle: 'Building your leadership identity and personal brand.',
			description:
				'This foundational module helps Business Partners understand their unique leadership style and how to leverage it effectively. We explore self-awareness, emotional intelligence, and the critical elements that distinguish good managers from exceptional leaders. You will develop a clear understanding of your strengths and areas for growth as a leader.'
		},
		{
			title: 'STRATEGIC THINKING & VISION',
			subtitle: 'Aligning leadership with organisational strategy.',
			description:
				'Leaders must think beyond day-to-day operations to drive meaningful change. This module focuses on developing strategic thinking capabilities, understanding organisational dynamics, and creating compelling visions that inspire action. You will learn how to translate business strategy into actionable team objectives.'
		},
		{
			title: 'LEADING THROUGH CHANGE',
			subtitle: 'Navigating complexity and driving transformation.',
			description:
				'Change is constant in modern organisations, and Business Partners are often at the forefront of transformation initiatives. This module equips you with frameworks for leading change effectively, managing resistance, and maintaining team engagement during periods of uncertainty and disruption.'
		},
		{
			title: 'BUILDING HIGH-PERFORMANCE TEAMS',
			subtitle: 'Creating cultures of excellence and accountability.',
			description:
				'Great leaders build great teams. This module covers the essential elements of team development, including psychological safety, clear expectations, feedback cultures, and performance management. You will learn how to create environments where individuals thrive and deliver exceptional results.'
		},
		{
			title: 'INFLUENCE WITHOUT AUTHORITY',
			subtitle: 'The art of stakeholder leadership.',
			description:
				'Business Partners often lead without direct authority, making influence skills critical. This module teaches advanced techniques for persuasion, negotiation, and building coalitions. You will develop the ability to drive outcomes through relationships rather than positional power.'
		},
		{
			title: 'EXECUTIVE PRESENCE & COMMUNICATION',
			subtitle: 'Commanding attention and inspiring confidence.',
			description:
				'How you communicate shapes how you are perceived as a leader. This module focuses on developing executive presence, delivering impactful presentations, facilitating difficult conversations, and communicating with confidence at all levels of the organisation.'
		}
	];

	const testimonials = [
		{
			quote:
				'This program transformed how I approach leadership. I now have the confidence and tools to lead strategic initiatives across the business.',
			title: 'Transformed how I approach leadership',
			author: 'Sarah',
			role: 'Senior Finance Business Partner'
		},
		{
			quote:
				'The focus on influence without authority was exactly what I needed. I can now drive change effectively without relying on positional power.',
			title: 'Exactly what I needed',
			author: 'Michael',
			role: 'IT Business Partner Lead'
		},
		{
			quote:
				'The executive presence module was a game-changer. I now communicate with confidence in the boardroom and with my team.',
			title: 'A game-changer',
			author: 'Jennifer',
			role: 'HR Director'
		},
		{
			quote:
				'Practical, actionable, and immediately applicable. This is leadership development that actually works in the real world.',
			title: 'Leadership that works',
			author: 'David',
			role: 'Procurement Manager'
		},
		{
			quote:
				'The blend of theory and practical application was perfect. I left every session with something I could implement immediately.',
			title: 'Perfect blend of theory and practice',
			author: 'Amanda',
			role: 'Operations Business Partner'
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
	title="Leadership Development for BPOs | Impactology"
	description="Elevate your leadership capabilities with Impactology's Leadership Development Program for Business Partner Officers. Build strategic leadership skills, executive presence, and the ability to drive change across your organisation."
	ogTitle="Leadership Development for BPOs | Impactology"
	ogDescription="Elevate your leadership capabilities with Impactology's Leadership Development Program for Business Partner Officers. Build strategic leadership skills, executive presence, and the ability to drive change across your organisation."
	ogImage="https://impactology.com.au/icon2.png"
	ogType="website"
	canonical="https://impactology.com.au/leadership-development-for-bpos"
	jsonLd={{
		'@context': 'https://schema.org',
		'@type': 'Course',
		name: 'Leadership Development for BPOs',
		description:
			'A comprehensive leadership development program designed to elevate Business Partner Officers into strategic leaders who drive organisational change and deliver exceptional results.',
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
				<img src="/icon2.png" alt="Leadership Development Program" class="w-14 h-14" />
				<span class="text-primary font-bold text-xl tracking-wider">LEADERSHIP PROGRAM</span>
			</div>
			<h1 class="text-5xl md:text-6xl lg:text-7xl mb-6 leading-none">
				LEADERSHIP DEVELOPMENT FOR BUSINESS PARTNER OFFICERS
			</h1>
			<p class="text-xl mb-8 opacity-90 leading-relaxed max-w-3xl">
				Strategic leaders. Change drivers. Trusted advisors.
			</p>
			<p class="text-lg mb-8 opacity-80 leading-relaxed max-w-3xl">
				Business Partners are increasingly called upon to lead — not just advise. This program
				develops the leadership capabilities essential for driving strategic outcomes, building
				high-performance teams, and navigating complex organisational change.
			</p>
			<a
				href="#register-interest"
				class="btn btn-primary btn-lg uppercase font-bold rounded-none inline-flex items-center gap-2"
			>
				BOOK YOUR FREE 60-MINUTE STRATEGY SESSION
				<Icon icon="ph:arrow-right-bold" class="text-lg" />
			</a>
		</div>
	</div>
</section>

<!-- Program Introduction -->
<section class="py-20 md:py-28 bg-base-100">
	<div class="container-custom">
		<div class="max-w-4xl mx-auto">
			<p class="text-xl leading-relaxed mb-6">
				Step into your leadership potential and amplify your impact across the organisation. This
				program is designed for Business Partners who are ready to move beyond technical expertise
				and embrace their role as strategic leaders.
			</p>
			<div class="bg-base-200 p-8 mb-8">
				<p class="text-lg font-bold mb-4">Your Benefit:</p>
				<p class="text-lg leading-relaxed">
					Practical leadership frameworks you can apply immediately. Real conversations about the
					challenges you face. No theory without application.
				</p>
			</div>
			<p class="text-lg leading-relaxed mb-6">
				The Leadership Development for BPOs program is designed for Business Partners across all
				functions — HR, Finance, Procurement, IT, Risk, and beyond — who want to develop their
				leadership capabilities and increase their strategic impact.
			</p>
			<p class="text-lg leading-relaxed">
				Whether you're leading a team directly, influencing without authority, or preparing for your
				next leadership role, this program provides the skills, frameworks, and confidence you need
				to succeed.
			</p>
		</div>
	</div>
</section>

<!-- What Makes This Program Unique -->
<section class="section-yellow py-20 md:py-28">
	<div class="container-custom">
		<h2 class="text-center mb-12">WHAT MAKES THIS LEADERSHIP PROGRAM UNIQUE?</h2>
		<div class="max-w-4xl mx-auto">
			<p class="text-xl leading-relaxed mb-8">
				We understand that Business Partners face unique leadership challenges. You often lead
				without direct authority, navigate complex stakeholder relationships, and must balance
				technical expertise with strategic vision. Our program is built around these realities:
			</p>
			<div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
				<div class="bg-base-100/10 p-6 text-center">
					<Icon icon="ph:compass-fill" class="text-4xl mb-4 mx-auto" />
					<p class="text-lg font-bold">Lead with purpose</p>
				</div>
				<div class="bg-base-100/10 p-6 text-center">
					<Icon icon="ph:handshake-fill" class="text-4xl mb-4 mx-auto" />
					<p class="text-lg font-bold">Influence through trust</p>
				</div>
				<div class="bg-base-100/10 p-6 text-center">
					<Icon icon="ph:trend-up-fill" class="text-4xl mb-4 mx-auto" />
					<p class="text-lg font-bold">Drive strategic outcomes</p>
				</div>
			</div>
			<p class="text-lg leading-relaxed mb-6">
				This isn't generic leadership training. Every module is tailored to the specific context of
				Business Partners — the challenges you face, the stakeholders you serve, and the outcomes
				you're expected to deliver.
			</p>
			<p class="text-lg leading-relaxed">
				We combine proven leadership frameworks with practical application, ensuring you leave each
				session with actionable strategies you can implement immediately.
			</p>
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

<!-- The Leadership Imperative -->
<section class="py-20 md:py-28 bg-base-100">
	<div class="container-custom">
		<h2 class="text-center mb-12">THE LEADERSHIP IMPERATIVE FOR BUSINESS PARTNERS</h2>
		<div class="max-w-4xl mx-auto">
			<p class="text-xl leading-relaxed mb-6">
				The role of Business Partners has evolved dramatically. Technical expertise alone is no
				longer sufficient — organisations now expect their Business Partners to be
				<strong>strategic leaders</strong> who drive change, build teams, and deliver measurable business
				outcomes.
			</p>
			<p class="text-lg leading-relaxed mb-6 opacity-80">
				An <strong>effective Business Partner leader</strong> doesn't just advise — they inspire, influence,
				and transform. They build high-performance teams, navigate organisational complexity, and create
				lasting impact.
			</p>
			<p class="text-lg leading-relaxed opacity-80">
				Our <strong>Leadership Development for BPOs</strong> program is designed to accelerate this transformation,
				equipping you with the leadership capabilities essential for success in today's demanding business
				environment.
			</p>
		</div>
	</div>
</section>

<!-- Learning Outcomes -->
<section class="section-dark py-20 md:py-28">
	<div class="container-custom">
		<h2 class="text-center mb-6">WHAT YOU'LL LEARN</h2>
		<p class="text-xl text-center mb-12 opacity-90">
			The learning objectives of the Leadership Development for BPOs program include:
		</p>
		<div class="max-w-4xl mx-auto">
			<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
				{#each learningOutcomes as outcome, i (i)}
					<div class="flex items-start gap-4 border border-neutral-content/20 p-6">
						<Icon icon="ph:check-circle-fill" class="text-2xl mt-0.5 shrink-0 text-primary" />
						<span class="text-lg">{outcome}</span>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<!-- Core Modules -->
<section class="section-yellow py-20 md:py-28">
	<div class="container-custom">
		<h2 class="text-center mb-16">CORE PROGRAM MODULES</h2>
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
			{#each modules as module, i (i)}
				<div class="bg-base-100/10 p-8 hover:bg-base-100/20 transition-colors">
					<div class="flex items-start gap-4 mb-4">
						<div class="w-12 h-12 bg-base-100 flex items-center justify-center shrink-0">
							<span class="text-xl font-bold" style="font-family: var(--font-heading);"
								>{i + 1}</span
							>
						</div>
						<div>
							<h3 class="text-xl mb-1">{module.title}</h3>
							<p class="text-sm opacity-80">{module.subtitle}</p>
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
				<p class="text-primary font-bold text-xl tracking-wider mb-4">EVOLVE</p>
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
				<div class="bg-primary p-6 mb-6">
					<p class="text-lg font-bold">
						EVOLVE shows you how to navigate service models and systems, build your commercial
						acumen and deliver value to your organisation.
					</p>
				</div>
				<a
					href={resolve('/evolve-book')}
					class="btn btn-primary btn-lg uppercase font-bold rounded-none inline-flex items-center gap-2"
				>
					BUY NOW
					<Icon icon="ph:arrow-right-bold" class="text-lg" />
				</a>
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
<section class="section-gray py-20 md:py-28">
	<div class="container-custom">
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			{#each testimonials.slice(0, 3) as testimonial, i (i)}
				<div class="bg-base-100 p-8 relative">
					<div class="absolute top-4 left-4 opacity-10">
						<Icon icon="ph:quotes-fill" class="text-4xl" />
					</div>
					<h3 class="text-lg mb-4 relative z-10">{testimonial.title}</h3>
					<p class="text-base leading-relaxed relative z-10 mb-4">"{testimonial.quote}"</p>
					<div class="border-t border-base-300 pt-4">
						<p class="font-bold">{testimonial.author}</p>
						<p class="text-sm opacity-70">{testimonial.role}</p>
					</div>
				</div>
			{/each}
		</div>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
			{#each testimonials.slice(3) as testimonial, i (i)}
				<div class="bg-base-100 p-8 relative">
					<div class="absolute top-4 left-4 opacity-10">
						<Icon icon="ph:quotes-fill" class="text-4xl" />
					</div>
					<h3 class="text-lg mb-4 relative z-10">{testimonial.title}</h3>
					<p class="text-base leading-relaxed relative z-10 mb-4">"{testimonial.quote}"</p>
					<div class="border-t border-base-300 pt-4">
						<p class="font-bold">{testimonial.author}</p>
						<p class="text-sm opacity-70">{testimonial.role}</p>
					</div>
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
					will support you to truly have an impact. If you're ready to elevate your leadership
					capabilities as a Business Partner, register your interest by filling out the form below.
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
						placeholder="Tell us about your leadership development goals..."
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
		<a href={resolve('/contact')} class="btn btn-primary btn-lg uppercase font-bold rounded-none">
			CONTACT US
		</a>
	</div>
</section>
