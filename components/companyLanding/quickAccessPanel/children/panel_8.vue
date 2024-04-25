<template>
    <section
        class="grid grid-cols-1 md:grid-cols-3 gap-4 md:*:flex-1 rounded-custom *:rounded-custom *:flex *:items-center text-xl lg:text-2xl xl:text-3xl font-medium text-white mb-4 md:mb-8 lg:mb-12 container">
        <NuxtLink :to="`/l/${slug}/p`"
            class="relative w-full pt-[38%] md:pt-[128%] hover:drop-shadow-[0_4px_4px_rgba(0,0,0,0.2)] lg:hover:drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] hover:bottom-0.5 lg:hover:bottom-1.5 transition-all bottom-0 lg:duration-300 duration-200">
            <NuxtImg src="https://paye1.com/storage/media/land/files/6Hp3dGDeckRkXl4zYQV5mJ8rhPZelaS0YkKBjf0T.webp" alt="محصولات" class="absolute top-0 right-0 w-full h-full rounded-custom" format="webp"/>
            <div class="absolute top-0 left-0 w-full h-full flex items-center">
                <div class="flex_center max-h-28 lg:max-h-32 h-full bg-gradient-to-l from-normal to-black/50 w-full">
                    محصولات </div>
            </div>
        </NuxtLink>
        <NuxtLink :to="`/l/${slug}/a?f=sell`"
            class="relative w-full pt-[38%] md:pt-[128%] hover:drop-shadow-[0_4px_4px_rgba(0,0,0,0.2)] lg:hover:drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] hover:bottom-0.5 lg:hover:bottom-1.5 transition-all bottom-0 lg:duration-300 duration-200">
            <NuxtImg src="https://paye1.com/storage/media/land/files/K8g18Xr5FJJ2e3Ez7Xx92sscY4oYrRtT2x3bFdeJ.webp" alt="طرح های ویژه" class="absolute top-0 right-0 w-full h-full rounded-custom" format="webp"/>
            <div class="absolute top-0 left-0 w-full h-full flex items-center">
                <div class="flex_center max-h-28 lg:max-h-32 h-full bg-gradient-to-l from-normal to-black/50 w-full">
                    طرح
                    های ویژه </div>
            </div>
        </NuxtLink>
        <NuxtLink :to="`/l/${slug}/a?f=news`"
            class="relative w-full pt-[38%] md:pt-[128%] hover:drop-shadow-[0_4px_4px_rgba(0,0,0,0.2)] lg:hover:drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] hover:bottom-0.5 lg:hover:bottom-1.5 transition-all bottom-0 lg:duration-300 duration-200">
            <NuxtImg src="https://paye1.com/storage/media/land/files/8AuGJJ9SqENI5msZ11R6r8YVmT06bosJ8KGmgUwF.webp" alt="آخرین اخبار" class="absolute top-0 right-0 w-full h-full rounded-custom" format="webp"/>
            <div class="absolute top-0 left-0 w-full h-full flex items-center">
                <div class="flex_center max-h-28 lg:max-h-32 h-full bg-gradient-to-l from-normal to-black/50 w-full">
                    آخرین
                    اخبار </div>
            </div>
        </NuxtLink>
    </section>
</template>

<script>
import { NuxtLink, NuxtImg } from "#components";
import { useCompanyData } from '~/store/index';

export default {
    name: '',
    setup() {
        const companyStore = useCompanyData();

        return {
            slug: companyStore.companyData.slug
        }
    }
}
</script>