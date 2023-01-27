import type { ComponentType } from 'svelte';
import type { DialogOptions } from '../models/dialog-options.interface';

import { Dialog } from '../models/dialog.class';
import { dialogs } from './dialog.store';

export const openDialog = <T extends ComponentType>(
	component: T,
	options?: Partial<DialogOptions<T>>
): Dialog<T> => {
	const dialog = new Dialog(component, options);
	dialogs.update(($dialogs) => [...$dialogs, dialog]);
	return dialog;
};
