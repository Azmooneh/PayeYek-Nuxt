<template>
    <section class="mb-4 lg:mb-16 relative z-[1] container">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:max-w-[66rem] lg:mx-auto mb-8">
            <div v-for="(product, index) in productList" :key="index"
                :class="'px-6 gap-2 lg:gap-5 w-full pt-6 pb-10 flex flex-col lg:flex-row lg:items-center rounded-custom ' + borderStyle + (evenOdd == 1 ? ' evenOdd_cards ' : ' bg-white ')">
                <NuxtLink :to="'/l/' + landSlug + '/p/' + product.slug" class="aspect-square md:flex-none lg:w-40">
                    <img :src="product.image" :alt="product.name" class="object-contain h-full" />
                </NuxtLink>
                <div class="flex flex-col flex-1 gap-4">
                    <NuxtLink :to="'/l/' + landSlug + '/p/' + product.slug"
                        class="mb-1.5 font-medium lg:mb-1 text-lg text-center lg:text-right sm:line-clamp-1 text-stone-700"> {{ product.name }}
                    </NuxtLink>
                    <div class="grid w-full grid-cols-2 gap-2 mx-auto lg:mx-0 max-w-72">
                        <NuxtLink :to="'/l/' + landSlug + '/p/' + product.slug"
                            class="sameCategoryBtnStyle bg-white border text-normal border-normal hover:border-focus rounded-custom"> مشخصات </NuxtLink>
                        <NuxtLink :to="'/l/' + landSlug + '/p/' + product.slug"
                            class="sameCategoryBtnStyle bg-white border text-normal border-normal hover:border-focus rounded-custom"> کاتالوگ </NuxtLink>
                        <NuxtLink :to="'/l/' + landSlug + '/p/' + product.slug"
                            class="col-span-full sameCategoryBtnStyle text-white bg-normal hover:bg-focus rounded-custom"> فروش اقساطی </NuxtLink>
                    </div>
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
    name: 'Product Type Fifteen',
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