<template>
    <section class="mb-4 lg:mb-16 relative z-[1] container">
        <div class="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-0 sm:grid-cols-2">
            <div v-for="(product, index) in productList" :key="index"
                :class="'w-60 py-5 first:pt-0 last:pb-0 items-center flex flex-col border-b border-b-stone-400 last:border-b-0 sm:border-b-0 sm:first:pt-5 sm:last:pb-5 sm:px-4 sm:w-full mx-auto sm:mx-0 relative before:absolute before:left-0 before:inset-y-10 before:hidden before:w-px before:bg-stone-400 sm:before:block last:before:bg-transparent sm:before:[&:nth-child(2n)]:bg-transparent lg:before:[&:nth-child(2n)]:bg-stone-400 lg:before:[&:nth-child(4n)]:bg-transparent after:absolute after:content-[' + '] after:top-0 after:inset-x-6 after:h-px after:bg-stone-400 after:hidden sm:after:[&:nth-of-type(n+3)]:block lg:after:[&:nth-of-type(n+3)]:hidden lg:after:[&:nth-of-type(n+5)]:block ' + borderStyle + (evenOdd == 1 ? ' evenOdd_cards' : ' bg-white')">
                <NuxtLink :to="'/l/' + landSlug + '/p/' + product.slug" class="mb-2 h-48">
                    <img :src="product.image" :alt="product.name" class="object-contain h-full" />
                </NuxtLink>
                <NuxtLink :to="'/l/' + landSlug + '/p/' + product.slug" class="mb-5 font-medium text-base sm:text-lg lg:text-xl sm:line-clamp-1 text-stone-700"> {{ product.name }} </NuxtLink>
                <NuxtLink :to="'/l/' + landSlug + '/p/' + product.slug" class="text-center text-sm font-normal leading-7 mb-3 h-14 line-clamp-2"> {{ product.description }} </NuxtLink>
                <div class="grid grid-cols-5 gap-2 w-56 lg:w-52">
                    <NuxtLink :to="'/l/' + landSlug + '/p/' + product.slug"
                        class="sameCategoryBtnStyle text-white bg-normal hover:bg-focus col-span-5 rounded-b-custom rounded-tl-custom rounded-tr-2xl"> خرید اقساطی </NuxtLink>
                    <NuxtLink :to="'/l/' + landSlug + '/p/' + product.slug"
                        class="sameCategoryBtnStyle border text-normal border-normal hover:border-focus col-span-3 rounded-custom"> مشخصات فنی </NuxtLink>
                    <NuxtLink :to="'/l/' + landSlug + '/p/' + product.slug"
                        class="sameCategoryBtnStyle border text-normal border-normal hover:border-focus col-span-2 rounded-custom"> کاتالوگ </NuxtLink>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { NuxtLink } from "#components";

export default {
    name: 'Producy Type One',
    props: {
        productList: Array,
        landSlug: String,
        borderStyle: String,
        evenOdd: Number,
    },
}
</script>