<template>
    <div
        class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div v-for="(product, index) in productList.slice(0, 4)" :key="index"
            :class="'pt-2 px-8 w-72 sm:w-full lg:max-w-[17rem] pb-5 lg:pt-3 items-center flex flex-col rounded-custom mx-auto lg:mx-0 ' + borderStyle + ' ' + (evenOdd == 1 ? 'evenOdd_cards' : 'bg-white')">
            <NuxtLink :to="'/l/' + slug + '/products/' + product.slug" class="mb-2 h-52">
                <img :src="product.image" :alt="product.name" class="object-contain h-full" height="100%" />
            </NuxtLink>
            <NuxtLink :to="'/l/' + slug + '/products/' + product.slug" class="mb-5 text-center font-medium text-xl line-clamp-2 lg:line-clamp-1 text-stone-700 lg:h-[28px]"> {{
            product.name }} </NuxtLink>
            <NuxtLink :to="'/l/' + slug + '/products/' + product.slug" class="h-5 mb-6 text-sm font-normal line-clamp-1 text-stone-700"> مدل: {{ product.model }} </NuxtLink>
            <div class="grid w-56 grid-cols-2 gap-3 lg:w-full">
                <NuxtLink :to="'/l/' + slug + '/products/' + product.slug"
                    class="col-span-2 sameCategoryBtnStyle castegoryBtnfilled rounded-custom"> خرید اقساطی </NuxtLink>
                <NuxtLink :to="'/l/' + slug + '/products/' + product.slug"
                    class="sameCategoryBtnStyle categoryBtnEmpty rounded-custom"> مشخصات </NuxtLink>
                <NuxtLink :to="'/l/' + slug + '/products/' + product.slug"
                    class="sameCategoryBtnStyle categoryBtnEmpty rounded-custom"> کاتالوگ </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script>
import { NuxtLink } from "#components";
import { useCompanyData, useStyles } from '~/store/index';

export default {
    name: 'Products',
    props: {
        slug: String,
    },
    setup(){
        // const route = useRoute();
        const companyStore = useCompanyData();
        const styleStore = useStyles();
        const productList = ref(companyStore.products);
        const borderStyle = ref("");

        switch (styleStore.styles.border_type) {
            case 0:
                switch (styleStore.styles.product_card_type) {
                    case 11:
                        borderStyle.value = "";
                        break;
                
                    default:
                        break;
                }
                break;
            case 1:
                switch (styleStore.styles.product_card_type) {
                    case 11:
                        borderStyle.value = "border border-stone-400";
                        break;
                
                    default:
                        break;
                }
                break;
            case 2:
                switch (styleStore.styles.product_card_type) {
                    case 11:
                        borderStyle.value = "drop-shadow-base";
                        break;
                
                    default:
                        break;
                }
                break;
        
            default:
                break;
        }
        

        return {
            slug: companyStore.companyData.slug,
            productList,
            borderStyle,
            evenOdd: styleStore.styles.product_striped,
        }
    }
}
</script>