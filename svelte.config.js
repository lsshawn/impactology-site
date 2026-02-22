import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [vitePreprocess(), mdsvex({ extensions: ['.md'] })],
	kit: {
		adapter: adapter({ runtime: 'nodejs24.x' }),
		prerender: {
			handleMissingId: 'ignore',
			handleHttpError: ({ status, path }) => {
				if (path === '/blog' && status === 500) {
					return;
				}
				throw new Error(`${status} ${path}`);
			}
		}
	},
	vitePlugin: {
		inspector: {
			toggleKeyCombo: 'alt-g'
		}
	}
};

export default config;
