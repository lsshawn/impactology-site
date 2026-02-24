<script lang="ts">
	import ContactForm from '$lib/components/ContactForm.svelte';

	interface Props {
		prefix: string;
		introText?: string;
	}

	let { prefix, introText = "We want to disrupt everyday thinking, spark new ideas and create new ways to interact that will support you to truly have an impact. If you're ready to increase your impact as a Business Partner, register your interest to join our Business Partnering Impact Program by filling out the form below." }: Props = $props();

	function trigger(node: HTMLElement, stateSetter: (v: boolean) => void) {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					stateSetter(true);
					observer.disconnect();
				}
			},
			{ threshold: 0.15 }
		);
		observer.observe(node);
		return { destroy: () => observer.disconnect() };
	}

	let sectionHeading = $state(false);
	let sectionForm = $state(false);
</script>

<section
	id="register-interest"
	class="section-dark py-20 md:py-28"
	use:trigger={(v) => {
		sectionHeading = v;
		setTimeout(() => (sectionForm = v), 150);
	}}
>
	<div class="container-custom">
		<div class="max-w-3xl mx-auto">
			<div class="reveal-y text-center mb-12" class:visible={sectionHeading}>
				<h2 class="text-5xl lg:text-7xl font-bold text-white mb-6">REGISTER YOUR INTEREST</h2>
				<p class="text-lg text-white opacity-80">{introText}</p>
			</div>
			<div class="reveal-y" class:visible={sectionForm} style="transition-delay: 150ms">
				<ContactForm {prefix} class="bg-neutral/50 p-8 md:p-12" />
			</div>
		</div>
	</div>
</section>
