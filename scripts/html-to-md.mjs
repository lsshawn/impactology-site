#!/usr/bin/env node
/**
 * Converts HTML body content in all .md posts to proper markdown.
 * Preserves YAML frontmatter exactly.
 */

import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const postsDir = join(__dirname, '../src/content/posts');

function htmlToMarkdown(html) {
	let md = html;

	// Normalize line endings
	md = md.replace(/\r\n/g, '\n');

	// Convert headings (handle attributes too)
	md = md.replace(/<h2[^>]*>([\s\S]*?)<\/h2>/gi, (_, content) => `\n## ${stripInlineTags(content).trim()}\n`);
	md = md.replace(/<h3[^>]*>([\s\S]*?)<\/h3>/gi, (_, content) => `\n### ${stripInlineTags(content).trim()}\n`);
	md = md.replace(/<h4[^>]*>([\s\S]*?)<\/h4>/gi, (_, content) => `\n#### ${stripInlineTags(content).trim()}\n`);

	// Convert <strong> and <b>
	md = md.replace(/<strong[^>]*>([\s\S]*?)<\/strong>/gi, (_, content) => `**${stripInlineTags(content).trim()}**`);
	md = md.replace(/<b[^>]*>([\s\S]*?)<\/b>/gi, (_, content) => `**${stripInlineTags(content).trim()}**`);

	// Convert <em> and <i>
	md = md.replace(/<em[^>]*>([\s\S]*?)<\/em>/gi, (_, content) => `_${stripInlineTags(content).trim()}_`);
	md = md.replace(/<i[^>]*>([\s\S]*?)<\/i>/gi, (_, content) => `_${stripInlineTags(content).trim()}_`);

	// Convert <a href="...">...</a>
	md = md.replace(/<a\s+href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi, (_, href, content) => `[${stripInlineTags(content).trim()}](${href})`);

	// Convert lists - process ul/ol blocks
	md = md.replace(/<ul[^>]*>([\s\S]*?)<\/ul>/gi, (_, listContent) => {
		const items = extractListItems(listContent);
		return '\n' + items.map(item => `- ${item}`).join('\n') + '\n';
	});

	md = md.replace(/<ol[^>]*>([\s\S]*?)<\/ol>/gi, (_, listContent) => {
		const items = extractListItems(listContent);
		return '\n' + items.map((item, i) => `${i + 1}. ${item}`).join('\n') + '\n';
	});

	// Convert <p> tags
	md = md.replace(/<p[^>]*>([\s\S]*?)<\/p>/gi, (_, content) => {
		const text = content.trim();
		return text ? `\n${text}\n` : '';
	});

	// Convert <hr>
	md = md.replace(/<hr[^>]*\/?>/gi, '\n---\n');

	// Convert <br>
	md = md.replace(/<br[^>]*\/?>/gi, '\n');

	// Strip any remaining HTML tags
	md = md.replace(/<[^>]+>/g, '');

	// Decode HTML entities
	md = decodeEntities(md);

	// Clean up excessive blank lines (more than 2 consecutive)
	md = md.replace(/\n{3,}/g, '\n\n');

	// Trim leading/trailing whitespace
	md = md.trim();

	return md;
}

function extractListItems(listContent) {
	const items = [];
	const liRegex = /<li[^>]*>([\s\S]*?)<\/li>/gi;
	let match;
	while ((match = liRegex.exec(listContent)) !== null) {
		const content = match[1].trim();
		// Process inline formatting within list items
		let itemText = content;
		itemText = itemText.replace(/<strong[^>]*>([\s\S]*?)<\/strong>/gi, (_, c) => `**${stripAllTags(c).trim()}**`);
		itemText = itemText.replace(/<b[^>]*>([\s\S]*?)<\/b>/gi, (_, c) => `**${stripAllTags(c).trim()}**`);
		itemText = itemText.replace(/<em[^>]*>([\s\S]*?)<\/em>/gi, (_, c) => `_${stripAllTags(c).trim()}_`);
		itemText = itemText.replace(/<i[^>]*>([\s\S]*?)<\/i>/gi, (_, c) => `_${stripAllTags(c).trim()}_`);
		itemText = itemText.replace(/<a\s+href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi, (_, href, c) => `[${stripAllTags(c).trim()}](${href})`);
		itemText = stripAllTags(itemText).trim();
		itemText = decodeEntities(itemText);
		if (itemText) items.push(itemText);
	}
	return items;
}

function stripInlineTags(html) {
	// Process inline tags within headings/paragraphs - keep text content
	let text = html;
	text = text.replace(/<strong[^>]*>([\s\S]*?)<\/strong>/gi, (_, c) => `**${stripAllTags(c).trim()}**`);
	text = text.replace(/<b[^>]*>([\s\S]*?)<\/b>/gi, (_, c) => `**${stripAllTags(c).trim()}**`);
	text = text.replace(/<em[^>]*>([\s\S]*?)<\/em>/gi, (_, c) => `_${stripAllTags(c).trim()}_`);
	text = text.replace(/<i[^>]*>([\s\S]*?)<\/i>/gi, (_, c) => `_${stripAllTags(c).trim()}_`);
	text = text.replace(/<a\s+href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi, (_, href, c) => `[${stripAllTags(c).trim()}](${href})`);
	text = stripAllTags(text);
	text = decodeEntities(text);
	return text;
}

function stripAllTags(html) {
	return html.replace(/<[^>]+>/g, '');
}

function decodeEntities(str) {
	return str
		.replace(/&amp;/g, '&')
		.replace(/&lt;/g, '<')
		.replace(/&gt;/g, '>')
		.replace(/&quot;/g, '"')
		.replace(/&#039;/g, "'")
		.replace(/&apos;/g, "'")
		.replace(/&nbsp;/g, ' ')
		.replace(/&#8217;/g, '\u2019')
		.replace(/&#8216;/g, '\u2018')
		.replace(/&#8220;/g, '\u201C')
		.replace(/&#8221;/g, '\u201D')
		.replace(/&#8211;/g, '\u2013')
		.replace(/&#8212;/g, '\u2014')
		.replace(/&#8230;/g, '\u2026');
}

function parseFrontmatter(raw) {
	const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
	if (!match) return { frontmatter: '', content: raw };
	return { frontmatter: match[1], content: match[2] };
}

// Process all .md files
const files = readdirSync(postsDir).filter(f => f.endsWith('.md'));
console.log(`Processing ${files.length} files...`);

for (const file of files) {
	const filePath = join(postsDir, file);
	const raw = readFileSync(filePath, 'utf-8');
	const { frontmatter, content } = parseFrontmatter(raw);

	// Check if content is HTML (has <p> or <h2> tags)
	if (!content.includes('<p') && !content.includes('<h2') && !content.includes('<ul')) {
		console.log(`  SKIP (already markdown?): ${file}`);
		continue;
	}

	const markdownContent = htmlToMarkdown(content);
	const newFile = `---\n${frontmatter}\n---\n\n${markdownContent}\n`;

	writeFileSync(filePath, newFile, 'utf-8');
	console.log(`  CONVERTED: ${file}`);
}

console.log('Done!');
