<template>
    <section
        :class="'w-full grid grid-cols-1 rounded-custom overflow-hidden ' + borderStyle">
        <div v-for="(product, index) in productList.slice(0, 3)" :key="index"
             :class="`flex flex-col w-full sm:flex-row sm:items-center lg:pl-14 sm:gap-4 lg:gap-10 xl:gap-16 px-6 pb-6 pt-4 sm:py-6 after:absolute after:content-[''] after:top-0 after:left-0 after:w-full after:h-px after:border-t first:after:hidden after:border-dark-100 relative ` + (evenOdd == 1 ? 'evenOdd_cards ' : 'bg-white ')">
            <NuxtLink :to="'/l/' + slug + '/p/' + product.slug"
                  class="h-[11.5rem] sm:h-32 md:h-36 lg:h-40 sm:mx-0 sm:w-32 md:w-36 lg:w-40 sm:flex-none mx-auto mb-2.5 sm:mb-0">
                <NuxtImg :src="product.image" :alt="product.name" class="object-contain h-full" height="100%"
                         width="100%" format="png" />
            </NuxtLink>
            <div class="mb-4 sm:mb-0 sm:flex-1">
                <NuxtLink :to="'/l/' + slug + '/p/' + product.slug" class="mb-2 font-medium lg:mb-1 text-lg sm:line-clamp-1 text-stone-700"> {{ product.name
                    }}
                </NuxtLink>
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
    name: 'Products Type 9',
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