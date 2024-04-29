<template>
    <section class="w-full flex flex-col gap-4 sm:gap-0 items-center sm:flex-row sm:overflow-auto lg:justify-center lg:overflow-hidden">
        <div v-for="(product, index) in productList.slice(0, 3)" :key="index"
             :class="'w-60 py-5 first:pt-0 last:pb-0 items-center flex flex-col border-b border-b-stone-400 last:border-b-0 sm:border-b-0 sm:first:pt-5 sm:last:pb-5 sm:px-10 sm:flex-none sm:w-80 relative before:absolute before:content-[' + '] before:inset-y-10 before:left-0 before:w-px before:bg-[#ccc] last:before:bg-transparent before:hidden sm:before:block ' + (evenOdd == 1 ? ' evenOdd_cards' : ' bg-white')">
            <NuxtLink :to="'/l/' + slug + '/p/' + product.slug" class="mb-2 h-48">
                <NuxtImg :src="product.image" :alt="product.name" class="object-contain h-full" height="100%" width="100%" format="png" />
            </NuxtLink>
            <NuxtLink :to="'/l/' + slug + '/p/' + product.slug" class="mb-5 font-medium text-base sm:text-lg lg:text-xl sm:line-clamp-1 text-stone-700"> {{ product.name }} </NuxtLink>
            <NuxtLink :to="'/l/' + slug + '/p/' + product.slug" class="text-center text-sm font-normal leading-7 mb-3 h-14 line-clamp-2"> {{ product.description }} </NuxtLink>
            <div class="grid grid-cols-5 gap-2 w-56 lg:w-52">
                <NuxtLink :to="'/l/' + slug + '/p/' + product.slug"
                      class="sameCategoryBtnStyle text-white bg-normal hover:bg-focus col-span-5 rounded-b-custom rounded-tl-custom rounded-tr-2xl"> خرید اقساطی </NuxtLink>
                <NuxtLink :to="'/l/' + slug + '/p/' + product.slug"
                      class="sameCategoryBtnStyle border text-normal border-normal hover:border-focus col-span-3 rounded-custom"> مشخصات فنی </NuxtLink>
                <NuxtLink :to="'/l/' + slug + '/p/' + product.slug"
                      class="sameCategoryBtnStyle border text-normal border-normal hover:border-focus col-span-2 rounded-custom"> کاتالوگ </NuxtLink>
            </div>
        </div>
    </section>
</template>

<script>
import { ref } from 'vue';
import { NuxtLink, NuxtImg } from "#components";
import { useCompanyData, useCommon } from '~/store/index';

export default {
    name: 'Products Type 1',
    props: {
        slug: String,
        borderStyle: String,
        evenOdd: [String, Number],
    },
    setup(){
        const companyStore = useCompanyData();
        const layoutStore = useCommon();
        const productList = ref(companyStore.products);
        const slug = ref(layoutStore.footerData.slug);

        return {
            slug,
            productList,
        }
    }
}
</script>