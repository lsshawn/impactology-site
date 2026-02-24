import {
	PUBLIC_API_URL,
	PUBLIC_DOMAIN,
	PUBLIC_STRIPE_MONTHLY_LINK,
	PUBLIC_STRIPE_YEARLY_LINK
} from '$env/static/public';

const APP_NAME = 'Impactology';

export const config = {
	name: APP_NAME,
	description: '',
	domain: PUBLIC_DOMAIN,
	apiUrl: PUBLIC_API_URL,
	stripePaymentLinks: {
		monthly: {
			link: PUBLIC_STRIPE_MONTHLY_LINK
		},
		yearly: {
			link: PUBLIC_STRIPE_YEARLY_LINK
		}
	},
	plans: {
		paid: {}
	},
	feedbackProjectId: 1,
	featureFlags: {
		discussionSidebar: false
	}
} as const;
