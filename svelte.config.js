
import adapter from '@sveltejs/adapter-static';
import preprocess from "svelte-preprocess";

const dev = "production" === "development";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages:"docs",
			assets:"docs",
			fallback: '200.html'
		}),
		paths:{
			base: dev ? "" : "/carvesco"
		}
	},
	preprocess:[
		preprocess({
			postcss:true,
		}),
	],
	
};

export default config;
