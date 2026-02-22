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
					message: `[Sales, BD & Client Management Business Partnering IMPACT Program Interest]\n\n${message}`
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

	const challenges = [
		{
			title: 'Siloed Operations and Misaligned Priorities',
			challenge:
				'Sales and BD teams often work in isolation and/or in silos, leading to misalignment with marketing, operations, and product development teams.',
			solution:
				'Our program fosters cross-functional collaboration and strategic alignment, ensuring sales and client servicing teams work cohesively with other departments to deliver holistic solutions to clients.'
		},
		{
			title: 'Transactional Client Relationships',
			challenge:
				'Sales teams may struggle to move beyond transactional interactions, which can limit their ability to build long-term, trust-based client relationships.',
			solution:
				'We train teams to adopt a consultative approach, positioning themselves as trusted advisors who add strategic value to clients.'
		},
		{
			title: 'Leadership Gaps in Driving Performance',
			challenge:
				'Sales leaders may lack the tools to effectively inspire, align, and manage diverse teams in high-pressure environments.',
			solution:
				'Our leadership program empowers sales directors and team leaders to build high-performing teams that thrive on collaboration and accountability.'
		},
		{
			title: 'Lack of Commercial Acumen Across Teams',
			challenge:
				'Sales professionals may lack the broader business acumen needed to align their efforts with organisational goals and make strategic decisions.',
			solution:
				'We enhance commercial acumen through targeted training, enabling teams to make smarter, more impactful decisions.'
		}
	];

	const programHighlights = [
		{
			title: 'Build Strategic Business Partnering Skills',
			items: [
				{
					subtitle: 'Enhance Client Relationships',
					description:
						'Train your teams to engage with clients as trusted advisors rather than transactional salespeople.'
				},
				{
					subtitle: 'Increase Influence',
					description:
						'Develop the skills to align with and influence key stakeholders internally and externally.'
				}
			]
		},
		{
			title: 'Strengthen Leadership Across Teams',
			items: [
				{
					subtitle: 'Empower Sales Leaders',
					description:
						'Provide tools and frameworks to inspire teams, foster collaboration, and drive accountability.'
				},
				{
					subtitle: 'Lead Through Change',
					description: 'Equip leaders to navigate market disruptions and drive innovation.'
				}
			]
		},
		{
			title: 'Foster Cross-Functional Collaboration',
			items: [
				{
					subtitle: 'Break Down Silos',
					description:
						'Create alignment between sales, marketing, operations, and product teams for seamless delivery.'
				},
				{
					subtitle: 'Improve Communication',
					description:
						'Train teams to communicate client needs effectively across functions to enhance service delivery and client satisfaction.'
				}
			]
		},
		{
			title: 'Enhance Commercial Acumen',
			items: [
				{
					subtitle: 'Understand the Business Landscape',
					description:
						'Train teams to align sales strategies with organisational goals and market dynamics.'
				},
				{
					subtitle: 'Focus on Value Creation',
					description:
						'Equip sales teams to demonstrate ROI and articulate the value of their solutions to clients and leadership.'
				}
			]
		}
	];

	const whoShouldAttend = [
		'Sales Directors',
		'Sales Team Leaders',
		'Sales Managers',
		'BDMs',
		'Sales Representatives',
		'Client Servicing Managers',
		'Business Development (BD) Managers'
	];

	const teamBenefits = [
		{
			title: 'Stronger Client Relationships',
			description: 'Build trust and drive long-term partnerships with clients.'
		},
		{
			title: 'Enhanced Collaboration',
			description: 'Work seamlessly with internal teams to deliver comprehensive solutions.'
		},
		{
			title: 'Increased Motivation',
			description: 'Empower teams with the tools and confidence to achieve their goals.'
		}
	];

	const orgBenefits = [
		{
			title: 'Improved Sales Performance',
			description: 'Drive revenue growth through more effective sales and BD strategies.'
		},
		{
			title: 'Greater Efficiency',
			description:
				'Align sales efforts with broader organisational goals to eliminate redundancies and maximise impact.'
		},
		{
			title: 'Increased Client Retention',
			description: 'Deliver exceptional client experiences that foster loyalty and repeat business.'
		}
	];

	const whyDifferent = [
		{
			title: 'Customised Training',
			description: "Each program is tailored to your organisation's needs and challenges."
		},
		{
			title: 'Experienced Facilitators',
			description:
				'Learn from experts with deep industry experience in sales leadership and business partnering.'
		},
		{
			title: 'Actionable Frameworks',
			description: 'Gain practical tools that your teams can immediately apply in their roles.'
		},
		{
			title: 'Proven Results',
			description:
				'Our programs are designed to deliver measurable outcomes, from improved sales performance to stronger client relationships.'
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
	title="Sales & Client Management Business Partnering Program | Impactology"
	description="Empower sales, BD, and client management teams with our Business Partnering IMPACT Program. Drive growth, build trust, and foster long-term client relationships."
	ogTitle="Sales & Client Management Business Partnering Program | Impactology"
	ogDescription="Empower sales, BD, and client management teams with our Business Partnering IMPACT Program. Drive growth, build trust, and foster long-term client relationships."
	ogImage="https://impactology.com.au/icon2.png"
	ogType="website"
	canonical="https://impactology.com.au/sales-business-development-client-management-program"
	jsonLd={{
		'@context': 'https://schema.org',
		'@type': 'Course',
		name: 'Sales, BD & Client Management Business Partnering IMPACT Program',
		description:
			'A comprehensive program designed to transform sales, BD, and client management teams into strategic business partners who drive revenue, build client trust, and align with broader organisational objectives.',
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
				<img src="/icon2.webp" alt="Sales Business Partnering Program" class="w-14 h-14" />
				<span class="text-primary font-bold text-xl tracking-wider">SALES PROGRAM</span>
			</div>
			<h1 class="text-5xl md:text-6xl lg:text-7xl mb-6 leading-none">
				SALES, BUSINESS DEVELOPMENT & CLIENT MANAGEMENT BUSINESS PARTNERING IMPACT PROGRAM
			</h1>
			<p class="text-xl mb-8 opacity-90 leading-relaxed max-w-3xl">
				Revenue drivers. Client advocates. Strategic partners.
			</p>
			<p class="text-lg mb-8 opacity-80 leading-relaxed max-w-3xl">
				Sales, Business Development (BD), and Client Management teams are the lifeblood of any
				growing organisation. This program equips sales leaders and client servicing teams with the
				skills and strategies to become true business partners, enabling them to drive revenue,
				build client trust, and align seamlessly with broader organisational objectives.
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

<!-- Free Strategy Session -->
<section class="py-20 md:py-28 bg-base-100">
	<div class="container-custom">
		<div class="max-w-4xl mx-auto">
			<p class="text-xl leading-relaxed mb-6">
				This free strategy session will help you uncover what your team needs most.
			</p>
			<div class="bg-base-200 p-8 mb-8">
				<p class="text-lg font-bold mb-4">Your Benefit:</p>
				<p class="text-lg leading-relaxed">
					Practical next steps you can act on immediately. No hard sell - pinky promise!
				</p>
			</div>
			<h2 class="text-3xl mb-6">
				Transform Your Sales, BD & Client Management Teams into Strategic Business Partners
			</h2>
			<p class="text-lg leading-relaxed mb-6">
				In the complex environments of small to medium enterprises and large enterprise-level
				businesses, sales teams often face challenges that hinder their ability to deliver
				consistent growth, align with strategic goals, and maximise client satisfaction.
			</p>
			<p class="text-lg leading-relaxed">
				The Sales, BD & Client Management Business Partnering IMPACT Program by Impactology is
				specifically designed to address these challenges. It equips sales leaders and client
				servicing teams with the skills and strategies to become true business partners.
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

<!-- Why Choose Section -->
<section class="section-yellow py-20 md:py-28">
	<div class="container-custom">
		<h2 class="text-center mb-6">
			WHY CHOOSE THE SALES, BD & CLIENT MANAGEMENT BUSINESS PARTNERING IMPACT PROGRAM?
		</h2>
		<p class="text-xl text-center mb-12 max-w-3xl mx-auto">
			Addressing Common Challenges Faced by Sales and BD Teams
		</p>
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
			{#each challenges as challenge, i (i)}
				<div class="bg-base-100/10 p-8 hover:bg-base-100/20 transition-colors">
					<div class="flex items-start gap-4 mb-4">
						<div class="w-12 h-12 bg-base-100 flex items-center justify-center shrink-0">
							<span class="text-xl font-bold" style="font-family: var(--font-heading);"
								>{i + 1}</span
							>
						</div>
						<h3 class="text-xl">{challenge.title}</h3>
					</div>
					<div class="mb-4">
						<p class="text-sm font-bold mb-2">The Challenge:</p>
						<p class="text-sm leading-relaxed opacity-90">{challenge.challenge}</p>
					</div>
					<div>
						<p class="text-sm font-bold mb-2">Our Solution:</p>
						<p class="text-sm leading-relaxed opacity-90">{challenge.solution}</p>
					</div>
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
					If you are a current or aspiring Business Partner - HR, Finance, Procurement, IT, Risk,
					Audit, Compliance, Legal, Marketing - this is the book for you.
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

<!-- Program Highlights -->
<section class="section-dark py-20 md:py-28">
	<div class="container-custom">
		<h2 class="text-center mb-16">PROGRAM HIGHLIGHTS</h2>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
			{#each programHighlights as highlight, i (i)}
				<div class="border border-neutral-content/20 p-8">
					<h3 class="text-xl mb-6 text-primary">{highlight.title}</h3>
					{#each highlight.items as item}
						<div class="mb-4 last:mb-0">
							<p class="font-bold mb-2">{item.subtitle}:</p>
							<p class="text-sm opacity-80 leading-relaxed">{item.description}</p>
						</div>
					{/each}
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Who Should Attend -->
<section class="py-20 md:py-28 bg-base-100">
	<div class="container-custom">
		<h2 class="text-center mb-12">WHO SHOULD ATTEND?</h2>
		<div class="max-w-4xl mx-auto">
			<div class="grid grid-cols-2 md:grid-cols-4 gap-4">
				{#each whoShouldAttend as role, i (i)}
					<div class="bg-base-200 p-4 text-center">
						<p class="font-medium">{role}</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<!-- Program Benefits -->
<section class="section-yellow py-20 md:py-28">
	<div class="container-custom">
		<h2 class="text-center mb-16">PROGRAM BENEFITS</h2>
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
			<div>
				<h3 class="text-2xl mb-8 text-center">For Your Team</h3>
				<div class="space-y-6">
					{#each teamBenefits as benefit}
						<div class="flex items-start gap-4 bg-base-100/10 p-6">
							<Icon icon="ph:check-circle-fill" class="text-2xl mt-0.5 shrink-0" />
							<div>
								<p class="font-bold mb-1">{benefit.title}:</p>
								<p class="text-sm opacity-90">{benefit.description}</p>
							</div>
						</div>
					{/each}
				</div>
			</div>
			<div>
				<h3 class="text-2xl mb-8 text-center">For Your Organisation</h3>
				<div class="space-y-6">
					{#each orgBenefits as benefit}
						<div class="flex items-start gap-4 bg-base-100/10 p-6">
							<Icon icon="ph:check-circle-fill" class="text-2xl mt-0.5 shrink-0" />
							<div>
								<p class="font-bold mb-1">{benefit.title}:</p>
								<p class="text-sm opacity-90">{benefit.description}</p>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Why Impactology -->
<section class="py-20 md:py-28 bg-base-100">
	<div class="container-custom">
		<h2 class="text-center mb-6">WHY IMPACTOLOGY?</h2>
		<p class="text-xl text-center mb-12 max-w-3xl mx-auto">
			At Impactology, we understand the unique challenges that sales, BD, and client management
			teams face in small to medium and large organisations. Our tailored programs are designed to
			address these pain points and deliver actionable solutions that drive real change.
		</p>
		<div class="max-w-4xl mx-auto">
			<h3 class="text-2xl mb-8 text-center">What Makes Us Different?</h3>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
				{#each whyDifferent as item}
					<div class="flex items-start gap-4 border border-base-300 p-6">
						<Icon icon="ph:star-fill" class="text-2xl mt-0.5 shrink-0 text-primary" />
						<div>
							<p class="font-bold mb-1">{item.title}:</p>
							<p class="text-sm opacity-80">{item.description}</p>
						</div>
					</div>
				{/each}
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

<!-- Take the First Step -->
<section class="section-dark py-16">
	<div class="container-custom text-center">
		<h2 class="text-3xl md:text-4xl mb-6">TAKE THE FIRST STEP TOWARD SUSTAINABLE GROWTH</h2>
		<p class="text-lg mb-8 max-w-3xl mx-auto opacity-90">
			Empower your sales, BD, and client management teams to overcome bottlenecks, drive revenue,
			and build long-term client relationships. The Sales, BD & Client Management Business
			Partnering IMPACT Program is your pathway to creating high-performing teams that thrive in
			today's competitive environment.
		</p>
	</div>
</section>

<!-- Register Interest Form -->
<section id="register-interest" class="py-20 md:py-28 bg-base-100">
	<div class="container-custom">
		<div class="max-w-2xl mx-auto">
			<div class="text-center mb-12">
				<h2 class="mb-4">REGISTER YOUR INTEREST TODAY</h2>
				<p class="text-lg">
					Ready to amplify your sales leadership and team performance? Contact us to learn more
					about how our program can help your organisation achieve its goals.
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
