<script lang="ts">
	import { openDialog } from '$lib';
	import Prism from 'svelte-prism';

	import BottomNav from '../../components/BottomNav.svelte';
	import ConfirmationDialog from '../../components/dialogs/ConfirmationDialog.svelte';
	import FormDialog from '../../components/dialogs/FormDialog.svelte';
	import InformationDialog from '../../components/dialogs/InformationDialog.svelte';
	import ScrolledDialog from '../../components/dialogs/ScrolledDialog.svelte';
	import { API_PAGE } from '../../utils/pages';

	export let data: {
		informationDialogExample: string;
		confirmationDialogExample: string;
		scrolledDialogExample: string;
		formDialogExample: string;
	};

	const openInformationDialog = () => {
		openDialog(InformationDialog);
	};

	const openConfirmationDialog = () => {
		const dialog = openDialog(ConfirmationDialog, {
			closeOnBackdropClick: false,
			closeOnEsc: false
		});
		dialog.onClose = (result: boolean) => {
			alert(result ? 'Confirmed!' : 'Cancelled!');
		};
	};

	const openScrolledDialog = () => {
		openDialog(ScrolledDialog, { disableScroll: true });
	};

	const openFormDialog = () => {
		const dialog = openDialog(FormDialog);
		dialog.onClose = (result?: { data: { name: string; email: string } }) => {
			if (result) {
				alert(`Dialog closed with: ${JSON.stringify(result.data)}`);
			}
		};
	};
</script>

<hgroup>
	<h1>Examples</h1>
	<h2>More complex examples</h2>
</hgroup>
<p>
	Examples for some of the common use-cases that you might need. Because of the<i>bare-bones</i> take
	this library takes, you can obviously come up with better solutions.
</p>
<h2>Information dialog</h2>
<p>
	A simple information dialog. You can style the component however you like. This example uses some
	default <b>PicoCSS</b> styles.
</p>
<Prism language="html" source={data.informationDialogExample} />
<button on:click={openInformationDialog}>Open Information Dialog</button>

<h2>Confirmation dialog</h2>
<p>
	A confirmation dialog. You can set <code><i>onClose</i></code> either inside the component by
	using <code><i>dialogRef</i></code> or outside with the reference returned by
	<code><i>openDialog</i></code>. This example uses the second method. You should also set
	<code><i>closeOnEsc</i></code>
	and <code><i>closeOnBackdropClick</i></code> to <code><i>false</i></code> for the best results.
</p>
<Prism language="html" source={data.confirmationDialogExample} />
<button on:click={openConfirmationDialog}>Open Confirmation Dialog</button>

<h2>Scrolled content</h2>
<p>
	Since you are in control of the dialog content, you just have to set your wrapper to have a max
	height. Set <code><i>disableScroll</i></code> to <code><i>true</i></code> in order to disable the background
	scrolling by accident.
</p>
<Prism language="html" source={data.scrolledDialogExample} />
<button on:click={openScrolledDialog}>Open Scrolled Dialog</button>

<h2>Form content</h2>
<p>You can return anything as a result when closing a dialog, for example the result of a form.</p>
<Prism language="html" source={data.formDialogExample} />
<button on:click={openFormDialog}>Open Form Dialog</button>

<BottomNav previousPage={API_PAGE} />

<style>
	button {
		margin-left: auto;
	}
</style>
