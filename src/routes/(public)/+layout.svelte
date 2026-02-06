<script lang="ts">
	import '../../app.css';
	import { config } from '$lib/config';
	import Toast from '$lib/components/Toast.svelte';
	let { children } = $props();
</script>

<svelte:head>
	<title>{config.name}</title>
</svelte:head>

<!-- No wrapper - let pages control their own layout -->
{@render children()}

<Toast />
