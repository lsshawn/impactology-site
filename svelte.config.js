import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [mdsvex({ extensions: ['.md'] })],
	kit: {
		adapter: adapter()
	},
	vitePlugin: {
		inspector: {
			toggleKeyCombo: 'alt-g'
		}
	}
};

export default config;
