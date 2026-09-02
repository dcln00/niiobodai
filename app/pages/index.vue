<script setup lang="ts">
const title = 'Nii Obodai — Marketing Strategist, Educator & Speaker'
const description =
	'Terrick Nii Obodai Torgbor helps you prepare for opportunities that change your life — study abroad, business and brand strategy, speaking, and digital resources.'

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
		number: '01',
		icon: '🎓',
		name: 'Study Abroad Advisory',
		body: "Moving to a new country is more than securing admission. It's learning how to manage money, understand healthcare, build credit, find housing, and secure internships. Through personalized coaching and Before You Land, I help students arrive ready to succeed.",
		cta: 'Explore Study Abroad',
		path: '/study-abroad',
	},
	{
		number: '02',
		icon: '🚀',
		name: 'Business & Brand Strategy',
		body: "Whether you're launching your first venture, repositioning your brand, or refining marketing strategy, I work with entrepreneurs to transform ideas into sustainable businesses with clear messaging and purposeful growth.",
		cta: 'Explore Consulting',
		path: '/services',
	},
	{
		number: '03',
		icon: '🎤',
		name: 'Speaking & Workshops',
		body: 'I speak at universities, conferences, and leadership events worldwide, delivering practical insights on entrepreneurship, cross-border transitions, and strategic communication.',
		cta: 'Invite Me to Speak',
		path: '/contact',
	},
	{
		number: '04',
		icon: '📚',
		name: 'Digital Toolkits & Guides',
		body: 'Practical guides, budget planners, checklists, and toolkits designed to simplify complex systems and help you make smarter decisions with complete confidence.',
		cta: 'Visit the Store',
		path: '/store',
	},
]

const beforeYouLand = [
	'Understanding US credit scores & banking without hidden fees',
	'Navigating American healthcare & insurance',
	'Housing search, lease signing & roommate etiquette',
	'Building a professional network from scratch',
	'Campus jobs, CPT/OPT regulations & career planning',
	'Smart budgeting & avoiding costly beginner mistakes',
]

interface CommunityPhoto {
	src: string
	alt: string
	caption: string
}

const communityPhotos: CommunityPhoto[] = [
	{
		src: '/photos/awards-night-team-selfie.jpg',
		alt: 'A group of students and staff celebrating together, holding glass awards at an evening ceremony',
		caption: 'Awards ceremony & community celebration',
	},
	{
		src: '/photos/study-group-meeting-selfie.jpg',
		alt: 'Students gathered around a table with laptops during an evening study session',
		caption: 'Late-night graduate study sessions',
	},
	{
		src: '/photos/watch-party-group-photo.jpg',
		alt: 'A group posing in front of a projector screen during a football watch party',
		caption: 'Match day & student fellowship',
	},
]

const resources = [
	{ name: 'Before You Land Survival Guide', tag: 'Guide & PDF', status: 'Available' },
	{ name: 'International Student Budget Planner', tag: 'Spreadsheet', status: 'Coming Soon' },
	{ name: 'Visa Interview Preparation Guide', tag: 'Checklist', status: 'Coming Soon' },
	{ name: 'Apartment Hunting & Lease Checklist', tag: 'Toolkit', status: 'Coming Soon' },
	{ name: 'Building US Credit in 90 Days', tag: 'Playbook', status: 'Coming Soon' },
	{ name: 'Personal Branding & Career Workbook', tag: 'Workbook', status: 'Coming Soon' },
]
</script>

