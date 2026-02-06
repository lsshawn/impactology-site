<script lang="ts">
	import { fly, fade } from 'svelte/transition';
	import { config } from '$lib/config';
	import Navbar from '$lib/components/Navbar.svelte';
</script>

<div class="min-h-screen bg-base-100 relative overflow-hidden">
	<!-- Navbar as overlay -->
	<div class="absolute top-0 left-0 right-0 z-50">
		<Navbar transparent={true} />
	</div>

	<!-- Subtle gradient backdrop -->
	<div
		class="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none"
	></div>

	<!-- Main content - Full width hero -->
	<main class="relative z-10 px-6 lg:px-12 xl:px-20">
		<!-- Hero section - Optimized for above-fold mobile -->
		<div class="flex flex-col lg:flex-row lg:items-center min-h-screen pt-24 pb-12 lg:pt-32">
			<!-- Left column - Hero text -->
			<div class="flex-1 space-y-6 lg:space-y-8 lg:pr-12" in:fly={{ y: 20, duration: 600, delay: 100 }}>
				<!-- Eyebrow -->
				<div class="inline-block">
					<span
						class="text-xs uppercase tracking-widest font-semibold text-primary px-3 py-1.5 bg-primary/10 rounded-full"
					>
						{config.name}
					</span>
				</div>

				<!-- Headline - Editorial style -->
				<h1 class="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.1] text-base-content">
					Build faster.<br />
					Ship smarter.<br />
					<span class="text-primary">Grow bigger.</span>
				</h1>

				<!-- Subheadline -->
				<p class="text-lg sm:text-xl lg:text-2xl text-base-content/70 max-w-2xl leading-relaxed">
					The lean monorepo starter that gets you from idea to production in hours, not weeks.
					SvelteKit meets Hono with zero bloat.
				</p>

				<!-- CTA section - Prioritized for mobile viewport -->
				<div class="flex flex-col sm:flex-row gap-3 lg:gap-4 pt-2" in:fade={{ duration: 400, delay: 400 }}>
					<a
						href="/signup"
						class="btn btn-primary btn-lg text-base lg:text-lg px-6 lg:px-8 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all"
					>
						Start Building Now
					</a>
					<a href="#features" class="btn btn-ghost btn-lg text-base lg:text-lg px-6 lg:px-8"> Learn More </a>
				</div>

				<!-- Social proof micro-element -->
				<div class="flex items-center gap-3 text-sm text-base-content/60" in:fade={{ delay: 600 }}>
					<div class="flex -space-x-2">
						<div class="w-8 h-8 rounded-full bg-accent border-2 border-base-100"></div>
						<div class="w-8 h-8 rounded-full bg-secondary border-2 border-base-100"></div>
						<div class="w-8 h-8 rounded-full bg-primary border-2 border-base-100"></div>
					</div>
					<span>Trusted by indie hackers building the future</span>
				</div>
			</div>

			<!-- Right column - Feature cards (staggered) -->
			<div class="flex-1 space-y-4 lg:space-y-6 mt-12 lg:mt-0 lg:pl-12" in:fly={{ x: 20, duration: 600, delay: 200 }}>
				<div
					class="card bg-base-200 shadow-xl border border-base-300/50 lg:translate-y-8"
					in:fly={{ y: 20, delay: 300 }}
				>
					<div class="card-body">
						<div class="text-3xl mb-2">⚡</div>
						<h3 class="card-title text-lg">Zero Config Setup</h3>
						<p class="text-base-content/70">
							Clone, install, run. Environment files, database migrations, and hot reload included.
						</p>
					</div>
				</div>

				<div class="card bg-base-200 shadow-xl border border-base-300/50" in:fly={{ y: 20, delay: 400 }}>
					<div class="card-body">
						<div class="text-3xl mb-2">🎯</div>
						<h3 class="card-title text-lg">Modern Stack</h3>
						<p class="text-base-content/70">
							SvelteKit 5, Hono, Drizzle ORM, and Tailwind 4. The tools you actually want to use.
						</p>
					</div>
				</div>

				<div
					class="card bg-gradient-to-br from-primary/10 to-accent/10 shadow-xl border border-primary/20 lg:-translate-y-4"
					in:fly={{ y: 20, delay: 500 }}
				>
					<div class="card-body">
						<div class="text-3xl mb-2">🚀</div>
						<h3 class="card-title text-lg text-primary">Production Ready</h3>
						<p class="text-base-content/70">
							PM2 deployment scripts, type-safe database, and auth patterns ready to scale.
						</p>
					</div>
				</div>
			</div>
		</div>
	</main>

	<!-- Bottom accent line -->
	<div class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-secondary">
	</div>
</div>

<style>
	/* Smooth entrance animation */
	:global(body) {
		overflow-x: hidden;
	}
</style>
