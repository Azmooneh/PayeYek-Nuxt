<template>
    <section
        :class="'w-full grid grid-cols-1 rounded-custom overflow-hidden sm:border-0 sm:gap-4 ' + borderStyle">
        <div v-for="(product, index) in productList.slice(0, 4)" :key="index"
             :class="`flex flex-col w-full sm:flex-row sm:items-center lg:pl-14 sm:gap-4 lg:gap-10 xl:gap-16 px-6 sm:pr-10 pb-6 pt-4 sm:py-6 after:absolute after:content-[''] after:top-0 after:left-[5%] after:w-[90%] after:h-px after:border-t first:after:hidden after:border-stone-400 sm:after:hidden relative before:bg-normal before:absolute before:content-[''] before:top-0 before:right-0 before:w-4 before:hidden sm:before:block before:h-full overflow-hidden sm:rounded-custom border-0 sm:border drop-shadow-none ` + borderStyle + ' ' + (evenOdd == 1 ? 'evenOdd_cards ' : 'bg-white ')">
            <NuxtLink :to="'/l/' + slug + '/p/' + product.slug"
                  class="h-[11.5rem] sm:h-32 md:h-36 lg:h-40 sm:mx-0 sm:w-32 md:w-36 lg:w-40 sm:flex-none mx-auto mb-2.5 sm:mb-0">
                <NuxtImg :src="product.image" :alt="product.name" class="object-contain h-full" height="100%"
                         width="100%" format="png" />
            </NuxtLink>
            <div class="mb-4 sm:mb-0 sm:flex-1">
                <NuxtLink :to="'/l/' + slug + '/p/' + product.slug" class="mb-2 sm:gap-4 font-medium lg:mb-1 text-lg text-stone-700"> {{ product.name }} </NuxtLink>
                <NuxtLink :to="'/l/' + slug + '/p/' + product.slug"
                      class="text-sm leading-6 text-justify text-stone-700  font-medium line-clamp-2">
                    {{ product.description }}
                </NuxtLink>
            </div>
            <div class="flex flex-col items-center gap-2 w-56 mx-auto sm:mx-0">
                <NuxtLink :to="'/l/' + slug + '/p/' + product.slug"
                          class="sameCategoryBtnStyle categoryBtnEmpty rounded-custom"> مشخصات </NuxtLink>
                <NuxtLink :to="'/l/' + slug + '/p/' + product.slug"
                          class="sameCategoryBtnStyle categoryBtnEmpty rounded-custom"> کاتالوگ </NuxtLink>
                <NuxtLink :to="'/l/' + slug + '/p/' + product.slug"
                          class="sameCategoryBtnStyle castegoryBtnfilled rounded-custom"> خرید اقساطی </NuxtLink>
            </div>
        </div>
    </section>
</template>

<script>
import {ref} from 'vue';
import {NuxtLink, NuxtImg} from "#components";
import {useCompanyData, useCommon} from '~/store/index';

export default {
    name: 'Products Type 6',
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