<script lang="ts">
	import SEO from '$lib/components/SEO.svelte';
	import { resolve } from '$app/paths';

	const featuredSpeakers = [
		{
			name: 'Dimitra Manis',
			country: 'US',
			title: 'Chief People Officer, S&P Global',
			photo: '/speaker-dimitra.jpg'
		},
		{
			name: 'Mark Reading',
			country: 'AUS',
			title: 'Head of Foundation, Atlassian',
			photo: '/speaker-mark-reading.jpg'
		},
		{
			name: 'Peter Shankman',
			country: 'US',
			title: "5x Best Selling Author, Entrepreneur, Host of 'Faster Than Normal' Podcast",
			photo: '/speaker-peter-shankman.jpg'
		}
	];

	const talks = [
		{
			name: 'Stella Kasadigli',
			title: 'Co-Founder Women On Top, Writer',
			videoId: 'dnDffwwthyE'
		},
		{
			name: 'Rana Hussain',
			title: 'Diversity & Inclusion Consultant, Writer, and Broadcaster',
			videoId: 'E9SHENWJaz0'
		},
		{
			name: 'Justin Robinson',
			title: 'Writer, Director, Filmmaker',
			videoId: 'r1kuY7PAEjk'
		},
		{
			name: 'Radek Sali',
			title: 'Executive Chairman and Founder, Light Warrior Group, previous CEO of Swisse Wellness',
			videoId: 'VHEMJoLiChs'
		},
		{
			name: 'Mark LeBusque',
			title: 'Founder & Director marklebusque.com',
			videoId: 'pKqlXj0tB9k'
		},
		{
			name: 'Sue Brierley',
			title: 'Author of Lioness, and Mother of Saroo Brierley, The Boy Known as Lion',
			videoId: 'M7Y3dQZBDG0'
		},
		{
			name: "Lisa O'Neill",
			title: 'Motivational Leadership Expert & CEO, Thought Leaders Business School',
			videoId: 'L9h8-1j8LLA'
		},
		{
			name: 'Peter Shankman',
			title:
				'Dad, 5x Best Selling Author Futurist, Keynoter, Pod Host #1 ADHD Podcast "Faster Than Normal"',
			videoId: 'sUxE8Qwf2Bo'
		},
		{
			name: 'Bassam Aramin & Rami Elhanan',
			title: 'Parents Circle Families Forum, Bereaved Fathers',
			videoId: 'OW3tar2qzPc'
		},
		{
			name: 'Nick Bracks',
			title: 'Mental Health Advocate & Actor',
			videoId: 'LE0piZd1-HM'
		},
		{
			name: 'Jeremy Andrulis',
			title: 'CEO, Third Idea',
			videoId: 'r1r9-iTeXGU'
		},
		{
			name: 'Harry Koras',
			title: 'Great Human',
			videoId: 'K5I2kZ0uxwc'
		},
		{
			name: 'Dr. Raman Attri',
			title: 'Performance Scientist, XpertX Research Forum',
			videoId: 'NqRMTRhJ4O8'
		},
		{
			name: 'Peter Parthimos',
			title: 'Founder & CEO – Futsal Oz',
			videoId: 'V_FiUsxTFKc'
		},
		{
			name: 'Duy Huynh & Marie McLeod',
			title: 'Writer/Director, and Positive Psychology Therapist',
			videoId: '-_H4mZwWRrg'
		},
		{
			name: 'Paul Harrison',
			title: 'Partner + Digital Marketing Advisor, Zib Digital',
			videoId: 'SsGIm8B9aAQ'
		},
		{
			name: 'Col Fink',
			title: 'Engagement Expert',
			videoId: 'prG4cQ5RqBY'
		},
		{
			name: 'Richenda Vermeulen',
			title: 'Founder and CEO, Ntegrity',
			videoId: 'f0iQIPzyp0E'
		},
		{
			name: 'Mark Goodie',
			title: 'CEO – Merri Outreach Support Service Ltd.',
			videoId: 'szNi5zqm2WI'
		},
		{
			name: 'Kirsten Forgione',
			title: 'Director & Psychologist, Myndly',
			videoId: 'qpq4cr0FQHM'
		},
		{
			name: 'Harpreet Ghumman',
			title: 'Learning & Organization Development Leader, D&I Strategist, Executive Coach',
			videoId: '_2q9eDVUXPA'
		},
		{
			name: 'Ruby Lee',
			title: 'Intuitive Business Coach',
			videoId: 'u--OQQAohIY'
		},
		{
			name: 'Joshua Ross',
			title: 'Co-CEO, Humanitix',
			videoId: 'gcs5ahD43d0'
		},
		{
			name: 'Rosie Thomas',
			title: 'CEO & Co-founder, Project Rockit',
			videoId: 'C47WZsagw6Y'
		},
		{
			name: 'Dimitra Manis',
			title: 'Chief People Officer, S&P Global',
			videoId: '37-iTS0CbOI'
		},
		{
			name: 'Mark Reading',
			title: 'Head of Foundation at Atlassian',
			videoId: '9k9gAGmuOw4'
		},
		{
			name: 'Nataly Kogan',
			title: 'Founder of Happier, Inc. and Author of Happier Now',
			videoId: 'NrBHCNdBrn0'
		},
		{
			name: 'Tasos Katsaounis',
			title: 'Founder/CEO, Bread Man Baking Co.',
			videoId: 'o6TgVLED8Qc'
		},
		{
			name: 'Roula Christie',
			title:
				"Radio Host 'The Roula and Ryan Show' 104.1KRBE | 'Weekends With Roula' – syndicated nationwide in the US",
			videoId: '_HRR1X7xL8E'
		},
		{
			name: 'Bassam Aramin & Rami Elhanan',
			title: 'Parents Circle Families Forum, Bereaved Fathers',
			videoId: 'kspQVR9JNvo'
		}
	];

	const testimonials = [
		{
			quote:
				'The program was very beneficial and the breadth of content offered so many different, relevant and important concepts.',
			name: 'Sarah',
			role: 'Business Partner'
		},
		{
			quote:
				'Developing this network to lean on for support and advice has been invaluable. The program shifted my perspective on what it means to be a highly effective business partner and leader.',
			name: 'Jordan',
			role: 'Head of Sales & Marketing'
		},
		{
			quote:
				"As a Procurement lead, I've partnered with many leaders over the years but this program provided me the injection of energy and clarity on what skills I need to refine.",
			name: 'Michael',
			role: 'Procurement Manager'
		},
		{
			quote:
				'The Program offered a great chance to view the value that a business partner can offer and strategies to engage with stakeholders more effectively.',
			name: 'Samuel',
			role: 'Finance Business Partner'
		},
		{
			quote:
				'Such a relevant program, helping me further develop into my role. I really enjoyed the mix of skills of participants in the session. Thank you!',
			name: 'Craig',
			role: 'HR Business Partner'
		},
		{
			quote:
				'I loved the interaction and activities. It was refreshing and different to other programs. Very engaging.',
			name: 'Katrina',
			role: 'HR Business Partner'
		},
		{
			quote:
				'This experience has prompted me to open discussions with business partners from other disciplines across the business.',
			name: 'Richard',
			role: 'Finance Business Partner'
		},
		{
			quote:
				'I loved the session and learning new models. I Loved the sense of team that was developed and the community feel. 10/10.',
			name: 'Joe',
			role: 'IT Business Partner'
		},
		{
			quote:
				"I'm new to my BP role. This program has given me a great insight into what I need to focus on for success in my role. Thank you!",
			name: 'Katherine',
			role: 'HR Business Partner'
		},
		{
			quote:
				'It was great to see content that is practical and can be applied in contrast to theoretical. You pulled together so many different, relevant, and important concepts and frameworks and offered it into one package!',
			name: 'Anthony',
			role: 'HR Business Partner'
		},
		{
			quote:
				'Really insightful, reflective opportunity to discuss and think about now, and where to take my role. 9/10. I never give 10/10 – sorry! :)',
			name: 'Trish',
			role: 'Finance Business Partner'
		},
		{
			quote:
				"I wasn't sure if this training would be for me as I am not in a BP role, however, after the session I feel more at ease at the idea of taking the next step into a BP role.",
			name: 'Alex',
			role: 'HR Business Advisor'
		},
		{
			quote:
				'I genuinely enjoyed this program. The models are so applicable and will be great tools for me to use in my practice and path to a HRBP.',
			name: 'David',
			role: 'HR Business Advisor'
		}
	];

	let currentTestimonial = $state(0);

	function prev() {
		currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
	}
	function next() {
		currentTestimonial = (currentTestimonial + 1) % testimonials.length;
	}
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

