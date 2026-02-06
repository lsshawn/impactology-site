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
					message: `[IT Business Partnering Program Interest]\n\n${message}`
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
		'Equip themselves with the necessary behavioural attributes to meet the expectations of key internal and external stakeholders.',
		'Establish a solid foundation of trust with their team, core stakeholders and other functions.',
		'Develop a personal brand known as a consistent and trusted strategic advisor.',
		'Build their business acumen to complement their technical proficiency.'
	];

	const modules = [
		{
			title: 'KNOW YOUR BUSINESS',
			subtitle: 'How IT Business Partners can best support their business model',
			description:
				"We share a systematic and clear approach on what it means to think and act strategically while nurturing a strong commercial mindset for IT leaders and employees. This module is essential for the development of a mature and effective IT function, covers the broad and inter-related areas of a company's business model, and how to use this information to support the business with informed decision-making as part of the overall business strategy."
		},
		{
			title: 'KNOW YOUR STAKEHOLDERS',
			subtitle: "Without trust, technical skills alone won't suffice.",
			description:
				'Building and nurturing trusted business relationships across all business functions is a foundational capability for IT teams. This module focuses on the role IT business partners play in building relationships with internal stakeholders, customers and suppliers. We focus on the importance of building trust, effective communication skills, and maintaining a relevant presence in the business partnering relationship for optimal impact.'
		},
		{
			title: 'KNOW YOUR MACRO WORLD',
			subtitle: 'Understanding external influences helps enhance decision-making.',
			description:
				'Business decisions are influenced by internal and external factors across different industries, markets and geographies. This module focuses on building a strong "outside-in" view of the world, and how macro-environmental factors impact a company\'s direction and the IT team\'s broader decision-making. A solid understanding of the macro factors that impact the organisation, is critical to effective decision making.'
		},
		{
			title: 'IT BUSINESS PARTNERING TOOLKIT',
			subtitle: 'Improved stakeholder engagement through high impact skills.',
			description:
				'Participants will learn about the ACDC Contextual Partnering Model, to help identify and understand the different delivery modes of a business partner depending on the business and stakeholder context. These tools provide a valuable insight into building a strong internal personal brand and how they can amplify their impact by leveraging the different modes of business partnering in the right context.'
		},
		{
			title: 'LEARN DATA STORYTELLING',
			subtitle: 'A vital "life" skill for all IT Professionals.',
			description:
				"Storytelling plays a major function in all work contexts and done well, helps transform the impact IT business partners have on their business. This influential capability can therefore help unlock an IT team's ability to better collaborate and negotiate better outcomes for the overall business. The result: creating a high-performance environment that thrives on action and outcomes, not just ideas."
		},
		{
			title: 'KNOW THE VALUE YOU DELIVER',
			subtitle: 'Articulate and measure the value you deliver.',
			description:
				"To know you're having an impact, you need to know how to articulate and measure the value your team delivers as IT business partners. It is knowing the trade-offs you make about what you do and what you don't do as a team: this makes all the difference to stakeholders. This module shares some high impact frameworks for you to use in assessing the value IT Business Partners deliver individually and as a team."
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
	title="IT Business Partnering Program | Impactology"
	description="Take your internal IT strategy to new heights with Impactology's IT Business Partnering development program. Enhance collaboration and increase productivity and efficiency."
	ogTitle="IT Business Partnering Program | Impactology"
	ogDescription="Take your internal IT strategy to new heights with Impactology's IT Business Partnering development program. Enhance collaboration and increase productivity and efficiency."
	ogImage="https://impactology.com.au/icon3.png"
	ogType="website"
	canonical="https://impactology.com.au/it-business-partnering"
	jsonLd={{
		'@context': 'https://schema.org',
		'@type': 'Course',
		name: 'IT Business Partnering Program',
		description:
			'A comprehensive program designed to empower IT teams with tools, frameworks, language and mindset to become trusted experts in driving organisational change.',
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
				<img src="/icon3.png" alt="IT Business Partnering Program" class="w-14 h-14" />
				<span class="text-primary font-bold text-xl tracking-wider">IT PROGRAM</span>
			</div>
			<h1 class="text-5xl md:text-6xl lg:text-7xl mb-6 leading-none">
				INFORMATION TECHNOLOGY (IT) BUSINESS PARTNERING TRAINING PROGRAM
			</h1>
			<p class="text-xl mb-8 opacity-90 leading-relaxed max-w-3xl">
				Builders of trust. Experts in technology and change.
			</p>
			<p class="text-lg mb-8 opacity-80 leading-relaxed max-w-3xl">
				Enhancing the maturity of your IT operations and building sustainable relationships with key
				internal stakeholders starts with trust: trust in one another and in the team's
				capabilities. It starts with executing the business partnering fundamentals consistently.
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
				Take the first step towards building a trusted and high-performing internal IT team – and
				amplify your business partnering impact to the next level.
			</p>
			<div class="bg-base-200 p-8 mb-8">
				<p class="text-lg font-bold mb-4">Your Benefit:</p>
				<p class="text-lg leading-relaxed">
					Practical next steps you can act on immediately. No hard sell – pinky promise!
				</p>
			</div>
			<p class="text-lg leading-relaxed mb-6">
				Getting these basics right, means building sustainable and proactive relationships with your
				key internal stakeholders becomes easier. The IT Business Partnering Impact Program is
				designed to empower your team with the relevant tools, frameworks, language and mindset to
				become trusted experts in driving organisational change.
			</p>
			<p class="text-lg leading-relaxed">
				So if your team requires a <strong>capability boost</strong>, if you're tasked with driving
				IT change across the business, or if you're leading a new team of IT Business Partners and
				want to get them 'talking' the same language of business partnering and behaving in an
				aligned way – then we'd like to hear from you!
			</p>
		</div>
	</div>
</section>

<!-- What Makes This Program Unique -->
<section class="section-yellow py-20 md:py-28">
	<div class="container-custom">
		<h2 class="text-center mb-12">
			WHAT MAKES THIS IT BUSINESS PARTNERING DEVELOPMENT PROGRAM UNIQUE?
		</h2>
		<div class="max-w-4xl mx-auto">
			<p class="text-xl leading-relaxed mb-8">
				Firstly, we specialise in developing business partners. It's what we do, it's what we are
				passionate about and what we do well. It's our dedication to establishing the core
				fundamentals of business partnering with all our participants:
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
				We deliver content through a combination of research-driven tools and frameworks, real-world
				insights, and meaningful conversations that emphasise building trust across the team and
				organisation.
			</p>
			<p class="text-lg leading-relaxed">
				Above all, we prioritise taking action. Doing something different to get a positive result
				for your business and stakeholders.
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
		<h2 class="text-center mb-12">THE CALL TO ACTION FOR IT TEAMS!</h2>
		<div class="max-w-4xl mx-auto">
			<p class="text-xl leading-relaxed mb-6">
				In today's dynamic environment, businesses face increasing industry disruption, market
				uncertainties, risk, and rapid innovation. For any team of
				<strong>IT business partners</strong>, more than ever, these considerations bring an
				increased responsibility for driving and owning business outcomes.
			</p>
			<p class="text-lg leading-relaxed mb-6 opacity-80">
				This call to action for IT Teams serves as a vital pillar in managing change across any
				organisation and staying relevant in the face of fast-changing industry and technology
				market trends. An <strong>effective IT team</strong> forms a key part helping drive change across
				any organisation and helping achieve core strategic goals.
			</p>
			<p class="text-lg leading-relaxed opacity-80">
				Our <strong>IT Business Partnering training</strong> is tailored to develop a
				high-performing and trusted group of <strong>IT business partners</strong>, amplifying their
				business acumen, differentiating their capabilities and giving them an edge in the
				marketplace. Aimed at IT managers and their teams, this course is suitable for all
				backgrounds.
			</p>
		</div>
	</div>
</section>

<!-- Learning Outcomes -->
<section class="section-dark py-20 md:py-28">
	<div class="container-custom">
		<h2 class="text-center mb-6">WHAT YOU'LL LEARN</h2>
		<p class="text-xl text-center mb-12 opacity-90">
			The learning outcomes for participants include:
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
					will support you to truly have an impact. If you're ready to increase your impact as an IT
					Business Partner, register your interest by filling out the form below.
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
