<script lang="ts">
	import { page } from '$app/stores';

	let { transparent = false } = $props<{ transparent?: boolean }>();

	let drawerOpen = $state(false);

	const menuItems = [
		{ label: 'Dashboard', href: '/app' },
		{ label: 'Settings', href: '/app/settings' },
		{ label: 'Docs', href: '/docs' }
	];

	function toggleDrawer() {
		drawerOpen = !drawerOpen;
	}

	function closeDrawer() {
		drawerOpen = false;
	}

	function isActive(href: string): boolean {
		return $page.url.pathname === href || $page.url.pathname.startsWith(href + '/');
	}
</script>

<!-- Mobile drawer -->
{#if drawerOpen}
	<div class="fixed inset-0 z-40 lg:hidden" onclick={closeDrawer}>
		<div class="absolute inset-0 bg-neutral/30 backdrop-blur-sm" role="presentation" />
		<div
			class="absolute left-0 top-0 bottom-0 w-80 bg-base-100 shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
			onclick={(e) => e.stopPropagation()}
		>
			<div class="p-8 flex justify-between items-center">
				<a href="/" class="text-xl font-semibold tracking-tight text-base-content">tt</a>
				<button
					class="p-2.5 hover:bg-base-200/70 rounded-xl transition-all duration-200"
					onclick={closeDrawer}
					aria-label="Close menu"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						class="w-5 h-5 stroke-current text-base-content/60"
						stroke-width="2"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>
			</div>
			<nav class="px-6 pt-4 space-y-1.5">
				{#each menuItems as item}
					<a
						href={item.href}
						class={`block px-4 py-3 rounded-xl text-[15px] font-medium transition-all duration-200 ${
							isActive(item.href)
								? 'bg-primary/10 text-primary'
								: 'text-base-content/70 hover:text-base-content hover:bg-base-200/70'
						}`}
						onclick={closeDrawer}
					>
						{item.label}
					</a>
				{/each}
			</nav>
		</div>
	</div>
{/if}

<!-- Navbar -->
<nav
	class={`navbar sticky top-0 z-50 px-6 py-3 lg:px-10 lg:py-3.5 transition-colors ${
		transparent
			? 'bg-transparent'
			: 'bg-base-100/80 backdrop-blur-xl border-b border-base-content/10'
	}`}
>
	<!-- Mobile hamburger -->
	<div class="lg:hidden">
		<button
			class="p-2.5 hover:bg-base-200/70 rounded-xl transition-all duration-200"
			onclick={toggleDrawer}
			aria-label="Toggle menu"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				class="w-[22px] h-[22px] stroke-current text-base-content/60"
				stroke-width="2"
			>
				<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
			</svg>
		</button>
	</div>

	<!-- Logo -->
	<div class="flex-0">
		<a href="/" class="text-xl font-semibold tracking-tight text-base-content"> tt </a>
	</div>

	<!-- Desktop menu (center) -->
	<div class="hidden lg:flex flex-1 justify-center">
		<div class="flex gap-1.5 bg-base-200/50 rounded-full p-1">
			{#each menuItems as item}
				<a
					href={item.href}
					class={`px-5 py-2 rounded-full text-[15px] font-medium transition-all duration-200 ${
						isActive(item.href)
							? 'bg-base-100 text-base-content shadow-sm'
							: 'text-base-content/60 hover:text-base-content hover:bg-base-100/50'
					}`}
				>
					{item.label}
				</a>
			{/each}
		</div>
	</div>

	<!-- Right side: Login/Account -->
	<div class="flex-0 flex items-center gap-3 ml-auto">
		<button
			class="hidden sm:inline-flex px-5 py-2 text-[15px] font-medium text-base-content/70 hover:text-base-content hover:bg-base-200/70 rounded-full transition-all duration-200"
		>
			Login
		</button>
		<div class="dropdown dropdown-end">
			<button
				class="p-2 hover:bg-base-200/70 rounded-xl transition-all duration-200"
				tabindex="0"
				title="Account menu"
			>
				<div
					class="w-9 h-9 bg-primary/10 text-primary rounded-xl flex items-center justify-center text-sm font-semibold"
				>
					U
				</div>
			</button>
			<ul
				tabindex="0"
				class="dropdown-content z-50 menu p-2 mt-2 shadow-[0_8px_30px_rgb(0,0,0,0.12)] bg-base-100 rounded-2xl w-56 border border-base-content/10"
			>
				<li>
					<a
						href="/app/account"
						class="text-[15px] px-4 py-3 hover:bg-base-200/70 rounded-xl font-medium text-base-content/70 hover:text-base-content"
						>Account</a
					>
				</li>
				<li>
					<a
						href="/app/settings"
						class="text-[15px] px-4 py-3 hover:bg-base-200/70 rounded-xl font-medium text-base-content/70 hover:text-base-content"
						>Settings</a
					>
				</li>
				<li><div class="h-px bg-base-content/10 mx-2 my-1.5"></div></li>
				<li>
					<a
						href="/logout"
						class="text-[15px] px-4 py-3 text-error hover:bg-error/10 rounded-xl font-medium"
						>Logout</a
					>
				</li>
			</ul>
		</div>
	</div>
</nav>
