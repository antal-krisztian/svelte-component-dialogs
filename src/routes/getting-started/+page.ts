import type { PageLoadEvent } from './$types';

export async function load({ fetch }: PageLoadEvent) {
	const providerExample = await fetch('/examples/Provider.example').then((res) => res.text());
	const basicDialogExample = await fetch('/examples/BasicDialog.example').then((res) => res.text());

	return { providerExample, basicDialogExample };
}
