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
	section#hero(class="relative pt-40 pb-16 lg:pb-24 bg-brand-black overflow-hidden")
		hero-media(src="/photos/international-festival-crowd.jpg" alt="Students from many countries gathered beneath rows of national flags at a campus international festival" position="object-[60%_45%]" :priority="true")
		.container(class="relative")
			p(class="text-sm uppercase text-brand-accent font-medium tracking-widest pb-4") Study Abroad
			h1(class="text-3xl lg:text-5xl text-white tracking-tighter font-light w-full lg:w-3/4") Prepare Before You Arrive
	section#intro(class="py-16 lg:py-24 bg-brand-dark")
		.container(class="flex flex-wrap items-center")
			.content(class="w-full lg:w-7/12 p-4 max-lg:px-0 space-y-6")
				p(class="text-lg text-zinc-400 tracking-tight") Studying abroad is one of the biggest investments you'll ever make. Yet many students spend months preparing their university applications while spending almost no time preparing for life after landing.
				p(class="text-2xl lg:text-3xl text-white tracking-tight font-light") That's where I come in.
				p(class="text-lg text-zinc-400 tracking-tight") I help international students understand the realities of living in America before they arrive, covering everything from finances and housing to employment, transportation, healthcare, networking, and career development.
				p(class="text-lg text-zinc-400 tracking-tight") When you're prepared, you spend less time struggling and more time succeeding.
			div(class="w-full lg:w-5/12 p-4 max-lg:px-0 max-lg:pt-12")
				photo-figure(src="/photos/friends-selfie-under-flags.jpg" alt="Terrick and three friends smiling in a selfie beneath hanging national flags, including the flag of Ghana" caption="The people you meet become part of the preparation." ratio="aspect-3/4" position="object-bottom" sizes="sm:100vw md:100vw lg:100vw xl:42vw 2xl:42vw")
	section#classroom(class="py-16 lg:py-24 bg-brand-black")
		.container(class="flex flex-wrap items-center")
			div(class="w-full lg:w-5/12 p-4 max-lg:px-0")
				photo-figure(src="/photos/classroom-lecture-chalkboard.jpg" alt="Graduate students working on laptops in front of a chalkboard covered in brainstormed notes" caption="In the classroom." ratio="aspect-3/4" sizes="sm:100vw md:100vw lg:100vw xl:42vw 2xl:42vw")
			div(class="w-full lg:w-7/12 p-4 max-lg:px-0 max-lg:pt-12 space-y-6")
				h2(class="text-sm uppercase text-brand-accent font-medium tracking-widest") Beyond the Classroom
				p(class="text-2xl lg:text-3xl text-white tracking-tight font-light") Your degree is only part of the education.
				p(class="text-lg text-zinc-400 tracking-tight") The lectures are the part you planned for. Everything around them — the paperwork, the budgeting, the first apartment, the first job search — is the part most students face without a guide.
				p(class="text-lg text-zinc-400 tracking-tight") That's the gap I work in.
	section#how-i-help(class="py-16 lg:py-24 bg-brand-dark")
		.container
			h2(class="text-sm uppercase text-brand-accent font-medium tracking-widest pb-12") How I Help Students
			.grid(class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4")
				div(v-for="way in ways" :key="way" class="bg-brand-black p-6 rounded-lg text-white tracking-tight") {{ way }}
</template>
