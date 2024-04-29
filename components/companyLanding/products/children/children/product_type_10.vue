<template>
    <section class="w-full grid grid-cols-1 gap-4 lg:grid-cols-4">
        <div v-for="(product, index) in productList.slice(0, 4)" :key="index"
             :class="'rounded-custom px-8 w-full pt-5 pb-8 items-center flex flex-col product_card ' + borderStyle + (evenOdd == 1 ? ' evenOdd_cards ' : ' bg-white ')">
            <NuxtLink :to="'/l/' + slug + '/p/' + product.slug" class="h-56 aspect-square mb-3">
                <NuxtImg :src="product.image" :alt="product.name" class="object-contain h-full" height="100%"
                         width="100%" format="png" />
            </NuxtLink>
            <NuxtLink :to="'/l/' + slug + '/p/' + product.slug" class="mb-3 font-medium text-lg line-clamp-1 text-stone-700 text-center lg:text-xl"> {{ product.name }} </NuxtLink>
            <NuxtLink :to="'/l/' + slug + '/p/' + product.slug" class="mb-3 font-medium text-base line-clamp-1 text-stone-700 text-center"> مدل: {{ product.model }} </NuxtLink>
            <div class="flex flex-col w-56 lg:w-full xl:w-56 gap-3">
                <NuxtLink :to="'/l/' + slug + '/p/' + product.slug" class="w-full col-span-full h-11 flex_center rounded-custom before:rounded-custom text-white bg-normal hover:bg-focus focus:bg-focus focus:shadow-focus focus:shadow-shadowNormal text-lg font-medium"> فروش اقساطی </NuxtLink>
                <div class="flex items-center gap-2">
                    <NuxtLink :to="'/l/' + slug + '/p/' + product.slug" class="w-full h-11 flex-1 flex_center rounded-custom before:rounded-custom text-normal border border-normal text-lg font-medium"> مشخصات </NuxtLink>
                    <NuxtLink :to="'/l/' + slug + '/p/' + product.slug" class="size-11 flex-none flex_center rounded-custom before:rounded-custom border border-normal text-lg font-medium">
                        <DocumentIcon />
                    </NuxtLink>
                </div>
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
    name: 'Products Type 10',
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