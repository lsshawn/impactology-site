<script lang="ts">
	import SEO from '$lib/components/SEO.svelte';
	import Icon from '@iconify/svelte';

	let firstName = $state('');
	let lastName = $state('');
	let email = $state('');
	let phone = $state('');
	let company = $state('');
	let message = $state('');
	let status = $state<'idle' | 'sending' | 'sent' | 'error'>('idle');
	let errorMessage = $state('');

	async function handleSubmit(e: SubmitEvent) {
		e.preventDefault();
		status = 'sending';
		try {
			const res = await fetch('/api/contact', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ firstName, lastName, email, phone, company, message })
			});
			if (!res.ok) throw new Error('Failed to send');
			status = 'sent';
			firstName = '';
			lastName = '';
			email = '';
			phone = '';
			company = '';
			message = '';
		} catch (err) {
			status = 'error';
			errorMessage = 'Something went wrong. Please try again.';
		}
	}
</script>

<SEO
	title="Contact | Create an Impact | Impactology"
	description="Get in touch with Impactology. We're here to help you make an impact."
	canonical="https://impactology.com.au/contact/"
/>

<section class="py-20 bg-base-100">
	<div class="container-custom">
		<div class="max-w-2xl mx-auto">
			<h1 class="text-center mb-12">Contact Us</h1>

			<form onsubmit={handleSubmit} class="flex flex-col gap-6 w-full">
				<label class="form-control w-full">
					<div class="label">
						<span class="label-text font-medium">First Name</span>
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
						<span class="label-text font-medium">Last Name</span>
					</div>
					<input
						type="text"
						bind:value={lastName}
						required
						class="input input-bordered w-full rounded-none"
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
					/>
				</label>

				<label class="form-control w-full">
					<div class="label">
						<span class="label-text font-medium">Phone (optional)</span>
					</div>
					<input type="tel" bind:value={phone} class="input input-bordered w-full rounded-none" />
				</label>

				<label class="form-control w-full">
					<div class="label">
						<span class="label-text font-medium">Company</span>
					</div>
					<input
						type="text"
						bind:value={company}
						required
						class="input input-bordered w-full rounded-none"
					/>
				</label>

				<label class="form-control w-full">
					<div class="label">
						<span class="label-text font-medium">Your Message</span>
					</div>
					<textarea
						bind:value={message}
						required
						class="textarea textarea-bordered w-full rounded-none h-40"
					></textarea>
				</label>

				{#if status === 'error'}
					<div class="alert alert-error rounded-none">
						<Icon icon="ph:warning-circle" class="text-lg" />
						<span>{errorMessage}</span>
					</div>
				{/if}
				{#if status === 'sent'}
					<div class="alert alert-success rounded-none">
						<Icon icon="ph:check-circle" class="text-lg" />
						<span>Message sent successfully! We'll be in touch soon.</span>
					</div>
				{/if}

				<button
					type="submit"
					class="btn btn-secondary btn-lg uppercase font-bold rounded-none w-full"
					disabled={status === 'sending'}
				>
					{#if status === 'sending'}
						<span class="loading loading-spinner loading-sm"></span>
						Sending...
					{:else}
						SUBMIT
					{/if}
				</button>
			</form>
		</div>
	</div>
</section>
