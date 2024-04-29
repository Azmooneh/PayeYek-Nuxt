<template>
    <section class="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 lg:max-w-[66rem] lg:mx-auto">
        <div v-for="(product, index) in productList.slice(0, 4)" :key="index"
             :class="'px-6 gap-2 lg:gap-5 w-full pt-6 pb-10 flex flex-col lg:flex-row lg:items-center rounded-custom ' + borderStyle + (evenOdd == 1 ? ' evenOdd_cards ' : ' bg-white ')">
            <NuxtLink :to="'/l/' + slug + '/p/' + product.slug" class="aspect-square md:flex-none lg:w-40">
                <NuxtImg :src="product.image" :alt="product.name" class="object-contain h-full" height="100%"
                         width="100%" format="png"/>
            </NuxtLink>
            <div class="flex flex-col flex-1 gap-4">
                <NuxtLink :to="'/l/' + slug + '/p/' + product.slug"
                          class="mb-1.5 font-medium lg:mb-1 text-lg text-center lg:text-right sm:line-clamp-1 text-stone-700">
                    {{ product.name
                    }}
                </NuxtLink>
                <div class="grid w-full grid-cols-2 gap-2 mx-auto lg:mx-0 max-w-72">
                    <NuxtLink :to="'/l/' + slug + '/p/' + product.slug"
                              class="sameCategoryBtnStyle bg-white border text-normal border-normal hover:border-focus rounded-custom">
                        مشخصات
                    </NuxtLink>
                    <NuxtLink :to="'/l/' + slug + '/p/' + product.slug"
                              class="sameCategoryBtnStyle bg-white border text-normal border-normal hover:border-focus rounded-custom">
                        کاتالوگ
                    </NuxtLink>
                    <NuxtLink :to="'/l/' + slug + '/p/' + product.slug"
                              class="col-span-full sameCategoryBtnStyle text-white bg-normal hover:bg-focus rounded-custom">
                        فروش اقساطی
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
    name: 'Products Type 15',
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