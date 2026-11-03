import { redirect } from '@sveltejs/kit';

// Resources is a menu heading only; its old landing page is hidden.
export function load() {
	redirect(301, '/blog');
}
