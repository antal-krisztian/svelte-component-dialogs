<script lang="ts">
	import { openDialog } from '$lib';
	import GettingStarted from './GettingStarted.svelte';
	import Introduction from './Introduction.svelte';
	import PicoDialog from './PicoDialog.svelte';

	const open = () => {
		const dialog = openDialog(PicoDialog, {
			modal: true,
			closeOnEsc: true,
			closeOnBackdropClick: true,
			disableScroll: true,
			context: { title: 'This is a title' }
		});
		dialog.onClose = (result) => {
			console.log('closed', result);
		};
	};
</script>

<Introduction />
<GettingStarted />

<button type="button" on:click={open}>Open Dialog</button>

<style>
</style>
