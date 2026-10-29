import { loadImpactoraFaqs } from '$lib/server/impactora-faq';
import type { PageServerLoad } from './$types';

// Rebuilt at most every 5 minutes, so FAQ edits in Impactora's app-admin show without a deploy.
export const config = { isr: { expiration: 300 } };

export const load: PageServerLoad = async () => ({ faqs: await loadImpactoraFaqs() });
