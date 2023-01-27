<script lang="ts">
	import { DialogProvider } from '$lib';
</script>

<svelte:head>
	<link rel="stylesheet" href="https://unpkg.com/@picocss/pico@latest/css/pico.min.css" />
</svelte:head>
<main class="container">
	<slot />
	<DialogProvider />
</main>

<style>
</style>
