<script lang="ts">
	import SEO from '$lib/components/SEO.svelte';
	import Icon from '@iconify/svelte';
	import { resolve } from '$app/paths';

	const clientLogos = [
		{ src: '/client-3.png', alt: '' },
		{ src: '/client-14.png', alt: '' },
		{ src: '/client-mu.png', alt: '' },
		{ src: '/client-11.png', alt: '' },
		{ src: '/client-rea.png', alt: '' },
		{ src: '/client-6.png', alt: '' }
	];

	const whyEvolvePoints = [
		'Business Partners hold a vital role as trusted confidants with deep technical expertise, and their impact is evident across all business functions.',
		'Initially tasked with providing advice, they are now true collaborating partners, ideally placed to lead and manage change in the changing world of work and business.',
		'Yet as the Business Partner role has changed, there has been no pathway to develop the competencies essential for their success'
	];

	// Order form state
	let firstName = $state('');
	let lastName = $state('');
	let email = $state('');
	let phone = $state('');
	let address1 = $state('');
	let address2 = $state('');
	let city = $state('');
	let stateField = $state('');
	let postcode = $state('');
	let quantity = $state(1);
	let shipping = $state<'australia' | 'newzealand'>('australia');
	let cardName = $state('');
	let cardNumber = $state('');
	let cardExpiry = $state('');
	let cardCvv = $state('');
	let orderStatus = $state<'idle' | 'sending' | 'sent' | 'error'>('idle');
	let orderError = $state('');

	const BOOK_PRICE = 24.95;
	const SHIPPING_AUS = 7.95;
	const SHIPPING_NZ = 13.95;

	const shippingCost = $derived(shipping === 'newzealand' ? SHIPPING_NZ : SHIPPING_AUS);
	const subtotal = $derived(BOOK_PRICE * quantity);
	const total = $derived(subtotal + shippingCost);

	async function handleOrderSubmit(e: SubmitEvent) {
		e.preventDefault();
		orderStatus = 'sending';
		try {
			const res = await fetch('/api/contact', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					firstName,
					lastName,
					email,
					phone,
					message: `BOOK ORDER - EVOLVE\n\nQuantity: ${quantity}\nShipping: ${shipping === 'newzealand' ? 'New Zealand ($13.95)' : 'Australia ($7.95)'}\nTotal: AUD $${total.toFixed(2)}\n\nShipping Address:\n${address1}${address2 ? '\n' + address2 : ''}\n${city}, ${stateField} ${postcode}\n\nPayment: Card ending ${cardNumber.slice(-4)}`
				})
			});
			if (!res.ok) throw new Error('Failed to send');
			orderStatus = 'sent';
		} catch {
			orderStatus = 'error';
			orderError = 'Something went wrong. Please try again or contact us directly.';
		}
	}
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
					href="#buy-now-form"
					class="btn btn-primary btn-lg uppercase font-bold inline-flex items-center gap-2"
				>
					BUY NOW
				</a>
			</div>

			<div class="flex justify-center lg:justify-end">
				<img src="/evolve-3d-cover.png" alt="" class="w-full max-w-xl" loading="eager" />
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
					src="/evolve-team-photo.jpg"
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
				<img src="/evolve-photo-1.jpg" alt="" class="w-full max-w-md shadow-lg" loading="lazy" />
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

