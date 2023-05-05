import preprocess from 'svelte-preprocess';

import { vitePreprocess } from '@sveltejs/kit/vite';

import adapter from "sveltekit-adapter-firebase";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		preprocess({
			postcss: true,
			preserve: ['ld+json']
		})
	],

	kit: {
		adapter: adapter(),
		inlineStyleThreshold: Infinity
	}
};

export default config;
