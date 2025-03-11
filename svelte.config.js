import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),
		files: {
			routes: 'src/app/routes',
			lib: 'src',
			appTemplate: 'src/app/index.html',
			assets: 'public'
		},
		alias: {
			'@/*': 'src/*'
		}
	}
};

export default config;
