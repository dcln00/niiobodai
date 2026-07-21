// Gated download: streams a private PDF only when presented with a valid,
// unexpired signed token bound to this file (minted by /api/download-links
// after Stripe verified the purchase). The PDFs live in server/assets and are
// never served statically.
export default defineEventHandler(async (event) => {
	const file = getGatedFile(getRouterParam(event, 'file'))
	if (!file) {
		throw createError({ statusCode: 404, statusMessage: 'File not found.' })
	}

	const token = getQuery(event).token
	if (typeof token !== 'string' || !token) {
		throw createError({ statusCode: 401, statusMessage: 'Missing download token.' })
	}

	if (!verifyDownloadToken(getSigningSecret(event), file.slug, token)) {
		throw createError({ statusCode: 403, statusMessage: 'This download link is invalid or has expired.' })
	}

	const pdf = await useStorage('assets:server').getItemRaw(`products/${file.filename}`)
	if (!pdf) {
		throw createError({ statusCode: 404, statusMessage: 'File is temporarily unavailable.' })
	}

	setHeader(event, 'Content-Type', 'application/pdf')
	setHeader(event, 'Content-Disposition', `attachment; filename="${file.downloadName}"`)
	setHeader(event, 'Cache-Control', 'private, no-store')
	return pdf
})
