import type { ComponentType } from 'svelte';
import type { DialogOptions } from '../models/dialog-options.interface';

import { Dialog } from '../models/dialog.class';
import { dialogs } from './dialog.store';

/**
 * Opens `component` as a dialog.
 * @param component - The component to be opened as the content of the dialog. Has to be a svelte component.
 * @param options - The options and context passed to the dialog.
 * @returns - Reference to the created dialog.
 */
export const openDialog = <T extends ComponentType>(
	component: T,
	options?: Partial<DialogOptions<T>>
): Dialog<T> => {
	const dialog = new Dialog(component, options);
	dialogs.update(($dialogs) => [...$dialogs, dialog]);
	return dialog;
};
