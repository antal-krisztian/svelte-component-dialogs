<script lang="ts">
	import type { Dialog } from '$lib';

	export let dialogRef: Dialog;

	const confirm = () => dialogRef.close(true);
	const cancel = () => dialogRef.close(false);
</script>

<article>
	<header>
		<h4>Are you sure?</h4>
	</header>
	<p>This cannot be changed later.</p>
	<footer>
		<button type="button" class="secondary" on:click={cancel}>No</button>
		<button type="button" on:click={confirm}>Yes</button>
	</footer>
</article>

<style>
	article {
		border-radius: 0.5rem;
		min-width: 600px;
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
		justify-content: end;
		gap: 1rem;
	}

	button {
		margin-bottom: 0;
	}
</style>
