// Single source of truth for the paid digital product and its gated files.
// Filenames map to server/assets/products/*.pdf (private, never web-served).

export interface DigitalFile {
	slug: string
	filename: string
	label: string
	downloadName: string
}

export interface DigitalProduct {
	slug: string
	name: string
	description: string
	priceInCents: number
	currency: string
	files: DigitalFile[]
}

export const BEFORE_YOU_LAND: DigitalProduct = {
	slug: 'before-you-land',
	name: 'Before You Land — Ultimate International Student Survival Guide',
	description: 'The complete survival guide plus bonus resources to help you arrive prepared.',
	priceInCents: 2700,
	currency: 'usd',
	files: [
		{
			slug: 'ultimate-guide',
			filename: 'ultimate-guide.pdf',
			label: 'Ultimate International Student Survival Guide',
			downloadName: 'Before You Land - Ultimate International Student Survival Guide.pdf',
		},
		{
			slug: 'packing-checklist',
			filename: 'packing-checklist.pdf',
			label: 'Complete Packing Checklist (Bonus)',
			downloadName: 'Before You Land - Complete Packing Checklist.pdf',
		},
		{
			slug: 'first-30-days-planner',
			filename: 'first-30-days-planner.pdf',
			label: 'First 30 Days in America Planner (Bonus)',
			downloadName: 'Before You Land - First 30 Days in America Planner.pdf',
		},
	],
}

export function getGatedFile(slug: string | undefined): DigitalFile | undefined {
	if (!slug) return undefined
	return BEFORE_YOU_LAND.files.find((file) => file.slug === slug)
}
