// Private mapping from a product slug to its gated files. Filenames map to
// server/assets/products/*.pdf (private, never web-served), so this module stays
// server-only on purpose — public marketing data lives in shared/utils/products.ts.

export interface DigitalFile {
	slug: string
	filename: string
	label: string
	downloadName: string
}

const PRODUCT_FILES: Record<string, DigitalFile[]> = {
	'before-you-land': [
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

export function getProductFiles(productSlug: string | undefined): DigitalFile[] {
	if (!productSlug) return []
	return PRODUCT_FILES[productSlug] ?? []
}

export function getGatedFile(fileSlug: string | undefined): DigitalFile | undefined {
	if (!fileSlug) return undefined
	return Object.values(PRODUCT_FILES)
		.flat()
		.find((file) => file.slug === fileSlug)
}
