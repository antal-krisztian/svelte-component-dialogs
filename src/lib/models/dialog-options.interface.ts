import type { ComponentProps, ComponentType } from 'svelte';
import { fade, type TransitionConfig } from 'svelte/transition';

/**
 * Utility type to infer the inner `SvelteComponentTyped` type of `ComponentType`.
 */
export type TypedComponent<T> = T extends ComponentType<infer P> ? P : never;

/**
 * Utility type to represent svelte transitions.
 */
export type TransitionFn = (node: Element, options?: object) => TransitionConfig;

/**
 * Options that can be passed to a dialog.
 * `closeOnBackdropClick` and `closeOnEsc` will only be applied if `modal` is set to `true`.
 */
export interface DialogOptions<T> {
	closeOnBackdropClick: boolean;
	closeOnEsc: boolean;
	disableScroll: boolean;
	modal: boolean;
	transition: TransitionFn;
	transitionOptions: object;
	context: Omit<ComponentProps<TypedComponent<T>>, 'dialogRef'>;
}

/**
 * The default options for a dialog.
 * Options provided when opening a dialog will be **merged** with these.
 */
export const DEFAULT_DIALOG_OPTIONS: Omit<DialogOptions<never>, 'context'> = {
	closeOnEsc: true,
	closeOnBackdropClick: false,
	disableScroll: false,
	modal: true,
	transition: fade,
	transitionOptions: { duration: 100 }
};
