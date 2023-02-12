import type { PageLoadEvent } from './$types';

export async function load({ fetch }: PageLoadEvent) {
	const informationDialogExample = await fetch('/examples/InformationDialog.example').then((res) =>
		res.text()
	);
	const confirmationDialogExample = await fetch('/examples/ConfirmationDialog.example').then(
		(res) => res.text()
	);
	const scrolledDialogExample = await fetch('/examples/ScrolledDialog.example').then((res) =>
		res.text()
	);
	const formDialogExample = await fetch('/examples/FormDialog.example').then((res) => res.text());

	return {
		informationDialogExample,
		confirmationDialogExample,
		scrolledDialogExample,
		formDialogExample
	};
}
