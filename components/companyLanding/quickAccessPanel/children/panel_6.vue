<template>
    <section
        class="*:h-20 sm:*:h-32 flex flex-col md:flex-row items-center md:*:flex-1 *:justify-center rounded-custom bg-stone-200 *:flex *:items-center text-xl md:text-2xl font-normal lg:font-medium text-stone-700 mb-4 md:mb-8 lg:mb-12 container">
        <NuxtLink :to="`/l/${slug}/p`"
            class="relative before:bottom-0 before:left-1/2 before:w-32 before:-translate-x-1/2 before:h-px before:bg-stone-400 before:absolute before:content-[''] md:before:left-0 md:before:bottom-1/2 md:before:w-px md:before:h-14 md:before:translate-x-0 md:before:translate-y-1/2">
            <p> دسته بندی محصولات </p>
        </NuxtLink>
        <NuxtLink :to="`/l/${slug}/a?f=sell`"
            class="relative before:bottom-0 before:left-1/2 before:w-32 before:-translate-x-1/2 before:h-px before:bg-stone-400 before:absolute before:content-[''] md:before:left-0 md:before:bottom-1/2 md:before:w-px md:before:h-14 md:before:translate-x-0 md:before:translate-y-1/2">
            <p> طرح های ویژه </p>
        </NuxtLink>
        <NuxtLink :to="`/l/${slug}/a?f=news`">
            <p> آخرین اخبار </p>
        </NuxtLink>
    </section>
</template>

<script>
import { NuxtLink } from "#components";
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