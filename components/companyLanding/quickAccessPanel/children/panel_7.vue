<template>
    <section
        class="*:h-20 grid grid-cols-1 md:grid-cols-3 gap-4 md:*:flex-1 rounded-custom *:bg-normal *:rounded-custom *:flex *:items-center text-xl lg:text-2xl font-normal text-white mb-4 md:mb-8 lg:mb-12 container *:px-4 md:*:px-6">
        <NuxtLink :to="`/l/${slug}/p`" class="relative overflow-hidden">
            <p> محصولات </p>
            <Curve />
        </NuxtLink>
        <NuxtLink :to="`/l/${slug}/a?f=sell`"
            class="relative overflow-hidden">
            <p> طرح های ویژه </p>
            <Curve />
        </NuxtLink>
        <NuxtLink :to="`/l/${slug}/a?f=news`"
            class="relative overflow-hidden">
            <p> آخرین اخبار </p>
            <Curve />
        </NuxtLink>
    </section>
</template>

<script>
import { NuxtLink } from "#components";
import { useCompanyData } from '~/store/index';
import Curve from "./Icons/curve.vue";

export default {
    name: '',
    components: {
        Curve,
    },
    setup() {
        const companyStore = useCompanyData();

        return {
            slug: companyStore.companyData.slug
        }
    }
}
</script>