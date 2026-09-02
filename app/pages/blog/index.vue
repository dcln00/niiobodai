<script setup lang="ts">
const title = 'Journal & Insights — Nii Obodai'
const description =
	'Practical insights on studying abroad, business, branding, leadership, and personal growth from Terrick Nii Obodai Torgbor.'

useSeoMeta({
	title,
	description,
	ogTitle: title,
	ogDescription: description,
	twitterTitle: title,
	twitterDescription: description,
})

const { data: blog, status, error } = await useAsyncData('all-blog', () =>
	queryCollection('blog').all()
)
</script>

<template lang="pug">
div
	section(id="hero" class="pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden relative")
		div(class="container space-y-6 max-w-4xl")
			div(class="flex items-center gap-2")
				span(class="label-pill") Editorial Journal
				span(class="text-xs text-brand-muted") Thoughts & Frameworks
			h1(class="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-brand-black leading-[1.12]") Perspectives on Strategy, #[span(class="font-serif-accent font-normal italic text-stone-500") Education & Growth.]
			p(class="text-lg sm:text-xl text-brand-muted leading-relaxed") Long-form essays and actionable ideas on global education, brand building, and decision-making in transition.
	section(id="posts" class="py-12 lg:py-20 bg-brand-surface-subtle")
		div(class="container")
			div(v-if="error" class="max-w-xl mx-auto")
				div(class="error-snackbar rounded-3xl bg-red-50 border border-red-200 p-6 flex items-center gap-4")
					svg-close(class="shrink-0 size-6 text-red-600")
					p(class="text-sm font-medium text-red-900") Error loading essays. Please refresh the page.
			div(v-else-if="status === 'pending'" class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto animate-pulse")
				div(class="skeleton rounded-3xl bg-brand-surface border border-brand-black/6 p-6 space-y-4")
					div(class="h-64 bg-stone-200 rounded-2xl")
					div(class="h-6 bg-stone-200 rounded-lg w-3/4")
					div(class="h-4 bg-stone-200 rounded-lg w-1/2")
			div(v-else class="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto")
				article(v-for="post in blog" :key="post.path" class="lg:col-span-12 rounded-3xl lg:rounded-4xl bg-brand-surface border border-brand-black/8 overflow-hidden shadow-[0_4px_24px_rgba(23,22,21,0.04)] hover:shadow-[0_12px_40px_rgba(23,22,21,0.08)] transition-all duration-300 group")
					NuxtLink(:to="post.path" class="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center")
						div(class="featured-image lg:col-span-6 h-72 sm:h-80 lg:h-96 overflow-hidden bg-brand-surface-subtle relative")
							NuxtImg(:src="post.image" :alt="post.title" sizes="sm:100vw md:100vw lg:100vw xl:50vw 2xl:50vw" class="size-full object-cover group-hover:scale-103 transition-transform duration-700 ease-out")
						div(class="content-block lg:col-span-6 p-8 lg:p-12 space-y-4 flex flex-col justify-between h-full")
							div(class="space-y-3")
								div(class="flex items-center gap-2")
									span(class="label-pill text-[10px]") Strategy & Healthcare
									span(class="text-xs text-brand-muted") 5 min read
								h2(class="font-display text-2xl sm:text-3xl font-bold text-brand-black group-hover:text-stone-700 transition-colors leading-snug") {{ post.title }}
								p(v-if="post.description" class="text-sm sm:text-base text-brand-muted line-clamp-3 leading-relaxed") {{ post.description }}
							div(class="pt-4 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-black group-hover:translate-x-1 transition-transform")
								span Read Essay
								span →
</template>

