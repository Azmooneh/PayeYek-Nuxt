<template>
    <section
        :class="'w-full grid grid-cols-1 rounded-custom overflow-hidden ' + borderStyle">
        <div v-for="(product, index) in productList.slice(0, 3)" :key="index"
             :class="'px-6 gap-2 w-full pt-6 pb-10 flex items-center rounded-custom ' + borderStyle + ' ' + (evenOdd == 1 ? 'evenOdd_cards ' : 'bg-white ')">
            <NuxtLink :to="'/l/' + slug + '/p/' + product.slug"
                      class="flex-none min-w-28 h-28 sm:min-w-32 lg:max-w-32 sm:h-32">
                <NuxtImg :src="product.image" :alt="product.name" class="object-contain h-full" height="100%"
                         width="100%" format="png"/>
            </NuxtLink>
            <div class="flex flex-col flex-1 gap-4">
                <NuxtLink :to="'/l/' + slug + '/p/' + product.slug"
                          class="mb-1.5 font-medium lg:mb-1 text-lg sm:line-clamp-1 text-stone-700"> {{ product.name }}
                </NuxtLink>
                <div class="grid w-full grid-cols-2 gap-2 mr-auto max-w-72">
                    <NuxtLink :to="'/l/' + slug + '/p/' + product.slug"
                              class="sameCategoryBtnStyle categoryBtnEmpty rounded-custom"> مشخصات
                    </NuxtLink>
                    <NuxtLink :to="'/l/' + slug + '/p/' + product.slug"
                              class="sameCategoryBtnStyle categoryBtnEmpty rounded-custom"> کاتالوگ
                    </NuxtLink>
                    <NuxtLink :to="'/l/' + slug + '/p/' + product.slug"
                              class="col-span-full sameCategoryBtnStyle castegoryBtnfilled rounded-custom"> فروش اقساطی
                    </NuxtLink>
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
    name: 'Products Type 5',
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