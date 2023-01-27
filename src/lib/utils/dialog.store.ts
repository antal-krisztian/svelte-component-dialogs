import type { ComponentType } from 'svelte';
import type { Dialog } from '../models/dialog.class';

import { writable } from 'svelte/store';

/**
 * Writable store containing the array of open dialogs.
 */
export const dialogs = writable<Dialog<ComponentType>[]>([]);
