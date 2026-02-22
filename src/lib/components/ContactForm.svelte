<script lang="ts">
	import Icon from '@iconify/svelte';

	type Props = {
		prefix?: string;
		class?: string;
	};

	let { prefix = '', class: className = '' }: Props = $props();

	let firstName = $state('');
	let lastName = $state('');
	let email = $state('');
	let phone = $state('');
	let company = $state('');
	let message = $state('');
	let formStatus = $state<'idle' | 'sending' | 'sent' | 'error'>('idle');
	let errorMessage = $state('');

	async function handleSubmit(e: SubmitEvent) {
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
					phone,
					company,
					message: prefix ? `${prefix}\n\n${message}` : message
				})
			});
			if (!res.ok) throw new Error('Failed to send');
			formStatus = 'sent';
			firstName = '';
			lastName = '';
			email = '';
			phone = '';
			company = '';
			message = '';
		} catch {
			formStatus = 'error';
			errorMessage = 'Something went wrong. Please try again.';
		}
	}
</script>

<form
	onsubmit={handleSubmit}
	class="grid grid-cols-1 md:grid-cols-2 gap-6 {className}"
	data-testid="contact-form"
>
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

	<label class="form-control w-full">
		<div class="label">
			<span class="label-text font-medium">Email</span>
		</div>
		<input
			type="email"
			bind:value={email}
			required
			class="input input-bordered w-full rounded-none"
			placeholder="john@company.com"
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

	<label class="form-control w-full md:col-span-2">
		<div class="label">
			<span class="label-text font-medium">Company</span>
		</div>
		<input
			type="text"
			bind:value={company}
			required
			class="input input-bordered w-full rounded-none"
			placeholder="Your Company Name"
		/>
	</label>

	<label class="form-control w-full md:col-span-2">
		<div class="label">
			<span class="label-text font-medium">How can we help?</span>
		</div>
		<textarea
			bind:value={message}
			required
			class="textarea textarea-bordered w-full rounded-none h-32"
			placeholder="Tell us about your goals and how we can support you..."
		></textarea>
	</label>

	{#if formStatus === 'error'}
		<div class="alert alert-error rounded-none md:col-span-2">
			<Icon icon="ph:warning-circle" class="text-lg" />
			<span>{errorMessage}</span>
		</div>
	{/if}
	{#if formStatus === 'sent'}
		<div class="alert alert-success rounded-none md:col-span-2">
			<Icon icon="ph:check-circle" class="text-lg" />
			<span>Thanks for reaching out! We'll be in touch within 24 hours.</span>
		</div>
	{/if}

	<div class="md:col-span-2">
		<button
			type="submit"
			class="btn btn-secondary btn-lg uppercase font-bold rounded-none w-full md:w-auto md:px-16"
			disabled={formStatus === 'sending'}
		>
			{#if formStatus === 'sending'}
				<span class="loading loading-spinner loading-sm"></span>
				Sending...
			{:else}
				Submit
			{/if}
		</button>
	</div>
</form>
