<script setup lang="ts">
interface DownloadLink {
	slug: string
	label: string
	url: string
}

const title = 'Your Downloads — Nii Obodai'

useSeoMeta({
	title,
	robots: 'noindex, nofollow',
})

const route = useRoute()
const sessionId = computed(() =>
	typeof route.query.session_id === 'string' ? route.query.session_id : '',
)

const freeFileHref = encodeURI('/products/Before You Land - Checklist (FREE Lead Magnet).pdf')

const { data, error } = await useAsyncData('download-links', async () => {
	if (!sessionId.value) return null
	return await $fetch<{ files: DownloadLink[] }>('/api/download-links', {
		query: { session_id: sessionId.value },
	})
})

const files = computed<DownloadLink[]>(() => data.value?.files ?? [])
</script>

<template lang="pug">
section(id="success" class="pt-32 pb-20 lg:pt-40 lg:pb-32 min-h-screen")
	div(class="container max-w-4xl space-y-8")
		template(v-if="files.length")
			div(class="flex items-center gap-2")
				span(class="size-2 rounded-full bg-emerald-500")
				p(class="label-pill") Payment Confirmed
			h1(class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-black leading-tight") Thank you — your resources are ready.
			p(class="text-base sm:text-lg text-brand-muted leading-relaxed") Download each PDF below. These secure links expire after an hour — if one stops working, simply reopen this page from your receipt link to get fresh ones.
			div(class="downloads rounded-3xl lg:rounded-4xl bg-brand-surface border border-brand-black/8 p-4 lg:p-6 space-y-3 shadow-sm")
				a(v-for="file in files" :key="file.slug" :href="file.url" class="flex items-center justify-between gap-4 rounded-2xl p-5 bg-brand-surface-subtle hover:bg-white border border-transparent hover:border-brand-black/8 transition-all duration-200 group")
					div(class="flex items-center gap-3")
						span(class="text-xl") 📄
						span(class="font-display font-semibold text-base sm:text-lg text-brand-black") {{ file.label }}
					span(class="btn-primary text-xs py-2 px-4 shrink-0 group-hover:scale-102") Download PDF ↓
				a(:href="freeFileHref" download class="flex items-center justify-between gap-4 rounded-2xl p-5 bg-brand-surface-subtle hover:bg-white border border-transparent hover:border-brand-black/8 transition-all duration-200 group")
					div(class="flex items-center gap-3")
						span(class="text-xl") 🎁
						span(class="font-display font-semibold text-base sm:text-lg text-brand-black") Pre-Departure Checklist (Bonus Lead Magnet)
					span(class="btn-outline text-xs py-2 px-4 shrink-0") Download PDF ↓
			div(class="pt-4")
				NuxtLink(to="/" class="btn-ghost")
					span ← Return to Homepage
		template(v-else)
			div(class="card rounded-3xl bg-brand-surface border border-brand-black/8 p-8 lg:p-12 space-y-6 text-center max-w-2xl mx-auto shadow-sm")
				span(class="text-4xl") 🔍
				h1(class="font-display text-3xl font-bold text-brand-black") {{ error ? "We couldn't verify your purchase" : "No active session found" }}
				p(class="text-base text-brand-muted leading-relaxed") We couldn't confirm a completed purchase for this session link. If you've just completed payment, use the access link sent to your receipt email.
				div(class="pt-4")
					NuxtLink(to="/store" class="btn-primary") Back to Store
</template>

