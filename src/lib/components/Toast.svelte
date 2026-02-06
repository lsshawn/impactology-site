<script lang="ts">
	import { toast } from '$lib/stores/toast.svelte';

	function getAlertClass(type: string) {
		switch (type) {
			case 'success':
				return 'alert-success';
			case 'error':
				return 'alert-error';
			case 'warning':
				return 'alert-warning';
			case 'info':
			default:
				return 'alert-info';
		}
	}
</script>

{#if toast.current}
	<div class="toast toast-top toast-end">
		<div class="alert {getAlertClass(toast.current.type)}">
			<span>{toast.current.message}</span>
		</div>
	</div>
{/if}
