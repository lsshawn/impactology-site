<script lang="ts">
	import SEO from '$lib/components/SEO.svelte';
	import Icon from '@iconify/svelte';
	import InstagramSection from '$lib/components/InstagramSection.svelte';
	import { onMount, onDestroy } from 'svelte';

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

	const testimonials = [
		{
			shortQuote: 'One-on-one guidance really helped',
			quote:
				'I really connected with and appreciated the style and approach. The one-on-one guidance really helped.',
			name: 'Claire',
			title: 'Senior Manager'
		},
		{
			shortQuote: 'Helped me stay focused on my leadership priorities',
			quote:
				'My goal was to maintain focus on my most important leadership priorities and this program has helped me achieve this.',
			name: 'Andrew',
			title: 'General Counsel'
		},
		{
			shortQuote: 'Program helped me in so many ways',
			quote:
				'My learnings from this program have helped me in so many ways both personally and professionally.',
			name: 'Deborah',
			title: 'HR Director'
		},
		{
			shortQuote: 'Insights that were innovative and pragmatic',
			quote:
				'I appreciated the extensive experience from a wide range of sectors to draw upon. The insights shared were innovative and pragmatic.',
			name: 'Raj',
			title: 'GM Human Resources'
		},
		{
			shortQuote: 'A truly enriching and transformational experience',
			quote:
				'The guidance I have received has been instrumental in helping me to workout my overall vision and strategies for my career and personal goals. This has been a truly enriching and transformational experience.',
			name: 'Katarina',
			title: 'Marketing Specialist'
		}
	];

	let activeTestimonial = $state(0);
	let slideDirection = $state<'left' | 'right'>('left');
	let isAnimating = $state(false);
	let autoSlideTimer: ReturnType<typeof setInterval>;

	function slideTo(index: number, direction: 'left' | 'right') {
		if (isAnimating) return;
		slideDirection = direction;
		isAnimating = true;
		// After slide-out finishes, swap content and slide in
		setTimeout(() => {
			activeTestimonial = index;
			isAnimating = false;
		}, 300);
	}

	function prevTestimonial() {
		resetAutoSlide();
		const prev = (activeTestimonial - 1 + testimonials.length) % testimonials.length;
		slideTo(prev, 'right');
	}

	function nextTestimonial() {
		resetAutoSlide();
		const next = (activeTestimonial + 1) % testimonials.length;
		slideTo(next, 'left');
	}

	function startAutoSlide() {
		autoSlideTimer = setInterval(() => {
			const next = (activeTestimonial + 1) % testimonials.length;
			slideTo(next, 'left');
		}, 3000);
	}

	function resetAutoSlide() {
		clearInterval(autoSlideTimer);
		startAutoSlide();
	}

	onMount(() => {
		startAutoSlide();
	});

	onDestroy(() => {
		clearInterval(autoSlideTimer);
	});
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
	class="section-yellow py-24 md:py-8 bg-cover bg-center relative"
	style="background-image: url('/home_banner1.jpg');"
>
	<div class="container-custom relative z-10">
		<div class="max-w-xl">
			<h2 class="mb-6 text-5xl lg:text-8xl font-bold">MAKE AN IMPACT</h2>
			<p class="text-2xl md:text-3xl font-bold mb-8">
				Leadership Development Solutions Designed for Business Partners.
			</p>
			<a href="#make_impacts" class="btn btn-secondary btn-lg uppercase font-bold mb-6">
				BOOK YOUR FREE 60-MINUTE STRATEGY SESSION
			</a>
      <div class="text-base max-w-2xl text-xl prose prose-lg">
        <p>
          This free strategy session will help you uncover what your team needs most.<br />
        </p>
        <p>
          <strong>Your Benefit:</strong> practical next steps you can act on immediately.<br />
        </p>
        <p>
          <strong>No hard sell – pinky promise!</strong>
        </p>
			</div>
		</div>
	</div>
</section>

<!-- What is Impactology -->
<section class="py-20 bg-base-100">
	<div class="text-center max-w-4xl mx-auto">
		<h2 class="mb-6 text-5xl lg:text-7xl font-bold">WHAT IS IMPACTOLOGY?</h2>
		<div class="prose prose-lg mx-auto max-w-xl">
			<p>
				In short, we aim to disrupt conventional thinking. We connect people in ways that spark new
				ideas and help them achieve their goals faster.
			</p>
			<p>
				Whether you're looking to sustainably grow your business, upskill your team, or pursuing a
				new opportunity, we have a solution or program to arm you with the knowledge you'll need to
				make a truly meaningful impact in the work you do.
			</p>
		</div>
	</div>
</section>

