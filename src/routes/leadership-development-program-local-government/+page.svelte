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
					message: `[Leadership Development Program for Local Government Interest]\n\n${message}`
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
		'Develop adaptive leadership capabilities to navigate complex community needs and political dynamics.',
		'Build trust and credibility with elected officials, community stakeholders, and cross-functional teams.',
		'Master strategic decision-making frameworks suited to the unique constraints of public sector environments.',
		'Strengthen your ability to lead transformational change while maintaining public accountability.'
	];

	const modules = [
		{
			title: 'LEADING IN THE PUBLIC SECTOR',
			subtitle: 'Understanding the unique leadership context of local government.',
			description:
				'This foundational module explores the distinctive challenges of leadership in local government. We examine the balance between political accountability and operational excellence, the role of public trust, and how to navigate the complex stakeholder landscape unique to councils and municipalities. You will develop a clear understanding of your leadership identity within this context.'
		},
		{
			title: 'COMMUNITY-CENTRED LEADERSHIP',
			subtitle: 'Placing community outcomes at the heart of decision-making.',
			description:
				'Local government leaders must balance competing community interests while delivering equitable outcomes. This module focuses on developing a community-centred leadership approach, understanding diverse stakeholder needs, and making decisions that serve the public interest. You will learn frameworks for engaging authentically with your community.'
		},
		{
			title: 'NAVIGATING POLITICAL DYNAMICS',
			subtitle: 'Building effective relationships with elected officials.',
			description:
				'The relationship between council officers and elected officials is fundamental to effective local government. This module equips you with skills to navigate political dynamics professionally, provide fearless advice, and maintain productive relationships across the political spectrum while preserving operational independence.'
		},
		{
			title: 'LEADING TRANSFORMATIONAL CHANGE',
			subtitle: 'Driving sustainable improvement in public services.',
			description:
				'Local governments face increasing pressure to transform service delivery while managing constrained resources. This module provides frameworks for leading change in complex public sector environments, managing stakeholder expectations, and building organisational capability for continuous improvement.'
		},
		{
			title: 'STRATEGIC COLLABORATION & PARTNERSHIPS',
			subtitle: 'Leveraging networks for community impact.',
			description:
				'Effective local government leadership extends beyond organisational boundaries. This module focuses on building strategic partnerships with other councils, state agencies, community organisations, and the private sector. You will develop skills in collaborative leadership and creating shared value for your community.'
		},
		{
			title: 'RESILIENT LEADERSHIP',
			subtitle: 'Sustaining performance through challenge and uncertainty.',
			description:
				'Local government leaders face unique pressures including public scrutiny, resource constraints, and crisis management. This module builds your capacity for resilient leadership, managing stress, maintaining wellbeing, and sustaining high performance over the long term while serving your community.'
		}
	];

	const testimonials = [
		{
			quote:
				'This program gave me the frameworks and confidence to lead more effectively within the unique context of local government. Highly recommended for any council leader.',
			title: 'Frameworks and confidence',
			author: 'Sarah',
			role: 'Director of Community Services'
		},
		{
			quote:
				'The module on navigating political dynamics was invaluable. I now have much stronger relationships with our elected officials.',
			title: 'Invaluable insights',
			author: 'Michael',
			role: 'General Manager Operations'
		},
		{
			quote:
				'Practical, relevant, and immediately applicable to the challenges we face in local government. This is leadership development that understands our sector.',
			title: 'Understands our sector',
			author: 'Jennifer',
			role: 'Executive Manager People & Culture'
		},
		{
			quote:
				'The community-centred leadership approach has transformed how I think about stakeholder engagement. Our community consultation outcomes have improved significantly.',
			title: 'Transformed my approach',
			author: 'David',
			role: 'Director Strategic Planning'
		},
		{
			quote:
				'Finally, a leadership program designed for the realities of public sector leadership. The insights on leading change were exactly what I needed.',
			title: 'Designed for public sector',
			author: 'Amanda',
			role: 'Chief Financial Officer'
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
	title="Leadership Development Program for Local Government Teams | Impactology"
	description="Transform your LGA leadership team with our tailored Leadership Development Program. Build trust, foster collaboration, and deliver impactful outcomes."
	ogTitle="Leadership Development Program for Local Government Teams | Impactology"
	ogDescription="Transform your LGA leadership team with our tailored Leadership Development Program. Build trust, foster collaboration, and deliver impactful outcomes."
	ogImage="https://impactology.com.au/icon2.png"
	ogType="website"
	canonical="https://impactology.com.au/leadership-development-program-local-government"
	jsonLd={{
		'@context': 'https://schema.org',
		'@type': 'Course',
		name: 'Leadership Development Program for Local Government',
		description:
			'A comprehensive leadership development program designed for local government executives and managers, focusing on community-centred leadership, political dynamics, and driving transformational change in the public sector.',
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
				<img src="/icon2.webp" alt="Leadership Development Program" class="w-14 h-14" />
				<span class="text-primary font-bold text-xl tracking-wider">LOCAL GOVERNMENT PROGRAM</span>
			</div>
			<h1 class="text-5xl md:text-6xl lg:text-7xl mb-6 leading-none">
				LEADERSHIP DEVELOPMENT PROGRAM FOR LOCAL GOVERNMENT
			</h1>
			<p class="text-xl mb-8 opacity-90 leading-relaxed max-w-3xl">
				Community leaders. Public servants. Change makers.
			</p>
			<p class="text-lg mb-8 opacity-80 leading-relaxed max-w-3xl">
				Local government leaders operate in one of the most complex environments in the public
				sector — balancing community expectations, political dynamics, and operational excellence.
				This program develops the leadership capabilities essential for thriving in this unique
				context.
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

<!-- Program Introduction -->
<section class="py-20 md:py-28 bg-base-100">
	<div class="container-custom">
		<div class="max-w-4xl mx-auto">
			<p class="text-xl leading-relaxed mb-6">
				Step into your potential as a local government leader and amplify your impact across your
				council and community. This program is designed for executives and managers who are ready to
				lead with greater confidence, influence, and strategic clarity.
			</p>
			<div class="bg-base-200 p-8 mb-8">
				<p class="text-lg font-bold mb-4">Your Benefit:</p>
				<p class="text-lg leading-relaxed">
					Practical leadership frameworks tailored to the unique challenges of local government.
					Real conversations about the pressures you face. No generic public sector training here.
				</p>
			</div>
			<p class="text-lg leading-relaxed mb-6">
				The Leadership Development Program for Local Government is designed for council executives,
				directors, managers, and emerging leaders who want to strengthen their leadership
				capabilities and increase their strategic impact within the public sector.
			</p>
			<p class="text-lg leading-relaxed">
				Whether you're leading a directorate, managing complex community projects, or preparing for
				your next senior role, this program provides the skills, frameworks, and confidence you need
				to succeed in local government.
			</p>
		</div>
	</div>
</section>

<!-- What Makes This Program Unique -->
<section class="section-yellow py-20 md:py-28">
	<div class="container-custom">
		<h2 class="text-center mb-12">WHAT MAKES THIS LEADERSHIP PROGRAM UNIQUE?</h2>
		<div class="max-w-4xl mx-auto">
			<p class="text-xl leading-relaxed mb-8">
				We understand that local government leaders face distinctive challenges. You navigate
				political relationships, serve diverse communities, and must deliver outcomes within unique
				accountability frameworks. Our program is built around these realities:
			</p>
			<div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
				<div class="bg-base-100/10 p-6 text-center">
					<Icon icon="ph:buildings-fill" class="text-4xl mb-4 mx-auto" />
					<p class="text-lg font-bold">Lead with public purpose</p>
				</div>
				<div class="bg-base-100/10 p-6 text-center">
					<Icon icon="ph:users-three-fill" class="text-4xl mb-4 mx-auto" />
					<p class="text-lg font-bold">Serve diverse communities</p>
				</div>
				<div class="bg-base-100/10 p-6 text-center">
					<Icon icon="ph:scales-fill" class="text-4xl mb-4 mx-auto" />
					<p class="text-lg font-bold">Navigate political dynamics</p>
				</div>
			</div>
			<p class="text-lg leading-relaxed mb-6">
				This isn't generic leadership training. Every module is tailored to the specific context of
				local government — the challenges you face, the stakeholders you serve, and the outcomes
				your community expects.
			</p>
			<p class="text-lg leading-relaxed">
				We combine proven leadership frameworks with practical application in the public sector
				context, ensuring you leave each session with actionable strategies you can implement
				immediately in your council.
			</p>
		</div>
	</div>
</section>

<!-- Client Logos -->
<section class="section-gray py-16">
	<div class="container-custom">
		<h2 class="text-center mb-12">SOME ORGANISATIONS WE'VE PARTNERED WITH</h2>
		<div class="grid grid-cols-3 md:grid-cols-6 gap-8 items-center">
			{#each clientLogos as logo, i (i)}
				<div class="flex items-center justify-center p-4">
					<img src={logo} alt="Client logo" class="max-h-14 w-auto object-contain" />
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- The Leadership Imperative -->
<section class="py-20 md:py-28 bg-base-100">
	<div class="container-custom">
		<h2 class="text-center mb-12">THE LEADERSHIP IMPERATIVE FOR LOCAL GOVERNMENT</h2>
		<div class="max-w-4xl mx-auto">
			<p class="text-xl leading-relaxed mb-6">
				The expectations placed on local government leaders have never been higher. Communities
				demand responsive, innovative services. Elected officials require trusted advisors who can
				navigate complexity. And the pace of change requires
				<strong>adaptive, resilient leadership</strong> at every level.
			</p>
			<p class="text-lg leading-relaxed mb-6 opacity-80">
				An <strong>effective local government leader</strong> doesn't just manage operations — they inspire
				their teams, build community trust, and drive meaningful change while maintaining the highest
				standards of public accountability.
			</p>
			<p class="text-lg leading-relaxed opacity-80">
				Our <strong>Leadership Development Program for Local Government</strong> is designed to accelerate
				this transformation, equipping you with the leadership capabilities essential for success in today's
				demanding public sector environment.
			</p>
		</div>
	</div>
</section>

<!-- Learning Outcomes -->
<section class="section-dark py-20 md:py-28">
	<div class="container-custom">
		<h2 class="text-center mb-6">WHAT YOU'LL LEARN</h2>
		<p class="text-xl text-center mb-12 opacity-90">
			The learning objectives of the Leadership Development Program for Local Government include:
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
<section id="register-interest" class="py-20 md:py-28 bg-base-100">
	<div class="container-custom">
		<div class="max-w-2xl mx-auto">
			<div class="text-center mb-12">
				<h2 class="mb-4">REGISTER YOUR INTEREST</h2>
				<p class="text-lg">
					We want to disrupt everyday thinking, spark new ideas and create new ways to interact that
					will support you to truly have an impact. If you're ready to elevate your leadership
					capabilities in local government, register your interest by filling out the form below.
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
						placeholder="john@council.gov.au"
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
						<span class="label-text font-medium">Council / Organisation</span>
					</div>
					<input
						type="text"
						bind:value={company}
						required
						class="input input-bordered w-full rounded-none"
						placeholder="Your Council or Organisation Name"
					/>
				</label>

				<label class="form-control w-full">
					<div class="label">
						<span class="label-text font-medium">Message (optional)</span>
					</div>
					<textarea
						bind:value={message}
						class="textarea textarea-bordered w-full rounded-none h-24"
						placeholder="Tell us about your leadership development goals..."
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
