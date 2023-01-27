<script lang="ts">
	import { openDialog, type Dialog } from '$lib';
	import Test2 from './Test2.svelte';

	type T = $$Generic<ComponentType>;
	export let dialogRef: Dialog<T>;

	export let title: string;

	const close = () => {
		dialogRef.close('result');
	};

	const open = () => {
		openDialog(Test2, { disableScroll: true, closeOnEsc: true, transition: undefined });
	};
</script>

<main>
	<h1>{title}</h1>
	<p>This is content</p>
	<button on:click={open}>Open 2</button>
	<button on:click={close}>Close</button>
</main>

<style>
	main {
		background-color: white;
		padding: 1rem;
		border-radius: 1rem;
	}
</style>
