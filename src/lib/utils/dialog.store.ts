import type { ComponentType } from 'svelte';
import type { Dialog } from '../models/dialog.class';

import { writable } from 'svelte/store';

export const dialogs = writable<Dialog<ComponentType>[]>([]);