<!-- Title Banner -->
<section
	class="section-yellow py-16 min-h-[60vh] hero"
	style="background-image: url('/geometric-pattern.jpg'); background-size: cover; background-position: center; background-blend-mode: multiply;"
>
	<div class="container-custom text-center">
		<h2 class="text-4xl md:text-6xl mb-8 font-bold">IMPACTOLOGY LIVE 2020</h2>
		<h2 class="text-2xl md:text-3xl mb-4 font-bold">ONE GLOBAL COMMUNITY MAKING IMPACT</h2>
		<p class="text-xl">When ideas and inspiration collide, it creates IMPACT.</p>
	</div>
</section>

<!-- What Was Impactology Live 2020 -->
<section class="py-20 md:py-28 bg-base-100">
	<div class="container-custom">
		<div class="max-w-3xl mx-auto text-center">
			<h4 class="text-2xl md:text-5xl font-bold mb-8">WHAT WAS IMPACTOLOGY LIVE 2020?</h4>
			<p class="text-lg mb-6">
				It has been a challenging period and we believe that every idea can create an impact and
				should be freely shared, now is the time to create and connect a community of
				Impactologists.
			</p>
			<p class="text-lg mb-10">
				In November 2020, the Impactology Live 3-day event connected 33 global speakers that are
				having impact with those wanting to be inspired to learn more and do more.
			</p>
			<a href="#videos" class="btn btn-secondary btn-lg uppercase font-bold rounded-none">
				WATCH THE VIDEOS
			</a>
		</div>
	</div>
