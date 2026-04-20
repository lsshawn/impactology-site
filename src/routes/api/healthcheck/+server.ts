import { json, error } from '@sveltejs/kit';
import { HEALTHCHECK_SECRET } from '$env/static/private';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ url, fetch }) => {
	if (url.searchParams.get('secret') !== HEALTHCHECK_SECRET) {
		throw error(401, 'Unauthorized');
	}

	const results: Record<string, { ok: boolean; status: number; body: unknown }> = {};

	const contactRes = await fetch('/api/contact', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			firstName: 'Healthcheck',
			lastName: 'Bot',
			email: 'healthcheck@impactology.com.au',
			phone: '',
			company: 'Healthcheck',
			message: 'Automated healthcheck — please ignore.',
			test: true
		})
	});
	results.contact = {
		ok: contactRes.ok,
		status: contactRes.status,
		body: await contactRes.json().catch(() => null)
	};

	const newsletterRes = await fetch('/api/newsletter', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ email: 'healthcheck@impactology.com.au', test: true })
	});
	results.newsletter = {
		ok: newsletterRes.ok,
		status: newsletterRes.status,
		body: await newsletterRes.json().catch(() => null)
	};

	const allOk = results.contact.ok && results.newsletter.ok;
	return json({ ok: allOk, results }, { status: allOk ? 200 : 500 });
};
