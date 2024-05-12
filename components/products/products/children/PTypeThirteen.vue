<template>
    <section class="mb-4 lg:mb-16 relative z-[1] container">
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-8">
            <div v-for="(product, index) in productList" :key="index"
                :class="'rounded-custom pt-2 px-8 md:px-4 lg:px-8 w-full pb-5 items-center flex flex-col ' + borderStyle + (evenOdd == 1 ? ' evenOdd_cards' : ' bg-white')">
                <NuxtLink :href="'/l/' + landSlug + '/p/' + product.slug" class="mb-1 h-48">
                    <img :src="product.image" :alt="product.name" class="object-contain h-full" />
                </NuxtLink>
                <NuxtLink :href="'/l/' + landSlug + '/p/' + product.slug"
                    class="mb-3 font-medium lg:mb-2 text-lg lg:text-base sm:line-clamp-1 text-stone-700"> {{ product.name }} </NuxtLink>
                <div class="grid grid-cols-2 gap-2 w-56 md:w-full">
                    <NuxtLink :to="'/l/' + landSlug + '/p/' + product.slug"
                        class="sameCategoryBtnStyle bg-transparent border border-normal hover:boder-focus text-normal hover:text-normal rounded-custom"> مشخصات </NuxtLink>
                    <NuxtLink :to="'/l/' + landSlug + '/p/' + product.slug"
                        class="sameCategoryBtnStyle bg-transparent border border-normal hover:boder-focus text-normal hover:text-normal rounded-custom"> کاتالوگ </NuxtLink>
                    <NuxtLink :to="'/l/' + landSlug + '/p/' + product.slug"
                        class="sameCategoryBtnStyle text-white bg-normal hover:bg-focus rounded-custom col-span-2"> فروش اقساطی </NuxtLink>
                </div>
            </div>
        </div>

        <Pagination :landSlug="landSlug" :productPagination="productPagination" @page-change="handlePageChange" v-if="productList.length > 12" />
    </section>
</template>

<script>
import { NuxtLink } from "#components";
import Pagination from "~/components/common/pagination/index.vue";

export default {
    name: 'Product Type Thirteen',
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