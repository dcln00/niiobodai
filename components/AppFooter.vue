<template lang="pug">
footer(class="pt-20 pb-32 bg-brand-dark")
	.container(class="flex flex-wrap flex-col")
		div(class="w-full lg:w-2/3 mx-auto pb-20")
			p(class="text-2xl lg:text-3xl text-center font-light text-white tracking-tight !leading-relaxed") If you’re looking for strategic marketing solutions and compelling visuals, let’s connect. #[NuxtLink(to="/contact" class="text-brand-accent") Drop me a line] and let’s create something impactful together.
		div(class="w-full space-y-8")
			.socials(class="flex justify-center space-x-4 *:text-white *:text-xl")
				NuxtLink(to="http://www.linkedin.com/in/terrick-nii-obodai-torgbor/" target="_blank")
					svgo-linkedin(class="text-white hover:text-brand-accent")
				NuxtLink(to="https://www.instagram.com/theniiobodai/" target="_blank")
					svgo-instagram(class="text-white hover:text-brand-accent")
			.copyright(class="text-white text-center capitalize text-sm tracking-tight") © 2025 All right reseved
</template>