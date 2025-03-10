import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			pages: 'docs',
			assets: 'docs',
			fallback: 'index.html',
			strict: false
		})
	}
};

export default config;
