<script lang="ts">
	import SEO from '$lib/components/SEO.svelte';
	import ContactForm from '$lib/components/ContactForm.svelte';
	import ClientLogos from '$lib/components/ClientLogos.svelte';
	import Icon from '@iconify/svelte';
	import { fly } from 'svelte/transition';

	// Trigger action — fires immediately if already in viewport, else waits for scroll
	function trigger(node: HTMLElement, stateSetter: (v: boolean) => void) {
		let observer: IntersectionObserver;

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

		startObserving();

		return { destroy: () => observer?.disconnect() };
	}

	// Testimonial carousel state
	let currentTestimonial = $state(0);
	let slideDirection = $state<'left' | 'right'>('right');
	let isAnimating = $state(false);

	const testimonials = [
		{
			quote: 'Impactora provides streamlined insights that narrows down to specific areas',
			author: 'Janet M'
		},
		{
			quote:
				'The action pathways based on objectives, it seems like a very powerful tool to drive undecided people to action.',
			author: 'Charlotte L'
		},
		{
			quote:
				'The standouts to me are the ability to schedule goals and do reviews. I like the idea that Impactora is allowing me to continually move forward',
			author: 'Gianni R'
		},
		{
			quote:
				'At times, an organisation requiring personal development in the form of an online platform can feel mundane and distant. This section allowed a more human element to come through from the platform.',
			author: 'Lily S'
		},
		{
			quote:
				'Whether it\u2019s a quick check-in for some advice or a deep dive. Impactora has it all. In a short space of time, it has been my go-to for personal and professional development.',
			author: 'Chan L'
		}
	];

	function nextTestimonial() {
		if (isAnimating) return;
		isAnimating = true;
		slideDirection = 'right';
		setTimeout(() => {
			currentTestimonial = (currentTestimonial + 1) % testimonials.length;
			isAnimating = false;
		}, 300);
	}

	function prevTestimonial() {
		if (isAnimating) return;
		isAnimating = true;
		slideDirection = 'left';
		setTimeout(() => {
			currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
			isAnimating = false;
		}, 300);
	}

	const faqs = [
		{
			question: 'What is Impactora?',
			answer:
				'Impactora is a SaaS based HR platform which helps solving a critical organization challenge \u2013 helping managers and employees receive tailored HR information and advice. Impactora is the platform where employees access tailored advice and information to resolve issues, access insights, make decisions, and achieve their goals which positively impacts their colleagues and work environment \u2013 imagine a combination of Wikipedia and Google tailored to your personal work context and situation.'
		},
		{
			question: 'What is Impactora used for?',
			answer:
				'We solve the productivity challenge for employees and HR by providing answers to frequently asked questions for non-contextual information. We solve employee performance challenges by providing the right, tailored information with the right insights at the right time to resolve people issues and improve decision making.\n\nPareto rule exists that 80% of the questions are on simple queries – the focus is to lower service delivery costs. Achievement of key people outcomes however comes from answering 20% of the challenging issues and decisions. Combined, Impactora solves three critical issues:\n• Improve employee performance by providing the right tailored information at the right time with the right level of insights\n• Improve employee and HR productivity by providing answers to non-contextual questions\n• Improve Leaders, Managers, Employees and HR capabilities and knowledge by providing insights to solve contextual issues and decisions\n\nWhilst employees have access to infinite sources of knowledge, data and advice – it is not tailored and it is not specific to their unique situation. This "mass-information" environment creates noise and cognitive overload for employees, where abundant choice is the enemy of action.'
		},
		{
			question: 'Is the Impactora Platform safe and secure?',
			answer:
				'Impactora is the trusted Platform where employees feel safe to help them resolve some of the tricky issues, access insights, make decisions, and achieve their goals which positively impacts their colleagues and work environment. Click here to better understand how we keep your data safe.'
		},
		{
			question: 'Who is the target audience for Impactora?',
			answer:
				'Impactora is designed for mature mid-sized organisations and smaller high growth organisations.\n\nOur end users are graduates, early career employees, first-time managers, emerging leaders and newly promoted managers, across all disciplines and job functions.\n\nAlso, organisations are investing in leadership and development programs to help build organisational capabilities and develop their employees. One of the challenges organisations face, is ensuring employees can effectively consolidate the learnings at the conclusion of any development program they attend – particularly, when they are back "in the office" and working in their day-to-day role. Impactora is designed to help employees leverage and consolidate their learnings, by accessing relevant insights and advice that complement the development program they attended.'
		},
		{
			question: 'Which employees can best benefit from Impactora?',
			answer:
				'Employees who are:\n• Stretched in their role and have a lack of time and knowledge on where to seek advice\n• Getting stuck in career: compromising career progression through bad decisions\n• Have a fear of failing in their role – lack confidence\n• Looking for a platform to complement existing learning and development programs\n• Have a willingness to embrace new modes of learning\n• Receiving too much theoretical advice – non-tactical or implementable\n• Not feeling valued at work\n• Lack of timely, actionable personal advice\n• Trying to balance work and personal commitments\n• Lack of connectivity with colleagues\n• Not developing fast enough (keep pace of change and expectations)\n• Lack of personal connection to day-to-day work.'
		}
	];

	const helpBoxes = [
		{
			icon: '/impactora-icon-resolve.webp',
			title: 'Resolve\nissues',
			description:
				"Reduced in-person connectivity means we miss out on the valuable 'water cooler' conversation to help us solve problems in a timely manner \u2013 resolve issues, anytime from one platform."
		},
		{
			icon: '/impactora-icon-insights.webp',
			title: 'Quickly Access\nInsights',
			description:
				'When did work and life get so busy again!? IMPACTORA saves you valuable time by helping you access the insights you need to make more informed decisions and take action sooner.'
		},
		{
			icon: '/impactora-icon-decisions.webp',
			title: 'Make informed\ndecisions',
			description:
				'Today\u2019s abundance of choice is often the enemy of action. IMPACTORA allows access to tailored and timely advice, which means you can make more quicker decisions that often create lasting impact.'
		},
		{
			icon: '/impactora-icon-goals.webp',
			title: 'Achieve\ngoals',
			description:
				'Some insights and advice are worth investing more time in. IMPACTORA lets you create goals to fast track your personal growth in the moments that matter most.'
		}
	];

	const steps = [
		{
			number: '1.',
			title: 'Know thy self',
			description: 'Answer a series of questions and access your personal profile.',
			icon: 'ph:user'
		},
		{
			number: '2.',
			title: 'Start exploring',
			description: 'Access insights and advice tailored to your personal profile and organisation.',
			icon: 'ph:magnifying-glass'
		},
		{
			number: '3.',
			title: 'Take action sooner',
			description: 'Increase your impact on yourself, your colleagues, your team and customers.',
			icon: 'ph:clock'
		},
		{
			number: '4.',
			title: 'Access daily insights',
			description: 'Your personalised feed will keep you motivated to achieve your goals.',
			icon: 'ph:calendar'
		}
	];

	let videoPlaying = $state(false);

	// Per-section reveal states
	let heroText = $state(true);
	let heroImg = $state(false);
	let tailoredHeading = $state(false);
	let tailoredText = $state(false);
	let helpsHeading = $state(false);
	let helpsBoxes = $state(false);
	let timelyHeading = $state(false);
	let timelyContent = $state(false);
	let featureLeft = $state(false);
	let featureRight = $state(false);
	let stepsHeading = $state(false);
	let stepsItems = $state(false);
	let testimonialsVisible = $state(false);
	let clientsHeading = $state(false);
	let clientsLogos = $state(false);
	let faqHeading = $state(false);
	let faqItems = $state(false);
	let contactHeading = $state(false);
	let contactForm = $state(false);

	// Stagger hero image after text
	$effect(() => {
		if (heroText) {
			setTimeout(() => (heroImg = true), 150);
		}
	});
