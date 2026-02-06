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
					message: `[MSP/MSSP Employee Development Program Interest]\n\n${message}`
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

	const fundamentals = [
		{ text: 'Know yourself.', icon: 'ph:user-circle-fill' },
		{ text: 'Know your business.', icon: 'ph:buildings-fill' },
		{ text: 'Know your colleagues.', icon: 'ph:users-three-fill' },
		{ text: 'Know your clients.', icon: 'ph:handshake-fill' }
	];

	const learningOutcomes = [
		'Equip themselves with the necessary behavioural attributes to meet the expectations of key internal and external stakeholders, vendors and partners.',
		'Establish a solid foundation of trust with their team, core stakeholders and other functions.',
		'Develop a personal brand – known as a consistent and trusted strategic advisor.',
		'Build their business acumen to complement their technical proficiency.'
	];

	const modules = [
		{
			title: 'KNOW YOUR BUSINESS',
			subtitle: "How MSP/MSSP employees can best support your company's business model.",
			description:
				"We share a systematic and clear approach on what it means to think and act strategically while nurturing a strong commercial mindset for MSP/MSSP leaders and employees. This module is essential for the development of a mature and effective MSP/MSSP, covers the broad and inter-related areas of your company's business model, and how to use this information to support the business and clients with informed decision-making as part of the overall business strategy."
		},
		{
			title: 'KNOW YOUR STAKEHOLDERS',
			subtitle: "Without trust, technical skills alone won't do.",
			description:
				'Building and nurturing trusted and collaborative business relationships across your business is a foundational capability for any high-performing business. This module focuses on the role employees play in building relationships with internal stakeholders, clients and partners/vendors. We focus on the importance of building trust, effective communication skills, and maintaining a relevant presence in the business partnering relationship for optimal impact.'
		},
		{
			title: 'KNOW YOUR MACRO WORLD',
			subtitle: 'Understanding external influences for effective decision-making.',
			description:
				'Effective business decisions are influenced by balancing both internal and external factors across different industries, markets and geographies. This module focuses on building a strong "outside-in" view of the world, and how macro-environmental factors impact a company\'s direction. A solid understanding of the macro factors that impact the organisation, and is critical to effective decision making.'
		},
		{
			title: 'IT BUSINESS PARTNERING TOOLKIT',
			subtitle: 'Improved stakeholder engagement through high impact skills.',
			description:
				'Participants will learn about the AC/DC Contextual Partnering Model, to help identify and understand the different delivery modes of a business partner depending on the MSP/MSSPs context and stage of growth. These tools provide a valuable insight into building a strong personal brand and how to amplify their impact by leveraging the different modes of business partnering in the right context.'
		},
		{
			title: 'LEARN DATA STORYTELLING',
			subtitle: 'A vital "life" skill for all MSP/MSSP teams.',
			description:
				"Storytelling plays a major role in all work contexts and done well, helps transform the relationships with clients, vendors/partners and on their business. This life skill can help unearth an IT team's ability to better collaborate and negotiate better outcomes for the overall business. The result: creating a high-performance culture that thrives on action and outcomes, not just ideas."
		},
		{
			title: 'KNOW THE VALUE YOU DELIVER',
			subtitle: 'Measuring and articulating your impact.',
			description:
				"How do you know you're having an impact? You need to know how to clearly articulate and measure the value your team delivers to your valued clients. It is knowing the trade-offs you make about what you do and what you don't do as a team: this makes all the difference to all stakeholders. This module shares some high impact frameworks for you to use in assessing the value your business deliver individually and as a team."
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
	title="MSP MSSP Leadership Development Program | Impactology"
	description="Empower your MSP/MSSP team with skills to foster trust, collaboration, and growth. Align employee development with your business goals for sustainable success."
	ogTitle="MSP MSSP Leadership Development Program | Impactology"
	ogDescription="Empower your MSP/MSSP team with skills to foster trust, collaboration, and growth. Align employee development with your business goals for sustainable success."
	ogImage="https://impactology.com.au/icon2.png"
	ogType="website"
	canonical="https://impactology.com.au/msp-bp-programs"
	jsonLd={{
		'@context': 'https://schema.org',
		'@type': 'Course',
		name: 'MSP/MSSP Employee Development Program',
		description:
			'A comprehensive program designed to empower MSP/MSSP teams with skills to foster trust, collaboration, and sustainable growth.',
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
				<img src="/icon2.png" alt="MSP/MSSP Employee Development Program" class="w-14 h-14" />
				<span class="text-primary font-bold text-xl tracking-wider">MSP/MSSP PROGRAM</span>
			</div>
			<h1 class="text-5xl md:text-6xl lg:text-7xl mb-6 leading-none">
				MANAGED SERVICE PROVIDER (MSP/MSSP) EMPLOYEE DEVELOPMENT PROGRAM
			</h1>
			<p class="text-xl mb-8 opacity-90 leading-relaxed max-w-3xl">
				Empower your team. Drive sustainable growth.
			</p>
			<p class="text-lg mb-8 opacity-80 leading-relaxed max-w-3xl">
				In the dynamic world of MSPs/MSSPs, growth is both an opportunity and a challenge. While
				increasing MRR and scaling rapidly can be empowering, unchecked growth often puts undue
				pressure on the very teams driving your success. Sustainable growth begins with prioritising
				employee development—ensuring your team grows in step with your business.
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

<!-- What Makes This Program Unique -->
<section class="section-yellow py-20 md:py-28">
	<div class="container-custom">
		<h2 class="text-center mb-12">WHAT MAKES THIS MSP/MSSP EMPLOYEE DEVELOPMENT PROGRAM UNIQUE?</h2>
		<div class="max-w-4xl mx-auto">
			<p class="text-xl leading-relaxed mb-8">
				Historically, business partnering referred to internal consultants/advisors supporting
				functional success. Today, it's more than a role – it's an attitude. It's about fostering
				collaboration, trust, and a deep passion for the business. It's about understanding your
				work's impact on clients and how cross-functional collaboration unlocks innovation and
				success.
			</p>
			<p class="text-lg leading-relaxed mb-8">
				This is our passion, our expertise, and what we excel at. We thrive on supporting the growth
				and development of employees in the MSP/MSSP space. Our focus is on establishing the core
				fundamentals of business partnering to drive sustainable growth through high-performing
				teams:
			</p>
			<div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
				{#each fundamentals as item, i (i)}
					<div class="bg-base-100/10 p-6 text-center">
						<Icon icon={item.icon} class="text-4xl mb-4 mx-auto" />
						<p class="text-lg font-bold">{item.text}</p>
					</div>
				{/each}
			</div>
			<p class="text-lg leading-relaxed mb-6">
				Our approach combines research-driven tools and frameworks, real-world insights, and
				meaningful connections that foster trust across teams and organisations.
			</p>
			<p class="text-lg leading-relaxed">
				In a fast-paced, ever-changing industry, staying the same is simply not an option. <strong
					>Taking action is our priority</strong
				>—and we're here to help you do the same.
			</p>
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

<!-- The Call to Action -->
<section class="py-20 md:py-28 bg-base-100">
	<div class="container-custom">
		<h2 class="text-center mb-12">THE CALL TO ACTION FOR MSP/MSSPs!</h2>
		<div class="max-w-4xl mx-auto">
			<p class="text-xl leading-relaxed mb-6">The learning outcomes for participants include:</p>
		</div>
	</div>
</section>

<!-- Learning Outcomes -->
<section class="section-dark py-20 md:py-28">
	<div class="container-custom">
		<h2 class="text-center mb-6">WHAT YOU'LL LEARN</h2>
		<p class="text-xl text-center mb-12 opacity-90">
			Upon finishing the MSP/MSSP Employee Development Program, participants will be able to:
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
					If you're ready to chat and share your aspirations, please fill in the form below to find
					out more about the MSP/MSSP Business Partnering Employee Development Program:
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
