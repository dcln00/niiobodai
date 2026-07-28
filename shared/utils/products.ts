// Public product catalogue — auto-imported in both app/ and server/, so it is
// safe to ship to the browser. The private mapping from a product to its gated
// PDFs lives in server/utils/products.ts and never reaches the client.
// Adding a product here gives it a /store card and a /store/<slug> page.

export interface DigitalProduct {
	slug: string
	eyebrow: string
	name: string
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
		summary:
			'The complete survival guide for international students — plus 3 bonus resources. Delivered instantly as downloadable PDFs.',
		details: [
			'Every semester, thousands of international students arrive in the United States academically prepared but completely unprepared for everyday life. No one explains how credit scores work, how expensive healthcare can be, or why your first financial decisions follow you for years.',
			'This guide collects the things students usually learn the hard way — money, housing, healthcare, transportation, networking, and the first job search — into one place you can read before you board the plane.',
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
