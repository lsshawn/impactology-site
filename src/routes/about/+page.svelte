<script lang="ts">
	import SEO from '$lib/components/SEO.svelte';
	import Icon from '@iconify/svelte';
	import ContactForm from '$lib/components/ContactForm.svelte';

	// One state per reveal block
	let heroVideo = $state(true);
	let heroText = $state(true);
	let aboutHeading = $state(false);
	let whatText = $state(false);
	let whatImg = $state(false);
	let whoImg = $state(false);
	let whoText = $state(false);
	let howText = $state(false);
	let howImg = $state(false);
	let whyImg = $state(false);
	let whyText = $state(false);
	let whyCta = $state(false);
	let founderHeading = $state(false);
	let founderBio = $state(false);
	let founderVideo = $state(false);
	let founderCta = $state(false);
	let connectHeading = $state(false);
	let connectForm = $state(false);

	function trigger(node: HTMLElement, stateSetter: (v: boolean) => void) {
		let observer: IntersectionObserver;

		const rect = node.getBoundingClientRect();
		if (rect.top > window.innerHeight) {
			startObserving();
		} else {
			function onScroll() {
				window.removeEventListener('scroll', onScroll);
				startObserving();
			}
			window.addEventListener('scroll', onScroll, { passive: true, once: true });
		}

		function startObserving() {
			observer = new IntersectionObserver(
				([entry]) => {
					if (entry.isIntersecting) {
						stateSetter(true);
						observer.disconnect();
					}
				},
				{ threshold: 0.15 }
			);
			observer.observe(node);
		}

		return { destroy: () => observer?.disconnect() };
	}
</script>

<svelte:head>
	<link rel="preload" as="image" href="/about-hero-bg.webp" fetchpriority="high" />
</svelte:head>

<SEO
	title="About | Create an Impact | Impactology"
	description="The Impact is where two ideas collide, grow, and spark to create something big. It can stay within you to ignite at any time."
	ogTitle="About | Create an Impact | Impactology"
	ogDescription="The Impact is where two ideas collide, grow, and spark to create something big. It can stay within you to ignite at any time."
	ogImage="https://impactology.com.au/wp-content/uploads/2020/09/man-2-sparks-photo-1531574688974-2386ec946fe5.jpg"
	ogType="website"
	canonical="https://impactology.com.au/about/"
	jsonLd={{
		'@context': 'https://schema.org',
		'@type': 'WebPage',
		name: 'About Impactology',
		description:
			'The Impact is where two ideas collide, grow, and spark to create something big. It can stay within you to ignite at any time.',
		url: 'https://impactology.com.au/about/',
		breadcrumb: {
			'@type': 'BreadcrumbList',
			itemListElement: [
				{
					'@type': 'ListItem',
					position: 1,
					name: 'Home',
					item: 'https://impactology.com.au/'
				},
				{
					'@type': 'ListItem',
					position: 2,
					name: 'About',
					item: 'https://impactology.com.au/about/'
				}
			]
		}
	}}
/>

<!-- Hero Section -->
<section
	class="py-20 md:py-28 bg-cover bg-center relative"
	style="background-image: url('/about-hero-bg.webp');"
>
	<div class="absolute inset-0 bg-black/80"></div>
	<div class="container-custom relative z-10">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
			<div class="reveal-x-left aspect-video w-full" class:visible={heroVideo}>
				<iframe
					src="https://www.youtube.com/embed/mQTRlUu-F4c"
					title="Impactology Introduction"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
					class="w-full h-full"
				></iframe>
			</div>
			<div class="reveal-x-right text-white" class:visible={heroText} style="transition-delay: 150ms">
				<h1 class="mb-8 text-4xl md:text-5xl lg:text-6xl font-bold uppercase leading-tight">
					Idea Brokers That Facilitate Impact
				</h1>
				<div class="prose prose-lg prose-invert mb-8">
					<p>
						Inspiration is when an idea gets hold of you and moves towards where you want to go.
						That is what we want to create with Impactology. It's the one spark that takes you
						towards your goal.
					</p>
					<p>
						We want to disrupt every day thinking and spark new ideas and create new ways to
						interact that will truly have an impact.
					</p>
					<p>We believe in the what, the how and the who. And most importantly the WHY?</p>
					<p class="font-bold">Let's make an impact together.</p>
				</div>
				<a
					href="/programs"
					class="btn btn-secondary btn-lg uppercase font-bold border-2 border-white hover:border-primary hover:text-primary"
					>HOW WE IMPACT</a
				>
			</div>
		</div>
	</div>
