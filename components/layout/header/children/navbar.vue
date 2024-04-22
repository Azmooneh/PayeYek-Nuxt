<template>
    <nav
        :class="'text-stone-700 text-base mb-16 *:h-10 *:px-4 *:rounded-custom *:bg-[#f5f5f5] *:w-full *:flex *:items-center flex-col lg:flex-row lg:items-center lg:*:h-auto lg:*:px-8 lg:*:rounded-none lg:*:w-auto lg:*:bg-transparent lg:mb-0 gap-4 lg:*:border-l lg:*:border-l-[#ccc] lg:gap-0 lg:*:leading-5 ' + classNames">
        <NuxtLink
            class="focus:bg-[#eaeaea] lg:hover:text-stone-900 lg:focus:bg-transparent font-medium lg:first:pr-0 lg:last:pl-0 lg:last:border-l-0"
            :to="`/l/${slug}`"> خانه </NuxtLink>
        <NuxtLink
            class="focus:bg-[#eaeaea] lg:hover:text-stone-900 lg:focus:bg-transparent font-medium lg:first:pr-0 lg:last:pl-0 lg:last:border-l-0"
            :to="`/l/${slug}/products`"> محصولات </NuxtLink>
        <NuxtLink
            class="focus:bg-[#eaeaea] lg:hover:text-stone-900 lg:focus:bg-transparent font-medium lg:first:pr-0 lg:last:pl-0 lg:last:border-l-0"
            :to="`/l/${slug}/sales`"> نمایندگی فروش </NuxtLink>
        <NuxtLink
            class="focus:bg-[#eaeaea] lg:hover:text-stone-900 lg:focus:bg-transparent font-medium lg:first:pr-0 lg:last:pl-0 lg:last:border-l-0"
            :to="`/l/${slug}/products?f=sell`"> اطلاعیه </NuxtLink>
        <NuxtLink
            class="focus:bg-[#eaeaea] lg:hover:text-stone-900 lg:focus:bg-transparent font-medium lg:first:pr-0 lg:last:pl-0 lg:last:border-l-0"
            :to="`/l/${slug}/about`"> درباره ما </NuxtLink>
    </nav>
</template>

<script>
import { useCommon } from '~/store/index';

export default {
    name: 'Navbar',
    props: {
        classNames: String,
    },
    setup() {
        const layoutStore = useCommon();
        const slug = ref(layoutStore.footerData.slug);

        return {
            slug,
        }
    }
}
</script>