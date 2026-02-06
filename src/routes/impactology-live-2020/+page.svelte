<script lang="ts">
	import SEO from '$lib/components/SEO.svelte';
	import Icon from '@iconify/svelte';
	import { resolve } from '$app/paths';

	interface Speaker {
		name: string;
		title: string;
		country?: string;
	}

	const featuredSpeakers: Speaker[] = [
		{ name: 'Dimitra Manis', title: 'Chief People Officer, S&P Global', country: 'US' },
		{ name: 'Mark Reading', title: 'Head of Foundation, Atlassian', country: 'AUS' },
		{
			name: 'Peter Shankman',
			title:
				'Dad, 5x Best Selling Author, Futurist, Keynoter, Pod Host #1 ADHD Podcast "Faster Than Normal"',
			country: 'US'
		}
	];

	const speakers: Speaker[] = [
		{ name: 'Stella Kasadigli', title: 'Co-Founder Women On Top, Writer' },
		{ name: 'Rana Hussain', title: 'Diversity & Inclusion Consultant, Writer, and Broadcaster' },
		{ name: 'Justin Robinson', title: 'Writer, Director, Filmmaker' },
		{
			name: 'Radek Sali',
			title: 'Executive Chairman and Founder, Light Warrior Group, previous CEO of Swisse Wellness'
		},
		{ name: 'Mark LeBusque', title: 'Founder & Director marklebusque.com' },
		{
			name: 'Sue Brierley',
			title: 'Author of Lioness, and Mother of Saroo Brierley, The Boy Known as Lion'
		},
		{
			name: "Lisa O'Neill",
			title: 'Motivational Leadership Expert & CEO, Thought Leaders Business School'
		},
		{
			name: 'Peter Shankman',
			title:
				'Dad, 5x Best Selling Author Futurist, Keynoter, Pod Host #1 ADHD Podcast "Faster Than Normal"'
		},
		{
			name: 'Bassam Aramin & Rami Elhanan',
			title: 'Parents Circle Families Forum, Bereaved Fathers'
		},
		{ name: 'Nick Bracks', title: 'Mental Health Advocate & Actor' },
		{ name: 'Jeremy Andrulis', title: 'CEO, Third Idea' },
		{ name: 'Harry Koras', title: 'Great Human' },
		{ name: 'Dr. Raman Attri', title: 'Performance Scientist, XpertX Research Forum' },
		{ name: 'Peter Parthimos', title: 'Founder & CEO – Futsal Oz' },
		{ name: 'Paul Harrison', title: 'Writer/Director, and Positive Psychology Therapist' },
		{ name: 'Col Fink', title: 'Partner + Digital Marketing Advisor, Zib Digital' },
		{ name: 'Richenda Vermeulen', title: 'Engagement Expert' },
		{ name: 'Mark Goodie', title: 'Founder and CEO, Ntegrity' },
		{ name: 'Kirsten Forgione', title: 'CEO – Merri Outreach Support Service Ltd.' },
		{ name: 'Harpreet Ghumman', title: 'Director & Psychologist, Myndly' },
		{ name: 'Ruby Lee', title: 'Intuitive Business Coach' },
		{ name: 'Joshua Ross', title: 'Co-CEO, Humanitix' },
		{ name: 'Rosie Thomas', title: 'CEO & Co-founder, Project Rockit' },
		{ name: 'Dimitra Manis', title: 'Chief People Officer, S&P Global' },
		{ name: 'Mark Reading', title: 'Head of Foundation at Atlassian' },
		{ name: 'Nataly Kogan', title: 'Founder of Happier, Inc. and Author of Happier Now' },
		{ name: 'Tasos Katsaounis', title: 'Founder/CEO, Bread Man Baking Co.' },
		{
			name: 'Roula Christie',
			title:
				'Radio Host "The Roula and Ryan Show" 104.1KRBE | "Weekends With Roula" – syndicated nationwide in the US'
		},
		{ name: 'Learning & Organization Development Leader', title: 'D&I Strategist, Executive Coach' }
	];
</script>

<SEO
	title="Impactology Live 2020 | Create an Impact | Impactology"
	description="Last November 2020, the Impactology Live 3-day event connected 33 global speakers that are having an impact with those wanting to be inspired to learn more."
	ogTitle="Impactology Live 2020 | Create an Impact | Impactology"
	ogDescription="Last November 2020, the Impactology Live 3-day event connected 33 global speakers that are having an impact with those wanting to be inspired to learn more."
	ogType="website"
	canonical="https://impactology.com.au/impactology-live-2020"
	jsonLd={{
		'@context': 'https://schema.org',
		'@type': 'Event',
		name: 'Impactology Live 2020',
		description:
			'A 3-day virtual event connecting 33 global speakers that are having impact with those wanting to be inspired to learn more and do more.',
		startDate: '2020-11-19',
		endDate: '2020-11-21',
		eventStatus: 'https://schema.org/EventScheduled',
		eventAttendanceMode: 'https://schema.org/OnlineEventAttendanceMode',
		organizer: {
			'@type': 'Organization',
			name: 'Impactology',
			url: 'https://impactology.com.au'
		},
		location: {
			'@type': 'VirtualLocation',
			url: 'https://impactology.com.au/impactology-live-2020'
		}
	}}
/>

