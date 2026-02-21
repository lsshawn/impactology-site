<script lang="ts">
	import Icon from '@iconify/svelte';
</script>

<footer class="section-dark py-16">
	<!-- Newsletter Section -->
	<div class="container-custom py-12 border-b border-neutral-content/20">
		<div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
			<div>
				<h3 class="text-2xl font-bold mb-2">STAY IN THE LOOP</h3>
				<p class="text-sm opacity-80">Receive news and information on upcoming events</p>
			</div>
			<form class="flex gap-2">
				<input
					type="email"
					placeholder="Email address"
					class="input input-bordered flex-1 bg-base-100 text-base-content rounded-none"
					required
				/>
				<button type="submit" class="btn btn-primary uppercase font-bold rounded-none px-8">
					SIGN UP
				</button>
			</form>
		</div>
	</div>

	<!-- Logo & Social -->
	<div class="container-custom py-12 border-b border-neutral-content/20">
		<div class="flex flex-col items-center gap-6">
			<div class="bg-primary px-6 py-2">
				<img src="/logo.png" alt="Impactology" class="h-16 w-auto" />
			</div>
			<div class="flex gap-4">
				<a
					href="https://www.facebook.com/ImpactologyAust/"
					target="_blank"
					rel="noopener noreferrer"
					class="btn btn-circle bg-base-100 text-base-content border-none hover:bg-primary"
					aria-label="Facebook"
				>
					<Icon icon="ph:facebook-logo-fill" class="text-xl" />
				</a>
				<a
					href="https://au.linkedin.com/company/impactology"
					target="_blank"
					rel="noopener noreferrer"
					class="btn btn-circle bg-base-100 text-base-content border-none hover:bg-primary"
					aria-label="LinkedIn"
				>
					<Icon icon="ph:linkedin-logo-fill" class="text-xl" />
				</a>
				<a
					href="https://www.youtube.com/channel/UC2c5m2Io0INs-PnShJUaHQA"
					target="_blank"
					rel="noopener noreferrer"
					class="btn btn-circle bg-base-100 text-base-content border-none hover:bg-primary"
					aria-label="YouTube"
				>
					<Icon icon="ph:youtube-logo-fill" class="text-xl" />
				</a>
			</div>
		</div>
	</div>

	<!-- Main Footer Links -->
	<div class="container-custom py-12">
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			<!-- Quick Links -->
			<div>
				<h4 class="font-bold mb-4 text-sm uppercase">Quick Links</h4>
				<ul class="space-y-2 text-sm">
					<li><a href="/" class="hover:text-primary transition-colors">Home</a></li>
					<li><a href="/about" class="hover:text-primary transition-colors">About</a></li>
					<li><a href="/blog" class="hover:text-primary transition-colors">Blog</a></li>
					<li><a href="/gallery" class="hover:text-primary transition-colors">Gallery</a></li>
					<li>
						<a href="/privacy-policy" class="hover:text-primary transition-colors">Privacy Policy</a
						>
					</li>
					<li><a href="/contact" class="hover:text-primary transition-colors">Contact</a></li>
				</ul>
			</div>

			<!-- Programs -->
			<div>
				<h4 class="font-bold mb-4 text-sm uppercase">Programs</h4>
				<ul class="space-y-2 text-sm">
					<li>
						<a href="/procurement-business-partnering" class="hover:text-primary transition-colors">
							Procurement Business Partnering
						</a>
					</li>
					<li>
						<a href="/finance-business-partnering" class="hover:text-primary transition-colors">
							Finance Business Partnering
						</a>
					</li>
					<li>
						<a href="/it-business-partnering" class="hover:text-primary transition-colors">
							IT Business Partnering
						</a>
					</li>
					<li>
						<a href="/hr-business-partnering" class="hover:text-primary transition-colors">
							HR Business Partnering
						</a>
					</li>
					<li>
						<a href="/leadership-development-for-bpos" class="hover:text-primary transition-colors">
							Leadership Development for BPOs
						</a>
					</li>
					<li>
						<a href="/msp-bp-programs" class="hover:text-primary transition-colors">
							MSP MSSP Leadership Development Program
						</a>
					</li>
				</ul>
			</div>

			<!-- More Programs -->
			<div>
				<h4 class="font-bold mb-4 text-sm uppercase">More Programs</h4>
				<ul class="space-y-2 text-sm">
					<li>
						<a
							href="/leadership-development-program-local-government"
							class="hover:text-primary transition-colors"
						>
							Leadership Development Program Local Government
						</a>
					</li>
					<li>
						<a
							href="/sales-business-development-client-management-program"
							class="hover:text-primary transition-colors"
						>
							Sales Business Development Client Management Program
						</a>
					</li>
					<li>
						<a
							href="/marketing-communications-business-partnering-program"
							class="hover:text-primary transition-colors"
						>
							Marketing Communications Business Partnering Program
						</a>
					</li>
				</ul>
			</div>
		</div>
	</div>

	<!-- Copyright -->
	<div class="container-custom py-6 border-t border-neutral-content/20">
		<div class="flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-70">
			<p>
				©Impactology {new Date().getFullYear()}. All rights reserved.
				<a href="/privacy-policy" class="hover:text-primary transition-colors">Privacy Policy</a> |
				<a href="/legals1" class="hover:text-primary transition-colors">Terms and Conditions</a>
			</p>
		</div>
	</div>
</footer>
