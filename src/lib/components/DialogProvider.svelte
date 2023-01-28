<script lang="ts">
	import { derived } from 'svelte/store';
	import { dialogs } from '../utils/dialog.store';
	import DialogComponent from './DialogComponent.svelte';

	const disableScroll = derived(dialogs, ($dialogs) =>
		$dialogs.some((dialog) => dialog.options.disableScroll === true)
	);
</script>

<svelte:head>
	{#if $disableScroll}
		<style>
			body {
				overflow: hidden;
			}
		</style>
	{/if}
</svelte:head>

{#each $dialogs as dialog}
	<DialogComponent {dialog} />
{/each}
