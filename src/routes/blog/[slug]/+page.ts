import { getBlogPostBySlug } from '$lib/data/blog-posts';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	const post = getBlogPostBySlug(params.slug);

	return { post: post ?? null };
};
