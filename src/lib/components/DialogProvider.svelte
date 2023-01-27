<script lang="ts">
	import { dialogs } from '../utils/dialog.store';
	import DialogComponent from './DialogComponent.svelte';
</script>

{#each $dialogs as dialog}
	<DialogComponent {dialog} />
{/each}
