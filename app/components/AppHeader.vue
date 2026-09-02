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
header(class="fixed top-3 lg:top-5 inset-x-0 mx-auto w-[calc(100%-2rem)] max-w-6xl z-40 transition-all duration-300 rounded-full bg-white/85 backdrop-blur-xl border border-brand-black/8 shadow-[0_8px_30px_rgba(23,22,21,0.06)] px-4 lg:px-6 py-4")
	div(class="flex items-center justify-between")
		NuxtLink(to="/" class="flex items-center gap-2.5 group")
			span(class="flex size-2 rounded-full bg-emerald-500 ring-4 ring-emerald-500/20")
			span(class="font-display font-bold text-base lg:text-lg text-brand-black tracking-tight group-hover:opacity-80 transition-opacity") Nii Obodai
			span(class="hidden xl:inline-flex text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full bg-brand-black/4 text-brand-muted border border-brand-black/6") Advisory
		nav(class="hidden lg:block")
			ul(class="flex items-center gap-1")
				li(v-for="item in navigation" :key="item.path")
					NuxtLink(:to="item.path" activeClass="bg-brand-black text-white shadow-xs" class="px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide text-stone-600 hover:text-brand-black hover:bg-brand-black/4 transition-all duration-200 leading-none") {{ item.name }}
		div(class="actions flex items-center gap-3")
			div(class="socials hidden md:flex items-center gap-2")
				NuxtLink(v-for="social in meta.socials" :key="social.name" :to="social.href" target="_blank" :aria-label="social.name" class="flex size-8 items-center justify-center rounded-full text-brand-muted hover:text-brand-black hover:bg-brand-black/5 transition-all")
					component(:is="socialIcons[social.icon]" class="size-3.5")
			NuxtLink(to="/contact" class="hidden sm:inline-flex items-center justify-center gap-1.5 rounded-full bg-brand-black text-white text-xs font-semibold px-4 py-2 hover:bg-stone-800 shadow-xs hover:-translate-y-0.5 transition-all duration-200")
				span Let's Talk
			button(type="button" aria-label="Open Navigation Menu" class="flex size-9 items-center justify-center rounded-full bg-brand-black/4 hover:bg-brand-black/8 text-brand-black transition-colors lg:hidden" @click="$emit('toggleShow')")
				svg-hamburger(class="size-4")
</template>

