<script lang="ts">
	import type { Page } from '../utils/pages';

	export let previousPage: Page | undefined = undefined;
	export let nextPage: Page | undefined = undefined;
</script>

<nav>
	{#if previousPage}
		<a href={previousPage.link}>Previous: {previousPage.name}</a>
	{/if}
	{#if nextPage}
		<a href={nextPage.link} class="ml-auto">Next: {nextPage.name}</a>
	{/if}
</nav>

<style>
	nav {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 1.5rem;
		margin-top: 1.5rem;
	}

	.ml-auto {
		margin-left: auto;
	}
</style>
