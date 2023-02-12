import type { PageLoadEvent } from './$types';

export async function load({ fetch }: PageLoadEvent) {
	const originalExample = await fetch('/examples/Original.example').then((res) => res.text());
	const componentExample = await fetch('/examples/Component.example').then((res) => res.text());

	return { originalExample, componentExample };
}
