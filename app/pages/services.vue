<script setup lang="ts">
const title = 'Services & Advisory — Nii Obodai'
const description =
	"Study abroad coaching, marketing strategy, business consulting, and speaking engagements to help you build what's next."

useSeoMeta({
	title,
	description,
	ogTitle: title,
	ogDescription: description,
	twitterTitle: title,
	twitterDescription: description,
})

const services = [
	{
		icon: '🎓',
		name: 'Study Abroad Coaching',
		tagline: 'International Student Pre-Departure & Career Advisory',
		body: 'Personalized 1-on-1 and cohort guidance for students preparing to relocate, study, and launch careers in the United States.',
		deliverables: [
			'Pre-departure checklists & arrival timeline',
			'US banking, credit building & tax basics',
			'Healthcare & student insurance navigation',
			'Campus employment, CPT/OPT & resume strategy',
		],
		idealFor: 'Prospective & newly admitted US graduate & undergraduate students',
		ctaText: 'Book Coaching Session',
	},
	{
		icon: '🚀',
		name: 'Marketing & Brand Strategy',
		tagline: 'Strategic Brand Positioning & Narrative Architecture',
		body: 'Helping growing businesses and established organizations build brands that command trust and drive sustained customer demand.',
		deliverables: [
			'Brand positioning & core messaging matrices',
			'Go-to-market campaign roadmaps',
			'Content & communications strategy',
			'Audience segmentation & value proposition design',
		],
		idealFor: 'Founders, SMEs, and corporate marketing teams',
		ctaText: 'Inquire About Consulting',
	},
	{
		icon: '💼',
		name: 'Business & Venture Advisory',
		tagline: 'Concept Validation & Sustainable Growth Strategy',
		body: 'Supporting entrepreneurs as they stress-test business models, sharpen operational frameworks, and scale without losing focus.',
		deliverables: [
			'Venture feasibility & market validation',
			'Business model optimization',
			'Growth strategy & strategic partnerships',
			'Executive pitch & deck refinement',
		],
		idealFor: 'Early-stage entrepreneurs & scaling ventures',
		ctaText: 'Explore Advisory',
	},
	{
		icon: '🎤',
		name: 'Speaking Engagements & Workshops',
		tagline: 'Keynotes, University Lectures & Executive Masterclasses',
		body: 'Dynamic, high-impact talks sharing actionable frameworks on international mobility, brand building, and leadership in transition.',
		deliverables: [
			'Keynote addresses for conferences & summits',
			'University pre-departure & leadership workshops',
			'Corporate retreats & executive masterclasses',
			'Moderation & fireside conversation hosting',
		],
		idealFor: 'Universities, student associations & event organizers',
		ctaText: 'Invite to Speak',
	},
]

const processSteps = [
	{
		title: 'Diagnostic & Intake',
		description: 'We evaluate where you currently stand, identify bottleneck points, and define precise target outcomes.',
	},
	{
		title: 'Tailored Blueprint',
		description: 'You receive an actionable roadmap complete with timelines, decision matrices, and exact execution steps.',
	},
	{
		title: 'Implementation & Review',
		description: 'Ongoing support, iteration, and feedback ensure seamless execution with measurable results.',
	},
]
</script>

<template lang="pug">
div
	section(id="hero" class="pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden relative")
		div(class="container space-y-12")
			div(class="content space-y-6 max-w-4xl")
				div(class="flex items-center gap-2")
					span(class="label-pill") Strategic Advisory & Solutions
					span(class="text-xs text-brand-muted") 4 Core Disciplines
				h1(class="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-brand-black leading-[1.12]") Let's Build #[span(class="font-serif-accent font-normal italic text-stone-500") What's Next.]
				p(class="text-lg sm:text-xl text-brand-muted leading-relaxed max-w-3xl") Tailored consulting, coaching programs, and speaking engagements designed to transform complex challenges into structured success.
			div(class="hero-media pt-4")
				photo-figure(src="/photos/formal-event-group-portrait.jpg" alt="Terrick with colleagues at a formal event" caption="Collaborating with leaders, founders, and academic cohorts" ratio="aspect-16/9 md:aspect-21/9" position="object-[50%_25%]" sizes="sm:100vw md:100vw lg:100vw xl:100vw 2xl:100vw")
	section(id="services-list" class="py-16 lg:py-28 bg-brand-surface-subtle")
		div(class="container space-y-12")
			section-header(title="Practice Areas" headline="Detailed Advisory Offerings" description="Explore how we can work together across student coaching, enterprise brand strategy, and speaking.")
			div(class="grid grid-cols-1 lg:grid-cols-2 gap-8")
				div(v-for="service in services" :key="service.name" class="service-card agency-card flex flex-col justify-between space-y-8")
					div(class="space-y-6")
						div(class="flex items-center justify-between")
							span(class="text-3xl") {{ service.icon }}
						div(class="space-y-2")
							h2(class="font-display text-2xl lg:text-3xl font-bold text-brand-black") {{ service.name }}
							p(class="text-xs font-semibold uppercase tracking-wider text-stone-500") {{ service.tagline }}
						p(class="text-base text-brand-muted leading-relaxed") {{ service.body }}
						div(class="deliverables space-y-2.5 pt-2")
							p(class="text-xs font-bold uppercase tracking-wider text-stone-400") Key Deliverables
							ul(class="space-y-2")
								li(v-for="item in service.deliverables" :key="item" class="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700")
									span(class="size-1.5 rounded-full bg-brand-black shrink-0 mt-1.5")
									span {{ item }}
						div(class="ideal pt-3 border-t border-brand-black/6")
							p(class="text-xs text-brand-muted") #[strong(class="text-brand-black") Ideal for:] {{ service.idealFor }}
					div(class="pt-4")
						NuxtLink(to="/contact" class="btn-primary w-full sm:w-auto text-center")
							span {{ service.ctaText }}
							span →
	section(id="process" class="py-16 lg:py-28")
		div(class="container space-y-12")
			section-header(title="How It Works" headline="A Structured, Repeatable Process" description="From initial alignment to final execution, every engagement follows an intentional pathway." centered)
			div(class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8")
				div(v-for="proc in processSteps" :key="proc.title" class="step-card agency-card space-y-4")
					h3(class="font-display text-2xl font-bold text-brand-black") {{ proc.title }}
					p(class="text-sm sm:text-base text-brand-muted leading-relaxed") {{ proc.description }}
	section(id="cta" class="py-16 lg:py-24 bg-brand-surface-subtle")
		div(class="container")
			div(class="rounded-3xl lg:rounded-4xl bg-brand-surface border border-brand-black/8 p-8 lg:p-14 shadow-sm flex flex-col lg:flex-row lg:items-center justify-between gap-8")
				div(class="space-y-3 max-w-2xl")
					p(class="label-pill") Get Started
					h2(class="font-display text-3xl sm:text-4xl font-bold text-brand-black") Have a specific project in mind?
					p(class="text-base text-brand-muted") Share your timeline, objectives, and scope. I'll get back to you within 24–48 hours.
				NuxtLink(to="/contact" class="btn-primary shrink-0") Start a Conversation
</template>