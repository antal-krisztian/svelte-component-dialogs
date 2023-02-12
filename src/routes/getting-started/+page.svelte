<script lang="ts">
	import { openDialog } from '$lib';
	import Prism from 'svelte-prism';
	import BottomNav from '../../components/BottomNav.svelte';
	import GettingStartedDialog from '../../components/dialogs/GettingStartedDialog.svelte';
	import { INTRODUCTION_PAGE, API_PAGE } from '../../utils/pages';

	const openGettingStartedDialog = () => {
		openDialog(GettingStartedDialog, {
			closeOnBackdropClick: true,
			closeOnEsc: true
		});
	};

	const dialogProviderCode = `
	<script>
		import { DialogProvider } from 'svelte-component-dialogs';
	<\/script>

	<slot \\>
	<DialogProvider \\>
	`;

	const basicDialogCode = `
	<script>
		import PreMadeComponent from './PreMadeComponent.svelte';
		import { openDialog } from 'svelte-component-dialogs';

		const open = () => {
			openDialog(PreMadeComponent);
		};
	<\/script>

	<button on:click={open}>Open Dialog</button>
	`;
</script>

<hgroup>
	<h1>Getting Started</h1>
	<h2>Three steps to start opening dialogs</h2>
</hgroup>

<ol>
	<li>
		<p>Install the package using your favored package manager:</p>
		<p><code> npm install --save-dev svelte-component-dialogs </code></p>
	</li>
	<li>
		<p>
			Add the <code>DialogProvider</code> component somewhere in your app (for SvelteKit the base
			<code>+layout.svelte</code> file is a good place):
		</p>
		<Prism language="html" source={dialogProviderCode} />
	</li>
	<li>
		<p>Start using dialogs:</p>
		<Prism language="html" source={basicDialogCode} />
	</li>
</ol>
<button on:click={openGettingStartedDialog}>Open Basic Dialog</button>
<BottomNav previousPage={INTRODUCTION_PAGE} nextPage={API_PAGE} />

<style>
	button {
		margin-left: auto;
	}
</style>
