<script setup lang="ts">
const route = useRoute()
const meta = useMeta()

const product = getProduct(String(route.params.slug))

if (!product) {
	throw createError({ statusCode: 404, statusMessage: 'Product not found', fatal: true })
}

const { loading, errorMsg, buy } = useCheckout()

const price = computed<string>(() => formatPrice(product))
const title = computed<string>(() => `${product.name} - Nii Obodai`)

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
	section#hero(class="pt-40 pb-16 lg:pb-24 bg-brand-black")
		.container
			NuxtLink(to="/store" class="inline-block text-sm uppercase tracking-tight text-zinc-500 hover:text-brand-accent duration-300 pb-6") ← Back to Store
			p(class="text-sm uppercase text-brand-accent font-medium tracking-widest pb-4") {{ product.eyebrow }}
			h1(class="text-3xl lg:text-5xl text-white tracking-tighter font-light w-full lg:w-3/4") {{ product.name }}
			p(class="text-lg lg:text-xl text-zinc-300 tracking-tight pt-6 w-full lg:w-3/4") {{ product.hook }}
	section#details(class="py-16 lg:py-24 bg-brand-dark")
		.container(class="flex flex-wrap items-start")
			.content(class="w-full lg:w-7/12 p-4 max-lg:px-0 space-y-6")
				h2(class="text-sm uppercase text-brand-accent font-medium tracking-widest") What This Is
				p(v-for="(paragraph, idx) in product.details" :key="idx" class="text-lg text-zinc-400 tracking-tight") {{ paragraph }}
				.author(class="pt-6 border-t border-white/10")
					store-author(:compact="true")
			.purchase(class="w-full lg:w-5/12 p-4 max-lg:px-0 max-lg:pt-12")
				.card(class="bg-brand-black rounded-lg p-8 space-y-6")
					h2(class="text-sm uppercase text-brand-accent font-medium tracking-widest") What's Included
					ul(class="text-zinc-400 tracking-tight space-y-2 list-disc pl-5")
						li(v-for="item in product.includes" :key="item") {{ item }}
					p(class="text-3xl text-white tracking-tighter font-light pt-2") {{ price }}
					button(type="button" :disabled="loading" @click="buy(product.slug)" class="w-full p-3 px-6 text-sm uppercase tracking-tight bg-white text-black hover:bg-neutral-300 duration-300 disabled:opacity-60 disabled:cursor-not-allowed")
						span {{ loading ? 'Redirecting…' : `Buy Now — ${price}` }}
					p(v-if="errorMsg" class="text-sm text-red-400 tracking-tight") {{ errorMsg }}
					p(class="text-xs text-zinc-500 tracking-tight") Secure checkout via Stripe. Instant download after payment.
</template>