</section>

<!-- Talks Section -->
<section id="videos" class="py-20 md:py-28 bg-base-200">
	<div class="container-custom">
		<h2 class="text-center mb-16 font-bold text-3xl md:text-6xl">IMPACTOLOGY LIVE 2020 TALKS</h2>
		<div class="grid grid-cols-1 md:grid-cols-3 gap-10">
			{#each talks as talk}
				<div class="flex flex-col gap-4">
					<h3 class="text-xl font-bold normal-case">{talk.name}</h3>
					<p class="text-sm text-base-content/70">{talk.title}</p>
					<div class="aspect-video w-full">
						<iframe
							src="https://www.youtube-nocookie.com/embed/{talk.videoId}"
							title="{talk.name} — Impactology Live 2020"
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							allowfullscreen
							class="w-full h-full"
							loading="lazy"
						></iframe>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Testimonials -->
<section class="section-gray py-20 md:py-28">
	<div class="container-custom">
		<div class="max-w-3xl mx-auto">
			<h4 class="text-2xl md:text-3xl font-bold text-center mb-12">WHAT THE PARTICIPANTS SAID</h4>

			<div class="relative text-center px-12">
				<button
					onclick={prev}
					class="absolute left-0 top-1/2 -translate-y-1/2 btn btn-ghost btn-circle"
					aria-label="Previous testimonial"
				>
					&#8592;
				</button>

				<blockquote class="text-lg italic mb-6">
					"{testimonials[currentTestimonial].quote}"
				</blockquote>
				<p class="font-bold">
					{testimonials[currentTestimonial].name},
					<span class="font-normal">{testimonials[currentTestimonial].role}</span>
				</p>

				<button
					onclick={next}
					class="absolute right-0 top-1/2 -translate-y-1/2 btn btn-ghost btn-circle"
					aria-label="Next testimonial"
				>
					&#8594;
				</button>
			</div>

			<div class="flex justify-center gap-2 mt-8">
				{#each testimonials as _, i}
					<button
						onclick={() => (currentTestimonial = i)}
						class="w-2 h-2 rounded-full transition-colors {i === currentTestimonial
							? 'bg-secondary'
							: 'bg-base-300 border'}"
						aria-label="Go to testimonial {i + 1}"
					></button>
				{/each}
			</div>
		</div>
	</div>
</section>
