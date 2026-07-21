import { createHmac, timingSafeEqual } from 'node:crypto'

// Short-lived HMAC-signed tokens for gated downloads. A token is bound to one
// file slug and expires, so a shared download URL stops working within the TTL.
export const TOKEN_TTL_MS = 60 * 60 * 1000 // 1 hour

// Signing key: a dedicated secret if provided, otherwise the Stripe secret key
// (server-only, always present when payments work). Both never reach the client.
export function getSigningSecret(event: import('h3').H3Event): string {
	const config = useRuntimeConfig(event)
	const secret = config.downloadSigningSecret || config.stripeSecretKey
	if (!secret) {
		throw createError({ statusCode: 500, statusMessage: 'Downloads are not configured.' })
	}
	return secret
}

function sign(secret: string, slug: string, expiresAt: number): string {
	return createHmac('sha256', secret).update(`${slug}:${expiresAt}`).digest('hex')
}

export function createDownloadToken(secret: string, slug: string): string {
	const expiresAt = Date.now() + TOKEN_TTL_MS
	return `${expiresAt}.${sign(secret, slug, expiresAt)}`
}

export function verifyDownloadToken(secret: string, slug: string, token: string): boolean {
	const [expiresRaw, signature] = token.split('.')
	const expiresAt = Number(expiresRaw)
	if (!expiresRaw || !signature || !Number.isFinite(expiresAt)) return false
	if (Date.now() > expiresAt) return false

	const expected = sign(secret, slug, expiresAt)
	const provided = Buffer.from(signature)
	const valid = Buffer.from(expected)
	if (provided.length !== valid.length) return false
	return timingSafeEqual(provided, valid)
}
