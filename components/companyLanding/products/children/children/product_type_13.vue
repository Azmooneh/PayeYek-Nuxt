<template>
    <section class="w-full grid grid-cols-1 lg:grid-cols-4 gap-4 sm:grid-cols-2">
        <div v-for="(product, index) in productList.slice(0, 4)" :key="index"
             :class="'rounded-custom pt-2 px-8 w-full pb-5 items-center flex flex-col ' + borderStyle + (evenOdd == 1 ? ' evenOdd_cards' : ' bg-white')">
            <NuxtLink :to="'/l/' + slug + '/p/' + product.slug" class="mb-1 h-48">
                <NuxtImg :src="product.image" :alt="product.name" class="object-contain h-full" height="100%" width="100%" format="png" />
            </NuxtLink>
            <NuxtLink :to="'/l/' + slug + '/p/' + product.slug" class="mb-3 font-medium lg:mb-2 text-lg sm:line-clamp-1 text-stone-700"> {{ product.name }} </NuxtLink>
            <div class="grid grid-cols-2 gap-2 w-56 lg:w-full">
                <NuxtLink :to="'/l/' + slug + '/p/' + product.slug"
                          class="sameCategoryBtnStyle bg-transparent border border-normal hover:boder-focus text-normal hover:text-normal rounded-custom"> مشخصات </NuxtLink>
                <NuxtLink :to="'/l/' + slug + '/p/' + product.slug"
                          class="sameCategoryBtnStyle bg-transparent border border-normal hover:boder-focus text-normal hover:text-normal rounded-custom"> کاتالوگ </NuxtLink>
                <NuxtLink :to="'/l/' + slug + '/p/' + product.slug"
                          class="sameCategoryBtnStyle text-white bg-normal hover:bg-focus rounded-custom col-span-2"> فروش اقساطی </NuxtLink>
            </div>
        </div>
    </section>
</template>

<script>
import {ref} from 'vue';
import {NuxtLink, NuxtImg} from "#components";
import {useCompanyData} from '~/store/index';
import DocumentIcon from "~/components/kit/Icons/Document.vue";

export default {
    name: 'Products Type 13',
    props: {
        slug: String,
        borderStyle: String,
        evenOdd: [String, Number],
    },
    components: {
        DocumentIcon,
    },
    setup() {
        const companyStore = useCompanyData();
        const productList = ref(companyStore.products);

        return {
            productList,
        }
    }
}
</script>