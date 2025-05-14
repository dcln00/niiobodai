<script setup lang="ts">
defineProps({
	show: Boolean,
})

const nav = [
	{
		href: '/',
		name: 'Home',
	},
	{
		href: '/#',
		name: 'Photography',
	},
	{
		href: '/#',
		name: 'Campaigns',
	},
	{
		href: '/blog',
		name: 'Blog',
	},
	{
		href: '/#',
		name: 'Events',
	},
	{
		href: '/contact',
		name: 'Contact',
	}
]
</script>

<template lang="pug">
div
	Transition(name="overlay")
		.overlay(v-if="show" @click="$emit('toggleShow')" class="fixed top-0 left-0 z-10 w-full h-dvh bg-black/70")
	Transition(name="nav")
		nav(class="fixed top-0 right-0 z-50 bg-white w-2/3 h-screen p-8" v-if="show")
			div(class="mb-16")
				.nav-header(class="flex items-center mb-12")
					svgo-close(class="text-brand-black ms-auto cursor-pointer text-xl" @click="$emit('toggleShow')")
				ul(class="*:tracking-tight *:text-brand-black *:capitalize space-y-4")
					li(v-for="(item, index) in nav" :key="index") #[NuxtLink(:to="item.href" activeClass='active-link' @click="$emit('toggleShow')") {{ item.name }}]
</template>

<style scoped>
.nav-enter-active, .nav-leave-active {
	transition: all 0.3s ease-in-out;
}

.nav-enter-from, .nav-leave-to {
	transform: translateX(100%);
}


.overlay-enter-active,
.overlay-leave-active {
	transition: all .4s;
	  transition-timing-function: ease-in;
}

.overlay-leave-to, .overlay-enter-from {
	  opacity: 0;
}
</style>