<template>
    <section class="mb-4 lg:mb-16 relative z-[1] container">
        <div
            :class="'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 rounded-custom overflow-hidden gap-px mb-8 ' + borderStyle">
            <div v-for="(product, index) in productList" :key="index"
                :class="'px-8 lg:px-5 xl:px-8 py-5 sm:pb-8 w-full items-center flex flex-col sm:first:rounded-none sm:last:rounded-none shadow-[0px_0px_0px_1px_#d2d2d2] ' + (evenOdd == 1 ? 'evenOdd_cards ' : 'bg-white ')">
                <NuxtLink :to="'/l/' + landSlug + '/p/' + product.slug" class="h-44 mb-2">
                    <img :src="product.image" :alt="product.name" class="object-contain h-full" />
                </NuxtLink>
                <NuxtLink :to="'/l/' + landSlug + '/p/' + product.slug"
                    class="mb-5 font-medium lg:mb-4 text-lg sm:line-clamp-1 text-stone-700"> {{ product.name }}
                </NuxtLink>
                <div class="flex flex-col gap-2 w-56 lg:w-full xl:w-56 mx-auto sm:mx-0">
                    <NuxtLink :to="'/l/' + landSlug + '/p/' + product.slug"
                        class="sameCategoryBtnStyle categoryBtnEmpty rounded-custom"> مشخصات </NuxtLink>
                    <NuxtLink :to="'/l/' + landSlug + '/p/' + product.slug"
                        class="sameCategoryBtnStyle categoryBtnEmpty rounded-custom"> کاتالوگ </NuxtLink>
                    <NuxtLink :to="'/l/' + landSlug + '/p/' + product.slug"
                        class="sameCategoryBtnStyle castegoryBtnfilled rounded-custom"> فروش اقساطی </NuxtLink>
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
    name: 'Product Type Seven',
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