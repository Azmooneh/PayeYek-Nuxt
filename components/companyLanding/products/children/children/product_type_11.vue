<template>
    <div
        class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div v-for="(product, index) in productList.slice(0, 4)" :key="index"
            :class="'pt-2 px-8 w-72 sm:w-full lg:max-w-[17rem] pb-5 lg:pt-3 items-center flex flex-col rounded-custom mx-auto lg:mx-0 ' + borderStyle + ' ' + (evenOdd == 1 ? 'evenOdd_cards' : 'bg-white')">
            <NuxtLink :to="'/l/' + slug + '/p/' + product.slug" class="mb-2 h-52">
                <NuxtImg :src="product.image" :alt="product.name" class="object-contain h-full" height="100%" width="100%" format="png" />
            </NuxtLink>
            <NuxtLink :to="'/l/' + slug + '/p/' + product.slug" class="mb-5 text-center font-medium text-xl line-clamp-2 lg:line-clamp-1 text-stone-700 lg:h-[28px]"> {{
            product.name }} </NuxtLink>
            <NuxtLink :to="'/l/' + slug + '/p/' + product.slug" class="h-5 mb-6 text-sm font-normal line-clamp-1 text-stone-700"> مدل: {{ product.model }} </NuxtLink>
            <div class="grid w-56 grid-cols-2 gap-3 lg:w-full">
                <NuxtLink :to="'/l/' + slug + '/p/' + product.slug"
                    class="col-span-2 sameCategoryBtnStyle castegoryBtnfilled rounded-custom"> خرید اقساطی </NuxtLink>
                <NuxtLink :to="'/l/' + slug + '/p/' + product.slug"
                    class="sameCategoryBtnStyle categoryBtnEmpty rounded-custom"> مشخصات </NuxtLink>
                <NuxtLink :to="'/l/' + slug + '/p/' + product.slug"
                    class="sameCategoryBtnStyle categoryBtnEmpty rounded-custom"> کاتالوگ </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script>
import { NuxtLink, NuxtImg } from "#components";
import {useCompanyData} from '~/store/index';
import {ref} from "vue";

export default {
    name: 'Products Type 11',
    props: {
        slug: String,
        borderStyle: String,
        evenOdd: [String, Number],
    },
    setup(){
        const companyStore = useCompanyData();
        const productList = ref(companyStore.products);



        return {
            productList,
        }
    }
}
</script>