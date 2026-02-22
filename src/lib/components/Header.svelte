<script lang="ts">
	import Icon from '@iconify/svelte';

	let isMenuOpen = $state(false);

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}
</script>

<header class="sticky top-0 z-50 bg-base-100 shadow-sm">
	<div class="container-custom min-h-[84px] flex items-center justify-between">
		<!-- Logo -->
		<a href="/" class="flex items-center shrink-0">
			<img src="/logo.png" alt="Impactology" class="h-[54px] w-auto object-contain" />
		</a>

		<!-- Desktop Navigation + CTA -->
		<div class="hidden lg:flex items-center gap-4 shrink-0">
			<ul class="menu menu-horizontal px-1 gap-2 whitespace-nowrap flex-nowrap">
				<li>
					<a
						href="/impactora"
						class="font-bold rounded-none bg-transparent hover:bg-transparent border-b-2 border-transparent hover:border-primary transition-colors duration-200"
						>Impactora</a
					>
				</li>
				<li class="group relative">
					<a
						href="#"
						class="font-bold rounded-none bg-transparent hover:bg-transparent border-b-2 border-transparent hover:border-primary transition-colors duration-200 flex items-center gap-1"
					>
						Programs
						<Icon
							icon="ph:caret-down"
							class="text-sm transition-transform duration-200 group-hover:rotate-180"
						/>
					</a>
					<ul
						class="absolute top-full right-0 hidden group-hover:block bg-base-100 shadow-lg w-96 p-2 z-50"
					>
						<li>
							<a href="/programs" class="text-sm font-bold">
								All Programs
							</a>
						</li>
						<li class="border-t border-base-200 my-1"></li>
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
				</li>
				<li class="group relative">
					<a
						href="#"
						class="font-bold rounded-none bg-transparent hover:bg-transparent border-b-2 border-transparent hover:border-primary transition-colors duration-200 flex items-center gap-1"
					>
						Resources
						<Icon
							icon="ph:caret-down"
							class="text-sm transition-transform duration-200 group-hover:rotate-180"
						/>
					</a>
					<ul
						class="absolute top-full right-0 hidden group-hover:block bg-base-100 shadow-lg w-64 p-2 z-50"
					>
						<li><a href="/evolve-book" class="text-sm">Evolve Book</a></li>
						<li><a href="/impactology-live-2020" class="text-sm">Impactology Live 2020</a></li>
						<li><a href="/blog" class="text-sm">Content</a></li>
					</ul>
				</li>
				<li>
					<a
						href="/about"
						class="font-bold rounded-none bg-transparent hover:bg-transparent border-b-2 border-transparent hover:border-primary transition-colors duration-200"
						>About</a
					>
				</li>
			</ul>
			<a href="/#make_impacts" class="btn btn-primary uppercase font-black">GET IN TOUCH</a>
		</div>

		<!-- Mobile Menu Toggle -->
		<div class="lg:hidden">
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
								<a href="/programs" onclick={toggleMenu} class="font-bold">All Programs</a>
							</li>
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
				<li class="mt-4">
					<button href="/#make_impacts" class="btn btn-primary uppercase" onclick={toggleMenu}>
						GET IN TOUCH
					</button>
				</li>
			</ul>
		</div>
	{/if}
</header>
