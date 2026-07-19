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
						name: meta.value.business.legalName,
						url: meta.value.siteUrl,
					},
				}),
		},
	],
})
</script>

<template lang="pug">
section#hero(class="pt-40 pb-24 bg-brand-black")
	.container
		div(class="text-center space-y-16")
			h1(class="text-2xl lg:text-3xl text-white tracking-tight font-light") {{ post.title}}
			.photo(class="w-full lg:h-96 pointer-events-none")
				NuxtImg(:src="post.image" :alt="post.title" class="w-full h-full object-cover object-center")
section#post(class="py-20 bg-brand-dark")
	div(class="max-lg:container")
		div(class="lg:w-1/2 mx-auto")
			ContentRenderer(v-if="post" :value="post" class="prose max-w-none prose-a:no-underline prose-a:text-white prose-h2:pb-4 prose-h1:font-normal prose-h1:text-xl prose-p:text-zinc-300 prose-strong:text-white prose-headings:text-white")
</template>