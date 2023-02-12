/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ComponentType } from 'svelte';
import { DEFAULT_DIALOG_OPTIONS, type DialogOptions } from './dialog-options.interface';

import { closeDialog } from '../utils/close-dialog.util';

/**
 * Class representation of an open dialog.
 * Holds the component, options and close callbacks associated with the dialog.
 */
export class Dialog<T extends ComponentType = any> {
	/**
	 * The component acting as the content of the dialog.
	 */
	public readonly component: T;

	/**
	 * The options passed to the dialog.
	 */
	public readonly options: Partial<DialogOptions<T>>;

	/**
	 * Close handler for the dialog, which will be called after manually closing the dialog with the `close` method.
	 */
	public onClose?: (result: any) => void;

	/**
	 * Backdrop click handler for the dialog, which will be called when clicking on the backdrop. Will be called even if `closeOnBackdropClick` is set to `false`.
	 */
	public onBackdropClicked?: () => void;

	/**
	 * Escape button handler for the dialog, which will be called when pressing the escape key. Will be called even if `closeOnEsc` is set to `false`.
	 */
	public onEscapePressed?: () => void;

	/**
	 * @param component - The component to be opened as the content of the dialog. Has to be a svelte component.
	 * @param options - The options and context passed to the dialog.
	 */
	constructor(component: T, options?: Partial<DialogOptions<T>>) {
		this.component = component;
		this.options = { ...DEFAULT_DIALOG_OPTIONS, ...options };
	}

	/**
	 * Closes the dialog.
	 * @param result - The object to be passed to the `onClose` handler
	 */
	public close<K>(result?: K) {
		if (this.onClose) {
			this.onClose(result);
		}

		closeDialog(this);
	}
}
