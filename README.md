# Svelte Component Dialogs

This library aims to provide a flexible, [Nebular-like](https://akveo.github.io/nebular/) API for opening HTML5 dialogs with pre-made svelte components as the content.

- [Documentation](https://svelte-component-dialogs.vercel.app/)
- [NPM]()

# Installation

```bash
npm install svelte-component-dialogs
```

# Usage

- Add `DialogProvider` somewhere in your app (for SvelteKit you can use your root `+layout.svelte` file)

```html
<script>
	import { DialogProvider } from 'svelte-component-dialogs';
</script>

<slot />
<DialogProvider />
```

- Open your first dialog with the `openDialog` utility

```html
<script>
	import PreMadeComponent from './PreMadeComponent.svelte';
	import { openDialog } from 'svelte-component-dialogs';

	const open = () => openDialog(PreMadeComponent);
</script>

<button on:click="{open}">Open Dialog</button>
```

# Contributing

This is my first open source project, so contributions are welcomed.  
You can start the project locally in the following way:

- Clone the repository
- Run `pnpm install` to install dependencies (or npm, yarn)
- Run `pnpm dev` to start the dev server
- Run `pnpm format` to format the project with eslint and prettier
- Run `pnpm build:package` to build the library
- Run `pnpm build:docs` to build the documentation site

# Roadmap

Some things that still need to be done:

- Write tests for the library
- Add github actions for linting, building and testing the project
- Improve documentation

# License

MIT
