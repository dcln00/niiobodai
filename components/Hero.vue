<template lang="pug">
section#jumbotron(class="relative bg-brand-black overflow-hidden")
	//- .photo-wrapper(class="absolute top-0 left-0 w-full h-full -z-[1] after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:z-10 after:bg-black/50 overflow-hidden")
		NuxtImg(src="hero.jpg" alt="hero" class="w-full h-full object-cover object-center grayscale opacity-45")
	div(class="container py-28 lg:py-40 flex items-center relative")
		div(class="text-[60rem] text-neutral-800 absolute font-bold -right-24 -bottom-84 pointer-events-none opacity-50") n
		div(class="w-full lg:w-3/4 p-4 max-lg:px-0 space-y-4")
			h6(class="text-2xl lg:text-2xl text-white tracking-tighter !leading-snug" v-motion-slide-bottom :duration="1000") Hi, I'm Nii Obodai
			h1(class="text-2xl lg:text-5xl text-white tracking-tighter !leading-snug" v-motion-slide-bottom :delay="200" :duration="1000") A #[span(class="text-brand-accent font-bold") Marketing Consultant and Photographer] passionate about helping brands tell their best stories.
			//- p(class="text-neutral-500 leading-relaxed w-full lg:w-3/4" v-motion-slide-bottom :delay="200") I craft strategic marketing solutions and visual content that drive engagement and elevate brand identity. From brand development and social media strategy to high-impact photography, I take projects from concept to execution, ensuring seamless workflow and measurable results. I’ve worked with businesses, creatives, and organizations to build brands, launch campaigns, and capture compelling visuals—and I’d love to work with you.
</template>