<!-- Three Programs -->
<section class="bg-neutral text-neutral-content">
	<div class="grid grid-cols-1 md:grid-cols-3">
		<!-- Impactora -->
		<a
			href="/impactora"
			class="block p-10 lg:p-14 border-b md:border-b-0 md:border-r border-white/10 transition-colors group bg-[#212023]"
		>
			<img src="/icon1.png" alt="Impactora" class="w-16 h-16 mb-8 brightness-0 invert" />
			<h3
				class="text-4xl md:text-5xl font-bold uppercase leading-tight mb-6 max-w-[80%] group-hover:text-primary transition-colors"
			>
				IMPACTORA
			</h3>
			<hr class="border-white/30 border-t-2 mb-6 max-w-[40%]" />
			<p class="text-base leading-relaxed">
				Are you looking for new ways to develop and grow yourself? Are you exploring new ways to
				empower your team? IMPACTORA is a SaaS platform designed to support you in the moments you
				need it most. It offers immediate, contextual advice, and insights, ensuring managers and
				employees resolve issues and make informed decisions in this new world of work.
			</p>
		</a>

		<!-- Business Partnering Impact Program -->
		<a
			href="/business-partnering-impact-program"
			class="block p-10 lg:p-14 border-b md:border-b-0 md:border-r border-white/10 bg-white/5 transition-colors group bg-[#171719]"
		>
			<img
				src="/icon2.png"
				alt="Business Partnering Impact Program"
				class="w-16 h-16 mb-8 brightness-0 invert"
			/>
			<h3
				class="text-4xl lg:text-5xl font-bold uppercase leading-tight mb-6 max-w-[80%] group-hover:text-primary transition-colors"
			>
				BUSINESS PARTNERING IMPACT PROGRAM
			</h3>
			<hr class="border-white border-t-2 mb-6 max-w-[40%]" />
			<p class="text-base leading-relaxed">
				Our Business Partnering Impact Program focuses on building the behavioural attributes and
				commercial acumen required to make a greater business impact. This experiential and
				interactive program will equip business partners with the skills to drive positive business
				outcomes and enhance stakeholder relationships.
			</p>
		</a>

		<!-- Amplify Your Impact Program -->
		<a
			href="/amplify-your-impact-program"
			class="block p-10 lg:p-14 transition-colors group bg-[#020204]"
		>
			<img
				src="/icon3.png"
				alt="Amplify Your Impact Program"
				class="w-16 h-16 mb-8 brightness-0 invert"
			/>
			<h3
				class="text-4xl lg:text-5xl font-bold uppercase leading-tight mb-6 max-w-[60%] group-hover:text-primary transition-colors"
			>
				AMPLIFY YOUR IMPACT PROGRAM
			</h3>
			<hr class="border-white/30 border-t-2 mb-6 max-w-[40%]" />
			<p class="text-base leading-relaxed">
				Our AMPLIFY Business Partnering Program is a tailored development experience crafted to
				equip teams for change, especially under heightened expectations. Building on the Business
				Partnering IMPACT Program, this six-month experience provides check-in support and a
				scorecard approach to drive transformation and solidify key learnings.
			</p>
		</a>
	</div>
</section>

