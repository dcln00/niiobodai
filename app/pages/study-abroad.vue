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
	{ number: '01', category: 'Pre-Departure', title: 'Pre-Departure Strategy & Timeline', desc: 'Custom checklists and milestone roadmap from visa approval to arrival.' },
	{ number: '02', category: 'Immigration', title: 'Visa Interview Preparation', desc: 'Mock interviews, document structuring, and confident articulation.' },
	{ number: '03', category: 'Finances', title: 'Financial Readiness & Budgeting', desc: 'Tuition planning, international wire transfers, and living cost models.' },
	{ number: '04', category: 'Logistics', title: 'Housing & Roommate Guidance', desc: 'Off-campus leases, landlord background checks, and utilities setup.' },
	{ number: '05', category: 'Finances', title: 'US Banking & Credit Score Building', desc: 'Fee-free student accounts, SSN/ITIN rules, and credit card strategies.' },
	{ number: '06', category: 'Healthcare', title: 'Healthcare & Insurance Navigation', desc: 'Understanding deductibles, campus clinics, and navigating urgent care.' },
	{ number: '07', category: 'Mobility', title: 'Transportation & Driver\'s License', desc: 'State DMV procedures, public transit passes, and car purchase guidelines.' },
	{ number: '08', category: 'Professional', title: 'US Resume & LinkedIn Optimization', desc: 'Tailoring academic CVs to American corporate and research standards.' },
	{ number: '09', category: 'Career', title: 'Internship & Job Search Strategies', desc: 'Networking on campus, career fairs, and direct outreach playbooks.' },
	{ number: '10', category: 'Immigration', title: 'OPT & STEM OPT Regulations', desc: 'Understanding work authorization timelines and compliance rules.' },
	{ number: '11', category: 'Strategy', title: 'Long-term Career & Post-Grad Path', desc: 'Strategic alignment between coursework, internships, and sponsorship.' },
	{ number: '12', category: 'Wellness', title: 'Cultural Transition & Mental Wellness', desc: 'Managing culture shock, building genuine community, and thriving.' },
]
</script>

<template lang="pug">
div
	section#hero(class="pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden relative")
		.container(class="space-y-12")
			.content(class="space-y-6 max-w-4xl")
				.flex(class="items-center gap-2")
					span(class="label-pill") International Student Advisory
					span(class="font-mono text-xs text-brand-muted") // Before You Land
				h1(class="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-brand-black leading-[1.12]") Prepare #[span(class="font-serif-accent font-normal italic text-stone-500") Before You Arrive.]
				p(class="text-lg sm:text-xl text-brand-muted leading-relaxed max-w-3xl") Studying in America is more than securing admission. I help international students navigate the unwritten rules of finances, housing, healthcare, credit, and careers with confidence.
				.buttons(class="flex flex-wrap gap-4 pt-2")
					NuxtLink(to="/store" class="btn-primary")
						span Get Survival Guide
						span →
					NuxtLink(to="/contact" class="btn-outline") Book Pre-Departure Coaching
			.hero-media(class="pt-4")
				photo-figure(src="/photos/international-festival-crowd.jpg" alt="Students from many countries gathered beneath rows of national flags at a campus international festival" caption="Campus international student fellowship & orientation" ratio="aspect-16/9 md:aspect-21/9" position="object-[60%_45%]" sizes="sm:100vw md:100vw lg:100vw xl:100vw 2xl:100vw")
	section#reality(class="py-16 lg:py-24 bg-brand-surface-subtle")
		.container
			.grid(class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center")
				.col-text(class="lg:col-span-7 space-y-6")
					section-header(number="01" title="The Opportunity & The Gap" headline="Your degree is only part of the education.")
					.space-y-5(class="text-base sm:text-lg text-brand-muted leading-relaxed")
						p Studying abroad is one of the most substantial financial and personal investments you will ever make. Yet many students spend months perfecting test scores and university applications, while spending almost no time preparing for real life after landing.
						p The lectures are the part you planned for. Everything around them — the hidden banking fees, the US credit system, healthcare deductibles, lease agreements, campus jobs, and OPT career timelines — is where students face avoidable hurdles.
						p That's the gap I work in. Having arrived in the US as an international graduate student at Brandeis University, I built the playbook I wish someone had handed me at the airport.
				.col-photo(class="lg:col-span-5")
					photo-figure(src="/photos/friends-selfie-under-flags.jpg" alt="Terrick and friends smiling beneath flags" caption="The community you build becomes part of your success" ratio="aspect-4/5" position="object-bottom" sizes="sm:100vw md:100vw lg:100vw xl:42vw 2xl:42vw")
	section#classroom(class="py-16 lg:py-24")
		.container
			.grid(class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center")
				.col-photo(class="lg:col-span-5")
					photo-figure(src="/photos/classroom-lecture-chalkboard.jpg" alt="Graduate students working on laptops in front of a chalkboard" caption="Graduate classroom & strategy sessions" ratio="aspect-4/5" sizes="sm:100vw md:100vw lg:100vw xl:42vw 2xl:42vw")
				.col-text(class="lg:col-span-7 space-y-6")
					section-header(number="02" title="Beyond Academics" headline="Arrive informed, prepared, and ready to lead.")
					p(class="text-base sm:text-lg text-brand-muted leading-relaxed") When you understand the operational mechanics of American society before your flight leaves, you spend less time stressed and more time excelling academically, building meaningful relationships, and securing career opportunities.
					.p-6(class="rounded-3xl bg-brand-surface border border-brand-black/6 shadow-sm space-y-3")
						p(class="font-serif-accent text-xl text-brand-black italic") "When you remove the friction of basic survival, your true talent and ambition have room to flourish."
						p(class="text-xs font-mono font-bold text-stone-400 uppercase tracking-wider") Strategic Readiness Principle
	section#pillars(class="py-16 lg:py-28 bg-brand-surface-subtle")
		.container(class="space-y-12")
			section-header(number="03" title="Comprehensive Roadmap" headline="12 Areas of Real-World Preparation" description="The complete framework covering every aspect of international student life in the United States." centered)
			.grid(class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6")
				.pillar(v-for="way in ways" :key="way.number" class="agency-card flex flex-col justify-between space-y-4")
					.space-y-3
						.flex(class="items-center justify-between")
							span(class="label-pill text-[10px]") {{ way.category }}
							span(class="font-mono text-xs font-bold text-brand-muted") {{ way.number }}
						h3(class="font-display text-xl font-bold text-brand-black") {{ way.title }}
						p(class="text-xs sm:text-sm text-brand-muted leading-relaxed") {{ way.desc }}
	section#cta(class="py-16 lg:py-24")
		.container
			div(class="rounded-3xl lg:rounded-4xl bg-brand-surface border border-brand-black/8 p-8 lg:p-14 shadow-sm flex flex-col lg:flex-row lg:items-center justify-between gap-8")
				.space-y-3(class="max-w-2xl")
					p(class="label-pill") Take Action
					h2(class="font-display text-3xl sm:text-4xl font-bold text-brand-black") Ready to prepare for your US journey?
					p(class="text-base text-brand-muted") Get the Before You Land guide or schedule a personalized 1-on-1 coaching session.
				.flex(class="flex-wrap gap-4")
					NuxtLink(to="/store" class="btn-primary") Get Survival Guide
					NuxtLink(to="/contact" class="btn-outline") Inquire About Coaching
</template>