</section>

<!-- About Impactology heading -->
<section class="py-16 bg-base-200">
	<div class="container-custom" use:trigger={(v) => (aboutHeading = v)}>
		<h2
			class="reveal-y text-5xl lg:text-7xl font-bold text-center"
			class:visible={aboutHeading}
		>
			ABOUT IMPACTOLOGY
		</h2>
	</div>
</section>

<!-- WHAT? -->
<section
	class="py-16 bg-base-200"
	use:trigger={(v) => {
		whatText = v;
		setTimeout(() => (whatImg = v), 150);
	}}
>
	<div class="container-custom">
		<div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
			<div class="reveal-x-left" class:visible={whatText}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 144.85 141.15"
					class="w-16 h-16 mb-6"
				>
					<polygon
						fill="#231f20"
						points="75.39 141.15 69.47 141.15 69.47 80.22 51.4 117.26 46.08 114.66 63.9 78.13 17.01 116.1 13.29 111.5 60.39 73.35 20.55 82.55 19.22 76.78 59.26 67.53 0 53.85 1.33 48.08 60.8 61.81 28.7 35.82 32.43 31.21 63.92 56.72 37.53 2.6 42.85 0 69.47 54.57 69.47 13.58 75.39 13.58 75.39 54.57 102 0 107.33 2.6 80.93 56.72 112.43 31.21 116.16 35.82 84.05 61.81 143.52 48.08 144.85 53.85 85.59 67.53 125.63 76.78 124.3 82.55 84.47 73.35 131.57 111.5 127.84 116.1 80.96 78.13 98.77 114.66 93.45 117.26 75.39 80.22 75.39 141.15"
					/>
					<circle fill="#fff200" cx="72.43" cy="65.85" r="17.02" />
				</svg>
				<h2 class="text-5xl font-bold mb-8">WHAT?</h2>
				<div class="prose prose-lg">
					<p>
						Impact is where two ideas collide, grow, spark to create something bigger. It can stay
						within you to be ignited at any time. Impact can come from anywhere or anyone. It can
						be a conversation, a comment, a book, an email or a presentation. Impact can be big or
						small.
					</p>
					<p>An impact will leave someone with more than they had before they met you.</p>
				</div>
			</div>
			<div class="reveal-x-right" class:visible={whatImg} style="transition-delay: 150ms">
				<img
					src="/about-what.webp"
					alt="what it means to create an impact"
					width="600"
					height="320"
					class="w-full h-80 object-cover"
				/>
			</div>
		</div>
	</div>
</section>

<!-- WHO? -->
<section
	class="py-16 bg-base-100"
	use:trigger={(v) => {
		whoImg = v;
		setTimeout(() => (whoText = v), 150);
	}}
>
	<div class="container-custom">
		<div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
			<div class="reveal-x-left" class:visible={whoImg}>
				<img
					src="/about-who.webp"
					alt="community of impactologists"
					width="600"
					height="320"
					class="w-full h-80 object-cover"
				/>
			</div>
			<div class="reveal-x-right" class:visible={whoText} style="transition-delay: 150ms">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 144.9" class="w-16 h-16 mb-6">
					<path
						fill="#231f20"
						d="M487.5,370.1l-64-30-48.78,22.34,6-26.5-30.24,5.68,22.94-36.26-42.48-41.74,60.62,5.82,24-44.24L432.94,253l23.32-15,1.14,28.84h53.54l-41.2,34L494.42,320l-29.68,4Zm-64-40.48L466.94,350l-16.6-33.74,20.3-2.66-16-12.52,30-24.74h-36.4L447.4,255,430,266.2,416.12,244l-19.18,35.42-40.22-3.82L385.56,304l-15.36,24.3,23-4.36-5,22Z"
						transform="translate(-330.94 -225.2)"
					/>
					<circle fill="#fff200" cx="90.78" cy="74.19" r="16.89" />
				</svg>
				<h2 class="text-5xl font-bold mb-8">WHO?</h2>
				<div class="prose prose-lg">
					<p>
						We want to create a community of people to inspire each other. Famous names and names
						you've yet to hear. Some are writers. Some are artists. There are leaders, athletes,
						scholars. All striving to be better. One action at a time.
					</p>
					<p>All are impactologists. We want you to join us and impact us and others.</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- HOW? -->
