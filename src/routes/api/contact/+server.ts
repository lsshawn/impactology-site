import { json, error } from '@sveltejs/kit';
import sgMail from '@sendgrid/mail';
import {
	SENDGRID_API_KEY,
	CONTACT_EMAIL_FROM,
	CONTACT_EMAIL_TO,
	CONTACT_EMAIL_TO_DEV
} from '$env/static/private';
import { dev } from '$app/environment';

import type { RequestHandler } from './$types';

sgMail.setApiKey(SENDGRID_API_KEY);

export const POST: RequestHandler = async ({ request }) => {
	const { firstName, lastName, email, phone, company, message } = await request.json();

	if (!firstName || !lastName || !email || !message) {
		throw error(400, 'Missing required fields');
	}

	const to = dev ? CONTACT_EMAIL_TO_DEV : CONTACT_EMAIL_TO;

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
		from: { email: CONTACT_EMAIL_FROM, name: 'Website Contact Form' },
		replyTo: email,
		subject: `New website enquiry from ${firstName} ${lastName}`,
		html
	});

	return json({ ok: true });
};
