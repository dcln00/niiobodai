<script setup lang="ts">
const route = useRoute()
const meta = useMeta()
const slug = route.params.slug as string

const { data: post } = await useAsyncData(`blog/${slug}`, () =>
	queryCollection('blog').path(`/blog/${slug}`).first()
)

if (!post.value) {
	throw createError({ statusCode: 404, statusMessage: 'Post not found', fatal: true })
}

const canonicalUrl = new URL(route.path, meta.value.siteUrl).href
const postImage = computed(
	() => new URL(post.value?.image ?? meta.value.ogImage, meta.value.siteUrl).href,
)

useSeoMeta({
	title: () => post.value?.title,
	description: () => post.value?.description,
	ogTitle: () => post.value?.title,
	ogDescription: () => post.value?.description,
	ogType: 'article',
	ogImage: () => postImage.value,
	ogUrl: canonicalUrl,
	articlePublishedTime: () => post.value?.date,
	twitterTitle: () => post.value?.title,
	twitterDescription: () => post.value?.description,
	twitterImage: () => postImage.value,
})

useHead({
	script: [
		{
			type: 'application/ld+json',
			innerHTML: () =>
				JSON.stringify({
					'@context': 'https://schema.org',
					'@type': 'BlogPosting',
					headline: post.value?.title,
					description: post.value?.description,
					image: postImage.value,
					datePublished: post.value?.date,
					url: canonicalUrl,
					author: {
						'@type': 'Person',
						name: meta.value.person.legalName,
						url: meta.value.siteUrl,
					},
				}),
		},
	],
})
</script>

<template lang="pug">
div
	section(id="hero" class="pt-32 pb-12 lg:pt-40 lg:pb-16 overflow-hidden relative")
		div(class="container max-w-4xl space-y-6")
			NuxtLink(to="/blog" class="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-muted hover:text-brand-black transition-colors")
				span ←
				span Back to Journal
			div(class="space-y-4")
				div(class="flex items-center gap-3 flex-wrap")
					span(class="label-pill") Essay
					span(class="text-xs text-brand-muted") 5 min read
				h1(class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-brand-black leading-tight") {{ post.title }}
				div(class="author-row flex items-center gap-3 pt-2")
					nuxt-img(src="/photos/portrait-navy-suit-outdoors.jpg" alt="Terrick Nii Obodai" width="40" height="40" format="webp" class="size-10 rounded-full object-cover object-top border border-brand-black/10")
					div(class="space-y-0.5")
						p(class="text-xs font-semibold text-brand-black") {{ meta.person.legalName }}
						p(class="text-[11px] text-brand-muted") Marketing Strategist & Educator
			div(class="photo pt-4")
				div(class="rounded-3xl lg:rounded-4xl overflow-hidden bg-brand-surface-subtle border border-brand-black/8 shadow-[0_8px_30px_rgba(23,22,21,0.06)] aspect-16/9")
					NuxtImg(:src="post.image" :alt="post.title" sizes="sm:100vw md:100vw lg:100vw xl:100vw 2xl:100vw" class="size-full object-cover")
	section(id="post" class="py-12 lg:py-20 bg-brand-surface-subtle")
		div(class="container max-w-3xl")
			div(class="article-card rounded-3xl lg:rounded-4xl bg-brand-surface border border-brand-black/8 p-8 sm:p-12 lg:p-16 shadow-[0_4px_30px_rgba(23,22,21,0.03)] space-y-8")
				ContentRenderer(v-if="post" :value="post" class="prose prose-stone max-w-none prose-headings:font-display prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-brand-black prose-p:text-stone-700 prose-p:leading-relaxed prose-p:text-base sm:prose-p:text-lg prose-a:text-brand-black prose-a:font-semibold prose-a:underline prose-strong:text-brand-black prose-blockquote:border-l-2 prose-blockquote:border-brand-black prose-blockquote:bg-brand-surface-subtle prose-blockquote:p-6 prose-blockquote:rounded-2xl prose-blockquote:font-serif-accent prose-blockquote:italic prose-blockquote:text-xl")
				div(class="author-footer pt-10 border-t border-brand-black/8")
					store-author(:compact="false")
			div(class="pt-8 text-center")
				NuxtLink(to="/blog" class="btn-outline")
					span ← Browse All Journal Essays
</template>

