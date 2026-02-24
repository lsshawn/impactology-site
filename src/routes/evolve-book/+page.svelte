<script lang="ts">
	import SEO from '$lib/components/SEO.svelte';
	import Icon from '@iconify/svelte';

	const clientLogos = [
		{ src: '/client-3.webp', alt: '' },
		{ src: '/client-14.webp', alt: '' },
		{ src: '/client-mu.webp', alt: '' },
		{ src: '/client-11.webp', alt: '' },
		{ src: '/client-rea.webp', alt: '' },
		{ src: '/client-6.webp', alt: '' }
	];

	const whyEvolvePoints = [
		'Business Partners hold a vital role as trusted confidants with deep technical expertise, and their impact is evident across all business functions.',
		'Initially tasked with providing advice, they are now true collaborating partners, ideally placed to lead and manage change in the changing world of work and business.',
		'Yet as the Business Partner role has changed, there has been no pathway to develop the competencies essential for their success'
	];
</script>

<SEO
	title="Evolve Book | Create an Impact | Impactology"
	description="Evolve Book shows you how to navigate service models and systems, build your commercial acumen and deliver value to your organisation. Contact us!"
	ogTitle="Evolve Book | Create an Impact | Impactology"
	ogDescription="Evolve Book shows you how to navigate service models and systems, build your commercial acumen and deliver value to your organisation. Contact us!"
	ogImage="https://impactology.com.au/evolve-book-cover.png"
	ogType="website"
	canonical="https://impactology.com.au/evolve-book"
	jsonLd={{
		'@context': 'https://schema.org',
		'@type': 'Book',
		name: 'EVOLVE: The Business Partnering Playbook',
		author: [
			{ '@type': 'Person', name: 'Rita Cincotta' },
			{ '@type': 'Person', name: 'George Liberopoulos' }
		],
		description:
			'EVOLVE shows you how to navigate service models and systems, build your commercial acumen and deliver value to your organisation.',
		publisher: {
			'@type': 'Organization',
			name: 'Impactology',
			url: 'https://impactology.com.au'
		},
		offers: {
			'@type': 'Offer',
			price: '24.95',
			priceCurrency: 'AUD',
			availability: 'https://schema.org/InStock'
		}
	}}
/>

<!-- Hero Section -->
<section class="pb-24 md:pb-32 pt-10">
	<div class="container-custom">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
			<div>
				<h2 class="text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight font-bold normal-case">
					If you are a current or aspiring Business Partner, this is the book for you!
				</h2>
				<p class="text-lg mb-8">
					Finally, a book that provides realistic and targeted advice to Business Partners
				</p>
				<a
					href="https://buy.stripe.com/fZu6oI8LvetG0kne05cQU02"
					target="_blank"
					rel="noopener noreferrer"
					class="btn btn-primary btn-lg uppercase font-bold inline-flex items-center gap-2"
				>
					BUY NOW
				</a>
			</div>

			<div class="flex justify-center lg:justify-end">
				<img src="/evolve-3d-cover.webp" alt="" class="w-full max-w-xl" loading="eager" />
			</div>
		</div>
	</div>
</section>