<!-- Order Form Section -->
<section id="buy-now-form" class="section-gray py-20 md:py-28">
	<div class="container-custom">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
			<!-- Left: book cover -->
			<div class="flex justify-center lg:justify-start">
				<img src="/evolve-3d-cover.png" alt="" class="w-full max-w-lg" loading="lazy" />
			</div>

			<!-- Right: order form -->
			<div>
				<h2 class="mb-8 text-4xl font-bold">Order Form</h2>

				{#if orderStatus === 'sent'}
					<div class="bg-base-100 p-8 shadow-sm text-center">
						<Icon icon="ph:check-circle-fill" class="text-success text-5xl mb-4 mx-auto" />
						<h3 class="text-2xl mb-4">Order Received!</h3>
						<p class="text-lg">
							Thank you for your order. We'll be in touch shortly to confirm your purchase.
						</p>
					</div>
				{:else}
					<form onsubmit={handleOrderSubmit} class="flex flex-col gap-5">
						<!-- Name row -->
						<div class="grid grid-cols-2 gap-4">
							<label class="form-control w-full">
								<div class="label">
									<span class="label-text font-medium">First Name *</span>
								</div>
								<input
									type="text"
									bind:value={firstName}
									required
									class="input input-bordered w-full rounded-none"
								/>
							</label>
							<label class="form-control w-full">
								<div class="label">
									<span class="label-text font-medium">Last Name *</span>
								</div>
								<input
									type="text"
									bind:value={lastName}
									required
									class="input input-bordered w-full rounded-none"
								/>
							</label>
						</div>

						<label class="form-control w-full">
							<div class="label">
								<span class="label-text font-medium">Email *</span>
							</div>
							<input
								type="email"
								bind:value={email}
								required
								class="input input-bordered w-full rounded-none"
							/>
						</label>

						<label class="form-control w-full">
							<div class="label">
								<span class="label-text font-medium">Phone / Mobile</span>
							</div>
							<input
								type="tel"
								bind:value={phone}
								class="input input-bordered w-full rounded-none"
							/>
						</label>

						<!-- Shipping Address -->
						<label class="form-control w-full">
							<div class="label">
								<span class="label-text font-medium">Address Line 1 *</span>
							</div>
							<input
								type="text"
								bind:value={address1}
								required
								class="input input-bordered w-full rounded-none"
							/>
						</label>
						<label class="form-control w-full">
							<div class="label">
								<span class="label-text font-medium">Address Line 2</span>
							</div>
							<input
								type="text"
								bind:value={address2}
								class="input input-bordered w-full rounded-none"
							/>
						</label>
						<div class="grid grid-cols-3 gap-4">
							<label class="form-control w-full">
								<div class="label">
									<span class="label-text font-medium">City *</span>
								</div>
								<input
									type="text"
									bind:value={city}
									required
									class="input input-bordered w-full rounded-none"
								/>
							</label>
							<label class="form-control w-full">
								<div class="label">
									<span class="label-text font-medium">State *</span>
								</div>
								<input
									type="text"
									bind:value={stateField}
									required
									class="input input-bordered w-full rounded-none"
								/>
							</label>
							<label class="form-control w-full">
								<div class="label">
									<span class="label-text font-medium">Postcode *</span>
								</div>
								<input
									type="text"
									bind:value={postcode}
									required
									class="input input-bordered w-full rounded-none"
								/>
							</label>
						</div>

						<!-- EVOLVE price (display only) -->
						<div class="flex items-center gap-4 py-2">
							<span class="font-medium">EVOLVE Price:</span>
							<span>AUD $24.95</span>
						</div>

						<!-- Quantity -->
						<label class="form-control w-full max-w-[120px]">
							<div class="label">
								<span class="label-text font-medium">Quantity *</span>
							</div>
							<input
								type="number"
								bind:value={quantity}
								min="1"
								max="20"
								required
								class="input input-bordered w-full rounded-none"
							/>
						</label>

						<!-- Shipping dropdown -->
						<label class="form-control w-full">
							<div class="label">
								<span class="label-text font-medium">Shipping *</span>
							</div>
							<select bind:value={shipping} class="select select-bordered w-full rounded-none">
								<option value="australia">Australia ($7.95)</option>
								<option value="newzealand">New Zealand ($13.95)</option>
							</select>
						</label>

						<!-- Payment -->
						<div class="border border-base-300 p-4">
							<p class="font-medium mb-4">Pay with VISA or Mastercard</p>
							<div class="flex flex-col gap-4">
								<label class="form-control w-full">
									<div class="label">
										<span class="label-text">Name on Card *</span>
									</div>
									<input
										type="text"
										bind:value={cardName}
										required
										autocomplete="cc-name"
										class="input input-bordered w-full rounded-none"
									/>
								</label>
								<label class="form-control w-full">
									<div class="label">
										<span class="label-text">Card Number *</span>
									</div>
									<input
										type="text"
										bind:value={cardNumber}
										required
										autocomplete="cc-number"
										maxlength={19}
										placeholder="XXXX XXXX XXXX XXXX"
										class="input input-bordered w-full rounded-none"
									/>
								</label>
								<div class="grid grid-cols-2 gap-4">
									<label class="form-control w-full">
										<div class="label">
											<span class="label-text">Expiry (MM/YY) *</span>
										</div>
										<input
											type="text"
											bind:value={cardExpiry}
											required
											autocomplete="cc-exp"
											maxlength={5}
											placeholder="MM/YY"
											class="input input-bordered w-full rounded-none"
										/>
									</label>
									<label class="form-control w-full">
										<div class="label">
											<span class="label-text">CVV *</span>
										</div>
										<input
											type="text"
											bind:value={cardCvv}
											required
											autocomplete="cc-csc"
											maxlength={4}
											placeholder="XXX"
											class="input input-bordered w-full rounded-none"
										/>
									</label>
								</div>
							</div>
						</div>

						{#if orderStatus === 'error'}
							<div class="alert alert-error rounded-none">
								<Icon icon="ph:warning-circle" class="text-lg" />
								<span>{orderError}</span>
							</div>
						{/if}

						<button
							type="submit"
							class="btn btn-secondary btn-lg uppercase font-bold rounded-none w-full"
							disabled={orderStatus === 'sending'}
						>
							{#if orderStatus === 'sending'}
								<span class="loading loading-spinner loading-sm"></span>
								Processing...
							{:else}
								BUY NOW
							{/if}
						</button>
					</form>
				{/if}
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
				<img src="/amazon-usa.png" alt="Buy on Amazon USA" class="w-full max-w-[140px] h-auto" />
			</a>

			<!-- Amazon UK -->
			<a
				href="https://www.amazon.co.uk/dp/B09J8BXC59"
				target="_blank"
				rel="noopener noreferrer"
				class="flex items-center justify-center"
			>
				<img src="/amazon-uk.png" alt="Buy on Amazon UK" class="w-full max-w-[140px] h-auto" />
			</a>

			<!-- Amazon Kindle -->
			<a
				href="https://www.amazon.com.au/dp/B09J8BXC59"
				target="_blank"
				rel="noopener noreferrer"
				class="flex items-center justify-center"
			>
				<img
					src="/amazon-kindle.png"
					alt="Buy on Amazon Kindle"
					class="w-full max-w-[140px] h-auto"
				/>
			</a>

			<!-- Apple iBooks (no link on live site) -->
			<div class="flex items-center justify-center">
				<img
					src="/ibooks-button.png"
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
					src="/google-play-books.png"
					alt="Get it on Google Play Books"
					class="w-full max-w-[140px] h-auto"
				/>
			</a>
		</div>
	</div>
</section>
