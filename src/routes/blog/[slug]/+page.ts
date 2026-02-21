import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	try {
		const post = await import(`../../../content/posts/${params.slug}.md`);
		return {
			component: post.default,
			metadata: post.metadata
		};
	} catch {
		return { component: null, metadata: null };
	}
};
