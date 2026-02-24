const OTP_EXPIRATION_MINS = 15;

export const serverConfig = {
	otp: {
		expirationMinutes: OTP_EXPIRATION_MINS,
		expirationMs: 1000 * 60 * OTP_EXPIRATION_MINS
	}
} as const;