<section
	class="py-16 bg-base-200"
	use:trigger={(v) => {
		howText = v;
		setTimeout(() => (howImg = v), 150);
	}}
>
	<div class="container-custom">
		<div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
			<div class="reveal-x-left" class:visible={howText}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 137.64 119.25"
					class="w-16 h-16 mb-6"
				>
					<rect
						fill="#231f20"
						x="351.8"
						y="287.52"
						width="62.62"
						height="9.24"
						transform="translate(-448.65 50.63) rotate(-37.17)"
					/>
					<rect
						fill="#231f20"
						x="385.75"
						y="332.22"
						width="62.6"
						height="9.24"
						transform="translate(-468.76 80.31) rotate(-37.18)"
					/>
					<rect
						fill="#231f20"
						x="344.4"
						y="320.83"
						width="82.28"
						height="9.24"
						transform="translate(-468.28 58.96) rotate(-37.18)"
					/>
					<path
						fill="#231f20"
						d="M459.37,240.48a38.31,38.31,0,0,0-4.54-.3,32.66,32.66,0,1,0,4.54.3Zm-2.48,55.79h0c-.62.05-1.25.08-1.88.07a23.47,23.47,0,1,1,3.14-46.72c.34,0,.66.12,1,.18l.33.06a23.45,23.45,0,0,1-2.55,46.41Z"
						transform="translate(-349.97 -240.18)"
					/>
					<circle fill="#fcee23" cx="104.94" cy="32.7" r="15.82" />
				</svg>
				<h2 class="text-5xl font-bold mb-8">HOW?</h2>
				<div class="prose prose-lg">
					<p>
						We celebrate awesomeness on every level. From breaking world records, finding a cure,
						launching a rocket ship. Each is an action that creates an impact. Every conversation,
						every communication can open a door to a new opportunity.
					</p>
					<p>We provide the platform. You provide the discussion. Together we create impact.</p>
				</div>
			</div>
			<div class="reveal-x-right" class:visible={howImg} style="transition-delay: 150ms">
				<img src="/about-how.webp" alt="how we create impact" width="600" height="320" class="w-full h-80 object-cover" />
			</div>
		</div>
	</div>
</section>

<!-- WHY? -->
<section
	class="py-16 bg-base-100"
	use:trigger={(v) => {
		whyImg = v;
		setTimeout(() => (whyText = v), 150);
	}}
>
	<div class="container-custom">
		<div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
			<div class="reveal-x-left" class:visible={whyImg}>
				<img
					src="/about-why.webp"
					alt="why does impact matter"
					width="600"
					height="320"
					class="w-full h-80 object-cover"
				/>
			</div>
			<div class="reveal-x-right" class:visible={whyText} style="transition-delay: 150ms">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124.34 95.31" class="w-16 h-16 mb-6">
					<path
						fill="#231f20"
						d="M464.86,339.8c-14.11,0-34.92-6.88-56.91-19.67-15.74-9.15-29.34-19.88-38.32-30.21-9.81-11.29-13-20.73-9.16-27.29,7.41-12.73,39-7.22,73.46,12.84s54.88,44.77,47.48,57.5h0C478.73,337.58,472.87,339.8,464.86,339.8Zm-88.15-78.09c-5.66,0-9.54,1.34-11,3.93-2.3,4,.88,11.56,8.5,20.34,8.56,9.85,21.63,20.13,36.81,29,32.57,18.95,60.54,23.12,65.25,15s-12.73-30.35-45.31-49.3C408.76,267.76,388.73,261.71,376.71,261.71Z"
						transform="translate(-358.77 -250.03)"
					/>
					<path
						fill="#231f20"
						d="M377,339.51c-8.16,0-14.1-2.25-16.78-6.93-7.32-12.78,13.25-37.37,47.85-57.2s66.21-25.14,73.53-12.36h0c7.33,12.78-13.24,37.37-47.84,57.19C411.86,332.77,391.14,339.51,377,339.51ZM465.17,262c-12.05,0-32,5.93-54.09,18.59-32.7,18.74-50.29,40.87-45.63,49S398.1,333.74,430.8,315s50.29-40.87,45.63-49C474.92,263.36,471,262,465.17,262Z"
						transform="translate(-358.77 -250.03)"
					/>
					<circle fill="#fff200" cx="33.51" cy="11.31" r="11.31" />
					<circle fill="#fff200" cx="89.09" cy="84" r="11.31" />
				</svg>
				<h2 class="text-5xl font-bold mb-8">WHY?</h2>
				<div class="prose prose-lg">
					<p>
						It's times like these we learn to live again. We believe in creating a space for
						living again. There has never been a better time for a community of impactologists.
					</p>
					<p class="font-bold">Be interested. Be curious. Be an impactologist.</p>
				</div>
			</div>
		</div>
		<div class="reveal-y text-center mt-16" class:visible={whyCta}>
			<a href="#connect" class="btn btn-secondary btn-lg uppercase font-bold">CONNECT WITH US</a>
		</div>
		<div use:trigger={(v) => (whyCta = v)}></div>
	</div>
