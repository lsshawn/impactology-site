export interface BlogPost {
	id: number;
	slug: string;
	title: string;
	excerpt: string;
	date: string;
	featuredImage: string;
	author: string;
	content: string;
}

// Load posts from /src/content/posts/ markdown files
import { getPostBySlug, getAllPosts } from '$lib/content/posts';

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
	return getPostBySlug(slug);
}

export function getAllBlogPosts(): BlogPost[] {
	return getAllPosts();
}
