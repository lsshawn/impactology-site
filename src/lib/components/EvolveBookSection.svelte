<script lang="ts">
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

	let bookImg = $state(false);
	let bookText = $state(false);
</script>

<section
	class="py-20 md:py-28 bg-base-300"
	use:trigger={(v) => {
		bookImg = v;
		setTimeout(() => (bookText = v), 150);
	}}
>
	<div class="container-custom">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
			<div class="reveal-x-left" class:visible={bookText} style="transition-delay: 150ms">
				<h2 class="text-4xl md:text-5xl font-bold mb-2">EVOLVE</h2>
				<h3 class="text-2xl font-bold mb-6 opacity-80">The Business Partnering Playbook</h3>
				<p class="text-xl font-bold mb-6">
					Finally, a book that provides realistic and targeted advice to Business Partners!
				</p>
				<p class="text-lg leading-relaxed mb-6 opacity-80">
					Business Partners hold a vital role as trusted confidants with deep technical expertise,
					and their impact is evident across all business functions. Initially tasked with
					providing advice, they are now true collaborating partners, ideally placed to lead and
					manage change in the changing world of work and business. Yet as the Business Partner
					role has changed, there has been no pathway to develop the competencies essential for
					their success.
				</p>
				<p class="text-lg leading-relaxed mb-6 opacity-80">
					Until now. If you are a current or aspiring Business Partner – HR, Finance, Procurement,
					IT, Risk, Audit, Compliance, Legal, Marketing – this is the book for you.
				</p>
				<p class="text-lg leading-relaxed mb-8 opacity-80">
					EVOLVE shows you how to navigate service models and systems, build your commercial acumen
					and deliver value to your organisation.
				</p>
				<a href="/evolve-book" class="btn btn-primary btn-lg uppercase font-bold">BUY NOW</a>
			</div>
			<div class="reveal-x-right flex justify-center" class:visible={bookImg}>
				<img
					src="/bpip-book-cover.webp"
					alt="The Business Partnering Playbook - EVOLVE"
					class="w-96 object-contain drop-shadow-2xl"
				/>
			</div>
		</div>
	</div>
</section>
