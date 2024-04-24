<template>
    <section class="mb-4 lg:mb-16 relative z-[1] container">
        <div
            :class="'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 rounded-custom overflow-hidden ' + borderStyle">
            <div v-for="(product, index) in productList" :key="index"
                :class="'border-b last:border-b-0 border-dark-100 pl-6 pr-8 xl:pr-8 xl:pl-6 sm:px-4 w-full pt-5 pb-8 sm:border-l sm:[&:nth-child(2n)]:border-l-0 lg:[&:nth-child(2n)]:border-l lg:[&:nth-child(3n)]:border-l-0 flex flex-col ' + (evenOdd == 1 ? 'evenOdd_cards ' : 'bg-white ')">
                <NuxtLink :to="'/l/' + landSlug + '/p/' + product.slug"
                    class="mb-1.5 font-medium lg:mb-1 text-lg sm:line-clamp-1 text-stone-700"> {{ product.name }}
                </NuxtLink>
                <div class="flex items-center justify-between gap-4 sm:gap-2 lg:gap-4">
                    <NuxtLink :to="'/l/' + landSlug + '/p/' + product.slug" class="flex-none aspect-square h-40 sm:h-36 lg:h-32 xl:h-40">
                        <img :src="product.image" :alt="product.name" class="object-contain h-full" />
                    </NuxtLink>
                    <div class="flex flex-col w-40 lg:w-36 xl:w-40 gap-2 shrink">
                        <NuxtLink :to="'/l/' + landSlug + '/p/' + product.slug"
                            class="sameCategoryBtnStyle categoryBtnEmpty rounded-custom sm:text-base"> مشخصات </NuxtLink>
                        <NuxtLink :to="'/l/' + landSlug + '/p/' + product.slug"
                            class="sameCategoryBtnStyle categoryBtnEmpty rounded-custom sm:text-base"> کاتالوگ </NuxtLink>
                        <NuxtLink :to="'/l/' + landSlug + '/p/' + product.slug"
                            class="sameCategoryBtnStyle castegoryBtnfilled rounded-custom sm:text-base"> فروش اقساطی </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { NuxtLink } from "#components";

export default {
    name: 'Producy Type Eight',
    props: {
        productList: Array,
        landSlug: String,
        borderStyle: String,
        evenOdd: Number,
    },
}
</script>