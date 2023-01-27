/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ComponentType } from 'svelte';
import { DEFAULT_DIALOG_OPTIONS, type DialogOptions } from './dialog-options.interface';

import { closeDialog } from '../utils/close-dialog.util';

export class Dialog<T extends ComponentType> {
	public readonly component: T;
	public readonly options: Partial<DialogOptions<T>>;

	public onClose?: (result: any) => void;
	public onBackdropClicked?: () => void;
	public onEscapePressed?: () => void;

	constructor(component: T, options?: Partial<DialogOptions<T>>) {
		this.component = component;
		this.options = { ...DEFAULT_DIALOG_OPTIONS, ...options };
	}

	public close<K>(result?: K) {
		if (this.onClose) {
			this.onClose(result);
		}

		closeDialog(this);
	}
}
