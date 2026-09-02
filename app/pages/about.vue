<script setup lang="ts">
const title = 'About — Terrick Nii Obodai Torgbor'
const description =
	'Meet Terrick Nii Obodai Torgbor — marketing strategist, educator, and speaker helping people prepare for the opportunities that define their future.'

useSeoMeta({
	title,
	description,
	ogTitle: title,
	ogDescription: description,
	twitterTitle: title,
	twitterDescription: description,
})

const credentials = [
	{ label: 'Academic Background', value: 'Global Health Policy & Management (Brandeis University)' },
	{ label: 'Specialization', value: 'Brand Strategy, Communications & Market Entry' },
	{ label: 'Flagship Project', value: 'Before You Land International Student Series' },
	{ label: 'Focus Areas', value: 'Education, Venture Building & Executive Speaking' },
]

const principles = [
	{
		number: '01',
		title: 'Intentional Preparation',
		description: 'Success rarely happens by accident. It begins long before the flight is booked, the company is registered, or the interview takes place.',
	},
	{
		number: '02',
		title: 'Systems Over Motivation',
		description: 'Inspiration is temporary; reliable systems endure. Every framework is built to be executed step-by-step in real-world environments.',
	},
	{
		number: '03',
		title: 'Global Bridge-Building',
		description: 'Connecting African diaspora excellence with international academic institutions and high-growth commercial markets.',
	},
]
</script>

<template lang="pug">
div
	section#hero(class="pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden relative")
		.container(class="space-y-12")
			.content(class="space-y-6 max-w-4xl")
				.flex(class="items-center gap-2")
					span(class="label-pill") Biography & Background
					span(class="font-mono text-xs text-brand-muted") // Terrick Nii Obodai
				h1(class="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-brand-black leading-[1.12]") I believe every life-changing opportunity deserves #[span(class="font-serif-accent font-normal italic text-stone-500") intentional preparation.]
				p(class="text-lg sm:text-xl text-brand-muted leading-relaxed max-w-3xl") Marketing strategist, educator, and speaker helping individuals and organizations turn ambitious goals into repeatable, confident reality.
			.hero-media(class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4")
				.photo-primary(class="lg:col-span-7")
					photo-figure(src="/photos/graduation-brandeis-sign.jpg" alt="Terrick in cap and gown leaning against the Brandeis University sign on graduation day" caption="Commencement at Brandeis University" ratio="aspect-16/10" position="object-[15%_38%]" sizes="sm:100vw md:100vw lg:100vw xl:58vw 2xl:58vw")
				.credentials-box(class="lg:col-span-5 rounded-3xl bg-brand-surface border border-brand-black/6 p-8 lg:p-10 shadow-sm space-y-6")
					h3(class="font-display text-xl font-bold text-brand-black") Strategic Profile
					.space-y-4
						.cred-item(v-for="cred in credentials" :key="cred.label" class="space-y-1 pb-3 border-b border-brand-black/6 last:border-0 last:pb-0")
							p(class="text-xs font-semibold uppercase tracking-wider text-brand-muted") {{ cred.label }}
							p(class="text-sm sm:text-base font-medium text-brand-black") {{ cred.value }}
	section#narrative(class="py-16 lg:py-24 bg-brand-surface-subtle")
		.container
			.grid(class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start")
				.col-text(class="lg:col-span-7 space-y-6")
					section-header(number="01" title="The Story" headline="At the intersection of education, strategy, and leadership.")
					.space-y-5(class="text-base sm:text-lg text-brand-muted leading-relaxed")
						p Whether it's moving across the world to pursue a graduate degree, launching a new business, changing careers, or positioning an established brand — navigating inflection points with composure requires deliberate strategy.
						p My work sits at the crossroads of education, business strategy, marketing, communication, and leadership. Through consulting, keynote speaking, digital products, and community programs, I equip individuals and organizations to step into high-stakes moments prepared.
						p I hold graduate training in #[strong(class="text-brand-black") Global Health Policy & Management from Brandeis University] along with a foundation in #[strong(class="text-brand-black") Brand and Communications Management]. These experiences have shaped how I evaluate complex systems, communicate with nuance, and solve structural problems.
						p Today, I continue building educational initiatives and strategic platforms that empower ambitious people to thrive on the global stage.
				.col-photo(class="lg:col-span-5 space-y-6")
					photo-figure(src="/photos/graduation-with-professor.jpg" alt="Terrick in graduation regalia with a Ghana kente stole, standing beside a faculty member in doctoral robes" caption="Mentorship & academic foundation at Brandeis" ratio="aspect-4/5" sizes="sm:100vw md:100vw lg:100vw xl:42vw 2xl:42vw")
					.quote-card(class="rounded-3xl bg-brand-surface border border-brand-black/6 p-8 shadow-sm space-y-3")
						p(class="font-serif-accent text-xl text-brand-black italic") "One informed decision today can permanently change the course of tomorrow."
						p(class="text-xs font-bold text-stone-500 uppercase tracking-widest") Terrick Nii Obodai Torgbor
	section#principles(class="py-16 lg:py-28")
		.container(class="space-y-12")
			section-header(number="02" title="Guiding Principles" headline="The Philosophy Behind Every Engagement" description="Three core commitments that shape how I consult, teach, and create." centered)
			.grid(class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8")
				.card(v-for="item in principles" :key="item.number" class="agency-card space-y-4 flex flex-col justify-between")
					.space-y-4
						span(class="font-mono text-xs font-bold text-brand-muted") // {{ item.number }}
						h3(class="font-display text-2xl font-bold text-brand-black") {{ item.title }}
						p(class="text-sm sm:text-base text-brand-muted leading-relaxed") {{ item.description }}
	section#connect-cta(class="py-16 lg:py-24 bg-brand-surface-subtle")
		.container
			div(class="rounded-3xl lg:rounded-4xl bg-brand-surface border border-brand-black/8 p-8 lg:p-14 shadow-sm flex flex-col lg:flex-row lg:items-center justify-between gap-8")
				.space-y-3(class="max-w-2xl")
					p(class="label-pill") Work Together
					h2(class="font-display text-3xl sm:text-4xl font-bold text-brand-black") Ready to collaborate?
					p(class="text-base text-brand-muted") Let's discuss your next chapter — whether it's coaching for life abroad, strategic brand advisory, or a speaking engagement.
				.flex(class="flex-wrap gap-4")
					NuxtLink(to="/contact" class="btn-primary") Start a Conversation
					NuxtLink(to="/services" class="btn-outline") View Services
</template>

