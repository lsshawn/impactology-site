<script lang="ts">
	import Icon from '@iconify/svelte';
</script>

<footer>
	<!-- Newsletter Section -->
	<div class="bg-[#3e3e3e] py-12">
		<div class="container-custom">
			<div class="flex flex-col md:flex-row justify-center items-center gap-8 text-white">
				<div class="shrink-0">
					<h3 class="text-2xl font-bold mb-2">STAY IN THE LOOP</h3>
					<p class="text-sm opacity-80">Receive news and information on upcoming events</p>
				</div>
				<form class="flex gap-2 w-full max-w-md">
					<input
						type="email"
						placeholder="Email address"
						class="input flex-1 bg-white text-black rounded-none border-none"
						required
					/>
					<button
						type="submit"
						class="btn btn-secondary uppercase font-bold hover:border-primary hover:text-primary rounded-none"
					>
						SIGN UP
					</button>
				</form>
			</div>
		</div>
	</div>

	<!-- Logo & Social -->
	<div class="bg-base-200 py-12">
		<div class="container-custom">
			<div class="flex flex-col items-center gap-6">
				<div class="px-6 py-2">
					<img src="/logo.png" alt="Impactology" class="h-12 w-auto" />
				</div>
				<div class="flex gap-4">
					<a
						href="https://www.facebook.com/ImpactologyAust/"
						target="_blank"
						rel="noopener noreferrer"
						class="btn btn-circle bg-black text-white border-none hover:bg-primary"
						aria-label="Facebook"
					>
						<Icon icon="ph:facebook-logo-fill" class="text-2xl" />
					</a>
					<a
						href="https://au.linkedin.com/company/impactology"
						target="_blank"
						rel="noopener noreferrer"
						class="btn btn-circle bg-black text-white border-none hover:bg-primary"
						aria-label="LinkedIn"
					>
						<Icon icon="ph:linkedin-logo-fill" class="text-2xl" />
					</a>
					<a
						href="https://www.youtube.com/channel/UC2c5m2Io0INs-PnShJUaHQA"
						target="_blank"
						rel="noopener noreferrer"
						class="btn btn-circle bg-black text-white border-none hover:bg-primary"
						aria-label="YouTube"
					>
						<Icon icon="ph:youtube-logo-fill" class="text-2xl" />
					</a>
				</div>
			</div>
		</div>
	</div>

	<!-- All Links -->
	<div class="bg-base-200 pb-8">
		<div class="container-custom">
			<!-- Quick Links Row -->
			<div
				class="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs uppercase font-semibold mb-4"
			>
				<a href="/" class="hover:text-primary transition-colors">Home</a>
				<a href="/about" class="hover:text-primary transition-colors">About</a>
				<a href="/blog" class="hover:text-primary transition-colors">Blog</a>
				<a href="/gallery" class="hover:text-primary transition-colors">Gallery</a>
				<a href="/privacy-policy" class="hover:text-primary transition-colors">Privacy Policy</a>
				<a href="/contact" class="hover:text-primary transition-colors">Contact</a>
			</div>

			<!-- Programs Row 1 -->
			<div
				class="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs uppercase font-semibold mb-4"
			>
				<a href="/procurement-business-partnering" class="hover:text-primary transition-colors"
					>Procurement Business Partnering</a
				>
				<a href="/finance-business-partnering" class="hover:text-primary transition-colors"
					>Finance Business Partnering</a
				>
				<a href="/it-business-partnering" class="hover:text-primary transition-colors"
					>IT Business Partnering</a
				>
				<a href="/hr-business-partnering" class="hover:text-primary transition-colors"
					>HR Business Partnering</a
				>
				<a href="/leadership-development-for-bpos" class="hover:text-primary transition-colors"
					>Leadership Development for BPOs</a
				>
			</div>

			<!-- Programs Row 2 -->
			<div
				class="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs uppercase font-semibold mb-4"
			>
				<a href="/msp-bp-programs" class="hover:text-primary transition-colors"
					>MSP MSSP Leadership Development Program</a
				>
				<a
					href="/leadership-development-program-local-government"
					class="hover:text-primary transition-colors"
					>Leadership Development Program Local Government</a
				>
			</div>

			<!-- Programs Row 3 -->
			<div
				class="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs uppercase font-semibold mb-8"
			>
				<a
					href="/sales-business-development-client-management-program"
					class="hover:text-primary transition-colors"
					>Sales Business Development Client Management Program</a
				>
				<a
					href="/marketing-communications-business-partnering-program"
					class="hover:text-primary transition-colors"
					>Marketing Communications Business Partnering Program</a
				>
			</div>

			<!-- Copyright -->
			<div class="text-center text-xs opacity-60">
				<p>
					©Impactology {new Date().getFullYear()}. All rights reserved.
					<a href="/privacy-policy" class="hover:text-primary transition-colors">Privacy Policy</a>
					|
					<a href="/legals1" class="hover:text-primary transition-colors">Legals</a> |
					<a href="/terms" class="hover:text-primary transition-colors">Terms and Conditions</a>
				</p>
			</div>
		</div>
	</div>
</footer>
