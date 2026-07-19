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
	Transition(enter-active-class="duration-300 ease-out" enter-from-class="opacity-0" enter-to-class="opacity-100" leave-active-class="duration-200 ease-in" leave-from-class="opacity-100" leave-to-class="opacity-0")
		div(v-if="show" class="fixed inset-0 z-50 flex flex-col bg-brand-black lg:hidden")
			.top(class="container flex items-center justify-between py-4")
				span(class="text-2xl text-white tracking-tight font-light") Nii Obodai
				button(type="button" @click="emit('close')" class="text-white hover:text-brand-accent duration-300")
					svg-close(class="size-6")
			nav(class="container py-8")
				ul(class="space-y-4")
					li(v-for="item in navigation" :key="item.path")
						NuxtLink(:to="item.path" activeClass="text-brand-accent" class="text-xl text-white tracking-tight font-light hover:text-brand-accent duration-300" @click="emit('close')") {{ item.name }}
</template>