<template lang="pug">
div
	section#hero(class="w-full min-h-screen lg:h-screen grid grid-cols-1 lg:grid-cols-12 items-stretch bg-brand-bg overflow-hidden relative")
		.hero-content(class="lg:col-span-6 xl:col-span-7 flex flex-col justify-center px-6 sm:px-12 lg:px-16 xl:px-24 pt-28 pb-12 lg:py-0 z-10 space-y-6 lg:space-y-8")
			.space-y-4(class="max-w-xl")
				.flex(class="items-center gap-2.5 flex-wrap")
					span(class="label-pill capitalize tracking-normal") Strategic Advisory & Education
					span(class="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full")
						span(class="size-1.5 rounded-full bg-emerald-500 animate-pulse")
						span Available for 2026 Engagements
				h1(class="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-[3.25rem] font-bold tracking-tight text-brand-black leading-[1.12]") Helping People Prepare for Opportunities That #[span(class="font-serif-accent font-normal italic text-stone-500 block sm:inline") Change Their Lives.]
				p(class="text-base text-brand-muted leading-relaxed max-w-lg") Whether you're preparing to study in the United States, build a business, strengthen your brand, or navigate a career transition — I provide clarity, confidence, and practical strategies that work.
				.buttons(class="flex flex-wrap items-center gap-3 pt-2")
					NuxtLink(to="/services" class="btn-primary")
						span Explore Practice Areas
						span →
					NuxtLink(to="/study-abroad" class="btn-outline") Study Abroad Hub
					NuxtLink(to="/store" class="btn-outline") Digital Resources
		.hero-media(class="lg:col-span-6 xl:col-span-5 min-h-95 sm:min-h-115 lg:h-full relative overflow-hidden bg-brand-surface-subtle")
			NuxtImg(src="/photos/portrait-navy-suit-outdoors.jpg" alt="Terrick Nii Obodai Torgbor standing outdoors in a navy suit" sizes="sm:100vw md:100vw lg:50vw xl:50vw 2xl:50vw" format="webp" quality="90" loading="eager" class="size-full object-cover object-[50%_15%]")
	section#who-i-am(class="py-16 lg:py-24 bg-brand-surface-subtle")
		.container
			.grid(class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center")
				.col-photo(class="lg:col-span-5")
					section-header(number="01" title="Who I Am")
					photo-figure(src="/photos/international-festival-smock-portrait.jpg" alt="Terrick holding a microphone in a Ghanaian smock, leading a crowd at an international festival" caption="Hosting the campus international festival" ratio="aspect-4/5" sizes="sm:100vw md:100vw lg:100vw xl:42vw 2xl:42vw")
				.col-bio(class="lg:col-span-7 space-y-6")
					h3(class="font-display text-2xl sm:text-3xl font-bold text-brand-black tracking-tight leading-snug") Hi, I'm Terrick Nii Obodai Torgbor.
					p(class="text-base text-brand-muted leading-relaxed") I'm a marketing strategist, educator, entrepreneur, and speaker passionate about helping people make better decisions before the moment that matters most.
					p(class="text-base text-brand-muted leading-relaxed") I've worked with entrepreneurs building businesses, students preparing for life abroad, organizations shaping their brands, and professionals navigating career transitions.
					blockquote(class="rounded-3xl bg-white border border-brand-black/6 p-8 lg:p-10")
						p(class="font-serif-accent text-xl sm:text-2xl text-brand-black italic leading-snug") "Preparation creates confidence. Confidence creates opportunity."
						p(class="text-xs uppercase tracking-widest font-semibold text-brand-muted pt-4 font-mono") Core Operating Principle
					p(class="text-base text-brand-muted leading-relaxed") That's why I dedicate my work to creating practical education, strategic guidance, and resources that help people thrive — not just react.
	section#how-i-can-help(class="py-16 lg:py-28")
		.container(class="space-y-8")
			section-header(number="02" title="Practice Areas" headline="Strategic Support Built for High-Stakes Moments" description="Every offering is engineered to eliminate guesswork and replace anxiety with clear execution.")
			.cards(class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8")
				.service-card(v-for="service in services" :key="service.name" class="agency-card flex flex-col justify-between group")
					.space-y-6
						.flex(class="items-center justify-between")
							span(class="text-3xl") {{ service.icon }}
							span(class="font-mono text-xs font-semibold text-brand-muted px-3 py-1 rounded-full bg-brand-surface-subtle border border-brand-black/6") {{ service.number }}
						h3(class="font-display text-2xl font-bold text-brand-black group-hover:text-stone-700 transition-colors") {{ service.name }}
						p(class="text-base text-brand-muted leading-relaxed") {{ service.body }}
					.pt-8
						NuxtLink(:to="service.path" class="btn-ghost group-hover:translate-x-1 duration-200")
							span {{ service.cta }}
							span →
	section#before-you-land(class="py-16 lg:py-24 bg-brand-surface-subtle")
		.container
			div(class="rounded-3xl lg:rounded-4xl bg-brand-surface border border-brand-black/8 p-8 lg:p-14 shadow-[0_4px_30px_rgba(23,22,21,0.04)] overflow-hidden")
				.grid(class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center")
					.spotlight-text(class="lg:col-span-7 space-y-6")
						section-header(number="03" title="Featured Initiative" headline="Because success in America begins before your flight.")
						p(class="text-base text-brand-muted leading-relaxed") Every semester, thousands of international students arrive in the United States academically prepared — but completely unprepared for everyday life.
						.points(class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2")
							.point-item(v-for="point in beforeYouLand" :key="point" class="flex items-start gap-2.5 p-3 rounded-2xl bg-brand-surface-subtle border border-brand-black/5")
								span(class="size-2 rounded-full bg-brand-black shrink-0 mt-1.5")
								span(class="text-xs sm:text-sm text-stone-700 leading-snug font-medium") {{ point }}
						p(class="text-base text-brand-muted") That's why I created #[strong(class="text-brand-black") Before You Land] — practical video series and guides designed to help students arrive informed and ready.
						.pt-2
							NuxtLink(to="/study-abroad" class="btn-primary")
								span Watch the Series & Learn More
								span →
					.spotlight-media(class="lg:col-span-5 space-y-4")
						photo-figure(src="/photos/international-festival-dancing.jpg" alt="Students dancing together beneath rows of national flags at an international festival" caption="Campus international student fellowship" ratio="aspect-4/3" sizes="sm:100vw md:100vw lg:100vw xl:42vw 2xl:42vw")
	section#resources(class="py-16 lg:py-28 bg-brand-bg")
		.container(class="space-y-8")
			.flex(class="flex-col md:flex-row md:items-end justify-between gap-6")
				section-header(number="04" title="Digital Toolkits" headline="Learn Once. Benefit for Years." description="Explore practical resources designed to help you take action with confidence.")
				NuxtLink(to="/store" class="btn-outline shrink-0") Browse Full Catalog
			.grid(class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6")
				.resource-card(v-for="resource in resources" :key="resource.name" class="agency-card flex flex-col justify-between space-y-6")
					.space-y-3
						.flex(class="items-center justify-between")
							span(class="label-pill text-[10px]") {{ resource.tag }}
							span(class="text-xs font-semibold px-2.5 py-0.5 rounded-full" :class="resource.status === 'Available' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-stone-100 text-stone-500'") {{ resource.status }}
						h4(class="font-display text-lg font-bold text-brand-black") {{ resource.name }}
					NuxtLink(to="/store" class="btn-ghost text-xs")
						span View Details
						span →
	section#why-different(class="py-16 lg:py-24 bg-brand-surface-subtle")
		.container(class="space-y-8")
			section-header(number="05" title="The Approach" headline="Why This Work Is Different" centered)
			.grid(class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8")
				.pillar-card(class="rounded-3xl bg-brand-surface border border-brand-black/6 p-8 space-y-4 shadow-sm")
					span(class="font-mono text-xs font-bold text-brand-muted uppercase tracking-wider") // 01. Clarity Over Noise
					h3(class="font-display text-xl font-bold text-brand-black") Practical Wisdom, Not Information Overload
					p(class="text-base text-brand-muted leading-relaxed") Information is everywhere; actionable clarity is rare. Everything created is curated to remove confusion and drive immediate action.
				.pillar-card(class="rounded-3xl bg-brand-surface border border-brand-black/6 p-8 space-y-4 shadow-sm")
					span(class="font-mono text-xs font-bold text-brand-muted uppercase tracking-wider") // 02. Lived Experience
					h3(class="font-display text-xl font-bold text-brand-black") Tested in Real Systems & High Stakes
					p(class="text-base text-brand-muted leading-relaxed") Grounded in personal international student experience, graduate training at Brandeis, and strategic consulting with global brands.
				.pillar-card(class="rounded-3xl bg-brand-surface border border-brand-black/6 p-8 space-y-4 shadow-sm")
					span(class="font-mono text-xs font-bold text-brand-muted uppercase tracking-wider") // 03. Compounding Impact
					h3(class="font-display text-xl font-bold text-brand-black") One Decision Changes Tomorrow
					p(class="text-base text-brand-muted leading-relaxed") Preparation builds the confidence required to capture opportunities that redefine career trajectories and organizational growth.
	brand-strip
	section#community(class="py-16 lg:py-28 bg-brand-bg")
		.container(class="space-y-8")
			section-header(number="06" title="In Community" headline="Preparation is easier when you're not doing it alone." description="Study sessions, celebrations, and the ordinary evenings in between — the people you find along the way are part of how you arrive prepared.")
			.grid(class="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 pt-4")
				photo-figure(v-for="photo in communityPhotos" :key="photo.src" :src="photo.src" :alt="photo.alt" :caption="photo.caption" ratio="aspect-4/3" sizes="sm:100vw md:33vw lg:33vw xl:33vw 2xl:33vw")
</template>


