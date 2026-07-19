<script setup lang="ts">
const title = 'Blog - Nii Obodai'
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
section#hero(class="pt-40 pb-20 lg:pb-24 bg-brand-black")
	.container
		div(class="text-center space-y-4")
			h1(class="text-3xl lg:text-5xl text-white tracking-tight font-light") Blog
section#posts(class="py-20 bg-brand-dark")
	.container
		div(v-if="error" class="lg:w-1/2 mx-auto")
			.error-snackbar(class="border border-red-500 rounded-md p-4")
				div(class="flex space-x-4 items-center")
					svg-close(class="shrink-0 text-2xl text-red-500")
					p(class="capitalize text-white selection:bg-red-500") Error fetching posts
		div(v-if="status === 'pending'" class="lg:w-1/2 mx-auto space-y-4 animate-pulse")
			div(class="h-48 lg:h-96 bg-neutral-800")
			div(class="h-7 bg-neutral-700")
			div(class="h-7 w-1/2 bg-neutral-700")
		div(v-else)
			div(v-for="post in blog" :key="post.path" class="lg:w-1/2 mx-auto mb-16 last:mb-0")
					NuxtLink(:to="post.path")
						div(class="space-y-4")
							.featured-image(class="lg:h-96 overflow-hidden")
								NuxtImg(:src="post.image" :alt="post.title" class="w-full h-full object-cover object-center hover:scale-105 duration-300")
							h2(class="text-2xl text-white tracking-tight font-light") {{ post.title }}
</template>