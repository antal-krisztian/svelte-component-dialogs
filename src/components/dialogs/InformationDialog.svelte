<script lang="ts">
	import type { Dialog } from '$lib';

	export let dialogRef: Dialog;
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
		<h4>Very important information!</h4>
	</header>
	<p>You should really know about this.</p>
	<footer>
		<button
			type="button"
			class="secondary"
			style="margin-left: auto;"
			on:click={() => dialogRef.close()}>OK</button
		>
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

	button {
		margin-bottom: 0;
	}

	button.close {
		background-color: transparent;
		border: none;
	}
</style>
