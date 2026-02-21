<script lang="ts">
	import SEO from '$lib/components/SEO.svelte';
	import Icon from '@iconify/svelte';
	import InstagramSection from '$lib/components/InstagramSection.svelte';

	// Contact form state
	let firstName = $state('');
	let lastName = $state('');
	let email = $state('');
	let phone = $state('');
	let company = $state('');
	let message = $state('');
	let formStatus = $state<'idle' | 'sending' | 'sent' | 'error'>('idle');
	let errorMessage = $state('');

	async function handleContactSubmit(e: SubmitEvent) {
		e.preventDefault();
		formStatus = 'sending';
		try {
			const res = await fetch('/api/contact', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ firstName, lastName, email, phone, company, message })
			});
			if (!res.ok) throw new Error('Failed to send');
			formStatus = 'sent';
			firstName = '';
			lastName = '';
			email = '';
			phone = '';
			company = '';
			message = '';
		} catch {
			formStatus = 'error';
			errorMessage = 'Something went wrong. Please try again.';
		}
	}

	const clientLogos1 = [
		'/client-moss.jpeg',
		'/client-otto.png',
		'/client-ot.png',
		'/client-rba.png',
		'/client-kh.png',
		'/client-edgeward.png'
	];

	const clientLogos2 = [
		'/client-mu.png',
		'/client-transport.png',
		'/client-specsavers.png',
		'/client-msd.png',
		'/client-lochard.png'
	];

	const moreLogos = [
		'/client-1.png',
		'/client-otto.png',
		'/client-3.png',
		'/client-4.png',
		'/client-5.png',
		'/client-7.png',
		'/client-6.png',
		'/client-8.png',
		'/client-msd.png',
		'/client-10.png',
		'/client-11.png',
		'/client-12.png',
		'/client-13.png',
		'/client-14.png'
	];

	const testimonials = [
		{
			quote:
				'I really connected with and appreciated the style and approach. The one-on-one guidance really helped.',
			name: 'Claire',
			title: 'Senior Manager'
		},
		{
			quote:
				'My goal was to maintain focus on my most important leadership priorities and this program has helped me achieve this.',
			name: 'Andrew',
			title: 'General Counsel'
		},
		{
			quote:
				'My learnings from this program have helped me in so many ways both personally and professionally.',
			name: 'Deborah',
			title: 'HR Director'
		},
		{
			quote:
				'I appreciated the extensive experience from a wide range of sectors to draw upon. The insights shared were innovative and pragmatic.',
			name: 'Raj',
			title: 'GM Human Resources'
		},
		{
			quote:
				'The guidance I have received has been instrumental in helping me to workout my overall vision and strategies for my career and personal goals. This has been a truly enriching and transformational experience.',
			name: 'Katarina',
			title: 'Marketing Specialist'
		}
	];

	const capabilities = [
		{
			icon: 'ph:handshake-fill',
			title: 'Stakeholder Management',
			description:
				'Build and sustain trusted relationships with key stakeholders to influence outcomes and drive collaboration across the business.'
		},
		{
			icon: 'ph:chart-line-up-fill',
			title: 'Commercial Acumen',
			description:
				'Understand the financial and commercial drivers of the business to make informed decisions and deliver measurable value.'
		},
		{
			icon: 'ph:lightning-fill',
			title: 'Change Leadership',
			description:
				'Lead and manage change effectively, helping teams navigate uncertainty and adopt new ways of working.'
		},
		{
			icon: 'ph:brain-fill',
			title: 'Strategic Thinking',
			description:
				'Think beyond day-to-day operations to identify opportunities, anticipate challenges, and align with long-term business goals.'
		},
		{
			icon: 'ph:chat-circle-text-fill',
			title: 'Communication & Influence',
			description:
				'Communicate with clarity and purpose, using influence skills to shape decisions and build alignment across diverse teams.'
		}
	];
</script>

