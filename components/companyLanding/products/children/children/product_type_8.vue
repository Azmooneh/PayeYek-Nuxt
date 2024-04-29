<template>
    <section
        :class="'w-full grid grid-cols-1 lg:grid-cols-3 rounded-custom overflow-hidden ' + borderStyle">
        <div v-for="(product, index) in productList.slice(0, 3)" :key="index"
             :class="'border-b last:border-b-0 lg:border-b-0 lg:border-l border-dark-100 pl-6 pr-8 w-full pt-5 pb-8 lg:last:border-l-0 flex flex-col ' + (evenOdd == 1 ? 'evenOdd_cards ' : 'bg-white ')">
            <NuxtLink :to="'/l/' + slug + '/p/' + product.slug" class="mb-1.5 font-medium lg:mb-1 text-lg sm:line-clamp-1 text-stone-700"> {{ product.name }}
            </NuxtLink>
            <div class="flex items-center justify-between gap-4">
                <NuxtLink :to="'/l/' + slug + '/p/' + product.slug" class="h-32 lg:h-28 xl:h-32">
                    <NuxtImg :src="product.image" :alt="product.name" class="object-contain h-full" height="100%"
                             width="100%" format="png" />
                </NuxtLink>
                <div class="flex flex-col w-56 gap-2 shrink">
                    <NuxtLink :to="'/l/' + slug + '/p/' + product.slug"
                              class="sameCategoryBtnStyle categoryBtnEmpty rounded-custom"> مشخصات </NuxtLink>
                    <NuxtLink :to="'/l/' + slug + '/p/' + product.slug"
                              class="sameCategoryBtnStyle categoryBtnEmpty rounded-custom"> کاتالوگ </NuxtLink>
                    <NuxtLink :to="'/l/' + slug + '/p/' + product.slug"
                              class="sameCategoryBtnStyle castegoryBtnfilled rounded-custom"> فروش اقساطی </NuxtLink>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import {ref} from 'vue';
import {NuxtLink, NuxtImg} from "#components";
import {useCompanyData, useCommon} from '~/store/index';

export default {
    name: 'Products Type 8',
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