</section>

<!-- Our Founder -->
<section class="py-20 md:py-28 bg-base-100">
	<div class="container-custom">
		<h2
			class="reveal-y text-5xl lg:text-7xl font-bold text-center mb-16"
			class:visible={founderHeading}
		>
			OUR FOUNDER
		</h2>
		<div
			class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto"
			use:trigger={(v) => {
				founderHeading = v;
				founderBio = v;
				setTimeout(() => (founderVideo = v), 150);
			}}
		>
			<div class="reveal-x-left" class:visible={founderBio}>
				<div class="prose prose-lg mb-8">
					<p>
						I am passionate about assisting people to be more confident and excel at what they do
						best.
					</p>
					<p>I am loyal, trusting and love talking to people.</p>
					<p>
						I am inspired by storytelling that allows me to grow, learn and be better. I can be
						restless and get snappy when I'm hungry.
					</p>
					<p>
						Formula 1 is a passion, cinema is my release, futsal and the gym keeps me fit, trusted
						friends are a treasure, and family is everything.
					</p>
				</div>
				<h3 class="text-2xl font-bold">George Liberopoulos</h3>
				<p class="text-sm uppercase tracking-wider opacity-70 mb-6">Co-founder, Impactology</p>
				<div class="flex gap-4">
					<a
						href="https://www.linkedin.com/in/george-liberopoulos-0561143/"
						target="_blank"
						rel="noopener noreferrer"
						class="btn btn-circle bg-base-200 text-base-content border-none hover:bg-primary"
						aria-label="LinkedIn"
					>
						<Icon icon="ph:linkedin-logo-fill" class="text-xl" />
					</a>
					<a
						href="mailto:george@impactology.com.au"
						class="btn btn-circle bg-base-200 text-base-content border-none hover:bg-primary"
						aria-label="Email"
					>
						<Icon icon="ph:envelope-fill" class="text-xl" />
					</a>
					<a
						href="https://www.facebook.com/ImpactologyAust/"
						target="_blank"
						rel="noopener noreferrer"
						class="btn btn-circle bg-base-200 text-base-content border-none hover:bg-primary"
						aria-label="Facebook"
					>
						<Icon icon="ph:facebook-logo-fill" class="text-xl" />
					</a>
				</div>
			</div>
			<div class="reveal-x-right aspect-video w-full" class:visible={founderVideo} style="transition-delay: 150ms">
				<iframe
					src="https://www.youtube.com/embed/e5kvi9kXKJ0"
					title="George Liberopoulos - Impactology Founder"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
					class="w-full h-full"
				></iframe>
			</div>
		</div>

		<div class="reveal-y text-center mt-16" class:visible={founderCta}>
			<a href="/programs" class="btn btn-secondary btn-lg uppercase font-bold">OUR IMPACT</a>
		</div>
		<div use:trigger={(v) => (founderCta = v)}></div>
	</div>
</section>

<!-- Connect With Us / Contact Form -->
<section class="py-20 bg-base-200" id="connect">
	<div class="container-custom">
		<div
			class="max-w-3xl mx-auto"
			use:trigger={(v) => {
				connectHeading = v;
				setTimeout(() => (connectForm = v), 150);
			}}
		>
			<h2
				class="reveal-y text-5xl lg:text-7xl font-bold text-center mb-12"
				class:visible={connectHeading}
			>
				CONNECT WITH US
			</h2>
			<div class="reveal-y" class:visible={connectForm} style="transition-delay: 150ms">
				<ContactForm prefix="[About Page Contact]" />
			</div>
		</div>
	</div>
</section>
