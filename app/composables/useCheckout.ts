interface CheckoutState {
	loading: Readonly<Ref<boolean>>
	errorMsg: Readonly<Ref<string>>
	buy: (slug: string) => Promise<void>
}

// Starts a Stripe Checkout Session for a product and hands the browser off to
// Stripe's hosted page. Only the slug is sent — the server owns the price.
export function useCheckout(): CheckoutState {
	const loading = ref(false)
	const errorMsg = ref('')

	async function buy(slug: string): Promise<void> {
		if (loading.value) return
		loading.value = true
		errorMsg.value = ''

		try {
			const { url } = await $fetch<{ url: string }>('/api/checkout', {
				method: 'POST',
				body: { slug },
			})
			if (!url) throw new Error('No checkout URL returned')
			window.location.href = url
		} catch {
			errorMsg.value = 'Something went wrong starting checkout. Please try again.'
			loading.value = false
		}
	}

	return { loading, errorMsg, buy }
}
