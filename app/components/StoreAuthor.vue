<script setup lang="ts">
interface Props {
	compact?: boolean
}

const { compact = false } = defineProps<Props>()

const meta = useMeta()
</script>

<template lang="pug">
.store-author(:class="['flex gap-5', compact ? 'items-center' : 'items-start max-lg:flex-col']")
	.photo(:class="['shrink-0 aspect-3/4 overflow-hidden rounded-lg bg-brand-black', compact ? 'w-16' : 'w-20 lg:w-24']")
		nuxt-img(src="/photos/portrait-navy-suit-outdoors.jpg" :alt="`Portrait of ${meta.person.legalName}`" width="96" height="128" format="webp" quality="80" loading="lazy" class="size-full object-cover object-[50%_20%]")
	.byline(class="space-y-3")
		p(class="text-zinc-400 tracking-tight") Created by #[span(class="text-white") Terrick] — an international student who learned these lessons the hard way, so you don't have to.
		p(v-if="!compact" class="text-zinc-500 tracking-tight") He came through the US graduate system as an international student himself, working out the banking, the housing, the healthcare, and the job search the slow way. This is the guide he wishes someone had handed him at the airport.
		NuxtLink(v-if="!compact" to="/about" class="inline-block text-sm uppercase tracking-tight text-white hover:text-brand-accent duration-300") More About Terrick →
</template>
