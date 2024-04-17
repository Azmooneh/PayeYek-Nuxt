<template>
    <section class="mb-4 lg:mb-16 relative z-[1] container">
        <div class="">
            <h3 class="mb-2 text-base sm:text-lg font-medium text-center text-stone-700"> محصولات شرکت آرین دیزل </h3>
            <hr class="w-60 sm:w-96 border-normal mb-6 lg:mb-0 mx-auto" />
            <!-- show all -->
            <div class="flex justify-end">
                <NuxtLink :to="`/l/${slug}/products`"
                    class="text-base font-normal text-normal mr-auto mb-3 hidden lg:inline-block px-2 cursor-pointer">
                    نمایش همه </NuxtLink>
            </div>
        </div>
        <div
            class="flex flex-col gap-4 sm:gap-0 items-center sm:flex-row sm:overflow-auto lg:justify-center lg:overflow-hidden">
            <div v-for="(product, index) in productList.slice(0, 4)" :key="index"
                :class="'pt-2 px-8 w-72 sm:w-96 lg:w-full lg:max-w-[17rem] pb-5 lg:pt-3 items-center flex flex-col rounded-custom mx-auto lg:mx-0 ' + borderStyle + ' ' + (evenOdd == 1 ? 'evenOdd_cards' : 'bg-white')">
                <div class="mb-2 h-52">
                    <img :src="product.image" :alt="product.name" class="object-contain h-full" />
                </div>
                <h3 class="mb-5 font-medium text-xl line-clamp-2 lg:line-clamp-1 text-stone-700 lg:h-[28px]"> {{
                product.name }} </h3>
                <h3 class="mb-6 font-normal text-sm line-clamp-1 text-stone-700 h-5"> مدل: {{ product.model }} </h3>
                <div class="grid grid-cols-2 gap-3 w-56 lg:w-full">
                    <NuxtLink :to="'/l/' + slug + '/products/' + product.slug"
                        class="sameCategoryBtnStyle castegoryBtnfilled rounded-custom col-span-2"> خرید اقساطی </NuxtLink>
                    <NuxtLink :to="'/l/' + slug + '/products/' + product.slug"
                        class="sameCategoryBtnStyle categoryBtnEmpty rounded-custom"> مشخصات </NuxtLink>
                    <NuxtLink :to="'/l/' + slug + '/products/' + product.slug"
                        class="sameCategoryBtnStyle categoryBtnEmpty rounded-custom"> کاتالوگ </NuxtLink>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { NuxtLink } from "#components";
import { useCompanyData, useStyles } from '~/store/index';

export default {
    name: 'Products',
    setup(){
        // const route = useRoute();
        const companyStore = useCompanyData();
        const styleStore = useStyles();
        const productList = ref(companyStore.products);
        const borderStyle = ref("");

        console.log(styleStore.styles);
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