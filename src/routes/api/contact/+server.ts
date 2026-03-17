import { json, error } from '@sveltejs/kit';
import sgMail from '@sendgrid/mail';
import { SENDGRID_API_KEY } from '$env/static/private';
import { dev } from '$app/environment';

import type { RequestHandler } from './$types';

sgMail.setApiKey(SENDGRID_API_KEY);

export const POST: RequestHandler = async ({ request }) => {
	const { firstName, lastName, email, phone, company, message } = await request.json();

	if (!firstName || !lastName || !email || !message) {
		throw error(400, 'Missing required fields');
	}

	const to = dev ? 'sub@sshawn.com' : 'george@impactology.com.au';

	const html = `
		<h2>New Contact Form Submission</h2>
		<p><strong>Name:</strong> ${firstName} ${lastName}</p>
		<p><strong>Email:</strong> ${email}</p>
		<p><strong>Phone:</strong> ${phone || '—'}</p>
		<p><strong>Company:</strong> ${company || '—'}</p>
		<hr />
		<p><strong>Message:</strong></p>
		<p>${message.replace(/\n/g, '<br>')}</p>
	`;

	await sgMail.send({
		to,
		from: { email: 'do-not-reply@impactora.com.au', name: 'Website Contact Form' },
		replyTo: email,
		subject: `New website enquiry from ${firstName} ${lastName}`,
		html
	});

	return json({ ok: true });
};
