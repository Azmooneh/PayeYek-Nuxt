<template>
    <section class="mb-4 lg:mb-16 relative z-[1] container">
        <div
            :class="'grid grid-cols-1 md:grid-cols-1 rounded-custom overflow-hidden ' + borderStyle">
            <div v-for="(product, index) in productList" :key="index"
                :class="`flex flex-col w-full sm:flex-row sm:items-center lg:pl-14 sm:gap-4 lg:gap-10 xl:gap-16 px-6 pb-6 pt-4 sm:py-6 after:absolute after:content-[''] after:top-0 after:left-0 after:w-full after:h-px after:border-t first:after:hidden after:border-dark-100 relative ` + (evenOdd == 1 ? 'evenOdd_cards ' : 'bg-white ')">
                <NuxtLink :to="'/l/' + landSlug + '/p/' + product.slug"
                    class="aspect-square h-52 sm:h-32 md:h-40 sm:mx-0 sm:flex-none mx-auto mb-2.5 sm:mb-0">
                    <img :src="product.image" :alt="product.name" class="object-contain h-full" />
                </NuxtLink>
                <div class="mb-4 sm:mb-0 sm:flex-1">
                    <NuxtLink :to="'/l/' + landSlug + '/p/' + product.slug"
                        class="mb-2 font-medium lg:mb-1 text-lg sm:line-clamp-1 text-stone-700"> {{ product.name }}
                    </NuxtLink>
                    <NuxtLink :to="'/l/' + landSlug + '/p/' + product.slug"
                        class="text-sm leading-6 text-justify text-[#818284] font-medium line-clamp-2">
                        {{ product.description }}
                    </NuxtLink>
                </div>
                <div class="flex flex-col items-center gap-2 w-56 sm:w-40 lg:w-56 mx-auto sm:mx-0">
                    <NuxtLink :to="'/l/' + landSlug + '/p/' + product.slug"
                        class="sameCategoryBtnStyle categoryBtnEmpty rounded-custom"> مشخصات </NuxtLink>
                    <NuxtLink :to="'/l/' + landSlug + '/p/' + product.slug"
                        class="sameCategoryBtnStyle categoryBtnEmpty rounded-custom"> کاتالوگ </NuxtLink>
                    <NuxtLink :to="'/l/' + landSlug + '/p/' + product.slug"
                        class="sameCategoryBtnStyle castegoryBtnfilled rounded-custom"> خرید اقساطی </NuxtLink>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { NuxtLink } from "#components";

export default {
    name: 'Producy Type Nine',
    props: {
        productList: Array,
        landSlug: String,
        borderStyle: String,
        evenOdd: Number,
    },
}
</script>