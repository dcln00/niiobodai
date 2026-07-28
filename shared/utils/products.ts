// Public product catalogue — auto-imported in both app/ and server/, so it is
// safe to ship to the browser. The private mapping from a product to its gated
// PDFs lives in server/utils/products.ts and never reaches the client.
// Adding a product here gives it a /store card and a /store/<slug> page.

export interface DigitalProduct {
	slug: string
	eyebrow: string
	name: string
	/** Sales-facing hook. Leads the store card and the product page. */
	hook: string
	/** Short factual line. Used for SEO meta and the Stripe line item, so keep it under ~155 characters. */
	summary: string
	details: string[]
	includes: string[]
	priceInCents: number
	currency: string
}

const CENTS_PER_UNIT = 100

export const PRODUCTS: DigitalProduct[] = [
	{
		slug: 'before-you-land',
		eyebrow: 'Digital Guide',
		name: 'Before You Land — Ultimate International Student Survival Guide',
		hook: "You got the visa. You booked the flight. Now what? Before You Land gives you everything your orientation packet never will — from credit scores and cooking to hair care and roommate etiquette. This is the guide that prepares you for real student life in the US.",
		summary:
			'The complete survival guide for international students — plus 3 bonus resources. Delivered instantly as downloadable PDFs.',
		details: [
			'Your university will tell you how to register for classes. It will not tell you how to open a bank account that quietly drains you in fees, what to do the first time you get sick, or how to cook the food you grew up on with what you can actually find at the store.',
			'Before You Land collects the things international students usually learn the hard way — money and credit, housing and roommates, healthcare, transportation, groceries and cooking, hair and personal care, networking, and the first job search — into one place you can read before you board the plane.',
			'You get the full guide plus three bonus resources, all as PDFs you can download immediately after checkout and keep for good.',
		],
		includes: [
			'Ultimate International Student Survival Guide',
			'Complete Packing Checklist (Bonus)',
			'First 30 Days in America Planner (Bonus)',
			'Pre-Departure Checklist (Bonus)',
		],
		priceInCents: 2700,
		currency: 'usd',
	},
]

export function getProduct(slug: string | undefined): DigitalProduct | undefined {
	if (!slug) return undefined
	return PRODUCTS.find((product) => product.slug === slug)
}

export function formatPrice(product: DigitalProduct): string {
	const hasCents = product.priceInCents % CENTS_PER_UNIT !== 0
	return new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: product.currency.toUpperCase(),
		minimumFractionDigits: hasCents ? 2 : 0,
	}).format(product.priceInCents / CENTS_PER_UNIT)
}
