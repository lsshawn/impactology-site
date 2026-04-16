<script lang="ts">
	import SEO from '$lib/components/SEO.svelte';
	import ContactForm from '$lib/components/ContactForm.svelte';

	const bookSections = [
		{
			id: 'impact-your-mind',
			title: 'IMPACT YOUR MIND',
			books: [
				{
					title: 'Faster Than Normal',
					image: '/resources/book-faster-than-normal.webp',
					link: 'https://www.amazon.com.au/Faster-Than-Normal-Turbocharge-Productivity/dp/B0763VCV8D/'
				},
				{
					title: 'Ikigai',
					image: '/resources/book-ikigai.webp',
					link: 'https://www.amazon.com.au/Ikigai-Japanese-Secret-Long-Happy/dp/0143130722'
				},
				{
					title: 'Thinking Fast and Slow',
					image: '/resources/book-thinking-fast-slow.webp',
					link: 'https://www.amazon.com/Thinking-Fast-Slow-Daniel-Kahneman/dp/0374533555'
				}
			]
		},
		{
			id: 'impact-your-body',
			title: 'IMPACT YOUR BODY',
			books: [
				{
					title: 'The Blue Zones',
					image: '/resources/book-blue-zones.webp',
					link: 'https://www.amazon.com.au/Blue-Zones-Second-Lessons-Longest-ebook/dp/B007WL6D60/'
				},
				{
					title: 'The 100 Year Lifestyle',
					image: '/resources/book-100-year-lifestyle.webp',
					link: 'https://www.amazon.com.au/100-Year-Lifestyle-Plaskers-Breakthrough-ebook/dp/B005UQRNHC/'
				},
				{
					title: 'The ONE Thing',
					image: '/resources/book-one-thing.webp',
					link: 'https://www.amazon.com.au/ONE-Thing-Surprisingly-Extraordinary-Results/dp/1885167776'
				}
			]
		},
		{
			id: 'impact-your-community',
			title: 'IMPACT YOUR COMMUNITY',
			books: [
				{
					title: 'How To Be An Antiracist',
					image: '/resources/book-antiracist.webp',
					link: 'https://www.amazon.com.au/How-to-Be-an-Antiracist/dp/B07WC5CNJ3/'
				},
				{
					title: 'The Blue Sweater',
					image: '/resources/book-blue-sweater.webp',
					link: 'https://www.amazon.com.au/Blue-Sweater-JACQUELINE-NOVOGRATZ/dp/1605294764'
				},
				{
					title: 'The Bystander Effect',
					image: '/resources/book-bystander-effect.webp',
					link: 'https://www.amazon.com.au/Bystander-Effect-Understanding-Psychology-Inaction/dp/0008361622'
				},
				{
					title: 'Lion: A Long Way Home',
					image: '/resources/book-lion.webp',
					link: 'https://www.amazon.com.au/Lion-Long-Home-Saroo-Brierley-ebook/dp/B00CHW1MT2/'
				}
			]
		},
		{
			id: 'impact-your-finances',
			title: 'IMPACT YOUR FINANCES',
			books: [
				{
					title: 'Spenditude',
					image: '/resources/book-spenditude.webp',
					link: 'https://www.amazon.com.au/Spenditude-Life-changing-Attitude-Paul-Gordon/dp/0730372030/'
				},
				{
					title: 'Kakebo',
					image: '/resources/book-kakebo.webp',
					link: 'https://www.amazon.com.au/Kakebo-Japanese-Art-Mindful-Spending/dp/0062857967/'
				},
				{
					title: 'Rich Dad Poor Dad',
					image: '/resources/book-rich-dad-poor-dad.webp',
					link: 'https://www.amazon.com.au/Rich-Dad-Poor-Teach-Middle/dp/1612680194/'
				}
			]
		},
		{
			id: 'impact-your-work',
			title: 'IMPACT YOUR WORK',
			books: [
				{
					title: 'Principles: Life and Work',
					image: '/resources/book-principles-dalio.webp',
					link: 'https://www.amazon.com.au/Principles-Life-Work-Ray-Dalio/dp/1501124021/'
				},
				{
					title: 'That Will Never Work',
					image: '/resources/book-that-will-never-work.webp',
					link: 'https://www.amazon.com.au/That-Will-Never-Work/dp/B07RDY4TLZ/'
				},
				{
					title: 'Wisdom At Work',
					image: '/resources/book-wisdom-at-work.webp',
					link: 'https://www.amazon.com.au/Wisdom-at-Work/dp/B07GY3KQLS/'
				},
				{
					title: 'Shoe Dog',
					image: '/resources/book-shoe-dog.webp',
					link: 'https://www.amazon.com.au/Shoe-Dog-Memoir-Creator-NIKE/dp/1471146723/'
				},
				{
					title: 'Atomic Habits',
					image: '/resources/book-atomic-habits.webp',
					link: 'https://www.amazon.com.au/Atomic-Habits-Proven-Build-Break/dp/B07J1LQDWD/'
				},
				{
					title: 'Reinventing the Organization',
					image: '/resources/book-reinventing-org.webp',
					link: 'https://www.amazon.com.au/Reinventing-Organization-Companies-Radically-Fast-Changing-ebook/dp/B07MW7QNYW/'
				}
			]
		}
	];