</script>

<SEO
	title="Impactora - Impactology | Timely Information & Advice"
	description="IMPACTORA delivers instant, contextual advice for managers and HR professionals. Navigate workplace challenges with AI-powered insights available 24/7."
	ogTitle="Impactora - Impactology | Timely Information & Advice"
	ogDescription="IMPACTORA delivers instant, contextual advice for managers and HR professionals. Navigate workplace challenges with AI-powered insights available 24/7."
	ogImage="https://impactology.com.au/icon1.png"
	ogType="website"
	canonical="https://impactology.com.au/impactora"
	jsonLd={{
		'@context': 'https://schema.org',
		'@type': 'SoftwareApplication',
		name: 'IMPACTORA',
		applicationCategory: 'BusinessApplication',
		operatingSystem: 'Web',
		description: 'AI-powered workplace guidance platform for managers and HR professionals',
		offers: {
			'@type': 'Offer',
			availability: 'https://schema.org/InStock'
		},
		provider: {
			'@type': 'Organization',
			name: 'Impactology',
			url: 'https://impactology.com.au'
		}
	}}
/>

<!-- Hero Section -->
<section
	class="section-blue py-24 md:py-32 relative overflow-hidden min-h-[70vh] flex items-center"
>
	<img
		src="/impactora-hero-bg.webp"
		alt=""
		aria-hidden="true"
		fetchpriority="high"
		decoding="async"
		width="1920"
		height="700"
		class="hidden md:block absolute inset-0 w-full h-full object-cover object-center"
	/>
	<div class="container-custom relative z-10">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
			{#if heroText}
				<div transition:fly={{ y: 30, duration: 700 }}>
					<img src="/impactora-logo.webp" alt="Impactora" class="h-10 md:h-12 w-auto mb-6" />
					<div class="mb-8">
						<span
							class="text-6xl md:text-7xl lg:text-[90px] font-bold leading-none"
							style="font-family: var(--font-heading);"
						>
							FIND <span class="text-white">INSIGHTS</span>
						</span>
					</div>
					<p class="text-xl mb-8 opacity-80 leading-relaxed max-w-xl">
						Tailored advice and insights for employees and managers.
					</p>
					<a
						href="#contact-section"
						class="inline-block bg-black text-white px-10 py-4 rounded-full font-bold text-sm uppercase tracking-wider hover:bg-white hover:text-[#5ad4ff] hover:outline hover:outline-2 hover:outline-[#5ad4ff] transition-all"
					>
						BOOK A DEMO
					</a>
				</div>
			{/if}
		</div>
	</div>
</section>

<!-- Tailored Advice & Insights Section -->
<section
	class="py-20 md:py-28 bg-base-100"
	use:trigger={(v) => {
		tailoredHeading = v;
		setTimeout(() => (tailoredText = v), 150);
	}}
>
	<div class="container-custom">
		<div class="max-w-4xl mx-auto text-center">
			{#if tailoredHeading}
				<h2 class="mb-8 text-3xl md:text-4xl" transition:fly={{ y: 30, duration: 600 }}>
					TAILORED ADVICE & INSIGHTS
				</h2>
			{/if}
			{#if tailoredText}
				<div transition:fly={{ y: 30, duration: 600 }}>
					<p class="text-lg leading-relaxed mb-6">
						The way we work has changed forever. The emergence of remote and hybrid workplaces has
						presented great opportunities and benefits for both organisations and their employees,
						but it's not without its challenges. Most notably is the loss of in-person workplace
						connection, and along with it the "water cooler" conversations where people shared their
						experiences and knowledge.
					</p>
					<p class="text-lg leading-relaxed">
						<strong>IMPACTORA</strong> is a SaaS platform designed to bridge that loss of organisational
						knowledge by providing easy to access and immediate support, advice and insights that are
						tailored to the individual employee and your business.
					</p>
				</div>
			{/if}
		</div>
	</div>
</section>

<!-- Impactora Helps You Section - 4 Dark Gradient Boxes -->
<section
	class="py-0"
	use:trigger={(v) => {
		helpsHeading = v;
		setTimeout(() => (helpsBoxes = v), 200);
	}}
>
	<div>
		{#if helpsHeading}
			<h2
				class="text-center mb-12 text-3xl md:text-4xl pt-16"
				transition:fly={{ y: 30, duration: 600 }}
			>
				IMPACTORA HELPS YOU&hellip;
			</h2>
		{/if}
		{#if helpsBoxes}
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
				{#each helpBoxes as box, i (i)}
					<div
						class="p-10 text-white"
						style="background-color: {['#636363', '#4a4a4a', '#363636', '#1a1a1a'][i]};"
						transition:fly={{ y: 30, duration: 600, delay: i * 100 }}
					>
						<img
							src={box.icon}
							alt={box.title.replace('\n', ' ')}
							class="w-24 h-24 mb-6 object-contain"
						/>
						<h3 class="text-xl mb-4 whitespace-pre-line" style="color: #5ad4ff;">
							{box.title}
						</h3>
						<p class="text-sm leading-relaxed opacity-90">
							{box.description}
						</p>
					</div>
				{/each}
			</div>
		{/if}
	</div>
</section>

<!-- Timely Information & Advice Section -->
<section
	class="py-20 md:py-28 bg-base-100"
	use:trigger={(v) => {
		timelyHeading = v;
		setTimeout(() => (timelyContent = v), 150);
	}}
>
	<div class="container-custom">
		<div class="max-w-4xl mx-auto text-center">
			{#if timelyHeading}
				<h2 class="mb-8 text-3xl md:text-4xl" transition:fly={{ y: 30, duration: 600 }}>
					TIMELY INFORMATION & ADVICE
				</h2>
			{/if}
			{#if timelyContent}
				<div transition:fly={{ y: 30, duration: 600 }}>
					<p class="text-lg leading-relaxed mb-10">
						We now have access to infinite sources of knowledge, data, and advice. However, it can
						be difficult to find information specific to your situation and the abundance of choice
						is often the enemy of action. <strong>IMPACTORA</strong> provides leaders, managers and employees
						access to tailored advice and insights that will positively impact themselves, their teams,
						colleagues and customers.
					</p>

					<div class="mb-10 max-w-2xl mx-auto">
						{#if videoPlaying}
							<video
								src="https://impactology.com.au/wp-content/uploads/2023/03/impactora-welcome-video.mp4"
								controls
								autoplay
								class="w-full h-auto rounded-sm shadow-lg"
								style="max-height: 300px;"
							>
							</video>
						{:else}
							<button
								onclick={() => (videoPlaying = true)}
								class="relative w-full rounded-sm shadow-lg overflow-hidden group cursor-pointer"
								aria-label="Play Impactora video"
							>
								<img
									src="/impactora-promo-banner.webp"
									alt="Impactora platform preview"
									class="w-full h-auto"
								/>
								<div
									class="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors"
								>
									<div
										class="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg"
									>
										<Icon icon="ph:play-fill" class="text-2xl text-[#5ad4ff] ml-1" />
									</div>
								</div>
							</button>
						{/if}
					</div>

					<a
						href="#contact-section"
						class="inline-block bg-black text-white px-10 py-4 rounded-full font-bold text-sm uppercase tracking-wider hover:bg-white hover:text-[#5ad4ff] hover:outline hover:outline-2 hover:outline-[#5ad4ff] transition-all"
					>
						BOOK A DEMO
					</a>
				</div>
			{/if}
		</div>
	</div>
</section>

<!-- Feature Showcase - Bento Grid -->
<section
	class="py-8 overflow-hidden bg-base-100"
	use:trigger={(v) => {
		featureLeft = v;
		setTimeout(() => (featureRight = v), 150);
	}}
>
	{#if featureLeft}
		<div
			class="grid grid-cols-1 md:grid-cols-4 gap-3 px-4 auto-rows-min max-w-[1400px] mx-auto"
			transition:fly={{ y: 30, duration: 600 }}
		>
			<!-- Large gray card: Team management advice (col-span-2, row-span-2) -->
			<div
				class="md:col-span-2 md:row-span-2 bg-[#A8A8A8] p-8 relative min-h-[300px] flex flex-col justify-center overflow-hidden"
			>
				<img
					src="/impactora-mask-group.webp"
					alt=""
					aria-hidden="true"
					class="absolute inset-0 w-full h-full object-cover opacity-10"
				/>
				<h3
					class="text-sky-200 font-medium mb-3 uppercase text-xs tracking-wider relative z-10 normal-case"
				>
					Team management advice
				</h3>
				<h2
					class="text-white text-4xl md:text-5xl font-normal leading-tight normal-case relative z-10"
					style="font-family: var(--font-heading);"
				>
					How to identify &amp; manage high performers?
				</h2>
			</div>

			<!-- Quote card (cyan): Federico Fellini -->
			<div class="bg-[#1EBBD7] p-6 flex flex-col justify-between min-h-[220px]">
				<div class="flex items-start justify-between mb-4">
					<Icon icon="ph:quotes" class="text-3xl text-white/70" />
					<Icon icon="ph:eye" class="text-xl text-white/50" />
				</div>
				<p class="text-white text-sm font-serif italic leading-relaxed flex-1">
					"If you have to make a mistake, it's better to make a mistake of action than one of
					inaction."
				</p>
				<p class="text-white/70 text-xs mt-4 uppercase tracking-wider">
					Federico Fellini — Film Director
				</p>
			</div>

			<!-- Audio card (light gray): Initiating opportunities -->
			<div class="bg-[#EAEAEA] p-6 flex flex-col justify-between min-h-[220px]">
				<div>
					<h3 class="text-[#1EBBD7] font-medium uppercase text-xs tracking-wider mb-2">
						Personal development advice
					</h3>
					<h4 class="text-gray-800 text-sm font-semibold leading-snug normal-case">
						Initiating opportunities to collaborate with colleagues
					</h4>
				</div>
				<div class="mt-4 flex items-center gap-3">
					<button
						class="w-9 h-9 rounded-full bg-[#1EBBD7] flex items-center justify-center flex-shrink-0"
						aria-label="Play audio"
					>
						<Icon icon="ph:play-fill" class="text-white text-sm ml-0.5" />
					</button>
					<div class="flex items-end gap-0.5 flex-1 h-8">
						{#each [3, 8, 5, 10, 6, 9, 4, 7, 5, 8, 3, 9, 6, 4, 8] as h}
							<div
								class="bg-[#1EBBD7]/50 rounded-full w-1 flex-shrink-0"
								style="height: {h * 2.5}px;"
							></div>
						{/each}
					</div>
				</div>
			</div>

			<!-- Quote card (light cyan): Bill Gates -->
			<div class="bg-[#5FD3F3] p-6 flex flex-col justify-between min-h-[180px]">
				<div class="flex items-start justify-between mb-4">
					<Icon icon="ph:quotes" class="text-3xl text-white/70" />
					<Icon icon="ph:eye" class="text-xl text-white/50" />
				</div>
				<p class="text-white text-sm font-serif italic leading-relaxed">
					"Your most unhappy customers are your greatest source of learning."
				</p>
				<p class="text-white/80 text-xs mt-4 uppercase tracking-wider">Bill Gates</p>
			</div>

			<!-- Audio card (blue): Building trusted relationships (col-span-2) -->
			<div class="md:col-span-2 bg-[#B6E8F8] p-6 flex flex-col justify-between min-h-[180px]">
				<div>
					<h3 class="text-[#0095B3] font-medium uppercase text-xs tracking-wider mb-2">
						Personal development advice
					</h3>
					<h4 class="text-gray-800 text-sm font-semibold leading-snug normal-case">
						Building trusted relationships
					</h4>
				</div>
				<div class="mt-4 flex items-center gap-3">
					<button
						class="w-9 h-9 rounded-full bg-[#0095B3] flex items-center justify-center flex-shrink-0"
						aria-label="Play audio"
					>
						<Icon icon="ph:play-fill" class="text-white text-sm ml-0.5" />
					</button>
					<div class="flex items-end gap-0.5 flex-1 h-8">
						{#each [5, 9, 4, 11, 7, 8, 3, 10, 6, 9, 4, 8, 5, 7, 10] as h}
							<div
								class="bg-[#0095B3]/40 rounded-full w-1 flex-shrink-0"
								style="height: {h * 2.5}px;"
							></div>
						{/each}
					</div>
				</div>
			</div>

			<div class="md:col-span-1 md:row-span-2 relative bg-slate-800 min-h-[400px] overflow-hidden">
				<img
					src="/impactora-mask-group.webp"
					alt="Expert presenting to team"
					class="absolute inset-0 w-full h-full object-cover opacity-60"
				/>
				<div
					class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6"
				>
					<h3 class="text-[#5FD3F3] font-medium uppercase text-xs tracking-wider mb-2">
						Expert tips
					</h3>
					<h4 class="text-white text-sm font-semibold leading-snug mb-4 normal-case">
						Demonstrating expertise in client presentations
					</h4>
					<button
						class="flex items-center gap-2 text-white text-xs font-bold uppercase tracking-wider"
						aria-label="Play video"
					>
						<span
							class="w-7 h-7 rounded-full border-2 border-white flex items-center justify-center"
						>
							<Icon icon="ph:play-fill" class="text-white text-xs ml-0.5" />
						</span>
						PLAY VIDEO
					</button>
				</div>
			</div>

			<div class="bg-[#8FDEFA] p-6 md:row-span-2 flex flex-col justify-between min-h-[200px]">
				<span
					class="text-[120px] leading-none text-white/60 normal-case"
					style="font-family: var(--font-heading); margin-top: -0.2em; margin-left: -0.05em;"
					>1</span
				>
				<div>
					<h3 class="text-gray-800 font-semibold text-sm mb-1 normal-case">Develop your skills</h3>
					<p class="text-gray-700 text-xs leading-relaxed">
						Seek out feedback from peers or customers.
					</p>
				</div>
			</div>

			<div class="bg-[#0FBBD8] p-6 md:row-span-2 flex flex-col justify-between min-h-[200px]">
				<span
					class="text-[120px] leading-none text-white/40 normal-case"
					style="font-family: var(--font-heading); margin-top: -0.2em; margin-left: -0.05em;"
					>2</span
				>
				<div>
					<h3 class="text-white font-semibold text-sm mb-1 normal-case">Shared knowledge</h3>
					<p class="text-white/80 text-xs leading-relaxed">
						Seek views from experts outside your organisation.
					</p>
				</div>
			</div>

			<div class="bg-[#EAEAEA] p-6 flex flex-col justify-between min-h-[180px]">
				<div>
					<h3 class="text-[#1EBBD7] font-medium uppercase text-xs tracking-wider mb-2">
						Expert tips
					</h3>
					<h2 class="text-gray-800 text-base font-semibold leading-snug normal-case">
						Eliminate choice and focus on what truly matters
					</h2>
				</div>
				<button
					class="mt-4 self-start flex items-center gap-2 text-gray-700 text-xs font-bold uppercase tracking-wider"
					aria-label="Play video"
				>
					<span
						class="w-7 h-7 rounded-full border-2 border-gray-500 flex items-center justify-center"
					>
						<Icon icon="ph:play-fill" class="text-gray-700 text-xs ml-0.5" />
					</span>
					PLAY VIDEO
				</button>
			</div>

			<div class="md:col-span-2 bg-[#5DD3F9] p-8 flex flex-col justify-center min-h-[180px]">
				<h3 class="text-white/80 font-medium uppercase text-xs tracking-wider mb-3">
					Personal development
				</h3>
				<h2
					class="text-white text-2xl md:text-3xl font-normal leading-tight normal-case"
					style="font-family: var(--font-heading);"
				>
					Developing the right skills for your career
				</h2>
			</div>
		</div>
	{/if}
</section>

<section
	class="py-20 md:py-28 bg-base-100"
	use:trigger={(v) => {
		stepsHeading = v;
		setTimeout(() => (stepsItems = v), 200);
	}}
>
	<div class="container-custom">
		{#if stepsHeading}
			<h2 class="text-center mb-16 text-3xl md:text-4xl" transition:fly={{ y: 30, duration: 600 }}>
				HOW IT WORKS
			</h2>
		{/if}

		{#if stepsItems}
			<div
				class="flex flex-col lg:flex-row items-stretch justify-center max-w-5xl mx-auto"
				transition:fly={{ y: 30, duration: 600 }}
			>
				{#each steps as step, i (i)}
					<div class="flex-1 text-center px-4 py-6">
						<div class="w-14 h-14 mx-auto mb-4 flex items-center justify-center">
							<Icon icon={step.icon} class="text-4xl text-[#5DD3F9]" />
						</div>
						<div class="text-4xl font-bold mb-2" style="font-family: var(--font-heading);">
							{step.number}
						</div>
						<h3 class="text-sm font-bold uppercase tracking-wide mb-3">
							{step.title.toUpperCase()}
						</h3>
						<p class="text-xs leading-relaxed opacity-70 max-w-[200px] mx-auto">
							{step.description}
						</p>
					</div>
					{#if i < steps.length - 1}
						<div class="hidden lg:flex items-center flex-shrink-0 text-base-300" aria-hidden="true">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="48"
								viewBox="0 0 24 48"
								fill="none"
							>
								<polyline
									points="4,4 20,24 4,44"
									stroke="currentColor"
									stroke-width="2.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
						</div>
					{/if}
				{/each}
			</div>

			<div class="text-center mt-12">
				<a
					href="#contact-section"
					class="inline-block bg-black text-white px-10 py-4 rounded-full font-bold text-sm uppercase tracking-wider hover:bg-white hover:text-[#5ad4ff] hover:outline hover:outline-2 hover:outline-[#5ad4ff] transition-all"
				>
					BOOK A DEMO
				</a>
			</div>
		{/if}
	</div>
</section>

<!-- Testimonials Section -->
<section
	class="section-blue py-20 md:py-28 relative overflow-hidden"
	use:trigger={(v) => (testimonialsVisible = v)}
>
	{#if testimonialsVisible}
		<div class="container-custom" transition:fly={{ y: 30, duration: 600 }}>
			<div class="max-w-3xl mx-auto text-center relative">
				<!-- Testimonial Box -->
				<div class="testimonial-title mx-auto">
					<div
						class="testimonial-slide {isAnimating
							? slideDirection === 'right'
								? 'slide-out-left'
								: 'slide-out-right'
							: slideDirection === 'right'
								? 'slide-in-right'
								: 'slide-in-left'}"
					>
						<div>
							<h3
								class="text-xl md:text-2xl font-bold leading-relaxed"
								style="font-family: var(--font-heading);"
							>
								"{testimonials[currentTestimonial].quote}"
							</h3>
							<p class="mt-4 text-sm opacity-80">
								&ndash; {testimonials[currentTestimonial].author}
							</p>
						</div>
					</div>
				</div>

				<!-- Navigation -->
				<div class="flex items-center justify-center gap-6 mt-12">
					<button
						onclick={prevTestimonial}
						class="w-10 h-10 border border-neutral-content/30 flex items-center justify-center hover:bg-primary hover:text-primary-content hover:border-primary transition-colors"
						aria-label="Previous testimonial"
					>
						<Icon icon="ph:caret-left-bold" />
					</button>
					<span class="text-sm opacity-70">
						{currentTestimonial + 1}/{testimonials.length}
					</span>
					<button
						onclick={nextTestimonial}
						class="w-10 h-10 border border-neutral-content/30 flex items-center justify-center hover:bg-primary hover:text-primary-content hover:border-primary transition-colors"
						aria-label="Next testimonial"
					>
						<Icon icon="ph:caret-right-bold" />
					</button>
				</div>
			</div>
		</div>
	{/if}
</section>

<!-- Clients We've Impacted -->
<section class="py-16 bg-base-100">
	<div
		class="container-custom"
		use:trigger={(v) => {
			clientsHeading = v;
			setTimeout(() => (clientsLogos = v), 200);
		}}
	>
		{#if clientsHeading}
			<h2
				class="text-5xl lg:text-7xl font-bold text-center mb-12"
				transition:fly={{ y: 30, duration: 600 }}
			>
				CLIENTS WE'VE IMPACTED
			</h2>
		{/if}
		{#if clientsLogos}
			<div transition:fly={{ y: 20, duration: 600 }}>
				<ClientLogos marquee={true} />
			</div>
		{/if}
	</div>
</section>

<!-- FAQ Section -->
<section
	class="py-20 md:py-28 bg-base-100"
	use:trigger={(v) => {
		faqHeading = v;
		setTimeout(() => (faqItems = v), 200);
	}}
>
	<div class="container-custom">
		<div class="max-w-3xl mx-auto">
			{#if faqHeading}
				<div transition:fly={{ y: 30, duration: 600 }}>
					<h2 class="text-center mb-6 text-3xl md:text-4xl">FREQUENTLY ASKED QUESTIONS</h2>
					<p class="text-center mb-12 opacity-80">
						Here are a few of the more common questions we come across. However, if you still can't
						find what you're looking for, get in touch with us and we'll do our best to provide you
						with the answers you're after.
					</p>
				</div>
			{/if}

			{#if faqItems}
				<div class="space-y-3" transition:fly={{ y: 30, duration: 600 }}>
					{#each faqs as faq, i (i)}
						<div class="collapse collapse-arrow bg-base-100 border border-base-300">
							<input type="radio" name="impactora-faq" checked={i === 0} />
							<div class="collapse-title font-semibold">{faq.question}</div>
							<div class="collapse-content text-sm">
								<p class="leading-relaxed opacity-80 whitespace-pre-line">{faq.answer}</p>
							</div>
						</div>
					{/each}
				</div>
			{/if}
		</div>
	</div>
</section>

<!-- Demo Request Form -->
<section
	id="contact-section"
	class="py-20 md:py-28 bg-base-200"
	use:trigger={(v) => {
		contactHeading = v;
		setTimeout(() => (contactForm = v), 150);
	}}
>
	<div class="container-custom">
		<div class="max-w-xl mx-auto">
			{#if contactHeading}
				<div class="text-center mb-12" transition:fly={{ y: 30, duration: 600 }}>
					<h2 class="mb-4 text-3xl md:text-4xl">REQUEST AN IMPACTORA DEMONSTRATION</h2>
					<p class="text-lg opacity-80">
						Simply fill out the form below and an Impactora representative will contact you to book
						your demonstration.
					</p>
				</div>
			{/if}
			{#if contactForm}
				<div transition:fly={{ y: 30, duration: 600 }}>
					<ContactForm prefix="[IMPACTORA Demo Request]" />
				</div>
			{/if}
		</div>
	</div>
</section>

<style>
	/* Override quote images for Impactora testimonials */
	.testimonial-title::before {
		background-image: url(/impactora-quote-top.webp);
	}
	.testimonial-title::after {
		background-image: url(/impactora-quote-bottom.webp);
	}
</style>
