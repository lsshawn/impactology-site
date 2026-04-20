import { json } from '@sveltejs/kit';
import sgMail from '@sendgrid/mail';
import { SENDGRID_API_KEY } from '$env/static/private';
import { dev } from '$app/environment';

import type { RequestHandler } from './$types';

sgMail.setApiKey(SENDGRID_API_KEY);

export const POST: RequestHandler = async ({ request }) => {
	const { firstName, lastName, email, phone, company, message, test } = await request.json();

	if (!firstName || !lastName || !email || !message) {
		return json({ ok: false, message: 'Missing required fields' }, { status: 400 });
	}

	const to = test ? 'sub@sshawn.com' : dev ? 'sub@sshawn.com' : 'george@impactology.com.au';
	const subjectPrefix = test ? '[HEALTHCHECK] ' : '';

	const html = `
		<h2>${test ? '[HEALTHCHECK] ' : ''}New Contact Form Submission</h2>
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
		from: { email: 'noreply@impactology.com.au', name: 'Website Contact Form' },
		replyTo: email,
		subject: `${subjectPrefix}New website enquiry from ${firstName} ${lastName}`,
		html
	});

	return json({ ok: true });
};
