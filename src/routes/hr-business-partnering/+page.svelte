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
					message: `[HR / People & Culture Business Partnering Program Interest]\n\n${message}`
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
		'Equip themselves with the necessary skills to meet the expectations of key internal and external stakeholders.',
		'Establish a solid foundation of trust with their team, stakeholders and other functions.',
		'Establish themselves as a consistent and trusted strategic advisor.',
		'Build their business acumen to complement their technical proficiency.'
	];

	const modules = [
		{
			title: 'UNDERSTAND YOUR BUSINESS',
			subtitle: "Know how to support your company's business model.",
			description:
				"We help you grow your ability to think strategically and develop a strong commercial mindset. This module is crucial for building a mature and effective HR function. It covers essential aspects of what are the core elements of a business model, helping you make informed decisions that support the overall business strategy. This module is tailored to your company and industry – no 'off the shelf' solution here!"
		},
		{
			title: 'UNDERSTAND YOUR STAKEHOLDERS',
			subtitle: "Without trust, technical skills alone won't suffice.",
			description:
				'Building and nurturing trusted business relationships across all business functions is a foundational capability for all HR and P&C professionals – regardless of seniority. This module focuses on the role HR business partners play in building relationships with internal stakeholders and their People and Culture colleagues. We prioritise trust-building, building fit for purpose communication skills, and creating a strong presence in stakeholder relationships for maximum impact and team and individual success.'
		},
		{
			title: 'UNDERSTAND YOUR MACRO WORLD',
			subtitle: 'Understanding the external influences to improve decision-making.',
			description:
				'Business decisions are influenced by internal and external factors across different industries, markets and geographies. This module focuses on building a strong "outside-in" view of the world, and how macro-environmental factors impact a company\'s direction and the HR team\'s influence and decision-making. A solid understanding of the macro factors that can impact the organisation, is critical to effective HR/P&C decision making.'
		},
		{
			title: 'HR / PEOPLE & CULTURE BUSINESS PARTNERING TOOLKIT',
			subtitle: 'Build high impact skills for greater stakeholder effectiveness.',
			description:
				'This module will introduce you to tools like the ACDC Contextual Partnering Model to help identify and understand the different delivery modes of a business partner depending on the work and stakeholder context. These tools provide participants a valuable insight into their personal preferences, and how they can build a strong internal personal brand by leveraging the different modes of business partnering in the right context.'
		},
		{
			title: 'THE ART OF DATA STORYTELLING',
			subtitle: 'A vital "life" skill for all HR and People & Culture Teams.',
			description:
				"Storytelling plays an increasing role in all work contexts and done well, helps transform the impact business partners have on their business. Refining this lost skill of storytelling can unleash a HR/P&C team's ability to collaborate effectively and influence better outcomes for the overall business. This fosters a high-performance environment driven by action and tangible results, not just ideas."
		},
		{
			title: 'KNOW & MEASURE THE VALUE YOU DELIVER',
			subtitle: 'The core ingredient to driving team & stakeholder success.',
			description:
				"To know you're having an impact, you need to know how to articulate and measure the value your team delivers as HR business partners. It's knowing the trade-offs you make around what you do and what you don't do as a team. This makes all the difference to stakeholders. This module shares some high impact frameworks to use in assessing the value HR/P&C Business Partners deliver individually and as a team."
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
	title="HR Business Partnering Program | Impactology"
	description="Take your People & Culture strategy to new heights with Impactology's HR / People & Culture Business Partnering development program. Enhance collaboration, build your team's brand and increase productivity and improve trust with key stakeholders."
	ogTitle="HR Business Partnering Program | Impactology"
	ogDescription="Take your People & Culture strategy to new heights with Impactology's HR / People & Culture Business Partnering development program. Enhance collaboration, build your team's brand and increase productivity and improve trust with key stakeholders."
	ogImage="https://impactology.com.au/icon3.png"
	ogType="website"
	canonical="https://impactology.com.au/hr-business-partnering"
	jsonLd={{
		'@context': 'https://schema.org',
		'@type': 'Course',
		name: 'HR / People & Culture Business Partnering Program',
		description:
			'A comprehensive program designed to empower HR and People & Culture teams with tools, frameworks, language and mindset to become trusted experts in driving organisational change.',
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
				<img src="/icon3.png" alt="HR Business Partnering Program" class="w-14 h-14" />
				<span class="text-primary font-bold text-xl tracking-wider">HR PROGRAM</span>
			</div>
			<h1 class="text-5xl md:text-6xl lg:text-7xl mb-6 leading-none">
				HR / PEOPLE & CULTURE BUSINESS PARTNERING IMPACT PROGRAM
			</h1>
			<p class="text-xl mb-8 opacity-90 leading-relaxed max-w-3xl">
				Experts in change. Builders of trust. Leaders in collaboration.
			</p>
			<p class="text-lg mb-8 opacity-80 leading-relaxed max-w-3xl">
				Enhancing your HR / People & Culture operations starts with trust: trust in each other and
				in the team's capabilities. Consistently executing the basics of business partnering is
				crucial. When you get these fundamentals right, building sustainable and proactive
				relationships with stakeholders becomes easier.
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
				Take the step towards building a high-performing and trusted HR team – amplify the impact of
				your team and align your business partnering approach to business needs of your key
				stakeholders – take your business partnering to the next level.
			</p>
			<div class="bg-base-200 p-8 mb-8">
				<p class="text-lg font-bold mb-4">Your Benefit:</p>
				<p class="text-lg leading-relaxed">
					Practical next steps you can act on immediately. No hard sell – pinky promise!
				</p>
			</div>
			<p class="text-lg leading-relaxed mb-6">
				The HR / People & Culture Business Partnering Impact Program is designed to empower your
				team with the tools, frameworks and mindset to become trusted experts in driving
				organisational change. This development initiative targets HR generalists, Communication
				experts, L&D, OD, Employee Experience, Recruitment and Talent Acquisition, Rewards and ER/IR
				professionals.
			</p>
			<p class="text-lg leading-relaxed">
				So if you're looking at amplifying your team's <strong>capability</strong>, if you're
				responsible with driving change across the business, or if you're leading a new team of HR
				and People and Culture Business Partners and want to get them 'talking' the same language of
				business partnering – then we'd like to hear from you.
			</p>
		</div>
	</div>
</section>

<!-- What Makes This Program Unique -->
<section class="section-yellow py-20 md:py-28">
	<div class="container-custom">
		<h2 class="text-center mb-12">
			WHAT MAKES THIS HR / PEOPLE & CULTURE BUSINESS PARTNERING TRAINING UNIQUE?
		</h2>
		<div class="max-w-4xl mx-auto">
			<p class="text-xl leading-relaxed mb-8">
				Firstly, we specialise in developing business partners. It's what we do and what we do well.
				It's what drives us. We are dedicated to building those foundational principles of business
				partnering with all our participants and their leaders:
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
				We achieve this through a blend of research-backed frameworks, practical tools, and
				real-world insights. But it's not just about the methods – we have real conversations that
				focus on building trust within the team.
			</p>
			<p class="text-lg leading-relaxed">
				Above all, we prioritise taking action. It's about doing something different to get a
				positive result. Because in the end, it's action that makes all the difference. Positive
				change doesn't happen by chance.
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
		<h2 class="text-center mb-12">THE CALL TO ACTION FOR HR / PEOPLE & CULTURE TEAMS!</h2>
		<div class="max-w-4xl mx-auto">
			<p class="text-xl leading-relaxed mb-6">
				For any team of <strong>HR/People & Culture business partners</strong>, today's dynamic
				world of work brings an increased responsibility for driving and owning business outcomes.
				This call to action is a vital pillar for managing change in any organisation.
			</p>
			<p class="text-lg leading-relaxed mb-6 opacity-80">
				An <strong>effective HR and People & Culture Team</strong> forms a key part helping drive change
				across any organisation and helping achieve core strategic goals.
			</p>
			<p class="text-lg leading-relaxed opacity-80">
				Our <strong>HR/People & Culture Business Partnering IMPACT Program</strong> initiative is
				tailored to develop a high-functioning and trusted group of
				<strong>HR/P&C business partners</strong>, building their commercial acumen, differentiating
				their capabilities and giving them an edge in the marketplace. Aimed at HR / People &
				Culture managers and their teams, this learning program is suitable for all levels of
				experience.
			</p>
		</div>
	</div>
</section>

<!-- Learning Outcomes -->
<section class="section-dark py-20 md:py-28">
	<div class="container-custom">
		<h2 class="text-center mb-6">WHAT YOU'LL LEARN</h2>
		<p class="text-xl text-center mb-12 opacity-90">
			The learning objectives of the HR/P&C Business Partnering IMPACT Program include:
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
<section id="make_impacts" class="py-20 md:py-28 bg-base-100">
	<div class="container-custom">
		<div class="max-w-2xl mx-auto">
			<div class="text-center mb-12">
				<h2 class="mb-4">REGISTER YOUR INTEREST</h2>
				<p class="text-lg">
					We want to disrupt everyday thinking, spark new ideas and create new ways to interact that
					will support you to truly have an impact. If you're ready to increase your impact as a
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
		<a href={resolve('/contact')} class="btn btn-primary btn-lg uppercase font-bold rounded-none">
			CONTACT US
		</a>
	</div>
</section>
