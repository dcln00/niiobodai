<script setup lang="ts">
useHead({
	title: 'Nii Obodai - Blog',
})

// Define BlogCollectionItem type if not imported from elsewhere
type BlogCollectionItem = {
  title: string
  path: string
  image: string
  date: string | Date
}
type BlogPost = Pick<BlogCollectionItem, 'title' | 'path' | 'image' | 'date'>
const posts = ref<BlogPost[]>([])

const { data, status, error } = await useLazyAsyncData('posts', () => {
  return queryCollection('blog')
	.select('title', 'path', 'image', 'date')
	.order('date', 'DESC')
	.all()
})

onNuxtReady(() => {
  if (data.value) {
	posts.value = data.value
  }
})
</script>

<template lang="pug">
section#hero(class="pt-40 pb-20 lg:pb-24 bg-brand-black")
	.container
		div(class="text-center space-y-4")
			h1(class="text-3xl lg:text-5xl text-white tracking-tight font-light" v-motion-slide-bottom :duration="500") Blog
section#posts(class="py-20 bg-brand-dark")
	.container
		div(v-if="error" class="lg:w-1/2 mx-auto")
			.error-snackbar(class="border border-red-500 rounded-md p-4")
				div(class="flex space-x-4 items-center")
					svgo-close(class="flex-shrink-0 text-2xl !pb-0 text-red-500")
					p(class="capitalize text-white selection:bg-red-500") Error fetching posts
		div(v-if="status === 'pending'" class="lg:w-1/2 mx-auto space-y-4 animate-pulse 1s")
			div(class="h-48 lg:h-96 bg-neutral-800")
			div(class="h-7 bg-neutral-700")
			div(class="h-7 w-1/2 bg-neutral-700")
		div(v-else)
			div(v-for="(post, idx) in posts" :key="idx" class="lg:w-1/2 mx-auto mb-16 last:mb-0")
					NuxtLink(:to="post.path")
						div(class="space-y-4")
							.featured-image(class="lg:h-96 overflow-hidden")
								NuxtImg(:src="post.image" alt="featured image" class="w-full h-full object-cover object-center hover:scale-105 duration-300")
							h1(class="text-2xl text-white tracking-tight font-light") {{ post.title }}
</template>