<script lang="ts">
	import Prism from 'svelte-prism';
	import BottomNav from '../components/BottomNav.svelte';
	import { GETTING_STARTED_PAGE } from '../utils/pages';

	const originalExample = `
	<script>
		import Dialog from 'some-package'; 

		const isOpen = false;
		const open = () => {
			isOpen = true;
		};
	<\/script>
	
	<button on:click={open}>Open Dialog</button>
	<Dialog open:isOpen>
		Content...
	</Dialog>
	`;

	const componentExample = `
	<script>
		import PreMadeComponent from './PreMadeComponent.svelte';
		import { openDialog } from 'svelte-component-dialogs';

		const open = () => {
			openDialog(PreMadeComponent, {
				closeOnEsc: false,
				context: {
					title: 'The title'
				}
			});
		};
	<\/script>
	<button on:click={open}>Open Dialog</button>
	`;
</script>

<hgroup>
	<h1>Introduction</h1>
	<h2>Easy to use dialog manager for Svelte</h2>
</hgroup>

<p>
	The purpose of this package is to provide a method of opening HTML5 dialogs in Svelte. The package
	itself provides no styles and even removes the default dialog styles (exception being the
	backdrop) leaving the user to style the container and the content as they please.
</p>

<p>
	Svelte Component dialogs was built after I took a quick look at the available component libraries
	for Svelte, and realized that most of them handle dialogs in the following way:
</p>
<Prism language="html" source={originalExample} />

<p>
	This is fine, but as a developer who has mostly worked with Angular in the past, I missed the
	ability to open dialogs with reusable, pre-made components as their content.
</p>
<p>
	I would very much prefer the following (inspired by the <a href="https://akveo.github.io/nebular/"
		>Nebular UI Kit</a
	>) syntax:
</p>
<Prism language="html" source={componentExample} />
<BottomNav nextPage={GETTING_STARTED_PAGE} />
