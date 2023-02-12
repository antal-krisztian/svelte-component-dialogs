<script lang="ts">
	import { DialogProvider } from '$lib';

	import Nav from '../components/Nav.svelte';
</script>

<main class="container">
	<Nav />
	<slot />
	<DialogProvider />
</main>

<style>
</style>
