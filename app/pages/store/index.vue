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
			.grid(class="grid grid-cols-1 lg:grid-cols-2 gap-8")
				article(v-for="product in PRODUCTS" :key="product.slug" class="flex flex-col bg-brand-dark rounded-lg p-8 lg:p-12 space-y-6")
					p(class="text-sm uppercase text-brand-accent font-medium tracking-widest") {{ product.eyebrow }}
					h2(class="text-2xl lg:text-3xl text-white tracking-tighter font-light") {{ product.name }}
					p(class="text-lg text-zinc-400 tracking-tight grow") {{ product.hook }}
					.actions(class="flex flex-wrap items-center gap-6 pt-2")
						p(class="text-3xl text-white tracking-tighter font-light") {{ formatPrice(product) }}
						NuxtLink(:to="`/store/${product.slug}`" class="p-3 px-6 text-sm uppercase tracking-tight bg-white text-black hover:bg-neutral-300 duration-300") See Details
	section#author(class="py-16 lg:py-24 bg-brand-dark")
		.container
			h2(class="text-sm uppercase text-brand-accent font-medium tracking-widest pb-8") Who Made These
			store-author(class="w-full lg:w-3/4")
</template>
