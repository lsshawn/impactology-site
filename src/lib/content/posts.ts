import type { BlogPost } from '$lib/data/blog-posts';

function parseFrontmatter(raw: string): { metadata: Record<string, string>; content: string } {
	const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
	if (!match) return { metadata: {}, content: raw };

	const metadata: Record<string, string> = {};
	for (const line of match[1].split('\n')) {
		const colon = line.indexOf(':');
		if (colon === -1) continue;
		const key = line.slice(0, colon).trim();
		let value = line.slice(colon + 1).trim();
		// Strip surrounding quotes and unescape
		if (value.startsWith('"') && value.endsWith('"')) {
			value = value.slice(1, -1).replace(/\\"/g, '"');
		} else if (value.startsWith("'") && value.endsWith("'")) {
			value = value.slice(1, -1);
		}
		metadata[key] = value;
	}

	return { metadata, content: match[2].trim() };
}

const postFiles = import.meta.glob('/src/content/posts/*.md', {
	eager: true,
	query: '?raw',
	import: 'default'
}) as Record<string, string>;

const posts: Record<string, BlogPost> = {};

for (const [path, raw] of Object.entries(postFiles)) {
	const { metadata, content } = parseFrontmatter(raw);
	const slug = metadata.slug || path.split('/').pop()!.replace('.md', '');

	posts[slug] = {
		id: Number(metadata.id),
		slug,
		title: metadata.title,
		excerpt: metadata.excerpt,
		date: metadata.date,
		featuredImage: metadata.featuredImage,
		author: metadata.author,
		content
	};
}

export function getPostBySlug(slug: string): BlogPost | undefined {
	return posts[slug];
}

export function getAllPosts(): BlogPost[] {
	return Object.values(posts).sort(
		(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
	);
}

export function getAllPostSlugs(): string[] {
	return Object.keys(posts);
}
