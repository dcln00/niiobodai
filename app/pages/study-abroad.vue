<script setup lang="ts">
const title = 'Study Abroad - Nii Obodai'
const description =
	'Prepare for life in America before you arrive. Coaching and resources for international students on finances, housing, healthcare, credit, jobs, and careers.'

useSeoMeta({
	title,
	description,
	ogTitle: title,
	ogDescription: description,
	twitterTitle: title,
	twitterDescription: description,
})

const ways = [
	'Pre-departure coaching',
	'Visa interview preparation',
	'Financial readiness',
	'Housing guidance',
	'Banking and credit education',
	'Healthcare navigation',
	'Transportation and driving',
	'Resume and LinkedIn optimization',
	'Internship and job search strategies',
	'OPT and STEM OPT guidance',
	'Career planning',
	'Personal development',
]
</script>

<template lang="pug">
div
	section#hero(class="pt-40 pb-16 lg:pb-24 bg-brand-black")
		.container
			p(class="text-sm uppercase text-brand-accent font-medium tracking-widest pb-4") Study Abroad
			h1(class="text-3xl lg:text-5xl text-white tracking-tighter font-light w-full lg:w-3/4") Prepare Before You Arrive
	section#intro(class="py-16 lg:py-24 bg-brand-dark")
		.container
			.content(class="w-full lg:w-3/4 space-y-6")
				p(class="text-lg text-zinc-400 tracking-tight") Studying abroad is one of the biggest investments you'll ever make. Yet many students spend months preparing their university applications while spending almost no time preparing for life after landing.
				p(class="text-2xl lg:text-3xl text-white tracking-tight font-light") That's where I come in.
				p(class="text-lg text-zinc-400 tracking-tight") I help international students understand the realities of living in America before they arrive, covering everything from finances and housing to employment, transportation, healthcare, networking, and career development.
				p(class="text-lg text-zinc-400 tracking-tight") When you're prepared, you spend less time struggling and more time succeeding.
	section#how-i-help(class="py-16 lg:py-24 bg-brand-black")
		.container
			h2(class="text-sm uppercase text-brand-accent font-medium tracking-widest pb-12") How I Help Students
			.grid(class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4")
				div(v-for="way in ways" :key="way" class="bg-brand-dark p-6 rounded-lg text-white tracking-tight") {{ way }}
</template>
