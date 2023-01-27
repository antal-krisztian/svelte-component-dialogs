// Reexport your entry components here
import type { Dialog } from './models/dialog.class';

import DialogProvider from './components/DialogProvider.svelte';
import { openDialog } from './utils/open-dialog.util';
import { dialogs } from './utils/dialog.store';

export { type Dialog, DialogProvider, openDialog, dialogs };
