<script setup lang="ts">
import type { Component } from "vue"
import { SvgLinkedin, SvgInstagram } from "#components"

const navigation = useNavigation()
const meta = useMeta()

const socialIcons: Record<string, Component> = {
	"svg-linkedin": SvgLinkedin,
	"svg-instagram": SvgInstagram,
}

defineEmits<{
	toggleShow: []
}>()
</script>

<template lang="pug">
header(class="fixed w-full z-10 top-0 duration-300 py-4 bg-brand-black")
	.container(class="flex items-center text-white")
		NuxtLink(to="/")
			h1(class="text-2xl tracking-tight font-light cursor-pointer") Nii Obodai
		nav(class="ms-auto hidden lg:block")
			ul(class="flex space-x-4")
				li(v-for="item in navigation" :key="item.path" class="relative cursor-pointer transition-all duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-0.75 after:h-px after:w-full after:origin-bottom-right after:scale-x-0 after:bg-brand-accent after:transition-transform after:duration-250 after:ease-out hover:text-brand-accent hover:after:origin-bottom-left hover:after:scale-x-100")
					NuxtLink(:to="item.path" activeClass="text-brand-accent") {{ item.name }}
		.socials(class="ms-12 space-x-6 hidden lg:flex")
			NuxtLink(v-for="social in meta.socials" :key="social.name" :to="social.href" target="_blank")
				component(:is="socialIcons[social.icon]" class="text-white hover:text-brand-accent size-4")
		.hamburger(class="ms-auto cursor-pointer block lg:hidden" @click="$emit('toggleShow')")
			svg-hamburger(class="text-white")
</template>
