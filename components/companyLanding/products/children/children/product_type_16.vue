<template>
    <section class="w-full grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div v-for="(product, index) in productList.slice(0, 3)" :key="index"
             :class="'pt-2 px-8 w-72 sm:w-96 lg:w-full lg:max-w-full pb-5 lg:pt-3 items-center flex flex-col rounded-custom mx-auto lg:mx-0 ' + borderStyle + ' ' + (evenOdd == 1 ? 'evenOdd_cards' : 'bg-white')">
            <NuxtLink :to="'/l/' + slug + '/p/' + product.slug" class="mb-2 h-52">
                <NuxtImg :src="product.image" :alt="product.name" class="object-contain h-full" height="100%"
                         width="100%" format="png" />
            </NuxtLink>
            <NuxtLink :to="'/l/' + slug + '/p/' + product.slug" class="mb-5 font-medium text-xl line-clamp-2 lg:line-clamp-1 text-stone-700 lg:h-[28px]"> {{ product.name }} </NuxtLink>
            <NuxtLink :to="'/l/' + slug + '/p/' + product.slug" class="mb-6 font-normal text-sm line-clamp-2 text-stone-700 text-justify leading-6 lg:h-12"> {{ product.description }} </NuxtLink>
            <div class="grid grid-cols-2 gap-2 w-56">
                <NuxtLink :to="'/l/' + slug + '/p/' + product.slug"
                          class="sameCategoryBtnStyle castegoryBtnfilled rounded-custom col-span-2"> خرید اقساطی </NuxtLink>
                <NuxtLink :to="'/l/' + slug + '/p/' + product.slug"
                          class="sameCategoryBtnStyle categoryBtnEmpty rounded-custom"> مشخصات </NuxtLink>
                <NuxtLink :to="'/l/' + slug + '/p/' + product.slug"
                          class="sameCategoryBtnStyle categoryBtnEmpty rounded-custom"> کاتالوگ </NuxtLink>
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
    name: 'Products Type 16',
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