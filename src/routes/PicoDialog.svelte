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

<article>
	<header>
		<button type="button" class="close" aria-label="Close" title="Close" on:click={close} />
		<h4>{title}</h4>
	</header>
	<p>This is content</p>
	<footer>
		<button type="button" class="secondary" on:click={close}>Close</button>
		<button type="button" on:click={open}>Open Second Modal</button>
	</footer>
</article>

<style>
	article {
		min-width: 600px;
	}

	h4 {
		margin: 0;
	}

	footer {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	button {
		margin-bottom: 0;
	}

	button.close {
		background-color: transparent;
		border: none;
	}
</style>
