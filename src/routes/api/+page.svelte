<script>
	import BottomNav from '../../components/BottomNav.svelte';
	import { EXAMPLES_PAGE, GETTING_STARTED_PAGE } from '../../utils/pages';
</script>

<hgroup>
	<h1>API</h1>
	<h2>Available options</h2>
</hgroup>
<h2>openDialog</h2>
<p>
	Utility function used to open dialogs with the specified component and options. Returns a
	reference to the created <code><b>Dialog</b></code> on which the user can then define callbacks and
	can close the dialog.
</p>
<table>
	<tr>
		<th>Name</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>component: <code><i>T</i></code></td>
		<td>
			The svelte component to be opened as the content of the dialog. Has to be a svelte component.
		</td>
	</tr>
	<tr>
		<td>options: <code><i>{'Partial<DialogOptions<T>>'}</i></code></td>
		<td>The options and context passed to the dialog.</td>
	</tr>
</table>
<h2>DialogOptions</h2>
<p>Interface that holds the options passed to the dialog upon opening it.</p>
<table>
	<tr>
		<th>Name</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>closeOnBackdropClick</td>
		<td>
			Whether to close the dialog when clicking the backdrop or not. This will only be applied if <code
				><b>modal</b></code
			>
			is set to <code><b>true</b></code>. Default: <code> <b>false</b></code>
		</td>
	</tr>
	<tr>
		<td>closeOnEsc</td>
		<td>
			Whether to close the dialog when the escape key is pressed or not. This will only be applied
			if <code><b>modal</b></code>
			is set to <code><b>true</b></code>. Default: <code> <b>true</b></code>
		</td>
	</tr>
	<tr>
		<td>disableScroll</td>
		<td>
			Whether to disable scrolling the page while the dialog is open or not. Default: <code>
				<b>false</b></code
			>
		</td>
	</tr>
	<tr>
		<td>modal</td>
		<td>
			Whether the dialog should be opened as a modal or not. Default: <code> <b>true</b></code>
		</td>
	</tr>
	<tr>
		<td>transition</td>
		<td>
			The transition function used when opening and closing the modal. Default: <code>
				<b>{'{'}fade{'}'} from svelte/transition</b></code
			>
		</td>
	</tr>
	<tr>
		<td>transitionOptions</td>
		<td>
			Extra options to be passed to <code><b>transition</b></code>.
		</td>
	</tr>
	<tr>
		<td>context</td>
		<td>
			Props to be passed to the <code><b>component</b></code>.
		</td>
	</tr>
</table>
<h2>Dialog</h2>
<p>Class that represents a dialog opened by <code><b>openDialog</b></code>.</p>
<table>
	<tr>
		<th>Name</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>onClose</td>
		<td>
			Close handler for the dialog. Will be called after manually closing the dialog with the <code
				><b>close</b></code
			> method.
		</td>
	</tr>
	<tr>
		<td>onBackdropClicked</td>
		<td>
			Backdrop click handler for the dialog, which will be called when clicking on the backdrop.
			Will be called even if <code><b>closeOnBackdropClick</b></code> is set to
			<code><b>false</b></code>.
		</td>
	</tr>
	<tr>
		<td>onEscapePressed/td> </td><td>
			Escape button handler for the dialog, which will be called when pressing the escape key. Will
			be called even if <code><b>closeOnEsc</b></code> is set to
			<code><b>false</b></code>.
		</td>
	</tr>
	<tr>
		<td>close</td>
		<td>
			Function that closes the dialog manually. Can be passed a <code><b>result</b></code> that will
			then be further passed down to the <code><b>onClose</b></code> handler.
		</td>
	</tr>
</table>
<h2>dialogs</h2>
<p>
	Svelte <code><b>writable</b></code> that holds all open dialogs. Can be used for custom open/close
	logic.
</p>
<table />
<BottomNav previousPage={GETTING_STARTED_PAGE} nextPage={EXAMPLES_PAGE} />
