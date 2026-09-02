<script setup lang="ts">
const title = 'Digital Store & Toolkits — Nii Obodai'
const description =
	'Practical digital resources — survival guides, planners, and toolkits to help you study abroad, grow a business, and strengthen your brand with confidence.'

useSeoMeta({
	title,
	description,
	ogTitle: title,
	ogDescription: description,
	twitterTitle: title,
	twitterDescription: description,
})

const guarantees = [
	{ title: 'Instant Download', desc: 'Secure PDF delivery immediately upon checkout.' },
	{ title: 'Lifetime Access', desc: 'Keep and access your guides across any device.' },
	{ title: 'Tested Frameworks', desc: 'Real-world insights from firsthand US experience.' },
]
</script>

<template lang="pug">
div
	section(id="hero" class="pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden relative")
		div(class="container space-y-12")
			div(class="content space-y-6 max-w-4xl")
				div(class="flex items-center gap-2")
					span(class="label-pill") Digital Toolkits & Guides
					span(class="text-xs text-brand-muted") Instant Download
				h1(class="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-brand-black leading-[1.12]") Practical Resources for #[span(class="font-serif-accent font-normal italic text-stone-500") Ambitious People.]
				p(class="text-lg sm:text-xl text-brand-muted leading-relaxed max-w-3xl") Every digital guide, template, and planner in this library is engineered to solve a specific high-friction problem, eliminate guesswork, and save you valuable time.
			div(class="guarantees grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 pt-4")
				div(v-for="item in guarantees" :key="item.title" class="guarantee-card rounded-3xl bg-brand-surface border border-brand-black/6 p-6 shadow-sm space-y-1.5")
					p(class="font-display font-bold text-base text-brand-black") {{ item.title }}
					p(class="text-xs text-brand-muted") {{ item.desc }}
	section(id="products" class="py-16 lg:py-28 bg-brand-surface-subtle")
		div(class="container space-y-12")
			section-header(title="Available Products" headline="Curated Digital Survival Guides" description="Instant access downloadable resources crafted with precision.")
			div(class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch")
				article(v-for="product in PRODUCTS" :key="product.slug" class="lg:col-span-8 rounded-3xl lg:rounded-4xl bg-brand-surface border border-brand-black/8 p-8 lg:p-12 shadow-[0_8px_30px_rgba(23,22,21,0.04)] flex flex-col justify-between space-y-8")
					div(class="space-y-6")
						div(class="flex items-center justify-between gap-4 flex-wrap")
							span(class="label-pill text-[10px]") {{ product.eyebrow }}
							span(class="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200") Complete Bundle (4 PDFs)
						div(class="space-y-3")
							h2(class="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-black") {{ product.name }}
							p(class="text-base sm:text-lg text-brand-muted leading-relaxed") {{ product.hook }}
						div(class="includes-box rounded-2xl bg-brand-surface-subtle border border-brand-black/6 p-6 space-y-3")
							p(class="text-xs font-bold uppercase tracking-wider text-stone-500") What's Inside This Bundle
							ul(class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-stone-700")
								li(v-for="item in product.includes" :key="item" class="flex items-center gap-2")
									span(class="size-1.5 rounded-full bg-emerald-500")
									span {{ item }}
					div(class="actions flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-brand-black/6")
						div(class="price-block")
							p(class="text-xs uppercase font-bold text-stone-400 tracking-wider") One-time payment
							p(class="font-display text-3xl sm:text-4xl font-bold text-brand-black") {{ formatPrice(product) }}
						NuxtLink(:to="`/store/${product.slug}`" class="btn-primary")
							span View Guide Details & Download
							span →
				div(class="author-col lg:col-span-4 flex")
					store-author(class="h-full")
</template>