<!-- Companies We've Worked With -->
<section class="py-12 bg-base-200">
	<div class="container-custom">
		<h2 class="text-center text-2xl md:text-3xl mb-8 font-bold">Companies We've Worked With</h2>
		<div class="grid grid-cols-3 md:grid-cols-6 gap-8 items-center">
			{#each clientLogos as logo (logo.src)}
				<div class="flex items-center justify-center">
					<img src={logo.src} alt={logo.alt} class="max-h-16 w-auto object-contain" />
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Why EVOLVE Section -->
<section class="py-20 md:py-28 bg-base-100">
	<div class="container-custom">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
			<div>
				<h2 class="mb-8 font-bold text-4xl">Why EVOLVE?</h2>
				<ul class="space-y-6 mb-8">
					{#each whyEvolvePoints as point}
						<li class="flex items-start gap-4">
							<Icon icon="ph:check-circle-fill" class="text-primary text-2xl mt-1 shrink-0" />
							<p class="text-base leading-relaxed">{point}</p>
						</li>
					{/each}
				</ul>
				<p class="text-xl font-bold">Until now….</p>
			</div>

			<div class="flex justify-center lg:justify-end">
				<img
					src="/evolve-team-photo.webp"
					alt="Management Team"
					class="w-full max-w-md shadow-lg"
					loading="lazy"
				/>
			</div>
		</div>
	</div>
</section>

<!-- EVOLVE Description Section -->
<section class="py-20 md:py-28 bg-base-100">
	<div class="container-custom">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
			<div class="flex justify-center lg:justify-start">
				<img src="/evolve-photo-1.webp" alt="" class="w-full max-w-md shadow-lg" loading="lazy" />
			</div>

			<div class="prose prose-lg max-w-none">
				<p>
					EVOLVE shows you how to navigate service models and systems, build your commercial acumen
					and deliver value to your organisation.
				</p>
				<p>
					If you are a current or aspiring Business Partner – HR, Finance, Procurement, IT, Risk,
					Audit, Compliance, Legal, Marketing – this is the book for you.
				</p>
				<p><strong>EVOLVE is available in hard copy and e-book.</strong></p>
				<p><strong>E-book links further below.</strong></p>
			</div>
		</div>
	</div>
</section>

<!-- Buy Section -->
<section id="buy-now-form" class="section-gray py-20 md:py-28">
	<div class="container-custom">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
			<div class="flex justify-center lg:justify-start">
				<img src="/evolve-3d-cover.webp" alt="" class="w-full max-w-lg" loading="lazy" />
			</div>

			<div>
				<h2 class="mb-4 text-4xl font-bold">Buy Your Copy</h2>
				<p class="text-lg mb-2 opacity-80">Hard copy — AUD $24.95 + shipping</p>
				<a
					href="https://buy.stripe.com/fZu6oI8LvetG0kne05cQU02"
					target="_blank"
					rel="noopener noreferrer"
					class="btn btn-secondary btn-lg uppercase font-bold rounded-none w-full sm:w-auto sm:px-16 inline-flex items-center gap-2"
				>
					<Icon icon="ph:shopping-cart-simple-bold" class="text-xl" />
					BUY NOW
				</a>
			</div>
		</div>
	</div>
</section>

<!-- Purchase Buttons (yellow background) -->
<section class="section-yellow py-12">
	<div class="container-custom">
		<p class="text-xl mb-10 max-w-xl font-bold">
			If you're outside Australia or New Zealand, click on the US and UK Amazon links below to buy
			your hard copy book:
		</p>
		<div class="grid grid-cols-2 md:grid-cols-5 gap-6 items-center">
			<!-- Amazon USA -->
			<a
				href="https://www.amazon.com/dp/B09J8BXC59"
				target="_blank"
				rel="noopener noreferrer"
				class="flex items-center justify-center"
			>
				<img src="/amazon-usa.webp" alt="Buy on Amazon USA" class="w-full max-w-[140px] h-auto" />
			</a>

			<!-- Amazon UK -->
			<a
				href="https://www.amazon.co.uk/dp/B09J8BXC59"
				target="_blank"
				rel="noopener noreferrer"
				class="flex items-center justify-center"
			>
				<img src="/amazon-uk.webp" alt="Buy on Amazon UK" class="w-full max-w-[140px] h-auto" />
			</a>

			<!-- Amazon Kindle -->
			<a
				href="https://www.amazon.com.au/dp/B09J8BXC59"
				target="_blank"
				rel="noopener noreferrer"
				class="flex items-center justify-center"
			>
				<img
					src="/amazon-kindle.webp"
					alt="Buy on Amazon Kindle"
					class="w-full max-w-[140px] h-auto"
				/>
			</a>

			<!-- Apple iBooks (no link on live site) -->
			<div class="flex items-center justify-center">
				<img
					src="/ibooks-button.webp"
					alt="Available on Apple Books"
					class="w-full max-w-[140px] h-auto"
				/>
			</div>

			<!-- Google Play Books -->
			<a
				href="https://play.google.com/store/books/details/Rita_Cincotta_EVOLVE?id=XXRHEAAAQBAJ&hl=en&gl=US"
				target="_blank"
				rel="noopener noreferrer"
				class="flex items-center justify-center"
			>
				<img
					src="/google-play-books.webp"
					alt="Get it on Google Play Books"
					class="w-full max-w-[140px] h-auto"
				/>
			</a>
		</div>
	</div>
</section>
