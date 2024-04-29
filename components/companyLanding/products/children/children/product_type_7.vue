<template>
    <section
        :class="'w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 rounded-custom overflow-hidden ' + borderStyle">
        <div v-for="(product, index) in productList.slice(0, 4)" :key="index"
             :class="'px-8 lg:px-5 xl:px-8 py-5 sm:pb-12 w-full items-center flex flex-col sm:first:rounded-none sm:last:rounded-none shadow-[0px_0px_0px_1px_#d2d2d2] ' + (evenOdd == 1 ? 'evenOdd_cards ' : 'bg-white ')">
            <NuxtLink :to="'/l/' + slug + '/p/' + product.slug" class="h-32 mb-2">
                <NuxtImg :src="product.image" :alt="product.name" class="object-contain h-full" height="100%"
                         width="100%" format="png"/>
            </NuxtLink>
            <NuxtLink :to="'/l/' + slug + '/p/' + product.slug"
                      class="mb-5 font-medium lg:mb-4 text-lg sm:line-clamp-1 text-stone-700"> {{ product.name }}
            </NuxtLink>
            <div class="flex flex-col gap-4 w-56 mx-auto sm:mx-0">
                <NuxtLink :to="'/l/' + slug + '/p/' + product.slug"
                          class="sameCategoryBtnStyle categoryBtnEmpty rounded-custom"> مشخصات
                </NuxtLink>
                <NuxtLink :to="'/l/' + slug + '/p/' + product.slug"
                          class="sameCategoryBtnStyle categoryBtnEmpty rounded-custom"> کاتالوگ
                </NuxtLink>
                <NuxtLink :to="'/l/' + slug + '/p/' + product.slug"
                          class="sameCategoryBtnStyle castegoryBtnfilled rounded-custom"> فروش اقساطی
                </NuxtLink>
            </div>
        </div>
    </section>
</template>

<script>
import {ref} from 'vue';
import {NuxtLink, NuxtImg} from "#components";
import {useCompanyData, useCommon} from '~/store/index';

export default {
    name: 'Products Type 7',
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