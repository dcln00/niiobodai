<script setup lang="ts">
const { x, y } = useWindowScroll()

const isNotScrolled = computed(() => y.value < 200)
</script>

<template lang="pug">
header(:class="['fixed w-full z-10 top-0 duration-300', {'py-8': isNotScrolled}, {'py-4 bg-[#131410]': !isNotScrolled}]")
	.container(:class="['flex items-center text-white']")
		NuxtLink(to="/")
			h1(class="text-2xl text-white tracking-tight font-light cursor-pointer") Nii Obodai
		nav(class="ms-auto hidden lg:block")
			ul(class="flex space-x-4 *:cursor-pointer hover:*:text-brand-accent hover:*:duration-300")
				li #[NuxtLink(to="/") Home]
				li #[NuxtLink(to="#") Photography]
				li #[NuxtLink(to="/contact") Contact]
		.socials(class="space-x-6 ms-12 hidden lg:flex")
			NuxtLink(to="http://www.linkedin.com/in/terrick-nii-obodai-torgbor/" target="_blank")
				svgo-linkedin(class="text-white hover:text-brand-accent")
			NuxtLink(to="https://www.instagram.com/theniiobodai/" target="_blank")
				svgo-instagram(class="text-white hover:text-brand-accent")
		.hamburger(class="ms-auto cursor-pointer block lg:hidden" @click="$emit('toggleShow')")
			svgo-hamburger(class="text-2xl")
</template>

<style scoped>
nav li {
	position: relative;
	transition: 0.3s;
}

nav li:after {
	content: '';
	position: absolute;
	width: 100%;
	transform: scaleX(0);
	height: 1px;
	bottom: -3px;
	left: 0;
	background-color: #9cc741;
	transform-origin: bottom right;
	transition: transform 0.25s ease-out;
}

nav li:hover:after {
	transform: scaleX(1);
	transform-origin: bottom left;
}
</style>