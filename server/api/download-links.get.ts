interface CheckoutSessionStatus {
	payment_status: string
	metadata?: Record<string, string>
}

export interface DownloadLink {
	slug: string
	label: string
	url: string
}

// Verifies a Checkout Session with Stripe exactly once, then returns short-lived
// signed download URLs for each gated file. The success page calls this on load,
// so a legitimate buyer always gets fresh links, while the URLs themselves expire.
export default defineEventHandler(async (event): Promise<{ files: DownloadLink[] }> => {
	const sessionId = getQuery(event).session_id
	if (typeof sessionId !== 'string' || !sessionId) {
		throw createError({ statusCode: 401, statusMessage: 'Missing proof of purchase.' })
	}

	let session: CheckoutSessionStatus
	try {
		session = await stripeGet<CheckoutSessionStatus>(
			event,
			`/checkout/sessions/${encodeURIComponent(sessionId)}`,
		)
	} catch (error) {
		console.error('[download-links] could not verify Stripe session', error)
		throw createError({ statusCode: 403, statusMessage: 'Could not verify your purchase.' })
	}

	if (session.payment_status !== 'paid') {
		throw createError({ statusCode: 403, statusMessage: 'Payment not verified.' })
	}
	if (session.metadata?.product_slug !== BEFORE_YOU_LAND.slug) {
		throw createError({ statusCode: 403, statusMessage: 'Purchase does not grant these files.' })
	}

	const secret = getSigningSecret(event)
	return {
		files: BEFORE_YOU_LAND.files.map((file) => ({
			slug: file.slug,
			label: file.label,
			url: `/api/download/${file.slug}?token=${createDownloadToken(secret, file.slug)}`,
		})),
	}
})
