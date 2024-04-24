<template>
    <section class="mb-4 lg:mb-16 relative z-[1] container">
        <div
            :class="'grid grid-cols-1 rounded-custom overflow-hidden sm:rounded-none sm:overflow-visible sm:gap-4 sm:border-0 ' + borderStyle">
            <div v-for="(product, index) in productList" :key="index"
                :class="'px-8 lg:px-5 xl:px-8 py-5 sm:pb-12 w-full items-center flex flex-col sm:first:rounded-none sm:last:rounded-none shadow-[0px_0px_0px_1px_#d2d2d2] ' + (evenOdd == 1 ? 'evenOdd_cards ' : 'bg-white ')">
                <NuxtLink :to="'/l/' + landSlug + '/p/' + product.slug" class="h-32 mb-2">
                    <img :src="product.image" :alt="product.name" class="object-contain h-full" />
                </NuxtLink>
                <NuxtLink :to="'/l/' + landSlug + '/p/' + product.slug"
                    class="mb-5 font-medium lg:mb-4 text-lg sm:line-clamp-1 text-stone-700"> {{ product.name }}
                </NuxtLink>
                <div class="flex flex-col gap-4 w-56 mx-auto sm:mx-0">
                    <NuxtLink :to="'/l/' + landSlug + '/p/' + product.slug"
                        class="sameCategoryBtnStyle categoryBtnEmpty rounded-custom"> مشخصات </NuxtLink>
                    <NuxtLink :to="'/l/' + landSlug + '/p/' + product.slug"
                        class="sameCategoryBtnStyle categoryBtnEmpty rounded-custom"> کاتالوگ </NuxtLink>
                    <NuxtLink :to="'/l/' + landSlug + '/p/' + product.slug"
                        class="sameCategoryBtnStyle castegoryBtnfilled rounded-custom"> فروش اقساطی </NuxtLink>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { NuxtLink } from "#components";

export default {
    name: 'Producy Type Seven',
    props: {
        productList: Array,
        landSlug: String,
        borderStyle: String,
        evenOdd: Number,
    },
}
</script>