<script lang="ts">
	import SEO from '$lib/components/SEO.svelte';
	import { resolve } from '$app/paths';

	const featuredSpeakers = [
		{
			name: 'Dimitra Manis',
			country: 'US',
			title: 'Chief People Officer, S&P Global',
			photo: '/speaker-dimitra.webp'
		},
		{
			name: 'Mark Reading',
			country: 'AUS',
			title: 'Head of Foundation, Atlassian',
			photo: '/speaker-mark-reading.webp'
		},
		{
			name: 'Peter Shankman',
			country: 'US',
			title: "5x Best Selling Author, Entrepreneur, Host of 'Faster Than Normal' Podcast",
			photo: '/speaker-peter-shankman.webp'
		}
	];

	const talks: { name: string; title: string; videoId: string; impactLabel?: string; impact?: string }[] = [
		{
			name: 'Stella Kasadigli',
			title: 'Co-Founder Women On Top, Writer',
			videoId: 'dnDffwwthyE',
			impactLabel: 'What Impact Means to Me',
			impact: 'Impact to me is like watching paint dry – you think nothing is changing, until you eventually see you\'ve got a picture on the wall and a room where anybody has the chance to make something joyful and new.'
		},
		{
			name: 'Rana Hussain',
			title: 'Diversity & Inclusion Consultant, Writer, and Broadcaster',
			videoId: 'E9SHENWJaz0',
			impactLabel: 'What Impact Means to Me',
			impact: 'When you encounter something or someone that diverts you off the course you were on. However big or small the diversion, you are changed. We all have the ability to have an impact and the power of this is profound. Whether we choose to use that ability and how we use it is the true test.'
		},
		{
			name: 'Justin Robinson',
			title: 'Writer, Director, Filmmaker',
			videoId: 'r1kuY7PAEjk',
			impactLabel: 'What Impact Means to Me',
			impact: 'To make an impact, at least for me, is to connect with a fellow heart. My life as a filmmaker is partly an attempt to understand humanity, along with sharing what I\'ve understood so far.'
		},
		{
			name: 'Radek Sali',
			title: 'Executive Chairman and Founder, Light Warrior Group, previous CEO of Swisse Wellness.',
			videoId: 'VHEMJoLiChs',
			impactLabel: 'What Impact Means to Me',
			impact: 'Impact to me is like watching paint dry – you think nothing is changing, until you eventually see you\'ve got a picture on the wall and a room where anybody has the chance to make something joyful and new.'
		},
		{
			name: 'Mark LeBusque',
			title: 'Founder & Director marklebusque.com',
			videoId: 'pKqlXj0tB9k',
			impactLabel: 'What Impact Means to Me',
			impact: 'Impact means challenging people to reimagine how human work could be. We don\'t learn to be human out of a textbook.'
		},
		{
			name: 'Sue Brierley',
			title: 'Author of Lioness, and Mother of Saroo Brierley, The Boy Known as Lion',
			videoId: 'M7Y3dQZBDG0',
			impactLabel: 'What Impact Means to Me',
			impact: 'I consider myself part of a bigger global family, particularly in relation to the other women on this planet…I\'d like to think my sisters in life, would look after children that have no parents and they would look after their sisters children they cannot themselves. I\'m hoping my sisters globally, will step up (with me) and do this better.'
		},
		{
			name: "Lisa O'Neill",
			title: "Motivational Leadership Expert, Lisa O'Neill & CEO, Thought Leaders Business School",
			videoId: 'L9h8-1j8LLA',
			impactLabel: 'What Impact Means to Me'
		},
		{
			name: 'Peter Shankman',
			title: 'Dad, 5x Best Selling Author Futurist, Keynoter, Pod Host #1 ADHD Podcast "Faster Than Normal"',
			videoId: 'sUxE8Qwf2Bo',
			impactLabel: 'What Impact Mean to Me',
			impact: 'Knowing the five keywords to hold a consumer\'s attention. Understanding how to create content that your audience simply must share. Knowing how to get your audience to do your PR, sales, and marketing for you!'
		},
		{
			name: 'Bassam Aramin & Rami Elhanan',
			title: 'Parents Circle Families Forum, Bereaved Fathers',
			videoId: 'OW3tar2qzPc',
			impactLabel: 'What Impact Means to Us'
		},
		{
			name: 'Nick Bracks',
			title: 'Mental Health Advocate & Actor',
			videoId: 'LE0piZd1-HM',
			impactLabel: 'What Impact Means to Me',
			impact: 'Doing things daily to improve the lives of others. It is the small daily things that might help those around us. We can all make an impact.'
		},
		{
			name: 'Jeremy Andrulis',
			title: 'CEO, Third Idea',
			videoId: 'r1r9-iTeXGU',
			impactLabel: 'What Impact Means to Me',
			impact: 'Individuals are typically judged by the totality of the decisions they make – but the lasting impact of decisions is often not the actual decision, it is \'how\' the decision was made. A meaningful decision making experience focuses on how decisions are made AND gaining the commitment of people.'
		},
		{
			name: 'Harry Koras',
			title: 'Great Human',
			videoId: 'K5I2kZ0uxwc',
			impactLabel: 'What Impact Means to Me',
			impact: 'An opportunity to tune into positivity and receive amazing information to grant you the courage to put yourself back together again and keep moving forward!'
		},
		{
			name: 'Dr. Raman Attri',
			title: 'Performance Scientist, XpertX Research Forum',
			videoId: 'NqRMTRhJ4O8',
			impactLabel: 'What Impact Means to Me',
			impact: 'The impact is to spark renewed clarity among people – clarity about themselves, their ideas, their strengths, their limitations, their choices and their paths in the world of chaos, uncertainty and noise. Once people have that clarity, they ignite a new chain of ideas and inspire more difference makers.'
		},
		{
			name: 'Peter Parthimos',
			title: 'Founder & CEO – Futsal Oz',
			videoId: 'V_FiUsxTFKc',
			impactLabel: 'What Impact Means to Me'
		},
		{
			name: 'Duy Huynh & Marie McLeod',
			title: 'Writer/Director, and Positive Psychology Therapist',
			videoId: '-_H4mZwWRrg',
			impact: 'What Impact Mean to Me (Duy Huynh): As a refugee, my earliest memories of life was upheaval, violence and trauma at sea. As I watch those I care about struggle, I\'ve always been optimistic that there is a way through the darkness, to learn about what makes us resilient and to find the secret formula to happiness. | What Impact Means to Me (Marie McLeod): Impact is my \'Ikigai\', my reason for being. It gets me up each day with a spring in my step, making my life whole. To impact those who struggle, is a gift – the more I give, the more I get. I\'m pact full, when I\'m impactful.'
		},
		{
			name: 'Paul Harrison',
			title: 'Partner + Digital Marketing Advisor, Zib Digital',
			videoId: 'SsGIm8B9aAQ',
			impactLabel: 'What Impact Means to Me'
		},
		{
			name: 'Col Fink',
			title: 'Engagement Expert',
			videoId: 'prG4cQ5RqBY',
			impactLabel: 'What Impact Mean to Me',
			impact: 'One person can make a mark, but it takes a tribe to create real impact. The best way to create massive positive change in the world is to create places and spaces where other people thrive. Engagement is the ultimate impact multiplier.'
		},
		{
			name: 'Richenda Vermeulen',
			title: 'Founder and CEO, Ntegrity',
			videoId: 'f0iQIPzyp0E',
			impactLabel: 'What Impact Means to Me',
			impact: 'Impact isn\'t a measure, it\'s a way of operating in the world to make it better. Your people, your office, your profits…even your marketing have the potential to create change.'
		},
		{
			name: 'Mark Goodie',
			title: 'CEO – Merri Outreach Support Service Ltd.',
			videoId: 'szNi5zqm2WI',
			impactLabel: 'What Impact Means to Me',
			impact: 'Treat all people equally by ensuring they feel welcomed, connected, involved, secure and supported.'
		},
		{
			name: 'Kirsten Forgione',
			title: 'Director & Psychologist, Myndly',
			videoId: 'qpq4cr0FQHM',
			impactLabel: 'What Impact Means To Me',
			impact: 'The definition of impact, as stated in the English dictionary, is "coming into forcible contact with an object", and "having marked effect or influence". And whilst this definition, in my view, captures the essence of impact – that is, to effect or influence – I believe it overlooks two important ideas, that capture what impact means to me. Specifically, that; a small gesture can also have marked effect or influence. And that having an impact on someone, means effecting or influencing them to think, feel or do something differently (or in a way they had not thought of before).'
		},
		{
			name: 'Harpreet Ghumman',
			title: 'Learning & Organization Development Leader, D&I Strategist, Executive coach',
			videoId: '_2q9eDVUXPA',
			impactLabel: 'What Impact Means to Me',
			impact: 'Free flowing waves touching each other, causing numerous reflections to build up – leaving one in a better space than before at mind, body and soul level that triggers an action that can or cannot be measured. And paving the way for others to soak in the waves & reflect.'
		},
		{
			name: 'Ruby Lee',
			title: 'Intuitive Business Coach',
			videoId: 'u--OQQAohIY',
			impactLabel: 'What Impact Means to Me',
			impact: 'To make an impact I believe you need to be living your values and your purpose work. For me, I feel I make the biggest impact when I truly connect with people, when I feel free to create, and when I am having fun in my business.'
		},
		{
			name: 'Joshua Ross',
			title: 'Co-CEO, Humanitix',
			videoId: 'gcs5ahD43d0',
			impactLabel: 'What Impact Means to Me',
			impact: 'For me impact is a change in the world\'s trajectory, at any level, for the better of the human condition or natural environment. I think the greatest and rarest impact is when one creates a shift in the moral landscape. History is an evolution of morality over time, what we do today (hopefully) will look terrible in 500 years.'
		},
		{
			name: 'Rosie Thomas',
			title: 'CEO & Co-founder, Project Rockit',
			videoId: 'C47WZsagw6Y',
			impactLabel: 'What Impact Means to Me'
		},
		{
			name: 'Dimitra Manis',
			title: 'Chief People Officer, S&P Global',
			videoId: '37-iTS0CbOI',
			impactLabel: 'What Impact Means to Me'
		},
		{
			name: 'Mark Reading',
			title: 'Head of Foundation at Atlassian',
			videoId: '9k9gAGmuOw4',
			impactLabel: 'What Impact Means to Me',
			impact: 'The Atlassian Foundation focuses on two strategic goals: 1. Education – helping to educate millions of disadvantaged youth, preparing them for the workforce of the future; and 2. Pledge 1% – helping to bring out the best of business by growing the Pledge 1% movement.'
		},
		{
			name: 'Nataly Kogan',
			title: 'Founder of Happier, Inc. and Author of Happier Now',
			videoId: 'NrBHCNdBrn0',
			impactLabel: 'What Impact Means to Me'
		},
		{
			name: 'Tasos Katsaounis',
			title: 'Founder/CEO, Bread Man Baking Co.',
			videoId: 'o6TgVLED8Qc',
			impactLabel: 'What Impact Means to Me'
		},
		{
			name: 'Roula Christie',
			title: "Radio Host 'The Roula and Ryan Show' 104.1KRBE | 'Weekends With Roula' – syndicated nationwide in the US.",
			videoId: '_HRR1X7xL8E',
			impactLabel: 'What Impact Means to Me',
			impact: 'I really do love what I do every morning. I absolutely relate to the struggle of life through the listeners\' eyes. Knowing that I help wake people up and get them through their day with smiles on their faces is such a humbling and rewarding feeling. I am all about Family and helping people feel like a part of one. It seems like every day on the radio I meet someone new who moves me, surprises me, and challenges me.'
		},
		{
			name: 'Bassam Aramin & Rami Elhanan',
			title: 'Parents Circle Families Forum, Bereaved Fathers',
			videoId: 'kspQVR9JNvo',
			impactLabel: 'What Impact Means to Us'
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
	style="background-image: url('/geometric-pattern.webp'); background-size: cover; background-position: center; background-blend-mode: multiply;"
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
				<div class="flex flex-col gap-3">
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
					<h3 class="text-xl font-bold normal-case mt-1">{talk.name}</h3>
					<p class="text-sm text-base-content/70">{talk.title}</p>
					{#if talk.impactLabel && talk.impact}
						<p class="text-sm"><strong>{talk.impactLabel}:</strong> "{talk.impact}"</p>
					{/if}
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
