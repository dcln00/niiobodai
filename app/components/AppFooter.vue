<script setup lang="ts">
import type { Component } from "vue"
import { SvgLinkedin, SvgInstagram } from "#components"

const meta = useMeta()

const socialIcons: Record<string, Component> = {
	"svg-linkedin": SvgLinkedin,
	"svg-instagram": SvgInstagram,
}

const currentYear = new Date().getFullYear()
</script>

<template lang="pug">
footer(class="pt-20 pb-32 bg-brand-dark")
	.container(class="flex flex-wrap flex-col")
		div(class="w-full lg:w-2/3 mx-auto pb-20")
			p(class="text-2xl lg:text-3xl text-center font-light text-white tracking-tight leading-relaxed!") If you’re looking for strategic marketing solutions and compelling visuals, let’s connect. #[NuxtLink(to="/contact" class="text-brand-accent") Drop me a line] and let’s create something impactful together.
		div(class="w-full space-y-8")
			.socials(class="flex justify-center space-x-4 *:text-white *:text-xl")
				NuxtLink(v-for="social in meta.socials" :key="social.name" :to="social.href" target="_blank")
					component(:is="socialIcons[social.icon]" class="hover:text-brand-accent size-4")
			.copyright(class="text-white text-center capitalize text-sm tracking-tight") © {{ currentYear }} All rights reserved
</template>