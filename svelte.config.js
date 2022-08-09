import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'build', // path to public directory
			assets: 'build', // path to public directory
			fallback: null
		}),
		prerender: {
			crawl: true,
			enabled: true,
			onError: 'continue',
			default: true
		}
	},
	preprocess: [
		preprocess({
			postcss: true
		})
	]
};

export default config;
