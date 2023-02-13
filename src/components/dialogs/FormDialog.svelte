<script lang="ts">
	import type { Dialog } from '$lib';

	export let dialogRef: Dialog;
	export let form: HTMLFormElement;

	const saveEntity = (event: SubmitEvent) => {
		event.preventDefault();
		const formData = new FormData(form);
		dialogRef.close({ data: Object.fromEntries(formData.entries()) });
	};
</script>

<article>
	<header>
		<button
			type="button"
			class="close"
			aria-label="Close"
			title="Close"
			on:click={() => dialogRef.close()}
		/>
		<h4>Create Entity</h4>
	</header>
	<form id="form" bind:this={form} on:submit={(event) => saveEntity(event)}>
		<label for="name">
			Name
			<input type="text" id="name" name="name" placeholder="Name" required />
		</label>
		<label for="email">
			Email
			<input type="email" id="email" name="email" placeholder="Email" required />
		</label>
	</form>
	<footer>
		<button type="button" class="secondary" on:click={() => dialogRef.close()}>Cancel</button>
		<button type="submit" form="form">Save</button>
	</footer>
</article>

<style>
	article {
		border-radius: 0.5rem;
		width: 600px;
		max-width: 90%;
	}

	h4 {
		margin: 0;
	}

	header,
	footer {
		padding: 1rem;
	}

	footer {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
	}

	button {
		width: 100%;
		margin-bottom: 0;
	}

	button.close {
		width: unset;
		background-color: transparent;
		border: none;
	}
</style>
