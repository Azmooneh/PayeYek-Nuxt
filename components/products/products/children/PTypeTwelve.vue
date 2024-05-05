<template>
    <section class="mb-4 lg:mb-16 relative z-[1] container">
        <div class="grid grid-cols-1 gap-4 mb-8">
            <div v-for="(product, index) in productList" :key="index"
                :class="`flex flex-col w-full sm:flex-row sm:items-center lg:pl-10 sm:gap-4 lg:gap-10 xl:gap-16 px-6 pb-6 pt-4 sm:py-6 rounded-custom after:absolute after:content-[''] after:top-[-7px] after:left-[5%] after:w-[90%] after:h-px after:border-t first:after:hidden after:border-dark-100 relative border-x-4 ` + (evenOdd == 1 ? 'evenOdd_cards ' : 'bg-white ') + borderStyle">
                <NuxtLink :to="'/l/' + landSlug + '/p/' + product.slug"
                    class="aspect-square h-52 sm:h-32 md:h-40 sm:mx-0 sm:flex-none mx-auto mb-2.5 sm:mb-0">
                    <img :src="product.image" :alt="product.name" class="object-contain h-full" />
                </NuxtLink>
                <div class="mb-4 sm:mb-0 sm:flex-1">
                    <NuxtLink :to="'/l/' + landSlug + '/p/' + product.slug"
                        class="mb-4 font-medium sm:mb-1 lg:mb-5 text-lg sm:text-base md:text-lg lg:text-xl sm:line-clamp-1 text-stone-700"> {{ product.name }}
                    </NuxtLink>
                    <NuxtLink :to="'/l/' + landSlug + '/p/' + product.slug"
                        class="text-sm leading-7 sm:mb-2 lg:mb-4 text-justify sm:text-sm lg:text-base sm:font-normal text-stone-700 font-medium line-clamp-2"> {{ product.description }}
                    </NuxtLink>
                    <NuxtLink :to="'/l/' + landSlug + '/p/' + product.slug" class="hidden sm:flex line-clamp-1 text-base sm:text-xs lg:text-sm font-normal text-stone-700"> مدل: {{ product.model }} </NuxtLink>
                </div>
                <div class="grid grid-cols-2 sm:grid-cols-1 gap-2 w-60 sm:w-40 lg:w-48 mx-auto sm:mx-0">
                    <NuxtLink :to="'/l/' + landSlug + '/p/' + product.slug"
                        class="sameCategoryBtnStyle text-base font-semibold categoryBtnEmpty border-x-4 rounded-custom"> مشخصات </NuxtLink>
                    <NuxtLink :to="'/l/' + landSlug + '/p/' + product.slug"
                        class="sameCategoryBtnStyle categoryBtnEmpty border-x-4 rounded-custom"> کاتالوگ </NuxtLink>
                    <NuxtLink :to="'/l/' + landSlug + '/p/' + product.slug"
                        class="sameCategoryBtnStyle text-normal bg-transparent border-y border-x-4 border-normal hover:border-focus rounded-custom col-span-full"> شرایط فروش </NuxtLink>
                </div>
            </div>
        </div>

        <Pagination :landSlug="landSlug" :productPagination="productPagination" @page-change="handlePageChange" />
    </section>
</template>

<script>
import { NuxtLink } from "#components";
import Pagination from "~/components/common/pagination/index.vue";

export default {
    name: 'Product Type Twelve',
    components: {Pagination},
    props: {
        productList: Array,
        landSlug: String,
        borderStyle: String,
        evenOdd: Number,
        productPagination: {
            type: Object,
            default: {},
        },
        handlePageChange: Function,
    },
}
</script>