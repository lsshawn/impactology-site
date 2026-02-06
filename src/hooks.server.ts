import { type Handle } from '@sveltejs/kit';
import { dev } from '$app/environment';
import * as auth from '$lib/server/auth.js';

const handleAuth: Handle = async ({ event, resolve }) => {
	const isPublicPath = event?.route?.id?.startsWith('/(public)') || false;
	const sessionId = event.cookies.get(auth.sessionCookieName);
	if (!sessionId) {
		event.locals.user = null;
		event.locals.session = null;
		if (!isPublicPath) {
			return new Response('Redirect', {
				status: 303,
				headers: { Location: '/login' }
			});
		}
	}

	if (!sessionId) {
		return resolve(event);
	}

	const { session, user } = await auth.validateSession(sessionId);
	if (session) {
		event.cookies.set(auth.sessionCookieName, session.id, {
			path: '/',
			sameSite: 'lax',
			httpOnly: true,
			expires: session.expiresAt,
			secure: !dev
		});
	} else {
		event.cookies.delete(auth.sessionCookieName, { path: '/' });
	}

	event.locals.user = user;
	event.locals.session = session;

	return resolve(event);
};

export const handle: Handle = handleAuth;
