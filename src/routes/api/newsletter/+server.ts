import { json } from '@sveltejs/kit';
import { MAILCHIMP_API_KEY, MAILCHIMP_LIST_ID } from '$env/static/private';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {
	const { email } = await request.json();

	if (!email) {
		return json({ ok: false, message: 'Email is required' }, { status: 400 });
	}

	const dc = MAILCHIMP_API_KEY.split('-')[1];

	const res = await fetch(
		`https://${dc}.api.mailchimp.com/3.0/lists/${MAILCHIMP_LIST_ID}/members`,
		{
			method: 'POST',
			headers: {
				Authorization: `apikey ${MAILCHIMP_API_KEY}`,
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email_address: email,
				status: 'subscribed'
			})
		}
	);

	if (!res.ok) {
		const data = await res.json();
		if (data.title === 'Member Exists') {
			return json({ ok: true, message: 'You are already subscribed!' });
		}
		return json({ ok: false, message: 'Failed to subscribe. Please try again.' }, { status: 500 });
	}

	return json({ ok: true, message: 'Successfully subscribed!' });
};
