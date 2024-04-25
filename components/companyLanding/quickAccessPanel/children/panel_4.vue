<template>
    <section class="bg-normal h-20 lg:h-28 w-full flex_center mt-[-23px] lg:mt-[-31px] mb-8">
        <section class="container w-full flex_center">
            <NuxtLink :to="`/${slug}/p?f=${category.id}`" v-for="(category, index) in categories" :key="index"
                class="flex_center border-l border-l-white h-8 first:pr-0 last:pl-0 px-3 sm:px-6 lg:px-20 text-white text-sm sm:text-lg lg:text-2xl font-medium last:border-l-0">
                {{ category.title }} </NuxtLink>
        </section>
    </section>
</template>

<script>
import { NuxtLink } from "#components";
import { useCompanyData, useCommon } from '~/store/index';

export default {
    name: '',
    setup() {
        const layoutStore = useCommon();
        const companyStore = useCompanyData();
        return {
            slug: layoutStore.footerData.slug,
            categories: companyStore.categories,
        }
    }
}
</script>