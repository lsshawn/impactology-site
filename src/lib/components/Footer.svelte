<script lang="ts">
	import Icon from '@iconify/svelte';
</script>

<footer>
	<!-- Newsletter Section -->
	<div class="bg-[#3e3e3e] py-12">
		<div class="container-custom">
			<div
				class="flex flex-col md:flex-row justify-center items-center gap-6 text-white text-center md:text-left"
			>
				<div class="shrink-0">
					<h3 class="text-2xl font-bold mb-2">STAY IN THE LOOP</h3>
					<p class="text-sm opacity-80">Receive news and information on upcoming events</p>
				</div>
				<form class="flex flex-col sm:flex-row gap-2 w-full max-w-md">
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
	<div class="bg-base-200 py-10">
		<div class="container-custom">
			<div class="flex flex-col items-center gap-6">
				<img
					src="/logo.webp"
					alt="Impactology"
					width="368"
					height="84"
					class="h-12 w-auto"
					loading="lazy"
				/>
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
			<div class="border-t border-base-300 pt-8">
				<!-- Quick Links -->
				<div
					class="grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-center gap-x-6 gap-y-3 text-xs uppercase font-semibold mb-6"
				>
					<a href="/" class="hover:text-primary transition-colors">Home</a>
					<a href="/about" class="hover:text-primary transition-colors">About</a>
					<a href="/blog" class="hover:text-primary transition-colors">Blog</a>
					<a href="/gallery" class="hover:text-primary transition-colors">Gallery</a>
					<a href="/privacy-policy" class="hover:text-primary transition-colors">Privacy Policy</a>
					<a href="/contact" class="hover:text-primary transition-colors">Contact</a>
				</div>

				<!-- Programs -->
				<div
					class="grid grid-cols-1 sm:grid-cols-2 md:flex md:flex-wrap md:justify-center gap-x-6 gap-y-3 text-xs uppercase font-semibold mb-8"
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
					<a href="/msp-bp-programs" class="hover:text-primary transition-colors"
						>MSP MSSP Leadership Development Program</a
					>
					<a
						href="/leadership-development-program-local-government"
						class="hover:text-primary transition-colors"
						>Leadership Development Program Local Government</a
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
				<div
					class="text-center text-xs opacity-60 flex flex-col sm:flex-row justify-center items-center gap-1 sm:gap-2 flex-wrap"
				>
					<span>©Impactology {new Date().getFullYear()}. All rights reserved.</span>
					<span class="hidden sm:inline">|</span>
					<a href="/privacy-policy" class="hover:text-primary transition-colors">Privacy Policy</a>
					<span class="hidden sm:inline">|</span>
					<a href="/legals1" class="hover:text-primary transition-colors">Legals</a>
					<span class="hidden sm:inline">|</span>
					<a href="/legals1" class="hover:text-primary transition-colors">Terms and Conditions</a>
				</div>
			</div>
		</div>
	</div>
</footer>
