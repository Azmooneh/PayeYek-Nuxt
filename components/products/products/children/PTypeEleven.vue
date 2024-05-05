<template>
    <section class="mb-4 lg:mb-16 relative z-[1] container">
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
            <div v-for="(product, index) in productList" :key="index"
                :class="'rounded-custom px-8 w-full pt-5 lg:pt-2 pb-8 items-center flex flex-col ' + borderStyle + (evenOdd == 1 ? ' evenOdd_cards ' : ' bg-white ')">
                <NuxtLink :to="'/l/' + landSlug + '/p/' + product.slug" class="h-56 lg:h-48 aspect-square mb-3 lg:mb-1">
                    <img :src="product.image" :alt="product.name" class="object-contain h-full" />
                </NuxtLink>
                <NuxtLink :to="'/l/' + landSlug + '/p/' + product.slug"
                    class="mb-3 font-medium text-lg line-clamp-1 text-stone-700 text-center lg:mb-1 lg:line-clamp-2 lg:h-14"> {{ product.name }} </NuxtLink>
                <NuxtLink :to="'/l/' + landSlug + '/p/' + product.slug"
                    class="mb-3 font-medium text-base lg:text-sm line-clamp-1 text-stone-700 text-center"> مدل: {{ product.model }}
                </NuxtLink>
                <div class="flex flex-col w-56 lg:w-full xl:w-56 gap-2">
                    <NuxtLink :to="'/l/' + landSlug + '/p/' + product.slug"
                        class="w-full col-span-full h-11 flex_center rounded-custom before:rounded-custom text-white bg-normal hover:bg-focus focus:bg-focus focus:shadow-focus focus:shadow-shadowNormal text-lg font-medium"> فروش اقساطی </NuxtLink>
                    <div class="flex items-center gap-2">
                        <NuxtLink :to="'/l/' + landSlug + '/p/' + product.slug"
                            class="w-full h-11 flex-1 flex_center rounded-custom before:rounded-custom text-normal border border-normal text-lg font-medium">
                        مشخصات </NuxtLink>
                        <NuxtLink :to="'/l/' + landSlug + '/p/' + product.slug"
                            class="size-11 flex-none flex_center rounded-custom before:rounded-custom border border-normal text-lg font-medium">
                            <Document />
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>

        <Pagination :landSlug="landSlug" :productPagination="productPagination" @page-change="handlePageChange" />
    </section>
</template>

<script>
import { NuxtLink } from "#components";
import Document from "./Icons/Document.vue";
import Pagination from "~/components/common/pagination/index.vue";

export default {
    name: 'Producy Type Eleven',
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
        Document,
        Pagination,
    },
}
</script>