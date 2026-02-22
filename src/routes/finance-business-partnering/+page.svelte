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
					message: `[Finance Business Partnering Program Interest]\n\n${message}`
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
		'Equip themselves with the integral skills to meet the expectations of key internal and external stakeholders',
		'Establish a solid foundation of trust with their team, stakeholders and other functions',
		'Create a personal brand built on being a consistent and trusted strategic advisor',
		'Develop their business acumen to complement their finance technical proficiency'
	];

	const modules = [
		{
			title: 'KNOW YOUR BUSINESS',
			subtitle: 'Know how to support your business model.',
			description:
				"Discover a proven approach to strategic thinking and action, fostering a robust commercial mindset among Finance professionals. This module is vital for building a high-performing, trusted Finance function, building necessary capability of your company's unique business model to enhance informed decision-making."
		},
		{
			title: 'KNOW YOUR STAKEHOLDERS',
			subtitle: "Without trust, technical skills alone won't suffice.",
			description:
				"This module underpins the Finance business partners' role in cultivating relationships with both internal and external stakeholders. We emphasise essential skills such as building trust and effective communication, crucial for maintaining a strong presence in stakeholder interactions and achieving positive impact."
		},
		{
			title: 'KNOW YOUR MACRO WORLD',
			subtitle: 'Make effective and informed decisions.',
			description:
				'More than ever, business decisions are influenced by internal and external factors across different markets and geographies. This module focuses on building a strong "outside-in" view of the world, and how macro-environmental factors impact a company\'s strategies and the Finance team\'s decision-making.'
		},
		{
			title: 'FINANCE BUSINESS PARTNERING TOOLKIT',
			subtitle: 'Develop high impact skills for greater business partnering effectiveness.',
			description:
				'Participants are introduced to tools like the ACDC Contextual Partnering Model to help identify and understand the different delivery modes of a business partner depending on the stakeholder context. These tools provide valuable insight into personal preferences and the impact on your personal brand as a business partner.'
		},
		{
			title: 'THE ART OF DATA STORYTELLING',
			subtitle: 'The vital "life" skill for all Finance Professionals.',
			description:
				"Storytelling plays an increasing and important function in all work contexts and done well, helps transform the impact Finance business partners have on their business. This influential capability can help unlock a Finance team's ability to better collaborate and negotiate better outcomes for the overall business."
		},
		{
			title: 'KNOW THE VALUE YOU DELIVER',
			subtitle: 'Be clear of the drivers necessary for driving business value.',
			description:
				"To understand the impact you're having, you need to know how to communicate and measure the value your team delivers as Finance business partners. This module shares high impact frameworks for assessing the value you deliver as Finance Business Partners – both individually and cohesively as a team."
		}
	];

	const testimonials = [
		{
			quote:
				'I really connected with and appreciated the style and approach. The one-on-one guidance really helped.',
			title: 'Guidance really helped',
			author: 'Claire',
			role: 'Senior Manager'
		},
		{
			quote:
				'My goal was to maintain focus on my most important leadership priorities and this program has helped me achieve this.',
			title: 'Helped me achieve',
			author: 'Andrew',
			role: 'General Counsel'
		},
		{
			quote:
				'My learnings from this program have helped me in so many ways both personally and professionally.',
			title: 'Program helped me in so many ways',
			author: 'Deborah',
			role: 'HR Director'
		},
		{
			quote:
				'I appreciated the extensive experience from a wide range of sectors to draw upon. The insights shared were innovative and pragmatic.',
			title: 'Insights were innovative and pragmatic',
			author: 'Raj',
			role: 'GM Human Resources'
		},
		{
			quote:
				'The guidance I have received has been instrumental in helping me to workout my overall vision and strategies for my career and personal goals. This has been a truly enriching and transformational experience.',
			title: 'Truly enriching and transformational experience',
			author: 'Katarina',
			role: 'Marketing Specialist'
		}
	];

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
</script>

