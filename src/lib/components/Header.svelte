<script lang="ts">
	import Icon from '@iconify/svelte';

	let isMenuOpen = $state(false);

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}
</script>

<header class="sticky top-0 z-50 bg-base-100 shadow-sm">
	<div class="navbar container-custom">
		<!-- Logo -->
		<div class="navbar-start">
			<a href="/" class="flex items-center">
				<img src="/logo.png" alt="Impactology" class="h-[84px] w-auto" />
			</a>
		</div>

		<!-- Desktop Navigation -->
		<div class="navbar-center hidden lg:flex">
			<ul class="menu menu-horizontal px-1 gap-2">
				<li><a href="/impactora" class="font-medium">Impactora</a></li>
				<li>
					<details>
						<summary class="font-medium">Programs</summary>
						<ul class="bg-base-100 rounded-none shadow-lg w-96 p-2">
							<li>
								<a href="/business-partnering-impact-program" class="text-sm">
									Business Partnering Impact Program
								</a>
							</li>
							<li>
								<a href="/amplify-your-impact-program" class="text-sm">
									Amplify Your Impact Program
								</a>
							</li>
						</ul>
					</details>
				</li>
				<li>
					<details>
						<summary class="font-medium">Resources</summary>
						<ul class="bg-base-100 rounded-none shadow-lg w-64 p-2">
							<li><a href="/evolve-book" class="text-sm">Evolve Book</a></li>
							<li><a href="/impactology-live-2020" class="text-sm">Impactology Live 2020</a></li>
							<li><a href="/blog" class="text-sm">Content</a></li>
						</ul>
					</details>
				</li>
				<li><a href="/about" class="font-medium">About</a></li>
				<li><a href="/contact" class="font-medium">Contact</a></li>
			</ul>
		</div>

		<!-- CTA Button (Desktop) -->
		<div class="navbar-end hidden lg:flex">
			<a href="/contact" class="btn btn-primary btn-sm uppercase font-bold"> GET IN TOUCH </a>
		</div>

		<!-- Mobile Menu Toggle -->
		<div class="navbar-end lg:hidden">
			<button class="btn btn-square btn-ghost" onclick={toggleMenu} aria-label="Menu Toggle">
				<Icon icon={isMenuOpen ? 'ph:x' : 'ph:list'} class="text-2xl" />
			</button>
		</div>
	</div>

	<!-- Mobile Dropdown Menu -->
	{#if isMenuOpen}
		<div class="lg:hidden bg-base-100 border-t border-base-300">
			<ul class="menu p-4 gap-2">
				<li><a href="/impactora" onclick={toggleMenu}>Impactora</a></li>
				<li>
					<details>
						<summary>Programs</summary>
						<ul class="pl-4">
							<li>
								<a href="/business-partnering-impact-program" onclick={toggleMenu}>
									Business Partnering Impact Program
								</a>
							</li>
							<li>
								<a href="/amplify-your-impact-program" onclick={toggleMenu}>
									Amplify Your Impact Program
								</a>
							</li>
						</ul>
					</details>
				</li>
				<li>
					<details>
						<summary>Resources</summary>
						<ul class="pl-4">
							<li><a href="/evolve-book" onclick={toggleMenu}>Evolve Book</a></li>
							<li>
								<a href="/impactology-live-2020" onclick={toggleMenu}>Impactology Live 2020</a>
							</li>
							<li><a href="/blog" onclick={toggleMenu}>Content</a></li>
						</ul>
					</details>
				</li>
				<li><a href="/about" onclick={toggleMenu}>About</a></li>
				<li><a href="/contact" onclick={toggleMenu}>Contact</a></li>
				<li class="mt-4">
					<a href="/contact" class="btn btn-primary btn-block uppercase" onclick={toggleMenu}>
						GET IN TOUCH
					</a>
				</li>
			</ul>
		</div>
	{/if}
</header>
