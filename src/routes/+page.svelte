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

	const clientPhotos = [
		'/client-photo-1.jpg',
		'/client-photo-2.jpg',
		'/client-photo-3.jpg',
		'/client-photo-4.jpg',
		'/client-photo-5.jpg',
		'/client-photo-6.jpg'
	];

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
		logo: '/logo.png',
		sameAs: [
			'https://www.facebook.com/ImpactologyAust/',
			'https://www.youtube.com/channel/UC2c5m2Io0INs-PnShJUaHQA',
			'https://au.linkedin.com/company/impactology'
		]
	}}
/>

<!-- Hero Section -->
<section class="section-yellow py-24 md:py-32">
	<div class="container-custom">
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

<!-- IMPACTORA Showcase Section -->
<section class="section-dark py-20 md:py-28">
	<div class="container-custom">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
			<!-- Content -->
			<div class="order-2 lg:order-1">
				<div class="flex items-center gap-3 mb-6">
					<img src="/icon1.png" alt="IMPACTORA" class="w-12 h-12" />
					<span class="text-primary font-bold text-lg tracking-wider">IMPACTORA</span>
				</div>
				<h2 class="text-4xl md:text-5xl lg:text-6xl mb-6">TAILORED ADVICE & INSIGHTS</h2>
				<p class="text-lg mb-8 opacity-90 leading-relaxed">
					IMPACTORA delivers personalised guidance exactly when you need it. Our intelligent
					platform analyses your unique situation and provides actionable recommendations to help
					managers and teams navigate workplace challenges with confidence.
				</p>
				<ul class="space-y-4 mb-10">
					<li class="flex items-start gap-3">
						<Icon icon="ph:check-circle-fill" class="text-primary text-xl mt-0.5 shrink-0" />
						<span>Instant, contextual advice for real-world workplace scenarios</span>
					</li>
					<li class="flex items-start gap-3">
						<Icon icon="ph:check-circle-fill" class="text-primary text-xl mt-0.5 shrink-0" />
						<span>Data-driven insights to support better decision-making</span>
					</li>
					<li class="flex items-start gap-3">
						<Icon icon="ph:check-circle-fill" class="text-primary text-xl mt-0.5 shrink-0" />
						<span>Available 24/7 to empower your team in critical moments</span>
					</li>
				</ul>
				<a
					href="/impactora"
					class="btn btn-primary btn-lg uppercase font-bold rounded-none inline-flex items-center gap-2"
				>
					EXPLORE IMPACTORA
					<Icon icon="ph:arrow-right-bold" class="text-lg" />
				</a>
			</div>

			<!-- Product Screenshots -->
			<div class="order-1 lg:order-2 relative">
				<div class="impactora-screenshots">
					<!-- Main screenshot -->
					<div class="impactora-screenshot-main">
						<img
							src="/impactora-dashboard.png"
							alt="IMPACTORA Dashboard - Personalised insights and recommendations"
							class="w-full h-auto rounded-sm shadow-2xl"
							loading="lazy"
							onerror={(e) => {
								const img = e.currentTarget as HTMLImageElement;
								img.src = '/icon1.png';
								img.classList.add('p-12', 'bg-neutral', 'opacity-50');
							}}
						/>
					</div>
					<!-- Secondary screenshot (overlapping) -->
					<div class="impactora-screenshot-secondary">
						<img
							src="/impactora-mobile.png"
							alt="IMPACTORA Mobile - Access insights on the go"
							class="w-full h-auto rounded-sm shadow-xl"
							loading="lazy"
							onerror={(e) => {
								(e.currentTarget as HTMLImageElement).style.display = 'none';
							}}
						/>
					</div>
				</div>
				<!-- Decorative element -->
				<div class="absolute -bottom-4 -left-4 w-24 h-24 bg-primary opacity-20 -z-10"></div>
			</div>
		</div>
	</div>
</section>

<!-- Testimonial Quote Section -->
<section class="section-yellow py-20 md:py-28" data-testid="testimonial-section">
	<div class="container-custom">
		<div class="max-w-4xl mx-auto text-center relative">
			<!-- Decorative Quote Marks -->
			<div class="quote-marks absolute -top-8 left-0 md:left-8 text-base-content/10">
				<Icon icon="ph:quotes-fill" class="text-8xl md:text-9xl" />
			</div>

			<!-- Quote Content -->
			<blockquote class="relative z-10">
				<p class="text-2xl md:text-3xl lg:text-4xl font-bold leading-relaxed mb-8">
					Impactology helped me achieve breakthrough results with my team. Their approach
					transformed how we collaborate and drive business outcomes.
				</p>
				<footer class="text-lg md:text-xl">
					<cite class="not-italic font-semibold">— Senior HR Business Partner</cite>
				</footer>
			</blockquote>

			<!-- Decorative Quote Marks (closing) -->
			<div class="quote-marks absolute -bottom-8 right-0 md:right-8 text-base-content/10">
				<Icon icon="ph:quotes-fill" class="text-8xl md:text-9xl rotate-180" />
			</div>
		</div>
	</div>
</section>

<!-- Meet Our Clients Carousel -->
<section class="py-20 bg-base-100">
	<div class="container-custom">
		<h2 class="text-center mb-12">MEET OUR CLIENTS</h2>
		<div class="carousel w-full space-x-4 overflow-x-auto">
			{#each clientPhotos as photo, i}
				<div class="carousel-item">
					<img src={photo} alt="Client {i + 1}" class="w-80 h-auto object-cover" />
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Instagram Section -->
<InstagramSection instagramHandle="impactologyaust" />

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
