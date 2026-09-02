<script setup lang="ts">
import type { Component } from "vue"
import { SvgLinkedin, SvgInstagram } from "#components"

const props = defineProps<{
	show: boolean
}>()

const emit = defineEmits<{
	close: []
}>()

const navigation = useNavigation()
const meta = useMeta()

const socialIcons: Record<string, Component> = {
	"svg-linkedin": SvgLinkedin,
	"svg-instagram": SvgInstagram,
}

watch(
	() => props.show,
	(open) => {
		if (import.meta.client) {
			document.body.style.overflow = open ? "hidden" : ""
		}
	},
)
</script>

<template lang="pug">
Teleport(to="body")
	Transition(enter-active-class="duration-300 ease-out" enter-from-class="opacity-0 translate-y-3" enter-to-class="opacity-100 translate-y-0" leave-active-class="duration-200 ease-in" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-3")
		div(v-if="show" class="fixed inset-0 z-50 flex flex-col justify-between bg-brand-bg/95 backdrop-blur-2xl p-6 lg:hidden overflow-y-auto")
			.top(class="flex items-center justify-between pb-6 border-b border-brand-black/8")
				.flex(class="items-center gap-2")
					span(class="size-2 rounded-full bg-emerald-500 ring-4 ring-emerald-500/20")
					span(class="font-display font-bold text-lg text-brand-black") Nii Obodai
				button(type="button" aria-label="Close Navigation Menu" @click="emit('close')" class="flex size-10 items-center justify-center rounded-full bg-brand-black/5 text-brand-black hover:bg-brand-black/10 transition-colors")
					svg-close(class="size-5")
			nav(class="py-6 my-auto")
				ul(class="space-y-2")
					li(v-for="(item, idx) in navigation" :key="item.path")
						NuxtLink(:to="item.path" activeClass="bg-brand-accent text-brand-black font-semibold" class="flex items-center justify-between rounded-2xl px-5 py-3.5 text-xl font-medium text-stone-800 hover:bg-brand-accent/50 transition-all duration-200" @click="emit('close')")
							span {{ item.name }}
							span(class="text-xs font-mono text-stone-400") 0{{ idx + 1 }}
			.bottom(class="pt-6 border-t border-brand-black/8 space-y-4")
				NuxtLink(to="/contact" class="btn-primary w-full py-4 text-center" @click="emit('close')") Let's Talk
				.flex(class="items-center justify-between pt-2 text-xs text-brand-muted")
					.flex(class="items-center gap-3")
						NuxtLink(v-for="social in meta.socials" :key="social.name" :to="social.href" target="_blank" :aria-label="social.name" class="flex size-8 items-center justify-center rounded-full bg-white border border-brand-black/5 text-brand-muted hover:text-brand-black")
							component(:is="socialIcons[social.icon]" class="size-3.5")
					span {{ meta.person.email }}
</template>

