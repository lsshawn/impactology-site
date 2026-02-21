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

	let activeTestimonial = $state(0);

	function prevTestimonial() {
		activeTestimonial = (activeTestimonial - 1 + testimonials.length) % testimonials.length;
	}

	function nextTestimonial() {
		activeTestimonial = (activeTestimonial + 1) % testimonials.length;
	}
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
			<h2 class="mb-6">MAKE AN IMPACT</h2>
			<p class="text-2xl md:text-3xl font-bold mb-8">
				Leadership Development Solutions Designed for Business Partners.
			</p>
			<a href="#make_impacts" class="btn btn-secondary btn-lg uppercase font-bold mb-6">
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
	<div class="text-center max-w-4xl mx-auto">
		<h2 class="mb-8">WHAT IS IMPACTOLOGY?</h2>
		<div class="prose prose-lg mx-auto max-w-xl">
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
<section class="bg-neutral text-neutral-content">
	<div class="grid grid-cols-1 md:grid-cols-3">
		<!-- Impactora -->
		<a
			href="/impactora"
			class="block p-10 lg:p-14 border-b md:border-b-0 md:border-r border-white/10 transition-colors group bg-[#212023]"
		>
			<img src="/icon1.png" alt="Impactora" class="w-16 h-16 mb-8 brightness-0 invert" />
			<h3
				class="text-3xl lg:text-4xl font-black uppercase leading-tight mb-6 group-hover:text-primary transition-colors"
			>
				IMPACTORA
			</h3>
			<hr class="border-white/30 mb-6" />
			<p class="text-sm leading-relaxed text-white/70">
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
				class="text-3xl lg:text-4xl font-black uppercase leading-tight mb-6 group-hover:text-primary transition-colors"
			>
				BUSINESS PARTNERING IMPACT PROGRAM
			</h3>
			<hr class="border-white/30 mb-6" />
			<p class="text-sm leading-relaxed text-white/70">
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
				class="text-3xl lg:text-4xl font-black uppercase leading-tight mb-6 group-hover:text-primary transition-colors"
			>
				AMPLIFY YOUR IMPACT PROGRAM
			</h3>
			<hr class="border-white/30 mb-6" />
			<p class="text-sm leading-relaxed text-white/70">
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
	<div class="container-custom">
		<h2 class="text-center mb-12">MEET OUR CLIENTS</h2>
		<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
			{#each clientPhotos as photo}
				<div class="overflow-hidden">
					<img src={photo} alt="Client workshop" class="w-full h-48 object-cover" loading="lazy" />
				</div>
			{/each}
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

<!-- Impactora Promo Section -->
<section class="py-20 md:py-28" style="background-color: #1ECAD3;">
	<div class="container-custom">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
			<!-- Text Content -->
			<div>
				<div class="flex items-center gap-3 mb-6">
					<img src="/icon1.png" alt="Impactora" class="w-10 h-10" />
					<span class="font-bold text-xl text-black uppercase tracking-widest">IMPACTORA</span>
				</div>
				<h2 class="mb-6 text-black" style="color: #FFF000;">
					TAILORED ADVICE &amp; INSIGHTS<br />FOR EMPLOYEES &amp; MANAGERS
				</h2>
				<p class="text-black text-base leading-relaxed mb-8 max-w-lg">
					IMPACTORA is a SaaS platform designed to bridge the loss of organisational knowledge that
					we are all experiencing with today's remote and hybrid working environments. It provides
					easy to access and immediate support, advice, and insights that are tailored to the
					individual employee and organisation.
				</p>
				<a
					href="/impactora"
					class="btn btn-secondary btn-lg uppercase font-bold rounded-none inline-flex items-center gap-2"
				>
					Start Here! See How It Works
				</a>
			</div>

			<!-- App Screenshot / Mockup -->
			<div class="flex justify-center lg:justify-end">
				<div
					class="bg-white rounded-2xl shadow-2xl p-6 max-w-xs w-full"
					style="box-shadow: 0 25px 60px rgba(0,0,0,0.3);"
				>
					<p class="text-sm font-bold text-black mb-4 text-center">
						Take action now – who do you want to positively impact?
					</p>
					<div class="space-y-3">
						<button
							class="w-full flex items-center gap-3 p-3 border-2 border-gray-200 rounded-lg hover:border-primary transition-colors"
						>
							<div class="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
								<Icon icon="ph:user-fill" class="text-sm text-black" />
							</div>
							<span class="font-medium text-black text-sm">Myself</span>
						</button>
						<button
							class="w-full flex items-center gap-3 p-3 border-2 border-gray-200 rounded-lg hover:border-primary transition-colors"
						>
							<div class="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
								<Icon icon="ph:users-fill" class="text-sm text-black" />
							</div>
							<span class="font-medium text-black text-sm">My Team</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Testimonials Section -->
<section class="section-yellow py-20 md:py-28" data-testid="testimonial-section">
	<div class="container-custom">
		<h2 class="text-center mb-16">WHAT OUR CLIENTS SAY</h2>

		<!-- Carousel -->
		<div class="max-w-3xl mx-auto">
			<div class="bg-base-100 p-10 relative min-h-64">
				<div class="text-primary/30 mb-4">
					<Icon icon="ph:quotes-fill" class="text-5xl" />
				</div>
				<blockquote>
					<p class="text-base leading-relaxed mb-6 text-base-content text-lg">
						"{testimonials[activeTestimonial].quote}"
					</p>
					<footer class="font-bold text-sm text-base-content">
						<cite class="not-italic">
							{testimonials[activeTestimonial].name},
							<span class="font-normal opacity-70">{testimonials[activeTestimonial].title}</span>
						</cite>
					</footer>
				</blockquote>
			</div>

			<!-- Navigation -->
			<div class="flex items-center justify-center gap-6 mt-8">
				<button
					onclick={prevTestimonial}
					class="btn btn-secondary btn-sm rounded-none w-10 h-10 p-0 flex items-center justify-center"
					aria-label="Previous testimonial"
				>
					<Icon icon="ph:arrow-left-bold" class="text-lg" />
				</button>
				<div class="flex gap-2">
					{#each testimonials as _, i}
						<button
							onclick={() => (activeTestimonial = i)}
							class="w-3 h-3 rounded-full transition-colors {i === activeTestimonial
								? 'bg-black'
								: 'bg-black/30'}"
							aria-label="Go to testimonial {i + 1}"
						></button>
					{/each}
				</div>
				<button
					onclick={nextTestimonial}
					class="btn btn-secondary btn-sm rounded-none w-10 h-10 p-0 flex items-center justify-center"
					aria-label="Next testimonial"
				>
					<Icon icon="ph:arrow-right-bold" class="text-lg" />
				</button>
			</div>
		</div>
	</div>
</section>

<!-- Find Out How We Can Help - Contact Form Section -->
<section id="make_impacts" class="py-20 md:py-28 bg-base-100" data-testid="contact-form-section">
	<div class="container-custom">
		<div class="max-w-4xl mx-auto">
			<h2 class="text-center mb-4">FIND OUT HOW WE CAN HELP YOU MAKE AN IMPACT</h2>
			<p class="text-center text-lg mb-12 max-w-2xl mx-auto">
				At Impactology, our focus is on helping companies thrive and grow and individuals to live
				better, work smarter and be authentic in the way they work with others.
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
							Submit
						{/if}
					</button>
				</div>
			</form>
		</div>
	</div>
</section>

<!-- Instagram Section -->
<InstagramSection instagramHandle="impactologyaust" />