<!-- Hero Section -->
<section class="section-yellow py-24 md:py-32">
	<div class="container-custom">
		<div class="max-w-4xl mx-auto text-center">
			<h2 class="text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight">
				OVER 3 DAYS.<br />30+ SPEAKERS.
			</h2>
			<p class="text-2xl md:text-4xl font-heading font-bold uppercase mb-8">NOVEMBER 19-21</p>
			<p class="text-lg md:text-xl mb-4">Watch one. Watch all. Up to you...</p>
			<p class="text-2xl md:text-3xl font-heading font-bold uppercase">
				ONE GLOBAL COMMUNITY MAKING IMPACT
			</p>
		</div>
	</div>
</section>

<!-- Intro Section -->
<section class="section-dark py-20 md:py-28">
	<div class="container-custom">
		<div class="max-w-3xl mx-auto text-center">
			<h2 class="text-3xl md:text-5xl mb-8">
				When ideas and inspiration collide, it creates IMPACT.
			</h2>
		</div>
	</div>
</section>

<!-- Why Now Section -->
<section class="py-20 md:py-28 bg-base-100">
	<div class="container-custom">
		<div class="max-w-4xl mx-auto">
			<h2 class="text-center mb-12">WHY NOW?</h2>
			<div class="prose prose-lg max-w-none text-center">
				<p class="text-lg mb-6">
					Impactology Live is an event designed to connect people that are having an impact with
					those wanting to be inspired to learn and do more.
				</p>
				<p class="text-lg mb-6">
					It has been a challenging period and we believe that every idea can create an impact and
					should be freely shared. Now is the time to create and connect a community of
					Impactologists.
				</p>
				<p class="text-lg">
					In November 2020, the Impactology Live 3-day event connected 33 global speakers that are
					having impact with those wanting to be inspired to learn more and do more.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- Featured Speakers Section -->
<section class="section-gray py-20 md:py-28">
	<div class="container-custom">
		<h2 class="text-center mb-16">FEATURED SPEAKERS</h2>
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			{#each featuredSpeakers as speaker (speaker.name)}
				<div class="text-center">
					<div
						class="w-32 h-32 mx-auto mb-6 bg-base-300 rounded-full flex items-center justify-center"
					>
						<Icon icon="ph:user-circle-fill" class="text-6xl text-base-content/50" />
					</div>
					<h3 class="text-xl md:text-2xl mb-2 normal-case">{speaker.name}</h3>
					{#if speaker.country}
						<span class="text-sm text-base-content/60 mb-2 block">({speaker.country})</span>
					{/if}
					<p class="text-sm text-base-content/80">{speaker.title}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Event Banner -->
<section class="section-yellow py-16">
	<div class="container-custom text-center">
		<h2 class="text-4xl md:text-6xl mb-4">IMPACTOLOGY LIVE 2020</h2>
		<p class="text-2xl md:text-3xl font-heading font-bold uppercase">
			ONE GLOBAL COMMUNITY MAKING IMPACT
		</p>
	</div>
</section>

<!-- All Speakers Section -->
<section class="py-20 md:py-28 bg-base-100">
	<div class="container-custom">
		<h2 class="text-center mb-4">IMPACTOLOGY LIVE 2020 TALKS</h2>
		<p class="text-center text-lg mb-16">When ideas and inspiration collide, it creates IMPACT.</p>

		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
			{#each speakers as speaker, i (i)}
				<div class="border border-base-300 p-6 hover:border-primary transition-colors">
					<div class="w-16 h-16 mb-4 bg-base-200 rounded-full flex items-center justify-center">
						<Icon icon="ph:user-fill" class="text-2xl text-base-content/50" />
					</div>
					<h3 class="text-lg font-heading font-bold uppercase mb-2">{speaker.name}</h3>
					<p class="text-sm text-base-content/70">{speaker.title}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Atlassian Foundation Section -->
<section class="section-dark py-20 md:py-28">
	<div class="container-custom">
		<div class="max-w-4xl mx-auto">
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
				<div>
					<div class="w-24 h-24 mb-6 bg-base-100/10 rounded-full flex items-center justify-center">
						<Icon icon="ph:buildings-fill" class="text-4xl" />
					</div>
					<h3 class="text-2xl md:text-3xl mb-4 normal-case">Mark Reading</h3>
					<p class="text-lg mb-2">Head of Foundation at Atlassian</p>
				</div>
				<div class="prose prose-invert">
					<p class="text-lg mb-4">The Atlassian Foundation focuses on two key areas:</p>
					<ol class="text-base space-y-4">
						<li>
							<strong>Education</strong> – helping to educate millions of disadvantaged youth, preparing
							them for the workforce of the future
						</li>
						<li>
							<strong>Pledge 1%</strong> – helping to bring out the best of business by growing the Pledge
							1% movement
						</li>
					</ol>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Stay Updated CTA -->
<section class="section-yellow py-20 md:py-28">
	<div class="container-custom text-center">
		<h2 class="text-3xl md:text-5xl mb-8">STAY IN THE LOOP</h2>
		<p class="text-lg mb-8 max-w-xl mx-auto">Receive news and information on upcoming events</p>
		<a
			href={resolve('/contact')}
			class="btn btn-secondary btn-lg uppercase font-bold rounded-none inline-flex items-center gap-2"
		>
			CONTACT US
			<Icon icon="ph:arrow-right-bold" class="text-lg" />
		</a>
	</div>
</section>