<SEO
	title="Sustainably Grow your Business | Create an Impact | Impactology"
	description="Whether you're looking to sustainably grow your business, upskill your team, or pursue a new opportunity, we have a solution or program to arm you."
	ogTitle="Sustainably Grow your Business | Create an Impact | Impactology"
	ogDescription="Whether you're looking to sustainably grow your business, upskill your team, or pursue a new opportunity, we have a solution or program to arm you."
	ogImage="https://impactology.com.au/icon1.png"
	ogType="website"
	canonical="https://impactology.com.au/"
	jsonLd={{
		'@context': 'https://schema.org',
		'@type': 'Organization',
		name: 'Impactology',
		url: 'https://impactology.com.au/',
		logo: 'https://impactology.com.au/logo.png',
		description:
			"Whether you're looking to sustainably grow your business, upskill your team, or pursue a new opportunity, we have a solution or program to arm you.",
		sameAs: [
			'https://www.facebook.com/ImpactologyAust/',
			'https://www.youtube.com/channel/UC2c5m2Io0INs-PnShJUaHQA',
			'https://au.linkedin.com/company/impactology'
		],
		areaServed: {
			'@type': 'Country',
			name: 'AU'
		}
	}}
/>

<!-- Hero Section -->
<section
	class="section-yellow py-24 md:py-32 bg-cover bg-center relative"
	style="background-image: url('/home_banner1.jpg');"
>
	<div class="absolute inset-0 bg-primary/85"></div>
	<div class="container-custom relative z-10">
		<div class="max-w-4xl">
			<h2 class="mb-6">MAKE AN IMPACT</h2>
			<p class="text-2xl md:text-3xl font-bold mb-8">
				Leadership Development Solutions Designed for Business Partners.
			</p>
			<a
				href="#make_impacts"
				class="btn btn-secondary btn-lg uppercase font-bold rounded-none mb-6 inline-block"
			>
				BOOK YOUR FREE 60-MINUTE STRATEGY SESSION
			</a>
			<p class="text-base max-w-2xl">
				This free strategy session will help you uncover what your team needs most.<br />
				<strong>Your Benefit:</strong> practical next steps you can act on immediately.<br />
				<strong>No hard sell – pinky promise!</strong>
			</p>
		</div>
	</div>
</section>

<!-- What is Impactology -->
<section class="py-20 bg-base-100">
	<div class="container-custom text-center max-w-4xl mx-auto">
		<h2 class="mb-8">WHAT IS IMPACTOLOGY?</h2>
		<div class="prose prose-lg mx-auto">
			<p class="text-lg">
				In short, we aim to disrupt conventional thinking. We connect people in ways that spark new
				ideas and help them achieve their goals faster.
			</p>
			<p class="text-lg">
				Whether you're looking to sustainably grow your business, upskill your team, or pursuing a
				new opportunity, we have a solution or program to arm you with the knowledge you'll need to
				make a truly meaningful impact in the work you do.
			</p>
		</div>
	</div>
</section>

<!-- Three Programs -->
<section class="section-dark py-20">
	<div class="container-custom">
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			<!-- Impactora -->
			<div class="text-center">
				<img src="/icon1.png" alt="Impactora" class="w-20 h-20 mx-auto mb-6" />
				<h3 class="mb-4">
					<a href="/impactora" class="hover:text-primary transition-colors">IMPACTORA</a>
				</h3>
				<p class="text-sm leading-relaxed">
					Are you looking for new ways to develop and grow yourself? Are you exploring new ways to
					empower your team? IMPACTORA is a SaaS platform designed to support you in the moments you
					need it most. It offers immediate, contextual advice, and insights, ensuring managers and
					employees resolve issues and make informed decisions in this new world of work.
				</p>
			</div>

			<!-- Business Partnering Impact Program -->
			<div class="text-center">
				<img
					src="/icon2.png"
					alt="Business Partnering Impact Program"
					class="w-20 h-20 mx-auto mb-6"
				/>
				<h3 class="mb-4">
					<a
						href="/business-partnering-impact-program"
						class="hover:text-primary transition-colors"
					>
						BUSINESS PARTNERING IMPACT PROGRAM
					</a>
				</h3>
				<p class="text-sm leading-relaxed">
					Our Business Partnering Impact Program focuses on building the behavioural attributes and
					commercial acumen required to make a greater business impact. This experiential and
					interactive program will equip business partners with the skills to drive positive
					business outcomes and enhance stakeholder relationships.
				</p>
			</div>

			<!-- Amplify Your Impact Program -->
			<div class="text-center">
				<img src="/icon3.png" alt="Amplify Your Impact Program" class="w-20 h-20 mx-auto mb-6" />
				<h3 class="mb-4">
					<a href="/amplify-your-impact-program" class="hover:text-primary transition-colors">
						AMPLIFY YOUR IMPACT PROGRAM
					</a>
				</h3>
				<p class="text-sm leading-relaxed">
					Our AMPLIFY Business Partnering Program is a tailored development experience crafted to
					equip teams for change, especially under heightened expectations. Building on the Business
					Partnering IMPACT Program, this six-month experience provides check-in support and a
					scorecard approach to drive transformation and solidify key learnings.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- Client Logos -->
