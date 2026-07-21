// Thin Stripe REST wrapper — avoids pulling in the full stripe SDK dependency.
// Mode (test vs live) is dictated entirely by the secret key, not by any flag here.

const STRIPE_API_BASE = 'https://api.stripe.com/v1'

function getSecretKey(event: import('h3').H3Event): string {
	const { stripeSecretKey } = useRuntimeConfig(event)
	if (!stripeSecretKey) {
		throw createError({ statusCode: 500, statusMessage: 'Payments are not configured.' })
	}
	return stripeSecretKey
}

export async function stripePost<T>(
	event: import('h3').H3Event,
	path: string,
	params: Record<string, string>,
): Promise<T> {
	return $fetch<T>(`${STRIPE_API_BASE}${path}`, {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${getSecretKey(event)}`,
			'Content-Type': 'application/x-www-form-urlencoded',
		},
		body: new URLSearchParams(params).toString(),
	})
}

export async function stripeGet<T>(
	event: import('h3').H3Event,
	path: string,
): Promise<T> {
	return $fetch<T>(`${STRIPE_API_BASE}${path}`, {
		headers: { Authorization: `Bearer ${getSecretKey(event)}` },
	})
}
