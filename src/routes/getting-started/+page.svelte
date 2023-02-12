<script lang="ts">
	import { openDialog } from '$lib';
	import Prism from 'svelte-prism';

	import BottomNav from '../../components/BottomNav.svelte';
	import GettingStartedDialog from '../../components/dialogs/GettingStartedDialog.svelte';
	import { INTRODUCTION_PAGE, API_PAGE } from '../../utils/pages';

	export let data: { providerExample: string; basicDialogExample: string };

	const openGettingStartedDialog = () => {
		openDialog(GettingStartedDialog, {
			closeOnBackdropClick: true,
			closeOnEsc: true
		});
	};
</script>

<svelte:head>
	<title>Getting Started</title>
</svelte:head>

<hgroup>
	<h1>Getting Started</h1>
	<h2>Three steps to start opening dialogs</h2>
</hgroup>

<ol>
	<li>
		<p>Install the package using your favored package manager:</p>
		<p><code><i>npm install --save-dev svelte-component-dialogs</i></code></p>
	</li>
	<li>
		<p>
			Add the <code><i>DialogProvider</i></code> component somewhere in your app (for SvelteKit the
			base
			<code><i>+layout.svelte</i></code> file is a good place):
		</p>
		<Prism language="html" source={data.providerExample} />
	</li>
	<li>
		<p>Start using dialogs:</p>
		<Prism language="html" source={data.basicDialogExample} />
	</li>
</ol>
<button on:click={openGettingStartedDialog}>Open Basic Dialog</button>
<BottomNav previousPage={INTRODUCTION_PAGE} nextPage={API_PAGE} />

<style>
	button {
		margin-left: auto;
	}
</style>