</script>

<SEO
	title="Resources | Create an Impact | Impactology"
	description="Explore our curated book recommendations to impact your mind, body, community, finances and work. Plus, discover the EVOLVE Business Partnering Playbook."
	ogTitle="Resources | Create an Impact | Impactology"
	ogDescription="Explore our curated book recommendations to impact your mind, body, community, finances and work."
	ogType="website"
	canonical="https://www.impactology.com.au/resources/"
/>

<!-- EVOLVE Book Hero Section -->
<section class="py-20 md:py-28">
	<div class="container-custom">
		<h1 class="sr-only">Business Partnering Resources</h1>
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
			<div>
				<h2 class="text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight font-bold normal-case">
					EVOLVE
				</h2>
				<p class="text-xl font-semibold mb-4">The Business Partnering Playbook</p>
				<p class="text-base leading-relaxed mb-4">
					Business Partners play an essential role as trusted advisors with a depth of technical
					expertise, impacting all areas of the business. Initially tactical advisors, Business
					Partners have evolved into collaborative leaders, adept at driving change in the fast
					evolving business landscape.
				</p>
				<p class="text-base leading-relaxed mb-4">
					Yet, a structured pathway to develop their crucial skills has been missing...
				</p>
				<p class="text-base leading-relaxed mb-8">
					Enter the solution. Whether you're a current or aspiring Business Partner in HR, Finance,
					IT, Procurement, Audit, Legal, Risk, Compliance or Marketing, this Playbook is for you and
					your team.
				</p>
				<p class="text-base leading-relaxed mb-8">
					EVOLVE shares practical strategies to navigate service models, enhance your business
					acumen, and how to amplify value for your stakeholders and organisation.
				</p>
				<a href="/evolve-book" class="btn btn-primary btn-rounded btn-lg uppercase font-bold">
					Buy Now
				</a>
			</div>
			<div class="flex justify-center lg:justify-end">
				<img
					src="/resources/book-3d-cover.webp"
					alt="EVOLVE - The Business Partnering Playbook"
					width="460"
					height="621"
					class="w-full max-w-sm md:max-w-lg"
					loading="eager"
					fetchpriority="high"
				/>
			</div>
		</div>
	</div>
</section>

<!-- Book Recommendation Sections -->
{#each bookSections as section, i (section.id)}
	<section class="py-16 {i % 2 === 0 ? 'section-gray' : 'bg-base-100'}">
		<div class="container-custom">
			<h2
				class="text-3xl md:text-4xl font-bold mb-10 border-b-4 border-secondary pb-4 inline-block"
			>
				{section.title}
			</h2>
			<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
				{#each section.books as book (book.title)}
					<a
						href={book.link}
						target="_blank"
						rel="noopener noreferrer"
						class="group flex flex-col items-center gap-3 hover:opacity-80 transition-opacity"
					>
						<div
							class="w-full aspect-square overflow-hidden shadow-md group-hover:shadow-lg transition-shadow"
						>
							<img
								src={book.image}
								alt={book.title}
								width="300"
								height="300"
								class="w-full h-full object-cover"
								loading="lazy"
							/>
						</div>
						<p class="text-sm text-center font-medium leading-tight">{book.title}</p>
						<span class="btn btn-primary btn-xs rounded-full font-bold uppercase px-4">
							Read It
						</span>
					</a>
				{/each}
			</div>
		</div>
	</section>
{/each}

<!-- Join The Community Section -->
<section id="join-community" class="py-20 section-yellow">
	<div class="container-custom">
		<div class="max-w-2xl mx-auto">
			<h2 class="text-3xl md:text-4xl font-bold mb-2 text-center normal-case">
				JOIN THE COMMUNITY
			</h2>
			<p class="text-center mb-10 text-base">
				Connect with like-minded people who are making an impact.
			</p>
			<ContactForm prefix="Resources page enquiry" />
		</div>
	</div>
</section>
