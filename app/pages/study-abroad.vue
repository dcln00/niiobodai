<script setup lang="ts">
const title = 'Study Abroad Advisory — Nii Obodai'
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
	{ category: 'Pre-Departure', title: 'Pre-Departure Strategy & Timeline', desc: 'Custom checklists and milestone roadmap from visa approval to arrival.' },
	{ category: 'Immigration', title: 'Visa Interview Preparation', desc: 'Mock interviews, document structuring, and confident articulation.' },
	{ category: 'Finances', title: 'Financial Readiness & Budgeting', desc: 'Tuition planning, international wire transfers, and living cost models.' },
	{ category: 'Logistics', title: 'Housing & Roommate Guidance', desc: 'Off-campus leases, landlord background checks, and utilities setup.' },
	{ category: 'Finances', title: 'US Banking & Credit Score Building', desc: 'Fee-free student accounts, SSN/ITIN rules, and credit card strategies.' },
	{ category: 'Healthcare', title: 'Healthcare & Insurance Navigation', desc: 'Understanding deductibles, campus clinics, and navigating urgent care.' },
	{ category: 'Mobility', title: 'Transportation & Driver\'s License', desc: 'State DMV procedures, public transit passes, and car purchase guidelines.' },
	{ category: 'Professional', title: 'US Resume & LinkedIn Optimization', desc: 'Tailoring academic CVs to American corporate and research standards.' },
	{ category: 'Career', title: 'Internship & Job Search Strategies', desc: 'Networking on campus, career fairs, and direct outreach playbooks.' },
	{ category: 'Immigration', title: 'OPT & STEM OPT Regulations', desc: 'Understanding work authorization timelines and compliance rules.' },
	{ category: 'Strategy', title: 'Long-term Career & Post-Grad Path', desc: 'Strategic alignment between coursework, internships, and sponsorship.' },
	{ category: 'Wellness', title: 'Cultural Transition & Mental Wellness', desc: 'Managing culture shock, building genuine community, and thriving.' },
]
</script>

<template lang="pug">
div
	section(id="hero" class="pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden relative")
		div(class="container space-y-12")
			div(class="content space-y-6 max-w-4xl")
				div(class="flex items-center gap-2")
					span(class="label-pill") International Student Advisory
					span(class="text-xs text-brand-muted") Before You Land
				h1(class="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-brand-black leading-[1.12]") Prepare #[span(class="font-serif-accent font-normal italic text-stone-500") Before You Arrive.]
				p(class="text-lg sm:text-xl text-brand-muted leading-relaxed max-w-3xl") Studying in America is more than securing admission. I help international students navigate the unwritten rules of finances, housing, healthcare, credit, and careers with confidence.
				div(class="buttons flex flex-wrap gap-4 pt-2")
					NuxtLink(to="/store" class="btn-primary")
						span Get Survival Guide
						span →
					NuxtLink(to="/contact" class="btn-outline") Book Pre-Departure Coaching
			div(class="hero-media pt-4")
				photo-figure(src="/photos/international-festival-crowd.jpg" alt="Students from many countries gathered beneath rows of national flags at a campus international festival" caption="Campus international student fellowship & orientation" ratio="aspect-16/9 md:aspect-21/9" position="object-[60%_45%]" sizes="sm:100vw md:100vw lg:100vw xl:100vw 2xl:100vw")
	section(id="reality" class="py-16 lg:py-24 bg-brand-surface-subtle")
		div(class="container")
			div(class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center")
				div(class="col-text lg:col-span-7 space-y-6")
					section-header(title="The Opportunity & The Gap" headline="Your degree is only part of the education.")
					div(class="space-y-5 text-base sm:text-lg text-brand-muted leading-relaxed")
						p Studying abroad is one of the most substantial financial and personal investments you will ever make. Yet many students spend months perfecting test scores and university applications, while spending almost no time preparing for real life after landing.
						p The lectures are the part you planned for. Everything around them — the hidden banking fees, the US credit system, healthcare deductibles, lease agreements, campus jobs, and OPT career timelines — is where students face avoidable hurdles.
						p That's the gap I work in. Having arrived in the US as an international graduate student at Brandeis University, I built the playbook I wish someone had handed me at the airport.
				div(class="col-photo lg:col-span-5")
					photo-figure(src="/photos/friends-selfie-under-flags.jpg" alt="Terrick and friends smiling beneath flags" caption="The community you build becomes part of your success" ratio="aspect-4/5" position="object-bottom" sizes="sm:100vw md:100vw lg:100vw xl:42vw 2xl:42vw")
	section(id="classroom" class="py-16 lg:py-24")
		div(class="container")
			div(class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center")
				div(class="col-photo lg:col-span-5")
					photo-figure(src="/photos/classroom-lecture-chalkboard.jpg" alt="Graduate students working on laptops in front of a chalkboard" caption="Graduate classroom & strategy sessions" ratio="aspect-4/5" sizes="sm:100vw md:100vw lg:100vw xl:42vw 2xl:42vw")
				div(class="col-text lg:col-span-7 space-y-6")
					section-header(title="Beyond Academics" headline="Arrive informed, prepared, and ready to lead.")
					p(class="text-base sm:text-lg text-brand-muted leading-relaxed") When you understand the operational mechanics of American society before your flight leaves, you spend less time stressed and more time excelling academically, building meaningful relationships, and securing career opportunities.
					div(class="p-6 rounded-3xl bg-brand-surface border border-brand-black/6 shadow-sm space-y-3")
						p(class="font-serif-accent text-xl text-brand-black italic") "When you remove the friction of basic survival, your true talent and ambition have room to flourish."
						p(class="text-xs font-bold text-stone-400 uppercase tracking-wider") Strategic Readiness Principle
	section(id="pillars" class="py-16 lg:py-28 bg-brand-surface-subtle")
		div(class="container space-y-12")
			section-header(title="Comprehensive Roadmap" headline="12 Areas of Real-World Preparation" description="The complete framework covering every aspect of international student life in the United States." centered)
			div(class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6")
				div(v-for="way in ways" :key="way.title" class="pillar agency-card flex flex-col justify-between space-y-4")
					div(class="space-y-3")
						div(class="flex items-center justify-between")
							span(class="label-pill text-[10px]") {{ way.category }}
						h3(class="font-display text-xl font-bold text-brand-black") {{ way.title }}
						p(class="text-xs sm:text-sm text-brand-muted leading-relaxed") {{ way.desc }}
	section(id="cta" class="py-16 lg:py-24")
		div(class="container")
			div(class="rounded-3xl lg:rounded-4xl bg-brand-surface border border-brand-black/8 p-8 lg:p-14 shadow-sm flex flex-col lg:flex-row lg:items-center justify-between gap-8")
				div(class="space-y-3 max-w-2xl")
					p(class="label-pill") Take Action
					h2(class="font-display text-3xl sm:text-4xl font-bold text-brand-black") Ready to prepare for your US journey?
					p(class="text-base text-brand-muted") Get the Before You Land guide or schedule a personalized 1-on-1 coaching session.
				div(class="flex flex-wrap gap-4")
					NuxtLink(to="/store" class="btn-primary") Get Survival Guide
					NuxtLink(to="/contact" class="btn-outline") Inquire About Coaching
</template>