<SEO
	title="Finance Business Partnering Program | Impactology"
	description="Drive your Finance strategy to new heights with Impactology's Finance Business Partnering development program. Build clarity, promote collaboration and improve team productivity and efficiency."
	ogTitle="Finance Business Partnering Program | Impactology"
	ogDescription="Drive your Finance strategy to new heights with Impactology's Finance Business Partnering development program. Build clarity, promote collaboration and improve team productivity and efficiency."
	ogImage="https://impactology.com.au/icon2.png"
	ogType="website"
	canonical="https://impactology.com.au/finance-business-partnering"
	jsonLd={{
		'@context': 'https://schema.org',
		'@type': 'Course',
		name: 'Finance Business Partnering Program',
		description:
			'A comprehensive program designed to empower Finance teams with tools, frameworks, strategies, and mindset to become trusted experts in driving organisational success.',
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
				<img src="/icon2.webp" alt="Finance Business Partnering Program" class="w-14 h-14" />
				<span class="text-primary font-bold text-xl tracking-wider">FINANCE PROGRAM</span>
			</div>
			<h1 class="text-5xl md:text-6xl lg:text-7xl mb-6 leading-none">
				FINANCE BUSINESS PARTNERING PROGRAM
			</h1>
			<p class="text-xl mb-8 opacity-90 leading-relaxed max-w-3xl">
				Champions of change. Builders of trust. Leaders in collaboration.
			</p>
			<p class="text-lg mb-8 opacity-80 leading-relaxed max-w-3xl">
				Improving the maturity of your Finance operations and building sustainable relationships
				with key internal stakeholders starts with trust: trust in the team's capabilities and with
				one another. It starts with delivering fundamentals of business partnering in a consistent
				and predictable way.
			</p>
			<a
				href="#make_impacts"
				class="btn btn-primary btn-lg uppercase font-bold rounded-none inline-flex items-center gap-2"
			>
				BOOK YOUR FREE 60-MINUTE STRATEGY SESSION
				<Icon icon="ph:arrow-right-bold" class="text-lg" />
			</a>
		</div>
	</div>
</section>

<!-- Free Strategy Session -->
<section class="py-20 md:py-28 bg-base-100">
	<div class="container-custom">
		<div class="max-w-4xl mx-auto">
			<p class="text-xl leading-relaxed mb-6">
				Take the first step towards building a trusted and high-performing Finance team – amplify
				the impact of your team's business partnering.
			</p>
			<div class="bg-base-200 p-8 mb-8">
				<p class="text-lg font-bold mb-4">Your Benefit:</p>
				<p class="text-lg leading-relaxed">
					Practical next steps you can act on immediately. No hard sell – pinky promise!
				</p>
			</div>
			<p class="text-lg leading-relaxed">
				The Finance Business Partnering Impact Program is designed to empower your team with the
				tools, frameworks, mindset and language to become trusted experts in driving organisational
				success.
			</p>
		</div>
	</div>
</section>

<!-- What Makes This Program Unique -->
<section class="section-yellow py-20 md:py-28">
	<div class="container-custom">
		<h2 class="text-center mb-12">WHAT MAKES THIS FINANCE BUSINESS PARTNERING PROGRAM UNIQUE?</h2>
		<div class="max-w-4xl mx-auto">
			<p class="text-xl leading-relaxed mb-8">
				Firstly, we specialise in developing business partners. It's what we do, it's what drives us
				and what we do well. Our dedication to research and establishing the core principles of
				business partnering with all our participants:
			</p>
			<div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
				<div class="bg-base-100/10 p-6 text-center">
					<Icon icon="ph:user-circle-fill" class="text-4xl mb-4 mx-auto" />
					<p class="text-lg font-bold">Know yourself</p>
				</div>
				<div class="bg-base-100/10 p-6 text-center">
					<Icon icon="ph:buildings-fill" class="text-4xl mb-4 mx-auto" />
					<p class="text-lg font-bold">Know your business</p>
				</div>
				<div class="bg-base-100/10 p-6 text-center">
					<Icon icon="ph:users-three-fill" class="text-4xl mb-4 mx-auto" />
					<p class="text-lg font-bold">Know your stakeholders</p>
				</div>
			</div>
			<p class="text-lg leading-relaxed mb-6">
				We use a combination of research-driven tools and frameworks, real-world insights, and
				meaningful conversations that emphasise building trust across the team. Above all, our focus
				is on taking action – consistently.
			</p>
			<p class="text-lg leading-relaxed">
				So if your team requires a <strong>capability uplift</strong>, if you're tasked with driving
				change across your business, or if you're leading a new team of Finance professionals – then
				we'd like to hear from you.
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

<!-- The Call to Action -->
<section class="py-20 md:py-28 bg-base-100">
	<div class="container-custom">
		<h2 class="text-center mb-12">THE CALL TO ACTION FOR FINANCE TEAMS!</h2>
		<div class="max-w-4xl mx-auto">
			<p class="text-xl leading-relaxed mb-6">
				For any team of <strong>Finance business partners</strong>, today's fast-changing business
				environment brings an increased responsibility for driving and owning business outcomes.
				This call to action for Finance Teams serves as an important ingredient to managing change
				across any organisation, boosting overall team performance, and staying relevant in the face
				of fast-changing market trends.
			</p>
			<p class="text-lg leading-relaxed mb-6 opacity-80">
				An <strong>effective Finance team</strong> forms a key part helping drive change across any organisation
				and helping achieve core strategic goals.
			</p>
			<p class="text-lg leading-relaxed opacity-80">
				Our <strong>Finance Business Partnering training</strong> is tailored to develop a
				high-functioning and trusted group of <strong>Finance business partners</strong>, amplifying
				their business acumen, differentiating their capabilities and giving them an edge in the
				marketplace. This course is suitable for all levels of experience.
			</p>
		</div>
	</div>
</section>

<!-- Learning Outcomes -->
<section class="section-dark py-20 md:py-28">
	<div class="container-custom">
		<h2 class="text-center mb-6">WHAT YOU'LL LEARN</h2>
		<p class="text-xl text-center mb-12 opacity-90">
			Upon finishing the Finance Business Partnering Program, participants will be able to:
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
			<p class="text-lg leading-relaxed mt-8 opacity-80">
				This <strong>Finance business partnering development program</strong> features a face-to-face
				component, and micro-learning activities and check-in process to help embed the Program learnings.
				The program aims to enhance service delivery standards with key stakeholders, and build a greater
				depth of relationship with external vendors and suppliers.
			</p>
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
					href="/evolve-book"
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
<section id="make_impacts" class="py-20 md:py-28 bg-base-100">
	<div class="container-custom">
		<div class="max-w-2xl mx-auto">
			<div class="text-center mb-12">
				<h2 class="mb-4">REGISTER YOUR INTEREST</h2>
				<p class="text-lg">
					We want to disrupt everyday thinking, spark new ideas and create new ways to interact that
					will support you to truly have an impact. If you're ready to increase your impact as a
					Finance Business Partner, register your interest by filling out the form below.
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