<!-- Meet Our Clients -->
<section class="py-16 bg-base-100">
	<h2 class="mb-10 text-5xl lg:text-7xl font-bold text-center">MEET OUR CLIENTS</h2>
	<div class="relative group/carousel">
		<!-- Left Arrow -->
		<button
			onclick={() => {
				const el = document.getElementById('clients-carousel');
				if (el) el.scrollBy({ left: -el.clientWidth * 0.75, behavior: 'smooth' });
			}}
			class="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-10 btn btn-secondary btn-circle shadow-lg opacity-0 group-hover/carousel:opacity-100 transition-opacity"
			aria-label="Scroll left"
		>
			<Icon icon="ph:arrow-left-bold" class="text-xl" />
		</button>

		<div id="clients-carousel" class="carousel carousel-center w-full gap-1 rounded-none">
			{#each clientPhotos as photo, i}
				<div id="client-slide-{i}" class="carousel-item">
					<img
						src={photo}
						alt="Client workshop"
						class="h-64 md:h-96 w-auto object-cover"
						loading="lazy"
					/>
				</div>
			{/each}
		</div>

		<!-- Right Arrow -->
		<button
			onclick={() => {
				const el = document.getElementById('clients-carousel');
				if (el) el.scrollBy({ left: el.clientWidth * 0.75, behavior: 'smooth' });
			}}
			class="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-10 btn btn-secondary btn-circle shadow-lg opacity-0 group-hover/carousel:opacity-100 transition-opacity"
			aria-label="Scroll right"
		>
			<Icon icon="ph:arrow-right-bold" class="text-xl" />
		</button>
	</div>

	<div class="flex justify-center gap-2 mt-6">
		{#each clientPhotos as _, i}
			<a
				href="#client-slide-{i}"
				class="btn btn-xs btn-circle btn-ghost border border-base-300"
				aria-label="Go to slide {i + 1}"
			></a>
		{/each}
	</div>
</section>

<!-- Client Logos -->
<section class="py-16">
	<div class="container-custom">
	<h2 class="mb-10 text-5xl lg:text-7xl font-bold text-center">SOME COMPANIES WE'VE PARTNERED WITH</h2>

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

<!-- Impactora Promo Section -->
<div
	class="hero min-h-[80vh]"
	style="background-image: url('/impactora-promo-banner.png');"
>
	<div class="hero-content flex-col lg:flex-row-reverse w-full max-w-7xl gap-8 lg:gap-16">
		<img
			src="/impactora-promo-banner.png"
			alt=""
			aria-hidden="true"
			class="max-w-xs md:max-w-sm lg:max-w-md hidden lg:block opacity-0 pointer-events-none"
		/>
		<div>
			<img src="/impactora-logo.png" alt="Impactora" class="h-12 md:h-14 w-auto mb-8" />
			<h2 class="text-4xl md:text-6xl font-bold uppercase leading-tight mb-2 text-white">
				TAILORED ADVICE &amp; INSIGHTS
			</h2>
			<h2 class="text-4xl md:text-6xl font-bold uppercase leading-tight mb-8">
				FOR EMPLOYEES &amp; MANAGERS
			</h2>
			<p class="text-base leading-relaxed mb-8 max-w-lg">
				<strong>IMPACTORA</strong> is a SaaS platform designed to bridge the loss of organisational knowledge
				that we are all experiencing with today's remote and hybrid working environments. It provides
				easy to access and immediate support, advice, and insights that are tailored to the individual
				employee and organisation.
			</p>
			<a
				href="/impactora"
				class="btn btn-secondary btn-lg uppercase font-bold inline-flex items-center gap-2"
			>
				Start Here! See How It Works
			</a>
		</div>
	</div>
</div>

<!-- Testimonials Section -->
<section class="py-20 md:py-28 bg-[#fff000]" data-testid="testimonial-section">
	<div class="container-custom">
		<!-- Quote block with ::before/::after quote mark icons -->
		<div class="testimonial-title" data-testid="testimonial-card">
			<div class="overflow-hidden w-full">
				<div
					class="testimonial-slide flex items-center w-full"
					class:slide-out-left={isAnimating && slideDirection === 'left'}
					class:slide-out-right={isAnimating && slideDirection === 'right'}
					class:slide-in-left={!isAnimating && slideDirection === 'right'}
					class:slide-in-right={!isAnimating && slideDirection === 'left'}
				>
					<!-- Left: large bold headline with left accent bar -->
					<div class="pl-4 mr-6 shrink-0 md:w-1/2">
						<p class="text-2xl md:text-2xl font-black leading-tight text-black">
							{testimonials[activeTestimonial].shortQuote}
						</p>
					</div>

					<!-- Right: full quote + attribution -->
					<div class="md:w-1/2">
						<p class="text-sm leading-relaxed text-black mb-4">
							{testimonials[activeTestimonial].quote}
						</p>
						<p class="font-bold text-sm text-black">{testimonials[activeTestimonial].name}</p>
						<p class="text-sm text-black">{testimonials[activeTestimonial].title}</p>
					</div>
				</div>
			</div>
		</div>

		<!-- Navigation: ← 3/5 → -->
		<div class="flex items-center justify-center gap-6 mt-4">
			<button
				onclick={prevTestimonial}
				class="text-black hover:opacity-60 transition-opacity"
				aria-label="Previous testimonial"
			>
				<Icon icon="ph:arrow-left" class="text-xl" />
			</button>
			<span class="text-black font-medium tabular-nums">
				{activeTestimonial + 1}/{testimonials.length}
			</span>
			<button
				onclick={nextTestimonial}
				class="text-black hover:opacity-60 transition-opacity"
				aria-label="Next testimonial"
			>
				<Icon icon="ph:arrow-right" class="text-xl" />
			</button>
		</div>
	</div>
</section>

<!-- Find Out How We Can Help - Contact Form Section -->
<section id="make_impacts" class="py-20 md:py-28 bg-base-100" data-testid="contact-form-section">
	<div class="container-custom">
		<div class="max-w-4xl mx-auto">
	<h2 class="mb-10 text-5xl lg:text-5xl font-bold text-center">FIND OUT HOW WE CAN HELP YOU MAKE AN IMPACT</h2>
			<p class="text-center text-lg mb-12 max-w-2xl mx-auto">
				At Impactology, our focus is on helping companies thrive and grow and individuals to live
				better, work smarter and be authentic in the way they work with others.
			</p>

			<form
				onsubmit={handleContactSubmit}
				class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto flex flex-col"
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
							Submit
						{/if}
					</button>
				</div>
			</form>
		</div>
	</div>
</section>

<!-- Instagram Section -->
<InstagramSection instagramHandle="impactora-app" />
