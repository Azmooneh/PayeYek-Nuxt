<template>
    <section class="w-full grid grid-cols-1 lg:grid-cols-4 gap-4 sm:grid-cols-2">
        <div v-for="(product, index) in productList.slice(0, 4)" :key="index"
             :class="'px-8 w-full pt-1 pb-8 items-center flex flex-col rounded-custom ' + borderStyle + ' ' + (evenOdd == 1 ? 'evenOdd_cards ' : 'bg-white ')">
            <NuxtLink :to="'/l/' + slug + '/p/' + product.slug" class="h-32 mb-0.5">
                <NuxtImg :src="product.image" :alt="product.name" class="object-contain h-full" height="100%" width="100%" format="png"/>
            </NuxtLink>
            <NuxtLink :to="'/l/' + slug + '/p/' + product.slug"
                  class="mb-0.5 font-medium lg:mb-1 text-lg sm:line-clamp-1 text-stone-700"> {{ product.name }}
            </NuxtLink>
            <div class="grid w-56 grid-cols-2 lg:w-52 gap-2">
                <NuxtLink :to="'/l/' + slug + '/p/' + product.slug"
                      class="sameCategoryBtnStyle categoryBtnEmpty rounded-custom"> مشخصات </NuxtLink>
                <NuxtLink :to="'/l/' + slug + '/p/' + product.slug"
                      class="sameCategoryBtnStyle categoryBtnEmpty rounded-custom"> کاتالوگ </NuxtLink>
                <NuxtLink :to="'/l/' + slug + '/p/' + product.slug"
                      class="col-span-full sameCategoryBtnStyle castegoryBtnfilled rounded-custom"> فروش اقساطی </NuxtLink>
            </div>
        </div>
    </section>
</template>

<script>
import {ref} from 'vue';
import {NuxtLink, NuxtImg} from "#components";
import {useCompanyData} from '~/store/index';

export default {
    name: 'Products Type 2',
    props: {
        slug: String,
        borderStyle: String,
        evenOdd: [String, Number],
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