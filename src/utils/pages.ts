import { base } from '$app/paths';

export interface Page {
	link: string;
	name: string;
}

export const INTRODUCTION_PAGE: Page = {
	link: `${base}/`,
	name: 'Introduction'
};

export const GETTING_STARTED_PAGE: Page = {
	link: `${base}/getting-started`,
	name: 'Getting Started'
};

export const API_PAGE: Page = {
	link: `${base}/api`,
	name: 'API'
};

export const EXAMPLES_PAGE: Page = {
	link: `${base}/examples`,
	name: 'Examples'
};
