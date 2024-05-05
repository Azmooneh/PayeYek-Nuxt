<template>
    <section class="mb-4 lg:mb-16 relative z-[1] container">
        <div class="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:grid-cols-2 mb-8">
            <div v-for="(product, index) in productList" :key="index"
                :class="'pt-2 px-8 lg:px-6 w-72 sm:w-full pb-5 lg:pt-3 items-center flex flex-col rounded-custom mx-auto lg:mx-0 ' + borderStyle + (evenOdd == 1 ? ' evenOdd_cards' : ' bg-white')">
                <NuxtLink :to="'/l/' + landSlug + '/p/' + product.slug" class="mb-2 h-44 aspect-square">
                    <img :src="product.image" :alt="product.name" class="object-contain h-full" />
                </NuxtLink>
                <NuxtLink :to="'/l/' + landSlug + '/p/' + product.slug"
                    class="mb-2 font-medium text-lg sm:h-14 line-clamp-2 lg:line-clamp-1 text-stone-700 lg:h-[28px] text-right"> {{ product.name }} </NuxtLink>
                <NuxtLink :to="'/l/' + landSlug + '/p/' + product.slug"
                    class="mb-4 font-normal text-sm line-clamp-2 text-stone-700 text-justify leading-6 lg:h-12"> {{ product.description }} </NuxtLink>
                <div class="grid grid-cols-2 gap-2 w-56 lg:w-full">
                    <NuxtLink :to="'/l/' + landSlug + '/p/' + product.slug"
                        class="sameCategoryBtnStyle castegoryBtnfilled rounded-custom col-span-2"> خرید اقساطی </NuxtLink>
                    <NuxtLink :to="'/l/' + landSlug + '/p/' + product.slug"
                        class="sameCategoryBtnStyle categoryBtnEmpty rounded-custom"> مشخصات </NuxtLink>
                    <NuxtLink :to="'/l/' + landSlug + '/p/' + product.slug"
                        class="sameCategoryBtnStyle categoryBtnEmpty rounded-custom"> کاتالوگ </NuxtLink>
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
    name: 'Product Type Fourteen',
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