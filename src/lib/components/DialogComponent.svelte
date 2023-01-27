<script lang="ts">
	import { onMount, type ComponentType } from 'svelte';
	import type { Dialog } from '../models/dialog.class';

	type T = $$Generic<ComponentType>;
	export let dialog: Dialog<T>;

	let nativeDialog: HTMLDialogElement;

	const dialogTransition = dialog.options.transition!;

	const onMouseDown = (event: MouseEvent): void => {
		if (
			dialog.options.closeOnBackdropClick &&
			dialog.options.modal &&
			event.target === nativeDialog
		) {
			if (dialog.onBackdropClicked) {
				dialog.onBackdropClicked();
			}

			dialog.close();
		}
	};

	const onCancel = (event: Event): void => {
		event.preventDefault();
		if (dialog.options.closeOnEsc) {
			if (dialog.onEscapePressed) {
				dialog.onEscapePressed();
			}

			dialog.close();
		}
	};

	onMount(() => {
		dialog.options.modal ? nativeDialog.showModal() : nativeDialog.show();
	});
</script>

<svelte:head>
	{#if dialog.options.disableScroll}
		<style>
			body {
				overflow: hidden;
			}
		</style>
	{/if}
</svelte:head>
{#if !dialog.options.transition}
	<dialog bind:this={nativeDialog} on:mousedown={onMouseDown} on:cancel={onCancel}>
		<svelte:component this={dialog.component} dialogRef={dialog} {...dialog.options.context} />
	</dialog>
{:else}
	<dialog
		bind:this={nativeDialog}
		on:mousedown={onMouseDown}
		on:cancel={onCancel}
		transition:dialogTransition
	>
		<svelte:component this={dialog.component} dialogRef={dialog} {...dialog.options.context} />
	</dialog>
{/if}

<style>
	dialog {
		border: none;
		background-color: transparent;
		padding: 0;
	}
</style>