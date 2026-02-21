<script lang="ts">
	import SEO from '$lib/components/SEO.svelte';
	import Icon from '@iconify/svelte';

	// Contact form state
	let name = $state('');
	let email = $state('');
	let mobile = $state('');
	let company = $state('');
	let message = $state('');
	let formStatus = $state<'idle' | 'sending' | 'sent' | 'error'>('idle');
	let errorMessage = $state('');

	async function handleSubmit(e: SubmitEvent) {
		e.preventDefault();
		formStatus = 'sending';
		try {
			const res = await fetch('/api/contact', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					firstName: name,
					lastName: '',
					email,
					phone: mobile,
					company,
					message: `[About Page Contact]\n\n${message}`
				})
			});
			if (!res.ok) throw new Error('Failed to send');
			formStatus = 'sent';
			name = '';
			email = '';
			mobile = '';
			company = '';
			message = '';
		} catch {
			formStatus = 'error';
			errorMessage = 'Something went wrong. Please try again.';
		}
	}
</script>

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
<section class="section-dark py-20 md:py-28">
	<div class="container-custom">
		<div class="max-w-4xl mx-auto text-center">
			<h1 class="mb-8">IDEA BROKERS THAT FACILITATE IMPACT</h1>
			<p class="text-xl leading-relaxed mb-6">
				Inspiration is when an idea gets hold of you and moves towards where you want to go. That is
				what we want to create with Impactology. It's the one spark that takes you towards your
				goal.
			</p>
			<p class="text-lg leading-relaxed mb-6 opacity-90">
				We want to disrupt every day thinking and spark new ideas and create new ways to interact
				that will truly have an impact.
			</p>
			<p class="text-lg leading-relaxed mb-6 opacity-90">
				We believe in the what, the how and the who. And most importantly the WHY?
			</p>
			<p class="text-xl font-bold">Let's make an impact together.</p>
		</div>
	</div>
</section>

<!-- How We Impact -->
<section class="py-20 bg-base-100">
	<div class="container-custom">
		<h2 class="text-center mb-16">HOW WE IMPACT</h2>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
			<!-- WHAT -->
			<div>
				<h3 class="mb-4">WHAT?</h3>
				<p class="text-base leading-relaxed mb-4">
					Impact is where two ideas collide, grow, spark to create something bigger. It can stay
					within you to be ignited at any time. Impact can come from anywhere or anyone. It can be a
					conversation, a comment, a book, an email or a presentation. Impact can be big or small.
				</p>
				<p class="text-base leading-relaxed">
					An impact will leave someone with more than they had before they met you.
				</p>
			</div>

			<!-- WHO -->
			<div>
				<h3 class="mb-4">WHO?</h3>
				<p class="text-base leading-relaxed mb-4">
					We want to create a community of people to inspire each other. Famous names and names
					you've yet to hear. Some are writers. Some are artists. There are leaders, athletes,
					scholars. All striving to be better. One action at a time.
				</p>
				<p class="text-base leading-relaxed">
					All are impactologists. We want you to join us and impact us and others.
				</p>
			</div>

			<!-- HOW -->
			<div>
				<h3 class="mb-4">HOW?</h3>
				<p class="text-base leading-relaxed mb-4">
					We celebrate awesomeness on every level. From breaking world records, finding a cure,
					launching a rocket ship. Each is an action that creates an impact. Every conversation,
					every communication can open a door to a new opportunity.
				</p>
				<p class="text-base leading-relaxed">
					We provide the platform. You provide the discussion. Together we create impact.
				</p>
			</div>

			<!-- WHY -->
			<div>
				<h3 class="mb-4">WHY?</h3>
				<p class="text-base leading-relaxed mb-4">
					It's times like these we learn to live again. We believe in creating a space for living
					again. There has never been a better time for a community of impactologists.
				</p>
				<p class="text-base leading-relaxed font-bold">
					Be interested. Be curious. Be an impactologist.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- Our Founder -->
<section class="section-gray py-20 md:py-28">
	<div class="container-custom">
		<div class="max-w-4xl mx-auto">
			<h2 class="text-center mb-12">OUR FOUNDER</h2>
			<div class="text-center">
				<h3 class="mb-2">George Liberopoulos</h3>
				<p class="text-sm uppercase tracking-wider opacity-70 mb-8">
					Co-founder, Impactology
				</p>
				<div class="prose prose-lg mx-auto text-left">
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
				<div class="flex justify-center gap-4 mt-8">
					<a
						href="https://au.linkedin.com/company/impactology"
						target="_blank"
						rel="noopener noreferrer"
						class="btn btn-circle bg-base-100 text-base-content border-none hover:bg-primary"
						aria-label="LinkedIn"
					>
						<Icon icon="ph:linkedin-logo-fill" class="text-xl" />
					</a>
					<a
						href="mailto:hello@impactology.com.au"
						class="btn btn-circle bg-base-100 text-base-content border-none hover:bg-primary"
						aria-label="Email"
					>
						<Icon icon="ph:envelope-fill" class="text-xl" />
					</a>
					<a
						href="https://www.facebook.com/ImpactologyAust/"
						target="_blank"
						rel="noopener noreferrer"
						class="btn btn-circle bg-base-100 text-base-content border-none hover:bg-primary"
						aria-label="Facebook"
					>
						<Icon icon="ph:facebook-logo-fill" class="text-xl" />
					</a>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Connect With Us / Contact Form -->
<section class="py-20 bg-base-100" id="connect">
	<div class="container-custom">
		<div class="max-w-2xl mx-auto">
			<h2 class="text-center mb-12">CONNECT WITH US</h2>

			<form onsubmit={handleSubmit} class="flex flex-col gap-6">
				<label class="form-control w-full">
					<div class="label">
						<span class="label-text font-medium">Name</span>
					</div>
					<input
						type="text"
						bind:value={name}
						required
						class="input input-bordered w-full rounded-none"
						placeholder="Name"
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
						placeholder="Email"
					/>
				</label>

				<label class="form-control w-full">
					<div class="label">
						<span class="label-text font-medium">Mobile</span>
					</div>
					<input
						type="tel"
						bind:value={mobile}
						class="input input-bordered w-full rounded-none"
						placeholder="Mobile"
					/>
				</label>

				<label class="form-control w-full">
					<div class="label">
						<span class="label-text font-medium">Company</span>
					</div>
					<input
						type="text"
						bind:value={company}
						class="input input-bordered w-full rounded-none"
						placeholder="Company"
					/>
				</label>

				<label class="form-control w-full">
					<div class="label">
						<span class="label-text font-medium">Message</span>
					</div>
					<textarea
						bind:value={message}
						required
						class="textarea textarea-bordered w-full rounded-none h-32"
						placeholder="Your Message"
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
						<span>Thanks for reaching out! We'll be in touch soon.</span>
					</div>
				{/if}

				<button
					type="submit"
					class="btn btn-secondary btn-lg uppercase font-bold rounded-none w-full md:w-auto md:px-16"
					disabled={formStatus === 'sending'}
				>
					{#if formStatus === 'sending'}
						<span class="loading loading-spinner loading-sm"></span>
						Sending...
					{:else}
						Send Message
					{/if}
				</button>
			</form>
		</div>
	</div>
</section>
