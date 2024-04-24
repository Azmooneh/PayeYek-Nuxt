<template>
    <section class="mb-4 lg:mb-16 relative z-[1] container">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div v-for="(product, index) in productList" :key="index"
                :class="'px-6 gap-2 w-full pt-6 pb-10 flex items-center rounded-custom ' + borderStyle + ' ' + (evenOdd == 1 ? 'evenOdd_cards ' : 'bg-white ')">
                <NuxtLink :to="'/l/' + landSlug + '/p/' + product.slug" class="flex-none min-w-28 h-28 sm:min-w-32 sm:h-32">
                    <img :src="product.image" :alt="product.name" class="object-contain h-full" />
                </NuxtLink>
                <div class="flex flex-col flex-1 gap-4">
                    <NuxtLink :to="'/l/' + landSlug + '/p/' + product.slug" class="mb-1.5 font-medium lg:mb-1 text-lg sm:line-clamp-1 text-stone-700"> {{ product.name }} </NuxtLink>
                    <div class="grid w-full grid-cols-2 gap-2 mr-auto max-w-72">
                        <NuxtLink :to="'/l/' + landSlug + '/p/' + product.slug"
                            class="sameCategoryBtnStyle categoryBtnEmpty rounded-custom"> مشخصات </NuxtLink>
                        <NuxtLink :to="'/l/' + landSlug + '/p/' + product.slug"
                            class="sameCategoryBtnStyle categoryBtnEmpty rounded-custom"> کاتالوگ </NuxtLink>
                        <NuxtLink :to="'/l/' + landSlug + '/p/' + product.slug"
                            class="col-span-full sameCategoryBtnStyle castegoryBtnfilled rounded-custom"> فروش اقساطی </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { NuxtLink } from "#components";

export default {
    name: 'Producy Type Four',
    props: {
        productList: Array,
        landSlug: String,
        borderStyle: String,
        evenOdd: Number,
    },
}
</script>