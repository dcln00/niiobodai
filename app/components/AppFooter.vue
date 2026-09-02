<script setup lang="ts">
import type { Component } from "vue"
import { SvgLinkedin, SvgInstagram } from "#components"

const meta = useMeta()
const navigation = useNavigation()

const socialIcons: Record<string, Component> = {
	"svg-linkedin": SvgLinkedin,
	"svg-instagram": SvgInstagram,
}

const currentYear = new Date().getFullYear()

const scrollToTop = () => {
	if (import.meta.client) {
		window.scrollTo({ top: 0, behavior: "smooth" })
	}
}
</script>

<template lang="pug">
footer(class="rounded-t-3xl lg:rounded-t-4xl bg-[#171615] text-[#FAF8F5] pt-16 lg:pt-24 pb-12 overflow-hidden relative")
	div(class="container relative z-10 space-y-16 lg:space-y-20")
		div(class="cta-banner rounded-3xl bg-white/4 border border-white/10 p-8 lg:p-14 flex flex-col lg:flex-row lg:items-center justify-between gap-8")
			div(class="space-y-3 max-w-2xl")
				div(class="flex items-center gap-2")
					span(class="flex size-2 rounded-full bg-emerald-400 ring-4 ring-emerald-400/20")
					span(class="text-xs font-semibold tracking-wider uppercase text-emerald-300") Open for Advisory & Engagements
				h2(class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight") Let's prepare for what's next.
				p(class="text-base sm:text-lg text-stone-300") Whether you're moving across borders, scaling a brand, or looking for an impactful keynote speaker.
			div(class="cta-actions flex flex-wrap gap-4 shrink-0")
				NuxtLink(to="/contact" class="inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-sm font-semibold bg-white text-stone-900 hover:bg-stone-100 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300") Start a Conversation
				NuxtLink(to="/services" class="inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-sm font-semibold border border-white/20 bg-white/5 text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300") Explore Services
		div(class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pt-4")
			div(class="col-brand lg:col-span-5 space-y-5")
				div(class="flex items-center gap-2.5")
					span(class="font-display text-2xl font-bold text-white tracking-tight") Nii Obodai
					span(class="text-[10px] font-semibold tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-white/10 text-stone-300 border border-white/10") Studio & Advisory
				p(class="text-sm text-stone-300 leading-relaxed max-w-sm") Helping ambitious students, founders, and organizations move forward with clarity, confidence, and practical strategies that work.
				div(class="socials flex items-center gap-3 pt-2")
					NuxtLink(v-for="social in meta.socials" :key="social.name" :to="social.href" target="_blank" :aria-label="social.name" class="flex size-10 items-center justify-center rounded-full bg-white/5 border border-white/10 text-stone-300 hover:text-white hover:bg-white/15 transition-all")
						component(:is="socialIcons[social.icon]" class="size-4")
			div(class="col-nav lg:col-span-3 space-y-4")
				p(class="text-xs font-semibold tracking-wider uppercase text-stone-400") Navigation
				ul(class="space-y-2.5")
					li(v-for="item in navigation" :key="item.path")
						NuxtLink(:to="item.path" class="text-sm text-stone-300 hover:text-white transition-colors duration-200") {{ item.name }}
			div(class="col-practice lg:col-span-4 space-y-4")
				p(class="text-xs font-semibold tracking-wider uppercase text-stone-400") Practice Areas
				ul(class="space-y-2.5 text-sm text-stone-300")
					li
						NuxtLink(to="/study-abroad" class="hover:text-white transition-colors") Study Abroad & Pre-Departure Coaching
					li
						NuxtLink(to="/services" class="hover:text-white transition-colors") Brand & Marketing Strategy
					li
						NuxtLink(to="/services" class="hover:text-white transition-colors") Founder Advisory & Business Consulting
					li
						NuxtLink(to="/store" class="hover:text-white transition-colors") Digital Toolkits & Survival Guides
		div(class="bottom pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400")
			p © {{ currentYear }} Terrick Nii Obodai Torgbor. All rights reserved.
			div(class="flex items-center gap-6")
				span Boston • Accra • Worldwide
				button(type="button" @click="scrollToTop" class="text-stone-400 hover:text-white transition-colors") Back to top ↑
</template>