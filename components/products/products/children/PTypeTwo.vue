<template>
    <section class="mb-4 lg:mb-16 relative z-[1] container">
        <div class="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:grid-cols-2 mb-8">
            <div v-for="(product, index) in productList" :key="index"
                :class="'px-8 w-full pt-1 pb-8 items-center flex flex-col rounded-custom ' + borderStyle + ' ' + (evenOdd == 1 ? 'evenOdd_cards ' : 'bg-white ')">
                <NuxtLink :to="'/l/' + landSlug + '/p/' + product.slug" class="h-40 mb-0.5">
                    <img :src="product.image" :alt="product.name" class="object-contain h-full" />
                </NuxtLink>
                <NuxtLink :to="'/l/' + landSlug + '/p/' + product.slug" class="mb-0.5 font-medium sm:mb-1 sm:h-12 text-center text-lg sm:text-base lg:text-lg lg:h-auto lg:line-clamp-1 text-stone-700"> {{ product.name }}
                </NuxtLink>
                <div class="grid w-56 grid-cols-2 lg:w-full gap-2">
                    <NuxtLink :to="'/l/' + landSlug + '/p/' + product.slug"
                        class="sameCategoryBtnStyle categoryBtnEmpty rounded-custom"> مشخصات </NuxtLink>
                    <NuxtLink :to="'/l/' + landSlug + '/p/' + product.slug"
                        class="sameCategoryBtnStyle categoryBtnEmpty rounded-custom"> کاتالوگ </NuxtLink>
                    <NuxtLink :to="'/l/' + landSlug + '/p/' + product.slug"
                        class="col-span-full sameCategoryBtnStyle castegoryBtnfilled rounded-custom"> فروش اقساطی </NuxtLink>
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
    name: 'Product Type Two',
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
    components: {
        Pagination,
    },
}
</script>