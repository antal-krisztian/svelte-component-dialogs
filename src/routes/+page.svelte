<script lang="ts">
	import { openDialog } from '$lib';
	import Test from './Test.svelte';

	const open = () => {
		const dialog = openDialog(Test, {
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

<button on:click={open}>Open Dialog</button>
<main />

<style>
	main {
		height: 110vh;
		background-color: violet;
	}
</style>
