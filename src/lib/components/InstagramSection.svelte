<script lang="ts">
	import Icon from '@iconify/svelte';
	import { onMount } from 'svelte';

	interface Props {
		instagramHandle?: string;
		beholdWidgetId?: string;
	}

	let {
		instagramHandle = 'impactologyaust',
		beholdWidgetId = 'YOUR_BEHOLD_WIDGET_ID'
	}: Props = $props();

	onMount(() => {
		const script = document.createElement('script');
		script.src = 'https://w.behold.so/widget.js';
		script.type = 'module';
		document.head.appendChild(script);
	});
</script>

<section class="section-dark py-20 md:py-28" data-testid="instagram-section">
	<div class="container-custom">
		<!-- Header -->
		<div class="text-center mb-12">
			<div class="flex items-center justify-center gap-3 mb-4">
				<Icon icon="ph:instagram-logo-fill" class="text-4xl text-primary" />
			</div>
			<h2 class="text-4xl md:text-5xl lg:text-6xl mb-4">FOLLOW US ON INSTAGRAM</h2>
			<a
				href="https://instagram.com/{instagramHandle}"
				target="_blank"
				rel="noopener noreferrer"
				class="text-primary hover:underline text-lg font-medium inline-flex items-center gap-2"
			>
				@{instagramHandle}
				<Icon icon="ph:arrow-square-out" class="text-sm" />
			</a>
		</div>

		<!-- Behold Instagram Feed Widget -->
		<behold-widget feed-id={beholdWidgetId}></behold-widget>

		<!-- Follow Button -->
		<div class="text-center mt-12">
			<a
				href="https://instagram.com/{instagramHandle}"
				target="_blank"
				rel="noopener noreferrer"
				class="btn btn-primary btn-lg uppercase font-bold rounded-none inline-flex items-center gap-3"
			>
				<Icon icon="ph:instagram-logo-fill" class="text-xl" />
				Follow @{instagramHandle}
			</a>
		</div>
	</div>
</section>
