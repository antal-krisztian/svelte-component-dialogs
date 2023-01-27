import type { ComponentType } from 'svelte';
import type { Dialog } from '../models/dialog.class';

import { dialogs } from './dialog.store';

export const closeDialog = <T extends ComponentType>(dialog: Dialog<T>): void => {
	dialogs.update(($dialogs) => $dialogs.filter((d) => d !== dialog));
};
