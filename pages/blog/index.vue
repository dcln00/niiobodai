<script setup lang="ts">
useHead({
	title: 'Nii Obodai - Blog',
})

const { data:posts } = await useAsyncData('posts', () => {
  return queryCollection('blog')
	.select('title', 'path', 'image', 'date')
	.order('date', 'DESC')
	.all()
})
</script>

<template lang="pug">
section#hero(class="pt-40 pb-20 lg:pb-24 bg-brand-black")
	.container
		div(class="text-center space-y-4")
			h1(class="text-3xl lg:text-5xl text-white tracking-tight font-light" v-motion-slide-bottom :duration="500") Blog
section#posts(class="py-20 bg-brand-dark")
	.container
		div(v-for="(post, idx) in posts" :key="idx" class="lg:w-1/2 mx-auto mb-16 last:mb-0")
				NuxtLink(:to="post.path")
					div(class="space-y-4")
						.featured-image(class="lg:h-96 overflow-hidden")
							NuxtImg(:src="post.image" alt="featured image" class="w-full h-full object-cover object-center hover:scale-105 duration-300")
						h1(class="text-2xl text-white tracking-tight font-light") {{ post.title }}
</template>