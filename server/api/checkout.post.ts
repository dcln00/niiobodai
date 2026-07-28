interface CheckoutSession {
	id: string
	url: string
}

// Creates a Stripe-hosted Checkout Session with inline pricing, then returns
// its URL for the client to redirect to. No card data ever touches this server.
// The client sends only a product slug — name and price are always resolved from
// the server-side catalogue, so a tampered request cannot set its own price.
export default defineEventHandler(async (event) => {
	const body = await readBody<{ slug?: unknown }>(event)
	const slug = typeof body?.slug === 'string' ? body.slug : ''
	const product = getProduct(slug)

	if (!product) {
		throw createError({ statusCode: 404, statusMessage: 'Unknown product.' })
	}

	const origin = getRequestURL(event).origin

	const params: Record<string, string> = {
		mode: 'payment',
		'line_items[0][quantity]': '1',
		'line_items[0][price_data][currency]': product.currency,
		'line_items[0][price_data][unit_amount]': String(product.priceInCents),
		'line_items[0][price_data][product_data][name]': product.name,
		'line_items[0][price_data][product_data][description]': product.summary,
		'metadata[product_slug]': product.slug,
		success_url: `${origin}/store/success?session_id={CHECKOUT_SESSION_ID}`,
		cancel_url: `${origin}/store/${product.slug}`,
	}

	try {
		const session = await stripePost<CheckoutSession>(event, '/checkout/sessions', params)
		return { url: session.url }
	} catch (error) {
		console.error('[checkout] failed to create Stripe session', error)
		throw createError({ statusCode: 502, statusMessage: 'Could not start checkout. Please try again.' })
	}
})
