<script lang="ts">
	import SEO from '$lib/components/SEO.svelte';
	import InstagramSection from '$lib/components/InstagramSection.svelte';
	import ContactForm from '$lib/components/ContactForm.svelte';
	import TestimonialSlider from '$lib/components/TestimonialSlider.svelte';
	import ClientLogosSection from '$lib/components/ClientLogosSection.svelte';
	import { galleryImages } from '$lib/content/gallery';

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
</script>

<SEO
	title="Sustainably Grow your Business | Create an Impact | Impactology"
	description="Whether you're looking to sustainably grow your business, upskill your team, or pursue a new opportunity, we have a solution or program to arm you."
	ogTitle="Sustainably Grow your Business | Create an Impact | Impactology"
	ogDescription="Whether you're looking to sustainably grow your business, upskill your team, or pursue a new opportunity, we have a solution or program to arm you."
	ogImage="https://impactology.com.au/icon1.png"
	ogType="website"
	canonical="https://impactology.com.au/"
	preloadImage="/home_banner1.webp"
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
<section class="section-yellow py-24 md:py-8 relative overflow-hidden">
	<img
		src="/home_banner1.webp"
		alt=""
		aria-hidden="true"
		fetchpriority="high"
		decoding="async"
		width="1920"
		height="1080"
		class="hidden md:block absolute inset-0 w-full h-full object-cover object-center"
	/>
	<div class="container-custom relative z-10">
		<div class="max-w-xl">
			<h2 class="mb-6 text-5xl lg:text-8xl font-bold">MAKE AN IMPACT</h2>
			<p class="text-2xl md:text-3xl font-bold mb-8">
				Leadership Development Solutions Designed for Business Partners.
			</p>
			<button
				onclick={() =>
					document.getElementById('make_impacts')?.scrollIntoView({ behavior: 'smooth' })}
				class="btn btn-secondary md:btn-lg uppercase font-bold mb-6 !py-6 md:!py-0"
			>
				BOOK YOUR FREE 60-MINUTE STRATEGY SESSION
			</button>
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
<section class="py-20 bg-base-100 container-custom">
	<div class="md:text-center max-w-4xl mx-auto">
		<h2 class="mb-6 text-5xl lg:text-7xl font-bold text-center">WHAT IS IMPACTOLOGY?</h2>
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
			<img
				src="/icon1.webp"
				alt="Impactora"
				width="84"
				height="84"
				class="w-16 h-16 mb-8 brightness-0 invert"
				loading="lazy"
			/>
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
				src="/icon2.webp"
				alt="Business Partnering Impact Program"
				width="84"
				height="84"
				class="w-16 h-16 mb-8 brightness-0 invert"
				loading="lazy"
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
				src="/icon3.webp"
				alt="Amplify Your Impact Program"
				width="84"
				height="84"
				class="w-16 h-16 mb-8 brightness-0 invert"
				loading="lazy"
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
	<div class="carousel carousel-center w-full gap-2 rounded-none">
		{#each galleryImages as photo, i}
			<div class="carousel-item">
				<img
					src={photo.src}
					alt={photo.alt}
					width="640"
					height="427"
					class="h-64 md:h-80 w-auto object-cover"
					loading="lazy"
				/>
			</div>
		{/each}
	</div>
</section>

<!-- Client Logos -->
<ClientLogosSection />

<!-- Impactora Promo Section -->
<div class="hero min-h-[80vh] bg-[image:url('/impactora-promo-banner.webp')] bg-neutral">
	<div class="hero-content flex-col lg:flex-row-reverse w-full max-w-7xl gap-8 lg:gap-16">
		<img
			src="/impactora-promo-banner.webp"
			alt=""
			aria-hidden="true"
			width="3840"
			height="1280"
			class="max-w-xs md:max-w-sm lg:max-w-md hidden lg:block opacity-0 pointer-events-none"
			loading="lazy"
		/>
		<div class="text-center md:text-left">
			<img
				src="/impactora-logo.webp"
				alt="Impactora"
				width="368"
				height="84"
				class="h-12 md:h-14 w-auto mb-8 mx-auto md:mx-0"
				loading="lazy"
			/>
			<h2 class="text-4xl md:text-6xl font-bold uppercase leading-tight mb-2 text-white">
				TAILORED ADVICE &amp; INSIGHTS
			</h2>
			<h2 class="text-4xl md:text-6xl font-bold uppercase leading-tight mb-8">
				FOR EMPLOYEES &amp; MANAGERS
			</h2>
			<p class="leading-relaxed mb-8 max-w-lg mx-auto md:mx-0">
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
<section class="py-20 md:py-28 bg-[#fff000]">
	<div class="container-custom">
		<TestimonialSlider {testimonials} />
	</div>
</section>

<!-- Find Out How We Can Help - Contact Form Section -->
<section id="make_impacts" class="py-20 md:py-28 bg-base-100" data-testid="contact-form-section">
	<div class="container-custom">
		<div class="max-w-4xl mx-auto">
			<h2 class="mb-10 text-5xl lg:text-5xl font-bold text-center">
				FIND OUT HOW WE CAN HELP YOU MAKE AN IMPACT
			</h2>
			<p class="text-center text-lg mb-12 max-w-2xl mx-auto">
				At Impactology, our focus is on helping companies thrive and grow and individuals to live
				better, work smarter and be authentic in the way they work with others.
			</p>

			<ContactForm class="max-w-3xl mx-auto" />
		</div>
	</div>
</section>

<!-- Instagram Section -->
<InstagramSection instagramHandle="impactora-app" />
