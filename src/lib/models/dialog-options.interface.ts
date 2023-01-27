import type { ComponentProps, ComponentType } from 'svelte';
import { fade, type TransitionConfig } from 'svelte/transition';

export type TypedComponent<T> = T extends ComponentType<infer P> ? P : never;
export type TransitionFn = (node: Element, options?: object) => TransitionConfig;

export interface DialogOptions<T> {
	closeOnBackdropClick: boolean;
	closeOnEsc: boolean;
	disableScroll: boolean;
	modal: boolean;
	transition: TransitionFn;
	context: Omit<ComponentProps<TypedComponent<T>>, 'dialogRef'>;
}

export const DEFAULT_DIALOG_OPTIONS: Omit<DialogOptions<never>, 'context'> = {
	closeOnEsc: true,
	closeOnBackdropClick: false,
	disableScroll: false,
	modal: true,
	transition: fade
};
