<script setup lang="ts">
const title = 'Store - Nii Obodai'
const description =
	'Practical digital resources — guides, planners, and toolkits to help you study abroad, grow a business, and strengthen your brand with confidence.'

useSeoMeta({
	title,
	description,
	ogTitle: title,
	ogDescription: description,
	twitterTitle: title,
	twitterDescription: description,
})

const loading = ref(false)
const errorMsg = ref('')

async function buy(): Promise<void> {
	if (loading.value) return
	loading.value = true
	errorMsg.value = ''
	try {
		const { url } = await $fetch<{ url: string }>('/api/checkout', { method: 'POST' })
		if (!url) throw new Error('No checkout URL returned')
		window.location.href = url
	} catch {
		errorMsg.value = 'Something went wrong starting checkout. Please try again.'
		loading.value = false
	}
}
</script>

<template lang="pug">
div
	section#hero(class="pt-40 pb-16 lg:pb-24 bg-brand-black")
		.container
			p(class="text-sm uppercase text-brand-accent font-medium tracking-widest pb-4") Digital Store
			h1(class="text-3xl lg:text-5xl text-white tracking-tighter font-light w-full lg:w-3/4") Practical Resources for Ambitious People
	section#intro(class="py-16 lg:py-24 bg-brand-dark")
		.container
			.content(class="w-full lg:w-3/4 space-y-6")
				p(class="text-2xl lg:text-3xl text-white tracking-tight font-light") Knowledge is most valuable when it leads to action.
				p(class="text-lg text-zinc-400 tracking-tight") That's why every digital resource in this store is designed to help you solve a real problem, make a better decision, or move forward with confidence.
				p(class="text-lg text-zinc-400 tracking-tight") Whether you're preparing to study abroad, growing a business, building your career, or strengthening your personal brand, you'll find practical tools created to save you time and help you succeed.
	section#products(class="py-16 lg:py-24 bg-brand-black")
		.container
			.card(class="w-full lg:w-3/4 bg-brand-dark rounded-lg p-8 lg:p-12 space-y-6")
				p(class="text-sm uppercase text-brand-accent font-medium tracking-widest") Digital Guide
				h2(class="text-2xl lg:text-4xl text-white tracking-tighter font-light") Before You Land — Ultimate International Student Survival Guide
				p(class="text-lg text-zinc-400 tracking-tight") The complete survival guide for international students — plus 3 bonus resources: the Complete Packing Checklist, the First 30 Days in America Planner, and the Pre-Departure Checklist. Delivered instantly as downloadable PDFs.
				ul(class="text-zinc-400 tracking-tight space-y-2 list-disc pl-5")
					li Ultimate International Student Survival Guide
					li Complete Packing Checklist (Bonus)
					li First 30 Days in America Planner (Bonus)
					li Pre-Departure Checklist (Bonus)
				.actions(class="flex flex-wrap items-center gap-6 pt-2")
					p(class="text-3xl text-white tracking-tighter font-light") $27
					button(type="button" :disabled="loading" @click="buy" class="p-3 px-6 text-sm uppercase tracking-tight bg-white text-black hover:bg-neutral-300 duration-300 disabled:opacity-60 disabled:cursor-not-allowed")
						span {{ loading ? 'Redirecting…' : 'Buy Now — $27' }}
				p(v-if="errorMsg" class="text-sm text-red-400 tracking-tight") {{ errorMsg }}
				p(class="text-xs text-zinc-500 tracking-tight") Secure checkout via Stripe. Instant download after payment.
</template>
