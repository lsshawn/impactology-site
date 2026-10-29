export interface Faq {
	question: string;
	/** HTML. */
	answer: string;
}

/**
 * The FAQ on /impactora: impactora.com's For Organisations questions, which
 * Impactora's app admins edit (app-admin → Content → Help & prompts). Kept
 * for 5 minutes per instance; FALLBACK (the October 2026 copy) when the api
 * is slow, down or has none.
 */
const API = 'https://api.impactora.com.au/v1/content/site-faq?page=organisations';
const TTL_MS = 5 * 60_000;

export const FALLBACK: Faq[] = [
	{
		question: 'What is Impactora?',
		answer: `<p>We love people more than code. And while we believe in the power of AI, we believe even more in the potential of people. IMPACTORA is an AI and human-powered platform designed to help you build the confidence, clarity and capabilities to navigate the moments that matter at work. From difficult conversations and career decisions to stepping into a leadership role, IMPACTORA provides personalised advice, daily inspiration and practical tools tailored to your goals, career stage and challenges to help you turn learning into action and ideas into progress. Built for employees and leaders, IMPACTORA grows with you throughout your career.</p>`
	},
	{
		question: 'How does IMPACTORA keep my information safe?',
		answer: `<p>We take the protection of your personal information seriously. IMPACTORA uses security measures and processes designed to safeguard your data. For more information about how your information is collected, stored, used and protected, please read our <a href="https://www.impactology.com.au/legals1/impactora-privacy">Privacy Policy</a>.</p>`
	},
	{
		question: 'How can IMPACTORA help our organisation and its people grow?',
		answer: `<p>Your people are your greatest opportunity for growth. IMPACTORA gives employees access to personalised AI-powered coaching, practical advice and learning in the flow of work. It helps them build confidence, strengthen capabilities, make better decisions and take greater ownership of their development. For organisations, this means creating more opportunities for continuous learning, stronger performance and a culture where people are empowered to grow.</p>`
	},
	{
		question: 'Is IMPACTORA right for our organisation and employees?',
		answer: `<p>IMPACTORA is designed for organisations that want to invest in their people and make professional development more accessible, practical and personalised. It's particularly valuable for organisations with emerging talent, early-career employees, first-time managers and developing leaders. Whether you're a growing business or an established organisation, IMPACTORA helps support employee development without relying solely on traditional training programs.</p>`
	},
	{
		question: 'Who are the target employees for IMPACTORA?',
		answer: `<p>IMPACTORA is designed for employees at different stages of their career, with a particular focus on early-career professionals, emerging talent, aspiring leaders, first-time managers and developing leaders.</p>
<p>It's especially valuable for employees navigating new responsibilities, building confidence and capability, preparing for career progression or learning how to lead others.</p>
<p>Whether they're finding their feet in a new role or preparing for their next career move, IMPACTORA provides personalised advice, practical tools and learning opportunities to help them take greater ownership of their development, grow and succeed at work.</p>`
	}
];

let kept: { at: number; faqs: Faq[] } | null = null;

/** The api's rows, or null when they aren't the shape we expect. */
export function toFaqs(rows: unknown): Faq[] | null {
	if (!Array.isArray(rows)) return null;
	const faqs = rows.flatMap((r) =>
		r && typeof r.title === 'string' && typeof r.html === 'string' && r.title.trim()
			? [{ question: r.title.trim(), answer: r.html }]
			: []
	);
	return faqs.length ? faqs : null;
}

export async function loadImpactoraFaqs(fetcher: typeof fetch = fetch): Promise<Faq[]> {
	if (kept && Date.now() - kept.at < TTL_MS) return kept.faqs;
	try {
		const res = await fetcher(API, { signal: AbortSignal.timeout(2500) });
		const faqs = res.ok ? toFaqs(await res.json()) : null;
		if (!faqs) return FALLBACK;
		kept = { at: Date.now(), faqs };
		return faqs;
	} catch {
		return FALLBACK;
	}
}