<section class="section-gray py-16">
	<div class="container-custom">
		<h2 class="text-center mb-12">SOME COMPANIES WE'VE PARTNERED WITH</h2>

		<!-- First Row -->
		<div class="grid grid-cols-2 md:grid-cols-7 gap-8 items-center mb-12">
			{#each clientLogos1 as logo}
				<div class="flex items-center justify-center p-4">
					<img src={logo} alt="Client logo" class="max-h-16 w-auto object-contain" />
				</div>
			{/each}
			<div class="flex items-center justify-center">
				<a href="/contact" class="btn btn-secondary uppercase font-bold rounded-none px-8">
					CONTACT US
				</a>
			</div>
		</div>

		<!-- Second Row -->
		<div class="grid grid-cols-2 md:grid-cols-5 gap-8 items-center mb-12">
			{#each clientLogos2 as logo}
				<div class="flex items-center justify-center p-4">
					<img src={logo} alt="Client logo" class="max-h-16 w-auto object-contain" />
				</div>
			{/each}
		</div>

		<!-- Third Row - More Logos -->
		<div class="grid grid-cols-3 md:grid-cols-7 gap-6 items-center">
			{#each moreLogos as logo}
				<div class="flex items-center justify-center p-2">
					<img src={logo} alt="Client logo" class="max-h-12 w-auto object-contain" />
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- EVOLVE Book Section -->
<section class="py-20 md:py-28 bg-base-100">
	<div class="container-custom">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
			<!-- Book Cover -->
			<div class="flex justify-center lg:justify-end">
				<img
					src="/evolve-book-cover.png"
					alt="EVOLVE - The Business Partnering Playbook"
					class="max-w-xs md:max-w-sm w-full h-auto drop-shadow-2xl"
					loading="lazy"
				/>
			</div>

			<!-- Book Description -->
			<div>
				<h2 class="mb-6">THE BUSINESS PARTNERING PLAYBOOK</h2>
				<div class="prose prose-lg">
					<p class="text-lg leading-relaxed">
						Finally, a book that provides realistic and targeted advice to Business Partners!
						Business Partners hold a vital role as trusted confidants with deep technical expertise,
						and their impact is evident across all business functions.
					</p>
					<p class="text-lg leading-relaxed">
						Initially tasked with providing advice, they are now true collaborating partners,
						ideally placed to lead and manage change in the changing world of work and business. Yet
						as the Business role has changed, there has been no pathway to develop the competencies
						essential for their success. Until now.
					</p>
					<p class="text-lg leading-relaxed">
						If you are a current or aspiring Business Partner – HR, Finance, Procurement, IT, Risk,
						Audit, Compliance, Legal, Marketing – this is the book for you. EVOLVE shows you how to
						navigate service models and systems, build your commercial acumen and deliver value to
						your organisation.
					</p>
				</div>
				<a
					href="/evolve-book"
					class="btn btn-primary btn-lg uppercase font-bold rounded-none mt-8 inline-flex items-center gap-2"
				>
					FIND OUT MORE
					<Icon icon="ph:arrow-right-bold" class="text-lg" />
				</a>
			</div>
		</div>
	</div>
</section>

<!-- 5 Core Capabilities Section -->
<section class="section-dark py-20 md:py-28">
	<div class="container-custom">
		<div class="text-center max-w-3xl mx-auto mb-16">
			<h2 class="mb-6">5 CORE CAPABILITIES EVERY BUSINESS PARTNER MUST HAVE</h2>
			<p class="text-lg opacity-90 leading-relaxed">
				The Business Partner role has evolved. Now more than ever, we need Business Partners with
				the behavioural attributes and commercial acumen to elevate the client's experience and
				drive superior business value.
			</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
			{#each capabilities as cap}
				<div class="text-center">
					<div
						class="w-16 h-16 mx-auto mb-4 bg-primary flex items-center justify-center"
					>
						<Icon icon={cap.icon} class="text-3xl text-primary-content" />
					</div>
					<h3 class="text-lg mb-3">{cap.title}</h3>
					<p class="text-sm opacity-80 leading-relaxed">{cap.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Testimonials Section -->
<section class="section-yellow py-20 md:py-28" data-testid="testimonial-section">
	<div class="container-custom">
		<h2 class="text-center mb-16">WHAT OUR CLIENTS SAY</h2>
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			{#each testimonials as testimonial}
				<div class="bg-base-100 p-8 relative">
					<div class="text-primary/30 mb-4">
						<Icon icon="ph:quotes-fill" class="text-5xl" />
					</div>
					<blockquote>
						<p class="text-base leading-relaxed mb-6 text-base-content">
							"{testimonial.quote}"
						</p>
						<footer class="font-bold text-sm text-base-content">
							<cite class="not-italic">
								{testimonial.name}, <span class="font-normal opacity-70">{testimonial.title}</span>
							</cite>
						</footer>
					</blockquote>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Find Out How We Can Help - Contact Form Section -->
<section id="make_impacts" class="py-20 md:py-28 bg-base-100" data-testid="contact-form-section">
	<div class="container-custom">
		<div class="max-w-4xl mx-auto">
			<h2 class="text-center mb-4">FIND OUT HOW WE CAN HELP</h2>
			<p class="text-center text-lg mb-12 max-w-2xl mx-auto">
				Ready to make an impact? Fill out the form below and one of our team members will be in
				touch to discuss how we can support your business goals.
			</p>

			<form
				onsubmit={handleContactSubmit}
				class="grid grid-cols-1 md:grid-cols-2 gap-6"
				data-testid="inline-contact-form"
			>
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

				<label class="form-control w-full md:col-span-2">
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

				<label class="form-control w-full md:col-span-2">
					<div class="label">
						<span class="label-text font-medium">How can we help?</span>
					</div>
					<textarea
						bind:value={message}
						required
						class="textarea textarea-bordered w-full rounded-none h-32"
						placeholder="Tell us about your goals and how we can support you..."
					></textarea>
				</label>

				{#if formStatus === 'error'}
					<div class="alert alert-error rounded-none md:col-span-2">
						<Icon icon="ph:warning-circle" class="text-lg" />
						<span>{errorMessage}</span>
					</div>
				{/if}
				{#if formStatus === 'sent'}
					<div class="alert alert-success rounded-none md:col-span-2">
						<Icon icon="ph:check-circle" class="text-lg" />
						<span>Thanks for reaching out! We'll be in touch within 24 hours.</span>
					</div>
				{/if}

				<div class="md:col-span-2">
					<button
						type="submit"
						class="btn btn-secondary btn-lg uppercase font-bold rounded-none w-full md:w-auto md:px-16"
						disabled={formStatus === 'sending'}
					>
						{#if formStatus === 'sending'}
							<span class="loading loading-spinner loading-sm"></span>
							Sending...
						{:else}
							Get in Touch
						{/if}
					</button>
				</div>
			</form>
		</div>
	</div>
</section>

<!-- Instagram Section -->
<InstagramSection instagramHandle="impactologyaust" />
