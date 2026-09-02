<script setup lang="ts">
const route = useRoute()
const meta = useMeta()

const product = getProduct(String(route.params.slug))

if (!product) {
	throw createError({ statusCode: 404, statusMessage: 'Product not found', fatal: true })
}

const { loading, errorMsg, buy } = useCheckout()

const price = computed<string>(() => formatPrice(product))
const title = computed<string>(() => `${product.name} — Nii Obodai`)

useSeoMeta({
	title: () => title.value,
	description: () => product.summary,
	ogTitle: () => title.value,
	ogDescription: () => product.summary,
	ogType: 'website',
	ogUrl: new URL(route.path, meta.value.siteUrl).href,
	twitterTitle: () => title.value,
	twitterDescription: () => product.summary,
})
</script>

<template lang="pug">
div
	section(id="hero" class="pt-32 pb-12 lg:pt-40 lg:pb-16 overflow-hidden relative")
		div(class="container space-y-6 max-w-5xl")
			NuxtLink(to="/store" class="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-muted hover:text-brand-black transition-colors")
				span ←
				span Back to Digital Library
			div(class="space-y-4")
				div(class="flex items-center gap-2")
					span(class="label-pill") {{ product.eyebrow }}
					span(class="text-xs text-brand-muted") Instant Delivery
				h1(class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-brand-black leading-tight") {{ product.name }}
				p(class="text-lg sm:text-xl text-brand-muted leading-relaxed") {{ product.hook }}
	section(id="details" class="py-12 lg:py-20 bg-brand-surface-subtle")
		div(class="container")
			div(class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start")
				div(class="content lg:col-span-7 space-y-8")
					section-header(title="Overview" headline="What You Receive" description="Everything you need to step off the plane in America prepared for reality.")
					div(class="space-y-5")
						p(v-for="paragraph in product.details" :key="paragraph" class="text-base sm:text-lg text-brand-muted leading-relaxed") {{ paragraph }}
					div(class="author-block pt-4")
						store-author(:compact="true")
				div(class="purchase-sidebar lg:col-span-5 sticky top-28")
					div(class="card rounded-3xl lg:rounded-4xl bg-brand-surface border border-brand-black/8 p-8 lg:p-10 shadow-[0_8px_30px_rgba(23,22,21,0.05)] space-y-6")
						div(class="flex items-center justify-between pb-4 border-b border-brand-black/6")
							span(class="text-xs font-bold uppercase tracking-wider text-brand-muted") Complete Toolkit
							span(class="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700") PDF Package
						div(class="space-y-3")
							p(class="text-xs font-semibold uppercase tracking-wider text-stone-500") What's Included:
							ul(class="space-y-2.5")
								li(v-for="item in product.includes" :key="item" class="flex items-start gap-2.5 text-xs sm:text-sm text-stone-800")
									span(class="size-1.5 rounded-full bg-emerald-500 shrink-0 mt-1.5")
									span(class="font-medium") {{ item }}
						div(class="price-section pt-4 border-t border-brand-black/6 space-y-1")
							p(class="text-xs uppercase font-bold text-brand-muted tracking-wider") Total Price
							p(class="font-display text-4xl font-bold text-brand-black") {{ price }}
						button(type="button" :disabled="loading" @click="buy(product.slug)" class="btn-primary w-full py-4 text-center disabled:opacity-60 disabled:cursor-not-allowed")
							span {{ loading ? 'Redirecting to Checkout…' : `Instant Download — ${price}` }}
						p(v-if="errorMsg" class="text-xs text-red-600 bg-red-50 p-3 rounded-xl border border-red-200") {{ errorMsg }}
						div(class="security flex items-center justify-center gap-2 pt-2 text-[11px] text-brand-muted")
							span 🔒 Secure 256-bit Stripe Checkout • Instant PDF Delivery
</template>

