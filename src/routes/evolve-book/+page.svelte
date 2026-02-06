<script lang="ts">
	import SEO from '$lib/components/SEO.svelte';
	import Icon from '@iconify/svelte';
	import { resolve } from '$app/paths';

	const clientLogos = [
		'/client-3.png',
		'/client-14.png',
		'/client-mu.png',
		'/client-11.png',
		'/client-6.png'
	];

	const whyEvolvePoints = [
		'Business Partners hold a vital role as trusted confidants with deep technical expertise, and their impact is evident across all business functions.',
		'Initially tasked with providing advice, they are now true collaborating partners, ideally placed to lead and manage change in the changing world of work and business.',
		'Yet as the Business Partner role has changed, there has been no pathway to develop the competencies essential for their success.'
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
<section class="section-yellow py-24 md:py-32">
	<div class="container-custom">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
			<div>
				<h2 class="text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
					IF YOU ARE A CURRENT OR ASPIRING BUSINESS PARTNER, THIS IS THE BOOK FOR YOU!
				</h2>
				<p class="text-lg mb-8">
					Finally, a book that provides realistic and targeted advice to Business Partners.
				</p>
				<a
					href="#buy-now-form"
					class="btn btn-secondary btn-lg uppercase font-bold rounded-none inline-flex items-center gap-2"
				>
					BUY NOW
					<Icon icon="ph:arrow-down-bold" class="text-lg" />
				</a>
			</div>

			<div class="flex justify-center lg:justify-end">
				<img
					src="/evolve-book-cover.png"
					alt="EVOLVE: The Business Partnering Playbook by Rita Cincotta and George Liberopoulos"
					class="w-full max-w-sm shadow-2xl"
					loading="eager"
					onerror={(e) => {
						const img = e.currentTarget as HTMLImageElement;
						img.src = '/icon2.png';
						img.classList.add('p-16', 'bg-base-200');
					}}
				/>
			</div>
		</div>
	</div>
</section>

<!-- Companies We've Worked With -->
<section class="py-12 bg-base-100">
	<div class="container-custom">
		<h2 class="text-center text-2xl md:text-3xl mb-8">COMPANIES WE'VE WORKED WITH</h2>
		<div class="flex flex-wrap justify-center items-center gap-8 md:gap-12">
			{#each clientLogos as logo, i (i)}
				<div class="flex items-center justify-center">
					<img src={logo} alt="Client logo" class="max-h-12 w-auto object-contain opacity-70" />
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
				<h2 class="mb-8">WHY EVOLVE?</h2>
				<ul class="space-y-6 mb-8">
					{#each whyEvolvePoints as point, i (i)}
						<li class="flex items-start gap-4">
							<Icon icon="ph:check-circle-fill" class="text-primary text-2xl mt-1 shrink-0" />
							<p class="text-base leading-relaxed">{point}</p>
						</li>
					{/each}
				</ul>
				<p class="text-xl font-bold mb-8">Until now….</p>

				<div class="prose prose-lg max-w-none">
					<p>
						EVOLVE shows you how to navigate service models and systems, build your commercial
						acumen and deliver value to your organisation.
					</p>
					<p>
						If you are a current or aspiring Business Partner – HR, Finance, Procurement, IT, Risk,
						Audit, Compliance, Legal, Marketing – this is the book for you.
					</p>
					<p class="font-bold">EVOLVE is available in hard copy and e-book.</p>
					<p class="font-bold">E-book links further below.</p>
				</div>
			</div>

			<div class="flex flex-col items-center gap-8">
				<img
					src="/evolve-team-photo.jpg"
					alt="Management Team"
					class="w-full max-w-md shadow-lg"
					loading="lazy"
					onerror={(e) => {
						(e.currentTarget as HTMLImageElement).style.display = 'none';
					}}
				/>
				<img
					src="/evolve-book-cover.png"
					alt="EVOLVE Book Cover"
					class="w-full max-w-xs shadow-xl"
					loading="lazy"
					onerror={(e) => {
						const img = e.currentTarget as HTMLImageElement;
						img.src = '/icon2.png';
						img.classList.add('p-12', 'bg-base-200');
					}}
				/>
			</div>
		</div>
	</div>
</section>

<!-- Order Form Section -->
<section id="buy-now-form" class="section-gray py-20 md:py-28">
	<div class="container-custom">
		<div class="max-w-2xl mx-auto">
			<h2 class="text-center mb-12">ORDER FORM</h2>

			<div class="bg-base-100 p-8 md:p-12 shadow-sm">
				<p class="text-center mb-8 text-lg">
					<strong>EVOLVE Price:</strong> AUD $24.95 + shipping
				</p>

				<div class="text-center mb-8">
					<p class="text-sm mb-4">
						For orders within Australia and New Zealand, please contact us directly:
					</p>
					<a
						href={resolve('/contact')}
						class="btn btn-primary btn-lg uppercase font-bold rounded-none inline-flex items-center gap-2"
					>
						CONTACT US TO ORDER
						<Icon icon="ph:arrow-right-bold" class="text-lg" />
					</a>
				</div>

				<div class="divider">OR</div>

				<p class="text-center text-sm mb-4">Purchase directly from our retail partners below</p>
			</div>
		</div>
	</div>
</section>

<!-- International Purchase Options -->
<section class="py-20 md:py-28 bg-base-100">
	<div class="container-custom">
		<div class="max-w-4xl mx-auto text-center">
			<h2 class="text-2xl md:text-3xl mb-8">
				IF YOU'RE OUTSIDE AUSTRALIA OR NEW ZEALAND, CLICK ON THE US AND UK AMAZON LINKS BELOW TO BUY
				YOUR HARD COPY BOOK:
			</h2>

			<div class="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
				<!-- Amazon USA -->
				<a
					href="https://www.amazon.com/dp/B09J8BXC59"
					target="_blank"
					rel="noopener noreferrer"
					class="flex flex-col items-center p-6 border border-base-300 hover:border-primary transition-colors group"
				>
					<img
						src="/amazon-usa.png"
						alt="Buy on Amazon USA"
						class="h-12 w-auto object-contain mb-3"
						onerror={(e) => {
							const img = e.currentTarget as HTMLImageElement;
							img.style.display = 'none';
							const parent = img.parentElement;
							if (parent) {
								const text = document.createElement('span');
								text.className = 'text-lg font-bold';
								text.textContent = 'Amazon USA';
								parent.insertBefore(text, img.nextSibling);
							}
						}}
					/>
					<span class="text-sm group-hover:text-primary transition-colors">Amazon.com</span>
				</a>

				<!-- Amazon UK -->
				<a
					href="https://www.amazon.co.uk/dp/B09J8BXC59"
					target="_blank"
					rel="noopener noreferrer"
					class="flex flex-col items-center p-6 border border-base-300 hover:border-primary transition-colors group"
				>
					<img
						src="/amazon-uk.png"
						alt="Buy on Amazon UK"
						class="h-12 w-auto object-contain mb-3"
						onerror={(e) => {
							const img = e.currentTarget as HTMLImageElement;
							img.style.display = 'none';
							const parent = img.parentElement;
							if (parent) {
								const text = document.createElement('span');
								text.className = 'text-lg font-bold';
								text.textContent = 'Amazon UK';
								parent.insertBefore(text, img.nextSibling);
							}
						}}
					/>
					<span class="text-sm group-hover:text-primary transition-colors">Amazon.co.uk</span>
				</a>

				<!-- Amazon AU -->
				<a
					href="https://www.amazon.com.au/dp/B09J8BXC59"
					target="_blank"
					rel="noopener noreferrer"
					class="flex flex-col items-center p-6 border border-base-300 hover:border-primary transition-colors group"
				>
					<img
						src="/amazon-kindle.png"
						alt="Buy on Amazon Australia"
						class="h-12 w-auto object-contain mb-3"
						onerror={(e) => {
							const img = e.currentTarget as HTMLImageElement;
							img.style.display = 'none';
							const parent = img.parentElement;
							if (parent) {
								const text = document.createElement('span');
								text.className = 'text-lg font-bold';
								text.textContent = 'Amazon AU';
								parent.insertBefore(text, img.nextSibling);
							}
						}}
					/>
					<span class="text-sm group-hover:text-primary transition-colors">Amazon.com.au</span>
				</a>
			</div>

			<h3 class="text-xl md:text-2xl mb-8">E-BOOK OPTIONS</h3>

			<div class="grid grid-cols-2 md:grid-cols-2 gap-6 max-w-lg mx-auto">
				<!-- Apple iBooks -->
				<a
					href="https://books.apple.com/us/book/evolve/id1588747073"
					target="_blank"
					rel="noopener noreferrer"
					class="flex flex-col items-center p-6 border border-base-300 hover:border-primary transition-colors group"
				>
					<Icon icon="ph:apple-logo-fill" class="text-4xl mb-3" />
					<span class="text-sm group-hover:text-primary transition-colors">Apple Books</span>
				</a>

				<!-- Google Play Books -->
				<a
					href="https://play.google.com/store/books/details/Rita_Cincotta_EVOLVE?id=XXRHEAAAQBAJ&hl=en&gl=US"
					target="_blank"
					rel="noopener noreferrer"
					class="flex flex-col items-center p-6 border border-base-300 hover:border-primary transition-colors group"
				>
					<Icon icon="ph:google-play-logo-fill" class="text-4xl mb-3" />
					<span class="text-sm group-hover:text-primary transition-colors">Google Play</span>
				</a>
			</div>
		</div>
	</div>
</section>

<!-- Final CTA -->
<section class="section-yellow py-16">
	<div class="container-custom text-center">
		<h2 class="text-3xl md:text-4xl mb-6">READY TO EVOLVE YOUR BUSINESS PARTNERING SKILLS?</h2>
		<p class="text-lg mb-8 max-w-2xl mx-auto">
			Get your copy of EVOLVE today and discover the competencies essential for Business Partner
			success.
		</p>
		<div class="flex flex-col sm:flex-row gap-4 justify-center">
			<a href="#buy-now-form" class="btn btn-secondary btn-lg uppercase font-bold rounded-none">
				ORDER YOUR COPY
			</a>
			<a
				href={resolve('/contact')}
				class="btn btn-outline border-current text-current btn-lg uppercase font-bold rounded-none hover:bg-secondary hover:text-secondary-content hover:border-secondary"
			>
				ASK A QUESTION
			</a>
		</div>
	</div>
</section>
