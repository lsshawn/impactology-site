<script lang="ts">
	import SEO from '$lib/components/SEO.svelte';
	import Icon from '@iconify/svelte';
</script>

<SEO
	title="Legal Center | Impactology & Impactora"
	description="Clear and transparent legal documentation for Impactology programs and Impactora platform."
	canonical="https://impactology.com.au/legals1/"
/>

<section class="py-16 md:py-24 bg-base-100">
	<div class="container-custom">
		<div class="max-w-6xl mx-auto">
			<!-- Header -->
			<div class="mb-16 md:mb-24">
				<h1 class="text-4xl md:text-5xl font-bold tracking-tight mb-6 normal-case">Legal Center</h1>
				<!-- <p class="text-gray-500 text-lg max-w-xl font-light leading-relaxed"> -->
				<!-- 	Clear and transparent documentation for our specialized business partnering and leadership -->
				<!-- 	ecosystems. -->
				<!-- </p> -->
			</div>

			<!-- Two Column Grid -->
			<div class="grid md:grid-cols-2 gap-8 md:gap-12">
				<!-- Impactology Card -->
				<div
					class="border border-base-300 rounded-2xl p-8 md:p-10 bg-white hover:shadow-lg hover:border-gray-300 transition-all duration-300"
				>
					<div class="mb-8">
						<img src="/logo.webp" alt="Impactology" class="h-10 w-auto" />
					</div>

					<div class="space-y-3">
						<a
							href="/privacy-policy"
							class="group flex items-center justify-between p-4 rounded-xl hover:bg-[#fffde6] transition-colors"
						>
							<div class="flex items-center gap-3">
								<Icon
									icon="mdi:shield-lock-outline"
									class="text-gray-400 group-hover:text-primary text-lg"
								/>
								<span class="text-sm font-medium">Privacy Policy</span>
							</div>
							<Icon
								icon="mdi:arrow-top-right"
								class="text-gray-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-lg"
							/>
						</a>

						<a
							href="/legals1/terms"
							class="group flex items-center justify-between p-4 rounded-xl hover:bg-[#fffde6] transition-colors"
						>
							<div class="flex items-center gap-3">
								<Icon icon="mdi:gavel" class="text-gray-400 group-hover:text-primary text-lg" />
								<span class="text-sm font-medium">Terms & Conditions</span>
							</div>
							<Icon
								icon="mdi:arrow-top-right"
								class="text-gray-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-lg"
							/>
						</a>
					</div>
				</div>

				<!-- Impactora Card -->
				<div
					class="border border-base-300 rounded-2xl p-8 md:p-10 bg-white hover:shadow-lg hover:border-gray-300 transition-all duration-300"
				>
					<div class="mb-8">
						<img src="/impactora-logo.webp" alt="Impactora" class="h-10 w-auto" />
					</div>

					<div class="space-y-3">
						<a
							href="/legals1/impactora-privacy"
							class="group flex items-center justify-between p-4 rounded-xl hover:bg-[#eefbff] transition-colors"
						>
							<div class="flex items-center gap-3">
								<Icon icon="mdi:lock-outline" class="text-gray-400 group-hover:text-info text-lg" />
								<span class="text-sm font-medium">Privacy Policy</span>
							</div>
							<Icon
								icon="mdi:arrow-top-right"
								class="text-gray-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-lg"
							/>
						</a>

						<a
							href="/legals1/eula"
							class="group flex items-center justify-between p-4 rounded-xl hover:bg-[#eefbff] transition-colors"
						>
							<div class="flex items-center gap-3">
								<Icon icon="mdi:file-sign" class="text-gray-400 group-hover:text-info text-lg" />
								<span class="text-sm font-medium">End User License Agreement</span>
							</div>
							<Icon
								icon="mdi:arrow-top-right"
								class="text-gray-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-lg"
							/>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	h1,
	h2 {
		font-family: var(--font-heading), sans-serif;
	}
</style>
